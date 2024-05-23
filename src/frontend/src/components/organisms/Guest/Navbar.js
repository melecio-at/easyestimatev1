import PropTypes from 'prop-types';
// import {useState } from 'react'; // Fragment,
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

// import Typography from '@mui/material/Typography';
// import Button from 'components/atoms/Button';
// import LanguageSelect from 'components/atoms/LanguageSelect';
// import MenuLinks from 'components/atoms/MenuLinks';
// import AvatarNavDropdown from 'components/molecules/AvatarNavDropdown';
// import NotificationIcon from 'components/molecules/NotificationIcon';

function Navbar() {
  // const { user = null } = props;
  // const { t } = useTranslation();
  // const navigate = useNavigate();
  // const [anchorMobileNav, setAnchorMobileNav] = useState(null);

  // const menus = [
  //   { label: t('menu.about'), url: '/about' },
  //   { label: t('menu.inquiry'), url: '/inquiry' },
  //   { label: t('menu.faq'), url: '/faq' },
  //   { label: t('menu.styleguide'), url: '/styleguide' },
  // ];

  // const appName = process.env.REACT_APP_SITE_TITLE;

  // const handleOpenNavMenu = (event) => setAnchorMobileNav(event.currentTarget);
  // const handleCloseNavMenu = (url) => {
  //   setAnchorMobileNav(null);
  //   navigate(url, { replace: true });
  // };

  // const links = [
  //   { label: t('menu.profile'), url: '/profile' },
  //   { label: t('menu.logout'), url: '/logout' },
  // ];

  return (
    <AppBar
      position="static"
      color="grey"
      elevation={0}
      // sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container maxWidth="xl" className="bg-red">
        <Toolbar sx={{ flexWrap: 'wrap' }} disableGutters>
          <div className="bg-red">
            Applications | [image here] {`>>`}
            <span className="text-10px">Application Quotation List</span>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Navbar.propTypes = {
  onLogout: PropTypes.func,
  user: PropTypes.object,
};

export default Navbar;
