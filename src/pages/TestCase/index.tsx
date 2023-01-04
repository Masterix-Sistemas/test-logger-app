import { Box, Button, MenuItem, TextField, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import Header from '../../components/Header';
import api from '../../services/axios';

interface FormValues {
  testTitle: string;
  testSummary?: string;
  testSteps?: string;
  expectedResult: string;
  testPriority: 'LOW' | 'MEDIUM' | 'HIGH';
  preCondition?: string;
  input: string;
  result: string;
  status: 'SUCCESS' | 'FAILURE';
  userId: string;
  moduleId: number;
}

const TestCase = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  const initialValues: FormValues = {
    testTitle: '',
    testSummary: '',
    testSteps: '',
    expectedResult: '',
    testPriority: 'LOW',
    preCondition: '',
    input: '',
    result: '',
    status: 'SUCCESS',
    userId: '0aae93cf-a6d9-440c-b407-9e4dee09e6eb',
    moduleId: 0,
  };

  const handleFormSubmit = async (values: FormValues) => {
    const { data } = await api.post<FormValues>('/api/testCase', values);
    window.location.href = '/test';
  };

  return (
    <Box m="20px">
      <Header
        title="Criar novo teste"
        subtitle="Registre um novo teste preenchendo os campos abaixo"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={testSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': {
                  gridColumn: {
                    gridColumn: isNonMobile ? undefined : 'span 4',
                  },
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Título do teste"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.testTitle}
                name="testTitle"
                error={!!touched.testTitle && !!errors.testTitle}
                helperText={touched.testTitle && errors.testTitle}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Criado por"
                onBlur={handleBlur}
                onChange={handleChange}
                value="0aae93cf-a6d9-440c-b407-9e4dee09e6eb"
                name="userId"
                disabled
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                type="text"
                label="Resumo do teste"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.testSummary}
                name="testSummary"
                error={!!touched.testSummary && !!errors.testSummary}
                helperText={touched.testSummary && errors.testSummary}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                type="text"
                label="Passo a passo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.testSteps}
                name="testSteps"
                error={!!touched.testSteps && !!errors.testSteps}
                helperText={touched.testSteps && errors.testSteps}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                type="text"
                label="Pre-condições"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.preCondition}
                name="preCondition"
                error={!!touched.preCondition && !!errors.preCondition}
                helperText={touched.preCondition && errors.preCondition}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                type="text"
                label="Dados de entrada"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.input}
                name="input"
                error={!!touched.input && !!errors.input}
                helperText={touched.input && errors.input}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                type="text"
                label="Resultado esperado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expectedResult}
                name="expectedResult"
                error={!!touched.expectedResult && !!errors.expectedResult}
                helperText={touched.expectedResult && errors.expectedResult}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={4}
                type="text"
                label="Resultado obtido"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.result}
                name="result"
                error={!!touched.result && !!errors.result}
                helperText={touched.result && errors.result}
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Prioridade do teste"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.testPriority}
                defaultValue="LOW"
                name="testPriority"
                error={!!touched.testPriority && !!errors.testPriority}
                helperText={touched.testPriority && errors.testPriority}
                sx={{
                  gridColumn: 'span 2',
                }}
              >
                <MenuItem value="LOW">BAIXA</MenuItem>
                <MenuItem value="MEDIUM">MÉDIA</MenuItem>
                <MenuItem value="HIGH">ALTA</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                defaultValue="LOW"
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{
                  gridColumn: 'span 2',
                }}
              >
                <MenuItem value="SUCCESS">OK</MenuItem>
                <MenuItem value="FAILURE">ERRO</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Modulo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.moduleId}
                defaultValue={1}
                name="moduleId"
                error={!!touched.moduleId && !!errors.moduleId}
                helperText={touched.moduleId && errors.moduleId}
                sx={{
                  gridColumn: 'span 2',
                }}
              >
                <MenuItem value={1}>Ouvidoria anonima</MenuItem>
                <MenuItem value={2}>Ouvidoria</MenuItem>
                <MenuItem value={3}>Ouvidoria identificada</MenuItem>
                <MenuItem value={5}>Admin</MenuItem>
              </TextField>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Registrar Teste
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const testSchema = yup.object().shape({
  testTitle: yup.string().required('Esse campo é obrigatório'),
  testSummary: yup.string(),
  testSteps: yup.string(),
  preCondition: yup.string(),
  input: yup.string(),
  expectedResult: yup.string().required('Esse campo é obrigatório'),
  testPriority: yup.string().required('Esse campo é obrigatório'),
  result: yup.string(),
  status: yup.string().required('Esse campo é obrigatório'),
  userId: yup.string().required('Esse campo é obrigatório'),
  moduleId: yup.string().required('Esse campo é obrigatório'),
});

export default TestCase;
