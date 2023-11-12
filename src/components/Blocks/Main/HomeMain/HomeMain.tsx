import React, { FC } from "react";
import styles from "./HomeMain.module.css";
import Image from "next/image";
import Man from "./../../../../../public/ManIcon.png";
import ProductList from "../../elements/ProductList/ProductList";
import Product from "../../elements/Product/Product";
import ad_logo from "../../../../../public/ad_logo.png";

interface HomeMainProps {
  productList?: any;
  loadProductPageCallback: (page: number) => void;
}

const HomeMain: FC<HomeMainProps> = ({
  productList,
  loadProductPageCallback,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.ads}>
        <Image src={ad_logo} alt={"ad_logo"} />
        <p>Здесь может быть размещена ваша реклама</p>
      </div>
      <section className={styles.top}>
        <div className={styles.left}>
          <h1>ПРЕВРАТИТЕ СВОИ ПОКУПКИ В СБЕРЕЖЕНИЯ </h1>
          <h3>Выгодные предложения</h3>
          {productList?.length > 0 ? (
            <ProductList
              productList={productList}
              preloadProducts={loadProductPageCallback}
            />
          ) : (
            <p className={styles.no_products}>Нет доступных товаров</p>
          )}
        </div>

        <div className={styles.right}>
          <Image src={ad_logo} alt={"ad_logo"} />
          <p>Здесь может быть размещена ваша реклама</p>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.bottom__left}>
          <h3>Популярно в последнее время</h3>
          {productList?.length > 0 ? (
            <ProductList
              productList={productList}
              preloadProducts={loadProductPageCallback}
            />
          ) : (
            <p className={styles.no_products}>Нет доступных товаров</p>
          )}
        </div>
        <div className={styles.bottom__right}>
          <Image src={Man} alt={"ManIcon"}></Image>
        </div>
      </section>
    </main>
  );
};

export default HomeMain;
