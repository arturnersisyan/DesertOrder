import Button from "./UI/Button"
import { currencyFormatter } from "../util/formatting" 
import { useContext } from "react"
import CartContext from "../store/CarContext";

export default function DesertItem({desert}) {
    const cartCtx = useContext(CartContext);

    function handleAddDesertToCart() {
        cartCtx.addItem(desert);
    }

    return(
        <li className="desert-item">
            <article>
                <img src={`http://localhost:3000/${desert.image}`} alt={desert.name} />
                <div>
                    <h3>{desert.name}</h3>
                    <p className="desert-item-price">
                        {currencyFormatter.format(desert.price)}
                    </p>
                    <p className="desert-item-description">{desert.description}</p>
                </div>
                <p className="desert-item-actions">
                    <Button onClick={handleAddDesertToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}