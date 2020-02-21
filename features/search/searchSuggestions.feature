Feature: Search Suggestions

Scenario: Related suggestions are displayed in the search suggestions menu
Given I open the "home" page
When I enter search terms "<search_terms>" in the search field
Then I should see the search suggestions menu
    And I should see suggestions containing "<terms>"

Examples:
    | search_terms | terms |
    | software development | software development |
