import styles from '../components/NavBar.module.css'

export default function Home() {
    return (
        <div className={styles.topnav}>
            <a className={styles.active} href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
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