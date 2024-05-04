import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>EventSpark</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail"/>
            <button>subscribe</button>
          </div>
          <p>Sign up with your email address to stay connected with us</p>
        </div>
      </div>
    </footer>
  ); 
};

export default Footer;
