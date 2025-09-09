import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

import noImg from '../assets/no-image.jpg';

interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string;

    imgToShow = img || product.img || noImg;

    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt={imgToShow} style={{
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
        }} />
    );
}
