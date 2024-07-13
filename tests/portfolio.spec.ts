import { test, expect } from "@playwright/test";

test("portfolio", async ({ page }) => {
  await page.goto("https://www.juanjosenavarro.es/");
  await expect(page.getByTestId("language-select")).toBeVisible();
  await expect(page.getByLabel("header.experience")).toBeVisible();
  await expect(page.getByLabel("header.aboutMe")).toBeVisible();
  await expect(page.getByRole("link", { name: "Blog" })).toBeVisible();
  await expect(page.getByTestId("buttonChangeTheme")).toBeVisible();
  await expect(page.locator("h1")).toContainText("Hey, soy Juan José");
  await expect(page.locator("#root")).toContainText(
    "3 años de experiencia. Ingeniero de Software de Sevilla, España Especializado en el desarrollo de aplicaciones SPA (typescript)",
  );
  await expect(page.getByRole("link", { name: "Contácteme" })).toBeVisible();
  expect(
    await page.getByRole("link", { name: "Contácteme" }).getAttribute("href"),
  ).toBe("mailto:juanjosenavarroperea@gmail.com");
  await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  expect(
    await page.getByRole("link", { name: "LinkedIn" }).getAttribute("href"),
  ).toBe("https://www.linkedin.com/in/juan-jose-navarro-perea/");
});
