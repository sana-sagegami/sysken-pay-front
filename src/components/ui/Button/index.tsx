import type { JSX } from "react";
import type { AriaButtonOptions } from "react-aria";
import styles from "./Button.module.scss";

interface ButtonProps extends React.PropsWithChildren<
  AriaButtonOptions<"button">
> {
  buttonColor?: "white" | "blue"; //デフォルト:blue , white:背景が白色のボタン, blue:背景が青色のボタン
  size?: "small" | "medium" | "large"; //デフォルト:medium , small:小さいボタン, medium:普通のボタン, large:大きいボタン
  variant?: "button" | "backButton" | "nextButton"; //デフォルト:button , button:通常のボタン, submit:フォーム送信ボタン, reset:フォームリセットボタン
  onClick?: () => void;
}

export function Button(props: ButtonProps): JSX.Element {
  const {
    children,
    buttonColor = "blue",
    size = "medium",
    variant = "button",
    onClick,
  } = props;
  const className = [
    styles.button,
    buttonColor === "white" && styles.whiteButton,
    size === "small" && styles.smallButton,
    size === "large" && styles.largeButton,
    variant === "backButton" && styles.backButton,
    variant === "backButton" && styles.whiteButton,
    variant === "backButton" && styles.smallButton,
    variant === "nextButton" && styles.nextButton,
    variant === "nextButton" && styles.smallButton,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className} onClick={onClick}>
      {variant === "backButton" && (
        <img
          src="/icons/LeftArrow.svg"
          alt="leftArrow"
          className={styles.leftArrow}
        />
      )}
      {children}
      {variant === "nextButton" && (
        <img
          src="/icons/RightArrow.svg"
          alt="rightArrow"
          className={styles.rightArrow}
        />
      )}
    </button>
  );
}

export default Button;
