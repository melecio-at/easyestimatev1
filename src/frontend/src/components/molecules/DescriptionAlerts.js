import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';
// import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';

function DescriptionAlerts(props) {
  const { severity, alertOpen, setAlertOpen, children } = props;
  // const [alertOpen, setAlertOpen] = useState(open);

  useEffect(() => {
    if (alertOpen) {
      const timer = setTimeout(() => {
        setAlertOpen(false);
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [alertOpen]);

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <Snackbar
      open={alertOpen}
      autoHideDuration={5000}
      onClose={handleAlertClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleAlertClose} severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
}

DescriptionAlerts.defaultProps = {
  severity: 'success',
  open: false,
};

DescriptionAlerts.propTypes = {
  severity: PropTypes.string,
  alertOpen: PropTypes.bool,
  setAlertOpen: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default DescriptionAlerts;
