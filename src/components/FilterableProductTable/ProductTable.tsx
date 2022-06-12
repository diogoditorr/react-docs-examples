import React, { ReactNode } from "react";
import { Product } from "../../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type Props = {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
};

export default function ProductTable({
    products,
    filterText,
    inStockOnly,
}: Props) {
    const rows: ReactNode[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if (
            product.name
                .toLocaleLowerCase()
                .indexOf(filterText.toLowerCase()) === -1
        ) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
