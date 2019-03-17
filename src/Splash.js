import React from 'react';
import "./Splash.scss";
import Button from 'react-toolbox/lib/button/Button';

// import NavBarContainer from './components/navbar_container';
// import Footer from './components/footer'

export default () => {
  return (

  <div className="splash">
    <section className="first-page">
      <section className="splash-left">

        <div>

        </div>
        <h2 id="manage"><h2>  Learn from the best tools and stuff to
         </h2> <h2> practice stuff and become pros. </h2> </h2>

        <p id="first-line"> With candid, you can blah blah blahs,</p>



          <button type="button" className="signup button mainbutton">Sign in with Github</button>
            <Button raised primary>
              Hi!
            </Button>

      </section>

      <section className="splash-right">
        <div id="laptop">
<img src=""/>
        </div>
      </section>

    </section>

    <section className="second-page"></section>


  </div>

);
};
