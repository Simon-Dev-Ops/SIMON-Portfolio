# CI/CD Pipeline Examples

CI/CD pipeline configurations I've used for automated testing, building, and deployment. Includes examples for GitHub Actions, GitLab CI/CD, Jenkins, and Azure DevOps.

## Features

- Multi-platform support: GitHub Actions, GitLab CI/CD, Jenkins, Azure DevOps
- Container builds: Docker image building and pushing to registries
- Automated testing: Unit tests, integration tests, security scanning
- Multi-environment deployments: Dev, Staging, Production workflows
- Infrastructure as Code: Terraform integration for infrastructure deployment
- Kubernetes deployments: Automated K8s deployments
- Security scanning: SonarQube, Trivy, Snyk integration
- Notification: Slack, Teams, Email notifications

## Prerequisites

- GitHub/GitLab account
- Docker installed
- Kubernetes cluster (for deployment pipelines)
- AWS/Azure credentials (for cloud deployments)

## Repository Structure

```
├── github-actions/
│   ├── .github/
│   │   └── workflows/
│   │       ├── ci.yml
│   │       ├── cd.yml
│   │       └── terraform.yml
├── gitlab-ci/
│   ├── .gitlab-ci.yml
│   └── scripts/
├── jenkins/
│   ├── Jenkinsfile
│   └── pipeline.groovy
├── azure-devops/
│   └── azure-pipelines.yml
└── README.md
```

## Quick Start

### GitHub Actions

1. Copy workflows to your repository:
```bash
cp -r github-actions/.github ./
```

2. Configure secrets in GitHub:
   - `DOCKER_USERNAME`
   - `DOCKER_PASSWORD`
   - `KUBECONFIG`
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

### GitLab CI/CD

1. Copy `.gitlab-ci.yml` to your repository root
2. Configure CI/CD variables in GitLab Settings
3. Push to trigger pipeline

### Jenkins

1. Create a new Pipeline job
2. Point to `Jenkinsfile` in your repository
3. Configure credentials in Jenkins

## Pipeline Examples

### CI Pipeline (Continuous Integration)
- Code checkout
- Dependency installation
- Linting and code quality checks
- Unit tests
- Integration tests
- Security scanning
- Build artifacts

### CD Pipeline (Continuous Deployment)
- Build Docker images
- Push to container registry
- Deploy to Kubernetes
- Run smoke tests
- Rollback on failure

### Infrastructure Pipeline
- Terraform plan
- Terraform apply
- Infrastructure validation
- Cost estimation

## Security Features

- Secret Management: Secure handling of credentials
- Security Scanning: Automated vulnerability detection
- Code Quality: SonarQube integration
- Compliance: Policy enforcement
- Audit Logging: Complete pipeline audit trail

## Pipeline Stages

### 1. Build Stage
- Install dependencies
- Compile code
- Build Docker images
- Tag images with version

### 2. Test Stage
- Run unit tests
- Run integration tests
- Generate test reports
- Calculate code coverage

### 3. Security Stage
- Dependency scanning
- Container image scanning
- Static code analysis
- License compliance check

### 4. Deploy Stage
- Deploy to development
- Run smoke tests
- Deploy to staging
- Deploy to production (manual approval)

### 5. Post-Deploy Stage
- Health checks
- Performance monitoring
- Rollback on failure
- Notification

## Usage Examples

### GitHub Actions - Deploy to Kubernetes
```yaml
name: Deploy to K8s
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: kubectl apply -f k8s/
```

### GitLab CI/CD - Build and Push Docker
```yaml
build:
  stage: build
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
```

## Best Practices

- Separate CI and CD pipelines
- Use matrix builds for multiple versions
- Implement proper secret management
- Add manual approval gates for production
- Implement rollback strategies
- Use pipeline caching for faster builds
- Add comprehensive logging
- Implement notification on failures

## Multi-Environment Strategy

### Development
- Automatic deployment on push
- No approval required
- Fast feedback loop

### Staging
- Automatic deployment after dev tests pass
- Integration testing
- Performance testing

### Production
- Manual approval required
- Blue-green deployment
- Canary releases
- Automated rollback

## Monitoring & Metrics

- Pipeline execution time
- Success/failure rates
- Deployment frequency
- Mean time to recovery (MTTR)
- Change failure rate

## Author

**Simon Mathebula**
- GitHub: [@Simon-Dev-Ops](https://github.com/Simon-Dev-Ops)
- LinkedIn: [Simon Mathebula](https://www.linkedin.com/in/simon-mathebula-445614b2)
