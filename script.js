const btn = document.querySelectorAll('.btn')
let buttonValue="";
function getButtonValue(value){
    if(value==="RESET"){
       handlereset();
       buttonValue="";
    }

    else if(value==="="){
        const ans = calculate(buttonValue);
        buttonValue=ans;
    }

    else if(value==="DEL"){
        btn.forEach(btn => {
            btn.classList.remove('active')
            if(event.target.innerHTML === btn.innerHTML){
                btn.classList.add('active');
          
            }      
        })
        buttonValue = deleteFromRight(buttonValue);
        console.log(buttonValue);    
        const inputValue = document.getElementsByClassName("inputValue");
        inputValue[0].innerHTML = buttonValue;
    }

    else{
        buttonValue = buttonValue + value;
        console.log(buttonValue);
        btn.forEach(btn => {
            btn.classList.remove('active')
            if(event.target.innerHTML === btn.innerHTML){
                btn.classList.add('active');
          
            }      
        })    
        const inputValue = document.getElementsByClassName("inputValue");
        inputValue[0].innerHTML = buttonValue;
    }
}

function handlereset(){
    document.getElementsByClassName("inputValue")[0].innerHTML="00"; 
    btn.forEach(btn => {
        btn.classList.remove('active')
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            setTimeout(()=>{
                btn.classList.remove('active')
            },1000)
        }  
        
    })    
}

function deleteFromRight(buttonValue){
    const newValue = buttonValue.slice(0, buttonValue.length-1) + buttonValue.slice(buttonValue.length, buttonValue.length)
    return newValue;
}

function calculate(buttonValue){
    const newstring = buttonValue.replaceAll('x', '*');
    buttonValue =eval(newstring);
    btn.forEach(btn => {
        btn.classList.remove('active')
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            setTimeout(()=>{
                btn.classList.remove('active')
            },1000)
        }         
    })    
    let inputValue = document.getElementsByClassName("inputValue");
    inputValue[0].innerHTML = buttonValue;

    return buttonValue;
    
}