import React from "react";
import { Link } from "react-router-dom";
import styles from "./BasicNeedsServiceUserDescription.module.css";
import ScrollToTop from "../../hooks/ScrollToTop";

const BasicNeedsServiceUserDescription = () => {
  return (
    <>
      <ScrollToTop />
      <div className={styles["header"]}>
        <Link to="/">
          <div className={styles["logo"]}>
            Need<span style={{ color: "#5CE1E6" }}>Station</span>
          </div>
        </Link>
        <div className={styles["progress-bar"]}>
          <div className={`${styles["step"]} ${styles["active"]}`}>
            <div className={styles["circle"]}></div>
          </div>{" "}
          <div className={styles["line1"]}></div>{" "}
          <span className={styles["describe-task"]}>Describe your Task</span>
          <div className={styles["line1"]}></div>
          <div className={styles["step"]}>
            <div className={styles["circle"]}></div>
          </div>
          <div className={styles["line"]}></div>
          <div className={styles["step"]}>
            <div className={styles["circle"]}></div>
          </div>
          <div className={styles["line"]}></div>
          <div className={styles["step"]}>
            <div className={styles["circle"]}></div>
          </div>
        </div>
      </div>

      <div className={styles["task-section"]}>
        <div className={styles["box"]}>
          <h1>Your Task Location</h1>
          <select id="task-location">
            <option className={styles["locationOption"]} value="vijay-nagar">
              Vijaynagar, Scheme No. 54, Indore
            </option>
            <option className={styles["locationOption"]} value="rajwada">
              Rajwada, Indore
            </option>
            <option className={styles["locationOption"]} value="bhawarkuan">
              Bhawarkuan, Indore
            </option>
          </select>
        </div>

        <div className={styles["task-box"]}>
          <h1>Task Duration</h1>
          <h1>How big is your task?</h1>
          <div className={styles["task1"]}>
            <form className={styles["form"]}>
              <label>
                <input
                  type="radio"
                  name="duration"
                  value="small"
                  style={{ height: "25px", width: "25px" }}
                />{" "}
                Small 1 hr
              </label>
              <label>
                <input
                  type="radio"
                  name="duration"
                  value="medium"
                  style={{ height: "25px", width: "25px" }}
                />{" "}
                Medium 2-3 hr
              </label>
              <label>
                <input
                  type="radio"
                  name="duration"
                  value="large"
                  style={{ height: "25px", width: "25px" }}
                />{" "}
                Large 4+ hr
              </label>
            </form>
          </div>
        </div>

        <div className={styles["box"]}>
          <h1>Tell us the details of your task</h1>
          <textarea
            style={{
              width: "98%",
              height: "228px",
              fontSize: "25px",
            }}
            placeholder="Need a reliable and efficient tasker to clean my apartment."
          ></textarea>
        </div>
      </div>

      <div className={styles["button-container"]}>
        <Link to="/available-helpers">
          {" "}
          <button className={styles["button"]}>
            See Taskers and Price
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default BasicNeedsServiceUserDescription;
