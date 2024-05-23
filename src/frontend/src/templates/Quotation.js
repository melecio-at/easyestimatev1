import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
// import { logout } from 'services/auth';
import { setProfile } from 'store/slices/profileSlice';
import { Box } from '@mui/material';
// import Footer from 'components/organisms/Guest/Footer';
// import Navbar from 'components/organisms/Guest/Navbar';
// import Breadcrumbs from 'components/molecules/BreadCrumb';
import api from 'utils/api';

function Quotation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.profile.user);

  // const handleLogout = async () => {
  //   await logout();
  //   localStorage.clear();
  //   window.location = '/login?ref=logout';
  // };

  const fetchProfile = async () => {
    const user = await api
      .get('/profile')
      .then((res) => res.data.data)
      .catch(() => {
        if (location.pathname.includes('login')) {
          return; // prevent too many redirects
        }
        navigate(`/login?redirect_to=${location.pathname}`);
      });
    dispatch(setProfile(user));
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) fetchProfile();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* <Navbar open={open} /> */}
      {/* {props?.hasBreadCrumbs && <Breadcrumbs breadCrumbs={props?.breadCrumbs} />} */}

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.background.main,
          pb: 8,
          mt: 2,
          minHeight: 'calc(100vh - 313px)',
        }}
      >
        <Outlet />
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}

Quotation.propTypes = {
  hasBreadCrumbs: PropTypes.bool,
  breadCrumbs: PropTypes.array,
};

export default Quotation;
