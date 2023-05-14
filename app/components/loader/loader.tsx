import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Loader = () => {
  const textArray = "AIがテキストを生成中です...".split("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev > textArray.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="container">
      <div className="title">
        <h3>
          {textArray.map((word, index) => {
            if (index <= count) {
              return <span key={index}>{word}</span>;
            }
            return "";
          })}
        </h3>
      </div>
      <div className="loaderContainer">
        <div className={styles.loader}>
          <div className={styles.cubes}>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
            <div className={styles.cube}>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
              <div className={styles.side}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
