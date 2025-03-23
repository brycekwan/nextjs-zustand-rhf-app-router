import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BookStoreStoreProvider } from "@/providers/BookStoreProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <BookStoreStoreProvider>
              <ReactQueryClientProvider>
                {props.children}
                <ReactQueryDevtools />
              </ReactQueryClientProvider>
            </BookStoreStoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
