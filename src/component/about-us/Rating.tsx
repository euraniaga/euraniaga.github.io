import { useSetAtom } from "jotai";
import { Link } from "react-router-dom";
import { menuAtom } from "../../context/atom";
import styles from "../../css/Rating.module.css";
import { motion } from "framer-motion";

const { BASE_URL } = import.meta.env;

const border = {
  border: "1px solid #eeeba7",
  borderRadius: "10px",
  padding: "5%",
};

const Rating: React.FC = () => {
  const setMenuState = useSetAtom(menuAtom);

  return (
    <motion.div
      className={styles.rating}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section>
        <h1>
          <a
            href="https://e-katalog.lkpp.go.id/info/penyedia/552304"
            target="_blank"
          >
            LKPP Rating
          </a>
        </h1>
        <div className={styles["rating-box"]}>
          <div style={border}>
            <h3>Product Accuracy</h3>
            <p>3.9 / 4.0</p>
          </div>
          <div style={border}>
            <h3>Service</h3>
            <p>3.9 / 4.0</p>
          </div>
          <div style={border}>
            <h3>Delivery Speed</h3>
            <p>3.9 / 4.0</p>
          </div>
        </div>
      </section>
      <br />
      <Link
        style={{ color: "#eeeba7", textDecoration: "none" }}
        to={BASE_URL}
        onClick={() => setMenuState(false)}
      >
        Home
      </Link>
    </motion.div>
  );
};

export default Rating;
