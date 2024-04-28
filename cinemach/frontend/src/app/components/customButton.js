import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function CustomButton({ title }) {
  const violetBase = "#6C29A3";
  const violetMain = alpha(violetBase, 0.7);

  const theme = createTheme({
    palette: {
      violet: {
        main: violetMain,
        light: alpha(violetBase, 0.5),
        dark: alpha(violetBase, 0.9),
        contrastText:
          getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="violet">
        {title}
      </Button>
    </ThemeProvider>
  );
}
