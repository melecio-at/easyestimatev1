import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function BodyTextCustom(props) {
  const { bold, disableGutter, children, ...rest } = props;

  return (
    <Box
      // component="p"
      variant="body1"
      sx={{ fontWeight: bold ? 700 : 400, mb: disableGutter ? 0 : 2 }}
      {...rest}
    >
      {children}
    </Box>
  );
}

BodyTextCustom.defaultProps = {
  bold: false,
  disableGutter: false,
};

BodyTextCustom.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool,
  disableGutter: PropTypes.bool,
};

export default BodyTextCustom;
