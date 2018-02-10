package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "/Users/apple/Downloads/Browser_driver/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");

	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable {
	    String title = driver.getTitle();
	    System.out.println("Login Page Title; " + title);
	    Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	    
	}

	// Regular Expression Option:
	// 1. \"(.*)\" -> any character (except a newline)
	// 2. \"([^\"]*\") -> matching something (or nothing) in double quotes
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String usrName, String passWrd) throws Throwable {
	    driver.findElement(By.name("username")).sendKeys(usrName);
	    driver.findElement(By.name("password")).sendKeys(passWrd);
	    
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);

	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    String title = driver.getTitle();
	    System.out.println("Home Page Title: " + title);
	    Assert.assertEquals("CRMPRO", title);
	    
	}

}
