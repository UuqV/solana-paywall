import Typography from 'typography';
import moraga from 'typography-theme-moraga';
import * as colors from '../colors.json';
import './typography.css';

moraga.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'h1,h2,a': {
      color: colors.greenText,
      marginBottom: 'inherit',
    },
    h3: {
      color: colors.greenText,
    },
    blockquote: {
      background: colors.greenText,
    },
    'small,li>a': {
      color: colors.small,
    },
    li: {
      color: colors.greenText,
      marginBottom: 'inherit',
    },
    hr: {
      background: colors.small,
    },
  };
};

const typography = new Typography(moraga);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
