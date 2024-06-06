import { motion } from "framer-motion";
import { useSetAtom } from "jotai";
import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { menuAtom } from "../../context/atom";
import Authenticity from "./Authenticity";
import Ethos from "./Ethos";
import History from "./History";
import Rating from "./Rating";
import VisionMission from "./VisionMission";
import styles from "../../css/AboutUs.module.css";

const AboutUsLayout: React.FC = () => {
  const [pixel, setPixel] = useState(0);
  const [renderedComp, setRenderedComp] = useState({
    authenticity: false,
    ethos: false,
    visionMission: false,
    rating: false,
  });
  const setMenuState = useSetAtom(menuAtom);

  useEffect(() => {
    const scrollHandler = _.throttle(() => {
      setPixel(window.scrollY);
      setMenuState(false);
    });
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (pixel > 10) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          authenticity: true,
        };
      });
    }
    if (pixel > 570) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          ethos: true,
        };
      });
    }
    if (pixel > 1000) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          visionMission: true,
        };
      });
    }
    if (pixel > 1500) {
      setRenderedComp((prev) => {
        return {
          ...prev,
          rating: true,
        };
      });
    }
  }, [pixel]);

  return (
    <div className={styles["about-us-layout"]}>
      <motion.p
        className={styles["about-us-headtag"]}
        initial={{ x: -20 }}
        animate={{ x: 0 }}
      >
        About Us
      </motion.p>
      <article>
        <History />
        {renderedComp.authenticity && <Authenticity />}
        {renderedComp.ethos && (
          <Fragment>
            <Ethos />
            <hr className={styles["weird-line"]} />
          </Fragment>
        )}
        {renderedComp.visionMission && (
          <Fragment>
            <VisionMission />
            <hr style={{ width: "50%" }} />
          </Fragment>
        )}
        {renderedComp.rating && <Rating />}
      </article>
    </div>
  );
};

export default AboutUsLayout;
