import { useLayoutEffect, useState } from "react";
import { HiOutlineMoon, HiMoon } from "react-icons/hi2";

const HeaderComponent: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
      document.getElementById("root")?.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.getElementById("root") as HTMLDivElement;
    if (darkMode) {
      root.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    } else {
      root.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    }
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="header-component">
      <h1 onClick={() => window.location.replace("/")}>Where in the world?</h1>
      <button onClick={toggleDarkMode} className="header-component__btn">
        {darkMode ? <HiMoon /> : <HiOutlineMoon />}
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default HeaderComponent;
