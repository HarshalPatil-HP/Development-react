import { use, useEffect , useState } from "react";

const useCurrency = (currency) => {
    const [data,setdata]=useState({});

    useEffect((currency)=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json)
        .then((res)=>{
            setdata(res[currency])
        })
        console.log(data);
    },[currency])
            console.log(data);

    return data;
}

export default useCurrency;
