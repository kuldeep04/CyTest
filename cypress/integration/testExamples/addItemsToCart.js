/// <reference types="cypress" />

describe('Add iteam to cart', () => {
    it('Visits the Cypress Documentation', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.url().should('include', '/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.get('.products').find('.product').as('products')
      cy.get('@products')
      .should('have.length', 4)
      cy.get('@products').each(($el, index, $list) =>{
        const text = $el.find('h4.product-name').text();
        if(text.includes('Capsicum')){
           cy.wrap($el).find('button').click();
        }
      })

      cy.get('.brand').then( function(logo){
        cy.log(logo.text())
      })

      const expectedValue = ['1', '60']
      cy.get('.cart-info table tbody tr').each( ($el, index) => {
         const itemQuan =  $el.find('strong').text().trim()
         expect(itemQuan).to.equal(expectedValue[index])
      })
    })
  });

