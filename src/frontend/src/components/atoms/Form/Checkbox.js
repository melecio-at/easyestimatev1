import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

const Checkbox = forwardRef(function Checkbox(props, ref) {
  const { label, error, color, helperText, sx, ...rest } = props;

  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={<MuiCheckbox ref={ref} color={color} {...rest} />}
        error={error.toString()}
        sx={sx}
      />
      {error && <FormHelperText error={true}>{helperText}</FormHelperText>}
    </FormGroup>
  );
});

Checkbox.defaultProps = {
  label: '',
  color: 'primary',
  error: false,
  helperText: '',
  sx: {},
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  color: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.any,
  sx: PropTypes.object,
};

export default Checkbox;
