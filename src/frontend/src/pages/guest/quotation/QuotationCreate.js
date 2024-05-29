import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  calculateProjectMD,
  getProjectFilters,
  getProjectTemplate,
} from 'services/quotation/quotation.service';
import theme from 'theme';
import * as yup from 'yup';
import HomeIcon from '@mui/icons-material/Home';
import { Box, Container, Grid, TextField as MuitextField, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
// import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Button from 'components/atoms/Button';
// import RadioGroup from 'components/atoms/Form/RadioGroup';
import RadioGroupCustom from 'components/atoms/Form/RadioGroupCustom';
import Select from 'components/atoms/Form/Select';
import TextField from 'components/atoms/Form/TextField';
import StepsButton from 'components/atoms/StepsButton';
import Accordion from 'components/molecules/Accordion';
import Modal from 'components/organisms/Modal';
import { defaultProjectFilers, defaultUser, expectedNumOfUsers } from 'config/quotationCreate';
import errorHandler from 'utils/errorHandler';
import FunctionForm from './FunctionForm';
import QuotationPreview from './QuotationPreview';

QuotationCreate.propTypes = {
  location: PropTypes.any,
};

QuotationCreate.defaultProps = {
  location: null,
};

function QuotationCreate() {
  const { t } = useTranslation();
  const pageText = 'pages.quotation_create';
  const location = useLocation();
  // const data1 = location?.state?.data;
  const queryParams = new URLSearchParams(location.search);
  const [projectID, setProjectID] = useState(null);
  const [project, setProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(1);
  const [features, setFeatures] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [previewDetail, setPreviewDetail] = useState([]);
  const [projectFilters, setProjectFilters] = useState(defaultProjectFilers);
  const [loading, setLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);

  const defaultUILayoutOptions = [
    { label: t(`pages.quotation_create.label.create_design`), value: 'create_design' },
    { label: t(`pages.quotation_create.label.design_provided`), value: 'ui_layout_provided' },
  ];

  const defaultSpecDocOptions = [
    { label: t(`pages.quotation_create.label.create_spec_doc`), value: 'create_spec_doc' },
    { label: t(`pages.quotation_create.label.spec_doc_provided`), value: 'design_doc_provided' },
  ];

  // Define your Validation Rules
  const schema = yup.object({
    system_name: yup
      .string()
      .required(t('form.required'))
      .min(3, t('form.min'))
      .max(100, t('form.max')),
    business_model: yup
      .string()
      .required(t('form.required'))
      .min(3, t('form.min'))
      .max(100, t('form.max')),
    development_type: yup
      .number(t('form.required'))
      .typeError(t('form.required'))
      .required(t('form.required'))
      .positive()
      .integer(),
    num_roles: yup
      .number(t('form.required'))
      .typeError(t('form.required'))
      .required(t('form.required'))
      .positive()
      .integer(),
    ui_layout: yup.string().when('development_type', {
      is: 1,
      then: yup.string().required(t('form.required')),
    }),
    spec_doc: yup.string().when('development_type', {
      is: 1,
      then: yup.string().required(t('form.required')),
    }),
    devices_and_browsers: yup.array(),
    'devices_and_browsers[0]': yup.string().test('test-0', t('form.required'), function () {
      return (
        this.parent &&
        this.parent.devices_and_browsers &&
        this.parent.devices_and_browsers[0].trim() !== ''
      );
    }),
    users: yup.array().of(
      yup.object({
        userName: yup.string().required(t('form.required')),
        framework: yup
          .number(t('form.required'))
          .typeError(t('form.required'))
          .required(t('form.required'))
          .positive(t('form.required'))
          .integer(),
        language: yup
          .number(t('form.required'))
          .typeError(t('form.required'))
          .required(t('form.required'))
          .positive()
          .integer(),
        functions: yup.array().of(
          yup.object({
            functionName: yup
              .string()
              .required(t('form.required'))
              .min(3, t('form.min'))
              .max(100, t('form.max')),
            functionType: yup
              .number(t('form.required'))
              .typeError(t('form.required'))
              .required(t('form.required'))
              .positive(t('form.required'))
              .integer(),
            numFields: yup
              .number(t('form.required'))
              .typeError(t('form.required'))
              .required(t('form.required'))
              .positive()
              .integer(),
            details: yup.array().min(1, t('form.required')),
          })
        ),
      })
    ),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      system_name: '',
      business_model: '',
      development_type: '',
      num_roles: 1,
      devices_and_browsers: ['Windows Desktop Google Chrome', '', ''],
      users: [defaultUser],
      ui_layout: 'create_design',
      spec_doc: 'create_spec_doc',
    },
  });

  const users = watch('users');

  const developmentType = watch('development_type');
  const numRoles = watch('num_roles');
  const uiLayout = watch('ui_layout');
  const specDoc = watch('spec_doc');
  const devicesAndBrowsers = watch('devices_and_browsers');

  // const { fields: userFields } = useFieldArray({
  // const {fields } = useFieldArray({
  //   name: 'users',
  //   control,
  // });

  // console.log('users', users);

  const fetchProject = async () => {
    setProjectLoading(true);
    const templateProject = await getProjectTemplate(projectID);
    await setProject(templateProject);
    setProjectLoading(false);
  };

  const autoFillTemplateValues = async (project) => {
    // console.log('project', project);
    await setFeatures([]);
    setValue('system_name', project?.system_name);
    setValue('business_model', project?.business_model);
    setValue('devices_and_browsers', project?.devices_and_browsers);
    setValue('development_type', project?.development_type);
    setValue('ui_layout', project?.ui_layout);
    setValue('spec_doc', project?.spec_doc);
    // setValue('num_roles', project?.num_roles);
    let newUsers = await project?.users.map((user, index) => {
      return {
        userName: user?.userName,
        id: index,
        framework: user?.framework,
        language: user?.language,
        languageOptions: projectFilters.frameworkLanguages.filter(
          (framework) => framework.framework_id === user?.framework
        ),
        functions: user?.functions.map((func) => {
          return {
            functionName: func?.functionName,
            functionType: func?.functionType,
            numFields: parseInt(func?.numFields),
            details: func?.details,
            options: projectFilters.masterListFunctions.filter(
              (masterFunction) => masterFunction.masterlist_function_type_id === func?.functionType
            ),
          };
        }),
      };
      // return newUsers
    });
    await setValue('num_roles', project?.num_roles);
    await setValue('users', newUsers);
    //await setFeatures([]);
    // handeFeatureChange(newUsers);
    // updateUser(0, {
    //   ...newUsers[0],
    // });
    // const templateProject = await getProjectTemplate(projectID);
    // console.log('templateProject', templateProject);
    // await setProject(templateProject);
  };

  // const defaultFunction = defFunction;

  const fetchProjectFilters = async () => {
    try {
      const projectFilters = await getProjectFilters();
      await setProjectFilters(projectFilters);
      // console.log('projectFilters', projectFilters);
      if (getValues('development_type') === '') {
        await setValue('development_type', projectFilters?.developmentTypes[0]?.value);
        await setValue('ui_layout', 'create_design');
        await setValue('spec_doc', 'create_spec_doc');
      }

      if (getValues('development_type') === '') {
        setValue('development_type', projectFilters?.developmentTypes[0]?.value);
      }
    } catch (err) {
      // errorHandler(err, setError, toast);
    }
  };

  const handleChangeUserFramework = (value, user, index) => {
    setValue(
      'users',
      users.map((user, i) =>
        i === index
          ? {
              ...user,
              framework: value,
              language: '',
              languageOptions: projectFilters.frameworkLanguages.filter(
                (framework) => framework.framework_id === value
              ),
            }
          : user
      )
    );
  };

  const handleChangeDevelopmentType = (value) => {
    if (value === 1) {
      setValue('ui_layout', 'create_design');
      setValue('spec_doc', 'create_spec_doc');
    }
  };

  const updateUsers = (numUsers) => {
    let newUsers = [];
    if (typeof numUsers === 'number' && [1, 2, 3].includes(numUsers)) {
      for (let i = 1; i <= numUsers; i++) {
        if (i <= users.length) {
          newUsers.push(users[i - 1]);
        } else {
          newUsers.push({
            ...defaultUser,
            userName: 'User ' + i,
            id: i,
            // functions: {
            //   ...defaultUser.functions,
            //   id: 1,
            // },
          });
        }
      }
    }

    return newUsers;
  };

  // const onError = (errors) => {
  //   console.log('errors', errors);
  // };

  const handleCalculateProjectMD = async (data) => {
    setLoading(true);
    // console.log('mabuhay', data);
    try {
      const response = await calculateProjectMD(data);
      await setPreviewDetail(response);
      await setLoading(false);
      setIsDetail(true);
      // console.log('API Response 123', response);
    } catch (err) {
      errorHandler(err, setError, toast);
      await setLoading(false);
    }
  };

  useEffect(() => {
    if (projectID !== null) {
      // console.log('projectID :: ' + projectID);
      fetchProject(projectID);
    }
  }, [projectID]);

  useEffect(() => {
    // console.log('projectData', project);
    if (project !== null) {
      autoFillTemplateValues(project);
      // setValue('system_name', project?.system_name);
      // setValue('business_model', project?.business_model);
      // setValue('devices_and_browsers', project?.test_environments);
      // setValue('development_type', project?.development_type_id);
      // setValue('num_roles', project?.numRoles);
    }
  }, [project]);

  useEffect(() => {
    if (open && isDetail) {
      setSteps(3);
    } else if (!open && isDetail) {
      setSteps(2);
    } else if (!open && !isDetail) {
      setSteps(1);
    }
  }, [open, isDetail]);

  useEffect(() => {
    fetchProjectFilters();
    // console.log('queryParams atm', queryParams);
    const data2 = queryParams.get('data');

    if (data2) {
      const parsedParams = JSON.parse(data2);
      setProjectID(parsedParams?.id);
      // console.log('parsedParams :: ' + parsedParams?.id);
    }
  }, [t]);

  useEffect(() => {
    if (developmentType !== 1) {
      setValue('ui_layout', '');
      setValue('spec_doc', '');
    }
  }, [developmentType]);

  useEffect(() => {
    setValue('users', updateUsers(numRoles));
  }, [numRoles]);

  const handeFeatureChange = (userFields) => {
    setFeatures(
      userFields.map((user, index) => ({
        header: (
          <Controller
            control={control}
            name={`users.${index}.userName`}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <MuitextField
                variant="standard"
                {...register(`users.${index}.userName`)}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
              />
            )}
          />
        ),
        content: (
          <Box backgroundColor="white" sx={{ p: 2, mx: 1 }}>
            <Grid container pacing={4} columnSpacing={2}>
              <Grid item xs={3}>
                <Controller
                  control={control}
                  name={`users.${index}.framework`}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        {...field}
                        label={
                          <Typography fontWeight="bold">
                            {t(`${pageText}.label.framework`)}
                          </Typography>
                        }
                        options={projectFilters.frameworks}
                        // {...register(`users.${index}.framework`)}
                        error={!!error}
                        helperText={error?.message}
                        onChange={(value) => {
                          handleChangeUserFramework(value.target.value, user, index);
                          field.onChange(value);
                        }}
                      />
                    </>
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  control={control}
                  name={`users.${index}.language`}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        {...field}
                        value={users[index]?.language}
                        label={
                          <Typography fontWeight="bold">
                            {t(`${pageText}.label.technology`)}
                          </Typography>
                        }
                        options={users[index]?.languageOptions}
                        {...register(`users.${index}.language`)}
                        error={!!error}
                        helperText={error?.message}
                      />
                    </>
                  )}
                />
              </Grid>
            </Grid>
            <FunctionForm userIndex={index} {...{ control, register, projectFilters, errors }} />
          </Box>
        ),
      }))
    );
  };

  // useEffect(() => {
  //   handeFeatureChange(userFields);
  // }, [userFields, errors, users, projectFilters]);
  useEffect(() => {
    handeFeatureChange(users);
  }, [errors, users, projectFilters]);

  return (
    <>
      <Modal
        open={projectLoading}
        title="Loading Modal"
        hideTitle={true}
        hideClose={true}
        hideTitleSection={true}
        overrideStyle={{
          width: 'auto',
          borderRadius: '13px',
          height: 'auto',
          bgcolor: 'transparent',
        }}
      >
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
      </Modal>
      <Modal
        open={loading}
        title="Loading Modal"
        hideTitle={true}
        hideClose={true}
        hideTitleSection={true}
        overrideStyle={{
          width: 'auto',
          borderRadius: '13px',
          height: 'auto',
          bgcolor: 'transparent',
        }}
      >
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
      </Modal>
      <Container disableGutters maxWidth={false} sx={{ ml: 2 }}>
        <Box display="flex" alignItems="center">
          <Link
            to={{
              pathname: '/',
            }}
          >
            <HomeIcon fontSize="large" sx={{ height: '41px', color: theme.palette.orange.main }} />
          </Link>
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 1 }}
      ></Container>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
          <StepsButton
            isactive={steps >= 1}
            sx={{
              backgroundColor: theme.palette.orange.main,
              height: '34px',
            }}
          >
            {t(`${pageText}.label.step1_btn`)}
          </StepsButton>
          <Container
            disableGutters
            width={'false'}
            sx={{
              height: '2px',
              width: '100px',
              backgroundColor: steps >= 2 ? theme.palette.orange.main : '#707070',
              mx: 0,
              my: 3,
            }}
          ></Container>
          <StepsButton
            isactive={steps >= 2}
            sx={{
              backgroundColor: steps >= 2 ? theme.palette.orange.main : 'white',
              height: '34px',
              border: steps >= 2 ? 'none' : '2px solid #4B4A49',
              color: steps >= 2 ? 'white' : 'black',
            }}
          >
            {t(`${pageText}.label.step2_btn`)}
          </StepsButton>
          <Container
            disableGutters
            maxWidth={false}
            sx={{
              height: '2px',
              width: '100px',
              backgroundColor: steps >= 3 ? theme.palette.orange.main : '#707070',
              mx: 0,
              my: 3,
            }}
          ></Container>
          <StepsButton
            isactive={steps >= 3}
            sx={{
              backgroundColor: steps >= 3 ? theme.palette.orange.main : 'white',
              height: '34px',
              border: '2px solid #4B4A49',
              color: steps >= 3 ? 'white' : 'black',
            }}
          >
            {t(`${pageText}.label.step3_btn`)}
          </StepsButton>
        </Box>
      </Container>
      {isDetail ? (
        <QuotationPreview
          previewDetail={previewDetail}
          projectFilters={projectFilters}
          setIsDetail={setIsDetail}
          open={open}
          setOpen={setOpen}
        />
      ) : (
        !projectLoading && (
          <Container maxWidth="false" sx={{ p: 2, maxWidth: '1643px' }}>
            <Box component="form" noValidate onSubmit={handleSubmit(handleCalculateProjectMD)}>
              <Paper sx={{ p: 2, backgroundColor: theme.background.innerContainer }}>
                <Box>
                  <Typography variant="h6" color={theme.palette.orange.main}>
                    {t(`${pageText}.heading`)}
                  </Typography>
                  <Grid container pacing={4} columnSpacing={6} sx={{ mt: 2, px: 2 }}>
                    <Grid item xs={4}>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <TextField
                            label={t(`${pageText}.label.system_name`)}
                            placeholder={t(`${pageText}.label.system_name_placeholder`)}
                            {...register('system_name')}
                            error={errors && errors.system_name ? true : false}
                            helperText={errors ? errors?.system_name?.message : null}
                          />
                        </Grid>
                      </Grid>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <TextField
                            label={t(`${pageText}.label.business_model`)}
                            placeholder={t(`${pageText}.label.business_model_placeholder`)}
                            {...register('business_model')}
                            error={errors && errors.business_model ? true : false}
                            helperText={errors ? errors?.business_model?.message : null}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <Controller
                            name="development_type"
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                label={t(`${pageText}.label.development_type`)}
                                options={projectFilters.developmentTypes}
                                error={errors && errors.development_type ? true : false}
                                helperText={errors ? errors?.development_type?.message : null}
                                onChange={(value) => {
                                  handleChangeDevelopmentType(value.target.value);
                                  field.onChange(value);
                                }}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <Controller
                            name="num_roles"
                            control={control}
                            defaultValue="" // Provide an initial/default value
                            render={({ field }) => (
                              <Select
                                {...field}
                                label={t(`${pageText}.label.num_roles`)}
                                options={expectedNumOfUsers}
                                error={errors && errors.num_roles ? true : false}
                                helperText={errors ? errors?.num_roles?.message : null}
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <TextField
                            label={
                              <>
                                {t(`${pageText}.label.devices_and_browsers`)}
                                <Typography display="inline" sx={{ color: 'red' }}>
                                  {t(`${pageText}.label.specify_at_least_one`)}
                                </Typography>
                              </>
                            }
                            // customLabel={true}
                            placeholder={t(`${pageText}.label.devices_and_browsers_placeholder`)}
                            {...register('devices_and_browsers.0')}
                            error={errors && errors.devices_and_browsers?.[0] ? true : false}
                            helperText={errors ? errors?.devices_and_browsers?.[0]?.message : null}
                          />
                        </Grid>
                      </Grid>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <TextField
                            noLabel={true}
                            placeholder={t(`${pageText}.label.devices_and_browsers_placeholder`)}
                            disabled={devicesAndBrowsers?.[0] === ''}
                            {...register('devices_and_browsers.1')}
                            error={errors && errors.devices_and_browsers?.[1] ? true : false}
                            helperText={errors ? errors?.devices_and_browsers?.[1]?.message : null}
                          />
                        </Grid>
                      </Grid>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                          <TextField
                            noLabel={true}
                            placeholder={t(`${pageText}.label.devices_and_browsers_placeholder`)}
                            disabled={devicesAndBrowsers?.[1] === ''}
                            {...register('devices_and_browsers.2')}
                            error={errors && errors.devices_and_browsers?.[2] ? true : false}
                            helperText={errors ? errors?.devices_and_browsers?.[2]?.message : null}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                {developmentType === 1 && (
                  <>
                    <Container
                      disableGutters
                      maxWidth={false}
                      sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
                    ></Container>
                    <Box>
                      <Typography variant="h6" color={theme.palette.orange.main}>
                        {t(`${pageText}.label.design_doc_requirement`)}
                      </Typography>
                      <Grid container pacing={4} columnSpacing={6} sx={{ mt: 2, pl: 2 }}>
                        <Grid item xs={4}>
                          <Controller
                            name="ui_layout"
                            control={control}
                            defaultValue={uiLayout}
                            render={({ field }) => (
                              <RadioGroupCustom
                                label={t(`${pageText}.label.ui_layout`)}
                                options={defaultUILayoutOptions}
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors && errors.ui_layout ? true : false}
                                helperText={errors ? errors?.ui_layout?.message : null}
                              />
                            )}
                          />
                          {/* <RadioGroup
                            name="ui_layout"
                            control={control}
                            defaultValue={uiLayout}
                            label="UI Layout/Mock-up"
                            options={defaultUILayoutOptions}
                            inline={false}
                            error={errors && errors.ui_layout ? true : false}
                            helperText={errors ? errors?.ui_layout?.message : null}
                            onClick={(e) => {
                              setValue('ui_layout', e.target.value);
                            }}
                          /> */}
                        </Grid>
                        <Grid item xs={4}>
                          <Controller
                            name="spec_doc"
                            control={control}
                            defaultValue={specDoc}
                            render={({ field }) => (
                              <RadioGroupCustom
                                label={t(`${pageText}.label.spec_requirement`)}
                                options={defaultSpecDocOptions}
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                                error={errors && errors.spec_doc ? true : false}
                                helperText={errors ? errors?.spec_doc?.message : null}
                              />
                            )}
                          />
                          {/* <RadioGroup
                            control={control}
                            defaultValue={specDoc}
                            label="To Create Specification Doc"
                            options={defaultSpecDocOptions}
                            inline={true}
                            {...register('spec_doc')}
                            error={errors && errors.spec_doc ? true : false}
                            helperText={errors ? errors?.spec_doc?.message : null}
                          /> */}
                          {/* <RadioGroup
                            name="spec_doc"
                            control={control}
                            defaultValue={specDoc}
                            label="To Create Specification Doc"
                            options={defaultSpecDocOptions}
                            inline={false}
                            error={errors && errors.spec_doc ? true : false}
                            helperText={errors ? errors?.spec_doc?.message : null}
                            // onClick={(e) => {
                            //   setValue('spec_doc', e.target.value);
                            // }}
                            // onClick={(e) => {
                            //   setValue('spec_doc', e.target.value);
                            // }}
                          /> */}
                        </Grid>
                        <Grid item xs={4}></Grid>
                      </Grid>
                    </Box>
                  </>
                )}
                {numRoles !== '' && (
                  <>
                    <Container
                      disableGutters
                      maxWidth={false}
                      sx={{ height: '1px', width: '100%', backgroundColor: '#e5e5e5', my: 3 }}
                    ></Container>
                    <Box>
                      <Typography variant="h6" color={theme.palette.orange.main}>
                        {t(`${pageText}.label.features_and_functions`)}
                      </Typography>
                      <Grid container sx={{ px: '10px' }}>
                        <Grid item xs={12}>
                          <Accordion
                            items={features}
                            summarySx={{
                              flexDirection: 'row-reverse',
                              background: theme.palette.hexf5f4ef,
                            }}
                          >
                            {/* <h1>This is a test</h1> */}
                          </Accordion>
                        </Grid>
                      </Grid>
                    </Box>
                  </>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, mx: 1, my: 6 }}>
                  <Link
                    to={{
                      pathname: '/',
                    }}
                  >
                    <Button sx={{ mr: 2, backgroundColor: '#b8b8b8', color: 'black' }}>
                      {t(`${pageText}.label.cancel_btn`)}
                    </Button>
                  </Link>
                  <Button sx={{ mr: 2, backgroundColor: '#000000' }} type="submit">
                    {t(`${pageText}.label.preview_quotation_btn`)}
                  </Button>
                  {/* </Link> */}
                </Box>
              </Paper>
            </Box>
          </Container>
        )
      )}
    </>
  );
}

export default QuotationCreate;
