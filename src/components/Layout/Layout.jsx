
import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";








export const Layout = () => {

    const handleMouseEnter = () => {
        let element = document.querySelector('.book');
        if (element) {
            element.style.height = '85vh'; 
          }

    }

    const handleMouseLeave = () => {
        let element = document.querySelector('.book');
        if (element) {
            element.style.height = '90vh'; 
          }
        
    }

    return (
        <div className="page">
            <header> 
                <Header/>
            </header>
            <main>
                <Outlet/>            
            </main>
            <footer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Footer/>
            </footer>
        </div>
    )
}
