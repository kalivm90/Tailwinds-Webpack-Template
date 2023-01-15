import './assets/style.css';
import Icon from "./assets/mario.png"

const image = new Image();
image.src = Icon

document.querySelector(".image").appendChild(image)

// test babel
const math = () => {
    let l = "test"
    return [1,2,3,4,5].reduce((acc, cur) => acc += cur)
}

console.log(math());
