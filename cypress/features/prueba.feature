Feature: Local Page Test

  @focus
  Scenario: Visit local page and check for "Hola Mundo"
    Given I open Local page
    When I should see "Hola Mundo" on the page