const canv = document.querySelector('.canv');
const context = canv.getContext('2d'); //drawing context

const w = canv.width = document.body.offsetWidth;
const h = canv.height = document.body.offsetHeight;

context.fillStyle = 'black';
context.fillRect( 0, 0 , w , h );

const columns = Math.floor(w/20) + 1;
const positionY = Array(columns).fill(0);

function matrixEfect() {
    context.fillStyle = '#0001';
    context.fillRect( 0, 0 , w , h );

    context.fillStyle = 'green';
    context.font = '15pt monospace';

    positionY.forEach((y, index) =>{
        const randomText = String.fromCharCode(Math.random() * 128);

        const X = index * 20;

        context.fillText(randomText, X, y);

        if (y > 100 + Math.random() * 10000) {
            return positionY[index] = 0;
        } else {
            return positionY[index] = y + 20;
        }

    })
}

setInterval(matrixEfect, 50);

//based on https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din