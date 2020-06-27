import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import styles from '../components/NavBar.module.css'
import React from "react";

export default function Trends() {
    return (
        <div className="container">
          <Header />
    
          <main>
            <h1 className="title">
                Trends
            </h1>
    
          </main>
    
          <Footer />
    
        </div>
      )
}

