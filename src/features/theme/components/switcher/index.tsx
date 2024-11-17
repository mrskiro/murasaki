import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "../../context";

/**
 * TODO: buttonにする、文書構造的に最初に読み上げられるのを避ける
 */
export const Switcher = () => {
  const id = useId();

  const [isAnimated, setIsAnimated] = useState(false);
  const clicked = useRef(false);
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    if (clicked.current) {
      return;
    }
    clicked.current = true;
    setIsAnimated(true);

    setTheme(theme === "dark" ? "light" : "dark");

    const interval = setInterval(() => {
      clicked.current = false;
      clearInterval(interval);
      setIsAnimated(false);
    }, 1000);
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <label
      className="cursor-pointer w-20 flex flex-col items-center"
      htmlFor={id}
    >
      <span
        data-animated={isAnimated}
        className="block w-px h-[30px] bg-foreground data-[animated=true]:animate-cable-pull"
      />
      <input
        className="appearance-none w-3 h-3 rounded-full mb-1.5 border border-[#a6a7ab] checked:border-[#f1f3f5] bg-[#eeeeee] checked:bg-[#909296]"
        type="checkbox"
        id={id}
        checked={theme === "dark"}
        onChange={onChange}
        aria-label={`Switch theme, now is ${
          theme === "dark" ? "dark" : "light"
        } mode`}
      />
    </label>
  );
};
