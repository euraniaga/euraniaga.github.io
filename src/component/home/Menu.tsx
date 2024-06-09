import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { menuAtom } from "../../context/atom";
import styles from "../../css/Menu.module.css";

const { BASE_URL } = import.meta.env;

const Menu: React.FC = () => {
  const [menuState, setMenuState] = useAtom(menuAtom);
  const segmentList = [
    { title: "Products", path: "products" },
    { title: "About Us", path: "about-us" },
    { title: "Shop", path: "shop" },
    { title: "Home", path: "" },
  ];
  const contactList = [
    { title: "WhatsApp 1", path: "https://wa.me/6281279909679" },
    { title: "WhatsApp 2", path: "https://wa.me/6281294181950" },
    { title: "Email", path: "email" },
  ];

  return (
    <AnimatePresence mode="wait">
      {menuState && (
        <motion.div
          className={styles.menu}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className={styles["menu-content"]}>
            {segmentList.map((el, index) => {
              return (
                <motion.h2
                  key={el.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <Link
                    onClick={() => setMenuState(false)}
                    to={BASE_URL + el.path}
                  >
                    {el.title}
                  </Link>
                </motion.h2>
              );
            })}
            <div style={{ marginTop: "100px" }}>
              {contactList.map((el, index) => {
                return (
                  <motion.h4
                    key={el.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {el.title === "Email" ? (
                      <Link
                        onClick={() => setMenuState(false)}
                        to={BASE_URL + el.path}
                      >
                        {el.title}
                      </Link>
                    ) : (
                      <a
                        onClick={() => setMenuState(false)}
                        href={el.path}
                        target="_blank"
                      >
                        {el.title}
                      </a>
                    )}
                  </motion.h4>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
