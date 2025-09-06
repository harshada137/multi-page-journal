📝 My Journal – Dockerized Web App
My Journal is a simple, aesthetic, and lightweight journaling web application built with HTML, CSS, and JavaScript. It allows users to write, save, and view journal entries directly in their browser using localStorage. The app is containerized with Docker and served via Nginx for easy deployment.

🚀 Features
- Home Page (index.html)  
  - A welcoming interface with calming design  
  - Quick navigation to start writing or view journals  

- Write Page (write.html)  
  - Form to create journal entries (Title, Date, Content)  
  - Entries saved in browser localStorage  
  - Simple validation for required fields  

- Journal Page (journal.html)  
  - Displays all saved journal entries  
  - Entries persisted in the browser until manually cleared  

- Styling (style.css)  
  - Pastel theme with aesthetic typography  
  - Responsive layout with smooth hover effects  

- Client-Side Logic (script.js)  
  - Handles journal entry creation and storage  
  - Dynamically renders saved entries on Journal page  

- Dockerized with Nginx  
  - Runs inside a lightweight nginx:alpine container  
  - Exposed on port 80 for easy access  

📂 Project Structure
journal/
├── Dockerfile       # Docker configuration for Nginx container
├── index.html       # Home page
├── journal.html     # Page to view saved entries
├── write.html       # Page to write a new journal entry
├── style.css        # Stylesheet (pastel theme)
└── script.js        # Client-side logic for entries

🐳 Running with Docker
1. Build the Docker image
```
cd journal
docker build -t my-journal .
````
2. Run the container
```
docker run -d -p 8080:80 my-journal
```
 3. Access the app
Open your browser and navigate to:
```
http://localhost:8080
```

---

🛠️ Technologies Used
* Frontend: HTML, CSS, JavaScript
* Storage: Browser localStorage
* Containerization: Docker with Nginx (Alpine)

📌 Future Improvements 
* Attach a database (e.g., MySQL/PostgreSQL) for persistent storage
* Deploy on a three-tier architecture (Frontend, Backend, Database)
* Add user authentication and multi-user support
* Improve UI/UX with animations and mobile optimization

✨ Author 
Developed by Harshada Patil
Project hosted on AWS EC2 and available on GitHub

