const products=[
    {name:"Телефон",price:500},
    {name:"Ноутбук",price:1200},
    {name:"Наушники",price:150},
    {name:"Мышь",price:100},
    {name:"Клавиатура",price:150}
];

const cart=[];
const productsElement=document.querySelector("#products");
const cartElement=document.querySelector("#cart");
const cartButton=document.querySelector("#cartButton");

function renderProducts(){
    productsElement.innerHTML=products.map((product,index)=>
        `<div class="product"><span>${product.name} — ${product.price}$</span><button type="button" data-index="${index}">+</button></div>`
    ).join("");
}

function renderCart(){
    const total=cart.reduce((sum,product)=>sum+product.price,0);
    cartButton.textContent=`Корзина (${cart.length})`;
    cartElement.innerHTML=cart.length===0
        ? "Корзина пуста"
        : `${cart.map(product=>`<div>${product.name} — ${product.price}$</div>`).join("")}<div class="total">Итого: ${total}$</div>`;
}

productsElement.addEventListener("click",event=>{
    const button=event.target.closest("button[data-index]");
    if(!button)return;
    cart.push(products[Number(button.dataset.index)]);
    renderCart();
});

cartButton.addEventListener("click",()=>{
    cartElement.classList.toggle("open");
});

renderProducts();
renderCart();
