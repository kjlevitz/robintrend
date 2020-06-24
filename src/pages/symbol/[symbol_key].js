import {useRouter} from 'next/router';

///symbol/GOOG
export default function Symbol_Key(){
    const router = useRouter();
    //console.log(router.query);
    return <h1>Symbol is {router.query.symbol_key}</h1>
}