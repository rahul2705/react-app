import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles';

const styles = ({
    appBar: {
        backgroundColor: '#263238'
    },
    pL5: {
        paddingLeft: 8
    },
    pt8: {
        paddingTop: 8
    }
});

class Header extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>

                    <Grid container spacing={3} direction="right row">
                        <Grid item>
                            <Typography variant="h6" noWrap className={classes.pt8}>
                                Student Management System
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit">
                                <HomeIcon/>
                                <Typography className={classes.pL5}>Home</Typography>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit">
                                <AddCircleIcon/>
                                <Typography className={classes.pL5}>Add Student</Typography>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit">
                                <EditIcon/>
                                <Typography className={classes.pL5}>Update Student</Typography>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit">
                                <DeleteForeverIcon/>
                                <Typography className={classes.pL5}>Delete Student</Typography>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);
