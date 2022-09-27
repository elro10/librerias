let boton = document.getElementById("boton");
    boton.addEventListener("click",genTable);
    
let color= document.getElementById("color");
color.addEventListener("change",(e)=>{
    let colorFondo =e.target.value;
    let colorJson= JSON.stringify(colorFondo);
    localStorage.setItem("colorFondo",colorJson);
    let colorNoJson=JSON.parse(colorJson);
    console.log(colorJson);
    console.log(colorNoJson);
    document.body.style.backgroundColor = JSON.parse(localStorage.getItem("colorFondo"));
})
    document.body.style.backgroundColor = JSON.parse(localStorage.getItem("colorFondo"));
    

    let nombreUsuario

    document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);
    
    function manejadorFormularioUsuario(e) {
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;      
    localStorage.setItem("userName",JSON.stringify(nombreUsuario));
    console.log(JSON.parse(localStorage.getItem('userName')));
    mostrarPanel();
    }
    
    let fetchStorageUser   =  JSON.parse(localStorage.getItem('userName'));
    

    
function saludo(){
    if (nombreUsuario !==fetchStorageUser)
    return "por primera vez "+nombreUsuario;
    else{
    return "de nuevo "+nombreUsuario
    }
}

function mostrarPanel() {
    const opciones = document.getElementById("datos");

    opciones.innerHTML =
    `<h3>Bienvenido ${saludo()}</h3>
    <form id="formulario-usuario">
        <input type="email" id="email" placeholder="Email">
        <input type="number" id="monto" placeholder="Monto">
        <input type="number" id="tiempo" placeholder="Tiempo en meses para devolverlo">
        <input type="number" id="interes" placeholder="Interes">
    </form>`;
}
    function genTable(){
        document.getElementById("tab").innerHTML="";
        let n=Number(document.getElementById("monto").value);
        let n2=Number(document.getElementById("tiempo").value);
        let n3=Number(document.getElementById("interes").value);
        if(n<=0){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Has olvidado introducir el monto",
        });
        }
        else if(n2<=0){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Has olvidado introducir el tiempo",
            });
            }
        else if(n3<=0){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Has olvidado introducir el interés",
                });
            }
        else{
            for(i=1;i<=n2;i++){
                ca=n/n2;
                d1=ca.toFixed(2);
                i2=((n*n3)/100)/n2;
                d2=i2.toFixed(2);
                r=ca+i2;
                d3=r.toFixed(2);
                document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                        `<tr>
                            <td> ${i}</td>
                            <td> ${d1}</td>
                            <td> ${d2}</td>
                            <td> ${d3}</td>
                        </tr>`;
            }
            n1=n.toFixed(2);
            t_i=i2*n2;
            d4=t_i.toFixed(2);
            t_p=r*n2;
            d5=t_p.toFixed(2);
            document.getElementById("t1").innerHTML=n1;
            document.getElementById("t2").innerHTML=d4;
            document.getElementById("t3").innerHTML=d5;        
        }
    }       

