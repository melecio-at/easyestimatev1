import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Form/Checkbox';
import RadioGroup from 'components/atoms/Form/RadioGroup';
import Select from 'components/atoms/Form/Select';
import TextField from 'components/atoms/Form/TextField';
import Modal from 'components/organisms/Modal';

function QuotationPreviewModal(props) {
  const { open, handleOnChangeBusinessType, setOpen, data } = props;

  const departments = [
    { label: 'Finance', value: 'finance' },
    { label: 'IT', value: 'it' },
  ];
  const positions = [
    { label: 'Manager', value: 'mngr' },
    { label: 'Advisor', value: 'advisor' },
  ];
  const businessTypes = [
    { label: 'Private Individual', value: 'individual' },
    { label: 'Company', value: 'company' },
  ];

  const handleSend = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('data', data.businessType);
  }, [data]);

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
      <Modal
        open={open}
        title="Sample Modal"
        hideTitle={true}
        hideClose={true}
        hideTitleSection={true}
        overrideStyle={{
          width: '620px',
          borderRadius: '13px',
        }}
      >
        <Box
          sx={{
            px: 7,
            py: 2,
            height: 'inherit',
            alignContent: 'space-between',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" sx={{ mx: 'auto' }}>
                Generate Project Quotation
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: '21px' }}>
              <TextField label="Name (Required)" />
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <TextField label="Email Address (Required)" />
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <RadioGroup
                label="Business Type (Required)"
                options={businessTypes}
                inline={true}
                defaultValue={data.businessType}
                name="business_type"
                onChange={handleOnChangeBusinessType}
              />
            </Grid>
            {data.businessType === 'company' && (
              <>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField label="会社名" />
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <Grid container pacing={2} columnSpacing={3}>
                    <Grid item xs={6}>
                      <Select label="部署を選択" options={departments} />
                    </Grid>
                    <Grid item xs={6}>
                      <Select label="役職を選択" options={positions} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField label="電話番号" />
                </Grid>
              </>
            )}
            {data.businessType === 'individual' && (
              <>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField label="役職を選択" />
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField label="電話番号" />
                </Grid>
              </>
            )}
            <Grid item xs={12} sx={{ mt: 1 }}>
              <TextField label="Company URL" />
            </Grid>
            <Grid item xs={12}>
              <Checkbox label="Do you wish to get in touch with our reporesentative?" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                align="center"
                sx={{ backgroundColor: '#000000' }}
                onClick={() => {
                  handleSend();
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Container>
  );
}

QuotationPreviewModal.propTypes = {
  open: PropTypes.bool,
  handleOnChangeBusinessType: PropTypes.func,
  setOpen: PropTypes.func,
  data: PropTypes.object,
};

export default QuotationPreviewModal;
