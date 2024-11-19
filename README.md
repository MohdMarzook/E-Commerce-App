<a name="grocery-web-application-documentation"></a>**Full Stack Development with MERN**
# **Grocery Web Application Documentation**
##
## <a name="project-overview"></a>**1. <a name="_hlk182817293"></a>Introduction**	
### **Project Title: Grocery webapp**
**Team Members:**

- **MOHAMED MARZOOK     Back-End Developer**
- **ABU KASIM 	              Front-End Developer**
- **ABDULLAH     		  UI/UX Developer**
- **ABDUL RAHMAN	    	  Manual/Automated testing**
## **2. Project Overview**
### <a name="purpose"></a>**Purpose**
The Grocery Web Application is designed to provide a seamless online shopping experience for customers, enabling them to explore and purchase groceries and everyday essentials through an intuitive digital platform.
### <a name="features"></a>**Features**
1. User-friendly product browsing and search
1. Secure shopping cart and checkout process
1. Product categorization and filtering
1. User account management
1. Admin dashboard for inventory management
1. Secure payment processing
1. Order tracking and management
1. Real-time inventory updates
## <a name="architecture"></a>**3. Architecture**
### <a name="frontend"></a>**Frontend**
1. Built with Angular framework
1. Component-based architecture
1. Responsive design using modern CSS frameworks
1. State management for cart and user sessions
1. RESTful API integration with backend
### <a name="backend"></a>**Backend**
1. Node.js with Express.js framework
1. RESTful API endpoints
1. Middleware for authentication and request processing
1. Error handling and logging
1. Integration with MongoDB database
### <a name="database"></a>**Database**
MongoDB implementation with following key collections: - Users (Customer and Admin profiles) - Products (Inventory items) - Orders (Purchase transactions) - Cart (Shopping sessions) - Categories (Product classifications)
## <a name="setup-instructions"></a>**4. Setup Instructions**
### <a name="prerequisites"></a>**Prerequisites**
1. Node.js and npm (Latest stable version)
1. MongoDB Community Edition
1. Angular CLI (npm install -g @angular/cli@16.0.0)
1. Git for version control
1. IDE (Visual Studio Code recommended)
### <a name="installation"></a>**Installation**
1. Clone the repository:
    ```
     git clone https://github.com/MohdMarzook/E-Commerce-App
    ```
1. Install dependencies:
```
   cd E-Commerce-App-main

   cd server

   npm install

   cd ..
```
   cd client/client
   npm install
1. Configure environment variables:
   1. Create .env file in root directory
   1. Add necessary environment variables (MONGO\_URI, PORT)
1. Connecting to Mango DB:
   1. ` `Install MongoDB locally or use a cloud-based MongoDB service.
   1. Or use this DB "mongodb+srv://mmohamedmarzook0701:p7iXscaEX6AzrOuQ@cluster0.afnjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



## <a name="folder-structure"></a>**5. Folder Structure**
### <a name="client-angular"></a>**Client (Angular)**


![image](https://github.com/user-attachments/assets/71b40534-474a-477f-b77f-81f9e3270af4)




### <a name="server-node.js"></a>**Server (Node.js)**

![image](https://github.com/user-attachments/assets/891bf097-1f0b-4f7a-8363-e19a8beba8b5)


## <a name="running-the-application"></a>**6. Running the Application**
### <a name="frontend-server"></a>**Frontend Server**
```
cd client/client
npm start
```
*# Access application at http://localhost:4200*
### <a name="backend-server"></a>**Backend Server**
```
cd server
npm run dev
```
*# Server runs on http://localhost:5100*
## <a name="api-documentation"></a>**7. API Documentation**
### <a name="authentication-endpoints"></a>**Authentication Endpoints**
1. POST /api/auth/register
1. POST /api/auth/login
1. GET /api/auth/profile
### <a name="product-endpoints"></a>**Product Endpoints**
1. GET /api/products
1. POST /api/products (Admin)
1. PUT /api/products/:id (Admin)
1. DELETE /api/products/:id (Admin)
### <a name="order-endpoints"></a>**Order Endpoints**
1. GET /api/orders
1. POST /api/orders
1. GET /api/orders/:id
## <a name="authentication"></a>**8. Authentication**
1. JWT-based authentication
1. Role-based access control (Admin/User)
1. Secure password hashing
1. Token expiration and refresh mechanism
## <a name="user-interface"></a>**9. User Interface**

Homepage with product categories 

![Aspose Words c7375676-f881-482d-8b40-b117fcb2cfbc 001](https://github.com/user-attachments/assets/5c156cea-647d-436e-946e-5d494ef5909e)




Product listing pages 

![Aspose Words c7375676-f881-482d-8b40-b117fcb2cfbc 002](https://github.com/user-attachments/assets/80ba3ae5-4f4f-438d-b9b7-f444234025ef)


Shopping cart interface  

![Aspose Words c7375676-f881-482d-8b40-b117fcb2cfbc 003](https://github.com/user-attachments/assets/8ba92491-802e-4da7-85f7-703ec38441e6)




Checkout process 

![Aspose Words c7375676-f881-482d-8b40-b117fcb2cfbc 004](https://github.com/user-attachments/assets/c6360b1f-a9a8-463f-a7be-feca2b5eb537)


User profile management 

![Aspose Words c7375676-f881-482d-8b40-b117fcb2cfbc 005](https://github.com/user-attachments/assets/2cac6d24-a8bf-4539-bdcc-8c69ac86e987)


Admin dashboard

![Aspose Words c7375676-f881-482d-8b40-b117fcb2cfbc 006](https://github.com/user-attachments/assets/35f70a79-3909-4ee2-b411-5718e6f46b07)
## <a name="screenshots-or-demo"></a>**10. Screenshots or Demo**
1. Project Repository: https://github.com/MohdMarzook/E-Commerce-App
1. Demo Video: https://github.com/MohdMarzook/E-Commerce-App
## <a name="known-issues"></a>**11. Known Issues**
1. Currently implementing responsive design for mobile devices
1. Payment gateway integration in progress
1. Real-time inventory updates need optimization
## <a name="future-enhancements"></a>**12. Future Enhancements**
1. Integration with multiple payment gateways
1. Real-time order tracking
1. Advanced search and filtering options
1. Mobile application development
1. Integration with analytics tools
1. Enhanced reporting features for admin
1. Customer review and rating system
1. Social media integration
1. Loyalty program implementation
