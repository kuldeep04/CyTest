/// <reference types="cypress" />

describe('Add iteam to cart', () => {
    it.only('Visits the Cypress Documentation', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.url().should('include', '/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.get('.products').find('.product').as('products')
      cy.get('@products').each(($el, index, $list) =>{
        const text = $el.find('h4.product-name').text();
        if(text.includes('Capsicum')){
           cy.wrap($el).find('button').click();
        }
      })
      cy.get('.cart-icon').click()
      cy.get('.cart-items').each(($el, index) =>{
         const productName = $el.find('.cart-item div > .product-name').text();
         expect(productName.trim().toLocaleLowerCase()).to.equal('capsicum')
      })
      cy.contains('button', 'PROCEED TO CHECKOUT').click()
      cy.get('.promoBtn').as('promoButton')
      cy.get('@promoButton').should('be.visible')
      cy.get('.promoCode').clear().type('abc')
      cy.get('@promoButton').click()
      cy.wait(3000)
      cy.get('.promoInfo',{ timeout: 10000 }).invoke('text').then((errorText)=>{
        cy.wrap(errorText).should('be.equal', 'Invalid code ..!')
      })

      cy.get('.discountAmt').should('be.visible')
      cy.get('.discountAmt').should('have.text', '60')
      cy.contains('button', 'Place Order').click()
      cy.url().should('include', '/#/country')

    })
  });

