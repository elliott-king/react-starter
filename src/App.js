import logo from './logo.svg';
import './App.css';

import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appHeader: {
    fontSize: "calc(10px + 2vmin)",
  },
  paragraph: {
    fontSize: "calc(10px + 2vmin)",
    margin: "1rem 0"
  },
  link: {
    color: "#61dafb",
    marginBottom: "1rem"
  }
})

function App() {
  const classes = useStyles();
  console.log('build-injected arg:', process.env.REACT_APP_BUILD_ARG)
  
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
    >
      <Box
        className={classes.appHeader}
        bgcolor="#282c34"
        minHeight="100vh"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Typography className={classes.paragraph}>
          Injected build argument "REACT_APP_BUILD_ARG" {process.env.REACT_APP_BUILD_ARG ? `: ${process.env.REACT_APP_BUILD_ARG}` : "does not exist"}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
