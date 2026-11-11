---
title: Meeting 04 - Sprint Progress & Pipeline Builder
sidebar_position: 4
description: Review of sprint progress, task statuses, data model decisions, Kafka handshake, and pipeline builder
---

# Meeting 04: Sprint Progress & Pipeline Builder

## Meeting Information

| Detail           | Value                          |
|------------------|--------------------------------|
| **Date**         | November 10, 2026              |
| **Time**         | 12:00                          |
| **Location**     | FIIT STU                       |
| **Meeting Type** | Regular Meeting                |
| **Team Leader**  | Michal Kačinec                 |
| **Note Taker**   | Tomáš Miklovič                 |

## Attendance

| Team Member           | Present |
|-----------------------|---------|
| Michal Kačinec        | ✅      |
| Adam Kubaliak         | ✅      |
| Jakub Fridrich        | ✅      |
| Tomáš Miklovič        | ✅      |
| Adrián Barňák         | ✅      |
| Patrícia Kovalčíková  | ✅      |
| Timotej Jakubov       | ✅      |

**Attendance:** 7/7 present

## Meeting Agenda

- **Sprint Progress Review** - Status of tasks T01, T03, and T05, including open pull requests.
- **Task Status Snapshot** - Current owners, statuses, and planned finish dates from the task list.
- **Data Model Decisions** - Relations between machines, tools, tool versions, GenFlow versions, and pipelines.
- **Kafka & Handshake Process** - How GenFlow machines connect to the message bus.
- **Pipeline Builder** - Backend storage, access rights, GenFlow version selection, and dynamic forms.
- **Pipeline Validation** - Checks to be performed on a pipeline before it can be run.
- **Next Sprint Planning** - Dataset management tasks and workload distribution.
- **Deadlines & Questions** - Upcoming deadlines and questions for the next meeting.

## Meeting Notes

### Task Status Snapshot

Status of the current sprint tasks as of **November 10, 2026**, taken from `GenBoard tasks.xlsx`. E-mail addresses were mapped to team members.

At this point, **T01** was completed, **T02** and **T03** were in progress (owner Adam Kubaliak), **T04** was in progress (owner Michal Kačinec), and **T05** had not started yet (owner Michal Kačinec).

**WP1: Preparatory Steps — T02 GF ⟷ GB Communication** *(In progress, Adam Kubaliak)*

| ID    | Task | Owner | Status | Planned finish |
| :---- | :--- | :---- | :----- | :------------- |
| T02.1 | Change REST API calls about task updates to Kafka messages | Adam Kubaliak | In progress | Nov 15, 2026 |
| T02.2 | Metrics are not saved on the server and displayed in the FE | Patrícia Kovalčíková | Not started | Nov 15, 2026 |
| T02.3 | Logs are not saved on the server and displayed in the FE | Patrícia Kovalčíková | In progress | Nov 15, 2026 |
| T02.4 | Keep track of the latest received message from Kafka to prevent loss of updates during a network failure | Adam Kubaliak | Not started | Nov 15, 2026 |

**WP2: Pipeline Builder — T03 Pipeline Configuration** *(In progress, Adam Kubaliak)*

| ID    | Task | Owner | Status | Planned finish |
| :---- | :--- | :---- | :----- | :------------- |
| T03.1 | Add table for registered machines with GenFlow | Jakub Fridrich | Completed | Nov 8, 2026 |
| T03.2 | Add handshake process when registering a new machine + check which executors are available | Adam Kubaliak | Blocked | Nov 30, 2026 |
| T03.3 | Add table for tool configurations (inputs, outputs, supported args, ...) considering multiple versions | Jakub Fridrich | Completed | Nov 8, 2026 |
| T03.4 | Add table for GenFlow versions connected with tool configurations supported by a specific version | Patrícia Kovalčíková | Completed | Nov 8, 2026 |
| T03.5 | Add table for pipeline versions | Jakub Fridrich | Completed | Nov 8, 2026 |

**WP2: Pipeline Builder — T04 Interactive Pipeline Builder** *(In progress, Michal Kačinec)*

| ID    | Task | Owner | Status | Planned finish |
| :---- | :--- | :---- | :----- | :------------- |
| T04.1 | Implement building editor | Adrián Barňák | Completed | Nov 29, 2026 |
| T04.2 | Add option to load an existing pipeline + create a new version of an existing pipeline | Adrián Barňák | Not started | Nov 29, 2026 |
| T04.3 | Validation of correct topology and logic of the pipeline | Adrián Barňák | In progress | Nov 22, 2026 |
| T04.4 | Add table with connections between tool versions and Docker/Singularity/Podman images + Conda environments | Adrián Barňák | In progress | Nov 15, 2026 |
| T04.5 | Add image/env registry for searching among supported images and environments | Tomáš Miklovič | Not started | Nov 29, 2026 |
| T04.6 | Support custom images, but only if they are already publicly available in a registry | Tomáš Miklovič | Not started | Nov 29, 2026 |
| T04.7 | Assemble config file + samplesheet from the editor | Michal Kačinec | Completed | Nov 29, 2026 |
| T04.8 | Add table for curated pipelines the user can easily use on their dataset | Timotej Jakubov | In progress | Nov 29, 2026 |
| T04.9 | Provide a way for admins to create a curated pipeline available to all users | Michal Kačinec | Completed | Nov 29, 2026 |

**WP3: Dataset Management — T05 Dataset Management** *(Not started, Michal Kačinec)*

| ID    | Task | Owner | Status | Planned finish |
| :---- | :--- | :---- | :----- | :------------- |
| T05.1 | Add single sample | Adrián Barňák | In progress | Nov 24, 2026 |
| T05.2 | Edit + remove single sample | Unassigned | Not started | Nov 24, 2026 |
| T05.3 | Edit dataset metadata (name, disease, tags, ...) | Unassigned | Not started | Nov 24, 2026 |
| T05.4 | Add multiple samples into an existing dataset by importing another CSV/TSV file | Unassigned | Not started | Nov 24, 2026 |
| T05.5 | Before import, show data preview | Unassigned | Not started | Nov 24, 2026 |
| T05.6 | Validate correctness of the data structure | Unassigned | Not started | Nov 24, 2026 |
| T05.7 | Allow modification of multiple samples at once (removing) | Unassigned | Not started | Nov 24, 2026 |

**Later Work Packages**

| Task | Focus | Owner | Status | Planned finish |
| :--- | :---- | :---- | :----- | :------------- |
| T06 | Run management | Unassigned | Not started | Jan 10, 2027 |
| T07 | Run visualisations | Unassigned | Not started | Jan 31, 2027 |
| T08 | Project management | Unassigned | Not started | Jan 31, 2027 |
| T09 | Team management | Unassigned | Not started | Feb 7, 2027 |
| T10 | Organisational management | Unassigned | Not started | Feb 14, 2027 |
| T11 | Unit tests | Unassigned | Not started | Ongoing |
| T12 | Documentation | Unassigned | Not started | Ongoing |
| T13 | Logging | Unassigned | Not started | Ongoing |
| T14 | Regular database backup | Tomáš Miklovič | In progress | Ongoing |
| T15 | Deployment | Tomáš Miklovič | In progress | Ongoing |
| T16 | TP website | Tomáš Miklovič | In progress | Ongoing |
| T17 | Integration tests | Tomáš Miklovič | In progress | Ongoing |
| T18 | Deployment on testing instance | Unassigned | Not started | Mar 1, 2027 |
| T19 | Final debugging | Unassigned | Not started | Mar 1, 2027 |

### Sprint Progress & Pull Requests

The first sprint covered three tasks - T03.1, T03.3, and T03.5 - all completed by **Jakub Fridrich**, plus **T03.4**, completed by **Patrícia Kovalčíková**. For each task, a separate pull request was created describing what was added and changed.

- Some requirements were ambiguous, so certain parts had to be interpreted. For example, T03.1 referred to *registered machines* as being similar to *computer environments*, so the entity was named simply **Machine**.
- The pull requests contain a description of the work done and of the parts that may still change.
- **Seed data has not been created yet** - the table design and fields first need to be approved by the team, as some design decisions may not be acceptable to everyone.
- Entities added so far:
    - **T03.1:** `Machine` (Jakub Fridrich)
    - **T03.3:** `Tool`, `ToolVersion` (Jakub Fridrich)
    - **T03.5:** `Pipeline`, `PipelineVersion` (Jakub Fridrich)
    - **T03.4:** GenFlow versions linked to supported tool versions (Patrícia Kovalčíková)

### Data Model: Machines, Tools, and Versions

- **Machines and organisations:** One organisation can register multiple machines (1:N). Each machine runs a GenFlow instance. In the future, machines should also be able to communicate with each other.
- **Tools:** Tools are global for all users, not bound to an organisation. One tool has multiple versions (1:N).
- **Tool versions and GenFlow versions:** Tool versions must be tied to a specific GenFlow version - a given GenFlow version supports a specific set of tool versions.
- **Many-to-many relation:** A GenFlow version can contain multiple tool blocks and one tool version can be used by multiple GenFlow versions. Patrícia implemented this as a many-to-many relation on the GenFlow version entity created by Jakub, using a join table between GenFlow and Tool.
- **T03.2 (handshake):** Adam Kubaliak is the owner of the handshake task, which is currently still marked as **Blocked**.

:::info Data Model Note
One tool has multiple versions, and those versions are linked to specific GenFlow versions. When building a pipeline, the GenFlow version should therefore determine which tools and tool versions are available.
:::

### Kafka & the GenFlow Handshake

All communication with GenFlow - including starting and stopping a pipeline and connecting a machine - should go through **Kafka** instead of HTTP. This work is split between **T02.1, T02.2, T02.3, and T02.4** (Adam Kubaliak and Patrícia Kovalčíková) and the blocked **T03.2** (Adam Kubaliak).

**Proposed handshake process:**

1. A machine is added in GenBoard.
2. The backend generates an access token.
3. The token is copied from GenBoard and set as an environment variable for GenFlow.
4. GenFlow connects to a Kafka topic prepared specifically for that machine.
5. GenBoard acts as the **producer** and GenFlow as the **listener**; commands are exchanged over the message bus.

**Why Kafka instead of HTTP:**

- **Security:** Compute machines are usually behind firewalls. Opening an HTTP port on an expensive machine to an external system is not acceptable. With Kafka, the machine itself initiates the connection.
- **Reliability:** Commands are not lost when the network fails. For example, a *stop pipeline* command sent over HTTP could disappear, leaving the user thinking the pipeline was stopped.
- **Ordering:** Kafka preserves the order of commands and handles sequence numbers, which would otherwise have to be implemented manually.

Each machine should have its own topic/token. The team is encouraged to propose a better or more secure variant if one exists, but the solution must be secure, functional, and stable.

:::warning Blocked Task
T03.2 was discussed again. The blocker was related to an internal block, and Matej later clarified the remaining issue. The exact details were not fully confirmed during the meeting - verify the current status before closing the task.
:::

### Development Progress

- **Kafka (T02.1, Adam Kubaliak):** The listener and the message have been implemented, but they are **not tested yet**. The *task start* part has not been implemented yet.
- **Refactoring:** Files that mixed REST call logic with Kafka logic were refactored into services so that REST and Kafka can run in parallel.
- **Topics:** Topic design was inspired by the HTTP request bodies used in the existing REST API.
- **Message tracking (T02.4, Adam Kubaliak):** Work on adding a sequence number (integer) and chunking messages has started but is not finished. Buffering notifications and events until the connection recovers is a high-priority requirement.
- **Logs and metrics (T02.2 and T02.3, Patrícia Kovalčíková):** Manually sent logs are displayed correctly, but logs and metrics generated by the simulator do not appear. The frontend currently uses mock data, so the problem is likely in the backend processing or storage. The exact process of storing and displaying logs and metrics should be clarified with the supervisors via Discord.

### Pipeline Builder

**Access rights (T04.1 and T04.9):**

- The new pipeline page is currently accessible only to the super admin.
- It should be accessible to the **organisation admin** as well, not only to the super admin. Super admins create organisations, while organisation admins manage their own organisation.
- The page needs to be reworked so that organisation admins can create pipelines.

**Backend storage (T04.2, Adrián Barňák):**

- Pipelines created in the builder must be stored in the backend, including their versions.
- The pipeline table is needed to run pipelines on Docker.
- The supervisors requested this by **November 20, 2026**; the task list currently plans **November 29, 2026**. The task is noted but not yet in progress.

**Builder functionality:**

- The builder is a visual pipeline editor in which each building block is an entity with its own configuration (T04.1, completed by Adrián Barňák).
- The frontend prototype already renders the individual blocks and validation has been started; the backend data will be connected later.
- **GenFlow version selection:** A pipeline must be built for a specific GenFlow version, because each machine may run a different version. Based on the selected version, the available tools and their configurations should be displayed.
- **Tool version selection:** When adding a block, it should be possible to choose the tool version (with the main version as the default).

**Dynamic forms:**

- Tool configurations do not share a single structure and are stored as **JSON**.
- Only `resources` (memory, threads) are fixed; arguments and other fields vary per tool.
- The form should therefore be generated dynamically by parsing the tool's JSON configuration.

**Related tasks:**

- **T04.4 (Adrián Barňák):** table connecting tool versions with Docker/Singularity/Podman images and Conda environments.
- **T04.5 and T04.6 (Tomáš Miklovič):** image/environment registry and support for public custom images.
- **T04.7 (Michal Kačinec):** assembling the config file and samplesheet from the editor - completed.
- **T04.8 (Timotej Jakubov):** table for curated pipelines.

:::tip Task Splitting
The builder should not be implemented by one person. A colleague should take over the YAML parser (a JSON parser would be preferable), and the remaining work should be split into smaller tasks.
:::

### Pipeline Validation

**T04.3 (Adrián Barňák, in progress)** is the validation component that should check the whole pipeline and list all errors. Planned checks, in order:

1. The pipeline as a whole.
2. Connections between stages.
3. Continuity of stages and detection of cycles - a workflow DAG must be acyclic.
4. Connections and resources of each stage.
5. If the tool catalogue is loaded, also stage/tool versions and their arguments.

Additional rules:

- Validate that all parameters match the selected tool configuration and the topology.
- Pipeline configurations contain supported `inputs` and `outputs`; the next stage must support the outputs of the previous stage.
- The validation should report every problem found, not stop at the first one.

A team member volunteered to take ownership of these validation checks.

### Task Planning & Workload

- The initial sprint contained four tasks (T03.1, T03.3, T03.4, T03.5). The next sprint should be distributed more evenly - the same people worked on the last two sprints while others had little or no work.
- Large tasks (for example, implementing the whole building editor) must be **split into smaller tasks** and reported to the team, so that one person does not implement an entire module.
- Tasks are not equally granular: adding a table is much easier than implementing the whole builder.
- The communication task will be more difficult and pipeline configuration even more so.
- Only **T05.1** (Adrián Barňák) is currently assigned from the dataset tasks; **T05.2 - T05.7 are unassigned** and need to be distributed among members with free capacity.
- If the next sprint becomes too large, its scope will be adjusted at the next meeting.

### Dataset Management (Next Sprint)

The next sprint focuses on dataset management (T05, planned finish **November 24, 2026**):

- **Current workflow:** A dataset is created locally as a TSV/CSV file and uploaded to GenBoard.
- **Goal:** View the uploaded data, edit it directly in GenBoard, save the edited version, and download it.
- **Merge:** Import an additional CSV/TSV file and merge it with the existing dataset (T05.4).
- **Single sample operations:** Create a new sample (T05.1), edit it, or remove a single sample (T05.2).
- **Dataset metadata:** Edit the name, disease, tags, and other metadata (T05.3).
- **Data preview:** Scroll through the uploaded TSV to verify that the correct dataset was uploaded (T05.5).
- **Column validation:** Check that the dataset contains the required columns and report missing, extra, or incorrectly structured columns (T05.6).
- **Cell selection:** Select multiple cells for inspection and delete them (T05.7).
- **Frontend:** A simple Excel-like table supporting adding and editing rows.

More tasks (including *edit dataset metadata*) will be added to the sprint and distributed among members who currently have no work.

### Timeline & Deadlines

- **T02** subtasks are planned for **November 15, 2026**.
- **T04.3** (validation) is planned for **November 22, 2026**; **T04.4** (image/environment table) for **November 15, 2026**; the remaining T04 tasks for **November 29, 2026**.
- **T05** (dataset management) is planned for **November 24, 2026**, the date of the next meeting.
- **T03** is planned for **November 30, 2026**.
- The team project ends around the end of February; TP1 ends around **January 5, 2027**.
- If the tasks are completed earlier, the project can be finalised in December.
- January also contains personal deadlines (research intent, DP0, DP1).
- The team is currently in the third sprint.
- Questions assigned by the supervisors should be prepared by **Friday** and discussed at the next meeting.

## Action Items

| Task | Assignee |
| :--- | :--- |
| Test the Kafka listener and message, and implement the *task start* part (T02.1). | Adam Kubaliak |
| Investigate why simulator logs/metrics are not displayed and clarify the storage process with the supervisors (T02.2, T02.3). | Patrícia Kovalčíková |
| Implement message tracking/sequence numbers to prevent lost updates during network failures (T02.4). | Adam Kubaliak |
| Create seed data for the new tables once the schema is approved (T03.1, T03.3, T03.5). | Jakub Fridrich |
| Create seed data for GenFlow versions and linked tool versions (T03.4). | Patrícia Kovalčíková |
| Verify and unblock the handshake process (T03.2). | Adam Kubaliak |
| Rework the pipeline page so that organisation admins can access it (T04.1/T04.9). | Frontend developers |
| Implement backend storage for pipelines and their versions (T04.2, requested by November 20). | Adrián Barňák |
| Implement the pipeline validation checks (T04.3). | Adrián Barňák |
| Implement the image/environment registry and custom image support (T04.5, T04.6). | Tomáš Miklovič |
| Implement the curated pipelines table (T04.8). | Timotej Jakubov |
| Add GenFlow version selection and dynamic JSON-based forms to the builder. | Frontend developers |
| Implement the YAML/JSON parser as a separate task. | Assigned team member |
| Distribute T05.2 - T05.7 among members with free capacity. | Michal Kačinec / All team members |
| Update the task statuses in `GenBoard tasks.xlsx`. | Task owners |
| Prepare answers to the supervisors' questions by Friday. | All team members |
| Send a screenshot of the pipeline builder to Discord. | Frontend developers |

## Next Steps

1. **Next Meeting:** November 24, 2026 (Tuesday) at 12:00, FIIT STU.
3. Finish and test the Kafka communication, including the *task start* command, by November 15.
5. Deliver backend pipeline storage (requested by November 20) and continue the builder prototype.
6. Distribute dataset management tasks (T05.2 - T05.7) and start implementation before November 24.
7. Clarify open questions about logs/metrics and the handshake task status with the supervisors.
