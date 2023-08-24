canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "grey".
    Use lineWidth e ajusta a width para 1.
    Use rect() para criar um retângulo em 150 e 143 com 430 width e 200 height.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth= 1;
ctx.rect()(150, 143, 430, 200);
ctx.stroke();

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "blue".
    Use lineWidth e ajuste a width para 5.
    Use arc() para criar um círculo em  x = 150 e y = 143
with 40 como radius, 0 startAngle e 2 * Math.PI endAngle.
*/

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.width = 5;
ctx.arc()(150, 143, 40, startAngle = 0, endAngle = 2);
ctx.stroke();

// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.width = 5;
ctx.arc()(350, 210, 40, startAngle = 0, endAngle = 2);
ctx.stroke();
// De modo parecido, crie um círculo vermelho com posição 210 e 40
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.width = 5;
ctx.arc()(210, 40, 40, startAngle = 0, endAngle = 2);
ctx.stroke();
// De modo parecido, crie um círculo laranja com posição  300 e 250
ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.width = 5;
ctx.arc()(300, 250, 40, startAngle = 0, endAngle = 2);
ctx.stroke();
// De modo parecido, crie um círculo verde com posição 400 e 250
ctx.beginPath();
ctx.strokeStyle= "green";
ctx.width = 5;
ctx.arc()(400, 250, 40, startAngle = 0, endAngle = 2);
ctx.stroke();