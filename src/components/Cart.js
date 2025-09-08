function Cart({cart, onClose,onRemoveFromCart}){
    return(
        <>
        <div className="cart">
            <div className="cart-content">
                <button onClick={onClose} className="close-button">✖</button>
                <h1>Cart Item</h1>
                {cart.length === 0 ? (
                    <p>No items in the cart</p>
                ):(
                    <div>
                        {cart.map(product => (
                            <div className="cart-item" key={product.id}>
                                <img src={product.image} className="cart-image"></img>
                                <div className="cart-info">
                                    <h2>{product.title}</h2>
                                    <p>${product.price}</p>
                                    <button onClick={() => onRemoveFromCart(product.id)} className="removebtn">Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )

}

export default Cart