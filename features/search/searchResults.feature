Feature: Search Results

Scenario: Relevant results are displayed on results page
Given I open the "home" page
When I enter search terms "<search_terms>" in the search field
    And I submit the search
Then I should be taken to the search results page
    And I should see search results containing "<terms>"
    And the total number of results is displayed

Examples:
    | search_terms | terms |
    | software development | software,develop,program,hooked,robot | 