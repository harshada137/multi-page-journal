# 📝 My Journal – Dockerized Web App

My Journal is a simple, aesthetic, and lightweight journaling web application built using HTML, CSS, and JavaScript.
It allows users to write, save, and view journal entries directly in their browser using localStorage.

The application is containerized with Docker and served via Nginx for easy deployment.

---

## 🚀 Features

* Home page with clean and calming UI
* Write journal entries (Title, Date, Content)
* View saved journal entries
* Client-side storage using browser localStorage
* Responsive pastel-themed design
* Dockerized using Nginx (Alpine)

---

## 📂 Project Structure

```
journal/
├── Dockerfile
├── index.html
├── journal.html
├── write.html
├── style.css
└── script.js
```

---

## 🐳 Run with Docker

### Build Image

```bash
docker build -t my-journal .
```

### Run Container

```bash
docker run -d -p 8080:80 my-journal
```

### Access Application

```
http://localhost:8080
```

---

## 🛠️ Technologies Used

* HTML, CSS, JavaScript
* Browser localStorage
* Docker
* Nginx (Alpine)

---

## 📌 Future Enhancements

* Database integration (MySQL/PostgreSQL)
* Three-tier architecture deployment
* User authentication
* UI/UX improvements

---

## ✨ Author

**Harshada S. Patil**
harshadap1204@gmail.com

---

If you want, I can **format this exactly for GitHub**, add a **license section**, or adjust it for **AWS / DevOps projects**.
