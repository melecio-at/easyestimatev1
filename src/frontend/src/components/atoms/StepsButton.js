import PropTypes from 'prop-types';
import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme, isactive }) => ({
  // padding: `${theme.spacing(0.9)} ${theme.spacing(2)}`,
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  '&:active, &:focus, &:hover': {
    background: isactive ? theme.palette.orange.main : `transparent`,
    cursor: 'default',
  },
}));

const StepsButton = React.forwardRef(function Button(props, ref) {
  const { children, variant, isactive, ...rest } = props;

  return (
    <StyledButton
      isactive={isactive ? 1 : 0}
      ref={ref}
      variant={variant}
      disableElevation
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

StepsButton.defaultProps = {
  variant: 'contained',
  fullWidth: false,
  isactive: false,
};

StepsButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  isactive: PropTypes.bool,
};

export default StepsButton;
