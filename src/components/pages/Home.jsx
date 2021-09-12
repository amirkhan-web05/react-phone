import React, {useEffect, useState} from 'react'
import CartItem from '../CartItem/CartItem'
import {useDispatch, useSelector} from 'react-redux'
import { ADD_TO_CART } from '../../redux/types'
import { fetchPhone } from '../../redux/action/fetchPhone';
import Loader from '../Loader/Loader';

const Home = () => {
    const categoryName = ['Samsung', 'iPhone', 'Xiaomi', 'Oppo']
    const dispatch = useDispatch()

    const handleCartAdd = (obj) => {
        dispatch({
            type: ADD_TO_CART,
            payload:obj
        })
    }

    const items = useSelector(({ phone }) => phone.items);
    const isLoaded = useSelector(({phone}) => phone.isLoaded)
    const category = useSelector(({ filters }) => filters);

    const [value, setValue] = useState('')

    const handlerChangeInput = (event) => {
        setValue(event.target.value);
    };
    
    const itemClickHandler = (e) => {
        setValue(e.target.textContent);
    };

    const filteredPhone = items.filter(phone => {
        return phone.name.toLowerCase().includes(value.toLowerCase())
    })

    const cartItems = useSelector(({ cart }) => cart.items)

    const [visible, setVisible] = useState(4)

    const showVisibleMore = () => {
        setVisible((prev) => prev + 2)
    }

    useEffect(() => {
        dispatch(fetchPhone(category))
    }, [category])

    return (
        <div className='container'>
            <div className='home-input'>
                <div className='d-flex align-items-center justify-content-between'>
                    <input 
                        type="text"  
                        className='w-50'
                        placeholder='Поиск телефона'
                        onChange={handlerChangeInput} 
                    />
                    {categoryName.map((name, index) => (
                        <li key={index} style={{cursor:'pointer'}} onClick={itemClickHandler} className='list-group-item'>{name}</li>
                    ))}
                </div>
            </div>
            {filteredPhone.length > 0 ? <div>
                {isLoaded ? <div  className='d-flex flex-wrap mt-4 mb-5'>
                    {items && filteredPhone.slice(0, visible).map((item) => (
                        <div key={item.id} >
                            <CartItem 
                                {...item} 
                                addCartPhone={handleCartAdd} 
                                type={item.type}
                                addedCount={cartItems[item.id] && cartItems[item.id].items.length}          
                            />
                        </div>
                    ))}   
                </div> 
                    : <div className='d-flex justify-content-center'>
                            {Array(1).fill(0).map((_, index) => <Loader key={index} />)}
                        </div>}
            </div> : <h2 className='mt-4 mb-4' >No Result</h2>}
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