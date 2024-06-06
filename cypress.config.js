const cucumber = require('cypress-cucumber-preprocessor').default  // importamos preprocesador de cucumber
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())  // configuramos el preprocesador para que se ejecute antes de procesar los archivos
    },
    specPattern: "cypress/features/*.feature",  // especificamos patrón de búsqueda de archivos, en este caso .feature
  },
});
