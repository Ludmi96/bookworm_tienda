import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.scss'

let cantCart = 0;
const CartWidget = () => {
    
    return (
        <div className='cart-widget'>
            <FaCartPlus className='cart-icon'/>
            <span>{cantCart}</span>
        </div>
    )
}

export default CartWidget