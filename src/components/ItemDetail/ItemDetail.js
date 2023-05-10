const ItemDetail = ({item}) => {
    return (
        <div className='col-3 m-auto'>
            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img} alt={item.name}/>
            <p>{item.gender}</p>
            <p><small>Categoria: {item.category}</small></p>
            <p>Precio: ${item.price}</p>
        </div>
    )
}

export default ItemDetail