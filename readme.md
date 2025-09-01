# Next Quickstart ⚡

Un starter NextJS simple et personnalisable pour démarrer rapidement vos projets avec les bonnes pratiques.

## Fonctionnalités

- NextJS - Framework React fullstack moderne
- TypeScript + TSX - Typage strict pour une meilleure expérience et plus de sécurité
- TailwindCSS - Framework CSS utilitaire, choix par défaut de NextJS
- ESLint & Prettier - Vérification et formatage du code
- Prisma - ORM facile à configurer, pensé pour TypeScript
- Docker - Mise en place rapide de la base de données
- PostgreSQL - Standard fiable, rapide et adapté à la plupart des projets

## Mise en route

### Prérequis

- NodeJS
- PNPM (ou le gestionnaire de paquets de votre choix)
- Docker (pour la base de données)

### Installation

#### Cloner le dépôt

```sh
git clone https://github.com/martin-dinahet/next-quickstart.git <nom-du-projet>
cd <nom-du-projet>
```

#### Version minimale sans exemple :

```sh
git clone -b bare https://github.com/martin-dinahet/next-quickstart.git <nom-du-projet>
cd <nom-du-projet>
```

#### Installer les dépendances

```sh
pnpm install
```

#### Lancer Docker

```sh
docker compose up -d
```

#### Appliquer la migration de base de données

```sh
pnpm prisma migrate dev --name init
```

#### Remplir la base de données avec des données par défaut

```sh
pnpm prisma db seed
```

### Développement

#### Démarrer en mode dev

```sh
pnpm dev
```

Puis ouvrez [localhost:3000](http://localhost:3000) dans votre navigateur.

#### Build pour la production

```sh
pnpm build
```

#### Linter & formater

Vérifier le code avec ESLint :

```sh
pnpm lint
```

Formater avec Prettier :

```sh
pnpm format
```

## Structure du projet

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
