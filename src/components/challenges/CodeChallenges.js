import React, { Component } from 'react';

import Sidebar from "./Sidebar"
import InfoPanel from './InfoPanel';
import CodeBox from './CodeBox';
import Whiteboard from './Whiteboard';
import './CodeChallenges.css'
// import AuthUserContext from './AuthUserContext'


// + CodeChallenges
//  ++ Sidebar --> Tags
//   +++ Whiteboard
//    ++++ InfoPanel
//     ++++ Codebox --> Timer, Userscore

class CodeChallenges extends Component {
  state = {
    problemIndex: [],
    problemSelected: false,
    selectedProblem: 'default',
    currentProblem: {
      title: '',
      body: '',
      description: '',
    }
  }

  fetchJSON = (path, callback) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
              const data = JSON.parse(httpRequest.responseText);
              if (callback) callback(data);
          }
      }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

// setting state to grab current problem (selected)
fetchProblemHandler = (event) => {
  const target = event.target.value;
  this.fetchJSON(`./problems/${target}`, (data) => {
    const { title, description } = data;
    let body = '';
    data.body.forEach(line => body += (line + '\n'));
    this.setState({
      problemSelected: true,
      currentProblem: { title, body, description },
      selectedProblem: target,
    });
  });
}

// fetch from json file
componentWillMount() {
  this.fetchJSON('./problems/problemIndex.json', (data) => {
    this.setState({ problemIndex: data.problemIndex });
  });
}

// const AccountPage = () => (
render() {
  return (

    <div className="app">
 <div className='Main-content'>
      <Sidebar />
   <Whiteboard
    title={this.state.currentProblem.title}
    body={this.state.currentProblem.body}
    description={this.state.currentProblem.description}

    problemSelected={this.state.problemSelected}

  />

  <InfoPanel
    handleSelectionChange={(event) => this.fetchProblemHandler(event)}
    problemIndex={this.state.problemIndex}
    problemSelected={this.state.problemSelected}
    selectedProblem={this.state.selectedProblem}
    body={this.state.currentProblem.body}
    description={this.state.currentProblem.description}
  />

<CodeBox
  problemIndex={this.state.problemIndex}
  description={this.state.currentProblem.description}
  body={this.state.currentProblem.body}
  problemSelected={this.state.problemSelected}

  />
</div>

</div>

);
  }
}
  // <AuthUserContext.Consumer>
  //     {authUser => (
  //       <div>
  //
  //         <h1>Account: {authUser.email}</h1>
  //         <h1>Account: {authUser.email}</h1>
  //         <h1>Account: {authUser.email}</h1>
  //
  //       </div>
  //     )}
  //   </AuthUserContext.Consumer>
  // )

export default CodeChallenges;
