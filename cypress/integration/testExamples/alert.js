/// <reference types="cypress"/>

describe('Alert test scenarios', ()=>{
     it('Test alert', ()=>{
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

            //alert

            cy.get('#alertbtn').click()
            cy.get('[value="Confirm"]').click()

            cy.on('window:alert', (str)=>{
                    expect(str).to.equal('Hello , share this practice page and share your knowledge');
            })

            cy.on('window.confirm', (str)=>{
                expect(str).to.equal('Hello , Are you sure you want to confirm?');
            })

     });

     it('captures multiple alerts', () => {
        const messages = [];
        cy.on('window:alert', (msg) => {
          messages.push(msg);   // store alert messages
        });
        // Trigger alerts (example app code)
        cy.window().then((win) => {
          win.alert('First Alert');
          win.alert('Second Alert');
          win.alert('Third Alert');
        });
    
        cy.then(() => {
          expect(messages).to.deep.equal([
            'First Alert',
            'Second Alert',
            'Third Alert'
          ]);
        });
      });
})