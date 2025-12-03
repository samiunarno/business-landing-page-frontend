<style>
  :root {
    --bg-color: #f8f9fa;
    --card-bg: #ffffff;
    --text-color: #343a40;
    --header-color: #0d1b2a;
    --accent-color: #415a77;
    --accent-color-light: #778da9;
    --border-color: #dee2e6;
    --code-bg: #e9ecef;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  .readme-container {
    font-family: var(--font-family);
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
  }
  .center { text-align: center; }
  h1, h2, h3 { color: var(--header-color); font-weight: 600; margin-top: 1.5em; border-bottom: 2px solid var(--accent-color-light); padding-bottom: 0.3em; }
  h1 { font-size: 2.5em; }
  h2 { font-size: 2em; }
  h3 { font-size: 1.5em; border-bottom: none; }
  strong { color: var(--accent-color); }
  a { color: var(--accent-color); text-decoration: none; }
  a:hover { text-decoration: underline; }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.1);
  }
  .card-header {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--header-color);
    margin-bottom: 0.5rem;
  }
  pre {
    background-color: var(--code-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
    font-family: 'SF Mono', 'Consolas', 'Menlo', monospace;
    font-size: 0.9em;
  }
  code {
    background-color: var(--code-bg);
    border-radius: 4px;
    padding: 0.2em 0.4em;
    font-family: 'SF Mono', 'Consolas', 'Menlo', monospace;
  }
</style>

<div class="readme-container">
  <div class="center">
    <img src="https://picsum.photos/1200/400?grayscale&blur=2&random=2" alt="Harbor at Dusk" style="border-radius: 12px; max-width: 100%; height: auto;"/>
    <br/><br/>
    <h1><b>Marine Management & Port Administration System</b></h1>
    <p>A Practical Case Study in Advanced Object-Oriented Software Architecture</p>
    <p>
      <img src="https://img.shields.io/badge/Java-11%2B-blue?style=for-the-badge&logo=java" alt="Java 11+">
      <img src="https://img.shields.io/badge/Focus-OOP%20Mastery-brightgreen?style=for-the-badge" alt="Focus: OOP Mastery">
      <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="License MIT">
    </p>
  </div>

  ---

  <h2>⚓ The Mission: Bridging Theory and Practice</h2>
  <p>
    This project serves as a clear, tangible bridge between the abstract concepts of Object-Oriented Programming and their practical application in a real-world scenario. Designed as a console-based harbor simulation, its primary goal is to provide a hands-on environment for mastering the four pillars of OOP: <strong>Abstraction, Inheritance, Polymorphism, and Encapsulation.</strong>
  </p>
  <p>
    It's an ideal learning tool for students and developers seeking to deepen their understanding of how to build software that is not only functional but also logical, maintainable, and scalable.
  </p>

  ---

  <h2>🗺️ Core Features & OOP Principles in Action</h2>
  <div class="card-grid">
    <div class="card">
      <h3 class="card-header">🔐 Encapsulation: Secure User Authentication</h3>
      <p>The system features a robust user registration and login framework. By encapsulating user credentials and controlling access through public methods, we protect sensitive data within the <code>Auth</code> class, preventing unauthorized external access.</p>
    </div>
    <div class="card">
      <h3 class="card-header">🚛 Inheritance: A Diverse Vehicle Fleet</h3>
      <p>Manage a diverse fleet, from <code>RiverBarge</code>s to <code>SeaPlane</code>s. Each vehicle type inherits common attributes and behaviors from an abstract <code>Vehicle</code> base class, promoting code reuse and establishing a clear, logical hierarchy.</p>
    </div>
    <div class="card">
      <h3 class="card-header">🌊 Polymorphism: The Unified <code>Sailer</code> Interface</h3>
      <p>How do you command different vehicle types to dock? The <code>Sailer</code> interface defines a common <code>dock()</code> contract. This allows the system to treat disparate objects (like a <code>SeaPlane</code> and a <code>RiverBarge</code>) polymorphically, leading to cleaner, decoupled, and more scalable code.</p>
    </div>
     <div class="card">
      <h3 class="card-header">💾 Abstraction: Simplified Vehicle Management</h3>
      <p>The abstract <code>Vehicle</code> class defines the essential properties and methods any vehicle must have, hiding complex implementation details. This abstraction allows the main <code>Harbor</code> logic to interact with any vehicle type through a simple, consistent interface.</p>
    </div>
    <div class="card">
      <h3 class="card-header">📝 Persistent Storage & Logging</h3>
      <p>User accounts and a detailed activity log are persisted to local files (<code>users.txt</code>, <code>activity.log</code>). This demonstrates straightforward data management without external dependencies, ensuring session continuity and providing a clear audit trail.</p>
    </div>
  </div>

  ---

  <h2>🏗️ Architectural Blueprint: A Clear Separation of Concerns</h2>
  <p>The project's structure is intentionally organized to be intuitive, ensuring each component has a single, well-defined responsibility.</p>
  <pre>
.
└── src
    ├── data/         // Handles all data persistence (reading/writing files).
    ├── model/        // Contains the core domain logic: abstract classes, concrete classes, and interfaces.
    ├── Auth.java     // Manages user authentication and session control.
    ├── Harbor.java   // Orchestrates all primary port operations.
    └── Main.java     // The application's entry point.
  </pre>
  
  ---

  <h2>🚀 Set Sail in Minutes</h2>
  <p>Getting the harbor up and running is straightforward.
  <br/><strong>Prerequisites:</strong> Java Development Kit (JDK) 11 or newer.</p>
  
  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/your-username/harbor-management-system.git
cd harbor-management-system</code></pre>

  <h3>2. Launch the Application</h3>
  <p>Open the project in your favorite Java IDE (e.g., VS Code, IntelliJ, Eclipse) and run the <code>Main.java</code> file. Welcome to the harbor!</p>
  
  ---

  <h2>🙌 Join the Crew & Contribute</h2>
  <p>Contributions are highly welcome! Whether it's a bug fix, a feature suggestion, or a documentation improvement, your input is valued.</p>
  <ol>
    <li><strong>Fork</strong> the repository.</li>
    <li>Create a <strong>new branch</strong> for your feature (<code>git checkout -b feature/MyCoolFeature</code>).</li>
    <li><strong>Commit</strong> your changes (<code>git commit -m 'Add some cool feature'</code>).</li>
    <li><strong>Push</strong> to your branch (<code>git push origin feature/MyCoolFeature</code>).</li>
    <li>Open a <strong>Pull Request</strong>.</li>
  </ol>
  
  <br/>
  <div class="center">
    Built with a passion for clean code and effective learning.
  </div>
</div>
