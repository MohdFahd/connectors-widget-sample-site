# Deployment Guide

This project is set up for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Settings

The deployment workflow is configured to deploy from the `main` or `master` branch. Make sure your default branch is one of these.

### 3. Automatic Deployment

Once GitHub Pages is enabled, the deployment will happen automatically when you:

- Push to the `main` or `master` branch
- Merge a pull request to the `main` or `master` branch

### 4. Access Your Deployed Site

After the first successful deployment, your site will be available at:
```
https://[your-username].github.io/connectors-widget-sample-site/
```

Replace `[your-username]` with your actual GitHub username.

## Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`) includes:

- **Build Job**: Installs dependencies, builds the project, and uploads artifacts
- **Deploy Job**: Deploys the built artifacts to GitHub Pages
- **Permissions**: Configured for GitHub Pages deployment
- **Concurrency**: Prevents multiple deployments from running simultaneously

## Local Development

For local development, the base path is set to `/` so the app works normally. In production, it's set to `/connectors-widget-sample-site/` to work with GitHub Pages.

## Troubleshooting

### Build Failures
- Check that all dependencies are properly listed in `package.json`
- Ensure the build command (`npm run build`) works locally
- Review the Actions tab in your GitHub repository for detailed error logs

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check that the repository has the correct permissions
- Ensure the workflow file is in the correct location (`.github/workflows/deploy.yml`)

### Site Not Loading
- Wait a few minutes after deployment for DNS propagation
- Check the Actions tab to ensure deployment completed successfully
- Verify the URL format matches your repository name

## Manual Deployment

If you need to trigger a manual deployment:

1. Go to the **Actions** tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Environment Variables

The deployment uses the following environment variables:
- `NODE_ENV`: Automatically set to `production` during build
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions
