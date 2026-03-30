let find = (value)=>{
    let numbers=[11,7,8,99,101,1055]
    let num=undefined;
    for(let i=0;i<=numbers.length-1;i++){
        if(numbers[i]===value){
            num=numbers[i];
        }
    }
return num;
}

let num=find(11)
console.log(num)
