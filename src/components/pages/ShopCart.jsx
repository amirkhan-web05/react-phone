import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {clearCart, removeCartItem, plusCartItem, minusItem} from '../../redux/action/cart'
import CartPhone from './CartPhone'

const ShopCart = () => {
    const {totalCard, totalPrice, items} = useSelector(({cart}) => cart)
    
    const onAddedCart = Object.keys(items).map((key) => items[key].items[0])
    
    const onShopPhone = () => {
        console.log('Ваш заказ:', items)
    }

    const dispatch = useDispatch()

    const onClearCart = () => {
        dispatch(clearCart())        
    }

    const onRemoveItem = (id) => {
        if (window.confirm('Удалить')) {
            dispatch(removeCartItem(id))
        }
    }
    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };
    

    const onMinusItem = (id) => {
        dispatch(minusItem(id))
    }

    return (
        <div className='container mt-5 shop'> 
            <hr style={{height:'2px'}} className='d-block mt-3' />
            {totalCard ? 
            <div>
                {onAddedCart.map((obj, index) => (
                    <CartPhone 
                        key={`${obj}_${index}`} 
                        {...obj} 
                        onMinus={onMinusItem} 
                        onPlus={onPlusItem} 
                        price={obj.price.toLocaleString("en-de")}
                        onRemove={onRemoveItem}
                        totalCard={items[obj.id].items.length} 
                        totalPrice={items[obj.id].totalPrice}
                    />
                ))}

            {totalCard ? 
            <div className='d-flex justify-content-between align-items-center'>
                <div className='shop-btn'>
                    <div>
                        <h1 className='shop-end'>Итого: {totalPrice.toLocaleString("en-de")}</h1>
                        <h1>Общее Кол: {totalCard}</h1>
                    </div>
                </div>
                <div>
                    <h1 onClick={onClearCart} style={{cursor:'pointer', display:'flex', justifyContent:'flex-end'}} >Очистить корзину</h1>
                    <button onClick={onShopPhone} style={{cursor:'pointer', display:'flex', justifyContent:'flex-end', marginLeft:'auto'}}>Оплатить сейчас</button>
                </div>
            </div> : null}
            </div> :  
                <div className='shop-top'>
                    <h1 className='d-flex justify-content-center'>Вы не сделали заказ</h1>
                    <Link to='/'>
                        <button className='d-flex btn-primary btn-shop justify-content-center'>Вернуться назад</button>
                    </Link>
                    <div>
                        <h1>Итого: {totalPrice}</h1>
                        <h1>Кол: {totalCard}</h1>
                    </div>
                </div>
            }
        </div>
    )
    
}

export default ShopCart