import React, { useEffect, useState } from "react";
import "./Product.css";
import Navbar from "./Navbar";



const Product = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [cat,setCat]=useState('electronics');

  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

      // fetch(`https://fakestoreapi.com/products/category/electronic`)
      // .then((res) => res.json())
      // .then((data) => {
      //   setData2(data);
      // });

  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
      });
  }, [cat]);
  
  return (
    <div>
      <Navbar />
      <div className="product_container">
        
        <div className="left_panel">
          {data.map((it, i) => {
            return <p onClick={()=>{setCat({it})}} key={i}>{it}</p>;
          })}
        </div>
        <div className="right_panel">
          <ul className="right_panel_list">
            {data2.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
