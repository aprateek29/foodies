import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import SignIn from "./SignIn";
import { SnackbarProvider } from "notistack";
import SignUp from "./SignUp";

export default function App({ setToken }) {
  const [hasAccount, setHasAccount] = React.useState(true);
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={1}>
        <CssBaseline />

        <Container maxWidth="sm">
          <Box my={4}>
            {hasAccount ? (
              <SignIn setToken={setToken} setHasAccount={setHasAccount} />
            ) : (
              <SignUp hasAccount={hasAccount} setHasAccount={setHasAccount} />
            )}
          </Box>
        </Container>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
