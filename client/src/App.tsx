import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.component";
import RootLayout from "./components/RootLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Box } from "@mui/material";
import Workouts from "./pages/Workouts";
import Progression from "./pages/progression/Progression.component";
import Error from "./components/error/Error.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Home />} errorElement={<Error />} />
        <Route
          path="/my-workouts"
          element={<Workouts />}
          errorElement={<Error />}
        />
        <Route
          path="/progression"
          element={<Progression />}
          errorElement={<Error />}
        />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
};
export default App;
