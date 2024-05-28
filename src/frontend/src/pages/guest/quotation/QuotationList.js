// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
//useNavigate
import { getProjectFilters, searchProjects } from 'services/quotation/quotation.service';
import theme from 'theme';
// import * as yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
// import StraightIcon from '@mui/icons-material/Straight';
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
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Form/Checkbox';
import Select from 'components/atoms/Form/Select';
import Accordion from 'components/molecules/Accordion';
import { meta as defaultMeta } from 'config/search';

function QuotationList() {
  const { t } = useTranslation();
  const pageText = 'pages.quotation_list';
  const defaultQuery = {
    keyword: '',
    frameworks: [],
    order: 'asc',
    sort: 'system_name',
    page: 1,
    limit: 5,
  };

  const defaultProjectFilers = {
    frameworks: [],
  };

  const [meta, setMeta] = useState(defaultMeta);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(defaultQuery);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [projectFilters, setProjectFilters] = useState(defaultProjectFilers);
  const [sort, setSort] = useState(defaultQuery.sort);
  const [loading, setLoading] = useState(false);
  const [features, setFeatures] = useState([]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { meta, data } = await searchProjects(query);
      setMeta({ ...meta, meta });
      setData(data);
      setLoading(false);
    } catch (err) {
      // errorHandler(err, setError, toast);
      setLoading(false);
    }
  };

  const fetchProjectFilters = async () => {
    const projectFilters = await getProjectFilters({ framework_only: true });
    // console.log('project Filters', projectFilters);
    setProjectFilters(projectFilters);
  };

  // const navigate = useNavigate();

  // const frameworks = [
  //   { label: 'Web Application', value: 'web_app' },
  //   { label: 'Mobile Application', value: 'mobile_app' },
  //   { label: 'Desktop', value: 'desktop' },
  //   { label: 'Browser Plug-in', value: 'browser_plug_in' },
  //   { label: 'SDK', value: 'SDK' },
  //   { label: 'API', value: 'API' },
  //   { label: 'Middleware', value: 'middleware' },
  //   { label: 'Others', value: 'others' },
  // ];

  const sortings = [
    { label: t(`${pageText}.label.system_name`), value: 'system_name' },
    // { label: 'Technology', value: 'technology' },
  ];

  // const handleUseTemplate = () => {
  //   navigate('/quotation-create', { state: { id: 1, name: 'sabaoon' } });
  // };

  const handleSearch = () => {
    setQuery({ ...query, keyword: searchKeyword, page: 1 });
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
    setSearchKeyword('');
    setQuery(defaultQuery);
  };

  const handleClickToSprobeWebsite = () => {
    window.location.replace('https://www.sprobe.com/');
  };

  const handleOnChangeSort = (event) => {
    setSort(event.target.value);
  };

  const handleClickSort = () => {
    setQuery({ ...query, sort: sort, order: query.order === 'asc' ? 'desc' : 'asc' });
  };

  const handleChangePage = (event, value) => {
    setQuery({ ...query, ...{ page: value } });
  };

  const handleInstructionSection = () => {
    setFeatures([
      {
        header: (
          <>
            <Box>
              <Typography variant="h7" fontWeight="bold">
                {t(`${pageText}.sub_header_section.title`)}
              </Typography>
            </Box>
            <Box sx={{ px: 2, mt: 2 }}>
              <Typography>
                {t(`${pageText}.sub_header_section.first_paragraph.1`)} <br />
                {t(`${pageText}.sub_header_section.first_paragraph.2`)} <br />
                {t(`${pageText}.sub_header_section.first_paragraph.3`)}
                <br />
                <br />
                {t(`${pageText}.sub_header_section.first_paragraph.4`)} <br />
              </Typography>
            </Box>
          </>
        ),
        content: (
          <Box backgroundColor="#f9f9f9" sx={{ p: 0, mx: 0 }}>
            <Box>
              <Box>
                <Typography variant="h7" fontWeight="bold">
                  {t(`${pageText}.sub_header_section.a.head`)}
                </Typography>
                <Typography>{t(`${pageText}.sub_header_section.a.head2`)}</Typography>
                <Typography fontWeight="bold">
                  {t(`${pageText}.sub_header_section.a.head3`)}
                </Typography>
              </Box>
              <Box sx={{ px: 2, mt: 2 }}>
                <Typography>
                  {t(`${pageText}.sub_header_section.a.steps.1`)} <br />
                  {t(`${pageText}.sub_header_section.a.steps.2`)} <br />
                  {t(`${pageText}.sub_header_section.a.steps.3`)} <br />
                  {t(`${pageText}.sub_header_section.a.steps.4`)} <br />
                  {t(`${pageText}.sub_header_section.a.steps.5`)} <br />
                  {t(`${pageText}.sub_header_section.a.steps.6`)} <br />
                </Typography>
              </Box>
            </Box>
            <br />
            <Box>
              <Box>
                <Typography variant="h7" fontWeight="bold">
                  {t(`${pageText}.sub_header_section.b.head`)}
                </Typography>
                <Typography fontWeight="bold">
                  {t(`${pageText}.sub_header_section.b.head2`)}
                </Typography>
              </Box>
              <Box sx={{ px: 2, mt: 2 }}>
                <Typography>
                  {t(`${pageText}.sub_header_section.b.steps.1`)} <br />
                  {t(`${pageText}.sub_header_section.b.steps.2`)} <br />
                  {t(`${pageText}.sub_header_section.b.steps.3`)} <br />
                  {t(`${pageText}.sub_header_section.b.steps.4`)} <br />
                </Typography>
              </Box>
              <Box sx={{ px: 2, mt: 2 }}>
                <Typography>
                  {t(`${pageText}.sub_header_section.last_paragraph.1`)} <br />
                  {t(`${pageText}.sub_header_section.last_paragraph.2`)} <br />
                  {t(`${pageText}.sub_header_section.last_paragraph.3`)} <br />
                </Typography>
              </Box>
            </Box>
          </Box>
        ),
      },
    ]);
  };

  useEffect(() => {
    // console.log('meta', meta);
    // console.log('query', query);
    fetchProjects();
  }, [query]);

  useEffect(() => {
    fetchProjectFilters();
    localStorage.setItem('locale', 'ja');
    handleInstructionSection();
  }, [t]);

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
      <Box display="flex" justifyContent="flex-start" sx={{ alignItems: 'center' }}>
        <ChevronLeftIcon
          fontSize="large"
          sx={{ cursor: 'pointer', color: '#b3b3b3' }}
          onClick={handleClickToSprobeWebsite}
        />
        <Typography
          sx={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'underline' }}
          onClick={handleClickToSprobeWebsite}
        >
          {t(`${pageText}.return_to_sprobe`)}
        </Typography>
      </Box>
      {/* <Paper sx={{ px: 3, py: 2, mb: 4, mt: 1 }}> */}
      <Box sx={{ my: 2 }}>
        <Accordion items={features} isWithTemplate={false} />
      </Box>
      {/* <Box>
          <Typography variant="h7" fontWeight="bold">
            {t(`${pageText}.sub_header_section.title`)}
          </Typography>
        </Box>
        <Box sx={{ px: 2, mt: 2 }}>
          <Typography>
            {t(`${pageText}.sub_header_section.first_paragraph.1`)} <br />
            {t(`${pageText}.sub_header_section.first_paragraph.2`)} <br />
            {t(`${pageText}.sub_header_section.first_paragraph.3`)} <br />
          </Typography>
          <Typography fontWeight="bold"> a. Creating an Estimation from Scratch </Typography>
          <Typography>{`Click "Create Estimation" Button » Fill in the required fields » Click "Generate Quotation" to be able provide the details where to send the Estimation Result`}</Typography>
          <Box sx={{ mt: 2 }} />
          <Typography fontWeight="bold"> b. Creating an Estimation using a template </Typography>
          <Typography>
            A list of pre-defined estimation template is provided wherein you can just select and
            see the recommended functional and non-functional requirements.
          </Typography>
          <Typography>
            Make use of the search settings to filter the result, allowing you to see the template
            that matches your desired application.
          </Typography>
          <Typography>{`Click "Use as Template" on the pre-defined project » Update or Add any additional functions » Click "Generate Quotation" to be able provide the details where to send the Estimation Result`}</Typography>
        </Box> */}
      {/* </Paper> */}
      <Paper sx={{ boxShadow: 'none' }}>
        <Grid container sx={{ alignItems: 'end', height: '39px' }}>
          {/* <Grid item xs={6}>
            <Typography variant="h7">{t(`${pageText}.project_list_heading`)}</Typography>
          </Grid> */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Link
                to={{
                  pathname: '/quotation',
                }}
              >
                <Button sx={{ backgroundColor: '#000000' }} startIcon={<AddIcon />}>
                  {t(`${pageText}.label.create_quotation_btn`)}
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container pacing={2} columnSpacing={2}>
          <Grid item xs={4}>
            <Container disableGutters sx={{ mt: '24px' }}>
              <Grid container sx={{ alignItems: 'end', height: '39px', mb: '12px' }}>
                <Grid item xs={12}>
                  <Typography variant="h8"> {t(`${pageText}.label.filter`)} </Typography>
                </Grid>
              </Grid>
              <Paper sx={{ p: 2, backgroundColor: theme.background.innerContainer }}>
                <Grid container>
                  <Grid item xs={12}>
                    <MuiTextField
                      value={searchKeyword}
                      sx={{ width: '100%' }}
                      label={t(`${pageText}.label.search`)}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      size="small"
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
                          <Typography>{t(`${pageText}.label.framework`)}</Typography>
                        </FormLabel>
                        <FormGroup sx={{ padding: 2, ml: 3 }}>
                          {projectFilters?.frameworks.map(function (framework, index) {
                            return (
                              <FormControlLabel
                                sx={{ marginRight: 0 }}
                                key={index}
                                control={
                                  <Checkbox
                                    checked={query?.frameworks.includes(framework.id.toString())}
                                    value={framework.id}
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
                    {t(`${pageText}.label.clear_all_filters_btn`)}
                  </Button>
                </Box>
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={8}>
            <Container disableGutters>
              <Container disableGutters sx={{ mt: 2 }}>
                <Grid container>
                  <Grid item xs={6} alignContent="flex-end" sx={{ mb: '12px' }}>
                    <Typography variant="h8">{t(`${pageText}.project_list_heading`)}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" justifyContent="flex-end" sx={{ mb: 2 }}>
                      <Typography sx={{ alignContent: 'center', mr: 2 }}>
                        {t(`${pageText}.label.sorting`)}
                      </Typography>
                      <Select
                        defaultValue={query.sort}
                        label=""
                        options={sortings}
                        isFullWidth={false}
                        sx={{ width: '200px' }}
                        onChange={handleOnChangeSort}
                      />
                      <Box display="flex" sx={{ alignItems: 'center', cursor: 'pointer' }}>
                        {/* <StraightIcon
                          sx={{ position: 'relative', left: '7px', transform: 'rotate(180deg)' }}
                        /> */}
                        <SortIcon
                          onClick={handleClickSort}
                          sx={{
                            ml: 2,
                            transform: query.order === 'asc' ? 'rotate(180deg)' : 'rotate(360deg)',
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                {/*height: '848px'*/}
                {loading && (
                  <Box
                    sx={{
                      display: 'flex',
                      height: 100,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                {!loading && data?.length <= 0 && (
                  <Box display="flex" justifyContent="center">
                    {t('table.no_data')}
                  </Box>
                )}
                {!loading &&
                  data.map(function (project, index) {
                    return (
                      <div key={index}>
                        <Paper sx={{ backgroundColor: theme.background.innerContainer, mb: 2 }}>
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
                                  overflow: 'auto',
                                }}
                              >
                                <Typography variant="h7" sx={{ fontWeight: 'bold' }}>
                                  {project?.system_name}
                                </Typography>
                                <br />
                                <Typography variant="font14px" color={theme.palette.orange.main}>
                                  {project?.technologies}
                                </Typography>
                                <br />
                                <Typography variant="body1" sx={{ mt: 3 }}>
                                  {project?.description}
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
                                <Typography variant="h7" color={theme.palette.orange.main}>
                                  {project?.mm} MM
                                </Typography>
                                <Box display="flex" justifyContent="center" width="100%">
                                  <Link
                                    to={{
                                      pathname: '/quotation',
                                      search: `?data=${encodeURIComponent(
                                        JSON.stringify({ id: project?.id })
                                      )}`,
                                      // state: { data1 },
                                    }}
                                  >
                                    <Button
                                      sx={{
                                        backgroundColor: theme.palette.orange.main,
                                        margin: 'auto',
                                        width: '100%',
                                      }}
                                      startIcon={<BorderColorIcon />}
                                    >
                                      {t(`${pageText}.label.use_as_template_btn`)}
                                    </Button>
                                  </Link>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Paper>
                      </div>
                    );
                  })}
              </Container>
              <Pagination
                variant="outlined"
                shape="rounded"
                onChange={handleChangePage}
                page={query?.page}
                count={meta?.lastPage}
              />
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default QuotationList;
