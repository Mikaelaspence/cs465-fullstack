**Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In this full-stack project, we used a combination of Express HTML, JavaScript, and Angular to create a seamless user experience.  Express HTML and JavaScript were used 
to render server-side views and add dynamic elements to the static pages. By contrast, the Angular SPA enhances the user experience by delivering all necessary assets 
upfront, dynamically loading content within a single page.

Why did the backend use a NoSQL MongoDB database?
The choice of MongoDB as a NoSQL database supports the flexibility and scalability needed for our project. MongoDB stores data in a JSON-like structure, making it an ideal 
choice for applications built with JavaScript frameworks like Angular. MongoDB’s ability to scale horizontally aligns well with the demands of SPAs, especially if data 
volumes increase.

**Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
While JavaScript is a programming language for writing dynamic client-side functionality, JSON is simply a data format. JSON’s simplicity and structure make it an ideal data 
exchange format between the frontend (Angular) and backend (Express). JSON is used to serialize data that can be easily sent over HTTP and quickly interpreted by JavaScript 
on the client side, creating a streamlined connection between the frontend and backend.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable 
user interface (UI) components.
Throughout the project, I refactored code by consolidating redundant API call logic into Angular services and reorganizing component structures to improve readability and 
efficiency. Benefits include consistency, efficiency, and maintenance. 

**Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. 
Explain your understanding of methods, endpoints, and security in a full stack application.
Testing methods involved both GET and POST/PUT requests to validate that data was correctly retrieved and modified in the database. Using Postman for API testing 
allowed us to interact with endpoints directly, confirming their functionality before integrating them into the application. Key steps in API testing included 
checking response codes, verifying data structures, and confirming that expected data was returned. 

With added security layers, such as authentication tokens, testing became more complex. Authentication would have required simulating a logged-in user session 
to test endpoints effectively. However, this is where I became hung up and unable to complete the assignment. In theory, this testing would have confirmed that 
unauthorized requests were denied, but for me instead everything stopped working. These security features are meant to ensure that data access is controlled 
and that only authenticated users can perform certain actions.

**Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more 
marketable candidate in your career field?
Unfortunately, personally, this course has not done much for my career goals. It was certainly interesting to see how full stack development works, and what goes into
a project like this. Professionally I do plan on continuing my career as a Psychiatric Nurse Practitioner, which does not relate to full stack development. As a hobbyist,
I plan to program things like games, so this does not fit quite in there as well. If I ever choose a career change, however, this course is a requirement for a CS degree,
so even though this is not a particular sector I am interested in, it is a step toward that degree should I ever change my mind. 
