import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


const CoinData = () => {
    const [search, setSearch] = useState('');
    const [coins, setCoins] = useState([]);

    const handleChange = (e) => { 
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
        )
    


    useEffect(() => { 
        axios.get(URL).then(response => { 
            setCoins(response.data)
            console.log(response.data)
        }).catch(error => console.log(error))
    }, []);

    return (
        <div>
                 <div className="coinSearch">
            <h1 className="coin-text">Search</h1>
                <form>
                    <div className="coin-search">
                    <input type="text" placeholder="Search"
                    className="coin-input"
                    onChange={handleChange}
                    />
                    </div>
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image} 
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    marketcap={coin.market_cap}
                    />
                )
            })}
        </div>
    )
}

export default CoinData