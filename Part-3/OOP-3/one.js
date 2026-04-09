class Parent{
    constructor(){
        console.log("Parent class Constructor")
    }
}
class Child extends Parent{
    constructor(){
        super();
        console.log("Child class Constructor")
    }
}
new Child();