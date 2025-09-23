import { useEffect, useState } from "react";
import "./ShoppingCart.css";
import { useTheme } from "../../context/ThemeContext";

import { products as initialProducts } from "../../data/listProduct";

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

  // lấy products + cart từ localStorage khi load trang
  useEffect(() => {
    // kiểm tra localStorage đã có products chưa
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      // nếu chưa có thì set mặc định
      localStorage.setItem("products", JSON.stringify(initialProducts));
      setProducts(initialProducts);
    }

    // cart cũng vậy
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // lưu cart xuống localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // helper cập nhật products và lưu xuống localStorage
  const updateProducts = (updated: Product[]) => {
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleAddToCart = (product: Product) => {
    if (product.quantity <= 0) {
      alert("Sản phẩm đã hết hàng");
      return;
    }

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

    // giảm tồn kho
    updateProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const handleIncrease = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product || product.quantity <= 0) {
      alert("Hết hàng!");
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
      )
    );

    updateProducts(
      products.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const handleDecrease = (id: number) => {
    let removed = false;

    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            if (item.cartQuantity > 1) {
              return { ...item, cartQuantity: item.cartQuantity - 1 };
            } else {
              removed = true;
              return null; // xoá item khỏi cart
            }
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );

    // trả lại tồn kho
    updateProducts(
      products.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
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
