import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AcalaLogo from '@honzon-platform/apps/assets/acala-logo.svg';
import MenuLogo from '@honzon-platform/apps/assets/menu.svg';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100vw',
            height: 84,
            padding: '0 20px',
        },
        colorPrimary: {
            background: theme.palette.primary.main,
        },
        icon: {},
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" classes={classes}>
            <img src={AcalaLogo} width={40} height={34} className={classes.icon} alt="acala-logo" />
            <IconButton>
                <img src={MenuLogo} width={25} alt="menu" />
            </IconButton>
        </AppBar>
    );
}
