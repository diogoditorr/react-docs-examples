import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../App";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

type Props = {
    products: Product[];
}

export default function FilterableProductTable({ products }: Props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    
    return (
        <div>
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable 
                products={products} 
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}
