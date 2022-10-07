import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: "#3C5898",
            light: "#9CB2CE",
            dark: "#29487D"
        },
        // success: {
        //     main: "##44b700",
        //     light: "#81c784",
        //     dark: "##66bb6a"
        // },
        background: {
            default: "#ebebeb",
        }
    }
});

export default theme;
