import { useNavigate } from "react-router-dom";
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
  onClick?: () => void; //type="next"の時のページ遷移先の指定
}

//デフォルト:back , type: back:戻るボタン, next:次へボタン
function ArrowButton({ type = "back", onClick }: ArrowButtonProps) {
  const navigate = useNavigate();
  const className =
    type === "back" ? styles.leftArrowButton : styles.rightArrowButton;

  const arrowClass = type === "back" ? styles.leftArrow : styles.rightArrow;

  const handleClick = () => {
    if (type === "back") {
      //1つ前のページに戻る
      navigate(-1);
    } else if (onClick) {
      //プロップスで指定
      onClick();
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {type === "back" ? (
        <>
          <img src="/icons/LeftArrow.svg" alt="Arrow" className={arrowClass} />
          戻る
        </>
      ) : (
        <>
          次へ
          <img src="/icons/RightArrow.svg" alt="Arrow" className={arrowClass} />
        </>
      )}
    </button>
  );
}

export { ArrowButton };
