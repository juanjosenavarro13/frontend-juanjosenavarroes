import { describe, expect, it } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { SelectLanguage } from "./select-language";

i18n.init({
  fallbackLng: "es",
  resources: {
    en: {
      translation: {
        language: "English",
      },
    },
    es: {
      translation: {
        language: "Español",
      },
    },
  },
});

describe("SelectLanguage", () => {
  it("should change language from Spanish to English and back to Spanish", async () => {
    const { getByTestId } = render(
      <I18nextProvider i18n={i18n}>
        <SelectLanguage />
      </I18nextProvider>,
    );

    expect(i18n.language).toBe("es");

    fireEvent.change(getByTestId("language-select"), {
      target: { value: "en" },
    });
    await waitFor(() => {
      expect(i18n.language).toBe("en");
    });

    fireEvent.change(getByTestId("language-select"), {
      target: { value: "es" },
    });
    await waitFor(() => {
      expect(i18n.language).toBe("es");
    });
  });
});
