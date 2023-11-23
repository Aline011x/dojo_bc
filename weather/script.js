function alerta(){
    var lugar = this.innerText;
    alert("cargando informe meteorologico "+lugar);
}



function eliminar_cookies(){
    var cookiesDiv = document.querySelector(".footer");
    console.log("eliminando cookies");
    if(cookiesDiv){
        cookiesDiv.remove()
    }
}   console.log("cookies eliminadas");