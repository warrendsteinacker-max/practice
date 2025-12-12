

function Calculator() {
    var a = document.getElementById("input").value = 0;

    function add1() {
        a += 1;
        document.getElementById("input").value = a;
    }

    function sub1() {
        a -= 1;
        document.getElementById("input").value = a;
    }

    function divide1() {
        a -= 1;
        document.getElementById("input").value = a;
    }

    function multiply1() {
        a -= 1;
        document.getElementById("input").value = a;
    }





    function add2() {
        a += 2;
        document.getElementById("input").value = a;
    }

    function sub2() {
        a -= 2;
        document.getElementById("input").value = a;
    }

    function divide2() {
        a /= 2;
        document.getElementById("input").value = a;
    }

    function multiply2() {
        a *= 2;
        document.getElementById("input").value = a;
    }







    
    function add3() {
        a += 3;
        document.getElementById("input").value = a;
    }

    function sub3() {
        a -= 3;
        document.getElementById("input").value = a;
    }

    function divide3() {
        a /= 3;
        document.getElementById("input").value = a;
    }

    function multiply3() {
        a *= 3;
        document.getElementById("input").value = a;
    }





    
    function add4() {
        a += 4;
        document.getElementById("input").value = a;
    }

    function sub4() {
        a -= 4;
        document.getElementById("input").value = a;
    }

    function divide4() {
        a /= 4;
        document.getElementById("input").value = a;
    }

    function multiply4() {
        a *= 4;
        document.getElementById("input").value = a;
    }










    
    function add5() {
        a += 5;
        document.getElementById("input").value = a;
    }

    function sub5() {
        a -= 5;
        document.getElementById("input").value = a;
    }

    function divide5() {
        a /= 5;
        document.getElementById("input").value = a;
    }

    function multiply5() {
        a *= 5;
        document.getElementById("input").value = a;
    }










    
    function add6() {
        a += 6;
        document.getElementById("input").value = a;
    }

    function sub6() {
        a -= 6;
        document.getElementById("input").value = a;
    }

    function divide6() {
        a /= 6;
        document.getElementById("input").value = a;
    }

    function multiply6() {
        a *= 6;
        document.getElementById("input").value = a;
    }









    
    function add7() {
        a += 7;
        document.getElementById("input").value = a;
    }

    function sub7() {
        a -= 7;
        document.getElementById("input").value = a;
    }

    function divide7() {
        a /= 7;
        document.getElementById("input").value = a;
    }

    function multiply7() {
        a *= 7;
        document.getElementById("input").value = a;
    }










    
    function add8() {
        a += 8;
        document.getElementById("input").value = a;
    }

    function sub8() {
        a -= 8;
        document.getElementById("input").value = a;
    }

    function divide8() {
        a /= 8;
        document.getElementById("input").value = a;
    }

    function multiply8() {
        a *= 8;
        document.getElementById("input").value = a;
    }









    
    function add9() {
        a += 9;
        document.getElementById("input").value = a;
    }

    function sub9() {
        a -= 9;
        document.getElementById("input").value = a;
    }

    function divide9() {
        a /= 9;
        document.getElementById("input").value = a;
    }

    function multiply9() {
        a *= 9;
        document.getElementById("input").value = a;
    }






    function reset() {
        a = 0;
        document.getElementById("input").value = a;
    }

    return {
        add: add,
        sub: sub,
        reset: reset
    };
}



c = Calculator()