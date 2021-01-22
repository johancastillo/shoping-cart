import {useContext} from 'react'
import AppContext from '../../context/AppContext'


const BtnPrice = ({price, courseID}) => {
    const {cartProducts, setCartProducts} = useContext(AppContext)
    
    const handleClick = e => {
        let newArray = cartProducts
        newArray.push(courseID)

        setCartProducts(newArray)
        console.log(cartProducts)
    }
    
    return(
        <button id={courseID} type="button" className="btn btn-outline-dark" onClick={handleClick} >
            <span className="icon-cart"></span>
            <span className="price" style={{marginLeft: '8px'}}>{`$${price} USD`} </span>
        </button>
    )
}

export default BtnPrice
