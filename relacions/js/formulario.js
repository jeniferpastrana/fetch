const nombre =document.getElementById("name-author");
const age =document.getElementById("age-author");
const btn=document.getElementById("boton")
const formBooks=document.getElementById("form-books")
const nameBooks=document.getElementById("name-book")
const dateBooks=document.getElementById("date-book")
const selecAuthor=document.getElementById("idAuthor")


const url="http://localhost:3000/autor"
document.addEventListener("DOMContentLoaded",()=>{
    loadingSelectores()
})

// eventos

formBooks.addEventListener("submit",(e)=>{
    e.preventDefault();
    // createAuthor()

})

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    consumir()


})


async  function loadingSelectores() {
    const response=await fetch(url)
    const data=await response.json()
    // recorro la lista de autores
    data.forEach(autor => {
        // por cada interacion voy a crear una etiqueta opctio 
        const opctio =document.createElement("option")
        opctio.value=autor.id
        opctio.textContent=autor.nombre
        selecAuthor.appendChild(opctio)
        
    });
    console.log(data);
    
}

async function  consumir() {

    await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            nombre: nombre.value,
            age:age.value
        })
    })


     
    
}
