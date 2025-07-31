# Champions Arena MVP Roadmap

This roadmap outlines the phases, deliverables, and milestones required to build the **Champions Arena** football‑tournament management platform as an open‑source MVP.  The schedule and activities mirror the execution workflow described in the project brief and include planning, scaffolding, development, deployment, and release preparations.

## Phase 0 – Kick‑off

**Goal:** Kick‑start the project by understanding requirements and setting up the working environment.

**Tasks:**

1. **Parse the project brief.** Review functional and non‑functional requirements, tech stack, security checklist, and workflow.
2. **Prepare roadmap.md.** Summarise the phases, deliverables, and success criteria in this document.
3. **Establish repository and tooling.**
   - Create a new GitHub repository called `champions-arena` (monorepo).  
   - Ensure appropriate branch protection rules and PR templates for conventional commits.  
   - Configure GitHub Actions secrets for Railway, Vercel, and Supabase when available.
4. **Provision Jira project.** Create a Jira Cloud project named **CAMP** with the “Scrum” template and initial columns (To Do, In Progress, Done).

**Deliverables:** `roadmap.md` committed to the repo.

## Phase 1 – Plan

**Goal:** Translate high‑level requirements into a structured backlog in Jira.

**Tasks:**

1. **Define epics and stories.** Use the MoSCoW prioritisation technique (MVP = “Must”) to group features into epics such as Authentication, Tournaments, Teams, Matches, Public Portal, and Infrastructure.
2. **Break down stories into tasks/sub‑tasks.** Include acceptance criteria and Definition of Done (DoD) for each story.  
3. **Create Jira tickets.** Populate the CAMP project with all epics, stories, tasks, and sub‑tasks.  
4. **Link to repository.** Configure the Jira–GitHub integration so PRs can reference Jira issues and update their status automatically.

**Deliverables:** A populated Jira backlog with epics/stories/tasks prioritised for MVP.

## Phase 2 – Scaffold

**Goal:** Set up the monorepo structure and baseline code.

**Tasks:**

1. **Create directory structure.**
   - `/docs`: project documentation and OpenAPI YAML.  
   - `/packages/backend`: Node 18 + Express + TypeScript + Prisma.  
   - `/packages/frontend`: React 18 + Vite + TypeScript + shadcn/ui + Zustand.  
   - `/packages/infra`: Terraform for Railway and Vercel deployments.
2. **Initialise git repository.** Commit scaffold with `chore(init): initial monorepo structure` and push to `main` via a PR.
3. **Set up CI workflow.** Create GitHub Action that lints, tests, and builds on every PR.
4. **Configure basic local dev environment.** Provide `docker-compose.yml` for local Postgres and stubbed Supabase bucket; add README instructions for `docker-compose up`.

**Deliverables:** Scaffolding merged into `main`; CI pipeline running successfully.

## Phase 3 – Implement Iteratively

**Goal:** Develop features in small, testable increments.  Each story is implemented on its own feature branch with code, tests, and documentation.

**Iterative workflow for each story:**

1. **Branch creation.** Create a feature branch named `feat/<jira‑key>` from `main`.
2. **Development and tests.** Implement the feature in backend and/or frontend.  Write unit tests covering at least 60 % lines for backend.  Write smoke tests for frontend components.  Update OpenAPI spec and docs.
3. **Local verification.** Run `npm run test` and `npm run lint`.  Ensure `docker-compose up` works locally.
4. **Push branch.** Push code to GitHub and open a pull request referencing the Jira key.  The PR must include a preview deployment link and pass CI.
5. **Review and merge.** After review, merge into `main` once tests and preview succeed.  Move the Jira ticket to “Done”.

**Deliverables:** Completed features with green CI, updated documentation, and closed Jira tickets.

## Phase 4 – Deploy Staging

**Goal:** Provide a working staging environment accessible via URLs.

**Tasks:**

1. **Provision Railway and Vercel.** Configure free tiers for backend (Railway) and frontend (Vercel).  
2. **Implement automatic deployment.** On every merge to `main`, GitHub Actions should deploy backend to Railway and frontend to Vercel.  Use environment variables and secrets for database connection, JWT secrets, etc.  
3. **Publish staging URLs.** Document the URLs in a Jira “Release” ticket along with demo credentials.

**Deliverables:** Live backend and frontend staging URLs available after each merge to `main`.

## Phase 5 – Final Hardening

**Goal:** Ensure the system meets security, reliability, and quality standards before release.

**Tasks:**

1. **Run OWASP ZAP baseline scan.** Identify vulnerabilities (XSS, SQL injection, etc.) and address critical findings.  
2. **Update Security.md.** Describe mitigations: rate limiting, helmet headers, CORS, Zod validation, HTTPS enforcement, JWT rotation, etc.
3. **Review accessibility and localisation.** Confirm compliance with WCAG 2.1 AA and ensure i18n JSON structure is in place.
4. **Increase test coverage.** Ensure backend unit tests cover ≥ 60 % and basic smoke tests exist for major frontend flows.

**Deliverables:** Security.md updated, vulnerabilities fixed, tests improved.

## Phase 6 – Release

**Goal:** Prepare the MVP for public consumption.

**Tasks:**

1. **Tag and release v0.1.0.** Create a release PR on GitHub with a changelog and version tag.  
2. **Close tickets.** Mark all completed epics/stories/tasks in Jira as “Done” and note the release in the root epic.  
3. **Publish staging URLs and demo credentials.** Provide the final staging URLs and sample demo account credentials in the release notes.  
4. **Archive backlog items.** Move any remaining non‑MVP tickets to the backlog for future releases.

**Deliverables:** Release PR merged, version tagged, Jira epics closed, and release announcement containing URLs and demo credentials.

**N Throughout all phases, adhere to security best practices (e.g., no secrets in client bundles, JWT rotation), accessibility standards, and conventional commit messages. Human approval is required before any merge to `main` or deployment to production.
ote:** Throughout all phases, adhere to security best practices (e.g., no secrets in client bundles, JWT rotation), accessibility standards, and conventional commit messages.  Human approval is required before any merge to `main` or deployment to production.
