import React from "react";
import { Button } from '@material-ui/core';
import SearchAppBar from "./Header";
const RemoteButton = React.lazy(() => import("app2/MediaControlCard"));

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const App = () => {
    const classes = useStyles();
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><React.Suspense fallback="Loading Button">
                        <RemoteButton />
                    </React.Suspense></Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <SearchAppBar />
            <div>
            <h2>App 1</h2>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}
export default App;
