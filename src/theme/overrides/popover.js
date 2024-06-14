const Popover = () => {
  const boxShadow = (theme) => {
    if (theme.palette.mode === 'light') {
      return theme.shadows[6];
    } else return '0px 3px 14px 0px rgba(15, 20, 34, 0.38)';
  };

  return {
    MuiPopover: {
      styleOverrides: {
        paper: ({ theme }) => ({
          boxShadow: boxShadow(theme),
          border: `1px solid ${theme.palette.divider}`
        })
      }
    }
  };
};

export default Popover;
