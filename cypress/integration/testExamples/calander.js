/// <reference types="cypress"/>

describe('calander scenarios', ()=>{
    it('pick a date', ()=>{
        const date = "15";
        const month = "6";
        const year = "2027";
        const list = [month, date, year]
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.contains('Top Deals').invoke('removeAttr', 'target').click()
        cy.get('.react-date-picker__inputGroup').click();
        cy.get('.react-calendar__navigation__label__labelText').as('yearMonth').click();
        cy.get('@yearMonth').click();
        cy.contains('button', year).click();
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click();
        cy.contains('abbr', date).click();

        cy.get('.react-date-picker__inputGroup__input').each((el, index)=>{
                cy.wrap(el).invoke('attr', 'value').then((val)=>{
                    expect(val).equal(list[index]);
                })
        })

    })
})