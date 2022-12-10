/**
 * @file CesiumCore.js
 * modified version of https://github.com/Novetta/pwcop/blob/develop/aresweb/app/cesium/Core.js
 *
 * Describes the main Cesium view
 */
import { Viewer } from "cesium";
import { CreditsHider } from "./CreditsHider";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";

// Context lets us pass a value deep into the component tree
export const CesiumContext = React.createContext("cesium");

const PREFIX = "CesiumView";
const classes = {
    cesiumWrapper: `${PREFIX}-cesiumWrapper`,
};

const CesiumWrapper = styled("div")(() => ({
    [`&.${classes.cesiumWrapper}`]: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
    },
}));

export const checkWebGL = (err) => {
  // Only run the canvas check when we've already failed.
  // Cesium's error is overly generic - we need to catch any other cases
  // besides webgl failure appropiately.
    const canvas = document.createElement("canvas");
  // Get WebGLRenderingContext from canvas element.
    const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  // Report the result.
    if (!gl || !(gl instanceof WebGLRenderingContext)) {
        console.error("Please enable WebGL in your browser");
    } else {
        console.error("Cesium failed to initialize", err);
    }
};

export const CesiumView = ({ children }) => {
    const cesiumID = `ares-cesium-container`;
    const [cesium, setCesium] = useState(undefined);

    useEffect(() => {
        try {
            const cesiumViewer = new Viewer(cesiumID);
            setCesium(cesiumViewer);
        } catch (err) {
            checkWebGL(err);
        }
    }, [cesiumID, setCesium]);

    return (
    <CesiumWrapper id={cesiumID} className={classes.cesiumWrapper}>
      <CesiumContext.Provider value={cesium}>
        <CreditsHider id={`${cesiumID}_credits`} />
        {cesium && children}
      </CesiumContext.Provider>
    </CesiumWrapper>
    );
};

CesiumView.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
