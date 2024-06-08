import { Link, useLoaderData } from "react-router-dom";
import reference from "../../public/asset/data/eura.items.json";
import styles from "../../css/Item.module.css";

const { BASE_URL } = import.meta.env;

const Item: React.FC = () => {
  const loader = useLoaderData() as string;
  const item = reference.filter((el) => el.name === loader);

  return (
    <div className={styles.item}>
      <div>
        <h1>{loader} is available!</h1>
        <div className={styles["item-content"]}>
          {item.map((el) => {
            const typeKey = el.type || "";
            return (
              <div
                key={el.name + "_" + typeKey + "_" + el.link}
                className={styles["item-detail"]}
              >
                {el.brand !== "" && (
                  <div className={styles["detail-section"]}>
                    <p>Brand:</p>
                    <p>{el.brand}</p>
                  </div>
                )}
                {el.type !== "" && (
                  <div className={styles["detail-section"]}>
                    <p>Type:</p>
                    <p>{el.type}</p>
                  </div>
                )}
                {el.unit !== "" && (
                  <div className={styles["detail-section"]}>
                    <p>Unit:</p>
                    <p>{el.unit}</p>
                  </div>
                )}
                <div className={styles["detail-section"]}>
                  {el.link !== "" ? (
                    <a href={el.link} target="_blank">
                      <p>Link</p>
                    </a>
                  ) : (
                    <a href={"https://wa.me/6281294181950"} target="_blank">
                      <p>WhatsApp</p>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <Link
          className={styles["back-button"]}
          to={BASE_URL + "products/items"}
        >
          Back
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Item;
