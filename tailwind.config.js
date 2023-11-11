export const content = [];
export const theme = {
  screens: {
    sm: "660px",
    md: "1024px",
    xl: "1440px",
  },
};
export const plugins = [require("@tailwindcss/typography"), require("daisyui")];
export const daisyui = {
  themes: ["acid", "dark"],
  darkTheme: "dark",
  base: true,
  styled: true,
  utils: true,
  rtl: false,
  prefix: "",
  logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
};
