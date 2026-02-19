Feature: End to end ecommerce validation

    @regression
    Scenario: Ecommerce products delivery
        Given I am on Ecommerce Page
        When I login to the application
        And I add items to Cart and checkout
        And Validate the total price limit
        Then select the country submit and verify Thankyou

    @smoke
    Scenario Outline: Ecommerce products delivery with data example
        Given I am on Ecommerce Page
        When I login to the application portal
            | username           | password |
            | rahulshettyacademy | learning |
        And I add items to Cart and checkout
        And Validate the total price limit
        Then select the country submit and verify Thankyou

