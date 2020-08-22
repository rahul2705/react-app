import React from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = ({
    white: {
        backgroundColor: '#455a64',
        width:100,
        padding:50
    },
});

class Content extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <h1 className={classes.white}>
                This is body
            </h1>
        );
    }
}

export default withStyles(styles)(Content);