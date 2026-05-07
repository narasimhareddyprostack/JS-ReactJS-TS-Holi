import { useEffect, useState } from "react";
import  Axios  from "axios";
let Products=()=>{
    let [products,setProducts]=useState([]);

    useEffect(()=>{
        Axios.get('https://dummyjson.com/products')
        .then((resp)=>{setProducts(resp.data.products)})
        .catch(()=>{})
    },[])
    
    return <div>
                <h3>Product component</h3>
                <pre>{JSON.stringify(products)}</pre>
            </div>
}
export default Products;