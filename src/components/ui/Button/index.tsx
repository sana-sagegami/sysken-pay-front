import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  buttonColor?: "white" | "blue"; //デフォルト:white , white:背景が白色のボタン, blue:背景が青色のボタン
  fontSize?: string;
  fontWeight?: "normal" | "bold" | number;
  width?: string;
  height?: string;
  borderWidth?: string;
  borderRadius?: string;
}

function Button({
  text,
  buttonColor = "white",
  fontSize,
  fontWeight = "bold",
  width,
  height,
  borderWidth = "1.5px",
  borderRadius = "100px",
}: ButtonProps) {
  const className =
    buttonColor === "white" ? styles.whiteButton : styles.blueButton;
  return (
    <button
      className={className}
      style={{
        fontSize,
        fontWeight,
        width,
        height,
        borderWidth,
        borderRadius,
      }}
    >
      {text}
    </button>
  );
}

export default Button;

interface ArrowButtonProps {
  type?: "back" | "next";
}

//デフォルト:back , type: back:戻るボタン, next:次へボタン
function ArrowButton({ type = "back" }: ArrowButtonProps) {
  const className =
    type === "back" ? styles.leftArrowButton : styles.rightArrowButton;
  return (
    <button className={className}>
      {type === "back" ? (
        <>
          <img
            src="/icons/LeftArrow.png"
            alt="Arrow"
            className={styles.leftArrow}
          />
          戻る
        </>
      ) : (
        <>
          次へ
          <img
            src="/icons/RightArrow.png"
            alt="Arrow"
            className={styles.rightArrow}
          />
        </>
      )}
    </button>
  );
}

export { ArrowButton };
