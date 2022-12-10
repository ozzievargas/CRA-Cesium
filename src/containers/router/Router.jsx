import React from "react";
import { GlobeViewer } from '../globeViewer/GlobeViewer';
import {
    Route,
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { styled } from '@mui/material/styles';

const PREFIX = 'Router';

const classes = {
    root: `${PREFIX}-root`
};

const Root = styled('div')(() => ({
    [`&.${classes.root}`]: {
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflowY: "hidden",
        position: 'relative',
    }
}));

const router = createHashRouter(
    createRoutesFromElements(
    <Route path="/" element={<GlobeViewer />} />
    )
);

export const Router = () => {
    return (
        <Root className={classes.root}>
			<RouterProvider router={router} />
		</Root>
    );
};
