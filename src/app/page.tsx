"use client";
import { get } from "https";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  //Elements
  const symbol = "X";
  const numberOfButtons = 9;
  const alertMessage = "Geri alınacak hamle yok";

  const [stack, setStack] = useState([-1]);
  const [buttonText, setButtonText] = useState(Array(numberOfButtons).fill(""));

  const onBackButtonClick = () => {
    if (stack.length <= 1) {
      alert(alertMessage);
      return;
    }

    setButtonText((prevText) => {
      let newText = [...prevText];
      const lastItem = stack[stack.length - 1];
      newText[lastItem] = newText[lastItem] === "" ? symbol : "";
      return newText;
    });

    setStack((prevStack) => prevStack.slice(0, prevStack.length - 1));
  };

  const onSquareClick = (index: number) => {
    setStack((prevStack) => [...prevStack, index]);

    setButtonText((prevText) => {
      let newText = [...prevText];
      newText[index] = newText[index] === "" ? symbol : "";
      return newText;

    });
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {buttonText.map((buttonText, index) => (
          <button key={index} onClick={() => onSquareClick(index)}>
            {buttonText}
          </button>
        ))}
      </div>
    </main>
  );
}
