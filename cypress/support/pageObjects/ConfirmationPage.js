class ConfirmationPage{

    enterCountryName(countryName){
        cy.get('#country').type(countryName);
    }

    selectSuggestedCountry(){
        cy.get('.suggestions ul li a', {timeout: 6000}).click();
    }

    clickOnPurchase(){
        cy.get('input[type="submit"]').click();
    }

    validateSuccessMessage(){
        cy.get('.alert-success').should('contain', 'Success');
    }
}

export default ConfirmationPage;