import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const FallbackSpinner = ({ sx }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <img
        src="https://frontendgroupdiag.blob.core.windows.net/websiteresource/tapsite/logo.png"
        alt="Logo"
        style={{ height: '60px', width: '60px' }}
      />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  );
};

export default FallbackSpinner;
