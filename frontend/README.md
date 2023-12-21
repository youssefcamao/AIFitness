# AI Fitness Chat Application

This application is an AI fitness chat app designed to answer fitness-related questions and provide useful YouTube videos to help users understand various exercises. The app offers personalized fitness advice, making it easier for users to follow along and stay motivated.

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Application Structure

### Using Docker Compose

### Adding the OpenAI Key

To add the OpenAI API key to the application:

1. Obtain an API key from OpenAI.
2. Locate the `OPENAI_API_KEY` environment variable in the `docker-compose.yaml` file under the `backend` service.
3. Assign your OpenAI API key to the `OPENAI_API_KEY` variable.

This key is used by the backend service to interact with the OpenAI API for generating responses to fitness-related queries.

### Using Docker Compose

To start the application using Docker Compose:

1. Ensure Docker and Docker Compose are installed on your system.
2. Navigate to the root directory of the project.
3. Run the command `docker-compose up` to build and start the services defined in `docker-compose.yaml`.

The `docker-compose.yaml` file defines the following services:

- `backend`: The API server that handles fitness-related requests.
- `frontend`: The web interface that users interact with.
- `mongo`: The database server for storing application data.

Make sure to have the required ports available on your host machine before starting the services.

## Application Structure

The application is structured with a clear separation between the frontend and backend elements. Relevant files for chat logic and text processing include:

 - `backend/llm/prompts.py`: Defines the prompts used by the AI to guide interactions with users around fitness topics and visually supported content using YouTube videos.

 - `backend/llm/title_creator.py`: Responsible for dynamically generating concise and relevant titles for user interactions by summarizing the content with emojis.

Each component is designed to contribute seamlessly to the functionality and user experience of the AI fitness chat app.
