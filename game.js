

const h2 = document.createElement("h2")
h2.textContent = "Starting from 0...."
document.body.append(h2)

let count = 0;
h2.addEventListener("click",function() {
    count++;
    h2.textContent = count;
});
