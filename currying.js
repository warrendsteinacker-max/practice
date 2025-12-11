 
class Calculator {
    constructor() {
        this.value = [];
    }
    ab1() {
        this.value.push(document.getElementById("1").value);
    }
    ab2() {
        this.value.push(document.getElementById("2").value);
    }
    ab3() {
        this.value.push(document.getElementById("3").value);
    }
    ab4() {
        this.value.push(document.getElementById("4").value);
    }
    ab5() {
        this.value.push(document.getElementById("5").value);
    }
    ab6() {
        this.value.push(document.getElementById("6").value);            
    }   
    ab7() {
        this.value.push(document.getElementById("7").value);            
    }
    ab8() {
        this.value.push(document.getElementById("8").value);            
    }
    ab9() {
        this.value.push(document.getElementById("9").value);            
    }
    ab0() {
        this.value.push(document.getElementById("0").value);            
    }

    add() {
        this.value.push(document.getElementById("+").value);            
    }
    subtract() {
        this.value.push(document.getElementById("-").value);            
    }
    multiply() {
        this.value.push(document.getElementById("*").value);            
    }
    divide() {
        this.value.push(document.getElementById("/").value);            
    }
    equal() {
        let expression = this.value.join('');
        let result = eval(expression);
        document.getElementById("result").value = result;
        this.value = [];
    
    enter() {
        a = this.value
        return function inner(...a) {
            return a.reduce((acc, curr) => acc + curr, 0);
        }
    }
}        





    
        
calc = new Calculator();   


