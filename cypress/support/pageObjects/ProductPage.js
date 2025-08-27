import CartPage from "./CartPage";

class ProductPage{

    validateProductPage(){
        cy.contains('Shop Name').should('be.visible')
    }

    validateProductCardSize(){
        cy.get('app-card').should('have.length', 4)
    }

    addItemToCart(productName){
        cy.get('app-card').filter(`:contains(${productName})`).then(($element) =>{
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).contains('button', 'Add').click();
        })
    }

    addAnotherItem(itemNumber){
        cy.get('app-card').eq(itemNumber).contains('button', 'Add').click();
    }

    clickOnCheckOut(){
        cy.contains('a', 'Checkout').click();
        return new CartPage();
    }

}

export default ProductPage;