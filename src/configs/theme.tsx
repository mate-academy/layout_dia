import { createTheme } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const palette = {
  primary: {
    main: '#2C2C2C',
    light: '#008AFF',
    blue: '#2060F6',
  },
  secondary: {
    main: '#253757',
    light: '#2060F6',
  },
  error: {
    main: '#E25C5C',
  },
  text: {
    light: '#EFF4F9',
    gray: '#253757',
    secondary: '#6C788B',
    disabled: '#C0CDD7'
  },
  grey: {
    100: '#EEEEEE',
    200: '#6C7680',
    300: '#EFF4F9'
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
};

const typography = {
  fontFamily: 'Poppins, sans-serif',
  h1: {
    [breakpoints.up('sm')]: {
      fontWeight: 600,
      fontSize: 64,
      lineHeight: 1.5,
      letterSpacing: '-2px',
      color: palette.text.light
    },
  },
  h2: {
    fontFamily: 'Open Sans, sans-serif',
    [breakpoints.up('sm')]: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.5,
      color: palette.text.light
    },
  },
  h3: {
    [breakpoints.up('sm')]: {
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1.5,
      color: palette.text.gray,
    },
  },
  h4: {
    [breakpoints.up('sm')]: {
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 1.5,
    },
  },
  h5: {
    [breakpoints.up('sm')]: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.5,
    },
  },
  h6: {
    [breakpoints.up('sm')]: {
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 2,
      textTransform: 'uppercase',
      letterSpacing: 3,
    },
  },
  body1: {
    [breakpoints.up('sm')]: {
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.4,
      color: palette.text.gray
    },
  },
  body2: {
    [breakpoints.up('sm')]: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1.5,
    },
  },
  subtitle1: {
    [breakpoints.up('sm')]: {
      fontFamily: 'Open Sans, sans-serif;',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.5,
    },
  },
  subtitle2: {
    [breakpoints.up('sm')]: {
      fontWeight: 600,
      fontSize: 15,
      lineHeight: 2.2
    },
  },
};

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          color: palette.text.light,
        },
        b: {
          fontWeight: 600,
        },
        strong: {
          fontWeight: 600,
          backgroundColor: palette.primary.main,
        },
        input: {
          '::-webkit-outer-spin-button,::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '[type=number]': {
            '-moz-appearance': 'textfield',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          color: palette.common.white
        },
        outlined: {
          borderRadius: 10,
          border: '1.5px solid',
          ':hover': {
            border: '1.5px solid',
          },
        },
        outlinedPrimary: {
          color: palette.common.white,
          borderColor: palette.common.white,
          ':hover': {
            color: palette.common.white,
            borderColor: palette.common.white,
            filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.5));',
          },
        },
        outlinedSizeMedium: {
          padding: '16px 20px',
          fontSize: 12,
          fontWeight: 400,
          [breakpoints.up('sm')]: {
            fontSize: 14,
            ':hover': {
              borderColor: 'transparent'
            }
          },
        },
        text: {
          borderRadius: 7,
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
        textPrimary: {
          color: palette.common.white,
          ':hover': {
            filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.5));',
          },
        },
        textSecondary: {
          color: palette.common.white,
          textTransform: 'initial',
          textDecoration: 'underline',
          ':hover': {
            color: palette.primary.main,
            textDecoration: 'underline',
          },
        },
        textSizeSmall: {
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 3,
        },
        textSizeMedium: {
          fontSize: 20,
          fontWeight: 600,
        },
        contained: {
          color: palette.common.white,
          ':hover': {
            backgroundColor: palette.primary.light,
          },
          [breakpoints.up('sm')]: {
            borderRadius: 7,
            textTransform: 'none',
            fontSize: 15,
            padding: '15px 80px',
            backgroundColor: palette.primary.blue,
            lineHeight: '22px',
            ':hover': {
              backgroundColor: palette.primary.light,
            },
          },
        },
        containedPrimary: {
          ':hover': {
            backgroundColor: palette.primary.main,
          },
        },
        containedSecondary: {
          ':hover': {
            backgroundColor: palette.common.white,
          },
        },
        containedSizeMedium: {
          ...typography.h3,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          ':hover': {
            filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.5));',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.main,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: palette.common.white
        },
        input: {
          color: palette.common.white,
          '.MuiOutlinedInput-notchedOutline': {
            ':hover': {
              borderColor: palette.common.white,
              color: palette.common.white
            },
          },
          '::placeholder': {
            opacity: 1,
            color: palette.common.white,
          },
        },
        notchedOutline: {
          borderColor: palette.common.white,
          borderWidth: 1.5,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: 1.4,
          fontWeight: 500,
          marginLeft: 4,
          marginRight: 4,
          color: palette.common.white,
          '.Mui-error': {
            color: palette.common.white,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          right: 24,
          color: palette.primary.main,
        },
        select: {
          '.MuiBox-root': {
            display: 'none',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: `${palette.common.white} !important`,
          ...typography.subtitle2,
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          paddingLeft: 8,
          color: palette.common.white,
          ...typography.subtitle2,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides : {
        root: {
          fill: palette.common.white,
          ':hover': {
            fill: palette.secondary.light
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ...typography.h5,
          ':hover': {
            color: palette.secondary.light
          }
        }
      }
    },
    // @ts-ignore
    MuiYearPicker: {
      styleOverrides: {
        root: {
          justifyContent: 'space-around',
          '.PrivatePickersYear-yearButton': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
      },
    },
  },
});
