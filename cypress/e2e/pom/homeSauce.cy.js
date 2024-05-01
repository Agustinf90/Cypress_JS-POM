import homeSaucePage from "../../integration/pages/homeSaucePage";
import inventoryPage from "../../integration/pages/inventoryPage";
/// <reference types="cypress" />

describe('POM implementation', () => {
    beforeEach(() => {
        homeSaucePage.visit();
    });

    it('should display error message with invalid credentials', () => {
        homeSaucePage.typeUsername(homeSaucePage.usernameInvalid);
        homeSaucePage.typePassword(homeSaucePage.passwordInvalid);
        homeSaucePage.clickLogin();

        homeSaucePage.getErrorMessageText().then((textoError) => {
            console.log('Respuesta error:', textoError);
        });

        inventoryPage.elements.titleSpan().should('not.exist');
    });

    it('should login to inventory page with valid credentials', () => {
        homeSaucePage.typeUsername(homeSaucePage.usernameValid);
        homeSaucePage.typePassword(homeSaucePage.passwordValid);
        homeSaucePage.clickLogin();

        // homeSaucePage.getErrorMessage().should('not.be.visible');

        inventoryPage.elements.titleSpan().should('have.text', 'Products');
    }); 
});