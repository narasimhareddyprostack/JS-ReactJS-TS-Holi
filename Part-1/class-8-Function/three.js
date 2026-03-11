function add(a,b,c=1){
    console.log(a+b+c)
}
add(10,20,30) //60
add(1,2,3) //6
add("Rahul","Gandhi")//RahulGandhi1
add(10) //10+undefined+1 =NaN