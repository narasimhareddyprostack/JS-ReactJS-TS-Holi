var products=[]
async function getData(){
    let resp=await fetch('https://dummyjson.com/products');
    let product_Data=await resp.json();
    console.log(product_Data)
    let status=resp.status;
    console.log(status)
    let products=product_Data.products;
    console.log(products.length)
    displayData(products);
}
function displayData(products){
    console.log(products.length);
    let rows="";
    for(let product of products){
        rows=rows+`<tr>
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.rating}</td>
                    <td>${product.category}</td>
                       <td>
                            <img src="${product.thumbnail}" width="60" height="60" alt="product image"/>
                        </td>
                   </tr>`
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;

}
getData();