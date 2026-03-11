let cart = []
let total = 0

function addToCart(item,price){

cart.push({item,price})
total += price

updateCart()

}

function updateCart(){

let cartList = document.getElementById("cartItems")
cartList.innerHTML=""

cart.forEach(food=>{
let li = document.createElement("li")
li.textContent = food.item + " - ₹" + food.price
cartList.appendChild(li)
})

document.getElementById("total").innerText = total

}

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault()

document.getElementById("bookingMessage").innerText =
"✅ Table booked successfully!"

})

document.getElementById("darkMode").onclick = function(){

document.body.classList.toggle("dark")

}