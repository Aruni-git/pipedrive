export class editLeadsPage {
  EditLeadDetails() {

   cy.get('[class="ExpandableSection__Wrapper-sc-wphg4w-2 hHpPBU"]>>[class="SidebarFieldWrapperstyles__FieldWrapper-sc-1p59g5d-1 iNlPyC"]> :nth-child(2)  >[class="ff_v882__ComponentState__wrapperEdit__Vyl ff__edit"]>:nth-child(2)').invoke('css', 'visibility','visible')
   
  cy.get('[data-testid="PersonSection"] > .Stack-sc-1tpz856-0 > :nth-child(1) > .SidebarFieldWrapperstyles__ContentWrapper-sc-1p59g5d-2 > .ff_v882__ComponentState__wrapperEdit__Vyl > .ff_v882__ComponentState__edit__7vs > .cui5-button').click()
  cy.get('.editMode > .cui5-input > .cui5-input__box > input').clear().type('Martin')
  cy.get('.ff_v882__ActionFooter__footerWrapper__ZlC > .cui5-button--variant-primary > .cui5-button__label').click()
  
  

  }
  //convertToDeal
  convertToDeal() {
    cy.get('[data-testid="ConvertModalButton"] > .cui5-button__label').click();
  }

}
export const oneEditLeadsPage = new editLeadsPage();
