import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="nav-bar">

        <section className="logo">
          <img src="" />
        </section>

        <section className="nav-links">

          <ul>
            <li>

                <button type="button" className="signin button">Sign In</button>

            </li>

            <li>

                <button type="button" className="signup button">Create Account</button>

            </li>

            <li>
              <button type="button" className="demo button">Demo</button>
            </li>
          </ul>

        </section>
      </header>
    );
  }
}

export default NavBar;
