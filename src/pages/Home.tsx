import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home(props: any) {
  console.log("1画面目");

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
