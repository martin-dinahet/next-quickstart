# Next Quickstart ⚡

A simple, customizable NextJS starter template to kickstart your projects with best practices.

## Features

- NextJS - State of the art fullstack React framework
- TypeScript + TSX - Strictly typed for better developement experience and safety
- TailwindCSS - Utility-first CSS framework, NextJS's default option
- ESLint & Prettier - Code quality and formatting enforcement
- Prisma - Simple, easy to setup, straight forward ORM with TypeScript in mind
- Docker - Easily setup your database
- PostgreSQL - Standard for most projects, fast and stable SQL-like system

## Getting started

### Prerequisites

- NodeJS
- PNPM (or a NodeJS package manager of your choice)
- Docker (for the database)

### Installation

#### Clone the repository

```sh
git clone https://github.com/martin-dinahet/next-quickstart.git <your-project-name>
cd <your-project-name>
```

#### If you prefer a minimal version without example code (barebones), you can also clone the `bare` branch:

```sh
git clone -b bare https://github.com/martin-dinahet/next-quickstart.git <your-project-name>
cd <your-project-name>
```

#### Install dependencies

```sh
pnpm install
```

#### Spin up the docker container

```sh
docker compose up -d
```

#### Run database migration

```sh
pnpm prisma migrate dev --name init
```

#### Seed the database with default data

```sh
pnpm prisma db seed
```


### Development

#### Start the developement server

```sh
pnpm dev
```

Then, open [localhost:3000](http://localhost:3000) in your browser.

#### Build for production

```sh
pnpm build
```

#### Linting & formatting

Run ESLint to check linting errors:

```sh
pnpm lint
```

Format code with Prettier:
```sh
pnpm format
```

## Directory structure

```
🗁 .
├── 🗋 .env
├── 🗋 .gitignore
├── 🗋 .docker-compose.yml
├── 🗋 next-env.d.ts
├── 🗋 next.config.ts
├── 🗋 eslint.config.ts
├── 🗋 package.json
├── 🗋 pnpm-lock.yaml
├── 🗋 pnpm-workspace.yaml
├── 🗋 postcss.config.js
├── 🗋 readme.md
├── 🗋 tsconfig.app.json
├── 🗋 tsconfig.json
├── 🗁 public
│   └── 🗋 favicon.ico
└── 🗁 src
    ├── 🗋 globals.css
    ├── 🗁 lib
    │   └── 🗋 prisma.ts
    ├── 🗁 services
    │   └── 🗋 todos.ts
    ├── 🗁 components
    │   └── 🗋 todo-list.tsx
    └──  🗁 app
        ├── 🗋 layout.tsx
        ├── 🗋 page.tsx
        └── 🗁 api
            └── 🗁 todos
                └── 🗋 route.ts
```
