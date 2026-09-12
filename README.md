# E-Commerce Full Stack Application

A full-stack e-commerce application I am building to practice
production-style software development and cloud deployment.

## Start Here

Prerequisites:

- Java 17+
- Maven
- Node.js
- pnpm
- Docker Desktop

what to do after cloning the repo:

1. Create a `.env` file inside the `springboot-Projectg` directory.
2. Add the following variables:

```env
DB_HOST=localhost
DB_PORT=3307
DB_NAME=ecommerce_test
DB_USERNAME=root
DB_PASSWORD=devdatabase
```

run

```Shell
docker compose -f docker-compose.yml up
```

The backend uses Spring profiles to separate development and production configuration:

2 ways to run

2. Make sure the **Extension Pack for Java** is installed.
3. Open the **Spring Boot Dashboard** from the VS Code Activity Bar.
4. Find `MyApplication`.
5. Click the **...** (More Actions) next to the application.
6. Select **Edit Configuration**.
7. Add the following environment variable:

```text
SPRING_PROFILES_ACTIVE=dev
```

or:

### run thorugh VS Code

1. Open the project in VS Code.
3. Open **Run and Debug** (`Ctrl + Shift + D`).
4. Select **Spring Boot - Dev**.
5. Click **Run**.

The `dev` Spring profile is automatically configured in `.vscode/launch.json`.



to run front end, cd into the folder and run

```Shell
pnpm i 
pnpm run dev
```

will run at `http://localhost:3000`.

### Design

[Figma Prototype](https://www.figma.com/design/1dRBuVOB7e9joVVXdYxElB/Untitled?node-id=29-475&t=y2dnRXoxoZPACVDU-1)

### Current Features

- Product browsing and categories
- Customer registration
- Product and customer REST APIs
- MySQL database with Flyway migrations
- AWS deployment using ECS and RDS
- Docker containerization
- CI/CD with GitHub Actions

## Future Plans – Learn & Implement

- JWT authentication and authorization
- Redis caching
- WebSocket functionality
- AI-assisted features
- API rate limiting
- Elasticsearch / OpenSearch and Qdrant
- BGE-M3 embeddings and vector search
- LLM integration
- Kafka and event-driven architecture
- Microservices
