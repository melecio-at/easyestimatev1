// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
// import * as yup from 'yup';
// import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField as MuitextField,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Form/Checkbox';
// import RadioGroup from 'components/atoms/Form/RadioGroup';
import Select from 'components/atoms/Form/Select';
import TextField from 'components/atoms/Form/TextField';
import Accordion from 'components/molecules/Accordion';

QuotationCreate.propTypes = {
  location: PropTypes.any,
};

QuotationCreate.defaultProps = {
  location: null,
};

function QuotationCreate() {
  const location = useLocation();
  // set the options
  const frameWorkOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  const technologyOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  const features = [...Array(3)].map(() => ({
    header: <MuitextField variant="standard" defaultValue="User" />,
    content: (
      <Box>
        <Grid container pacing={4} columnSpacing={2}>
          <Grid item xs={3}>
            <Select label="Framework" options={frameWorkOptions} />
          </Grid>
          <Grid item xs={3}>
            <Select label="Development Language/Technology" options={technologyOptions} />
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Button sx={{ backgroundColor: '#c65213' }} startIcon={<AddIcon />}>
                Add Function
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container pacing={4} columnSpacing={2}>
          <Grid item xs="auto">
            <Checkbox label="" sx={{ mr: 0, pl: 1 }} />
          </Grid>
          <Grid item xs display="flex" alignItems="center">
            <Typography>
              <b>Function Name</b>
            </Typography>
          </Grid>
          <Grid item xs display="flex" alignItems="center">
            <Typography>
              <b>Function Type</b>
            </Typography>
          </Grid>
          <Grid item xs display="flex" alignItems="center">
            <Typography>
              <b>Assumed Number of Fields/Items</b>
            </Typography>
          </Grid>
          <Grid item xs display="flex" alignItems="center">
            <Typography>
              <b>Details</b>
            </Typography>
          </Grid>
        </Grid>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', mb: 2 }}
        ></Container>
        <Grid container pacing={4} columnSpacing={2}>
          <Grid item xs="auto">
            <Checkbox label="" sx={{ mr: 0, pl: 1 }} />
          </Grid>
          <Grid item xs>
            <TextField noLabel={true} />
          </Grid>
          <Grid item xs>
            <Select label="" options={technologyOptions} noLabel={true} />
          </Grid>
          <Grid item xs>
            <Select label="" options={technologyOptions} noLabel={true} />
          </Grid>
          <Grid item xs display="flex" sx={{ justifyContent: 'space-between' }}>
            <Box>
              <Checkbox label="View Page" />
              <Checkbox label="Forgot Password Modal" />
              <Checkbox label="Logout Confirmation Modal" />
              <Checkbox label="Remember Me" />
            </Box>
            <Box>
              <HighlightOffIcon sx={{ m: 0, color: 'red' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    ),
  }));

  useEffect(() => {
    console.log(location?.state);
  }, [location]);

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
      <Box>
        <Typography variant="h6">System Requirement</Typography>
        <Grid container pacing={4} columnSpacing={6} sx={{ mt: 2 }}>
          <Grid item xs={4}>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <TextField label="System/Application Name" />
              </Grid>
            </Grid>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <TextField label="Business Model" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <Select label="Development Type" options={frameWorkOptions} />
              </Grid>
            </Grid>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <Select label="Expected Number of User Types/Roles" options={frameWorkOptions} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <TextField label="Supported Device/Browsers" />
              </Grid>
            </Grid>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <TextField noLabel={true} />
              </Grid>
            </Grid>
            <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <TextField noLabel={true} />
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
        <Typography variant="h6">Design Documentation Requirement</Typography>
        <Grid container pacing={4} columnSpacing={6} sx={{ mt: 2, pl: 2 }}>
          <Grid item xs={4}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">UI Layout/Mock-up</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="create_design"
                  control={<Radio />}
                  label="To Create Design"
                />
                <FormControlLabel
                  value="ui_layout_provided"
                  control={<Radio />}
                  label="UI Layout/Mock-up will be provided"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Specification Requirements</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="create_spec_doc"
                  control={<Radio />}
                  label="To Create Specification Doc"
                />
                <FormControlLabel
                  value="design_doc_provided"
                  control={<Radio />}
                  label="Design Documents will be provided"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
      ></Container>
      <Box>
        <Typography variant="h6">Features and Functions</Typography>
        <Grid container>
          <Grid item xs={12}>
            <Accordion items={features} summarySx={{ flexDirection: 'row-reverse' }}>
              <h1>This is a test</h1>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mx: 1, my: 6 }}>
        <Link
          to={{
            pathname: '/quotation-list',
          }}
        >
          <Button sx={{ mr: 2, backgroundColor: '#b8b8b8' }}>Cancel</Button>
        </Link>
        <Link
          to={{
            pathname: '/quotation-preview',
            data: { id: 1, name: 'sabaoon', shirt: 'green' },
          }}
        >
          <Button sx={{ mr: 2, backgroundColor: '#000000' }}>Preview Quotation</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default QuotationCreate;
