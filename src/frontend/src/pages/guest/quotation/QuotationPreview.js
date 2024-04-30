import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import theme from 'theme';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Button from 'components/atoms/Button';
import QuotationPreviewModal from './QuotationPreviewModal';

function QuotationPreview() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ businessType: 'company' });
  const systemRequirementsLeft = [
    // { label: 'System Name', value: 'XXXXX System', xsGrids: [5, 7] },
    { label: 'Business Model', value: 'Business To Business (B2B)', xsGrids: [5, 7] },
    { label: 'Development Type', value: 'Zero-base (From Scratch)', xsGrids: [5, 7] },
    { label: 'Project Design and Planning', value: 'To Create Design', xsGrids: [5, 7] },
  ];
  const systemRequirementsRight = [
    { label: '', value: '', xsGrids: [5, 7] },
    { label: 'Expected Number of User Types/Roles', value: '3', xsGrids: [5, 7] },
    {
      label: 'Supported Device/Browsers',
      isArrayValues: true,
      value: [
        '➧ Google Chrome (1080x1920, v107.0.5304.122)',
        '➧ Android Phone (1334x750, v12.0)',
        '➧ Test',
      ],
      xsGrids: [5, 7],
    },
  ];
  const userFeatures = [
    {
      user: 'Admin User',
      technology: 'Web Application - JS/ReactJS and PHP/Laravel',
      functions: [
        {
          name: 'Login',
          types: ['Login/Logout Function', 'Forgot Password Modal', 'Logout Confirmation Modal'],
        },
        {
          name: 'Account Management',
          types: ['List Page', 'Create Page', 'View/Edit Page'],
        },
      ],
    },
    {
      user: 'Company Admin Users',
      technology: 'Web Application - PHP/Laravel and JavaScript/ReactJS',
      functions: [
        {
          name: 'Dashboard',
          types: ['View Page'],
        },
      ],
    },
    {
      user: 'Company Standard Users',
      technology: 'Mobile Application - Android and iOS',
      functions: [
        {
          name: 'Function A',
          types: ['View Page'],
        },
      ],
    },
  ];

  const typeBox = (label) => {
    return (
      <Typography>
        <Box fontWeight="bold" display="inline">
          {label}:
        </Box>
      </Typography>
    );
  };

  const handleOnChangeBusinessType = (event) => {
    event.persist();
    console.log('event target ', event.target.value);
    setData({ ...data, businessType: event.target.value });
  };

  useEffect(() => {
    console.log('data', data.businessType);
  }, [data]);

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
      <Paper sx={{ p: 2, backgroundColor: theme.background.innerContainer }}>
        <Box>
          <Typography variant="h6">Quotation Preview</Typography>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {typeBox('System Requirement')}
            </Grid>
            <Grid item xs={12} sx={{ mx: 2, my: 2 }}>
              <Grid container pacing={4} columnSpacing={6}>
                <Grid item xs={12}>
                  <Grid container pacing={4} columnSpacing={6}>
                    <Grid item xs={6}>
                      <Grid container pacing={4} columnSpacing={6}>
                        <Grid item xs={5}>
                          <Typography>
                            <Box fontWeight="bold" display="inline">
                              {typeBox('System Name')}
                            </Box>
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          XXXXX System
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container pacing={4} columnSpacing={6}>
                <Grid item xs={6}>
                  {systemRequirementsLeft.map(function (systemRequirement, index) {
                    return (
                      <Grid key={index} container pacing={4} columnSpacing={6}>
                        <Grid item xs={systemRequirement.xsGrids[0]}>
                          {typeBox(systemRequirement.label)}
                        </Grid>
                        <Grid item xs={systemRequirement.xsGrids[1]}>
                          {systemRequirement.value}
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item xs={6}>
                  {systemRequirementsRight.map(function (systemRequirement, index) {
                    return (
                      <Grid key={index} container pacing={4} columnSpacing={6}>
                        <Grid item xs={systemRequirement.xsGrids[0]}>
                          {systemRequirement.label !== ''
                            ? typeBox(systemRequirement.label)
                            : systemRequirement.label}
                        </Grid>
                        <Grid item xs={systemRequirement.xsGrids[1]}>
                          {systemRequirement.isArrayValues
                            ? systemRequirement.value.map(function (value, index1) {
                                return (
                                  <div key={index1}>
                                    {value}
                                    <br />
                                  </div>
                                );
                              })
                            : systemRequirement.value}
                        </Grid>
                      </Grid>
                    );
                  })}
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
              {typeBox('Ballpark Estimation')}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {typeBox('Features and Functions')}
            </Grid>
            <Grid item xs={12} sx={{ mx: 2, my: 2 }}>
              {userFeatures.map(function (userFeature, index) {
                return (
                  <div key={index}>
                    <Grid container pacing={4} columnSpacing={6}>
                      <Grid item xs={12}>
                        <b>{userFeature.user}</b>
                      </Grid>
                      <Grid item xs={12}>
                        {userFeature.technology}
                      </Grid>
                      <Grid item xs={12}>
                        {userFeature.functions.map(function (func, index) {
                          return (
                            <Grid
                              key={index}
                              container
                              pacing={4}
                              columnSpacing={6}
                              sx={{ mt: 2, mx: 0 }}
                            >
                              <Grid item xs={2}>
                                {func.name}
                              </Grid>
                              <Grid item xs={10}>
                                {func.types.map(function (type, index) {
                                  return (
                                    <div key={index}>
                                      ➧{type}
                                      <br />
                                    </div>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                    {index < userFeatures.length - 1 && (
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
          <Box container>
            <Box container display="flex">
              <Grid container>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 'bold' }}>TOTAL(MM)</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 'bold' }}>XX MM</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box container display="flex" sx={{ mt: 1 }}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 'bold', width: '200px' }}>TOTAL(円)</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ color: '#058122', fontWeight: 'bold' }}>600 000円</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mx: 1, my: 6 }}>
        <Link
          to={{
            pathname: '/quotation-create',
            data: { id: 1, name: 'sabaoon', shirt: 'green' },
          }}
        >
          <Button sx={{ mr: 2, backgroundColor: '#b8b8b8' }}>Back</Button>
        </Link>
        <Button sx={{ mr: 2, backgroundColor: '#000000' }} onClick={() => setOpen(true)}>
          Generate Quotation Details
        </Button>
      </Box>
      <QuotationPreviewModal
        setOpen={setOpen}
        data={data}
        handleOnChangeBusinessType={handleOnChangeBusinessType}
        open={open}
      />
    </Container>
  );
}

export default QuotationPreview;
