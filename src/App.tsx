import {ThemeProvider} from "react-jss";
import {BrowserRouter} from "react-router-dom";
import {theme} from "./theme/theme";
import {I18nextProvider} from "react-i18next";
import {useEffect} from "react";
import AppLoader from "./AppLoader";
import i18n from "./i18n/i18n";

function App() {

    // const useStyles = createUseStyles({
    //     button: {
    //         background: ({theme}:any) => theme.colorPrimary
    //     }
    // })
    //
    // const theme = useTheme()
    // const classes = useStyles({theme})

    useEffect(()=>{
        document.body.dir = i18n.dir();
    },[])

  return (
      <BrowserRouter>
          <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>

                  <AppLoader/>

          </ThemeProvider>
          </I18nextProvider>
      </BrowserRouter>
  )
}

export default App
