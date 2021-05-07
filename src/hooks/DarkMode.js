import { useLocalStorage } from "./LocalStorage";

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage("darkModeOn");

	return [darkMode, setDarkMode];
};