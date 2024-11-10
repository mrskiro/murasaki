import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "system" | "light" | "dark";

type ContextValue = {
  theme: Theme;
  setTheme: (theme: Exclude<Theme, "system">) => void;
};

const Context = createContext<ContextValue | undefined>(undefined);

const STORAGE_KEY = "theme";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = (props: Props) => {
  const [themeState, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return localStorage.getItem(STORAGE_KEY) as Theme;
  });

  const setTheme = useCallback((theme: Exclude<Theme, "system">) => {
    setThemeState(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    document.body.dataset.theme = theme;
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (theme) {
      document.body.dataset.theme = theme;
      setThemeState(theme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.body.dataset.theme = systemTheme;
      setThemeState(systemTheme);
      localStorage.setItem(STORAGE_KEY, systemTheme);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      const target = e.target as MediaQueryList;
      const systemTheme = target.matches ? "dark" : "light";
      if (themeState === "system") {
        setThemeState(systemTheme);
        localStorage.setItem(STORAGE_KEY, systemTheme);
      }
    };
    media.addEventListener("change", handleMediaChange);

    return () => {
      media.removeEventListener("change", handleMediaChange);
    };
  }, [themeState]);

  const providerValue = useMemo(
    () =>
      ({
        theme: themeState,
        setTheme,
      } satisfies ContextValue),
    [themeState, setTheme]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
