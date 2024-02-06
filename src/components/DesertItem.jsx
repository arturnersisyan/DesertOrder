export default function DesertItem({desert}) {
    return(
        <li className="desert-item">
            <article>
                <img src={`http://localhost:3000/${desert.image}`} alt={desert.name} />
                <div>
                    <h3>{desert.name}</h3>
                    <p className="desert-item-price">{desert.price}</p>
                    <p className="desert-item-description">{desert.description}</p>
                </div>
                <p className="desert-item-actions">
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}