/// <reference types="cypress" />

describe('Test of checkBox', () =>{

    it.only('Select checkBox', () =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        //Static dropdown

        cy.get('#dropdown-class-example').as('select').select('Option3').should('have.value', 'option3');
        cy.get('@select').select('Option2').should('have.value', 'option2')

        //Dynamic dropdown

        cy.get('#autocomplete').as('auto').type('ind')
        cy.get('.ui-menu-item div').each(($el) =>{
            if($el.text()=='India'){
                cy.wrap($el).click();
            }
        })

        cy.get('@auto').should('have.value', 'India')

        //invisible and visible 

        cy.get('#displayed-text').as('text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('@text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('@text').should('be.visible')

        //radio button

        cy.get('[value="radio2"]').check().should('be.checked')
    })
})