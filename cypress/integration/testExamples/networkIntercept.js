/// <reference types="cypress"/>

describe('Network intercept tests', ()=>{

    it('first network call', ()=>{
        cy.visit("https://www.rahulshettyacademy.com/angularAppdemo/")

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode: 200,
            body: [{
                book_name: "RestAssured with Java",
                isbn: "LSA",
                aisle: "2303"}]
        }).as('response')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@response',{requestTimeout: 10000 }).then( ({request,response})=>
            {
                cy.get('tr').should('have.length',response.body.length+1)
             
            })
            cy.get('p').should('have.text','Oops only 1 Book available')


    })
})