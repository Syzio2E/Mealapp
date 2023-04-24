import React from "react";


const cartContext = React.createContext({ 
items: [],
totalamount:0,
addItem:(item)=>{},
removeItem:(id)=>{}
})

export default cartContext;