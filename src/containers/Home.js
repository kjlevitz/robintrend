import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Home() {
    return (
        <div className="container">
          <Header />
    
          <main>
            <h1 className="title">
                Welcome to Robin Trend
            </h1>
    
            <p className="description">
              Robin Trend makes it easier than ever to access Robinhood stock data and stock trends
            </p>
    
          </main>
    
          <Footer />
    
        </div>
      )
}
/*
    * IN PROGRESS *
    * Styling on Home Page needs to be figured out and page needs to be designed
    * Symbol needs to have a basic page with a search feature
    * Once styling is figured out
    * * Finish About / Contact pages (If we choose to keep those)
    * * Design trend / symbol pages
    * * Create logic for building trends and displaying symbol pages (Graphs etc.)
    */