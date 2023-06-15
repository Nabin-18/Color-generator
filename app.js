const getColor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215)//creating random number to change in the string form
   
    const randomcode="#" + randomNumber.toString(16);//converting number into hex code
    // console.log(randomNumber,randomcode)
document.body.style.background=randomcode;//changing the background color 
document.getElementById("color-code").innerHTML=randomcode;
navigator.clipboard.writeText(randomcode)//for clipboard
}
document.getElementById("btn").addEventListener("click",getColor)//click event
getColor();