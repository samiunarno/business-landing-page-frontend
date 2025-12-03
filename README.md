

<div align="center">
  <img src="https://picsum.photos/1200/400?grayscale&blur=2&random=1" alt="Marine Management System Banner" style="border-radius: 12px;"/>
  <br/>
  <h1><b>Marine Management & Port Administration System</b></h1>
  <p>
    A Modular, Java-Based Harbor Operations Platform Demonstrating Advanced OOP Principles.
  </p>
  <p>
    <img src="https://img.shields.io/badge/Java-11%2B-blue?style=for-the-badge&logo=java" alt="Java 11+">
    <img src="https://img.shields.io/badge/Status-Active-green?style=for-the-badge" alt="Status Active">
    <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License MIT">
  </p>
</div>

---

The **Marine Management & Port Administration System** is a comprehensive Java application engineered to showcase the power and elegance of advanced Object-Oriented Programming (OOP). Through a sophisticated console-based interface, this system models real-world harbor operations, blending secure user authentication, persistent file-based storage, and a robust vehicle management hierarchy. It serves as an exemplary case study in building scalable, maintainable, and well-architected software from the ground up.

## 🚢 Core System Capabilities

The system is built upon a foundation of powerful, decoupled modules that handle distinct operational concerns.

| Feature                           | Description                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 🔐 **Secure User Authentication**   | A complete registration and login framework. Credentials are encrypted and stored safely in `users.txt` to prevent unauthorized access.      |
| 🚛 **Vehicle Management**         | Manages multiple vehicle types (`RiverBarge`, `SeaPlane`, `Helicopter`) through a modular class hierarchy extending a `Vehicle` abstract class. |
| 🌊 **Runtime Polymorphism**       | Vehicles that can dock implement the `Sailer` interface, enabling uniform handling of docking operations via dynamic method dispatch.       |
| 💾 **Persistent Local Storage**   | All critical user and system data is persisted in local resource files (`users.txt`, `activity.log`), ensuring session continuity.           |
| 📝 **Detailed Operational Logging** | Every significant user action is timestamped and recorded in `activity.log`, providing a comprehensive audit trail for debugging and monitoring. |

---

## 🧱 OOP Principles in Action

This project is a living demonstration of the four pillars of Object-Oriented Programming.

### 1️⃣ **Abstraction**
- **`Vehicle` (Abstract Class):** Defines a common blueprint for all vehicles, establishing shared behaviors and attributes while deferring specific implementations to subclasses.
- **`Sailer` (Interface):** Models a *capability* (the ability to sail/dock) rather than a classification, decoupling the action from the object's core identity.

### 2️⃣ **Inheritance**
- **Class Hierarchy:** `RiverBarge`, `Helicopter`, and `SeaPlane` extend the `Vehicle` base class, inheriting its core logic while introducing specialized behaviors and properties. This promotes code reuse and a logical structure.

### 3️⃣ **Polymorphism**
- **Dynamic Method Dispatch:** The system treats any object implementing `Sailer` uniformly. A call to `dock()` on a `Sailer` reference dynamically invokes the correct method based on the object's actual type at runtime (`SeaPlane` vs. `RiverBarge`).

### 4️⃣ **Encapsulation**
- **Data Integrity:** All domain classes enforce strict encapsulation with `private` fields and controlled access through `public` getters and setters, protecting the system's state and ensuring data integrity.

---

## 📁 Architectural Blueprint

The project is organized into a clean, conventional structure that separates concerns and enhances maintainability.

```
.
└── src
    ├── data
    │   ├── activity.log
    │   └── users.txt
    ├── model
    │   ├── Helicopter.java
    │   ├── RiverBarge.java
    │   ├── Sailer.java        // Interface
    │   ├── SeaPlane.java
    │   └── Vehicle.java       // Abstract Class
    ├── Auth.java
    ├── Harbor.java
    └── Main.java
```

- **`src/data`**: Houses the flat-file database for persistent storage of user credentials and activity logs.
- **`src/model`**: The core domain layer containing business entities, including the `Vehicle` hierarchy and the `Sailer` interface.
- **`Auth.java`**: Manages all user authentication logic, including registration, login, and password encryption.
- **`Harbor.java`**: The central operational hub that orchestrates vehicle management and harbor activities.
- **`Main.java`**: The primary entry point that initializes and launches the application.

---

## 🚀 Getting Started

Follow these simple steps to get the system up and running on your local machine.

### ✔️ **Prerequisites**
- Java Development Kit (JDK) 11 or higher.

### ✔️ **Installation & Setup**
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/harbor-management-system.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd harbor-management-system
    ```

### ✔️ **Run the Application**
Open the project in your favorite Java IDE (e.g., VS Code with Java extensions, IntelliJ IDEA, Eclipse) and execute the `Main.java` file to start the application.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/harbor-management-system/issues).

1.  **Fork** the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

<br/>
<div align="center">
  Made By Bushra Jannath and a passion for clean architecture.
</div>
