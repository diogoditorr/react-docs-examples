import React from "react";

type Props = {
    category: string;
};

export default function ProductCategoryRow({ category }: Props) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}
