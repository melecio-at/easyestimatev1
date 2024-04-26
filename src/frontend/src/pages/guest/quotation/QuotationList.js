// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import theme from 'theme';
// import * as yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputAdornment,
  TextField as MuiTextField,
  Paper,
  Typography,
} from '@mui/material';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Form/Checkbox';

// import TextField from 'components/atoms/Form/TextField';

function QuotationList() {
  // const { t } = useTranslation();
  // const developmentLanguages = [
  //   { label: 'Please Select', value: '' },
  //   { label: 'Javascript', value: 'js' },
  //   { label: 'PHP', value: 'php' },
  //   { label: 'Java', value: 'java' },
  // ];
  const navigate = useNavigate();
  const frameworks = [
    { label: 'Web Application', value: 'web_app' },
    { label: 'Mobile Application', value: 'mobile_app' },
    { label: 'Desktop', value: 'desktop' },
    { label: 'Browser Plug-in', value: 'browser_plug_in' },
    { label: 'SDK', value: 'SDK' },
    { label: 'API', value: 'API' },
    { label: 'Middleware', value: 'middleware' },
    { label: 'Others', value: 'others' },
  ];

  // const options = [
  //   { label: 'Zero-Base(From Scratch_', value: 'zero_based' },
  //   { label: 'Refurbishment', value: 'refurbishment' },
  //   { label: 'Maintenance', value: 'maintenance' },
  //   { label: 'Others', value: 'others' },
  // ];

  // const schema = yup.object({
  //   gender: yup.string().required(t('form.required')).nullable(),
  // });

  // const { register } = useForm({
  //   resolver: yupResolver(schema),
  //   defaultValues: { accept_terms: false, birthday: null },
  // });

  const projects = [
    { name: 'Project 1', technology: 'PHP', description: 'This is php' },
    { name: 'Project 2', technology: 'JS', description: 'This is JS' },
    { name: 'Project 3', technology: 'React', description: 'This is React' },
    { name: 'Project 4', technology: 'Java', description: 'This is Java' },
    { name: 'Project 5', technology: 'Python', description: 'This is Python' },
  ];

  const handleUseTemplate = () => {
    navigate('/quotation-create', { state: { id: 1, name: 'sabaoon' } });
  };

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
      <Paper sx={{ boxShadow: 'none' }}>
        <Grid container pacing={2} columnSpacing={2}>
          <Grid item xs={4}>
            <Container disableGutters>
              <Grid container sx={{ alignItems: 'end', height: '39px' }}>
                <Grid item xs={12}>
                  <Typography variant="h7"> Filter </Typography>
                </Grid>
              </Grid>
              <Paper sx={{ mt: 2, p: 2, backgroundColor: theme.background.innerContainer }}>
                <Grid container>
                  <Grid item xs={12}>
                    {/* <TextField
                      label="Search"
                      noLabel={true}
                      sx={{ width: '100%' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    ></TextField> */}
                    <MuiTextField
                      sx={{ width: '100%' }}
                      label="Search"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    ></MuiTextField>
                  </Grid>
                </Grid>
                <Grid container sx={{ mt: 2 }}>
                  <Grid item xs={12}>
                    <Box>
                      <FormControl>
                        <FormLabel sx={{ padding: 1 }}>
                          <Typography>Framework</Typography>
                        </FormLabel>
                        <FormGroup sx={{ padding: 2, ml: 3 }}>
                          {frameworks.map(function (framework, index) {
                            return (
                              <FormControlLabel
                                sx={{ marginRight: 0 }}
                                key={index}
                                control={<Checkbox sx={{ marginRight: 0 }} />}
                                label={framework.label}
                              />
                            );
                          })}
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  // sx={{ mt: '300px' }}
                >
                  <Button sx={{ mr: 2, backgroundColor: '#6F64F8' }}>CLEAR ALL FILTERS</Button>
                </Box>
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container disableGutters>
              <Grid container sx={{ alignItems: 'end', height: '39px' }}>
                <Grid item xs={6}>
                  <Typography variant="h7"> Application Quotation List </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="flex-end">
                    <Link
                      to={{
                        pathname: '/quotation-create',
                      }}
                    >
                      <Button sx={{ mr: 2, backgroundColor: '#000000' }} startIcon={<AddIcon />}>
                        Create Quotation
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
              <Container disableGutters sx={{ mt: 2 }}>
                {/*height: '848px'*/}
                {projects.map(function (project, index) {
                  return (
                    <div key={index}>
                      <Paper sx={{ backgroundColor: theme.background.innerContainer, mb: 4 }}>
                        <Grid container>
                          <Grid item xs={3}>
                            <Box
                              component="img"
                              height={200}
                              width="full"
                              display="flex"
                              alignItems="center"
                              gap={4}
                              p={2}
                              alt={project.name}
                              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                              sx={{
                                maxHeight: { xs: 200, md: 200 },
                                maxWidth: { xs: 200, md: 200 },
                              }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              height={200}
                              width="full"
                              // display="flex"
                              gap={4}
                              p={2}
                              sx={{
                                // display: 'flex',
                                flexWrap: 'wrap',
                                // alignContent: 'space-between',
                                justifyContent: 'flex-start',
                              }}
                            >
                              <Typography variant="h7">{project.name}</Typography>
                              <br />
                              <Typography variant="h7">{project.technology}</Typography>
                              <br />
                              <Typography variant="body1" sx={{ mt: 3 }}>
                                {project.description}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box
                              height={200}
                              width="full"
                              // display="flex"
                              gap={4}
                              p={2}
                              sx={{
                                borderLeft: '1px solid #e4e4e4',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignContent: 'space-between',
                                justifyContent: 'flex-end',
                              }}
                            >
                              <Typography variant="h7">XX MM</Typography>
                              <Link
                                to={{
                                  pathname: '/quotation-create',
                                  state: { test: 'mabuhay' },
                                  data: { test: 'mabuhay' },
                                }}
                              >
                                <Button
                                  sx={{ backgroundColor: '#c65213', margin: 'auto', width: '100%' }}
                                  startIcon={<BorderColorIcon />}
                                  onClick={() => {
                                    handleUseTemplate();
                                  }}
                                >
                                  USE AS TEMPLATE
                                </Button>
                              </Link>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  );
                })}
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default QuotationList;
