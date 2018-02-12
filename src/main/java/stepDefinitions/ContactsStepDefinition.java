package stepDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;

public class ContactsStepDefinition {

	WebDriver driver;

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "/Users/mac/Downloads/BrowserDriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}
//
//	@After
//	public void tearDown() {
//		driver.quit();
//
//	}

	@When("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(), 'New Contact')]")).click();
	}

	@And("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String firstName, String lastName, String position) {
		driver.findElement(By.id("first_name")).sendKeys(firstName);
		driver.findElement(By.id("surname")).sendKeys(lastName);
		driver.findElement(By.id("company_position")).sendKeys(position);

	}

	@And("^click on save button$")
	public void click_on_save_button() {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();

	}
}
