# Author: Shah Jalal
Feature: Free CRM app Test 

Scenario: Free CRM Create New Deal Test 

	Given user is on deal page 
	When user fills the new deals form 
	And user click on the save button 
	Then new deal created 
	
Scenario: Free CRM Create New Contact Test 

	Given user is on contact page 
	When user fills the new contact from 
	And user click on the save button 
	Then new contact created 
	
Scenario Outline: Free CRM Create New Form Test 

	Given user is on form page 
	When user fills the new form 
	And user click on the save button 
	Then new form created 
	Examples: 
		| Title | Description | WelcomeMsg | ConfirmMsg |
		
 