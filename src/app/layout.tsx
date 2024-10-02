"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import theme from "../theme";
import { Provider } from "react-redux";
import "./globals.css";
import store from "./store/store";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Header />
              <main>{children}</main>
              <Footer /> {/* Footer will stay at the bottom */}
            </Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
