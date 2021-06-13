import { useEffect, useState } from "react";
import { getPLP } from "../../services/handleResponse";
// Components
import Card from "../card/card.compenent";
// CSS
import "./home-page.styles.css";

export default function HomePage() {
  const [productList, setProductList] = useState([]);
  useEffect(
    () => getPLP().then((data) => setProductList(data?.data?.products)),
    []
  );
  console.log(productList);

  return (
    <div className="home-page-container">
      {productList.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
