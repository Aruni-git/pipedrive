export class dealsPage{

    navigateToLeads(){
        //click leads tab
        cy.wait(10000)
        cy.get('[data-test="navbar-item-lead"] > .sc-kDDrLX').click()
        cy.get('.sc-hTtwUo').should('have.text','Leads')
    }
}

export const onDealsPage = new dealsPage()