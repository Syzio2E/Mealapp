import { useContext,useEffect,useState } from 'react'
import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnisHiglighted,setBtnisHighlighted] = useState(false)
  const cartCtx = useContext(cartContext)
  const {items} = cartCtx
  const numberOFCartItems = cartCtx.items.reduce((currNumber,item)=>{
    return currNumber + item.amount
  },0)


  const btnClasses = `${classes.button} ${btnisHiglighted ? classes.bump : ''}`

  useEffect(()=>{
    if(items.length===0){
      return;
    }
    setBtnisHighlighted(true)
   const timer =  setTimeout(()=>{
      setBtnisHighlighted(false)
    },300)
    return ()=>{
      clearTimeout(timer);
    }
  },[items])

  return (
   <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOFCartItems}</span>
   </button>
  )
}

export default HeaderCartButton
