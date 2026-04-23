import React from 'react'
const CompB = (props) => {
  return <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(props)}</pre>

           <h3>Price Value:{props.price}</h3>
           <h3>Flag Value:{props.flag * 10}</h3>
           <h3>Loc:{props.locations[1]}</h3>
         </div>
}
export default CompB;