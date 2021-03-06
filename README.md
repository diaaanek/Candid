# CANDID

A technical prep/learning platform application for developers & coders. Made with React.js (create-react-app) and Firebase real time database. 

Planning: [Original Site Map](https://github.com/diaaanek/candid/wiki/Originial-Site-Map/_edit)

Live site: [Check it out live](https://candidapp.co)

*** Work in progress *** 

### Landing Page

![Candid1](https://raw.githubusercontent.com/diaaanek/candid/master/public/splash.png)

### Dashboard

![Candid2](https://raw.githubusercontent.com/diaaanek/candid/master/public/candid2.png)

### Take Quizzes

### Code Challenges

![Candid3](https://raw.githubusercontent.com/diaaanek/candid/master/public/candid3.png)

### Study Page (by topic)

### Question Feed

### Features

- Users are authenticated via Google OAuth.
- Upon sign in, users can take coding quizzes and coding challenges on '/dashboard'.
- They can also checkout the /study path for the user submitted question feed. There they can create, edit, delete questions, as well as like and unlike other user's questions.
- Users can also view flashcards to study interview questions by topic

Topics include:

- Custom Routing
- Integrating Firebase
- Managing state
- Registering users, Firebase for Google OAuth login
- Logging users in and out
- Creating, editing, and deleting interview questions from Firebase real time database

\*\*\* Currently under construction. To continue this app, I would integrate my /signup /signin forms with my routes, as well as the ability to create and edit quizzes.

### Challenges Faced 

As someone who has been working with SQL databases, switching to Firebase’s realtime database model was a struggle for me. 
In Firebase, I learned data duplication is key for handling data in different ways. If my app needed to display some data in a certain way in one place and another way somewhere else, (example user >-- user questions >-- questions) that means I needed to duplicate my data to multiple nodes. Even though the backend is my weakness when it comes to the fullstack, I will continue learning and implementing new ways of handling the reading and writing of data. 
 
 Another challenge was attempting responsiveness without the use of a framework.


### Prerequisites

You will need `node` or `yarn` installed on your computer in order to run this app.

### Installation :file_folder:

Inside your terminal or command prompt, navigate to the location of the cloned repo. Install the necessary dependencies by running either -

```
npm i
```

or

```
yarn install
```

### NPM Packages

- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Routing library for React with DOM bindings

## Built With

- HTML5 & CSS3/SASS (semi-responsive)
- [Javascript](https://www.javascript.com/) - programming language
- [Firebase](https://www.firebase.com) - real time cloud database
- [React.js](https://reactjs.org/) - user interface library
- [Node.js](https://nodejs.org/en/) - javascript runtime

## Author :key:

- **Diane Korongy** - [@diaaanek](https://github.com/diaaanek)
