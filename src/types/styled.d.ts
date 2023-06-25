import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        colors: {
            backGr: string;
            main: string;
            secondary: string;
            textColor: string;
        };
    }
}