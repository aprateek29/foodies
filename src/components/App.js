import { createMuiTheme, CssBaseline } from "@material-ui/core";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Cart from "./Cart";
import Home from "./Home";
import NotFound from "./NotFound";
import { ThemeProvider } from "@material-ui/core/styles";
import CartTotal from "./CartTotal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff3d00",
    },
    secondary: {
      main: "#ffc107",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={1}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
              <CartTotal />
            </Route>
            <Route path="/cart">
              <Cart />
              <CartTotal />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
