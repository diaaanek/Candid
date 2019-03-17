import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import GithubIcon from './GithubIcon';
import './LoginButton.css';

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = 'e7563c7afa422825d503'
const scope = 'user'

class LoginButton extends Component {
  render() {
    return (
      <Button
        raised
        accent
        href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}
      >
        <GithubIcon />
        {' '}
        Login with GitHub
      </Button>
    );
  }
}

export default LoginButton;
