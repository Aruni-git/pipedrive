export class LoginPage{

    navigateToLogin(){
        cy.visit('/auth/login')
        cy.url().should('eq', 'https://app.pipedrive.com/auth/login')
     }

    userLogin(){

        //Enter email address
        cy.get('[data-test="login"]').type('aruni.gunapala@gmail.com')

        //Enter password
        cy.get('[data-test="password"]').type('Wiley@1234')

        //Click login button
        cy.get('[data-test="submit-button"]').click()}

 }
    

export const onLoginPage = new LoginPage()