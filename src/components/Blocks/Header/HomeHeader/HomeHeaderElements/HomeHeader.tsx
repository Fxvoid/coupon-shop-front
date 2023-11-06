import React, { FC, useContext, useEffect, useState } from "react";
import styles from "./HomeHeader.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "@/redux/modalReducer";
import { RootState } from "@/redux/store";
import Logo from "./Logo/Logo";
import Location from "./Logo/Location/Location";
import Search from "./Search/Search";
import Authorization from "./Authorization/Authorization";
import Image from "next/image";
import Attractions from "./../../../../../../public/icons/Attractions.png";
import Beauty from "./../../../../../../public/icons/Beauty.png";
import Educations from "./../../../../../../public/icons/educations.png";
import Fitness from "./../../../../../../public/icons/fitness.png";
import ForHome from "./../../../../../../public/icons/ForHome.png";
import Health from "./../../../../../../public/icons/Health.png";
import Kids from "./../../../../../../public/icons/kids.png";
import Restaurants from "./../../../../../../public/icons/Restaurants.png";
import Weekends from "./../../../../../../public/icons/weekends.png";
import Cancel from "./../../../../../../public/icons/Cancel.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Dictionary } from "@reduxjs/toolkit";
import Product from "@/components/Blocks/elements/Product/Product";

interface CategoryProps {
  category: string;
}

const Category: FC<CategoryProps> = ({ category }) => {
  const products = [{}, {}, {}, {}];

  return (
    <div
      className={styles.catalog_category}
      style={category === "" ? { display: "none" } : { display: "block" }}
    >
      <h1>{category}</h1>
      <div className={styles.card_list}>
        {products.map((product: any, index: number) => (
          <Product
            key={index}
            name="Meta Quest Gift Cards"
            description="Redeemable on 350+ games and apps"
            level={2}
            price={1000}
          />
        ))}
      </div>
    </div>
  );
};

const HomeHeader: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: RootState) => state.modal.modalOpen);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleToggleModal = () => {
    dispatch(setModalOpen(!modalOpen));
  };

  const handleToggleCatalog = () => {
    setShow(!show);
  };

  return (
    <header>
      <div
        className={styles.header}
        style={show ? { position: "fixed", zIndex: "999" } : {}}
      >
        <div className={`${styles.container} ${styles.header_container}`}>
          <div className={styles.header__logo}>
            <Logo />
            <Location />
          </div>
          <div className={styles.header__search}>
            {show ? (
              <Image
                src={Cancel}
                alt=""
                onClick={handleToggleCatalog}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <MenuIcon
                onClick={handleToggleCatalog}
                style={{
                  display: "block",
                  fontSize: "30px",
                  cursor: "pointer",
                  background: "#CCC5B9",
                  borderRadius: "5px",
                  position: "relative",
                }}
              />
            )}

            <div
              className={`${styles.catalog} ${show ? styles.show : ""}`}
              onMouseLeave={() => setSelectedCategory("")}
            >
              <div className={styles.catalog__container}>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Здоровье")}
                >
                  <div>
                    <Image src={Health} alt={""} />
                    <p>Здоровье</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Красота")}
                >
                  <div>
                    <Image src={Beauty} alt={""} />
                    <p>Красота</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Рестораны и кафе")}
                >
                  <div>
                    <Image src={Restaurants} alt={""} />
                    <p>Рестораны и кафе</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Активный отдых")}
                >
                  <div>
                    <Image src={Weekends} alt={""} />
                    <p>Активный отдых</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Фитнес")}
                >
                  <div>
                    <Image src={Fitness} alt={""} />
                    <p>Фитнес</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Развлечения")}
                >
                  <div>
                    <Image src={Attractions} alt={""} />
                    <p>Развлечения</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Всё для дома")}
                >
                  <div>
                    <Image src={ForHome} alt={""} />
                    <p>Всё для дома</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Дети")}
                >
                  <div>
                    <Image src={Kids} alt={""} />
                    <p>Дети</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
                <div
                  className={styles.catalog_items}
                  onMouseOver={() => setSelectedCategory("Обучение")}
                >
                  <div>
                    <Image src={Educations} alt={""} />
                    <p>Обучение</p>
                  </div>

                  <ArrowForwardIosIcon />
                </div>
              </div>
              <Category category={selectedCategory} />
            </div>
            <Search />
          </div>
          <Authorization handleToggleModal={handleToggleModal} />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
