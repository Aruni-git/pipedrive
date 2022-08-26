
export class LeadsPage {

    clickAddLead(){

        cy.wait(3500)
        cy.get('[data-testid="AddLeadButton"] > .cui5-button__label').click()
        cy.get('[data-test="add-modal"] > .cui5-modal__header > h3').should('have.text', 'Add lead')
    }

    addLeadsDetails(){

        //Enter contact person text
        const date = new Date().toISOString()
        cy.get('#downshift-0-input').type('John Smith'+ date)
        //add as a new contact
        cy.get('.ff_v882__EntitySuggestions__addNewText__KgQ').click()
        //Enter orgnaization text
        cy.get('#downshift-1-input').type('IFS Lead'+ date)
        //Add as a new organization
        cy.get('.ff_v882__EntitySuggestions__addNewText__KgQ').click()
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type(30000)
        //Add phone number
        cy.get(':nth-child(1) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('+94711345677')
        //Add email address
        cy.get(':nth-child(2) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('john@gmail.com')
    }

    clickSave(){

        cy.get('[data-test="add-modals-save"] > .cui5-button__label').click()
        cy.wait(3000)
        cy.get('.cui5-snackbar__message').should('be.visible')      
    }

    clickSaveDeal(){

       // cy.contains('Save').first().focus().click()
        cy.focused().then(('[data-test="add-modals-save"] > .cui5-button__label'), () => {
            cy.contains('Save').click()
            cy.get('.cui5-snackbar__message').should('be.visible')      
          })
      
       
    }

    clickCancel(){

        cy.get('[data-test="add-modals-cancel-button"]').click()
        
    }

    clickConvertToLead(){

       cy.get('[data-testid="ConvertModalButton"]').click()
        
    }

    clickSaveMandatoryField(){

        cy.get('[data-test="add-modals-save"] > .cui5-button__label').click()
        cy.get('[data-test-type="person"] > :nth-child(2) > :nth-child(1) > [role="combobox"] > :nth-child(1) > :nth-child(1) > .ff_v882__InputSelect__wrapper__alI > .cui5-input > .cui5-input__error-message').should('have.text' ,'A person or organization is required')
        cy.get(':nth-child(2) > .cui5-input > .cui5-input__error-message').should('have.text' ,'Title is required')
    }

    //Add a lead for an existing contact but with a new company
    addLeadsDetailsForExistingContact(){

         //Add contact person
        cy.get('#downshift-0-input').type('John Smith')
        cy.get('#downshift-0-item-0 > [data-testid="option"] > .ff_v882__EntitySuggestions__details__TLu').should('have.text', 'john@gmail.com')
        cy.get('#downshift-0-item-0 > [data-testid="option"] > .ff_v882__EntitySuggestions__details__TLu').click()
        //Add new orgnization
        cy.get('#downshift-1-input').clear()
        cy.get('#downshift-1-input').type('Pepsi')
        cy.get('.ff_v882__EntitySuggestions__addNewText__KgQ').click()
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type(30000)

       
    }

    //Add a lead -new contact,existing company
    addNewLeadsDetailsForExistingCompany(){

        //Enter contact person text
        const date = new Date().toISOString()
        cy.get('#downshift-0-input').type('Cameron Diaz'+ date)
        //add as a new contact
        cy.get('.ff_v882__EntitySuggestions__addNewText__KgQ').click()
        //Add Organization
        cy.get('#downshift-1-input').type('Verdant')
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type(20000)
        //Review existing organization
        cy.get('[data-test="duplicate-review"]').click({ force: true })
        cy.contains('Verdant').click({ force: true })
        //Add phone number
        cy.get(':nth-child(1) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('+94711345675')
        //Add email address
        cy.get(':nth-child(2) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('camron@gmail.com')
    }

    //Add an existing lead for existing company (Duplicate lead)
    addLeadsDetailsForexistingLead(){

        //Add contact person
        cy.get('#downshift-0-input').type('John Smith')
        cy.get('#downshift-0-item-0 > [data-testid="option"] > .ff_v882__EntitySuggestions__details__TLu').should('have.text', 'john@gmail.com')
        cy.get('#downshift-0-item-0 > [data-testid="option"] > .ff_v882__EntitySuggestions__details__TLu').click()
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type(30000)
    
    }

   //Phone number validation
   addLeadsDetailsForPhoneValidation(){

        //Enter contact person text
        const date = new Date().toISOString()
        cy.get('#downshift-0-input').type('Jay Fernando '+ date)
        //add as a new contact
        cy.get('.ff_v882__EntitySuggestions__addNewText__KgQ').click()
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type(30000)
        //Add phone number
        cy.get(':nth-child(1) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('+abcdef$%')
        cy.get('.cui5-input__error-message').should('contain','Please enter a valid number')
}

    validatePhoneNumber(){

        cy.get('[data-test="add-modals-save"] > .cui5-button__label').click()
   
        cy.get('.cui5-snackbar__message').should('not.exist')
    
}

    //Currency value validation
    addLeadsDetailsForCurrencyValidation(){

        //Enter contact person text
        const date = new Date().toISOString()
        cy.get('#downshift-0-input').type('Robert Fernando '+ date)
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('jk$%')
        //Add phone number
        cy.get(':nth-child(1) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('+94711345675')
}

    validateCurrency(){
       
        cy.get('.cui5-input__error-message').should('contain','Please enter a valid number')
}

    //Email address validation
    addLeadsDetailsForEmailValidation(){

        //Enter contact person text
        const date = new Date().toISOString()
        cy.get('#downshift-0-input').type('Kasuntha Fernando '+ date)
        //add as a new contact
        // cy.get('.ff_v882__EntitySuggestions__addNewText__KgQ').click()
        //Add email address
        cy.get(':nth-child(2) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').click({force: true})
        cy.get(':nth-child(2) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('camron')
        //add phone number
          //Add phone number
          cy.get(':nth-child(1) > .FormField__formField--E60Qw > :nth-child(2) > .Duplicates__popoverWrap--__Zlj > :nth-child(1) > .ff_v882__InputSelectAddMore__wrapper__aVl > section > .ff_v882__InputSelectAddMore__itemWrap__gXU > .ff_v882__InputSelectAddMore__item__qFn > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type('+94711345675')
}

    validateEmailAddress(){

        cy.get('.cui5-input__error-message').should('have.text', 'Email is not valid')
}

    //Verify cancel button
    addLeadsDetailsForCancelCheckButton(){

        //Add contact person
        cy.get('#downshift-0-input').type('John Smith')
        cy.get('#downshift-0-item-0 > [data-testid="option"] > .ff_v882__EntitySuggestions__details__TLu').should('have.text', 'john@gmail.com')
        cy.get('#downshift-0-item-0 > [data-testid="option"] > .ff_v882__EntitySuggestions__details__TLu').click()
        //Add Value
        cy.get(':nth-child(2) > .ff_v882__InputSelectCompound__compoundComponent__JpK > .ff_v882__InputSelectCompound__inputWrap__BiG > .cui5-input > .cui5-input__box > [data-testid="compound-input"]').type(30000)

    }

    selectALead(){
        cy.wait(8000)
        cy.get('[class="FieldText-sc-12bz3dv-0 vMyBt"]').first().click()
    }

    selectALeadToConvert(){
        cy.wait(7000)
        cy.get('[class="FieldText-sc-12bz3dv-0 vMyBt"]').first().click()
    }

    selectOptions(){
        cy.wait(3000)
        cy.get('.hEqhrf > .cui5-button--size-s').click()
        
    }
   
    //click delete
    clickDelete(){
        cy.contains('Delete lead').click({force:true})
        cy.get('.cui5-dialog--visible > .cui5-dialog__wrap > .cui5-dialog__actions > [data-testid="dialogDeleteButton"] > .cui5-button__label').click()
    }

    //click profile
    clickProfile(){
        cy.get('[data-test="account-menu-button"]').click()
    }

    //click signout
    clickLogout(){
        cy.get('[data-test="submenu-item-logout"] > .sc-dPyBCJ').click()
        cy.url().should('eq', 'https://www.pipedrive.com/')
}

}

export const onLeadsPage = new LeadsPage()