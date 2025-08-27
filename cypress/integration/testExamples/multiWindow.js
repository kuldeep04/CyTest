/// <reference types="cypress"/>


describe('Multi-window test scenerio', ()=>{

    it('Open another window using remove attribute target', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com/', ()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain','QAClick Academy');
        })
    })

    it('Open another window using get href', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('attr', 'href').then((href)=>{
            cy.visit(href)
            cy.origin('https://www.qaclickacademy.com/', ()=>{
                cy.get("#navbarSupportedContent a[href*='about']").click();
                cy.get(".mt-50 h2").should('contain','QAClick Academy');
            })
        })
    })
})