import{onLoginPage} from "../support/page_objects/loginPage"
import{onDealsPage} from "../support/page_objects/dealsPage"
import{onLeadsPage} from "../support/page_objects/leadsPage"
import{oneEditLeadsPage} from "../support/page_objects/editLeadsPage"

describe('verify delete a lead', () =>{

    beforeEach('Navigate to login', () =>{
       
        onLoginPage.navigateToLogin()
        onLoginPage.userLogin()
})

it('TC 01 verify delete a lead', () => {
    onDealsPage.navigateToLeads()
    onLeadsPage.selectALead()
    onLeadsPage.selectOptions()

    
})

})