export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            dark: "#1D8439", // Mørk grøn
            light: "#00A676", // Lys grøn
            grey: "#F5F5F5", // Grå
            white: "#FFFFFF", // Hvid
            black: "#000000", // Sort
          },
          accent: "#952E0D", // Orange accent
        },
      },
    },
    plugins: [],
  }
  