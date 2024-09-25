import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'

const Coin = () => {

  const {coinId}=useParams();
  const[coinData,setCoinData]=useState();
  const{currency}=useContext(CoiContext);

  const fetchCoinData=async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-6EreYj3RHaxqYUvXe4dw2w4D'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }
  useEffect(()=>{
    fetchCoinData();
  },[currency]);
  if(coinData){
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt=""/>
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    )
  }
}
import './Coin.css'
import { CoiContext } from '../../context/CoinContext';

export default Coin
