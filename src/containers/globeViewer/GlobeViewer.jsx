import React from "react";
import { CesiumView } from '../cesium/CesiumView';
import { NavBar } from "../../components/navigation/NavBar";
import { SideBar } from "../sidebar/Sidebar";
import { styled } from "@mui/material/styles";

const PREFIX = "GlobeViewer";

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

export const GlobeViewer = () => {
    return (
    <Root className={classes.root}>
      <SideBar />
      <div className={classes.center}>
        <NavBar />
        <CesiumView />
      </div>
    </Root>
    );
};
