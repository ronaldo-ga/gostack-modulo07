import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #191920 url('https://skylab.rocketseat.com.br/api/files/1562597196893.svg') no-repeat center top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`;
