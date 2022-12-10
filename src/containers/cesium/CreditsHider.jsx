/**
 * @param {object} props is the react props.
 * @returns dom element.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from "@mui/material/styles";

const PREFIX = "CreditsHider";
const classes = {
    credits: `${PREFIX}-credits`,
};

const Credits = styled("div")(() => ({
    [`&.${classes.credits}`]: {
        display: 'none',
    },
}));

export const CreditsHider = ({id, ...props}) => (
    <Credits id={id} {...props} />
);

CreditsHider.propTypes = {
    id: PropTypes.string.isRequired,
};
