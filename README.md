# TODOapp Test

This project contains a test cases for the TODOapp using Cypress and TypeScript. The test cases covers various functionalities of the TODOapp, including adding tasks, marking tasks as complete, deleting tasks, editing tasks, filtering tasks, and completing all tasks.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/ShwetaBulchandani/TODOapp_Lendbuzz.git
```

2. Navigate to the project directory:

```bash
cd todoapp-tests
```

3. Install the dependencies:

```bash
npm install
```

## Running the Tests

### Headless Mode

To run the tests in headless mode (without a visible browser), use the following command:

```bash
npm test
```

This will launch the Cypress test runner and execute the test suite against the TODOapp in a headless browser.

### Interactive Mode

To open the Cypress Test Runner and run the tests interactively, use the following command:

```bash
npm run cypress:open
```

This will launch the Cypress Test Runner, where you can select the test suite and browser to run the tests. You can also use the Test Runner to debug the tests and inspect the application's behavior.

## Test Cases

The test suite includes the following test cases:

1. **Adding Task**: Verifies that a new task can be added to the task list.
2. **Completing Task**: Verifies that a task can be marked as complete, and the completed task is visible in the "Completed" section.
3. **Deleting Task**: Verifies that a task can be deleted from the task list.
4. **Editing Task**: Verifies that a task can be edited, and the task text is updated correctly.
5. **Filtering Tasks**: Verifies that tasks can be filtered by their completion status using the "Active" and "Completed" sections.
6. **Clearing Completed Tasks**: Verifies that all tasks can be clear completed once cleared task button is clicked.

## Project Structure

- `cypress/e2e/todoapp.cy.ts`: Contains the test cases for the TODOapp.
- `cypress/support/e2e.ts`: An empty file required by Cypress for custom commands and helpers.
- `cypress.config.ts`: The Cypress configuration file.
- `tsconfig.json`: The TypeScript configuration file.
- `package.json`: The project's package file with dependencies and scripts.
- `README.md`: This file, containing instructions for setting up and running the tests.
