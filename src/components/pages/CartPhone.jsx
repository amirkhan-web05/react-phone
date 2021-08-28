import React, {useState} from 'react'

const CartPhone = ({id, price, onRemove, name, type, images, charactirestics, totalCard, onPlus, onMinus}) => {

    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handlePlusItem = () => {
        onPlus(id);
    };
    
    const handleMinusItem = () => {
        onMinus(id);
    };

    const [activeIndex, setActiveIndex] = useState(null)
    const handleChangeIndex = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className='shop-cart mb-5'>
        <div className="shop-preview">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h1 className='mb-3'>Смартфон {name}</h1>
                <span style={{fontSize:'30px', cursor:'pointer'}} onClick={handleRemoveClick}>&times;</span>
            </div>
            <div className="shop-info d-flex">
                <img style={{width:'300px'}} src={images} alt="" />
                <div className="shop-info__text">
                    <span className='shop-info__char'>Характеристики:</span>
                    <ul className='shop-memory mb-3 d-flex'>
                    {type && 
                        type.map((types, index) => (
                    <li 
                        key={`${types}_${index}`}
                        onClick={() => handleChangeIndex(index)}
                        className={activeIndex === index ? 'active-item' : 'shop-memory__item'}
                    >
                        {types}
                    </li>
                    ))}
                </ul>
                    {charactirestics && charactirestics.map((char, index) => {
                        return (
                            <ul key={`${char}_${index}`} className='mt-2'>
                                <li className='mb-2'>{char.display}</li>
                                <li className='mb-2'>{char.CPU}</li>
                                <li className='mb-2'>{char.RAM}</li>
                                <li className='mb-2'>{char.OC}</li>
                                <li className='mb-2'>{char.camera}</li>
                                <li className='mb-2'>{char.sound}</li>
                            </ul>
                        )
                    })}
                    <button onClick={handlePlusItem}>+</button>
                    <span style={{margin:'0 10px', fontSize:'20px'}} >{totalCard}</span>
                    <button onClick={handleMinusItem}>-</button>
                </div>
            </div>
            <div className='d-flex align-items-center'>
            <h2 className='d-flex'>Цена: {price}</h2>
        </div>
        <h1>Кол: {totalCard}</h1>
        </div>
        </div>
    )
}

export default CartPhone