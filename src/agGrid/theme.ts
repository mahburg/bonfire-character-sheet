import { colorSchemeDark, themeBalham } from 'ag-grid-community';

export const tableTheme = themeBalham.withPart(colorSchemeDark).withParams({
  fontFamily: 'Ancient',
  fontSize: '18px',
  headerBackgroundColor: '#111',
  headerTextColor: 'white',
  headerFontSize: '20px',
  headerFontWeight: 'bold',
});
