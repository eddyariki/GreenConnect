import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        --padding-p0: 4px;
        --padding-p1: 8px;
        --padding-p2: 12px;
        --padding-p3: 16px;
        --padding-p4: 24px;
        --padding-p5: 32px;
        --padding-p6: 48px;
        --padding-p7: 64px;
        --padding-p8: 96px;

        --font-size-p0: 4px;
        --font-size-p1: 8px;
        --font-size-p2: 12px;
        --font-size-p3: 16px;
        --font-size-p3_5: 18px;
        --font-size-p4: 24px;
        --font-size-p5: 32px;
        --font-size-p6: 48px;
        --font-size-p7: 64px;

        --font-color-lightest: rgba(0,0,0,0.25);
        --font-color-lighter: rgba(0,0,0,0.5);
        --font-color-light: rgba(0,0,0,0.75);
        --font-color-grey: rgba(0,0,0,0.85);
        --font-color-normal: rgba(0,0,0,1);
        --font-color-white: rgba(255,255,255,1);
        --font-color-red: rgba(225,120,70,1);
        --font-color-blue: #0a58ff;

        --color-white: white;
        --color-black-lightest: rgba(0,0,0,0.05);
        --color-black-lighter: rgba(0,0,0,0.25);
        --color-black-light: rgba(0,0,0,0.5);
        --color-blue: #0a58ff;
        --color-background: #fafdff;

        --shadow-s2: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;
