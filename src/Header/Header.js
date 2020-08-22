import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {Box} from "@material-ui/core";

const styles = ({
    box: {
        backgroundColor: '#263238',
        padding: 5
    },
    pL5: {
        paddingLeft: 8
    },
    header: {
        paddingTop: 8,
        color: '#fff'
    },
    linkStyle: {
        textDecoration: 'none',
        backgroundColor: '#263238',
        color: '#fff'
    }

});

class Header extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Box width={1} className={classes.box}>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <Typography variant="h6" noWrap className={classes.header}>
                            Student Management System
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link to={'/create'} className={classes.linkStyle}>
                            <IconButton color="inherit">
                                <AddCircleIcon/>
                                <Typography className={classes.pL5}>Create Student</Typography>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={'/update'} className={classes.linkStyle}>
                            <IconButton color="inherit">
                                <EditIcon/>
                                <Typography className={classes.pL5}>Update Student</Typography>
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to={'/delete'} className={classes.linkStyle}>
                            <IconButton color="inherit">
                                <DeleteForeverIcon/>
                                <Typography className={classes.pL5}>Delete Student</Typography>
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default withStyles(styles)(Header);
