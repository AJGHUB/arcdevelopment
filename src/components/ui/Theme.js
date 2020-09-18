import { createMuiTheme } from '@material-ui/core/styles';

//http:colorschemedesigner.com/csd-3.5/#3K523w0w0w0w0
const lglassBlue = '#1142AA';
const lglassPurple = '#4A11AE';
const lglassGreen = '00AB6F';
const lglassDBlue = '06276F';

export default createMuiTheme({
  pallette: {
    common: {
      blue: `${lglassGreen}`,
      green: `${lglassDBlue}`,
    },
    primary: {
      main: `${lglassBlue}`,
    },
    secondary: {
      main: `${lglassPurple}`,
    },
  },
  typography: {
    h3: 300,
  },
});
