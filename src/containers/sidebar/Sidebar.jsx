import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
    Actions as ViewStateActions,
    Selectors as ViewStateSelectors,
} from "../../store/viewState";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import React from "react";

const PREFIX = "SideBar";

const classes = {
    root: `${PREFIX}-root`,
    logoAndContent: `${PREFIX}-logoAndContent`,
    content: `${PREFIX}-content`,
    paddingRight: `${PREFIX}-paddingRight`,
    logo: `${PREFIX}-logo`,
};

const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
        position: "absolute",
        height: "100%",
        transition: theme.transitions.create("width"),
        overflow: "hidden",
    },

    [`& .${classes.logoAndContent}`]: {
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        overflow: "hidden",
        paddingTop: theme.spacing(1),
    },

    [`& .${classes.content}`]: {
        position: "relative",
        width: "100%",
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: theme.spacing(2),
    },

    [`& .${classes.paddingRight}`]: {
        "&&": {
            paddingRight: theme.spacing(1.5),
        },
    },

    [`& .${classes.logo}`]: {
        objectFit: "contain",
    },
}));

export { };

export const sidebarWidth = 400;

export const SideBar = () => {
    const dispatch = useDispatch();
    const closed = useSelector(ViewStateSelectors.selectSideBarClosed);
    const theme = useTheme();

    const rootStyle = {
        width: !closed ? sidebarWidth : theme.spacing(6),
    };

    const setOpen = React.useCallback(
        (closeState) => dispatch(ViewStateActions.setSideBarClosed(!closeState)),
        [dispatch]
    );

    return (
        <Root className={classes.root} style={rootStyle}>
            <div className={classes.logoAndContent} style={{ sidebarWidth }}>
                <div className={classes.paddingRight}>
                    <IconButton
                        onClick={() => {
                            setOpen(closed);
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>
        </Root>
    );
};
