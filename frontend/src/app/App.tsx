import {Suspense} from "react";
import {RouterProvider} from "react-router-dom";
import {ReactNotifications} from "react-notifications-component";
import {createTheme, NextUIProvider, useTheme} from "@nextui-org/react";
// own modules
import {router} from "../router";
import Loading from "../components/loading/Loading";
import {useAppSelector} from "../hooks/store.hook";

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark'
})

function App() {
  const isDark = useAppSelector(state => state.themeMode.darkMode);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <ReactNotifications/>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}/>
      </Suspense>
    </NextUIProvider>
  )
}

export default App
