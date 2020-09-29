import { createMuiTheme } from '@material-ui/core/styles';

//my color choices http:colorschemedesigner.com/csd-3.5/#3K523w0w0w0w0

const arcBlue = '#1142AA';
const arcPurple = '#4A11AE';
const arcGreen = '00AB6F';
const arcDBlue = '06276F';

export default createMuiTheme({
  pallette: {
    common: {
      blue: `${arcGreen}`,
      green: `${arcDBlue}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcPurple}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
});
