# CyTest

Reliable and straightforward UI automation with CyTest. Leverage the power of Cypress for your testing needs.

## Steps to install IDE and setup of Cypress

### Step 1: Download and Install Visual Studio Code

1. **Download Visual Studio Code:**

   - Go to the [Visual Studio Code website](https://code.visualstudio.com/).
   - Click the download button for your operating system (Windows, macOS, or Linux).

2. **Install Visual Studio Code:**
   - Run the downloaded installer and follow the on-screen instructions to complete the installation.

### Step 2: Install Node.js and npm

1. **Download and Install Node.js:**

   - Go to the [Node.js website](https://nodejs.org/) and download the LTS version.
   - Follow the installation instructions to install Node.js and npm.

2. **Verify Installation:**
   - Open a terminal (you can use VS Code’s integrated terminal).
   - Check the Node.js version by running:
     ```sh
     node -v
     ```
   - Check the npm version by running:
     ```sh
     npm -v
     ```

### Step 3: Create a New Project in Visual Studio Code

1. **Open Visual Studio Code:**

   - Launch Visual Studio Code.

2. **Open a New Terminal:**

   - Go to `View > Terminal` to open a new terminal window inside VS Code.

3. **Create a New Directory for Your Project:**

   - In the terminal, navigate to the location where you want to create your project and create a new directory:
     ```sh
     mkdir cypress-automation
     cd cypress-automation
     ```

4. **Initialize a New npm Project:**
   - In the terminal, run the following command to create a `package.json` file:
     ```sh
     npm init -y
     ```

### Step 4: Install Cypress

1. **Install Cypress:**
   - In the terminal, run the following command to install Cypress:
     ```sh
     npm install cypress --save-dev
     ```

### Step 5: Open Cypress and Create Test Files

1. **Open Cypress:**

   - Run the following command in the terminal to open Cypress:
     ```sh
     npx cypress open
     ```
   - This will launch the Cypress Test Runner and create a `cypress` folder with some example test files.

2. **Create a New Test File:**

   - Inside the `cypress/integration` folder, create a new file for your tests, for example, `example_spec.js`.

3. **Write Your First Test:**
   - Open the new test file and add the following example test:
     ```javascript
     describe('My First Test', () => {
       it('Visits the Cypress Documentation', () => {
         cy.visit('https://docs.cypress.io');
         cy.contains('Getting Started').click();
         cy.url().should('include', '/getting-started');
       });
     });
     ```

### Step 6: Running Cypress Tests

1. **Run Tests from Cypress Test Runner:**

   - With the Cypress Test Runner open, click on the test file you created (e.g., `example_spec.js`). This will run your test in the Cypress Test Runner.

2. **Run Tests from Command Line:**
   - You can also run your tests from the command line using:
     ```sh
     npx cypress run
     ```
