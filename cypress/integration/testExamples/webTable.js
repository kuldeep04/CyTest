/// <reference types="cypress"/>


describe('My Second Test Suite', function() {
 
    it('Get price of Pythong course', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').as('course').each(($el, index) =>{
            const text=$el.text()
            if(text.toLowerCase().includes("python")){
                cy.get('@course').eq(index).next().then(function(coursesPrice){
                    const price = coursesPrice.text();
                    expect(price).to.equal('25');
                    })
                }   
        })
    })

    it('Print name of all engineer', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.tableFixHead tr td:nth-child(2)').as('position').each(($el, index)=>{
                if($el.text().toLowerCase().includes("engineer")){
                    cy.get('@position').eq(index).prev().then(($name)=>{
                            cy.log($name.text());
                    })
                }
        })
    })
})