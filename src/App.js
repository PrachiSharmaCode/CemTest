import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/header";
import Banner from "./component/Banner/banner";
import HomePageService from "./component/HomepageService/homepageservice";
import Contact from "./component/Contact/contact";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <HomePageService></HomePageService>
      <Contact></Contact>
    </>
  );
}

export default App;
