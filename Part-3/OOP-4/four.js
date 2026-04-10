class Parent{
    constructor(msg){
        console.log(msg)
        console.log("Parent Class Constructor")
    }
}
class Child extends Parent{
    constructor(){
        super("GM");
        console.log("Child Class Constructor")
    }
}
new Child()