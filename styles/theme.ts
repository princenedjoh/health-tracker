import { TypographySize, TypographyBold } from './components/types';

const colors = {
    dark : {
        1 : '#1A1A1A',
        2 : '#282828',
        3 : '#393939',
        4 : '#4D4D4D',
        5 : '#666666',
        6 : '#818181',
        7 : '#A2A2A2',
        8 : '#C2C2C2',
        9 : "#DDDDDD",
        10 : '#F0F0F0',
        11 : '#f2f2f2'
    }
}

const theme = {
    colors : {
        bg : {
            primary : '#000000',
            secondary : '#1C1C1E',
            tetiary : '#2C2C2C'
        },
        text : {
            primary : '#F6F6F8',
            secondary : '#B8B8C7',
            tetiary : '#77767B'
        },
    },

    typography: {
        size: { xs: TypographySize.xs, sm: TypographySize.sm, sm2: TypographySize.sm2, md: TypographySize.md, 
            md2 : TypographySize.md2, lg: TypographySize.lg, lg2 : TypographySize.lg,
            xl: TypographySize.xl, xxl: TypographySize.xxl, xl3: TypographySize.xl3 },
        bold: { sm: TypographyBold.sm, md: TypographyBold.md, lg: TypographyBold.lg },
      },

    spacing: {
        xs: "6px",
        sm: "12px",
        md: "18px",
        lg: "30px",
    },

    borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "25px",
    },

    breakpoints: {
        xs: "600px",
        sm: "800px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
    },
}

export default theme