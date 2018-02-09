package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactsStepDefinition {

	WebDriver driver;

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "/Users/mac/Downloads/BrowserDriver/chromedriver");
		driver = new ChromeDriver();
	}

	@After
	public void tearDown() {
		driver.quit();

	}

	@When("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() {
		// Write code here that turns the phrase above into concrete actions

	}

	@And("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String arg1, String arg2, String arg3) {
		// Write code here that turns the phrase above into concrete actions

	}

	@And("^click on save button$")
	public void click_on_save_button() {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^new ontact generated$")
	public void new_ontact_generate() {
		// Write code here that turns the phrase above into concrete actions

	}

}
