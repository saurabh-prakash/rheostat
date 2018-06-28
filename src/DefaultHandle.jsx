import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { withStyles, withStylesPropTypes } from 'react-with-styles';

import {
  DEFAULT_HANDLE_WIDTH_UNITS,
  BACKGROUND_HEIGHT_UNITS,
  VERTICAL,
} from './constants/SliderConstants';

import handlePropTypes, { handleDefaultProps } from './propTypes/HandlePropTypes';

export const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  ...handlePropTypes,
  'aria-valuetext': PropTypes.string,
  'aria-label': PropTypes.string,
});

const defaultProps = {
  ...handleDefaultProps,
  'aria-valuetext': undefined,
  'aria-label': undefined,
};

function DefaultHandle({
  css,
  styles,
  orientation,
  disabled,
  handleRef,
  theme,
  ...passProps
}) {
  return (
    <button
      ref={handleRef}
      {...css(
        styles.DefaultHandle_handle,
        orientation === VERTICAL
        ? styles.DefaultHandle_handle__vertical
        : styles.DefaultHandle_handle__horizontal,
        disabled && styles.DefaultHandle_handle__disabled,
      )}
      {...passProps}
    />
  );
}
DefaultHandle.propTypes = propTypes;

DefaultHandle.defaultProps = defaultProps;

export default withStyles(({ color, unit }) => ({
  DefaultHandle_handle: {
    width: DEFAULT_HANDLE_WIDTH_UNITS * 3.8 * unit,
    height: DEFAULT_HANDLE_WIDTH_UNITS * 3.8 * unit,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.grey,
    backgroundColor: color.white,
    borderRadius: '20%',
    outline: 'none',
    zIndex: 2,
    boxShadow: `0 ${unit / 4}px ${unit / 4}px ${color.textDisabled}`,
    ':focus': {
      boxShadow: `${color.focus} 0 0 2px 2px`,
    },

    ':after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      backgroundColor: '#dadfe8',
    },

    ':before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      backgroundColor: '#dadfe8',
    },
  },

  DefaultHandle_handle__horizontal: {
    marginLeft: -12,
    top: -5,
    ':before': {
      top: 7,
      height: 10,
      width: 1,
      left: 10,
    },

    ':after': {
      top: 7,
      height: 10,
      width: 1,
      left: 13,
    },
  },

  DefaultHandle_handle__vertical: {
    marginTop: -(DEFAULT_HANDLE_WIDTH_UNITS * 1.9) * unit,
    left: ((BACKGROUND_HEIGHT_UNITS * 1.9) - (DEFAULT_HANDLE_WIDTH_UNITS * 1.9)) * unit,
  },

  DefaultHandle_handle__disabled: {
    borderColor: color.buttons.defaultDisabledColor,
  },
}))(DefaultHandle);
