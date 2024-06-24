
function crearCarta(propiedad) {
return `<div class="col-md-4 mb-4">
<div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
                ${fumar(propiedad.smoke)}
                ${mascota(propiedad.pets)}
              </div>
            </div>
            </div>`
        
        }
function mascota(pets) {
    if(pets){
        return `<p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>`
    } else {
        return `<p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                  </p>`
    }
}
function fumar(smoke) {
    if(smoke){
        return `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                  </p>`
    } else{
        return `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`
    }
}
