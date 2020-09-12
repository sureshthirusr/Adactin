$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing of Booking functionality in Adactin Application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the User is able to login the application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid username in Username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the valid password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 1646887400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_username_in_Username_field()"
});
formatter.result({
  "duration": 157576600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_password_in_password_field()"
});
formatter.result({
  "duration": 89842500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_Login_Button()"
});
formatter.result({
  "duration": 1560648400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user is in SearchHotel page",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-user-is-in-searchhotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User selects the location in the Select location field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User selects the Hotel in Select Hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User selects the room type in Select Room type field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User selects the number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects the check in date",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects the check out date",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User selects the adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User selects the children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on search button to search for the details",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User verify the Search Hotel Page navigates to Select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_the_location_in_the_Select_location_field()"
});
formatter.result({
  "duration": 115308300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_Hotel_in_Select_Hotel_field()"
});
formatter.result({
  "duration": 110306100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_room_type_in_Select_Room_type_field()"
});
formatter.result({
  "duration": 97804100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_rooms()"
});
formatter.result({
  "duration": 62718100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_in_date()"
});
formatter.result({
  "duration": 76901900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_out_date()"
});
formatter.result({
  "duration": 74627700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_adults_per_Room()"
});
formatter.result({
  "duration": 95608400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_children_per_Room()"
});
formatter.result({
  "duration": 78151200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_search_button_to_search_for_the_details()"
});
formatter.result({
  "duration": 541258300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Search_Hotel_Page_navigates_to_Select_hotel_page()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user is in Select Hotel page",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-user-is-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User clicks on the selected radion button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User clicks on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verify the Select Hotel page navigates to Book a Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_selected_radion_button()"
});
formatter.result({
  "duration": 75367400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_continue_button()"
});
formatter.result({
  "duration": 414832700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Select_Hotel_page_navigates_to_Book_a_Hotel_page()"
});
formatter.result({
  "duration": 41500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify user is in Book a Hotel page",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-user-is-in-book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User enters the  first name in FirstName field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User enters the  last name in LastName field",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters the  billing Address in Billing Address field",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters the  Credit Card Number in Credit Card Number field",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters the  credit card type in Credit Card Type field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User enters expiry month in Expiry Month field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters expiry year in Expiry Year field",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enters the cvv number in CVV field",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User clicks on the BookNow Button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User verify the Book a Hotel navigates to Booking Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_first_name_in_FirstName_field()"
});
formatter.result({
  "duration": 92952400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_last_name_in_LastName_field()"
});
formatter.result({
  "duration": 81017300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_billing_Address_in_Billing_Address_field()"
});
formatter.result({
  "duration": 93477900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Credit_Card_Number_in_Credit_Card_Number_field()"
});
formatter.result({
  "duration": 90541600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_credit_card_type_in_Credit_Card_Type_field()"
});
formatter.result({
  "duration": 105779900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_expiry_month_in_Expiry_Month_field()"
});
formatter.result({
  "duration": 103070900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_expiry_year_in_Expiry_Year_field()"
});
formatter.result({
  "duration": 78336900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_cvv_number_in_CVV_field()"
});
formatter.result({
  "duration": 81781900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_BookNow_Button()"
});
formatter.result({
  "duration": 71895200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Book_a_Hotel_navigates_to_Booking_Confirmation_page()"
});
formatter.result({
  "duration": 13200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify user is in Booking ConfirmationPage",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-user-is-in-booking-confirmationpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "user clicks on book itinerary button",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User clicks on log out button to exit the page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User verify Book Itinerary page navigates to successfully logged out page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_book_itinerary_button()"
});
formatter.result({
  "duration": 564660700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_log_out_button_to_exit_the_page()"
});
formatter.result({
  "duration": 310763100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_Book_Itinerary_page_navigates_to_successfully_logged_out_page()"
});
formatter.result({
  "duration": 13000,
  "status": "passed"
});
});