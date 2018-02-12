# Author: Shah Jalal
Feature: Free CRM Login Feature

#without Examples Keyword
Scenario Outline: Free CRM Create New Contact Test Scenario

Given user is already on Login Page
Then title of login page is Free CRM
When user enters "<username>" and "<password>"
And user clicks on login button
Then user is on home page
When user moves to new contact page
And user enters contact details "<firstname>" and "<lastname>" and "<position>"
And click on save button
Then user close the browser

Examples:
	| username | password | firstname | lastname | position |
	| naveenk  | test@123 | Tom       | Peter    | Manager  |
	| naveenk  | test@123 | David     | Dsouza   | Director |