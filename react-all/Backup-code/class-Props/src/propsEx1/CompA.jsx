import React from 'react'
import CompB from './CompB'
const CompA = () => {
  let price=399;
  let loc=["Bangalore","Chennai"]
  
  return <div>
            <h2>Component A</h2>
            <hr/>
            <CompB price={price} locations={loc} flag={true} />

         </div>
}

export default CompA