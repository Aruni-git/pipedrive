import { onLoginPage } from "../support/page_objects/loginPage";
import { onDealsPage } from "../support/page_objects/dealsPage";
import { onLeadsPage } from "../support/page_objects/leadsPage";

describe("verify create new lead", () => {

  beforeEach("Navigate to login", () => {

      onLoginPage.navigateToLogin();
      onLoginPage.userLogin();
  });

  it("TC 01 verify add a new lead", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetails();
      onLeadsPage.clickSave();
  });

  it("TC 02 verify add a new lead record for existing contact and exisiting company", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetailsForexistingLead();
      onLeadsPage.clickSave();
  });

  it("TC 03 verify add a new lead record for existing contact and new company", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetailsForExistingContact();
      onLeadsPage.clickSave();
  });

  it("TC 04 verify add a new lead record for new contact and existing company", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addNewLeadsDetailsForExistingCompany();
      onLeadsPage.clickSave();
  });

  it("TC 05 verify mandaory field validations", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.clickSaveMandatoryField();
  });

  it("TC 06 verify phone number validation", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetailsForPhoneValidation();
      onLeadsPage.validatePhoneNumber();
  });

  it("TC 07 verify email address validation", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetailsForEmailValidation();
      onLeadsPage.validateEmailAddress();
  });

  it("TC 08 verify currency validation", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetailsForCurrencyValidation();
      onLeadsPage.validateCurrency();
  });

  it("TC 09 verify cancel button", () => {

      onDealsPage.navigateToLeads();
      onLeadsPage.clickAddLead();
      onLeadsPage.addLeadsDetailsForCancelCheckButton();
      onLeadsPage.clickCancel();
    
  });

});
