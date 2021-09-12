import React from 'react'

const CartItem = ({id, name, images, price, addCartPhone, charactirestics, addedCount, type}) => {
    const onAddedCart = () => {
        const obj = {
            id,
            name,
            images,
            price,
            charactirestics,
            type,
        }

        addCartPhone(obj)
    }

    return (
        <div className="card card-phone mb-4 p-3" style={{width:'18rem',  border:'none'}}>
            <img  style={{width:'200px'}} src={images} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h4>{price}</h4>
                {addCartPhone ? <button onClick={onAddedCart} className="btn btn-secondary w-100">Добавить {name}</button> : null}
                {addedCount && <h3>Кол: {addedCount}</h3>}
            </div>
        </div>
    )
}

export default CartItem