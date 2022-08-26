import{onLoginPage} from "../support/page_objects/loginPage"
import{onDealsPage} from "../support/page_objects/dealsPage"
import{onLeadsPage} from "../support/page_objects/leadsPage"
import{oneEditLeadsPage} from "../support/page_objects/editLeadsPage"

describe('verify eidt/convert lead', () =>{

    beforeEach('Navigate to login', () =>{
       
        onLoginPage.navigateToLogin()
        onLoginPage.userLogin()
}) 

it('TC 01 verify edit a lead', () => {
    onDealsPage.navigateToLeads()
    onLeadsPage.selectALead()
    oneEditLeadsPage.EditLeadDetails()
   
     })

it('TC 02 verify convert to lead', () => {
    onDealsPage.navigateToLeads()
    onLeadsPage.selectALeadToConvert()
    onLeadsPage.clickConvertToLead()
    onLeadsPage.clickSaveDeal()  
    onLeadsPage.clickProfile()
    onLeadsPage.clickLogout()
})


})