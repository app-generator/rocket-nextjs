<div align="center">
    <a href="https://github.com/app-generator/rocket-nextjs">
        <img src="https://github.com/app-generator/rocket-nextjs/blob/main/public/favicon.ico" width="64" height="64" alt="Rocket Icon">
    </a>
    <h1>
        <a href="https://github.com/app-generator/rocket-nextjs">
            Rocket Nextjs
        </a>
    </h1>
</div>

We provide App Router Mode

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
│   ├── components       # Page's components
│   ├── models           # MongoDB schema
│   ├── utilities        # Utility folder
│   └── Provider.tsx     # NuxtAuth provider
├── tailwind.config.ts   # Tailwind CSS configuration
├── postcss.config.js    # Postcss configuration
├── eslintrc.json        # ESLint configuration
└── tsconfig.json        # TypeScript configuration
```
----
