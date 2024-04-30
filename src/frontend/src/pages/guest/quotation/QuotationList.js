// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { searchProjects } from 'services/quotation/quotation.service';
import theme from 'theme';
// import * as yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import StraightIcon from '@mui/icons-material/Straight';
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
import Select from 'components/atoms/Form/Select';
import { meta as defaultMeta } from 'config/search';

//criteria,

function QuotationList() {
  // const { t } = useTranslation();
  const [data, setData] = useState([
    { label: 'Web Application', value: 'web_app' },
    { label: 'Mobile Application', value: 'mobile_app' },
    { label: 'Desktop', value: 'desktop' },
    { label: 'Browser Plug-in', value: 'browser_plug_in' },
    { label: 'SDK', value: 'SDK' },
    { label: 'API', value: 'API' },
    { label: 'Middleware', value: 'middleware' },
    { label: 'Others', value: 'others' },
  ]);
  const defaultQuery = {
    keyword: '',
    frameworks: [],
  };
  const [meta, setMeta] = useState(defaultMeta);
  // const [data, setData] = useState([]);
  const [query, setQuery] = useState(defaultQuery);
  // const [meta, setMeta] = useState(defaultMeta);

  const fetchProjects = async () => {
    // const { meta, data } = await searchProjects(query);
    setMeta({ ...meta, meta });
    setData(data);
  };

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

  // const projects = [
  //   { name: 'Project 1', technology: 'PHP', description: 'This is php' },
  //   { name: 'Project 2', technology: 'JS', description: 'This is JS' },
  //   { name: 'Project 3', technology: 'React', description: 'This is React' },
  //   { name: 'Project 4', technology: 'Java', description: 'This is Java' },
  //   { name: 'Project 5', technology: 'Python', description: 'This is Python' },
  // ];

  const sortings = [
    { label: 'System Name', value: 'system_name' },
    { label: 'Technology', value: 'technology' },
  ];

  const handleUseTemplate = () => {
    navigate('/quotation-create', { state: { id: 1, name: 'sabaoon' } });
  };

  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleSearchOnBtnPress = () => {
    handleSearch();
  };

  const handleSearchOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFrameworkFilterChange = (event) => {
    const index = query.frameworks.indexOf(event.target.value);
    const value = event.target.value;
    if (index === -1) {
      setQuery({ ...query, frameworks: [...query.frameworks, value] });
    } else {
      setQuery({
        ...query,
        frameworks: query.frameworks.filter((framework) => framework !== value),
      });
    }
  };

  const handleClearAllFilters = () => {
    setQuery(defaultQuery);
  };

  const handleClickToSprobeWebsite = () => {
    window.location.replace('https://www.sprobe.com/');
  };

  useEffect(() => {
    console.log('meta', meta);
    console.log('query', query);
    fetchProjects();
  }, [query]);

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
      <Box display="flex" justifyContent="flex-start" sx={{ alignItems: 'center' }}>
        <ChevronLeftIcon
          fontSize="large"
          sx={{ cursor: 'pointer' }}
          onClick={handleClickToSprobeWebsite}
        />
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={handleClickToSprobeWebsite}>
          Return to SPROBE site
        </Typography>
      </Box>
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
                    <MuiTextField
                      value={query.keyword}
                      sx={{ width: '100%' }}
                      label="Search"
                      onChange={(e) => setQuery({ ...query, keyword: e.target.value })}
                      onKeyPress={handleSearchOnKeyPress}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <SearchIcon
                              onClick={handleSearchOnBtnPress}
                              sx={{
                                cursor: 'pointer',
                                '&:hover': { color: theme.palette.primary.main },
                              }}
                            />
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
                                control={
                                  <Checkbox
                                    checked={query.frameworks.includes(framework.value)}
                                    value={framework.value}
                                    sx={{ marginRight: 0 }}
                                    onChange={handleFrameworkFilterChange}
                                  />
                                }
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
                  <Button
                    sx={{ mr: 2, backgroundColor: '#000000' }}
                    onClick={handleClearAllFilters}
                  >
                    CLEAR ALL FILTERS
                  </Button>
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
                <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
                  <Typography sx={{ alignContent: 'center', mr: 2 }}>Sorting:</Typography>
                  <Select
                    defaultValue="system_name"
                    label=""
                    options={sortings}
                    isFullWidth={false}
                    sx={{ width: '200px' }}
                  />
                  <Box display="flex" sx={{ alignItems: 'center', cursor: 'pointer' }}>
                    <StraightIcon
                      sx={{ position: 'relative', left: '7px', transform: 'rotate(180deg)' }}
                    />
                    <SortIcon />
                  </Box>
                </Box>
                {/*height: '848px'*/}
                {data.map(function (project, index) {
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
