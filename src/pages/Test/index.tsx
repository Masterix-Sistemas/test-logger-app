import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useParams } from 'react-router-dom';
import remarkBreaks from 'remark-breaks';
import Header from '../../components/Header';
import api from '../../services/axios';
import { tokens } from '../../theme';

export interface DataProps {
  id: number;
  testTitle: string;
  testSummary?: string;
  testSteps?: string;
  testPriority: string;
  testDesignedDate: string;
  testExecutedDate: string;
  status: string;
  result?: string;
  preConditions?: string;
  moduleId: number;
  input: string;
  userId: string;
  expectedResult: string;
}

const Test = () => {
  const [data, setData] = useState<DataProps | null>(null);
  const { id } = useParams();
  const colors = tokens();

  useEffect(() => {
    const dataFetch = async () => {
      const { data } = await api.get(`/api/testCase/${id}`);
      setData(data);
    };
    dataFetch();
  }, []);

  return (
    <Box m="20px">
      {!data ? (
        <Header title="Test Case" subtitle="Not Found" />
      ) : (
        <>
          <Header title={data.testTitle} />
          <Box display="flex" flexDirection="column" gap="30px">
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Resumo:
              </Typography>
              <ReactMarkdown
                children={data.testSummary as string}
                remarkPlugins={[remarkBreaks]}
              />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Status:
              </Typography>
              {data.status === 'SUCCESS' ? (
                <Chip
                  label={data.status}
                  color="success"
                  sx={{ marginTop: '16px' }}
                />
              ) : (
                <Chip
                  label={data.status}
                  color="error"
                  sx={{ marginTop: '16px' }}
                />
              )}
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Passo a Passo:
              </Typography>
              <ReactMarkdown children={data.testSteps as string} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Prioridade:
              </Typography>
              <ReactMarkdown children={data.testPriority as string} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Pre-condição:
              </Typography>
              <ReactMarkdown children={data.preConditions as string} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Resultado:
              </Typography>
              <ReactMarkdown children={data.result as string} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Modulo:
              </Typography>
              <ReactMarkdown children={String(data.moduleId)} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: colors.primary[400] }}
                fontWeight="600"
              >
                Entrada de dados:
              </Typography>
              <ReactMarkdown children={data.input as string} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Test;
