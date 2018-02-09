$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Author: Shah Jalal"
    }
  ],
  "line": 2,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    }
  ],
  "line": 5,
  "name": "Free CRM Create New Contact Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new contact page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "new ontact generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 18,
      "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Dsouza",
        "Director"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Create New Contact Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new contact page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "new ontact generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "ContactsStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.new_ontact_generate()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Create New Contact Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-create-new-contact-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new contact page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters contact details \"David\" and \"Dsouza\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "new ontact generated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsouza",
      "offset": 41
    },
    {
      "val": "Director",
      "offset": 54
    }
  ],
  "location": "ContactsStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactsStepDefinition.new_ontact_generate()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Author: Shah Jalal"
    }
  ],
  "line": 2,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "##without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#Then title of login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#When user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 10,
      "value": "#And user clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then user is on home page"
    },
    {
      "line": 12,
      "value": "#Then user close the browser"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tomk",
        "tom@123"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tomk\" and \"tom@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "tomk",
      "offset": 13
    },
    {
      "val": "tom@123",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});