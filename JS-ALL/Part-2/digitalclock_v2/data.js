setInterval(() => {
    let ct=new Date().toLocaleTimeString();
    document.getElementsByTagName('p')[0].innerHTML=ct;
}, 1000);