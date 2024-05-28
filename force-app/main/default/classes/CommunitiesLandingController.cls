/**
 * An apex page controller that takes the user to the right start page based on credentials or lack thereof
 */
public with sharing class CommunitiesLandingController {
  // Code we will invoke on page load.
  public PageReference forwardToStartPage() {
    return Network.communitiesLanding();
  }

  public PageReference forwardToSetup() {
    User user;

    try {
      user = [
        SELECT Id
        FROM User
        WHERE Id = :UserInfo.getUserId() AND IsHasCompleteProfile__c = TRUE
        WITH SECURITY_ENFORCED
        LIMIT 1
      ];
      // Proceed with the user, as the query was successful
    } catch (QueryException e) {
      // Handle the case where no user is found
      user = null;
    }
    if (user == null) {
      PageReference reference = new PageReference(
        Site.getBaseUrl().replace('vforcesite', '/registration')
      );
      reference.setRedirect(true);
      return reference;
    }
    return forwardToStartPage();
  }

  public CommunitiesLandingController() {
  }
}
