import first from "../assets/1.jpg";
import sec from "../assets/22.png";
import th from "../assets/3.jpg";
import fr from "../assets/4.jpg";
import fiv from "../assets/5.jpg";
import six from "../assets/6.png";
import sec1 from "../assets/21.png";
import sec2 from "../assets/222.jpg";
import sec3 from "../assets/23.jpg";
import sec4 from "../assets/24.jpg";

interface menu {
  title: string;
  img: string;
  des: string;
  price: number;
}
const PicsArr = [first, sec, th, fr, fiv, six];
const secondMenu = [
  {
    title: "Krunch Burger",
    price: 250,
    img: sec4,
    des: "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
  },
  {
    title: "Krunch With Fries N Drink",
    price: 490,
    img: sec2,
    des: "Krunch + 1 regular Fries + 1 regular Drink",
  },
  {
    title: "Hot Wings",
    price: 550,
    des: "10 Pcs of our Signature Hot & Crispy Wings",
    img: sec3,
  },
  {
    title: "Mighty Zinger",
    des: "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain..",
    price: 680,
    img: sec1,
  },
];
export { PicsArr, secondMenu };
