import RecipesView from "./components/recipes/RecipesView.tsx";
import Header from "./components/Header.tsx";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#FFFFFF",
      main: "#3EB071",
    },
    secondary: {
      contrastText: "#14723D",
      main: "#8BD8AC",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RecipesView />
    </ThemeProvider>
  );
}

export default App;
