async function getData() {
    let {products} = await (await fetch('https://dummyjson.com/products')).json();
    displayData(products);
}

const displayData = products => {
    document.querySelector('tbody').innerHTML =
        products.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${p.title}</td>
                <td>${p.price}</td>
                <td>${p.rating}</td>
                <td>${p.category}</td>
                <td><img src="${p.thumbnail}" width="60"></td>
            </tr>
        `).join('');
}
getData();