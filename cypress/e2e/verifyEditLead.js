import{onLoginPage} from "../support/page_objects/loginPage"
import{onDealsPage} from "../support/page_objects/dealsPage"
import{onLeadsPage} from "../support/page_objects/leadsPage"
import{oneEditLeadsPage} from "../support/page_objects/editLeadsPage"

describe('verify create new lead', () =>{

    beforeEach('Navigate to login', () =>{
       
        onLoginPage.navigateToLogin()
        onLoginPage.userLogin()
})

it('TC 01 verify edit a lead', () => {
    onDealsPage.navigateToLeads()
    onLeadsPage.selectALead()
    oneEditLeadsPage.EditLeadDetails()
    
})

})