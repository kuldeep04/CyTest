import ConfirmationPage from "./ConfirmationPage";

class CartPage{

    validateCartPage(){
        cy.contains('th', 'Product').should('be.visible');
    }

    getTotalAmount() {
        let totalPrice = 0;
        return cy.get('tr td:nth-child(4) strong').each(($el) => {
            const price = Number($el.text().split(" ")[1].trim());
            totalPrice += price;
        }).then(() => {
            return totalPrice; 
        });
    }

    clickOnCheckOut(){
        cy.contains('button','Checkout').click()
        return new ConfirmationPage();
    }

}

export default CartPage;