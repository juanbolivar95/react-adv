import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import style from '../styles/styles.module.css';

import noImg from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string;

    imgToShow = img || product.img || noImg;

    return (
        <img className={style.productImg} src={imgToShow} alt={imgToShow} />
    );
}
