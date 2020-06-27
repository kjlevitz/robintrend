import {useRouter} from 'next/router';
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'

///symbol/GOOG
export default function Symbol_Key(){
    const router = useRouter();
    //console.log(router.query);
    return(
        <div className="container">
            <Header />
            <main>
                <h1>Symbol is {router.query.symbol_key}</h1>

            </main>
            
            <Footer />
        </div>



    ); 
}