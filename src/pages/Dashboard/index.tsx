import { Box, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
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
  const successTestCount = data.filter(
    (test) => test.status === 'SUCCESS'
  ).length;
  const failureTestCount = data.filter(
    (test) => test.status === 'FAILURE'
  ).length;

  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    labels: ['Testes que passaram', 'Testes com falhas'],
    datasets: [
      {
        label: '# testes',
        data: [successTestCount, failureTestCount],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      renderCell: (params) => {
        return <a href={`/test/${params.row.id}`}>{params.row.id} ver</a>;
      },
    },
    { field: 'testTitle', headerName: 'Titulo do teste', flex: 1 },
    {
      field: 'Module',
      headerName: 'Modulo',
      flex: 1,
      renderCell: (params) => {
        return <Typography>{params.row.Module.name}</Typography>;
      },
    },
    { field: 'testSummary', headerName: 'Resumo do teste', flex: 1 },
    { field: 'testPriority', headerName: 'Prioridade do teste', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
      field: 'testDesignedDate',
      headerName: 'Data de criação',
      flex: 1,
      renderCell: (params) =>
        moment(params.row.testDesignedDate).format('DD/MM/YYYY'),
    },
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
      <Box mt="40px" mb="40px" width="340px">
        <Typography variant="h5" mb="16px">
          Total de testes realizados: {data.length}
        </Typography>
        <Paper elevation={2} sx={{ padding: '16px' }}>
          <Pie data={chartData} />
        </Paper>
      </Box>
      <Box display="flex" alignItems="center" gap="16px"></Box>
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
