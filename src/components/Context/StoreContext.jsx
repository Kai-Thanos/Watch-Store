import { createContext, useEffect, useState } from "react";
import { product_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItem] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItem((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
        let itemInfo = product_list.find(
            (product) => product._id.toString() === item.toString()
        );
        if (itemInfo) {
            totalAmount += itemInfo.price * cartItems[item];
        } else {
            console.warn(`Product with id ${item} not found in product_list`);
        }
        }
    }
    return totalAmount;
    };


    const contextValue = {
        product_list,
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;