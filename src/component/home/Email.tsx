import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import styles from "../../css/Email.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { BASE_URL } = import.meta.env;

const Email: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info("Sending your message...", {
      autoClose: 2500,
      position: "top-center",
      theme: "dark",
    });

    try {
      const responseStatus: { status: number; text: string } =
        await emailjs.sendForm(
          "service_eura",
          "template_nhv2tco",
          form.current || "empty form",
          "28Dp7gNN9l9NgEzRt"
        );

      if (responseStatus.status !== 200 || responseStatus.text !== "OK") {
        throw new Error("Failed to send message, please try again later.");
      }

      toast.success("Message successfully sent!", {
        autoClose: 2500,
        position: "top-center",
        theme: "dark",
      });
    } catch (err: any) {
      console.error(err);
      toast.error(err.message, {
        autoClose: 3250,
        position: "top-center",
        theme: "dark",
      });
    }
  };

  return (
    <div className={styles["email-form-container"]}>
      <ToastContainer />
      <motion.div
        className={styles["email-form"]}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <h1>Send your message</h1>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
            <Link to={BASE_URL}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Back
              </motion.button>
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Email;
