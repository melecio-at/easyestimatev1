import theme from 'theme';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BreadCrumb() {
  return (
    <Box
      onClick={handleClick}
      sx={{ backgroundColor: theme.palette.background.default, mx: 5, mt: 2 }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<KeyboardDoubleArrowRightIcon fontSize="small" />}
      >
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs1</Typography>
      </Breadcrumbs>
    </Box>
  );
}

// BreadCrumb.defaultProps = {
//   // items: [],
// };

// BreadCrumb.propTypes = {
//   // items: PropTypes.array,
// };

export default BreadCrumb;
