# Ferrathorn Microservice Starter Template

This is a customizable [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/) microservice starter template, designed for serverless backends using Lambda, API Gateway, and DynamoDB.

Ideal for quickly bootstrapping new microservices in your gym-focused CRM platform or similar serverless apps.

---

## 🧰 What's Included

- Node.js 18.x + ES Modules (via `.mjs`)
- API Gateway (REST endpoint)
- Lambda handler w/ structured logging
- DynamoDB table (simple key-based store)
- Cookiecutter-style prompts via `metadata.json`
- Structured source layout:
  - `src/functions/`: Lambda entrypoints
  - `src/utils/`: error + response helpers
  - `test/`: unit test scaffolding
  - `env/`: dev overrides and event mocks
- Environment-based `samconfig.toml` with `dev`, `staging`, and `prod` deploys

---

## 🚀 Getting Started

```bash
sam init --location https://github.com/YOUR_USERNAME/ferrathorn-microservice-starter-template
# sam-microservice-template
