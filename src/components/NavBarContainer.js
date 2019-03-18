import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav-bar">

        <section className="logo"> <h1> candid  </h1>
       <img src=" " />
        </section>

        <section className="nav-links">

          <ul>
            <li>

                <button type="button" className="signin button">Sign In</button>

            </li>

            <li>

                <button type="button" className="signup button">Create Account</button>

            </li>
          </ul>

        </section>
      </header>
    );
  }
}

export default NavBar;
