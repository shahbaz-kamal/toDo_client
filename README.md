<div align="center">
  <img height="400" src="https://i.ibb.co.com/vCsTdwHy/todoo.png"  />
</div>

###

<h1 align="left">TaskFlow - Task Management Application 👨‍💼</h1>

###

<p align="left">TaskFlow is a modern Task Management Application designed to streamline the way users handle their tasks. With a clean and minimalistic UI, the application allows users to effortlessly add, edit, delete, and reorder tasks using an intuitive drag-and-drop interface. Tasks are organized into three distinct categories: To-Do, In Progress, and Done, enabling users to track their progress effectively.</p>

###

## 🔗 Live Link



###

<p align="left">https://to-do-list-by-shahbaz.netlify.app/</p>

###




## ✨ Features:

###

1. **User Authentication**

   - Only authenticated users can access the app, with Google sign-in via Firebase Authentication. User details are securely stored in the database upon first login.

2. **Task Management System**

   - Users can manage their tasks seamlessly, with the ability to drag tasks between categories and reorder them within each section. Each task includes essential details such as title, description, timestamp, and category, ensuring a comprehensive management experience.

3. **Database Persistance**

   - Utilizing MongoDB through an Express.js server, TaskFlow ensures real-time updates and persistence, keeping tasks organized and up-to-date even when the app is refreshed or reopened.

4. **Responsive Design**

   - The application is built with responsiveness in mind, ensuring a smooth experience on both desktop and mobile devices.



###

## 🛠 Technology Used

###

 <div align="left">
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
   <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  />
  <img width="12" />
     <img src="http://skillicons.dev/icons?i=express" height="40" alt="express logo"/>
     <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />

</div>


###
###

## 💥 Dependencies:

<!-- <h3 align="left"></h3> -->

###
<p align="left">"@tanstack/react-query": "^5.66.8",<br>    "axios": "^1.7.9",<br>    "date-fns": "^4.1.0",<br>    "firebase": "^11.3.1",<br>    "localforage": "^1.10.0",<br>    "match-sorter": "^8.0.0",<br>    "moment": "^2.30.1",<br>    "react": "^19.0.0",<br>    "react-dom": "^19.0.0",<br>    "react-icons": "^5.5.0",<br>    "react-router-dom": "^7.2.0",<br>    "sort-by": "^1.2.0",<br>    "sweetalert2": "^11.17.2"</p>



###

###

## 🔧 Installation Guidline:

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Front End</span>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/toDo_client.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Create a firebase project and a file named .env.local in your root folder & use your firebase credintials as follows:

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_api_id

```

5. Run the following command and open the website locally on port 5173:

```bash
npm run dev
```

<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <span style="font-size: 20px; font-weight: bold;">Backend</span>
  <img src="https://cdn-icons-png.flaticon.com/128/16318/16318927.png" alt="Front End Icon" width="15" height="15" style="margin-left: 8px;" />
</p>

###

1. First clone the project by running

```bash
  git clone https://github.com/shahbaz-kamal/toDo_server.git
```

2. Change your directory to the cloned folder by

```bash
  cd folder_name
```

3. Run the following to install dependencies:

```bash
npm install
```

4. Put your Mongodb uri in the constant named uri.
5. Create a MongoDB user by keeping username and password collected & create a .env file in the root directory and put the following code:

```bash
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_Password

```

6. Put the following code instead of <db_username>:

```bash
${process.env.DB_USER}
```

7. Put the following code instead of <db_password>:

```bash
${process.env.DB_PASS}
```

8. Run the following command and open the website locally on port 5000:

```bash
npm start
```



###
