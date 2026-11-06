---
title: Meeting 03 - Task Execution & Guidelines
sidebar_position: 3
description: Organizational rules for task management and start of development
---

# Meeting 03: Task Execution & Guidelines

## Meeting Information

| Detail           | Value                          |
|------------------|--------------------------------|
| **Date**         | October 27, 2026               |
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

- **Task Management Organization** - Rules for reporting, ownership, and task prioritization.
- **DevOps Responsibilities** - Setting up the project website and integration testing.
- **Development Kickoff** - Starting work on the assigned tasks (WP1 & WP2).
- **Data Flow Between GenBoard and GenFlow** - Explanation of how IDs and files are handled.
- **Task Implementation Notes** - Guidance for database tasks (migrations, seeding, API).
- **Blockers** - Addressing current obstacles and dependencies.

## Meeting Notes

### Task Management Guidelines

To ensure smooth workflow and clear accountability, we established the following rules:
- **Parallel Work:** Team members can work on multiple tasks simultaneously, as long as they are ordered by their deadlines.
- **Task Planning:** The supervisors prepared the initial task planning. If we finish our tasks earlier, we can start working on further tasks right away.
- **Prioritization:** We should tackle the more difficult tasks first, followed by the easier ones. Task dependencies must also be taken into account.
- **Deadlines:** Deadlines are binding, but negotiable. If we find out that a task cannot be finished on time, the deadline can be moved.
- **Task Ownership:** Every task has an owner. The owner is responsible for the task, oversees it, and reports its status.
- **Reporting:** During meetings, the task owner must present:
    - What was completed.
    - What was not completed.
    - Where they got stuck (if applicable).
- **Representation:** The task owner represents themselves and their work and presents what they managed to accomplish. (It is better for the owner to present rather than the Project Manager).

### DevOps Responsibilities

DevOps has specific tasks moving forward:
- **Docusaurus Website (Task T16):** Setting up the team project website using Docusaurus. *(Note: We will receive the actual domain later).*
- **Integration Testing (Task T17):** Testing the integration with external tools.
- **Cross-functional Support:** Assisting other team members with backend and frontend issues as needed.

### Data Flow: GenBoard and GenFlow

An explanation of how samples and files are identified and processed:

- **Input data:** The processing starts from input data derived from the primary dataset uploaded to GenBoard. Every sample has its own ID, which is used at the start of a run.
- **Starting a sample processing:** In the first step, the sample ID and the tool (stage) ID are known. A combination of the stage ID and the sample ID is sent for processing.
- **Output files:** The result is a list of files that are stored in the DM (data manager). Each file gets its own separate ID, which is then sent to GenFlow.
- **State tracking in GenFlow:** GenFlow stores these IDs and uses them to determine whether a specific file has been completed. In the next stage, it reports that there is a new file which is used in that stage.
- **ID generation:** All ID generation happens in GenBoard. GenBoard sends the IDs back to GenFlow, which stores them and communicates using these IDs, only updating their states. **GenFlow does not generate IDs, GenBoard does.**
- **Current vs. future state:** Communication currently works via REST API. The next step is to rework it to use Kafka.

### Notes on Implementation of Tasks

- **Task group T03 (database):** For tasks involving adding a table:
    - Add the table using **migrations**.
    - Add test data to the table for the case of **seeding**.
    - If relations are needed, ensure the **foreign keys** via migrations.
- **API and endpoints:** Address the API and endpoints as part of the tasks. In cases such as **T03.3**, add the **configurations**.

### Current Status & Blockers

- **Active Development:** We have officially started working on our tasks from the `GenBoard tasks.xlsx` list (focusing on WP1: Preparatory steps and WP2: Pipeline builder).
- **Blocked Task:** Task **T03.2** *(Add handshake process when registering new machine)* is currently marked as **Blocked**. It will be addressed later once dependencies are resolved.
- **Pending Dependencies:** The team project website domain is not yet available and will be provided by the supervisors later.

## Action Items

| Task | Assignee |
| :--- | :--- |
| Begin work on assigned tasks according to the Excel sheet. | All team members |
| Set up the Docusaurus website for the team project (T16). | Tomáš Miklovič |
| Continue studying the codebase and preparing the environment for Kafka/REST changes. | All team members |
| Oversee task progress and prepare status reports for the next meeting. | Task Owners |

## Next Steps

1. **Next Meeting:** November 10, 2026 (Tuesday) - *Note: Moving to a bi-weekly schedule.*
2. Prepare a brief presentation for the next meeting regarding your assigned task(s) (What is done, what is stuck).
3. Continue working on WP1 and WP2 tasks.
4. Await the domain for the team website.
