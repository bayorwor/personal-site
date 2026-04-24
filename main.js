
const productsContainer= document.getElementById("products")
const todosContainer= document.getElementById("todos")

// productsContainer.innerHTML="<h1>We are learning backend dev't</h1>"

fetch("https://fakestoreapi.com/products")
.then((res)=>res.json()).then((products)=>{
    for(let product of products){
        productsContainer.innerHTML+=`
        <div class='card'>
            <h1>${product.title}</h1>
            <img src=${product.image} />
            <p>${product.price}</p>
        </div>
        `
    }
})

fetch("https://jsonplaceholder.typicode.com/todos",{
    method:"GET"
  
})
.then((res)=>res.json()).then((todos)=>{
    for(let todo of todos){
        todosContainer.innerHTML+=`
        <div class='card'>
            <h1>${todo.title}</h1>
        </div>
        `
    }
})