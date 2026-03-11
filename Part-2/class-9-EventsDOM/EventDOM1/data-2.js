function get_DT(){
   let pTag=document.getElementById('xyz');
   console.log(pTag)
   pTag.innerHTML=new Date().toLocaleString();
   //pTag.innerHTML="GM"
}