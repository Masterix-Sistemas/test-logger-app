import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/axios';

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
          <p>
            Resumo:
            <br />
            {data.testSummary}
          </p>
          <p>
            Prioridade:
            <br />
            {data.testPriority}
          </p>
          <p>
            Pre-condição:
            <br />
            {data.preConditions}
          </p>
          <p>
            Passo a Passo:
            <br />
            {data.testSteps}
          </p>
          <p>
            Status:
            <br />
            {data.status}
          </p>
          <p>
            Resultado:
            <br />
            {data.result}
          </p>
          <p>
            Modulo:
            <br />
            {data.moduleId}
          </p>
          <p>
            Entrada de dados:
            <br />
            {data.input}
          </p>
        </>
      )}
    </Box>
  );
};

export default Test;
