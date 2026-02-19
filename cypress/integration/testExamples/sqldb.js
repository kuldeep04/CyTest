/// <reference types="cypress" />

context('Window', () => {
   

    it('Datebase interaction', () => {
        cy.sqlServer("select * from Persons").then(function(results){

            console.log(results)
        })
    })
})