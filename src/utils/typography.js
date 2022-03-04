import Typography from 'typography';
import moraga from 'typography-theme-moraga';
import * as colors from '../colors.json';
import './typography.css';

moraga.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'h1,h2': {
      color: colors.greenText,
      marginBottom: 'inherit',
      marginLeft: '.5em',
    },
    a: {
      color: colors.greenText,
    },
    'a:hover': {
      color: 'white',
    },
    h3: {
      color: colors.greenText,
      marginBottom: 'inherit',
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
if (process.env.NODE_ENV !== `production`)
{
  typography.injectStyles();
}

export default typography;
