TicketEasy is a flight ticket booking platform and it has two separate repositories:
Ticket-FE (frontend), 
Ticket-BE (backend)

Tech Stack: 
Frontend: ReactJS, 
Backend: NodeJS, ExpressJS, 
Database: MongoDB, 
Authentication: JWT(JSON Web Tokens), bcrypt, 
Real-time Communication: Socket.IO, 
Deployment: AWS(Amazon Web Sevices)

Live Website: Website is deployed on AWS and website is directly accessible through the following url: 
http://43.205.87.196

Usage: 
User can create an account using signup or directly access website through the test credentials.
Test Credentials: email: ticket3@gmail.com, password: 123456

User flow: 
Authentication: The website will directly carry user to login page. if user hasn't signed up, user can sign up on clicking "sign up". It will redirect user to Signup page. Once user signup, user will redirect to login page and once user logged in, user will redirect to home page.

Home Page and Flight Booking Page: 
On home page, user can enter start and end location of trip and submit response then user will be redirected to flights page where user can select a seat by clicking on a seat in seat matrix diagram and enter other details. Once user book a seat that seat will become gray and show booked status for all other users.

My Bookings: 
Users can see all the tickets booked by them on home page under 'My Bookings' section.
