import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/HomePage"
const homePage = new HomePage()

Given('I am on Ecommerce Page', () => {
    homePage.goTo(Cypress.env('url') + "/loginpagePractise/")
})

When('I login to the application', function ()  {
    this.productPage = homePage.login(this.data.userName, this.data.password)
    this.productPage.validateProductPage()
    this.productPage.validateProductCardSize()
})

When('I login to the application portal',function(dataTable){
    this.productPage = homePage.login(dataTable.rawTable[1][0],dataTable.rawTable[1][1]) 
    this.productPage.validateProductPage()
    this.productPage.validateProductCardSize()

})

When('I add items to Cart and checkout', function () {
    this.productPage.addItemToCart(this.data.productName)
    this.productPage.addAnotherItem(1)
    this.cartPage = this.productPage.clickOnCheckOut()
})


When('Validate the total price limit', function () {
    this.cartPage.getTotalAmount().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
    })

})

Then('select the country submit and verify Thankyou', function () {
    const confirmationPage = this.cartPage.clickOnCheckOut()
    confirmationPage.clickOnPurchase()
    confirmationPage.validateSuccessMessage()

})
