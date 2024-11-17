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
    document.documentElement.dataset.theme = theme;
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (theme) {
      document.documentElement.dataset.theme = theme;
      setThemeState(theme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      const target = e.target as MediaQueryList;
      const systemTheme = target.matches ? "dark" : "light";
      if (themeState === "system") {
        setTheme(systemTheme);
      }
    };
    media.addEventListener("change", handleMediaChange);

    return () => {
      media.removeEventListener("change", handleMediaChange);
    };
  }, [themeState, setTheme]);

  const providerValue = useMemo(
    () =>
      ({
        theme: themeState,
        setTheme,
      } satisfies ContextValue),
    [themeState, setTheme]
  );

  return (
    <Context.Provider value={providerValue}>
      <script
        dangerouslySetInnerHTML={{
          __html: `(${loadTheme.toString()})("${STORAGE_KEY}")`,
        }}
      />
      {props.children}
    </Context.Provider>
  );
};

const loadTheme = (storageKey: string) => {
  const element = document.documentElement;
  const theme = localStorage.getItem(storageKey);
  if (theme) {
    element.dataset.theme = theme;
  } else {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    element.dataset.theme = systemTheme;
  }
};

export const useTheme = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
