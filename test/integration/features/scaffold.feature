Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then the .gitea directory exists
    And the details are returned as results
