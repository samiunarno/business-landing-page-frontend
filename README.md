<div align="center">
  <img src="/assets/r1.jpg" alt="Harbor at Dusk" style="border-radius: 12px; max-width: 100%; height: auto;"/>
  <br/><br/>
  <h1><b>🚢 Marine Management & Port Administration System 🚢</b></h1>
  <p>An Architectural Deep-Dive into Advanced Object-Oriented Java</p>
  <p>
    <img src="https://img.shields.io/badge/Java-11%2B-blue?style=for-the-badge&logo=java" alt="Java 11+">
    <img src="https://img.shields.io/badge/Design-OOP%20Principles-brightgreen?style=for-the-badge" alt="Focus: OOP Mastery">
    <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License MIT">
  </p>
</div>

---

## ⚓ The Mission: Mastering the Blueprint

> This project is more than a simulation—it's a hands-on masterclass in software architecture. Our mission is to demystify the core principles of Object-Oriented Programming by building a system that is robust, scalable, and easy to understand. We bridge the gap between abstract theory and concrete application, providing a clear roadmap for building sophisticated software from the ground up.

---

## 🗺️ A Tour of the Harbor: OOP in Action

| Icon | Principle & Feature                                                              |
| :--: | :------------------------------------------------------------------------------- |
|  🔐  | **Encapsulation: The Digital Vault** <br/> Our `Auth` module acts as a secure vault for user data. By keeping credentials private and exposing only necessary actions (like `login()` or `register()`), encapsulation protects the system's core from unintended access, ensuring data integrity and security. |
|  🚛  | **Inheritance: The Family of Vehicles** <br/> A `RiverBarge` and a `SeaPlane` are fundamentally different, yet they are both vehicles. Our abstract `Vehicle` class defines this shared identity. Subclasses inherit common traits, creating a logical hierarchy that promotes code reuse and simplifies management of a diverse fleet. |
|  🌊  | **Polymorphism: A Symphony of Objects** <br/> The `Sailer` interface guarantees that any implementing object has a `dock()` method. This allows our harbor to send a single command to a collection of different objects, and each responds appropriately. Polymorphism enables this flexible, decoupled design, making the system adaptable and easy to extend. |
|  🧩  | **Abstraction: The Simple Cockpit** <br/> We interact with complex machinery through simple controls. The abstract `Vehicle` class provides this simplicity. It exposes essential functions while hiding the complex inner workings, allowing the rest of the application to manage any vehicle without needing to know the specifics of its engine or navigation system. |
|  📝  | **Data Persistence: The Captain's Log** <br/> The system remembers. All user accounts and a detailed activity log are persisted to local `users.txt` and `activity.log` files. This demonstrates straightforward data management and provides a transparent audit trail for every significant action in the port. |

---

## 🏗️ Architectural Blueprint: A Clear Separation of Concerns

The project is structured with intention, ensuring each component has a single, well-defined responsibility. This separation of concerns is key to creating maintainable and testable code.

```text
.
└── src
    ├── data/         // The persistence layer. Handles all file I/O for users and logs.
    ├── model/        // The domain core. Contains the blueprints (abstract classes, interfaces) and concrete objects.
    ├── Auth.java     // The gatekeeper. Manages all user authentication and security logic.
    ├── Harbor.java   // The orchestrator. Manages port operations and vehicle interactions.
    └── Main.java     // The ignition. The application's entry point that brings the system to life.
```

---

## 🚀 Set Sail in Minutes

Getting the harbor up and running is straightforward.

**Prerequisites:** You'll need Java Development Kit (JDK) 11 or newer.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/harbor-management-system.git
cd harbor-management-system
```

### 2. Launch the Application
Open the project in your favorite Java IDE (e.g., VS Code, IntelliJ, Eclipse) and run the `Main.java` file. Welcome to the harbor!

---

## 🙌 Join the Crew & Contribute

Contributions are highly welcome! Whether it's a bug fix, a feature suggestion, or a documentation improvement, your input is valued.

1.  **Fork** the repository.
2.  Create a **new branch** for your feature (`git checkout -b feature/MyCoolFeature`).
3.  **Commit** your changes (`git commit -m 'Add some cool feature'`).
4.  **Push** to your branch (`git push origin feature/MyCoolFeature`).
5.  Open a **Pull Request**.

<br/>
<div align="center">
  Built with a passion for clean code and effective learning.
</div>