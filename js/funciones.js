vidaE();

function vidaE(){
    var parrafoE =document.getElementById('edad');
    var fecha = new Date();
    var mes= 3;
    var dia = 29;
    var año = 2000;
    var edad = 1;
    console.log(fecha.getFullYear(), fecha.getMonth()+1, fecha.getDate());
    if(fecha.getFullYear() > año){
        if(fecha.getMonth()+1 > mes){
            edad = fecha.getFullYear() - año;
                console.log(edad);
                parrafoE.innerHTML = edad;
        }
        else if (fecha.getMonth()+1 == mes){
            if(fecha.getDate() >= dia){
                edad = fecha.getFullYear() - año;
                console.log(edad);
                parrafoE.innerHTML = edad;
            }else{
                edad = fecha.getFullYear() - año - 1;
                console.log(edad);
                parrafoE.innerHTML = edad.toString();
            }
        }else{
            edad = fecha.getFullYear() - año - 1;
            console.log(edad);
            parrafoE.innerHTML = edad;
        }
    } else{
        alert("Que su computadora este al corriente en fecha");
    }
}

