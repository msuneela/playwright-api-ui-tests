# UI-API automation PLAYWRIGHT
# I have used macOS to run these tests
  # Clone repo 
  $ git clone https://github.com/msuneela/playwright-api-ui-tests.git

# Installs test dependencies
   $ npm install

 # Run UI tests in headless
    $ npx playwright test tests/ui
  
# Run tests in  browser, This allows to choose which tests can run
    $ npx playwright test --ui

 # Run tests in headless mode both API and UI , API tests will fail as the url is not valid.
   $ npx playwright test  


--tests
   |--api-test
   |--ui-tests



   The above folder consists of main tests for both api and ui.

   # API -TESTS:
   I have created dummy api test. It will fail as this URL does not work.
   --utils
   |--api-utils.ts

    In api-utils.ts consists of reusable methods for api

   --test-data
      |--expected-api-response.json # the above file consists of expected response and can use in the test to compare responses.

       

#UI-TESTS and TEST RESULTS
--config
  |--config.ts
--page-objects
  |--base-page.ts
  |--home-page.ts
--support
  |--common-helper.ts
--test-results
  |-html
    |-index.html
  |-output.xml 
--.env

.env stores url as environment variables. In config.ts file it calls them and stores other text.
In base page it has function that can use across pages.
home-page has locators and functions that relate to page
common-helper has functions that can use across pages

Under test-results htmls folder consists of video and and index.html will have test report this is configured in playwright.config.ts

ouput.xml can use for ci/cd pipelines
under test result for each run it creates forde for each test can see videos and screenshots in respective folder.

# Configure CI/CD Pipeline:

Use a CI/CD tool like GitHub Actions or GitLab CI/CD to automate the execution of tests.

# Trigger build:

CI/CD can configure for below scenarios

Pull Requests: Run tests when a pull request is created or updated.

Main Branch: Run tests when changes are merged into the main branch.

Scheduled Runs: Run tests every night

environment:

Run tests on qa everynight or depends on project reuirement what ever environment is chosen

Artifacts:

Store test artifacts (e.g., screenshots, videos, reports) for debugging and analysis.

Upload the output.xml (JUnit) and results.html (HTML report) to the CI/CD system.
Store results for like 90 days or what ever suitable for team need.

Notifications:

Send notifications (e.g., email, Slack) for test failures or pipeline status.

github actions should have .yml file to achieve ci/cd pipeline and able to configure according to project needs

# I have included example yml as playwright.yml for reference in main project folder

  
