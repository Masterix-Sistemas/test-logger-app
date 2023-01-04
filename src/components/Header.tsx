import { Box, Typography } from '@mui/material';
import { tokens } from '../theme';

type HeaderOptions = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle }: HeaderOptions) => {
  const colors = tokens();

  return (
    <Box mb="30px">
      <Typography
        variant="h3"
        color={colors.grey[200]}
        fontWeight="600"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" color={colors.grey[300]}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default Header;
