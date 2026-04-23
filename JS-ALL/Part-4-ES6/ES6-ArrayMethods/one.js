let prod_Prices=[98,198,298,398]
//create new array named as new_Prices, by adding +1 for every price value
let new_Prices=[]

for (const price of prod_Prices) {
        new_Prices.push(price+1)
}
console.log(prod_Prices)
console.log(new_Prices)