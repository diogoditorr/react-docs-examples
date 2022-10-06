import { Product } from "../../App";

type Props = {
    product: Product;
};

export default function ProductRow({ product }: Props) {
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}
