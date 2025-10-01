
<h1 align="center">
  <a
    target="_blank"
    href="https://agentforge.augment.cfd/"
  >
    <img
      align="center"
      alt="AgentForge"
      src="https://github.com/activepieces/activepieces/assets/1812998/76c97441-c285-4480-bc75-30a0c73ed340"
      style="width:100%;"
    />
  </a>
</h1>

<p align="center">
<a href="/LICENSE" target="_blank"><img src='https://img.shields.io/badge/license-MIT-green?style=for-the-badge' /></a>&nbsp;<img src='https://img.shields.io/github/stars/your-org/agentforge?style=for-the-badge' />&nbsp;<img src='https://img.shields.io/github/forks/your-org/agentforge?style=for-the-badge' />
</p>
<p align="center">
   AgentForge - Where AI agents are built
</p>

<p align="center">
  <a
    href="https://agentforge.augment.cfd/docs"
    target="_blank"
  ><b>Documentation</b></a>&nbsp;&nbsp;&nbsp;🌪️&nbsp;&nbsp;&nbsp;
   <a
    href="https://agentforge.augment.cfd/docs/developers/overview"
    target="_blank"
  ><b>Create a Piece</b></a>&nbsp;&nbsp;&nbsp;🖉&nbsp;&nbsp;&nbsp;
  <a
    href="https://agentforge.augment.cfd/docs/install/overview"
    target="_blank"
  ><b>Deploy</b></a>&nbsp;&nbsp;&nbsp;🔥&nbsp;&nbsp;&nbsp;
  <a
    href="https://github.com/your-org/agentforge/discussions"
    target="_blank"
  >
    <b>Community</b>
  </a>
</p>

<br>
<br>

# 🤯 Welcome to AgentForge

All-in-one AI automation platform designed to be **extensible** through a **type-safe** pieces framework written in **TypeScript**.
When you contribute pieces to AgentForge they become automatically available as MCP servers that you can use with LLMs through Claude Desktop, Cursor or Windsurf!

## 🚀 Deployment Guide

This repository contains two separate applications that work together:

### 📄 Landing Page (`/landing` directory)
The marketing and documentation website built with Next.js.

**Live Demo:** [https://agentforge.augment.cfd/](https://agentforge.augment.cfd/)

#### Deploy Landing Page:
1. **Vercel (Recommended):**
   ```bash
   # Navigate to landing directory
   cd landing
   
   # Install dependencies
   npm install
   
   # Deploy to Vercel
   vercel --prod
   ```

2. **Other Platforms:**
   ```bash
   cd landing
   npm install
   npm run build
   # Deploy the `dist` folder to your hosting provider
   ```

### 🔧 Main Platform (Root directory)
The core AgentForge application with full automation capabilities.

**Live Demo:** [https://cloudagent.augment.cfd/](https://cloudagent.augment.cfd/)

#### Deploy Main Platform:

**Option 1: Docker Compose (Production)**
```bash
# Clone the repository
git clone <your-repo-url>
cd activepieces-main

# Generate environment variables with secure secrets
./tools/deploy.sh

# Update the frontend URL in .env
# Change AP_FRONTEND_URL to your domain
nano .env

# Start the platform
docker-compose up -d
```

**Option 2: Single Docker Container (Testing)**
```bash
docker run -d -p 8080:80 \
  -v ~/.activepieces:/root/.activepieces \
  -e AP_FRONTEND_URL="https://your-domain.com" \
  activepieces/activepieces:latest
```

#### System Requirements:
- **RAM:** 6GB minimum (4GB for AgentForge + 1GB PostgreSQL + 1GB Redis)
- **CPU:** 2-3 cores recommended
- **Storage:** ~2GB for Docker images + database growth
- **Ports:** 80/443 (or 8080 for testing)

### 🔗 Connecting Landing Page to Platform

After deploying both applications, update the navigation links in your landing page:

1. **Update Header Links:**
   ```typescript
   // In your landing page header component
   const PLATFORM_URL = "https://your-platform-domain.com";
   
   <a href={`${PLATFORM_URL}/sign-up`}>Sign Up</a>
   <a href={`${PLATFORM_URL}/sign-in`}>Sign In</a>
   ```

2. **Update Call-to-Action Buttons:**
   ```typescript
   // Replace any "Get Started" or "Try Now" buttons
   <a href={`${PLATFORM_URL}/sign-up`}>Get Started Free</a>
   ```

### 🌐 Custom Domain Setup

1. **Platform Domain:** Point your domain (e.g., `app.yourdomain.com`) to your platform deployment
2. **Landing Domain:** Point your marketing domain (e.g., `yourdomain.com`) to your landing page
3. **Update Environment Variables:**
   ```bash
   # In your platform .env file
   AP_FRONTEND_URL=https://app.yourdomain.com
   ```

### 📋 Post-Deployment Checklist

- [ ] Landing page deployed and accessible
- [ ] Platform deployed and accessible  
- [ ] Sign up page works: `https://your-platform-domain.com/sign-up`
- [ ] Sign in page works: `https://your-platform-domain.com/sign-in`
- [ ] Landing page header links point to platform URLs
- [ ] SSL certificates configured for both domains
- [ ] Environment variables properly set

### 🔧 Environment Configuration

**Required Environment Variables:**
```bash
# Platform Configuration
AP_FRONTEND_URL=https://your-platform-domain.com
AP_POSTGRES_PASSWORD=<secure-password>
AP_JWT_SECRET=<secure-jwt-secret>
AP_ENCRYPTION_KEY=<secure-encryption-key>

# Optional: Email Configuration
AP_SMTP_HOST=your-smtp-host
AP_SMTP_PORT=587
AP_SMTP_USER=your-email
AP_SMTP_PASSWORD=your-email-password
```

**Generate Secure Secrets:**
```bash
# Use the provided script to generate secure passwords
./tools/deploy.sh
```

### 🎯 Production Examples

- **Landing Page:** [https://agentforge.augment.cfd/](https://agentforge.augment.cfd/)
- **Platform:** [https://cloudagent.augment.cfd/](https://cloudagent.augment.cfd/)

You can customize these domains to match your brand and requirements.

<br>
<br>

## 🔥 Why AgentForge is Different:

- **💖 Loved by Everyone**: Intuitive interface and great experience for both technical and non-technical users with a quick learning curve.

<img src="/docs/resources/templates.gif">

- **🌐 Open Ecosystem:** All pieces are open source and available on npmjs.com, **60% of the pieces are contributed by the community**.

- **🛠️ Largest open source MCP toolkit**: All our pieces (280+) are available as MCP that you can use with LLMs on Claude Desktop, Cursor or Windsurf.

- **🛠️  Pieces are written in Typescript**: Pieces are npm packages in TypeScript, offering full customization with the best developer experience, including **hot reloading** for **local** piece development on your machine. 😎

<img src="/docs/resources/create-action.png" alt="">

- **🤖 AI-First**: Native AI pieces let you experiment with various providers, or create your own agents using our AI SDK, and there is Copilot to help you build flows inside the builder.

- **🏢 Enterprise-Ready**: Developers set up the tools, and anyone in the organization can use the no-code builder. Full customization from branding to control.

- **🔒 Secure by Design**: Self-hosted and network-gapped for maximum security and control over your data.

- **🧠 Human in the Loop**: Delay execution for a period of time or require approval. These are just pieces built on top of the piece framework, and you can build many pieces like that. 🎨

- **💻 Human Input Interfaces**: Built-in support for human input triggers like "Chat Interface" 💬 and "Form Interface" 📝



## 🛠️  Builder Features:

- [x] Loops
- [x] Branches
- [x] Auto Retries
- [x] HTTP
- [x] Code with **NPM**
- [x] ASK AI in Code Piece (Non technical user can clean data without knowing to code)
- [x] Flows are fully versioned.
- [x] Languages Translations
- [x] Customizable Templates
- [X] 200+ Pieces and growing

**We release updates frequently. Check the product changelog for the latest features.**


## 🔌 Create Your Own Piece

AgentForge supports integrations with Google Sheets, OpenAI, Discord, RSS, and over 200 other services. Check out our extensive library of supported integrations, which is constantly expanding thanks to our community's contributions.

As an **open ecosystem**, all integration source code is accessible in our repository. These integrations are versioned and published directly to npmjs.com upon contribution.

You can easily create your own integration using our TypeScript framework. For detailed instructions, please refer to our [Developer Documentation](https://agentforge.augment.cfd/docs/developers/overview).

<br>
<br>
<br>
<br>


# License

AgentForge is released as open source under the [MIT license](LICENSE). This project is built on top of Activepieces and extends it with additional features and customizations.

Read more about the feature comparison in our [documentation](https://agentforge.augment.cfd/docs/about/editions).
<br>
<br>


# 💭 Join Our Community

We're building an amazing community of developers and automation enthusiasts! Join us to:
- Get help with your AgentForge setup
- Share your custom pieces and automations
- Collaborate on new features
- Connect with other builders

<p align="center">
  <a href="https://github.com/your-org/agentforge/discussions" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Discussions-blue?style=for-the-badge&logo=github" alt="GitHub Discussions">
  </a>
</p>

# 🌐 Contributions

We welcome contributions of all kinds! Whether you're:
- Building new pieces and integrations
- Improving documentation
- Fixing bugs or adding features
- Sharing feedback and ideas

Check out our [Contributing Guide](https://agentforge.augment.cfd/docs/developers/overview) to get started.

## 📚 Help & Support

- **Documentation**: [agentforge.augment.cfd/docs](https://agentforge.augment.cfd/docs)
- **Issues**: [GitHub Issues](https://github.com/your-org/agentforge/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/agentforge/discussions)

---

<p align="center">
  <strong>Built with ❤️ by the AgentForge community</strong>
</p>

<p align="center">
  <a href="https://agentforge.augment.cfd">Website</a> •
  <a href="https://agentforge.augment.cfd/docs">Documentation</a> •
  <a href="https://github.com/your-org/agentforge/discussions">Community</a>
</p>
