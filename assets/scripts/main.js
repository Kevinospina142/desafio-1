'use string';

const enviar = document.getElementById("btn");
enviar.addEventListener('click', ()=>{
    const valorColor = parseFloat(document.getElementById('eleccion').value);
    const electColor = document.getElementById("colorElegido");
    const color = document.getElementById('color');
    const total = document.getElementById('total');
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const precio = 400000;
    const cantidad2 = document.getElementById('cantidad2');
    const section = document.getElementById("section");
    // operación total y establecer cantidades
    total.innerHTML = `Total: $ ${cantidad*precio}`;
    cantidad2.innerHTML = `Cantidad:${cantidad} unidades`;
    // selección color
    if(valorColor === 1){
        electColor.setAttribute("class","white");
        section.appendChild(total);
        section.appendChild(cantidad2);
        section.appendChild(color);
        color.appendChild(electColor);
    }else if(valorColor === 2){
        electColor.setAttribute("class","black");
        section.appendChild(total);
        section.appendChild(cantidad2);
        section.appendChild(color);
        color.appendChild(electColor);
    }else if(valorColor === 3){
        electColor.setAttribute("class","blue");
        section.appendChild(total);
        section.appendChild(cantidad2);
        section.appendChild(color);
        color.appendChild(electColor);
    }else if(valorColor === 4){
        electColor.setAttribute("class","yellow");
        section.appendChild(total);
        section.appendChild(cantidad2);
        section.appendChild(color);
        color.appendChild(electColor);
    }else{
        alert("no ha seleccionado un color")
    }
});
