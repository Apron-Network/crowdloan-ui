import { createGlobalStyle } from 'styled-components'

export const PageStyle = createGlobalStyle`
  ::selection {
    background: #03FFFF;
    color: #fff;
  }

  @font-face {
    font-family: 'Minecraft';
    src: url('/fonts/Minecraft.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'mplus_hzk_12';
    src: url('/fonts/mplus_hzk_12.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  /* Webfont: Lato-Black */
  @font-face {
    font-family: 'Lato-Black';
    src: url('/fonts/Lato-Black.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Black.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Black.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Black.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Black.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-BlackItalic */
  @font-face {
    font-family: 'Lato-Black';
    src: url('/fonts/Lato-BlackItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-BlackItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-BlackItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-BlackItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-BlackItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Bold */
  @font-face {
    font-family: 'Lato-Bold';
    src: url('/fonts/Lato-Bold.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Bold.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Bold.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Bold.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-BoldItalic */
  @font-face {
    font-family: 'Lato-Bold';
    src: url('/fonts/Lato-BoldItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-BoldItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-BoldItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-BoldItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-BoldItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Hairline */
  @font-face {
    font-family: 'Lato-Hairline';
    src: url('/fonts/Lato-Hairline.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Hairline.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Hairline.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Hairline.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Hairline.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-HairlineItalic */
  @font-face {
    font-family: 'Lato-Hairline';
    src: url('/fonts/Lato-HairlineItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-HairlineItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-HairlineItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-HairlineItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-HairlineItalic.ttf')
        format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Heavy */
  @font-face {
    font-family: 'Lato-Heavy';
    src: url('/fonts/Lato-Heavy.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Heavy.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Heavy.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Heavy.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Heavy.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-HeavyItalic */
  @font-face {
    font-family: 'Lato-Heavy';
    src: url('/fonts/Lato-HeavyItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-HeavyItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-HeavyItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-HeavyItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-HeavyItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Italic */
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Italic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Italic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Italic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Italic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Light */
  @font-face {
    font-family: 'LatoLight';
    src: url('/fonts/Lato-Light.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Light.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Light.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Light.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Light.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-LightItalic */
  @font-face {
    font-family: 'LatoLight';
    src: url('/fonts/Lato-LightItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-LightItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-LightItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-LightItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-LightItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Medium */
  @font-face {
    font-family: 'LatoMedium';
    src: url('/fonts/Lato-Medium.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Medium.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Medium.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Medium.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-MediumItalic */
  @font-face {
    font-family: 'LatoMedium';
    src: url('/fonts/Lato-MediumItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-MediumItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-MediumItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-MediumItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-MediumItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Regular */
  @font-face {
    font-family: 'Lato';
    src: url('/fonts/Lato-Regular.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Regular.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Regular.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Regular.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Semibold */
  @font-face {
    font-family: 'LatoSemibold';
    src: url('/fonts/Lato-Semibold.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Semibold.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Semibold.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Semibold.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Semibold.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-SemiboldItalic */
  @font-face {
    font-family: 'LatoSemibold';
    src: url('/fonts/Lato-SemiboldItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-SemiboldItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-SemiboldItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-SemiboldItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-SemiboldItalic.ttf')
        format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-Thin */
  @font-face {
    font-family: 'LatoThin';
    src: url('/fonts/Lato-Thin.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-Thin.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-Thin.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-Thin.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-Thin.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Webfont: Lato-ThinItalic */
  @font-face {
    font-family: 'LatoThin';
    src: url('/fonts/Lato-ThinItalic.eot'); /* IE9 Compat Modes */
    src: url('/fonts/Lato-ThinItalic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/Lato-ThinItalic.woff2') format('woff2'),
      /* Modern Browsers */ url('/fonts/Lato-ThinItalic.woff') format('woff'),
      /* Modern Browsers */ url('/fonts/Lato-ThinItalic.ttf') format('truetype');
    font-style: italic;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }
`
