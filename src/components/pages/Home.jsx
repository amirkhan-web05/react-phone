import React, {useEffect, useState} from 'react'
import CartItem from './CartItem'
import {useDispatch, useSelector} from 'react-redux'
import { ADD_TO_CART } from '../../redux/types'
import { fetchPhone, setPhone } from '../../redux/action/fetchPhone';

const Home = () => {
    const dispatch = useDispatch()

    const handleCartAdd = (obj) => {
        dispatch({
            type: ADD_TO_CART,
            payload:obj
        })
    }

    const items = useSelector(({ phone }) => phone.items);

    const [value, setValue] = useState('')

    const filteredPhone = items.filter(phone => {
        return phone.name.toLowerCase().includes(value.toLowerCase())
    })

    const cartItems = useSelector(({ cart }) => cart.items)

    const [visible, setVisible] = useState(4)

    const showVisibleMore = () => {
        setVisible((prev) => prev + 2)
    }

    useEffect(() => {
        dispatch(fetchPhone())
    }, [])


    return (
        <div className='container'>
            <div className='home-input'>
            <input 
                type="text"  
                className='mt-3 w-50'
                placeholder='Поиск телефона'
                value={value}
                onChange={(event) => setValue(event.target.value)} 
            />
            </div>
            <div className="d-flex flex-wrap mt-3 mb-5">
                {items && filteredPhone.slice(0, visible).map((item) => (
                    <CartItem 
                        key={item.id}  
                        id={item.id}
                        addCartPhone={handleCartAdd} 
                        name={item.name}
                        images={item.images}
                        price={item.price}
                        charactirestics={item.charactirestics}
                        type={item.type}
                        addedCount={cartItems[item.id] && cartItems[item.id].items.length}          
                    />
                ))}   
            </div>
            {
                visible <= 5 ? 
                <button className='mb-5 btn-primary w-25' onClick={showVisibleMore}>
                    Show More
                </button> 
                :
                null
            }
        </div>
    )
}

export default Home