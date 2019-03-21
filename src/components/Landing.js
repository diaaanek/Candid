import React from "react";
// import Splash from './Splash'
import Footer from "./Footer";
import "./Splash.scss";

import { Link } from "react-router-dom";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// ****** chat bot feature ****** //

const theme = {
  background: "#f5f8fb",
  fontFamily: "Quicksand",
  headerBgColor: "#aadd32 ",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#aadd32  ",
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
    <div className="splash">
      <section className="first-page">
        <section className="splash-left">
          <div />
          <h2 id="manage">
            <h2> Learn from the best tools and stuff to</h2>{" "}
            <h2> practice stuff and landing page.</h2>{" "}
          </h2>

          <p id="first-line">
            {" "}
            With candid, you can blah blah blahs, and of course blah blah
            blahs,blah blah blahs,blah.
          </p>

          <Link to="/SignUp">
            <button type="button" className="signup button mainbutton">
              Get started
            </button>
          </Link>
        </section>

        <section className="splash-right">
          <div id="laptop" />
        </section>
      </section>

      <ThemeProvider theme={theme}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: "en" }}
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
                "Candid is a technical interview prep app made with React/Redux, Rails, and love. Sign up or sign in to get started!",
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
    <Footer />
  </div>
);
