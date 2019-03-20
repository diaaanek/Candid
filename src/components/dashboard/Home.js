import React, { Component } from 'react'
import firebase from 'firebase/app'
import "../Splash.scss";

import QuizList from './QuizList'
import QuizInfo from './QuizInfo'
import StartQuiz from './StartQuiz'

import Footer from '../Footer'

import "./Dashboard.css";
// + Home
//  ++ QuizList
//   +++ Quiz Info
//    ++++ QuizList

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      quizzes: [
        {
          name: 'HTML',
          image: "https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" ,
          description:'HTML stands for HyperText Markup Language, It defines the structure of a Web document by using a variety of tags and attributes.',
          subQuiz: [
            {
              name: 'Basics', questions: '3', time: '30 sec', score: false,
              qArr: [
                {
                  question: "What is use for image insertion?",
                  option1: "img",
                  option2: "h1",
                  option3: "none",
                  option4: "body",
                  answer: "1"
                },
                {
                  question: "To underline the text?",
                  option1: "u",
                  option2: "underline",
                  option3: "style",
                  option4: "none",
                  answer: "1"
                },
                {

                  question: "HTML stands for?",
                  option1: "HYPER TEXT MARKUP LANGUAGE'",
                  option2: "HTPER TEXT TELESCOPR",
                  option3: "HELP TEXT TERMINAL LANGUAGE",
                  option4: "NONE",
                  answer: "1"
                },

              ]
            },
            {
              name: 'Advanced', questions: '3', time: '30 sec', score: false,
              qArr: [
                {
                  question: "HTML use for?",
                  option1: "structure",
                  option2: "styling",
                  option3: "scripting",
                  option4: "none",
                  answer: "1"
                },
                {
                  question: "To underline the text?",
                  option1: "u",
                  option2: "underline",
                  option3: "style",
                  option4: "none",
                  answer: "1"
                },
                {

                  question: "HTML stands for?",
                  option1: "HYPER TEXT MARKUP LANGUAGE'",
                  option2: "HTPER TEXT TELESCOPR",
                  option3: "HELP TEXT TERMINAL LANGUAGE",
                  option4: "NONE",
                  answer: "1"
                }
              ]
            },
          ]
        },
        {
          name: 'CSS',
          image: "https://udemy-images.udemy.com/course/750x422/1832410_d0da_2.jpg" ,
          description:'CSS stands for Cascading Style Sheets, It describes how HTML elements are to be displayed on screen, paper, or in other media.',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '6', time: '30 sec', score: false,
              qArr: [
                {
                  question: "Css stands for?",
                  option1: "cascading style sheet'",
                  option2: "cascade sheet style",
                  option3: "color style sheet",
                  option4: "contrast style sheet",
                  answer: "1"
                },
                {
                  question: "to change the color we use",
                  option1: "color:",
                  option2: "setColor:",
                  option3: "color-style",
                  option4: "change-color",
                  answer: "1"
                },
                {
                  question: "How to link css?",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },
                {
                  question: "To change the color we use?",
                  option1: "color:",
                  option2: "setColor:",
                  option3: "color-style",
                  option4: "change-color",
                  answer: "1"
                },
                {
                  question: "How to link css?",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },
                {
                  question: "How to link css?",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },

              ]
            },
          ]
        },
        {
          name: 'JavaScript',
          image:  "https://cdn.lynda.com/course/574716/574716-636614621185089877-16x9.jpg",
          description:' JavaScript is a "client-side" programming language. JavaScript scripts are read, interpreted and executed in your Web browser.',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '4', time: '30 sec', score: false,
              qArr: [
                {
                  question: "How to create alert box?",
                  option1: "alert='hello world'",
                  option2: "aler('hello world')",
                  option3: "alert.('hello world')",
                  option4: "alert('hello world')",
                  answer: "4"
                },
                {

                  question: "How to initialize variable?",
                  option1: "variable name = 'ali'",
                  option2: "var name = 'ali'",
                  option3: "variable: 'ali'",
                  option4: "variable. 'ali'",
                  answer: "2"
                },
                {

                  question: "How to push value in array?",
                  option1: "arr.push(value)",
                  option2: "arr.push.value",
                  option3: "arr.(value)",
                  option4: "arr.value.push(value)",
                  answer: "1"
                },
                {

                  question: "What is javascript?",
                  option1: "programming language",
                  option2: "scripting language",
                  option3: "coding language",
                  option4: "web language",
                  answer: "2"
                },
              ]
            },
            {
              name: 'Quiz 2', questions: '6', time: '30 sec', score: false,
              qArr: [
                {

                  question: "Which creates random number?",
                  option1: "Math.floor()",
                  option2: "Math.ceil()",
                  option3: "Math.random()",
                  option4: "Math.high",
                  answer: "3"
                },
                {

                  question: "What does array returns?",
                  option1: "function",
                  option2: "object",
                  option3: "index number",
                  option4: "data type",
                  answer: "2"
                },
                {

                  question: "Object property name & value are separated by?",
                  option1: "semicolon ;",
                  option2: "colon :",
                  option3: "dot .",
                  option4: "comma ,",
                  answer: "2"
                },
                {

                  question: "Object properties are separated by?",
                  option1: "comma ,",
                  option2: "dot .",
                  option3: "colon :",
                  option4: "semicolon ;",
                  answer: "1"
                },
                {

                  question: "What is the correct syntax for object initialization?",
                  option1: "var var_name = {property_name:property_value}",
                  option2: "var var_name = {property_value:property_name}",
                  option3: "var var_value = {property_name:property_value}",
                  option4: "object = {property_name:property_value}",
                  answer: "1"
                },
                {

                  question: "DOM stands for?",
                  option1: "document object modification",
                  option2: "document observed module",
                  option3: "document object model",
                  option4: "document object module",
                  answer: "3"
                },
              ]
            },
          ]
        },
        {
          name: 'Ruby',
          image:  "https://cdn.lynda.com/courses/769290-636849648289149989_270x480_thumb.jpg",
          description:' JavaScript is a "client-side" programming language. JavaScript scripts are read, interpreted and executed in your Web browser.',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '4', time: '30 sec', score: false,
              qArr: [
                {
                  question: "How to create alert box?",
                  option1: "alert='hello world'",
                  option2: "aler('hello world')",
                  option3: "alert.('hello world')",
                  option4: "alert('hello world')",
                  answer: "4"
                },
                {

                  question: "How to initialize variable?",
                  option1: "variable name = 'ali'",
                  option2: "var name = 'ali'",
                  option3: "variable: 'ali'",
                  option4: "variable. 'ali'",
                  answer: "2"
                },
                {

                  question: "How to push value in array?",
                  option1: "arr.push(value)",
                  option2: "arr.push.value",
                  option3: "arr.(value)",
                  option4: "arr.value.push(value)",
                  answer: "1"
                },
                {

                  question: "What is javascript?",
                  option1: "programming language",
                  option2: "scripting language",
                  option3: "coding language",
                  option4: "web language",
                  answer: "2"
                },
              ]
            },
            {
              name: 'Quiz 2', questions: '6', time: '30 sec', score: false,
              qArr: [
                {

                  question: "Which creates random number?",
                  option1: "Math.floor()",
                  option2: "Math.ceil()",
                  option3: "Math.random()",
                  option4: "Math.high",
                  answer: "3"
                },
                {

                  question: "What does array returns?",
                  option1: "function",
                  option2: "object",
                  option3: "index number",
                  option4: "data type",
                  answer: "2"
                },
                {

                  question: "Object property name & value are separated by?",
                  option1: "semicolon ;",
                  option2: "colon :",
                  option3: "dot .",
                  option4: "comma ,",
                  answer: "2"
                },
                {

                  question: "Object properties are separated by?",
                  option1: "comma ,",
                  option2: "dot .",
                  option3: "colon :",
                  option4: "semicolon ;",
                  answer: "1"
                },
                {

                  question: "What is the correct syntax for object initialization?",
                  option1: "var var_name = {property_name:property_value}",
                  option2: "var var_name = {property_value:property_name}",
                  option3: "var var_value = {property_name:property_value}",
                  option4: "object = {property_name:property_value}",
                  answer: "1"
                },
                {

                  question: "DOM stands for?",
                  option1: "document object modification",
                  option2: "document observed module",
                  option3: "document object model",
                  option4: "document object module",
                  answer: "3"
                },
              ]
            },
          ]
        },

        {
          name: 'Algorithms',
          image:  "https://cdn.lynda.com/course/124398/124398-636322775180650840-16x9.jpg",
          description:' JavaScript is a "client-side" programming language. JavaScript scripts are read, interpreted and executed in your Web browser.',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '4', time: '30 sec', score: false,
              qArr: [
                {
                  question: "How to create alert box?",
                  option1: "alert='hello world'",
                  option2: "aler('hello world')",
                  option3: "alert.('hello world')",
                  option4: "alert('hello world')",
                  answer: "4"
                },
                {

                  question: "How to initialize variable?",
                  option1: "variable name = 'ali'",
                  option2: "var name = 'ali'",
                  option3: "variable: 'ali'",
                  option4: "variable. 'ali'",
                  answer: "2"
                },
                {

                  question: "How to push value in array?",
                  option1: "arr.push(value)",
                  option2: "arr.push.value",
                  option3: "arr.(value)",
                  option4: "arr.value.push(value)",
                  answer: "1"
                },
                {

                  question: "What is javascript?",
                  option1: "programming language",
                  option2: "scripting language",
                  option3: "coding language",
                  option4: "web language",
                  answer: "2"
                },
              ]
            },
            {
              name: 'Quiz 2', questions: '6', time: '30 sec', score: false,
              qArr: [
                {

                  question: "Which creates random number?",
                  option1: "Math.floor()",
                  option2: "Math.ceil()",
                  option3: "Math.random()",
                  option4: "Math.high",
                  answer: "3"
                },
                {

                  question: "What does array returns?",
                  option1: "function",
                  option2: "object",
                  option3: "index number",
                  option4: "data type",
                  answer: "2"
                },
                {

                  question: "Object property name & value are separated by?",
                  option1: "semicolon ;",
                  option2: "colon :",
                  option3: "dot .",
                  option4: "comma ,",
                  answer: "2"
                },
                {

                  question: "Object properties are separated by?",
                  option1: "comma ,",
                  option2: "dot .",
                  option3: "colon :",
                  option4: "semicolon ;",
                  answer: "1"
                },
                {

                  question: "What is the correct syntax for object initialization?",
                  option1: "var var_name = {property_name:property_value}",
                  option2: "var var_name = {property_value:property_name}",
                  option3: "var var_value = {property_name:property_value}",
                  option4: "object = {property_name:property_value}",
                  answer: "1"
                },
                {

                  question: "DOM stands for?",
                  option1: "document object modification",
                  option2: "document observed module",
                  option3: "document object model",
                  option4: "document object module",
                  answer: "3"
                },
              ]
            },
          ]
        },
        {
          name: 'Data Structures',
          image:  "https://cdn.lynda.com/course/718636/718636-636771107236305802-16x9.jpg",
          description:' JavaScript is a "client-side" programming language. JavaScript scripts are read, interpreted and executed in your Web browser.',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '4', time: '30 sec', score: false,
              qArr: [
                {
                  question: "How to create alert box?",
                  option1: "alert='hello world'",
                  option2: "aler('hello world')",
                  option3: "alert.('hello world')",
                  option4: "alert('hello world')",
                  answer: "4"
                },
                {

                  question: "How to initialize variable?",
                  option1: "variable name = 'ali'",
                  option2: "var name = 'ali'",
                  option3: "variable: 'ali'",
                  option4: "variable. 'ali'",
                  answer: "2"
                },
                {

                  question: "How to push value in array?",
                  option1: "arr.push(value)",
                  option2: "arr.push.value",
                  option3: "arr.(value)",
                  option4: "arr.value.push(value)",
                  answer: "1"
                },
                {

                  question: "What is javascript?",
                  option1: "programming language",
                  option2: "scripting language",
                  option3: "coding language",
                  option4: "web language",
                  answer: "2"
                },
              ]
            },
            {
              name: 'Quiz 2', questions: '6', time: '30 sec', score: false,
              qArr: [
                {

                  question: "Which creates random number?",
                  option1: "Math.floor()",
                  option2: "Math.ceil()",
                  option3: "Math.random()",
                  option4: "Math.high",
                  answer: "3"
                },
                {

                  question: "What does array returns?",
                  option1: "function",
                  option2: "object",
                  option3: "index number",
                  option4: "data type",
                  answer: "2"
                },
                {

                  question: "Object property name & value are separated by?",
                  option1: "semicolon ;",
                  option2: "colon :",
                  option3: "dot .",
                  option4: "comma ,",
                  answer: "2"
                },
                {

                  question: "Object properties are separated by?",
                  option1: "comma ,",
                  option2: "dot .",
                  option3: "colon :",
                  option4: "semicolon ;",
                  answer: "1"
                },
                {

                  question: "What is the correct syntax for object initialization?",
                  option1: "var var_name = {property_name:property_value}",
                  option2: "var var_name = {property_value:property_name}",
                  option3: "var var_value = {property_name:property_value}",
                  option4: "object = {property_name:property_value}",
                  answer: "1"
                },
                {

                  question: "DOM stands for?",
                  option1: "document object modification",
                  option2: "document observed module",
                  option3: "document object model",
                  option4: "document object module",
                  answer: "3"
                },
              ]
            },
          ]
        },

      ],
      quizIndex: null,
      subQuizIndex: null,
      qstnNo: 0,

      // user: authUser,

    };
        // this.joinQuiz = this.joinQuiz.bind(this);
        // this.showList = this.showList.bind(this);
        // this.startQuiz = this.startQuiz.bind(this);
        // this.nextQstn = this.nextQstn.bind(this);
        // this.back = this.back.bind(this);
      }


  joinQuiz = (quizIndex) => {
  const { quizzes } = this.state;
  this.setState({
    quiz: quizzes[quizIndex],
    quizIndex: quizIndex,
    quizName: quizzes[quizIndex].name,
  });
}

showList = () => {
  this.setState({ quiz: null });
}

startQuiz = (subQuizIndex) => {
  const { quizzes, quizIndex } = this.state;
  this.setState({
    started: quizzes[quizIndex].subQuiz[subQuizIndex],
    subQuizIndex: subQuizIndex,
    subQuizName: quizzes[quizIndex].subQuiz[subQuizIndex].name,
  });
}

nextQstn = (nextQstnNo) => {
  this.setState({
    qstnNo: nextQstnNo + 1
  });
}

back = () => {
  this.setState({
    started: null,
    qstnNo: 0,
  });
}


  render() {
      const { quizzes, quiz, started, qstnNo, quizName, subQuizName, user } = this.state;
    return (
      <div className="dashboard">

              <center><h1>Welcome to your dashboard!</h1>
              <div>

    { (!quiz && !started) &&
    <QuizList
      list={quizzes}
      onPress={this.joinQuiz}
      />}
    {(quiz && !started) &&
    <QuizInfo
      quiz={quiz}
      onPress={this.startQuiz}
      onBack={this.showList} />}

    { started &&
    <StartQuiz
      quizName={quizName}
      subQuizName={subQuizName}
      started={started}
      qstnNo={qstnNo}
      onPress={this.nextQstn}
      back={this.back} />}

              </div>
              </center>
              <Footer/>
      </div>
    )
  }
}
