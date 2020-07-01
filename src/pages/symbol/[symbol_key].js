import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import {Line} from 'react-chartjs-2';
import {useEffect} from 'react';

export default function Symbol_Key(){
    const router = useRouter();
    //console.log(router.query);;

    const [chartData, setChartData] = useState({});
    const chart = () =>{
        setChartData({
            labels: ["date1", "date2", "date3"],
            datasets: [
                {
                    label: router.query.symbol_key, //Race condition, router is not defined before this runs
                    data: [10, 20, 30, 40, 50],
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
                <div>
                    <Line data={chartData} />
                </div>
                <p1>Debug Symbol = { router.query.symbol_key }</p1>
            </main>
            
            <Footer />
        </div>



    ); 
}