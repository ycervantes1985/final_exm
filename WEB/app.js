function showDescription(index) {
    const descriptionSection = document.getElementById("descriptionSection");
    const descriptionSection2 = document.getElementById("descriptionSection2");
    const descriptionSection3 = document.getElementById("descriptionSection3");
    const cardData = data[index];

    // Actualizar la descripción de la tarjeta seleccionada
    descriptionSection2.innerHTML = `
      
        <div class="encabezado">
                <p>${cardData.tarjeta.toUpperCase()}</p>
        </div>  
      
      
      
    `;
    descriptionSection3.innerHTML = `
      
        <div class="img-text">
            <img src="${cardData.imagen}" alt="${cardData.nombre}">
        </div>  
      
      
      
    `;
    descriptionSection.innerHTML = `       
    ${cardData.secciones
      .map(
        (seccion) => `
          <div class="cards-ext">
            <div class="cards">
            <div class="more-info">
            <h3>${seccion.nombre}</h3>
            <a href="${seccion.link}" target="_blank">more info</a>
        </div>   
                <p>${seccion.descripcion}</p>
                
            </div>
                     
            
          </div>
        `
      )
      .join("")}
   
    `;
  }




