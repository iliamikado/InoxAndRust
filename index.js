console.log("hello")
const products = [];
document.querySelectorAll(".product").forEach(p => {
    const counter = p.querySelector(".counter");
    const b1 = p.querySelector("#inc");
    const b2 = p.querySelector("#dec");
    const price = p.querySelector(".price").innerHTML;
    products.push({counter, b1, b2, price, count: 0});
})
console.log(products);
products.forEach(p => {
    p.b1.addEventListener("click", e => {
        p.count++;
        p.counter.innerHTML = p.count;
    })
    p.b2.addEventListener("click", e => {
        if (p.count > 0) p.count--;
        p.counter.innerHTML = p.count;
    })
})
