//clears the display 
clr = () => 
{
   document.getElementById("result").value = "" 
}

//displays value 
display = (val) => 
{ 
    document.getElementById("result").value+=val 
} 

//evaluates the digit and returns result 
solve = () =>  
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
