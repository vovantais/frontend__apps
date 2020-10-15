import React, { useState, useEffect } from 'react'
import { API_EXCHANGE_RATES } from '../Consts/consts';

function ExchangeRates() {
   const initialState = {
      error: null,
      isLoaded: false,
      items: [],
   };
   const [infoCurs, setInfoCurs] = useState(initialState);
   useEffect(() => {
      const request = fetch(API_EXCHANGE_RATES)
         .then(res => res.json())
         .then(
            (result) => {
               setInfoCurs({
                  isLoaded: true,
                  items: result,
               });
            },
            (error) => {
               setInfoCurs({
                  isLoaded: true,
                  error,
               });
            }
         )
   }, [])
   const { error, isLoaded, items } = infoCurs;
   const CursInfo = (
      <ul>
         {
            items.map(item => {
               if (item.Cur_ID === 145 || item.Cur_ID === 292 || item.Cur_ID === 298) return (
                  <li key={item.Cur_ID}>
                     <strong>{item.Cur_OfficialRate} {item.Cur_Abbreviation} </strong>
                  </li>)
            })
         }
      </ul>
   );
   if (error) {
      return <p> Error {error.message}</p>
   } else if (!isLoaded) {
      return <p>Loading ...</p>
   } else {
      return CursInfo;
   }
}

export default ExchangeRates
