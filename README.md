**Description**

This project includes a set of automated tests for the room booking system. The tests cover various scenarios such as room booking, editing, and deletion, as well as handling errors for incorrect data.

**Test Cases**

Booking with valid data: Verifies successful booking when all fields are filled with valid data.
Unavailable dates check: Verifies that previously booked dates are marked as unavailable.
Booking on already booked date: Verifies that the system prevents booking on dates that are already taken.
Missing required fields: Verifies that the system shows error messages when required fields (First Name, Last Name, Phone, Email) are left empty.
Incorrect data format check: Verifies that the system shows an error message when email or phone number is in an incorrect format.
Booking with past date: Verifies that the system prevents booking with dates in the past.

**Additional Functional Tests (API)**

Room Creation: Create a room using the Admin page (API) and verify that the room appears on the User page (API).
Room Booking: Book a room via the User page (API) and verify that the room is marked as booked on the Admin page (API).
Room Editing: Edit room details in the Admin page (API) and verify the changes on the User page (API).
Room Deletion: Delete a room via the Admin page (API) and verify that the room is removed from the User page (API).

**Test Execution**

Prerequisites: Node.js (v16 or above), playwright library

Make sure demo platform in its initial state

To run all: npx playwright test 

To run in UI mode (separately):
npx playwright test ./tests/user.spec.ts --ui
npx playwright test ./tests/admin.spec.ts --ui

![image](https://github.com/user-attachments/assets/3ca33c6d-3977-4c3a-b48a-916648451f29)
