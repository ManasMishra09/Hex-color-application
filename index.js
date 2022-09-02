const screen= document.getElementById("screen");
const code= document.getElementById("code");
const copyBtn= document.getElementById("copyBtn");
const generateBtn= document.getElementById("generateBtn");
const characters= "0123456789abcdef";

function generateHexColor(chars){
let c="#";
for(let i=0;i<6;i++) c+=chars.charAt(Math.floor(Math.random()*chars.length));
return c;
}

generateBtn.addEventListener("click", () =>{
    let color =generateHexColor(characters);
    screen.style.setProperty("--color",color);
    code.textContent= color;
});

copyBtn.addEventListener("click", () => {
 navigator.clipboard.writeText(code.textContent);
});