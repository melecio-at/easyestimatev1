import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { saveProject } from 'services/quotation/quotation.service';
import * as yup from 'yup';
import { Box, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Form/Checkbox';
import RadioGroup from 'components/atoms/Form/RadioGroup';
import Select from 'components/atoms/Form/Select';
import TextField from 'components/atoms/Form/TextField';
import Modal from 'components/organisms/Modal';
import { defaultUserDetails } from 'config/quotationCreate';
import errorHandler from 'utils/errorHandler';

function QuotationPreviewModal(props) {
  const { open, setOpen, previewDetail, projectFilters, setIsEmailSuccess } = props;
  const { t } = useTranslation();
  const pageText = 'pages.quotation_preview_modal';
  const requiredText = t('pages.quotation_preview_modal.common.required');
  const [loading, setLoading] = useState(false);
  const formatLabel = (label) => {
    return (
      <>
        {label}
        <Typography display="inline" sx={{ color: 'red' }}>
          {requiredText}
        </Typography>
      </>
    );
  };

  const handleRedirectToTermsPage = () => {
    window.open(previewDetail?.termsLink, '_blank');
  };

  const checkboxGetInTouchLabel = () => {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography> {t(`${pageText}.company.label.get_in_touch`)} </Typography>
        <Typography> {t(`${pageText}.company.label.get_in_touch_2`)} </Typography>
      </Box>
    );
  };

  const checkboxAcceptTermsLabel = () => {
    return (
      <Box>
        <Typography onClick={handleRedirectToTermsPage} display="inline" sx={{ color: '#0091FF' }}>
          {t(`${pageText}.company.label.accept_terms`)}
        </Typography>
        <Typography display="inline">{t(`${pageText}.company.label.accept_terms_2`)}</Typography>
      </Box>
    );
  };

  // Define your Validation Rules
  const schema = yup.object({
    name: yup.string().required(t('form.required')).min(3, t('form.min')).max(100, t('form.max')),
    email_address: yup.string().required(t('form.required')).email(t('form.email')),
    business_type: yup.string().oneOf(['company', 'individual']).typeError(t('form.required')),
    business_license: yup.string().when('business_type', {
      is: 'company',
      then: yup.string().required(t('form.required')).min(3, t('form.min')).max(100, t('form.max')),
    }),
    company_name: yup
      .string()
      .test('isLessThanMinChars', t('form.min'), function (value) {
        if (value && value.trim() !== '' && value.length < 3) {
          return false;
        }
        return true;
      })
      .test('isMoreThanMaxChars', t('form.max'), function (value) {
        if (value && value.trim() !== '' && value.length > 100) {
          return false;
        }
        return true;
      }),
    phone_number: yup
      .string()
      .test('isLessThanMinChars', t('form.min'), function (value) {
        if (value && value.trim() !== '' && value.length < 3) {
          return false;
        }
        return true;
      })
      .test('isMoreThanMaxChars', t('form.max'), function (value) {
        if (value && value.trim() !== '' && value.length > 20) {
          return false;
        }
        return true;
      }),
    company_url: yup
      .string()
      .test('isLessThanMinChars', t('form.min'), function (value) {
        if (value && value.trim() !== '' && value.length < 3) {
          return false;
        }
        return true;
      })
      .test('isMoreThanMaxChars', t('form.max'), function (value) {
        if (value && value.trim() !== '' && value.length > 200) {
          return false;
        }
        return true;
      }),
    // .test('isValidUrl', 'invalid url format', function (value) {
    //   if (value && value.trim().length >= 1) {
    //     try {
    //       // Try parsing the URL. If successful, return true (validation passes)
    //       new URL(value);
    //       return true;
    //     } catch (error) {
    //       // If parsing fails, return false (validation fails)
    //       return false;
    //     }
    //   } else {
    //     // If value is empty or less than or equal to 1 character, return true (validation passes)
    //     return true;
    //   }
    // }),
    get_intouched: yup.bool().oneOf([true], t('form.required')),
    accept_terms: yup.bool().oneOf([true], t('form.required')),
  });

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultUserDetails,
  });

  const formatAmount = (amount, isKanji = true) => {
    let newAmount = '';
    if (typeof amount !== 'undefined' && amount >= 0) {
      newAmount = (!isKanji ? '¥' : '') + newAmount;
      newAmount += Number(amount).toLocaleString('ja-JP', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      newAmount += isKanji ? '円' : '';
    }

    return newAmount;
  };

  const businessTypes = [
    { label: t(`${pageText}.common.options.individual`), value: 'individual' },
    { label: t(`${pageText}.common.options.company`), value: 'company' },
  ];

  const businessType = watch('business_type');

  // const onError = (errors) => {
  //   console.log('errors', errors);
  // };

  const handleCreateProspect = async (data) => {
    setLoading(true);
    // console.log('mabuhay', data);
    // setValue('business_type', 'company');
    const totalAmount = await formatAmount(previewDetail?.totalAmount);

    try {
      await saveProject({
        ...data,
        projectDetail: { ...previewDetail, formattedTotalAmount: totalAmount },
      });
      // console.log('API Response 123', response);
      setIsEmailSuccess(true);
      await setLoading(false);
      await setOpen(false);
      await reset();
    } catch (err) {
      errorHandler(err, setError, toast);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (businessType === 'individual') {
      setValue('company_name', '');
      setValue('department', 0);
      setValue('position', 0);
      setValue('company_url', '');
      setValue('business_license', '');
    }
  }, [businessType]);

  return (
    <Container maxWidth="false" sx={{ px: 5, maxWidth: '1643px' }} disableGutters>
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
      <Modal
        open={open}
        title="Sample Modal"
        hideTitle={true}
        hideClose={true}
        hideTitleSection={true}
        overrideStyle={{
          width: '620px',
          borderRadius: '13px',
          height: businessType === 'company' ? '670px' : 'auto',
          overflow: 'auto',
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(handleCreateProspect)}
          sx={{
            px: 7,
            pt: 2,
            height: 'inherit',
            alignContent: 'space-between',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Grid container={true}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center" sx={{ mx: 'auto' }}>
                {t(`${pageText}.heading`)}
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography align="center" sx={{ mx: 'auto' }}>
                  自動返信メールにて資料ダウンロードURLをご案内いたします。
                </Typography>
                <Typography align="center" sx={{ mx: 'auto' }}>
                  お手数ですが以下のフォームに必要事項を入力してご申請ください。
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                // label="Business Type (Required)"
                // label={t(`${pageText}.common.business_type`) + ` ${requiredText}`}
                label={formatLabel(t(`${pageText}.common.business_type`))}
                options={businessTypes}
                inline={true}
                size="small"
                defaultValue="company"
                {...register('business_type')}
                error={errors && errors.business_type ? true : false}
                helperText={errors ? errors?.business_type?.message : null}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container={true} pacing={2} columnSpacing={3}>
                <Grid item xs={6}>
                  <TextField
                    placeholder={t(`${pageText}.common.name_placeholder`)}
                    label={formatLabel(t(`${pageText}.common.name`))}
                    size="small"
                    {...register('name')}
                    error={errors && errors.name ? true : false}
                    helperText={errors ? errors?.name?.message : null}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    // label="Email Address (Required)"
                    // label={t(`${pageText}.common.email`) + ` ${requiredText}`}
                    label={formatLabel(t(`${pageText}.common.email`))}
                    placeholder={t(`${pageText}.common.email_placeholder`)}
                    size="small"
                    {...register('email_address')}
                    error={errors && errors.email_address ? true : false}
                    helperText={errors ? errors?.email_address?.message : null}
                  />
                </Grid>
              </Grid>
            </Grid>
            {businessType === 'company' && (
              <>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField
                    // label="会社名"
                    label={t(`${pageText}.company.label.company_name`)}
                    placeholder={t(`${pageText}.company.label.company_name_placeholder`)}
                    size="small"
                    {...register('company_name')}
                    error={errors && errors.company_name ? true : false}
                    helperText={errors ? errors?.company_name?.message : null}
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <Grid container={true} pacing={2} columnSpacing={3}>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                      <Typography>{t(`${pageText}.company.label.department_position`)}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        control={control}
                        name={`department`}
                        render={({ field, fieldState: { error } }) => (
                          <Select
                            {...field}
                            defaultValue=""
                            // label={t(`${pageText}.company.label.department`)}
                            placeholder={t(`${pageText}.company.label.department_placeholder`)}
                            options={projectFilters?.departments}
                            size="small"
                            // {...register('department')}
                            // error={errors && errors.department ? true : false}
                            // helperText={errors ? errors?.department?.message : null}
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                      {/* <Select
                        {...field}
                        defaultValue=""
                        label={t(`${pageText}.company.label.department`)}
                        placeholder={t(`${pageText}.company.label.department_placeholder`)}
                        options={projectFilters?.departments}
                        size="small"
                        {...register('department')}
                        error={errors && errors.department ? true : false}
                        helperText={errors ? errors?.department?.message : null}
                      /> */}
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        control={control}
                        name={`position`}
                        render={({ field, fieldState: { error } }) => (
                          <Select
                            {...field}
                            defaultValue=""
                            // label={t(`${pageText}.company.label.position`)}
                            placeholder={t(`${pageText}.company.label.position_placeholder`)}
                            options={projectFilters?.positions}
                            size="small"
                            // {...register('position')}
                            error={!!error}
                            helperText={error?.message}
                            // error={errors && errors.position ? true : false}
                            // helperText={errors ? errors?.position?.message : null}
                          />
                        )}
                      />
                      {/* <Select
                        // label="役職を選択"
                        label={t(`${pageText}.company.label.position`)}
                        placeholder={t(`${pageText}.company.label.position_placeholder`)}
                        options={projectFilters?.positions}
                        size="small"
                        {...register('position')}
                        error={errors && errors.position ? true : false}
                        helperText={errors ? errors?.position?.message : null}
                      /> */}
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Grid container={true} pacing={2} columnSpacing={3}>
                <Grid item xs={6}>
                  <TextField
                    // label="電話番号"
                    placeholder={t(`${pageText}.common.phone_number_placeholder`)}
                    label={t(`${pageText}.common.phone_number`)}
                    // label={formatLabel(t(`${pageText}.common.phone_number`))}
                    {...register('phone_number')}
                    error={errors && errors.phone_number ? true : false}
                    helperText={errors ? errors?.phone_number?.message : null}
                  />
                </Grid>
                {businessType === 'company' && (
                  <Grid item xs={6}>
                    <TextField
                      // label="営業許諾 (Required)"
                      // label={t(`${pageText}.company.label.business_license`) + ` ${requiredText}`}
                      placeholder={t(`${pageText}.company.label.business_license_placeholder`)}
                      label={formatLabel(t(`${pageText}.company.label.business_license`))}
                      {...register('business_license')}
                      error={errors && errors.business_license ? true : false}
                      helperText={errors ? errors?.business_license?.message : null}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            {businessType === 'company' && (
              <>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField
                    // label="Company URL"
                    placeholder={t(`${pageText}.company.label.url_placeholder`)}
                    label={t(`${pageText}.company.label.url`)}
                    {...register('company_url')}
                    error={errors && errors.company_url ? true : false}
                    helperText={errors ? errors?.company_url?.message : null}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Controller
                name="get_intouched"
                control={control}
                render={({ field }) => {
                  return (
                    <Checkbox
                      // name="get_intouched"
                      defaultChecked={true}
                      {...field}
                      // label={formatLabel(t(`${pageText}.company.label.get_in_touch`))}
                      label={checkboxGetInTouchLabel()}
                      // {...register('get_intouched')}
                      // disabled={true}
                      error={errors && errors.get_intouched ? true : false}
                      helperText={errors ? errors?.get_intouched?.message : null}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="accept_terms"
                control={control}
                render={({ field }) => {
                  return (
                    <Checkbox
                      // name="get_intouched"
                      defaultChecked={true}
                      {...field}
                      // label={formatLabel(t(`${pageText}.company.label.accept_terms`))}
                      label={checkboxAcceptTermsLabel()}
                      // label={checkboxLabel(t(`${pageText}.company.label.accept_terms`))}
                      // {...register('get_intouched')}
                      // disabled={true}
                      error={errors && errors.accept_terms ? true : false}
                      helperText={errors ? errors?.accept_terms?.message : null}
                    />
                  );
                }}
              />
            </Grid>
          </Grid>
          <Grid container={true}>
            <Grid item xs={12} sx={{ textAlign: 'center', mb: 2 }}>
              <Button
                align="center"
                sx={{ backgroundColor: '#000000' }}
                type="submit"
                disabled={loading}
              >
                {t(`${pageText}.common.send`)}
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
  setOpen: PropTypes.any,
  projectFilters: PropTypes.object,
  previewDetail: PropTypes.object,
  setIsEmailSuccess: PropTypes.any,
};

export default QuotationPreviewModal;
