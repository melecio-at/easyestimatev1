import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import theme from 'theme';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Button from 'components/atoms/Button';
import JapanYen from 'components/atoms/Formatter/JapanYen';
import DescriptionAlerts from 'components/molecules/DescriptionAlerts';
import QuotationPreviewModal from './QuotationPreviewModal';

function QuotationPreview(props) {
  const { previewDetail, projectFilters, setIsDetail, open, setOpen } = props;
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);
  const { t } = useTranslation();
  const pageText = 'pages.quotation_preview';

  const typeBox = (label, hasColor = false) => {
    return (
      <Box display="inline">
        <Typography
          sx={{
            fontWeight: 'bold',
            color: hasColor ? theme.palette.orange.main : 'primary',
          }}
        >
          {label}
        </Typography>
      </Box>
    );
  };

  const handleOnChangeBusinessType = (event) => {
    event.persist();
    // console.log('event target ', event.target.value);
  };

  // useEffect(() => {
  //   console.log('isEmailSuccess' + isEmailSuccess ? 'true1' : 'false2');
  // }, [isEmailSuccess]);

  return (
    <Container disableGutters maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }}>
      {isEmailSuccess && (
        <DescriptionAlerts
          severity="success"
          title="Success"
          setAlertOpen={setIsEmailSuccess}
          alertOpen={isEmailSuccess}
        >
          {t(`${pageText}.emailSentSuccessful`)}
        </DescriptionAlerts>
      )}
      <Paper sx={{ p: 2, backgroundColor: theme.background.innerContainer }}>
        <Box>
          <Typography variant="h6">{typeBox(t(`${pageText}.heading`))}</Typography>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {typeBox(t(`${pageText}.label.specification`), true)}
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 2 }}>
              <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                <Grid item xs={12}>
                  <Grid container pacing={4} columnSpacing={6}>
                    <Grid item xs={6}>
                      <Grid container pacing={4} columnSpacing={6}>
                        <Grid item xs={5}>
                          {typeBox(t(`${pageText}.label.system_name`))}
                        </Grid>
                        <Grid item xs={7}>
                          {previewDetail?.systemName}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container pacing={4} columnSpacing={6}>
                <Grid item xs={6}>
                  <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                    <Grid item xs={5}>
                      {typeBox(t(`${pageText}.label.business_model`))}
                    </Grid>
                    <Grid item xs={7}>
                      {previewDetail?.businessModel}
                    </Grid>
                  </Grid>
                  <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                    <Grid item xs={5}>
                      {typeBox(t(`${pageText}.label.development_type`))}
                    </Grid>
                    <Grid item xs={7}>
                      {previewDetail?.developmentType}
                    </Grid>
                  </Grid>
                  {/* <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                    <Grid item xs={5}>
                      {typeBox(t(`${pageText}.label.project_design_and_planning`))}
                    </Grid>
                    <Grid item xs={7}>
                      {previewDetail?.uiSpec}
                    </Grid>
                  </Grid> */}
                </Grid>
                <Grid item xs={6}>
                  <Grid container pacing={4} columnSpacing={6}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={7}></Grid>
                  </Grid>
                  <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                    <Grid item xs={5}>
                      {typeBox(t(`${pageText}.label.num_roles`))}
                    </Grid>
                    <Grid item xs={7}>
                      {previewDetail?.expectedNumUsers}
                    </Grid>
                  </Grid>
                  <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                    <Grid item xs={5}>
                      {typeBox(t(`${pageText}.label.devices_and_browsers`))}
                    </Grid>
                    <Grid item xs={7}>
                      {typeof previewDetail !== 'undefined' &&
                        previewDetail?.devicesAndBrowsers?.map(function (value, index1) {
                          return (
                            <div key={index1}>
                              {`➧ ` + value}
                              <br />
                            </div>
                          );
                        })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
        ></Container>
        <Box>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {typeBox(t(`${pageText}.label.ui_spec`), true)}
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 2 }}>
              <Grid sx={{ my: '2px' }} container pacing={4} columnSpacing={6}>
                <Grid item xs={12}>
                  <Grid container pacing={4} columnSpacing={6}>
                    <Grid item xs={6}>
                      <Grid container pacing={4} columnSpacing={6}>
                        <Grid item xs={12}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            ➧ {previewDetail?.uiLayout}
                            <br />
                            {/* <CircleIcon sx={{ marginRight: '4px', width: '10px' }} /> */}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            ➧ {previewDetail?.specRequiement}
                            {/* <CircleIcon sx={{ marginRight: '4px', width: '10px' }} /> */}
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
        ></Container>
        <Box>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {typeBox(t(`${pageText}.label.ballpark_estimation`), true)}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2, mx: 3 }}>
              {typeBox(t(`${pageText}.label.features_and_functions`))}
            </Grid>
            <Grid item xs={12} sx={{ mx: 3, my: 2 }}>
              {previewDetail?.users?.map(function (userFeature, index) {
                return (
                  <div key={index}>
                    <Grid container pacing={4} columnSpacing={6}>
                      <Grid item xs={12}>
                        <b>{userFeature.username}</b>
                      </Grid>
                      <Grid item xs={12}>
                        {userFeature.framework + ' - ' + userFeature.language}
                      </Grid>
                      <Grid item xs={12}>
                        {userFeature?.functions?.map(function (func, index) {
                          return (
                            <Grid
                              key={index}
                              container
                              pacing={4}
                              columnSpacing={6}
                              sx={{ mt: 2, mx: 0 }}
                            >
                              <Grid item xs={3}>
                                <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
                                  {func.functionNameType}
                                </Typography>
                              </Grid>
                              <Grid item xs={9}>
                                {func?.subFunctions.map(function (subFunction, index) {
                                  return (
                                    <div key={index}>
                                      <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
                                        {subFunction?.subFunctionName}
                                      </Typography>
                                      {/* ➧
                                      {subFunction?.subFunctionName !== null &&
                                      subFunction?.subFunctionName !== ''
                                        ? subFunction?.subFunctionName
                                        : func.functionType} */}
                                      {/* <br /> */}
                                    </div>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                    {index < previewDetail?.users?.length - 1 && (
                      <Container
                        disableGutters
                        maxWidth={false}
                        sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
                      ></Container>
                    )}
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </Box>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
        ></Container>
        <Grid container display="flex" justifyContent="flex-end" sx={{ pt: 3, pb: 4 }}>
          <Box>
            <Box display="flex">
              <Grid container>
                <Grid item xs={6}>
                  {/* {typeBox(t(`${pageText}.label.total_mm`))} */}
                  <Typography sx={{ fontWeight: 'bold', width: '150px', fontSize: '22px' }}>
                    {t(`${pageText}.label.total_mm`)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    color={theme.palette.orange.main}
                    sx={{ fontWeight: 'bold', fontSize: '25px' }}
                  >
                    {previewDetail?.totalMM} {t(`labels.mm`)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box display="flex" sx={{ mt: 1 }}>
              <Grid container>
                <Grid item xs={6}>
                  {/* {typeBox(t(`${pageText}.label.total_yen`))} */}
                  <Typography sx={{ mr: 8, fontWeight: 'bold', width: '150px', fontSize: '22px' }}>
                    {t(`${pageText}.label.total_yen`)}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ color: '#058122', fontWeight: 'bold' }}>
                  {/* <Typography sx={{ color: '#058122', fontWeight: 'bold' }}> */}
                  <JapanYen
                    amount={previewDetail?.totalAmount}
                    isKanji={true}
                    sx={{ fontSize: '25px', fontWeight: 700 }}
                  />
                  {/* </Typography> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mx: 1, my: 6 }}>
        <Link
          to={{
            pathname: '/quotation',
            data: { id: 1, name: 'sabaoon', shirt: 'green' },
          }}
        >
          <Button
            // startIcon={<ArrowBackIosNewIcon fontSize="small" style={{ fontSize: '15px' }} />}
            onClick={() => {
              setIsDetail(false);
            }}
            sx={{ mr: 2, backgroundColor: '#b8b8b8', color: 'black' }}
          >
            <ArrowBackIosNewIcon style={{ fontSize: '15px', marginRight: 0 }} />
            {typeBox(t(`${pageText}.label.back_btn`))}
          </Button>
        </Link>
        <Button sx={{ mr: 2, backgroundColor: '#000000' }} onClick={() => setOpen(true)}>
          {typeBox(t(`${pageText}.label.generate_quotation_btn`))}
        </Button>
      </Box>
      <QuotationPreviewModal
        setOpen={setOpen}
        handleOnChangeBusinessType={handleOnChangeBusinessType}
        open={open}
        projectFilters={projectFilters}
        previewDetail={previewDetail}
        setIsEmailSuccess={setIsEmailSuccess}
      />
    </Container>
  );
}

QuotationPreview.propTypes = {
  previewDetail: PropTypes.object,
  projectFilters: PropTypes.object,
  setIsDetail: PropTypes.any,
  open: PropTypes.bool,
  setOpen: PropTypes.any,
};

export default QuotationPreview;
