import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "../../css/Items.module.css";
import jsonData from "../../public/asset/data/eura.items.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { BASE_URL } = import.meta.env;

interface Item {
  name: string;
  brand: string;
  type: string;
  unit: string;
  link: string;
  segment?: string[];
}

const data = jsonData.map((el) => {
  return {
    ...el,
    segment: el.segment?.split(","),
  };
}) as Item[];

const Items: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");

  const [itemList, setItemList] = useState(filter("", "all"));
  const [uniqueItems, setUniqueItems] = useState([
    ...new Set(itemList.map((el) => el.name)),
  ]);

  const searchNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchName(event.target.value);
  };

  const searchCategoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSearchCategory(event.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      const filteredData = filter(searchName, searchCategory);
      setItemList(filteredData);
      setUniqueItems([...new Set(filteredData.map((el) => el.name))]);
    }, 100);
    return () => clearTimeout(timerId);
  }, [searchName, searchCategory]);

  return (
    <div className={styles.items}>
      <section className={styles["items-content"]}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our E-Catalogue Items
        </motion.h1>
        <motion.div
          className={styles["item-search"]}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <label>Search by category</label>
            <select onChange={searchCategoryHandler}>
              <option value={"all"}>All</option>
              <option value={"non-sterile-electromedic"}>
                Non-Sterile Electromedic
              </option>
              <option value={"sterile-electromedic"}>
                Sterile Electromedic
              </option>
              <option value={"in-vitro-diagnostic"}>Diagnostic In Vitro</option>
              <option value={"non-radiation-electromedic"}>
                Non-Radiation Electromedic
              </option>
              <option value={"pkrt"}>Household Health Products</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Search by name</label>
            <input id="name" value={searchName} onChange={searchNameHandler} />
          </div>
        </motion.div>
        <div className={styles["items-grid"]}>
          {uniqueItems.map((el) => {
            return (
              <motion.div
                // initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                className={styles["item-card"]}
                key={el}
              >
                <Link
                  to={
                    el === "Back"
                      ? BASE_URL + "products/"
                      : BASE_URL + "products/items/" + el
                  }
                >
                  <motion.p whileHover={{ color: "#f1dc9c" }}>{el}</motion.p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Items;

const filter = (name: string, category: string) => {
  if (category === "all") {
    return data.filter((el) => el.name.toLowerCase().match(name));
  } else {
    return data
      .filter((el) => el.segment?.includes(category))
      .filter((el) => el.name.toLowerCase().match(name));
  }
};
