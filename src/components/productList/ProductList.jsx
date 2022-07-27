import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of my work: </h1>
        <p className="pl-desc">
          Please take a look and open them:
        </p>
      </div>

      <a href="https://angelmond.github.io/Crypto-Check/?selectCrypto=+" class="material-icons">link</a>
      <a href="https://github.com/AngelMond/Crypto-Check" class="material-icons"> assessment</a>
      <img src="./portafolioPhoto/CryptoCheck.jpg" class="img-responsive" style="width:100%" height="200" alt="Image">

      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
