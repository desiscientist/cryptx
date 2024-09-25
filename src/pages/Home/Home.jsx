import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="hero">
            <h1>Largest <br/> Crypto Marketplace</h1>
            <p>Welcome to the World's Largest Cryptourrency Marketplace. Sign up to explore more about cryptos.</p>
            <form>
                <input type="text" placeholder='Search Crypto..'/>
                <button type="submit">Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:'center'}}>24H Change</p>
                <p className='market-cap'>Market cap</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
