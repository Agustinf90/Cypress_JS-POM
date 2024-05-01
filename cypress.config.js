const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // ID de tu proyecto en Cypress Dashboard
  projectId: "tu-project-id",

  // Configuración específica para pruebas POM
  pom: {
    integrationFolder: "cypress/integration/pom", // Ruta de la carpeta de pruebas POM
  },

  // Configuración específica para pruebas Pages
  // Configuración para pruebas de extremo a extremo (e2e)
  // Puedes agregar más configuraciones aquí según sea necesario
  pages: {
    // No es necesario implementar eventos de nodo específicos para pruebas Pages
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// const { defineConfig } = require("cypress");
// require('dotenv').config();

// module.exports = defineConfig({
//   viewportHeight: 1080,
//   viewportWidth: 1920,
//   projectId: "t4xgn8",
//   reporter: 'cypress-multi-reporters',
//   reporterOptions: {
//     reporterEnabled: "mochawesome",
//     mochawesomeReporterOptions: {
//       reportDir: "cypress/results/mocha",
//       quite: true,
//       overwrite: false,
//       html: true,
//       json: true
//     }
//   },
//   screenshotsFolder: 'images',
//   env:{...process.env},
//   e2e: {
//       setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     pageLoadTimeout: 60000,
//     defaultCommandTimeout: 30000,
//     retries: {
//       runMode: 2,
//       openMode: 1
//     }
//   },
// });