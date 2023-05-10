import ItemDetail from "../ItemDetail/ItemDetail"

const ItemList = ( {items} ) => {

    return (
        <div>
            <h2 className="list-container__title">Libros</h2>
            <hr/>

            <div className='row'>
                { items.map((producto) => <ItemDetail key={producto.id} item={producto}/>) }
            </div>
        </div>
    )
}

export default ItemList