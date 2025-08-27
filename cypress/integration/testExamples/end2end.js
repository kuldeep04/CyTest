/// <reference types="cypress"/>

import HomePage from "../../support/pageObjects/HomePage"

describe('E2E ecommerce test', ()=>{

    
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
            this.homePage = new HomePage()
        })
    })

    it('Submit order',function(){
        const productName = this.data.productName
        this.homePage.goTo(Cypress.env('url')+"/loginpagePractise/#")
        const productPage = this.homePage.login(this.data.userName, this.data.password)
        productPage.validateProductPage()
        productPage.validateProductCardSize()
        productPage.addItemToCart(productName)
        productPage.addAnotherItem(0)
        const cartPage = productPage.clickOnCheckOut()
        cartPage.validateCartPage()
        cartPage.getTotalAmount().then((amount)=>{
            cy.log(amount)
            expect(amount).to.be.lessThan(200000)
        })
        const confirmationPage = cartPage.clickOnCheckOut()
        confirmationPage.enterCountryName('India')
        confirmationPage.selectSuggestedCountry();
        confirmationPage.clickOnPurchase()
        confirmationPage.validateSuccessMessage()
   
    })
})