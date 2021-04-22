const arrayTemp = []
const datos = [
    {
        nombre: 'Mercurio',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg/105px-Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg',
        distanciaSol: 57909175,
        distanciaTierra: 91690000,
        superficie: 75000000,
        masa: 3302*(10**23)
    },
    {
        nombre: 'Venus',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/105px-Venus-real_color.jpg',
        distanciaSol: 108208930,
        distanciaTierra: 42000000,
        superficie: 460000000,
        masa: 48690*(10**24)
    },
    {
        nombre: 'Tierra',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/As08-16-2593.jpg/105px-As08-16-2593.jpg',
        distanciaSol: 149597870,
        distanciaTierra: 0,
        superficie: 510000000,
        masa: 59742*(10**24)
    },
    {
        nombre: 'Marte',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/105px-OSIRIS_Mars_true_color.jpg',
        distanciaSol: 227936640,
        distanciaTierra: 69000000,
        superficie: 140000000,
        masa: 64191*(10**23)
    },
    {
        nombre: 'Jupiter',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/105px-Jupiter.jpg',
        distanciaSol: 778412010,
        distanciaTierra: 591000000,
        superficie: 64000000000,
        masa: 18987*(10**27)
    },
    {
        nombre: 'Saturno',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/150px-Saturn_during_Equinox.jpg',
        distanciaSol: 1426725400,
        distanciaTierra: 1200000000,
        superficie: 43800000000,
        masa: 56851*(10**26)
    },
    {
        nombre: 'Urano',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Uranus.jpg/105px-Uranus.jpg',
        distanciaSol: 2870972200,
        distanciaTierra: 2543364000,
        superficie: 8130000000,
        masa: 86849*(10**25)
    },
    {
        nombre: 'Neptuno',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/105px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg',
        distanciaSol: 4498252900,
        distanciaTierra: 4500000000,
        superficie: 7700000000,
        masa: 10244*(10**26)
    }
]


const planetaCercano = datos //cercano al sol
const planetaLejano = [...planetaCercano]    //lejano al sol
planetaLejano.reverse()
const planetaMenorMayor = [...datos]; // tamaño 
planetaMenorMayor.sort((a,b)=>  a.superficie - b.superficie)
const planetaMayorMenor = [...planetaMenorMayor]
planetaMayorMenor.reverse() // tamaño inverso
const tierraCercano = [...datos]// cercano a la tierra
tierraCercano.sort((a,b)=>  a.distanciaTierra - b.distanciaTierra)
const tierraLejano = [...tierraCercano] 
tierraLejano.reverse() // lejano a la tierra
const nombresAlfa = [...datos]
nombresAlfa.sort((a,b)=>(a.nombre < b.nombre) ?  -1 : 1)//alfabetico
const nombresOmega = [...nombresAlfa]
nombresOmega.reverse()//alfabetico al revez
let numero33 = []
impresor(planetaCercano)


document.querySelector('.buscar').onclick = boton
document.querySelector('.numero-especial').onclick = boton
for (let i = 0; i<8; i++){
    document.querySelectorAll('.flecha')[i].onclick = boton // agregando eventos click
}
let busqueda = document.getElementById('search')

function boton(){
    
    if (this.getAttribute('class')=="buscar"){
        let planetaEncontrado = datos.filter(a => (a.nombre.toLowerCase()==busqueda.value.toLowerCase()) )
        document.getElementById('content-table').innerHTML = ''
        impresor (planetaEncontrado)
        
        if (planetaEncontrado == 0){ // en caso de no escribir nada
            
            document.getElementById('content-table').innerHTML = `Resultados no encontrados <br><br> 
            <span class="mostrar-lista"> Mostrar Planetas</span></div> <br> <br>` 
            document.querySelectorAll('.mostrar-lista')[0].onclick = boton
            document.querySelectorAll('.mostrar-lista')[1].onclick = boton
        }
    }
    if(this.getAttribute('class')=="mostrar-lista"){ //boton mostrar lista
        document.getElementById('content-table').innerHTML = ''
        impresor (planetaCercano)
        }
    if (this.getAttribute('class')=="numero-especial"){//distancia 33
        for (let planeta of datos) {
            let distancia = planeta.distanciaTierra;
            distancia = distancia.toString()
            console.log (distancia.length)
            for (i = 0; i < distancia.length; i++) {
                if (distancia[i] == "3") {
                    if (distancia[i + 1] == "3") {
                        numero33.push(planeta)
                        document.getElementById('content-table').innerHTML = ''
                        impresor(numero33)
                    }
                }
            }
        }   
    }
    if(this.getAttribute('class')=="flecha"){// flechas para ordenar
        if ( this.getAttribute('id')=="flechaPlaneta" && this.innerHTML=='↑'){
            document.getElementById('content-table').innerHTML = ''
            impresor (nombresAlfa)
        }
        if ( this.getAttribute('id')=="flechaPlaneta" && this.innerHTML=='↓'){
            document.getElementById('content-table').innerHTML = ''
            impresor (nombresOmega)
        }
        if ( this.getAttribute('id')=="flechaTamaño" && this.innerHTML=='↑'){
            document.getElementById('content-table').innerHTML = ''
            impresor (planetaMenorMayor)
        }
        if ( this.getAttribute('id')=="flechaTamaño" && this.innerHTML=='↓'){
            document.getElementById('content-table').innerHTML = ''
            impresor (planetaMayorMenor)
        }
        if ( this.getAttribute('id')=="flechaSol" && this.innerHTML=='↑'){
            document.getElementById('content-table').innerHTML = ''
            impresor (planetaCercano)
        }
        if ( this.getAttribute('id')=="flechaSol" && this.innerHTML=='↓'){
            document.getElementById('content-table').innerHTML = ''
            impresor (planetaLejano)
        }
        if ( this.getAttribute('id')=="flechaTierra" && this.innerHTML=='↑'){
            document.getElementById('content-table').innerHTML = ''
            impresor (tierraCercano)
        }
        if ( this.getAttribute('id')=="flechaTierra" && this.innerHTML=='↓'){
            document.getElementById('content-table').innerHTML = ''
            impresor (tierraLejano)
        }
    }
    
    
}
function impresor(alineacionPlanetaria){ 
    for (let planeta of alineacionPlanetaria){
            document.getElementById('content-table').insertAdjacentHTML("beforeend",
            `<tr>
            <td><div class="container-details"> ${planeta.nombre}</div></td>
            <td><div class="container-details"><img src="${planeta.imagen}" class="planet-img" alt=""></div></td>
            <td><div class="container-details"> ${planeta.superficie} Km²</div></td>
            <td><div class="container-details"> ${planeta.distanciaSol} Km</div></td>
            <td><div class="container-details"> ${planeta.distanciaTierra} Km</div></td>
            </tr>`)
    
    }

}