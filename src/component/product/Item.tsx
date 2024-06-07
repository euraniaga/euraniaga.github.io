import { Link, useLoaderData } from "react-router-dom";
import reference from "../../public/asset/data/eura.full-item.json";
import styles from "../../css/Item.module.css";

const { BASE_URL } = import.meta.env;

const Item: React.FC = () => {
  const loader = useLoaderData() as string;
  const item = reference.filter((el) => el.name === loader);

  return (
    <div className={styles.item}>
      <h1>{loader} is available!</h1>
      <div className={styles["item-content"]}>
        {item.map((el) => {
          const typeKey = el.type || "";
          return (
            <div
              key={el.name + "_" + typeKey}
              className={styles["item-detail"]}
            >
              {el.brand !== "" && (
                <div>
                  <p>Brand</p>
                  <p>{el.brand}</p>
                  <p>—</p>
                </div>
              )}
              {el.type !== "" && (
                <div>
                  <p>Type</p>
                  <p>{el.type}</p>
                  <p>—</p>
                </div>
              )}
              <div>
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
        <Link to={BASE_URL + "products/items"}>Back</Link>
      </div>
    </div>
  );
};

export default Item;
