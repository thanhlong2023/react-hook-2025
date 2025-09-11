import React from "react";

type Product = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
};

export default function ShowProduct() {
  const [product] = React.useState<Product>({
    id: 1,
    name: "Iphone 17 pro max",
    price: 50000000,
    quantity: 10,
  });
  return (
    <>
      <h2>Thông tin sản phẩm</h2>
      <ul>
        <li>Mã sản phẩm: {product.id}</li>
        <li>Tên sản phẩm: {product.name}</li>
        <li>Giá sản phẩm: {product.price}</li>
        <li>Số lượng sản phẩm: {product.quantity}</li>
      </ul>
    </>
  );
}
