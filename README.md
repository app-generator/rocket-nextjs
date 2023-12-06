<div align="center">
    <a href="https://rocket-nextjs-demo.vercel.app/">
        <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/272178364-cbac6d97-b2dc-4d95-bab6-891f4ee7d84d.png"" width="64" height="64" alt="Rocket Icon">
    </a>
    <h1>
        <a href="https://rocket-django.onrender.com">
            Rocket NextJS
        </a>
    </h1>
    <p>
        <strong>NextJS</strong> &bull; <strong>TailwindCSS</strong> &bull; <strong>Flowbite</strong> &bull; <strong>Integrated Dashboard</strong> &bull; <strong>Auth</strong> &bull; <strong>Auth</strong> &bull; <strong>Premium Support</strong>
    </p>  
    <h3>
        <a href="https://docs.appseed.us/products/rocket/nextjs/">
           📖 DOCS
        </a>
        &nbsp; &bull; &nbsp; 
        <a href="https://appseed.us/support/">
            Support 🚀
        </a>
    </h3>    
</div>

<br />

<div align="center">
    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/51070104/288313171-9f4aef68-2593-4101-953d-72c8168deea9.png" alt="Django NextJS - Open-source Starter styled with Tailwind and Flowbite.">
</div>

<br />

## Why Rocket NextJS

#### ***Supercharge your app instantly, launch faster, make $***
Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. Rocket provides you with the boilerplate code you need to launch, FAST. <br />

#### ***Rocket your startup in days, not weeks*** 
The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app. From idea to production in 5 minutes.

**18+ hours of headaches =**
 - 4 hrs to set up emails
 - 3 hrs designing a pricing section
 - 2 hrs to handle Stripe webhooks
 - 4 hrs for SEO tags
 - 1 hr applying for Google Oauth
 - 2 hrs for DNS records
 - 2 hrs for protected API routes
 - ∞ hrs overthinking...

 ----

## Free vs. `PRO` 

> `Have questions?` Contact **[Support](https://appseed.us/support/)** (Email & Discord) provided by **AppSeed**

| Free Version                          | PRO - 🛒 **[$199](https://appseed.gumroad.com/l/rocket-nextjs)**                  | 🚀 Custom - $3999            |  
| --------------------------------------| --------------------------------------| --------------------------------------|
| ✓ Next 13.x                           | **Everything in Free**, plus:         | **Everything in PRO**, plus:          |
| ✓ React 18.x                          | ✅ `Google OAuth` & `Magic Links`    | ✅ **1mo Custom Development**         |  
| ✓ TypeScript                          | ✅ **Stripe Payments**               | ✅ **Dedicated Developer**            |
| ✓ Tooling: eslint, postcss            | ✅ **Flowbite Dashboard Full**       | ✅ Dedicated Support                  |
| ✓ UI: TailwindCSS, **Flowbite**       | ✅ Private REPO Access               | ✅ Technical SPECS                    |
| ✓ NextAuth (User & Password)          | ✅ **Unlimited Projects**            | ✅ Documentation                      |
| ✓ MongoDB                             | ✅ Lifetime Updates                  | ✅ **30 days Delivery Warranty**      |
| ✓ Flowbite Dashboard (2 pages)        | ✅ **PRO Support** - [Email & Discord](https://appseed.us/support/)     | -                                     |
| ✓ Support via GitHub Issues           | -                                    | -                                      |
| -                                     | -                                     | -                                      |
| --------------------------------------| --------------------------------------| --------------------------------------|
| 🚀 [LIVE Demo](https://rocket-nextjs-demo.vercel.app/)   | 🚀 [LIVE Demo](https://rocket-nextjs-pro.vercel.app/) | 🛒 `Order`: **[$3999](https://appseed.gumroad.com/l/rocket-nextjs-custom)** (via GUMROAD)              |   

## Features
This boilerplate features all the latest tools and practices in the industry.
 - "eslint": "8.49.0",
 - "flowbite": "^1.8.1",
 - "next": "13.5.2",
 - "postcss": "8.4.30",
 - "react": "18.2.0",
 - "tailwindcss": "3.3.3"
 
 Here are a few highlights in this boilerplate
### Login *with NextAuth*
 - [x] Magic links setup
 - [x] Login with Google walkthrough
 - [x] Save user data in MongoDB
 - [x] Private/protected pages & API calls
 - [x] Time saved: 3 hours
### Emails *with Mailgun*
 - [x] Send transactional emails
 - [x] DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)
 - [x] Webhook to receive & forward emails
 - [x] Time saved: 2 hours
 - [x] Headaches: 0
 ### Payments *with Stripe*
 - [x] Create checkout sessions
 - [x] Handle webhooks to update user's account
 - [x] Tips to setup your account & reduce chargebacks
 - [x] Time saved: 2 hours
 ### Database *with Mongodb*
 - [x] Mongoose schema
 - [x] Mongoose plugins to make your life easier
 - [x] Time saved: 2 hours
 ### SEO
 - [x] All meta tags to rank on Google
 - [x] OpenGraph tags to share on social media
 - [x] Automated sitemap generation to fasten Google indexing
 - [x] Structured data markup for Rich Snippets
 - [x] SEO-optimized UI components
 - [x] Time saved: 6 hours
 ### Style *with TailwindCSS and Flowbite library*
 - [x] Components, animations & sections (like the pricing page below)
 - [x] 20+ themes with daisyUI
 - [x] Automatic dark mode
 - [x] Time saved: 5 hours
 ### More
 - [x] Tips to write copy that sells
 - [x] Crisp customer support (auto show/hide, variables...)
 - [x] Collect emails for a waitlist if your product isn't ready
 - [x] Prompts to generate terms & privacy policy with ChatGPT
 - [x] Code templates to add pages, API routes, etc.
 - [x] Dead simple tutorials
 - [x] Discord community
 - [x] Time saved: ∞ hours

----

## App Structure
```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
├── app
│   ├── (auth)           # Organize routes without affecting the URL path
|   |   ├── login
|   |   ├── register
|   |   ├── global.css
|   |   ├── layout.tsx
|   |   └── loading.tsx
│   ├── api              # API handler
│   └── Provider.tsx     # NuxtAuth provider
├── components           # Page's components
├── models               # MongoDB schema
├── utilities            # Utility folder
├── tailwind.config.ts   # Tailwind CSS configuration
├── postcss.config.js    # Postcss configuration
├── eslintrc.json        # ESLint configuration
└── tsconfig.json        # TypeScript configuration
```
----

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

----
