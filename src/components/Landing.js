import React from "react";
// import { Link } from "react-router-dom";

import "./Splash.scss";
import SignIn from "./SignIn";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// ****** chat bot feature ****** //
const theme = {
  background: "#f5f8fb",
  fontFamily: "Avenir",
  headerBgColor: "#32cdff ",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#32cdff  ",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
  maxHeight: "75%"
};

const Github = () => {
  return (
    <div className="github">
      <a href="https://github.com/diaaanek"> Check out the repo here.</a>
    </div>
  );
};

const Suggestions = () => {
  return (
    <div className="suggestions">
      <a href="mailto:dkorongy@gmail.com?Subject=Hello%20there">
        Feel free to leave any feedback here
      </a>
    </div>
  );
};

// ****** end chat bot features ****** //

// ****** render landing page ****** //

export default ({ user }) => (
  <div>
    <div class="section-landing hero">
      <div class="container1">
        <h1 style={{ color: "white", fontSize: "35px" }}>Welcome to Candid.</h1>
        <div class="subheader">
          {" "}
          A social interview prep application for aspiring and bad-ass web
          developers.{" "}
        </div>
        <span class="laptop-illustration" />
      </div>
    </div>
    <div class="section-landing progress">
      <div class="container1">
        <div class="text">
          <h2>Practice without pressure</h2>
          <p>
            From brushing up on Javascript fundamentals - to grokking
            whiteboarding questions, our app will prepare you for your big day.
          </p>
          <p>
            <SignIn />
          </p>
        </div>
        <span class="phone-img" />
      </div>
    </div>
    <div class="section-landing topics">
      <div class="container1 center">
        <h2 class="center">Trending Topics</h2>

        <div class="topic-wrapper">
          <div class="col-3">
            <span
              class="topic topic-1"
              style={{ width: "135px", height: "170px" }}
            />
            <h3>Master Git </h3>
            <p>Have fun with version-control system for tracking changes </p>
          </div>
          <div class="col-3">
            <span class="topic topic-2" />
            <h3>Javascript Bootcamp</h3>
            <p> Practice the fundamentals of Javascript language</p>
          </div>
          <div class="col-3">
            <span class="topic topic-3" />
            <h3>CSS Flexbox Fun</h3>
            <p>
              A guide to css 3 flexbox, and all the fun that goes along with it
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-landing tree">
      <div class="container1">
        <div class="image-container">
          <span class="laptop-2" />
        </div>
        <div class="text">
          <h2>Powered by Firebase & React</h2>
          <p>Candid is made with React, Firebase, Javascript, HTML/CSS.</p>
          <p>Best of all — it's completely free and open source.</p>
        </div>
      </div>
    </div>

    <div className="section-landing footer">
      <div className="container1">
        <h2 class="center">Try it out!</h2>

        <p className="center footer-text">
          Currently available for beta testing! More content is coming soon!
        </p>
      </div>

      <ul>
        <li>
          <a href="https://candidapp.co">Candid</a>
        </li>
        <li>
          <a href="http://dianedesigned.com">Portfolio</a>
        </li>
        <li>
          <a href="mailto:dkorongy@gmail.com?subject = Feedback&body = Message">
            Contact
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/dianeelizabeth/">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/diaaanek">Github</a>
        </li>
      </ul>
    </div>

    <ThemeProvider theme={theme}>
      <ChatBot
        speechSynthesis={{ enable: false, lang: "en" }}
        floating={true}
        headerTitle="Candid"
        botAvatar="http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/1024/10308-woman-office-worker-icon.png"
        userAvatar="https://pbs.twimg.com/profile_images/549561819010854912/AJonc96g.png"
        // floating: true,
        steps={[
          {
            id: "1",
            message: "Welcome to Candid, what is your name?",
            trigger: "2"
          },
          {
            id: "2",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message:
              "Hi {previousValue}, nice to meet you! What would you like to do today?",
            trigger: "4"
          },
          {
            id: "4",
            options: [
              { value: 1, label: "About Candid", trigger: "5" },
              { value: 2, label: "Github Repo", trigger: "6" },
              { value: 3, label: "Suggestions", trigger: "7" }
            ]
          },
          {
            id: "5",
            message:
              "Candid is a technical interview prep app made with React, Firebase, and love. Sign up or sign in to get started!",
            trigger: "8"
          },
          {
            id: "6",
            component: <Github />,
            trigger: "10"
          },
          {
            id: "7",
            component: <Suggestions />,
            trigger: "10"
          },
          {
            id: "8",
            message: "Do you have any other questions?",
            trigger: "9"
          },
          {
            id: "9",
            user: true,
            trigger: "7"
          },
          {
            id: "10",
            message: "Have a great day!",
            end: true
          }
        ]}
      />
    </ThemeProvider>
  </div>
);
