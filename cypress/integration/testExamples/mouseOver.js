/// <reference types="cypress" />

describe('Cypress mouse over', ()=>{

    it('mouseOver', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.mouse-hover-content').invoke('show')
    })

    it('Click without show', ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })
})