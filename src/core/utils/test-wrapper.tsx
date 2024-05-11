import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

const i18nForTests = i18n.createInstance();
i18nForTests.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
});

export function TestWrapper({ children }: Readonly<{ children: JSX.Element }>) {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
