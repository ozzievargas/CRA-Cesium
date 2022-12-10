import { CesiumViewer } from '../cesium/CesiumView';
import { NavBar } from "../../components/navigation/NavBar";
import { SideBar } from "../sidebar/Sidebar";
import { styled } from "@mui/material/styles";
import React from "react";

const PREFIX = "CopView";

const classes = {
    root: `${PREFIX}-root`,
    center: `${PREFIX}-center`,
};

const Root = styled("div")(() => ({
    [`&.${classes.root}`]: {
        display: "flex",
        height: "100%",
    },

    [`& .${classes.center}`]: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        overflow: "hidden",
    },
}));

export const CopView = () => {
    return (
    <Root className={classes.root}>
      <SideBar />
      <div className={classes.center}>
        <NavBar />
        <CesiumViewer>
        </CesiumViewer>
      </div>
    </Root>
    );
};
