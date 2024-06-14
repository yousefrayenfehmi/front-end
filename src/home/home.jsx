import React from "react";
import Navbar from "../navbar/navbar";
import Service from "../service/NosService"
import Footer from "../contact/contact"
import HeroSection from "../section/section1"

const Home=()=> {
    return(
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Service></Service>
        <Footer></Footer>
    </div>
)


}

export default Home;