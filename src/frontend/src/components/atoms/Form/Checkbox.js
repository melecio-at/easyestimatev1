import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

const Checkbox = forwardRef(function Checkbox(props, ref) {
  const { label, error, color, helperText, sx, errorPosition, ...rest } = props;

  return (
    <FormGroup>
      {error && errorPosition === 'top' && (
        <FormHelperText error={true}>{helperText}</FormHelperText>
      )}
      <FormControlLabel
        label={label}
        control={<MuiCheckbox ref={ref} color={color} {...rest} />}
        error={error.toString()}
        sx={sx}
      />
      {error && errorPosition !== 'top' && (
        <FormHelperText error={true}>{helperText}</FormHelperText>
      )}
    </FormGroup>
  );
});

Checkbox.defaultProps = {
  label: '',
  color: 'primary',
  error: false,
  helperText: '',
  sx: {},
  errorPosition: 'bottom',
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  color: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.any,
  sx: PropTypes.object,
  errorPosition: PropTypes.string,
};

export default Checkbox;
