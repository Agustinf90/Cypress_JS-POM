import homeSaucePage from "../../integration/pages/homeSaucePage";
import inventoryPage from "../../integration/pages/inventoryPage";
/// <reference types="cypress" />

describe('POM implementation', () => {
    beforeEach(() => {
        homeSaucePage.visit();
        homeSaucePage.login(homeSaucePage.usernameValid, homeSaucePage.passwordValid)
    });

    it('should display products', () => {
        inventoryPage.elements.titleSpan().should('have.text', 'Products');
        // inventoryPage.verifySpecificProductVisible();
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
        .closest('.inventory_item') // Buscar el ancestro con la clase ".inventory_item"
        .find('.btn_primary.btn_inventory') // Buscar el botón "ADD TO CART" dentro del ancestro
        .click(); // Hacer clic en el botón "ADD TO CART"
    }); 
});