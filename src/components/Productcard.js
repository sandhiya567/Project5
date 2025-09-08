function Productcard({ product, onAddCart }) {
  return (
    <>
      <div className="product">
        <div className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h2 className="product-info">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <button className="btn" onClick={() => onAddCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Productcard;
