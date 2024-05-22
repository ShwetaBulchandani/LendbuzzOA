import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    TODO_APP_URL: 'https://todomvc.com/examples/react/dist/',
  },
  e2e: {
    setupNodeEvents(on, config) {
      const todoAppUrl = config.env.TODO_APP_URL;
      config.env.todoAppUrl = todoAppUrl;
      return config;
    },
  },
});