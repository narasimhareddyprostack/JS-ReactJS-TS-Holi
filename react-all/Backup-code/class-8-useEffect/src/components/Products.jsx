import { useEffect, useState } from "react";
import  Axios  from "axios";
let Products=()=>{
    let [prod_Data,setProductData]=useState({});
    useEffect(()=>{
        Axios.get('https://dummyjson.com/products')
        .then((resp)=>{setProductData(resp.data)})
        .catch(()=>{})
    },[])
    
    return <div>
                <h3>Product component</h3>
                <pre>{JSON.stringify(prod_Data)}</pre>
                <pre>{JSON.stringify(prod_Data.products)}</pre>
                {
                    Object.keys(prod_Data).length>0? 
                    <>
                    <table border={3}>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prod_Data.products.map((prod)=>{
                                    return <tr key={prod.id}>
                                            <td>{prod.id}</td>
                                            <td>{prod.title}</td>
                                            <td>{prod.price}</td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    </>
                    :<h2>No Data</h2>
                }
            </div>
}
export default Products;