import MuiButton from './button';
import MuiCard from './card';
import MuiList from './list';
import MuiMenu from './menu';
import MuiInput from './input';
import MuiPaper from './paper';
import MuiTable from './table';
import MuiSelect from './select';
import MuiDivider from './divider.js';
import MuiCheckbox from './checkbox';
import MuiDataGrid from './dataGrid';
import MuiTypography from './typography';
import MuiIconButton from './icon-button';

const Overrides = () => {
  const list = MuiList();
  const menu = MuiMenu();
  const input = MuiInput();
  const tables = MuiTable();
  const button = MuiButton();
  const cards = MuiCard();
  const divider = MuiDivider();
  const checkbox = MuiCheckbox();
  const dataGrid = MuiDataGrid();

  return Object.assign(
    list,
    menu,
    cards,
    input,
    button,
    tables,
    divider,
    checkbox,
    dataGrid,
    MuiPaper,
    MuiSelect,
    MuiIconButton,
    MuiTypography
  );
};

export default Overrides;
