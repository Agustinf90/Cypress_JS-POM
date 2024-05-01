class inventoryPage{
    elements = {
        titleSpan: () => cy.get('.product_label'),
        btnCart: () => cy.get('.btn_primary.btn_inventory')
    }
    
    clickAddToCart(){
        this.elements.btnCart().click();
    }
}

module.exports = new inventoryPage ();