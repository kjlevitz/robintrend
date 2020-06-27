import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import {Line} from 'react-chartjs-2';
import {useEffect} from 'react';

///symbol/GOOG
export default function Symbol_Key(){
    const router = useRouter();
    //console.log(router.query);;
    const [chartData, setChartData] = useState({});
    const chart = () =>{
        setChartData({
            labels: ["$0", "$1", "$2"],
            datasets: [
                {
                    label: router.query.symbol_key, //Race condition, this is finishing before route is declared
                    data: [10, 20, 30],
                    backgroundColor: [ 'rgba(0,0,0,0)' ],
                    borderWidth: 4
                }
            ]

        });
    };

    useEffect(()=>{
        chart()
    }, []);
    
    return(
        <div className="container">
            <Header />
            <main>
                <h1>Symbol is {router.query.symbol_key}</h1>
                <div>
                    <Line data={chartData}/>
                </div>
            </main>
            
            <Footer />
        </div>



    ); 
}