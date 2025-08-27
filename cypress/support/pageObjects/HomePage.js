import ProductPage from "./ProductPage"

class HomePage{

    goTo(url){
        cy.visit(url)
    }

    login(userName, password){
        cy.get('#username').type(userName)
        cy.get('#password').type(password)
        cy.contains('Sign In').click()
        return new ProductPage();
    }
}
export default HomePage;