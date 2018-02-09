package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver", "/Users/mac/Downloads/BrowserDriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.freecrm.com/index.html");

	}

	@Then("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
	    String title = driver.getTitle();
	    System.out.println("Login Page Title; " + title);
	    Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	    
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String usrName, String passWrd) {
	    driver.findElement(By.name("username")).sendKeys(usrName);
	    driver.findElement(By.name("password")).sendKeys(passWrd);
	    
	}

	@And("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginBtn);

	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
	    String title = driver.getTitle();
	    System.out.println("Home Page Title: " + title);
	    Assert.assertEquals("CRMPRO", title);
	    
	}
	
	@Then("^user close the browser$")
	public void user_close_the_browser() {
	   driver.quit();
	}

}
