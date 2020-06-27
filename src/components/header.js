import Head from 'next/head'
import Nav from './nav.js';

export default function Header() {

    return (
        <div className="container">
          <Head>
              <Nav />
          </Head>
    </div>


      )
}