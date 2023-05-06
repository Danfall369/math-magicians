import React from 'react';
import '../Style/home.css';

const Home = () => (
  <section className="Container">
    <div className="title">
      <h1>Welcome Math Magicians!</h1>
    </div>
    <div className="text-container">
      <p>
        Math Magicians is a React app that lets users do math calculations and
        read inspiring math-related quotes. The apps components are divided
        into different sections of the UI, with the main component being the App
        container. The app uses React Router DOM, which provides a routing
        system that enables seamless navigation without page reloads. The
        BrowserRouter, Route, and Switch components define routes and manage
        exclusive routing. Overall, Math Magicians is a testament to how React
        and React Router DOM can be used to create compelling and intricate
        applications. The apps user-friendly interface and smooth routing
        system are examples of Reacts versatility and how it can be used to
        build complex apps.
      </p>
    </div>
  </section>
);
export default Home;
