# Champions Arena

Champions Arena is an open-source football tournament management platform that enables small charities and local groups to run 5-a-side to 11-a-side tournaments. The platform provides role-based experiences for organizers, team managers, referees, players and fans.

## Features (MVP)

- **Authentication & Authorization** – secure email/password sign-up and sign-in with bcrypt hashed passwords, JWT access/refresh tokens and role-based access control.
- **Tournament Management** – create, edit, archive tournaments; manage formats, dates and team limits.
- **Team Registration** – register teams with logo upload (via presigned URL) and maintain player rosters.
- **Match Scheduler & Results** – schedule fixtures, record scores, goals and cards, and auto-calculate standings.
- **Public Portal** – public read-only access to fixtures, results, standings and top scorers.
- **Infrastructure & CI/CD** – monorepo with Node/Express backend, React frontend, PostgreSQL on Railway and Vercel deployments via GitHub Actions.

## Getting Started (Local Development)

1. **Clone the repository**

```bash
git clone https://github.com/Ai22anas/champions-arena.git
cd champions-arena
```

2. **Install dependencies**

This repository is a monorepo with separate packages for the backend, frontend and infrastructure. To install all dependencies, run:

```bash
npm install
```

3. **Run locally with Docker Compose**

A `docker-compose.yml` (to be added) will orchestrate a PostgreSQL database and local development for the backend and frontend. After scaffolding, you will be able to start the stack with:

```bash
docker-compose up --build
```

4. **Environment variables**

Copy `.env.example` files into `.env` in each package and provide the necessary configuration such as database URL, JWT secrets and API keys.

## Contributing

Contributions are welcome! Please open issues and pull requests for any improvements, and ensure all PRs follow the conventional commits specification. See the roadmap and project board in Jira (`CAMP` project) for current tasks.

## License

This project is licensed under the MIT License.
