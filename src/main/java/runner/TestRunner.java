package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "features", 
			glue={"stepDefinitions"}, 
			format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
			monochrome = true, 
			strict = true, 
			dryRun = false 
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)
	 
	public class TestRunner {
	 
}

/*Note: 
 * features = "the path of the feature files"
 * glue={"the path of stepDefinitions"}
 * format= {to generate different types of reporting}
 * monochrome = display the console output in a proper readable format
 * strict = it will check if any step is not defined in step definition file
 * dryRun = to check the mapping is proper between feature file and step_def file
 */
