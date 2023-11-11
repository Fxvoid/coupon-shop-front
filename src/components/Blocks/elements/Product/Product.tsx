import React, { FC, useEffect, useState } from "react";
import styles from "./Product.module.css";
import Image from "next/image";
import apiClient from "@/http/client";
import router from "next/router";

interface ProductProps {
  product: {
    ID: string;
    image: File;
    content_url: string;
    name: string;
    description: string;
    level: number;
    price: number;
    discount: number;
    region: string;
    category: string;
    subcategory: string | null;
  };
  style?: React.CSSProperties;
  fullSize?: boolean;
}

const Product: FC<ProductProps> = ({ product, style, fullSize = true }) => {
  let levelString = "";

  switch (product.level) {
    case 1:
      levelString = "Минимум";
      break;
    case 2:
      levelString = "Стандарт";
      break;
    case 3:
      levelString = "Премиум";
      break;
    default:
      levelString = "Минимум";
      break;
  }

  const handleBuy = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await apiClient.post("/payment", {
        amount: product.price.toFixed(2).toString(),
        payment_type: "coupon",
        type_id: product.ID,
      });
      router.push(data?.RedirectURL);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className={`${styles.card} ${fullSize ? "" : styles.mini}`}
      style={style}
    >
      <Image
        src={product.content_url}
        alt={""}
        width={fullSize ? 209 : 137}
        height={fullSize ? 232 : 171}
        className={styles.card_image}
      />
      <div className={styles.card_info}>
        <div>
          <h2>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
        </div>
        <p className={styles.level}>Уровень: {levelString}</p>
        <div className={styles.price}>
          <span>{product.price} ₽</span>
        </div>
        <button type="button" onClick={handleBuy}>
          КУПИТЬ
        </button>
      </div>
    </div>
  );
};

export default Product;
