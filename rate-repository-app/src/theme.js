import { Platform } from 'react-native';
import Constants from 'expo-constants';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',       
    appBar: '#24292e',
    error: '#d73a4a',    
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  deviceType: {
    width: Constants.deviceName !== 'SM-T580' ? 350 : 700
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  }  
};

export default theme;