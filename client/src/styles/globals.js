import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const globals = () => injectGlobal`
  ${reset}
  
  @import url('https://rsms.me/inter/inter-ui.css');

  html {
    color: hsl(216, 29%, 34%);
    background-color: hsl(216, 29%, 94%);
    font-size: 16px;
    font-family: "Inter UI",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-display: swap;
  }
  button {
    font: inherit;
  }
`;

export default globals;
