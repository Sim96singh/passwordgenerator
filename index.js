const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let gp1 =document.getElementById("gpass1");
let gp2 =document.getElementById("gpass2");
function genpass(){
    //console.log("clicked");
    //console.log(characters[Math.floor(Math.random()*characters.length)]);
    gp1.textContent="";
    gp2.textContent="";
    for(let i=0;i<16; i+=1)    
    {
        
        gp1.textContent+=characters[Math.floor(Math.random()*characters.length)];
        gp2.textContent+=characters[Math.floor(Math.random()*characters.length)];
    }
}
