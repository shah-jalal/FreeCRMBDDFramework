# Author: Shah Jalal
Feature: Free CRM Login Feature

##without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#Then title of login page is Free CRM
#When user enters "naveenk" and "test@123"
#And user clicks on login button
#Then user is on home page
#Then user close the browser

#with Examples Keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
Then title of login page is Free CRM
When user enters "<username>" and "<password>"
And user clicks on login button
Then user is on home page
Then user close the browser

Examples: 
		| username | password |
		| naveenk  | test@123 |
		