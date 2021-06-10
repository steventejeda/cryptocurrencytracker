import React, {useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


const Api = () => {

    const [coins, setCoins] = useState([])

    useEffect(() => { 
        axios.get(URL).then(response => { 
            setCoins(response.data)
            console.log(response.data)
        }).catch(error => console.log(error))
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Api