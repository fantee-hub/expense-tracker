import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    body{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Nunito Sans', sans-serif;
    }
    a{
        text-decoration:none;
    }
    
    h1,h2,h3,h4,h5,h6,p{
        margin:0;
    }

`;
export default Globalstyles;
