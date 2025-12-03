<div align="center">
  <img src="https://picsum.photos/1200/400?grayscale&blur=2&random=2" alt="Harbor at Dusk" style="border-radius: 12px;"/>
  <br/>
  <br/>
  <h1><b>Marine Management & Port Administration System</b></h1>
  <h3>A Hands-On Journey into Advanced Object-Oriented Java</h3>
  <p>
    This isn't just a project; it's an educational deep-dive into the principles that power robust, scalable software.
  </p>
  <br/>
  <p>
    <img src="https://img.shields.io/badge/Java-11%2B-blue?style=for-the-badge&logo=java" alt="Java 11+">
    <img src="https://img.shields.io/badge/Built%20for-Learning-brightgreen?style=for-the-badge" alt="Built for Learning">
    <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License MIT">
  </p>
</div>

---

## ⚓ The Mission: More Than Just Code

Ever wondered how complex systems like a bustling harbor are managed? This project pulls back the curtain, offering a clear, console-based simulation built with one goal in mind: **to master advanced Object-Oriented Programming (OOP) in Java.**

We're not just moving ships around. We're exploring how **Abstraction, Inheritance, Polymorphism, and Encapsulation** come together to create a system that's logical, maintainable, and powerful. It's the perfect playground for students, self-learners, and developers looking to solidify their understanding of core software architecture.

---

## 🗺️ A Tour of the Harbor: Features & Principles

Let's explore the key features and see how OOP principles bring them to life.

### 🔐 Secure by Design: User Authentication
Your port is a secure facility. The system features a complete registration and login framework. All user credentials are encrypted and stored locally in `users.txt`, demonstrating how **Encapsulation** protects sensitive data from the outside world.

### 🚛 A Fleet at Your Command: Vehicle Management
Manage a diverse fleet of vehicles, from `RiverBarge`s to `SeaPlane`s and `Helicopter`s. This is made possible through:
- **Abstraction:** A central `Vehicle` abstract class defines what it *means* to be a vehicle in our system.
- **Inheritance:** Each specific vehicle type `extends` the `Vehicle` class, inheriting common traits while adding its own unique specializations. This creates a clean, logical, and reusable class hierarchy.

### 🌊 Smooth Sailing with Polymorphism: The `Sailer` Interface
How do you tell a `SeaPlane` and a `RiverBarge` to dock using the same command? With the power of interfaces and polymorphism!
- The `Sailer` interface defines a contract—a promise that an object knows how to `dock()`.
- Any class that implements `Sailer` can be treated as a "sailer," regardless of its other types.
- This allows our `Harbor` to manage a collection of different vehicles seamlessly, calling `dock()` and letting Java's runtime polymorphism figure out the correct implementation. It's clean, decoupled, and incredibly scalable.

### 💾 Your Data, Safe and Sound: Persistent Storage
The system remembers. All user accounts and system events are saved to local files (`users.txt`, `activity.log`). This demonstrates simple yet effective data persistence without the need for a heavy database, ensuring continuity between sessions.

### 📝 The Captain's Log: Detailed Logging
Every important action—from a login attempt to a vehicle docking—is timestamped and recorded in `activity.log`. This provides a transparent audit trail, perfect for debugging, monitoring, and understanding the flow of the application.

---

## 🏗️ Under the Hood: The Architectural Blueprint

The project is thoughtfully organized to be easy to navigate and understand. Each component has a clear responsibility.

```
.
└── src
    ├── data/         // The heart of our data persistence.
    ├── model/        // Where our core concepts (Vehicles, Interfaces) live.
    ├── Auth.java     // The gatekeeper for user access.
    ├── Harbor.java   // The central hub that runs the port.
    └── Main.java     // Where it all begins.
```

- **`model/`**: This is the domain layer. It contains the blueprints for our world—the abstract `Vehicle`, its concrete children like `Helicopter`, and the `Sailer` capability interface.
- **`data/`**: Simple, text-based storage. It's a great example of how to handle data without external dependencies.
- **`Auth.java`**: A dedicated class for a single responsibility: managing user security.
- **`Harbor.java`**: The orchestrator. It uses the `model` classes to perform the core operations of the port.
- **`Main.java`**: The spark. This file kicks off the application and brings our harbor to life.

---

## 🚀 Set Sail in Minutes

Ready to get your hands dirty? It's easy to get started.

**Prerequisites:** You'll need Java Development Kit (JDK) 11 or newer.

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/your-username/harbor-management-system.git
    cd harbor-management-system
    ```
2.  **Launch:**
    Open the project in your favorite Java IDE (VS Code, IntelliJ, Eclipse) and run the `Main.java` file. Welcome to the harbor!

---

## 🙌 Join the Crew

Got an idea for an improvement? Found a bug? Contributions are what make open-source amazing.

1.  **Fork** the repository.
2.  Create a **new branch** for your feature (`git checkout -b feature/MyCoolFeature`).
3.  **Commit** your changes (`git commit -m 'Add some cool feature'`).
4.  **Push** to your branch (`git push origin feature/MyCoolFeature`).
5.  Open a **Pull Request**.

Don't hesitate to open an issue for any questions or suggestions!

<br/>
<div align="center">
  Built with a love for clean code and a passion for teaching.
</div>
