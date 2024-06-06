import { Given, When } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000";

Given('I open Local page', () => {
    cy.visit(url);
});

When ('I should see "Hola Mundo" on the page', () => {
    cy.contains("Hola Mundo");
    cy.log("El mensaje 'Hola Mundo' aparece correctamente");
});
