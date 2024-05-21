# Crypto Trade
**Crypto Trade** is a multipage application with MVC architecture for my JS Back-End course final exam preparation. The back-end is created with Express.js. For database I'm using MongoDB and Mongoose. View engine is Express-Handlebars.

## Application Overview
The visitors can view the Home page and All Crypto catalog with available offers. They can also register with an email, username, and password, allowing them to create their offers for crypto trade and buy crypto (if the current user is not the owner of the crypto offer). Authors can edit or delete posts at any time.

**Guest (not logged in)**
The application should provide Guest (not logged in) users with the functionality to Login, Register, and view the Home page, All Crypto page, and the Details page.

**Users (logged in)**
    • View the Home page and all other pages with logged-in navigation
    • View All Crypto page
    • Create а new crypto offer [Create Offer]
    • Access crypto details page [Details]
    • Buy crypto (if the current user is not the owner of the offer)
    • Delete or Edit the offer depending on the user's authentication (only for the owner of the current offer for crypto)

## Application Pages

**Home Page**
![Home Page](https://github.com/Pavlov1881/SoftUni-Workshops-and-Trainings/blob/main/Crypto-Trade/public/images/homepage-screenshot.png)

**Register Page (Logged Out User)**
Register a user inside the Database with a username, email, and password. Password inside the Database is hashed (used bcrypt), and both passwords must match! After successful registration, the page redirects to the Home page.
![Register Page](https://github.com/Pavlov1881/SoftUni-Workshops-and-Trainings/blob/main/Crypto-Trade/public/images/register%20page-screenshot.png)

**Login Page (Logged Out User)**
Logging an already registered user with the correct email and password. After successful login, page redirects to the Home page.
![Login Page](./public/images/login%20page-screenshot.png)

**Logout (logged in user)**
The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the Home page.

**Crypto Catalog (For logged in users and logged out users)**
List all crypto offers. Each offer must display information about the crypto image, the name, the price, payment, and a button for details about the specific crypto. As in the picture below:
![Catalog Page](./public/images/catalog%20page-screenshot.png)
Details button should be a link to the details page for the current crypto.
If there are NO crypto offers in the Database yet, display "There are no crypto offers found! "
![no crypto](./public/images/no%20crypto-screenshot.png)

**Details Page - (for logged in users and logged out users)**
All users should be able to see details. Clicking the Details button on the crypto card should display the details page. If the currently registered user is the creator of the crypto offer, the Edit and Delete buttons should be displayed. Otherwise, they should not be available.
Information about the crypto:
    • Name
    • Payment method
    • Price
    • Description
    • Buttons (Depending on the status of the currently logged in user)

**Details Page (logged out users)**
If there are no logged-in users, no buttons should be displayed.
![Details Page](./public/images/details%20page%201%20-screenshot.png)

**Details Page (logged in user and creator of the current offer)**
If the currently logged-in user is the owner (the user who created the crypto offer), he should see the [Delete] and [Edit] buttons.
![Details Page](./public/images/details%20page%202%20-screenshot.png)

**Details Page (logged in user with available places)**
If the currently logged-in user is not the owner (a user who is not the creator of this crypto offer) and has not bought that crypto, he should see a buy button.
![Details Page](./public/images/details%20page%203%20-screenshot.png)

**Details Page (logged in user already bought crypto)**
If the currently logged in user is not the owner and has already bought crypto, he should see [You have already bought this crypto].
![Details Page](./public/images/details%20page%204%20-screenshot.png)



