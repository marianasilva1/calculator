// document.querySelectorAll('[data-num]').addEventListener('click', onClick);
// document.querySelector('[data-equal]').addEventListener('click', onEqual);
const num = document.querySelectorAll("[data-num]");
const oper = document.querySelectorAll("[data-ops]");
const currDisplay = document.querySelector(".calculator__curr");
const resultDisplay = document.querySelector(".calculator__res");


let calculator = '';

document.querySelector("[data-clear]").addEventListener('click', onClearClick);
document.querySelector("[data-reset]").addEventListener('click', onResetClick);
document.querySelector("[data-equal]").addEventListener('click', onEqualClick);
document.querySelector(".error__reset").addEventListener('click', onErrorClick);
window.addEventListener('error', function() {
    resultDisplay.innerHTML = '';
    currDisplay.innerHTML='';
    calculator = '';
    document.querySelector('.calculator').classList.add('broken');
    document.querySelector('.error').classList.add('error-show');
    })


num.forEach(function(element){
    element.addEventListener("click", onNumClick);
});
oper.forEach(function(element){
    element.addEventListener("click", onOperClick);
});



function onNumClick(event){
    calculator+= event.target.textContent;
    currDisplay.innerHTML+= event.target.textContent;
}
function onOperClick(event){    
    const lastChar = calculator[calculator.length - 1];
    if(lastChar =='-' || lastChar =='+' || lastChar =='/'|| lastChar =='*' || lastChar =='.'){
        currDisplay.innerHTML= currDisplay.innerHTML.slice(0,-1);
        calculator = calculator.slice(0,-1);
     }
    calculator+= event.target.getAttribute('data-ops');
    currDisplay.innerHTML+= event.target.textContent;
    
}

function onEqualClick(){
    if(currDisplay.innerHTML.length !=0){
        
        const lastChar = calculator[calculator.length - 1]; 

        if(lastChar =='-' || lastChar =='+' || lastChar =='/'|| lastChar =='*'|| lastChar =='.'){
            currDisplay.innerHTML= currDisplay.innerHTML.slice(0,-1);
            calculator = calculator.slice(0,-1);
        }
        const total = eval(calculator).toString();
        
        resultDisplay.innerHTML ='= '+ eval(calculator); 
        
        if (total.includes('Infinity')||total.includes('NaN')){
            document.querySelector('.calculator').classList.add('broken');
            document.querySelector('.error').classList.add('error-show');
        }
        
        
    }
}
function onResetClick(){
    resultDisplay.innerHTML = '';
    currDisplay.innerHTML='';
    calculator = '';
}
function onClearClick(){
    if(currDisplay.innerHTML.length !=0){
        currDisplay.innerHTML= currDisplay.innerHTML.slice(0,-1);
        calculator =calculator.slice(0,-1);
        resultDisplay.innerHTML = '';
    }
    
}
function onErrorClick(){
    window.location.reload();
}
