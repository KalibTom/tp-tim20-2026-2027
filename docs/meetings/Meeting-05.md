---
title: Meeting 05 - Sprint Review, Dataset Management & Images
sidebar_position: 5
description: Sprint review of Kafka communication, metrics, image registry, dataset management, and pipeline builder, plus decisions on custom images and Conda environments
---

# Meeting 05: Sprint Review, Dataset Management & Images

## Meeting Information

| Detail           | Value                          |
|------------------|--------------------------------|
| **Date**         | November 24, 2026              |
| **Time**         | 12:00                          |
| **Location**     | FIIT STU                       |
| **Meeting Type** | Regular Meeting                |
| **Team Leader**  | Michal Kačinec                 |
| **Note Taker**   | Tomáš Miklovič                 |

## Attendance

| Team Member           | Present |
|-----------------------|---------|
| Michal Kačinec        | ❌      |
| Adam Kubaliak         | ✅      |
| Jakub Fridrich        | ✅      |
| Tomáš Miklovič        | ✅      |
| Adrián Barňák         | ✅      |
| Patrícia Kovalčíková  | ✅      |
| Timotej Jakubov       | ✅      |

**Attendance:** 6/7 present

## Meeting Agenda

- **Sprint Review** - Each member summarised the work done during the sprint and any blockers.
- **Kafka Communication** - The new Kafka update topic and message tracking.
- **Logs & Metrics** - Fixed topic mismatch and JSON error handling.
- **Dev Stack & Deployment** - Subaccount timeout fix and the missing rollback in the deploy pipeline.
- **Image Registry & Custom Images** - How Docker images and Conda environments should be stored.
- **Dataset Management Demo** - Single sample operations, import with preview and validation.
- **Pipeline Builder Demo** - Versioning rules and dynamic tool parameters.
- **Next Sprint & Meeting Schedule** - Priorities and the plan for December and January.

## Meeting Notes

### Sprint Review

The meeting started with a round in which every member described what they did during the sprint. In the previous meeting, more tasks were added so that every member had something to work on. Michal Kačinec (team leader) was absent, so some questions about merged branches could not be answered during the meeting.

### Kafka Communication (T02.1, T02.4)

- A new Kafka topic, **`kafka-update`**, was created. All task update events now go through this single topic.
- It uses the same logic as the existing REST services, which had previously been moved into separate `services`.
- **Message tracking (T02.4):** each message now carries information about its order (related to the run ID). The backend tracks the last received message and checks for **gaps**, i.e. messages that may have been skipped.
- For now, detected gaps are only **written to the log** - no recovery action is taken yet.

### Logs & Metrics (T02.2, T02.3)

- **Topic name mismatch:** when GenFlow was started, it published to a different topic/variable name than the one the backend was listening on, so the data never appeared in GenBoard. The names were aligned and the missing `in`/`out` variants were added.
- **JSON error handling:** when an incoming message contained invalid JSON or JSON in an unexpected format, the error was not raised and the message was silently lost. This case is now handled.
- **Metrics:** in the tests, metrics (including graphs) were always displayed correctly; the problem was observed only in a specific test scenario.
- The supervisors noted that one of the machines might still run an **older version** of the sender, which could explain the inconsistent topic names. They will update it.

:::info Kafka Environment
The Kafka instance had been running continuously for a long time (around half a year), so some issues may come from old topics or state rather than from the code itself.
:::

### Dev Stack & Deployment

- **Subaccount timeout:** in the local dev stack, the subaccount service sometimes did not start because the startup timeout was too short. The timeout was increased in a new branch.
- The supervisors pointed out that **production and local development are configured differently** (separate Docker orchestration, scaling, and CPU limits for production). The fix so far applies only to the dev configuration - the production configuration should be checked for the same problem.
- **Deploy pipeline rollback:** the team noticed that the deploy pipeline does **not perform a rollback**. Other students reported the same. The deployment pipeline previously contained hard-coded names of the old organisation and repositories, which were partially fixed by the supervisors.

### Image Registry & Custom Images (T04.4 - T04.6)

- **T04.4:** the table linking tool versions with images/environments was added. The environment type (Docker, Singularity, Conda, ...) is stored as an **enum**.
- **T04.5 and T04.6** were implemented on the **frontend only**: an image registry view connected to T04.4, and the option to use a custom image in the pipeline builder. The backend part does not exist yet, because T04.4 had not been finished before.
- T04.6 was changed so that it will be a table connecting the tool version, the environment type, and the image/environment reference.

**Decision on how images and environments are stored:**

| Environment type | What is stored |
| :--------------- | :------------- |
| **Docker** (and other images) | A **link to a publicly available image** in a registry (e.g. Docker Hub). A custom image must first be pushed to a public registry and referenced by its link. |
| **Conda** | The **parsed content** of the Conda environment file (JSON/YAML), not a path to the file. |

- A file path is not suitable for Conda: the path can stay the same while the environment's content changes. Storing the parsed content also allows later validation of whether the environment has changed.
- An image link does not have this problem, because a published image does not change.
- The backend must verify that a custom image link is **really publicly available** (e.g. by pulling the image).
- Open questions about the original intention of these tasks will be confirmed with Matej.

### Dataset Management Demo (T05)

- **Single samples (T05.1, T05.2):** adding a new sample, editing it, and deleting it works. The demo was shown locally on the `dev` branch.
- **Import with preview and validation (T05.5 - T05.7):** three frontend tasks were completed. When importing, the user selects a CSV/TSV file, a preview is shown, and every row has a **validation status**. If a field is invalid, the status says which field is wrong and which values are allowed.
- The frontend is **still using mock data / a test database** - connecting it to the backend remains an open problem.
- **Extending an existing dataset (T05.4)** was not visible in the demo. It was unclear whether the feature is missing or got lost while merging into `dev`; this needs to be checked with Michal Kačinec, who merged the branches.
- **Edit dataset metadata (T05.3)** was also not found in the current `dev` branch.

**Feedback from the supervisors:**

- Allow selecting and importing **multiple CSV/TSV files at once** (datasets are often split into several files).
- Make all input fields **the same width**.
- Move the extra value currently shown inside another column into a **separate column**.
- Display fields with a limited set of values (e.g. sample **type**, such as tumour/normal) as **coloured badges**, so the differences between samples are visible at first glance.
- Consider a clearer **upload icon** (e.g. a cloud with an arrow) instead of the current arrows.

### Pipeline Builder Demo (T04)

- The pipeline builder was demonstrated, including global/general settings, the custom image option, and environment selection.
- The supervisors asked whether the dynamic parameter fields discussed at the previous meeting were solved.

**Dynamic tool parameters:**

1. **Parameters mandatory for every tool** (e.g. `resources`).
2. **Parameters mandatory for the specific tool**, defined by the tool itself.
3. **Optional parameters** - added via a **"+" button** with a searchable dropdown of the tool's available options, followed by its value.

**Pipeline versioning:**

- Once a pipeline version (e.g. `v1`) is **published**, it must not be overwritten.
- When copying and editing a published version, it must not be possible to save it again under the same version - a new version has to be created.

**Export / import:**

- A built pipeline can already be **downloaded as JSON**.
- **Uploading** a previously downloaded JSON back into the builder is not implemented yet and will be added.

:::warning Backend Missing
Most of the demonstrated frontend still runs on mock data. The supervisors asked the team to finish the backend so that the next demo shows the features working end to end, not only visually.
:::

:::tip Task Splitting
The pipeline builder was done mostly by one person. The supervisors again asked to split this work - another member should take over the backend part and agree with the frontend developer on how it will work.
:::

### Next Sprint & Meeting Schedule

- The main goal of the next sprint is to **finish the pipeline builder, including the backend**.
- Finish the custom images/environments (table, frontend, and backend, including the public availability check).
- Fix the dataset table issues and connect the dataset frontend to the backend.
- **Next meeting:** in two weeks (around **December 8, 2026**).
- Further meetings in December are uncertain due to the end of the semester. The supervisors proposed to let the team finish the planned work and resume in **mid-January**, before the start of the next semester, so that the work can be properly tested.

## Action Items

| Task | Assignee |
| :--- | :--- |
| Implement recovery for skipped Kafka messages (currently only logged) (T02.4). | Adam Kubaliak |
| Update the older sender version on the machines with inconsistent topic names. | Supervisors |
| Check the production configuration for the same subaccount timeout problem. | Tomáš Miklovič |
| Investigate and fix the missing rollback in the deploy pipeline. | Tomáš Miklovič |
| Implement the backend for the image registry and custom images, including the public availability check (T04.5, T04.6). | Tomáš Miklovič |
| Store Docker images as public links and Conda environments as parsed content. | Image/environment task owners |
| Confirm the intended meaning of the image/environment tasks with Matej. | Patrícia Kovalčíková |
| Finish the pipeline builder backend and split the work with another member. | Adrián Barňák / Assigned team member |
| Implement dynamic tool parameters (mandatory, tool-specific, optional via "+"). | Pipeline builder developers |
| Prevent overwriting published pipeline versions. | Pipeline builder developers |
| Add uploading a pipeline from a JSON file. | Pipeline builder developers |
| Support importing multiple CSV/TSV files at once and extending an existing dataset (T05.4). | Dataset management developers |
| Fix the dataset table (equal field widths, separate column, type badges, upload icon). | Dataset management developers |
| Connect the dataset management frontend to the backend. | Dataset management developers |
| Check whether T05.3 / T05.4 changes were lost during the merge into `dev`. | Michal Kačinec |

## Next Steps

1. **Next Meeting:** around December 8, 2026 (in two weeks), FIIT STU.
2. Finish the pipeline builder end to end, including the backend.
3. Implement the backend for custom images and Conda environments.
4. Connect the dataset management frontend to the backend and apply the supervisors' feedback.
5. Verify the `dev` branch for missing dataset features after the merge.
6. Agree on the meeting schedule for the end of the semester and January.
