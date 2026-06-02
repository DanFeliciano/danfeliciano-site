import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111d",
        graphite: "#101827",
        signal: "#15c6d6",
        amber: "#f2b84b",
        paper: "#f7f9fc",
        charcoal: "#18202b",
      },
      boxShadow: {
        command: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
