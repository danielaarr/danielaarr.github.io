function createNavbar (){
  let navbar = document.getElementById("navbar");
  let navigation = `
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #294BF3;" >
          <a class="navbar-brand" href="./index.html">
              <img src="./src/logoAMR.png" alt="Logo AMR" width="30" height="24">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="./nosotros.html">Nosotros</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="./servicios.html">Servicios</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="./portafolio.html">Portafolio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="./blog.html">Blog</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="./contacto.html">Contáctanos</a>
                  </li>
              </ul>
          </div>
      </nav>    
  `;
  navbar.insertAdjacentHTML("afterbegin",navigation);
}

createNavbar();



/*function getData() {
  let promesa = fetch("https://newsapi.org/", {
    method: "GET"
  });
  promesa
  .then ((response)=>{
      response.json()
      .then((res)=>{
          createCards(res);
      })//res
      .catch((error)=>console.log("Problema en el json", error))
  })
  .catch((error)=>console.log(error, "Ocurrió un problema en la solicitud")
  );
}//getData

getData();

function createCards(res){
let div= document.getElementById("divProductos");    
res.forEach(p => {
       let card = `<div class="card" style="width: 18rem;">
          <img src="${p.image}" style="object-fit:contain; width:100%;height:250px;padding:1rem;">
          <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description.slice(0,100)}...</p>
          </div> 
          <a href="#" class="btn btn-primary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${p.id}" style: "margin-bottom: 1rem";>Ver más</a>
      </div><!--card-->
      <!-- Modal -->
      <div class="modal fade" id="exampleModal_${p.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel"> ${p.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          ${p.description}
          <p class="text end"><strong>$ ${p.price}</strong></p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
          </div>
      </div>
      </div>
      `;
          div.insertAdjacentHTML("beforeend", card);
      })//res
}//createCards*/
