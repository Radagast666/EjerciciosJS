function calcula(operacion){
    var operando1 = document.calc.operando1.value;
    var operando2 = document.calc.operando2.value;
    var result = 0;
    if (operacion=='+' || operacion=='-'  || operacion=='*' || operacion=='/' )   {
      result = eval(operando1 + operacion + operando2);
    }
    if (operacion=='^'){
       result = operando1 * operando1;    
    }
    if (operacion=='I'){
       result = eval(1 / operando1);    
    }
    if (operacion=='R'){
       result = eval(sqrt(operando1));    
    }
    if (operacion=='F'){
       result = eval(Math.floor(operando1));    
    }    
    if (operacion=='E'){
       result = eval(Math.pow(operando1 , operando2));    
    }   
 
    document.calc.resultado.value = result;
}