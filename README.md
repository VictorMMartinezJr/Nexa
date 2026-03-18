# 👟 Nexa | Full-Stack Cloud-Native E-Commerce Platform

[![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring--Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JSON Web Tokens](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

Nexa is a high-performance, full-stack e-commerce application. Moving beyond NoSQL, this project demonstrates mastery of **Relational Database Management (RDBMS)**, secure user authentication, and scalable cloud architecture.

[🔗 Live Demo on Netlify](https://nexaapparel.netlify.app)  
*⚠️ **Note:** Hosted on a free Render instance. If products do not load immediately, please allow ~50 seconds for the server to wake up.*

---

## 🚀 Key Features
* **Secure Authentication:** Robust Login and Sign-Up system powered by **JWT (JSON Web Tokens)** and **Spring Security**.
* **Relational Inventory Management:** Advanced SQL schema handling complex product variants (Apparel S–XXL, Shoe sizes 6–12) with 100% data integrity.
* **Dynamic Catalog Filtering:** Real-time product discovery across Men's, Women's, and Kids' categories.
* **Cloud-Native Persistence:** Managed MySQL instance hosted on **Aiven**, ensuring enterprise-grade availability.
* **Secure RESTful Architecture:** Sanitized SQL queries via **Spring Data JPA** to prevent SQL injection.

---

## 🛠 Technical Stack
### Frontend
- **React.js** (Functional Components & Hooks)
- **Tailwind CSS** (Utility-first, responsive design)
- **Axios** (Secure API orchestration with JWT interceptors)
  
### Backend
- **Java 21** / **Spring Boot 3.x**
- **Spring Security** (Stateful JWT Filter & Password Encryption)
- **Spring Data JPA** (MySQL / Hibernate ORM)
- **Aiven Cloud MySQL** (Relational data hosting)

---

## 🏗 Architectural Deep Dive
Nexa follows a **Clean Architecture** principle, ensuring secure and scalable data flow:

1.  **Identity Layer:** Handles user registration, BCrypt password hashing, and token issuance.
2.  **Logic Layer (Render):** A Spring Boot engine that validates requests and manages business rules.
3.  **Data Layer (Aiven):** A secure MySQL relational database storing user profiles and product catalogs.

---

## 🖥️ Experience & Interface

### 👤 User Experience
<img width="1920" height="1116" alt="Image" src="https://github.com/user-attachments/assets/18bb8391-909b-44d9-8bb4-a8833a8512e2" />

<img width="1920" height="1120" alt="Image" src="https://github.com/user-attachments/assets/f5a8b3b7-68be-4629-b714-730ccc9d1c89" />

<img width="1920" height="1117" alt="Image" src="https://github.com/user-attachments/assets/036ef4de-364e-477e-86f8-06e1591e83dc" />

<img width="1920" height="1118" alt="Image" src="https://github.com/user-attachments/assets/a42935f3-4419-45df-a612-f303ec30fd6b" />

<img width="573" height="1023" alt="Image" src="https://github.com/user-attachments/assets/f08c59fc-ee12-46b0-977f-9bc9e1682965" />

<img width="573" height="1023" alt="Image" src="https://github.com/user-attachments/assets/36a3671d-7860-4bd1-903a-79328297bc0d" />


### 👤 User Authentication
Just like EchoSphere, Nexa features a secure gateway. Users must authenticate to access personalized features like cart persistence and order history.
<img width="1920" height="1119" alt="Image" src="https://github.com/user-attachments/assets/3f1f8d78-3438-4013-84ef-3ee336c6cfaf" />

### 🛡️ Relational Data Integrity
By using MySQL, Nexa ensures that User-to-Cart relationships are strictly maintained, preventing data orphans and ensuring a reliable checkout experience.

---

## ⚙️ Local Setup & Installation
This project utilizes environment variables to keep sensitive database and JWT credentials secure.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/VictorMMartinezJr/Nexa.git](https://github.com/VictorMMartinezJr/Nexa.git)
    ```
2.  **Configure Environment Variables:**
    Create an `application.properties` file in `src/main/resources`:
    - `SPRING_DATASOURCE_URL` (JDBC URI from Aiven)
    - `SPRING_DATASOURCE_USERNAME`
    - `SPRING_DATASOURCE_PASSWORD`
    - `JWT_SECRET` (Your secure signing key)
3.  **Run Backend:**
    ```bash
    ./mvnw spring-boot:run
    ```
4.  **Run Frontend:**
    ```bash
    cd client && npm install && npm start
    ```

---
