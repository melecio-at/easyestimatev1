import PropTypes from 'prop-types';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Textfield from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line no-unused-vars
const Select = React.forwardRef(function Select(props, ref) {
  const { label, placeholder, options, error, helperText, color, isFullWidth, ...rest } = props;
  const variant = 'standard';
  const labelProps = {
    color,
    shrink: true,
    variant,
    error,
    sx: (theme) => ({
      // textTransform: 'uppercase',
      color: theme.palette.text.blackLabel,
      fontWeight: 700,
      letterSpacing: 1,
      fontSize: theme.typography.body2.fontSize,
      transform: 'none',
    }),
  };

  const inputProps = {
    sx: (theme) => ({
      mt: props.label === '' ? 0 : theme.spacing(3),
      '& legend': { display: 'none' },
      '& fieldset': { top: 0 },
      minHeight: '32px',
    }),
  };

  const selectProps = {
    inputProps: {
      defaultValue: '',
      sx: { p: '7px' },
      // sx: { p: '0.65rem' },
    },
  };

  const helperTextProps = {
    sx: { mx: 0 },
  };

  return (
    <Textfield
      select
      palceholder="test"
      fullWidth={isFullWidth}
      label={label}
      InputProps={{ ...inputProps }}
      inputProps={{ ...rest, mt: '1px' }}
      InputLabelProps={labelProps}
      SelectProps={selectProps}
      error={error}
      helperText={helperText}
      FormHelperTextProps={helperTextProps}
      variant="outlined"
      ref={ref}
      size="small"
    >
      {placeholder !== '' && (
        <MenuItem value={0} disabled>
          <Typography sx={{ color: '#B8B8B8' }}>{placeholder}</Typography>
        </MenuItem>
      )}
      {options.map((option, key) => (
        <MenuItem key={key} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Textfield>
  );
});

Select.defaultProps = {
  label: '',
  options: [],
  error: false,
  color: 'primary',
  isFullWidth: true,
  placeholder: '',
};

Select.propTypes = {
  label: PropTypes.any.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ),
  error: PropTypes.bool,
  helperText: PropTypes.string,
  color: PropTypes.string,
  isFullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Select;
