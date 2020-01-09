function getHistory(){
    return document.getElementById("history-value").innerText;
}
//alert(getHistory());
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
//printHistory("9+9");
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value")
        .innerText=getFormattedNumber(num);
    }
    
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
//printOutput("8674868618");
function revrseNumberFormat(num){
    return Number(num.replace(/,/g,'' ));
}
//alert(revrseNumberFormate(getOutput()));
var oparetor = document.getElementsByClassName("oparetor");
for(var i =0;i<oparetor.length;i++){
    oparetor[i].addEventListener('click',function(){
       // alert("The oparetor clicked:"+this.id);
       if(this.id=="clear"){
           printHistory("");
           printOutput("");
       }
       else if(this.id=="backspace"){
           var output =revrseNumberFormat(getOutput()).toString();
           if(output){
               output=output.substr(0,output.length-1);
               printOutput(output);
           }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(i<NaN(history[history.length-1]));
                printOutput(output);
            }
            if(output!=""){
                output=revrseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        //alert("The number clicked:"+this.id);
        var output=revrseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}