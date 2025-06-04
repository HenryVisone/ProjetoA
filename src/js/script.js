alert("SEJA BEM VINDO AO GAME...");

let p1 = prompt("Digite seu nome.");
let p2 = prompt("Digite seu Maior MEDO.");
let p3 = prompt("Digite um lugar que gostaria de estar...");
let p4 = prompt("Está preparado?");

let msg =document.getElementById('msg');

msg.innerHTML = `<p>Olá ${p1} irei te mandar para ${p3} que bom que você ${p4} está preparado... pois irá enfrentar diversos ${p2}</p>`
