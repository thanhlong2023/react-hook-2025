import { useEffect, useState } from "react";
import "./ShoppingCart.css"; // import file css
import { useTheme } from "../../context/ThemeContext";

type Product = {
  id: number;
  name: string;
  quantity: number; // tồn kho
  price: number;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  cartQuantity: number; // chỉ lưu số lượng trong giỏ
};

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setProducts([
      { id: 1, name: "Gạo", quantity: 10, price: 1000 },
      { id: 2, name: "Cà phê", quantity: 12, price: 2000 },
    ]);
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            cartQuantity: 1,
          },
        ];
      }
    });
  };

  const handleIncrease = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, cartQuantity: Math.max(1, item.cartQuantity - 1) }
            : item
        )
        .filter((item) => item.cartQuantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );

  return (
    <div className="container">
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Chế độ tối" : "☀️ Chế độ sáng"}
        </button>
      </div>
      <h1 className="title">Danh sách sản phẩm</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>Còn {product.quantity} sản phẩm</p>
            <p>Giá sản phẩm: {product.price.toLocaleString()} đ</p>
            <button className="btn" onClick={() => handleAddToCart(product)}>
              Thêm vào giỏ hàng +
            </button>
          </div>
        ))}
      </div>

      <h1 className="title">Giỏ hàng</h1>
      {cart.length === 0 && <p>🛒 Chưa có sản phẩm nào</p>}
      <div className="cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <p>Giá: {item.price.toLocaleString()} đ</p>
            <div className="quantity-control">
              <button
                className="btn-small"
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>
              <span>{item.cartQuantity}</span>
              <button
                className="btn-small"
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>
            <p>
              Tạm tính: {(item.price * item.cartQuantity).toLocaleString()} đ
            </p>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <h2 className="total">Tổng cộng: {total.toLocaleString()} đ</h2>
      )}
    </div>
  );
}
