import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import styles from "../css/VisionMission.module.css";

const VisionMission: React.FC = () => {
  const [visMis, setVisMis] = useState(true);

  const vision = (
    <Fragment>
      <h1 style={{ margin: 0, fontSize: "100px", verticalAlign: "middle" }}>
        Vision
      </h1>
      <p>
        Transforming into the <b>ultimate solution</b> for your health concerns
        with our comprehensive medical supplies.
      </p>
    </Fragment>
  );

  const mission = (
    <Fragment>
      <h1 style={{ margin: 0, fontSize: "100px", verticalAlign: "middle" }}>
        Mission
      </h1>
      <p>
        Enhance the <b>development</b>, <b>distribution</b>, and{" "}
        <b> customer service </b>of medical equipment to maximize business
        potential.
      </p>
    </Fragment>
  );

  return (
    <div className={styles["vision-mission"]}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={visMis ? "vision" : "mission"}
          className={styles["vision-mission-content"]}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
        >
          {visMis ? vision : mission}
        </motion.div>
      </AnimatePresence>
      <div className={styles.background} />
      <div className={styles["button-container"]}>
        <motion.img
          src="./src/asset/image/arrow.svg"
          alt="arrow button"
          style={{ width: "20px", height: "20px" }}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setVisMis((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default VisionMission;
