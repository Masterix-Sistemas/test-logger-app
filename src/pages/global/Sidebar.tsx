import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

import 'react-pro-sidebar/dist/css/styles.css';

type ItemOptions = {
  title: string;
  to: string;
  icon: ReactElement;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState('Dashboard');
  const colors = tokens();

  const Item = ({ title, to, icon, selected, setSelected }: ItemOptions) => {
    const colors = tokens();

    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[200] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.grey[800]} !important`,
        },
        '& .pro-icon-wrapper': {
          background: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-menu-item.active': {
          color: `${colors.primary[500]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Hamburger menu */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? <MenuOutlinedIcon fontSize="large" /> : undefined
            }
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[300],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[300]}>
                  Masterix Test
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon fontSize="large" />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Divider variant="middle" />
          {/* Menu Items */}
          <Box mt="16px" display="flex" flexDirection="column" gap="4px">
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 2px 16px' }}
            >
              Testes
            </Typography>
            <Item
              title="Criar novo teste"
              to="/test"
              icon={<ArticleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Criar novo modulo"
              to="/module"
              icon={<AutoAwesomeMosaicOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
