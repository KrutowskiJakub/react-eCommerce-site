import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;