---
title: Meeting 02 - Task Distribution & Overview
sidebar_position: 2
description: Overview of project tasks, work packages, and initial planning
---

# Meeting 02: Task Distribution & Overview

## Meeting Information

| Detail           | Value                          |
|------------------|--------------------------------|
| **Date**         | October 20, 2026               |
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

- **Task List Distribution** - Reviewing the overall task list (Excel) and Work Packages (WPs).
- **Project Scope & Architecture** - Deep dive into the "As-is vs. To-be" document and the Project Specification.
- **Task Assignment Process** - Understanding individual roles and how tasks will be assigned.
- **Next Steps** - Preparing for the upcoming sprint.

## Meeting Notes

### Project Scope Recap (As-is vs. To-be)

The project consists of five main areas of change. One is a rebuild, and four are completely new features:
1.  **Communication (Rebuild):** Moving from synchronous REST calls to asynchronous **Kafka** events between GenFlow and GenBoard to prevent slow reporting and lost statuses.
2.  **Pipeline Configurations (New):** Users will build pipelines in the browser (visual editor) instead of writing JSON/YAML files by hand. Runs will be started directly from GenBoard.
3.  **Datasets (New):** Moving from flat `.tsv` uploads to a fully editable dataset management system in the browser.
4.  **Projects (New):** Grouping datasets, pipelines, and runs under specific projects (e.g., per study) rather than having flat lists.
5.  **Teams and Access (New):** Expanding from single-user sharing to team-based access rights (view, edit, manage) across projects and datasets.

### Task List & Work Packages (WPs)

We received the comprehensive task list (`GenBoard tasks.xlsx`). The tasks are divided into 8 Work Packages. Everyone needs to review these and prepare to claim tasks based on their roles.

| Work Package | Focus Area | Key Tasks (Examples) |
| :--- | :--- | :--- |
| **WP1** | Preparatory Steps | Code understanding, changing GF <-> GB communication to Kafka. |
| **WP2** | Pipeline Builder | Adding tables for machines/tools, interactive pipeline editor, validation. |
| **WP3** | Dataset Management | Adding/editing samples, importing TSV, data preview, validation. |
| **WP4** | Run Management | Starting runs from GenBoard, visualisations (timeline, metrics dashboard). |
| **WP5** | Organisational Management | Adding Projects, Teams, and setting up permissions. |
| **WP6** | Maintenance | Unit tests, documentation, logging (ongoing). |
| **WP7** | DevOps | Database backups, deployment, TP website, integration tests. |
| **WP8** | Testing Mode | Deployment on testing instance, final debugging (March 2027). |

### Tech Stack & Architecture

Based on the project specification, here is the tech stack we will be working with:
- **Backend:** Symfony (PHP), PostgreSQL (Database)
- **Frontend:** Vue + Nuxt, Gridstack.js (for dashboards)
- **Message Bus:** Kafka (for logs, metrics, and status updates)
- **DevOps:** Traefik, Loki, Prometheus, Alloy, Grafana

:::info Roles & Access Levels
The system differentiates three levels of access:
- **Admin:** Full access to system config, but *cannot* see organisations' sensitive datasets.
- **Organisation:** Manages users, datasets, API keys, and runs within their institution.
- **User:** Created by the organisation, can access only their own or shared datasets/runs.
:::

## Action Items

| Task | Assignee |
| :--- | :--- |
| Review the `GenBoard tasks.xlsx` file and the provided PDFs. | All team members |
| Prepare to claim tasks (T01 - T19) based on your role (FE, BE, DevOps). | All team members |
| Get access to GenBoard and study the existing codebase (T01). | All team members |
| Set up the team Discord server and assign roles. | Michal Kačinec |

## Next Steps

1. **Meeting in one week.**
2. Bring a list of tasks you want to work on from the Excel sheet.
3. Finalize the task assignment for the first sprint (WP1 & WP2).
4. Start working on Task T01 (Code understanding) and T02 (GF <-> GB Communication).
