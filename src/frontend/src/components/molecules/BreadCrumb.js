import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import theme from 'theme';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Breadcrumbs, Typography } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BreadCrumb(props) {
  return (
    <Box
      onClick={handleClick}
      sx={{ backgroundColor: theme.palette.background.default, mx: 5, mt: 2 }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<KeyboardDoubleArrowRightIcon fontSize="small" sx={{ height: '10px' }} />}
      >
        {props?.breadCrumbs.map(function (breadCrumb, index) {
          return (
            <div key={index}>
              {breadCrumb.isLink ? (
                <Link
                  to={{
                    pathname: breadCrumb.link,
                  }}
                >
                  <Typography color="#c65213">{breadCrumb.label}</Typography>
                </Link>
              ) : (
                <Typography color="text.primary">{breadCrumb.label}</Typography>
              )}
            </div>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}

BreadCrumb.defaultProps = {
  breadCrumbs: [],
};

BreadCrumb.propTypes = {
  breadCrumbs: PropTypes.array,
};

export default BreadCrumb;
