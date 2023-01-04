import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
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
  Module: {
    id: number;
    name: string;
  };
}

const Dashboard = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const colors = tokens();

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: (params) => {
        return <a href={`/test/${params.row.id}`}>{params.row.id}</a>;
      },
    },
    { field: 'testTitle', headerName: 'Titulo do teste', flex: 1 },
    { field: 'testSummary', headerName: 'Resumo do teste', flex: 1 },
    { field: 'testPriority', headerName: 'Prioridade do teste', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'testDesignedDate', headerName: 'Data de criação', flex: 1 },
  ];

  useEffect(() => {
    const dataFetch = async () => {
      const { data } = await api.get('/api/testCase');

      setData(data);
    };
    dataFetch();
  }, []);

  return (
    <Box m="20px">
      <Header title="Dashboard" subtitle="Bem vindo Administrador" />
      <Box display="flex" alignItems="center" gap="16px">
        <Typography variant="h5">
          Total de testes realizados: {data.length}
        </Typography>
        <Typography variant="h5" color={colors.primary[400]}>
          Total de testes que passaram:
          {data.filter((test) => test.status === 'SUCCESS').length}
        </Typography>
        <Typography variant="h5" color={colors.red[500]}>
          Total de testes com falhas:
          {data.filter((test) => test.status === 'FAILURE').length}
        </Typography>
      </Box>
      <Box height="75vh" m="40px 0 0 0">
        {data && (
          <DataGrid
            rows={data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            checkboxSelection
            disableSelectionOnClick
          />
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
