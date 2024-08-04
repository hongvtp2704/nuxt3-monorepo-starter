# Nuxt3 Monorepo Starter

## Overview
This project is a monorepo structured using [Nuxt layers](https://nuxt.com/docs/getting-started/layers). It includes **common-ui** and **multiple modules** managed within a single repository.

## References
- [Nuxt Layers Documentation](https://nuxt.com/docs/getting-started/layers)
- [Nuxt Monorepo for Large-Scale Vue Web Application](https://serko.dev/post/nuxt-3-monorepo#sharing-env-environment-variables)

## Monorepo Structure
The project uses Nuxt layers to manage different parts of the application. Each package or application is organized in its own directory under the `packages` folder.


## Setup
1. Install dependencies:
    ```sh
    npm install
    ```

2. Run a specific application, navigate to its directory and use the Nuxt commands:
    ```sh
    cd packages/app1
    npm run dev
    ```

## License
This project is licensed under the MIT License.