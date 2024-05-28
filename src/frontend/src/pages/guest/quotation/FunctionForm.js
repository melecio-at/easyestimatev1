// import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
// import { getProjectFilters } from 'services/quotation/quotation.service';
// import * as yup from 'yup';
import { useEffect } from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Container, Grid, Typography } from '@mui/material';
import Button from 'components/atoms/Button';
import Checkbox from 'components/atoms/Form/Checkbox';
import Select from 'components/atoms/Form/Select';
import TextField from 'components/atoms/Form/TextField';
import { defaultFunction } from 'config/quotationCreate';

function FunctionForm(props) {
  const { userIndex, control, register, projectFilters, errors } = props;
  const { t } = useTranslation();
  const pageText = 'pages.quotation_create';
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: `users.${userIndex}.functions`,
  });

  // console.log('filter :: ' + projectFilters.assumedNumOfFields.length);

  const handleChangeFunctionType = async (value, func, funcIndex) => {
    // const options = await projectFilters.masterListFunctions.filter(
    //   (masterFunction) => masterFunction.masterlist_function_type_id === value
    // );
    update(funcIndex, {
      ...func,
      options: projectFilters.masterListFunctions.filter(
        (masterFunction) => masterFunction.masterlist_function_type_id === value
      ),
      details: projectFilters.masterListFunctions
        .filter((masterFunction) => masterFunction.masterlist_function_type_id === value)
        .map((subFunction) => {
          return subFunction?.id?.toString();
        }),
    });

    // {`users.${userIndex}.functions.${funcIndex}.details`}
  };

  const handleChangeFunctionName = (value, func, funcIndex) => {
    update(funcIndex, {
      ...func,
      functionName: value,
    });
  };

  const handleChangeFunctionDetails = (value, func, funcIndex) => {
    update(funcIndex, {
      ...func,
      details: value,
    });
  };

  const handleChangeNumFields = (value, func, funcIndex) => {
    update(funcIndex, {
      ...func,
      numFields: value,
    });
  };

  const handleRemoveFunction = (index) => {
    // console.log(index);
    remove(index);
  };

  useEffect(() => {
    // console.log('mama error', errors);
    // console.log('test :: ' + typeof errors?.users[0].functions[0].details);
    // console.log('test :: ', typeof errors?.users?.userIndex?.functions);
    // console.log('test :: ' + typeof errors?.users?.userIndex?.functions?.funcIndex?.details);
  }, [errors]);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
        <Button
          sx={{ backgroundColor: '#c65213', position: 'absolute', top: '87px' }}
          startIcon={<AddIcon />}
          onClick={() => {
            append(defaultFunction);
          }}
        >
          {t(`${pageText}.label.add_function_btn`)}
        </Button>
      </Box>
      <Grid container pacing={4} columnSpacing={2}>
        <Grid item xs display="flex" alignItems="center">
          <Typography fontWeight="bold">{t(`${pageText}.label.function_type`)}</Typography>
        </Grid>
        <Grid item xs display="flex" alignItems="center">
          <Typography fontWeight="bold">{t(`${pageText}.label.function_name`)}</Typography>
        </Grid>
        <Grid item xs display="flex" alignItems="center">
          <Typography fontWeight="bold">{t(`${pageText}.label.num_fields`)}</Typography>
        </Grid>
        <Grid item xs display="flex" alignItems="center">
          <Typography fontWeight="bold">{t(`${pageText}.label.sub_functions`)}</Typography>
        </Grid>
      </Grid>
      {fields.map((func, funcIndex) => {
        // console.log('userIndex::index => ' + userIndex + '::' + funcIndex);
        return (
          <div key={func.id}>
            <Container
              disableGutters
              maxWidth={false}
              sx={{
                height: '1px',
                width: '100%',
                backgroundColor: '#e5e5e5',
                mb: 2,
                mt: 2,
              }}
            ></Container>
            <Grid container pacing={4} columnSpacing={2}>
              <Grid item xs>
                <Controller
                  control={control}
                  name={`users.${userIndex}.functions.${funcIndex}.functionType`}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      {...field}
                      defaultValue=""
                      label=""
                      placeholder={t(`${pageText}.label.function_type_placeholder`)}
                      options={projectFilters?.functionTypes}
                      // {...register(`users.${userIndex}.functions.${funcIndex}.functionType`)}
                      error={!!error}
                      helperText={error?.message}
                      onChange={(value) => {
                        handleChangeFunctionType(value.target.value, func, funcIndex);
                        field.onChange(value);
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs>
                <Controller
                  control={control}
                  name={`users.${userIndex}.functions.${funcIndex}.functionName`}
                  render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                    <TextField
                      disableLabelLayout={true}
                      placeholder={t(`${pageText}.label.function_name_placeholder`)}
                      {...register(`users.${userIndex}.functions.${funcIndex}.functionName`)}
                      error={!!error}
                      helperText={error?.message}
                      onChange={onChange}
                      onBlur={(value) => {
                        handleChangeFunctionName(value.target.value, func, funcIndex);
                        onBlur(value);
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs>
                <Controller
                  control={control}
                  name={`users.${userIndex}.functions.${funcIndex}.numFields`}
                  defaultValue={projectFilters.assumedNumOfFields.length > 0 ? 1 : ''}
                  render={({ field: { onChange }, fieldState: { error } }) => (
                    <Select
                      label=""
                      options={projectFilters?.assumedNumOfFields}
                      // {...register(`users.${userIndex}.functions.${funcIndex}.numFields`)}
                      error={!!error}
                      helperText={error?.message}
                      // defaultValue={
                      //   typeof projectFilters?.assumedNumOfFields !== 'undefined' ? 1 : ''
                      // }
                      value={func.numFields}
                      onChange={(value) => {
                        handleChangeNumFields(value.target.value, func, funcIndex);
                        onChange(value);
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs display="flex" sx={{ justifyContent: 'space-between' }}>
                <Box>
                  <Controller
                    name={`users.${userIndex}.functions.${funcIndex}.details`}
                    control={control}
                    render={({ field, fieldState: { error } }) =>
                      func?.options?.map((detail, detailIndex) => {
                        return (
                          <div key={detail?.id}>
                            {detail?.function_name !== null && (
                              <Checkbox
                                label={detail?.function_name}
                                value={detail?.id}
                                error={detailIndex === 0 && !!error}
                                helperText={detailIndex === 0 && error?.message}
                                errorPosition="top"
                                checked={field?.value.some(
                                  (current) => parseInt(current) === parseInt(detail?.id)
                                )}
                                // checked={true}
                                onChange={(event, checked) => {
                                  // console.log(event, checked);
                                  if (checked) {
                                    field.onChange([...field.value, event.target.value]);
                                    handleChangeFunctionDetails(
                                      [...field.value, event.target.value],
                                      func,
                                      funcIndex
                                    );
                                  } else {
                                    field.onChange(
                                      field.value.filter(
                                        (value) =>
                                          value?.toString() !== event.target.value?.toString()
                                      )
                                    );

                                    handleChangeFunctionDetails(
                                      field.value.filter(
                                        (value) =>
                                          value?.toString() !== event.target.value?.toString()
                                      ),
                                      func,
                                      funcIndex
                                    );
                                  }
                                }}
                              />
                            )}
                          </div>
                        );
                      })
                    }
                  />
                </Box>
                <Box>
                  <HighlightOffIcon
                    onClick={() => {
                      handleRemoveFunction(funcIndex);
                    }}
                    sx={{ m: 0, color: 'red', cursor: 'pointer' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
}

FunctionForm.propTypes = {
  userIndex: PropTypes.any,
  control: PropTypes.any,
  register: PropTypes.any,
  projectFilters: PropTypes.object,
  errors: PropTypes.any,
};

export default FunctionForm;
