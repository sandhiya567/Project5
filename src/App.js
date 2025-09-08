import { useState,useEffect } from "react"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Productcard from "./components/Productcard"
import "./App.css"


function App(){
    const [products, setProducts] = useState([]); //stores the fetched product from api
    const [error, setError] = useState(null); //if we have an errors
    const [loading, setLoading] = useState(true); //to show the loading spinner
    const [cart, setCart] = useState([]);  //it is going to show the cart details
    const [showCart, setShowCart] = useState(false);

    useEffect(()=>{
      const fetchProduct = async() =>{
        try{
          const productResponse = await fetch("https://fakestoreapi.com/products");
          const productData = await productResponse.json() // parse to json format
          setProducts(productData);

        }catch(error){
          setError(error.message)

        }finally{
          setLoading(false)
        }
      }
      fetchProduct()
    },[])

    //condition for loading 
    if(loading){
      return <h1>loading data....</h1>
    }

    //condition for error
    if(error){
      return <h1>Error : {error}</h1>
    }

    //add items to the cart

    const addTocart = (product) =>{
      if (cart.find(item => item.id ===product.id)){
        alert("Items already been added to the cart")
        return;
      }else{
        setCart([...cart,product])
      }
    }

    //to remove the items from the cart

    const removeCart = (productId) =>{
      setCart(cart.filter(item => item.id !== productId
      ))
    }

    return(
      <div className="App">
        {/* navbar component to display the number of items in the cart */}
        <Navbar cartCount = {cart.length} onCartClick = {()=> setShowCart(true)}/>
        <h1>ITEMS</h1>

        {/* display the product card */}

        <div className="product">
          {products.map((product)=>(
            <Productcard product={product} key={product.id} onAddCart = {addTocart}/>
          ))}
        </div>

        {/* render the card component */}
        {showCart && (
          <Cart cart={cart} onClose = {()=>setShowCart(false)}
            onRemoveFromCart={removeCart}/>
        )}
      </div>
    )
}

export default App
