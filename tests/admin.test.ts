import { test, expect, Page } from "@playwright/test";

async function login(page: Page) {
  const email = process.env.PLAYWRIGHT_USER;
  const password = process.env.PLAYWRIGHT_PASSWORD;

  if (!email || !password) {
    throw new Error("PLAYWRIGHT_USER and PLAYWRIGHT_PASSWORD must be set");
  }

  await page.goto("https://www.juanjosenavarro.es/login");
  await page.locator("[data-testid=email]").click();
  await page.locator("[data-testid=email]").fill(email);
  await page.locator("[data-testid=password]").click();
  await page.locator("[data-testid=password]").fill(password);
  await page.locator("[data-testid=btnSubmitLogin]").click();
}

test.beforeEach(async ({ page }) => {
  await login(page);
});

test("home", async ({ page }) => {
  await expect(page.locator("#root")).toContainText("user@user.es");
  await expect(
    page.getByTestId("adminPage").getByRole("heading"),
  ).toContainText("Welcome to the admin panel!");
  await expect(page.getByRole("list")).toContainText("Inicio");
  await expect(page.getByRole("list")).toContainText("Usuarios");
  await expect(page.getByRole("list")).toContainText("Articulos blog");
});

test("usuarios", async ({ page }) => {
  await page.getByRole("link", { name: "Usuarios" }).click();
  await expect(page.locator("#root")).toContainText("Crear Usuario");
  await page.getByRole("link", { name: "Crear Usuario" }).click();
  await expect(page.locator("#root")).toContainText("users create");
});

test("articulos", async ({ page }) => {
  await page.getByRole("link", { name: "Articulos blog" }).click();
  await page.getByRole("link", { name: "Crear Articulo" }).click();
  await page.getByLabel("Título:").click();
  await page.getByLabel("Título:").fill("titulo test e2e");
  await page.locator(".ql-editor").click();
  await page.locator(".ql-editor").fill("contenido test e2e");
  await page.getByRole("button", { name: "Crear" }).click();

  // validar articulo
  await page.waitForTimeout(500);
  await page.goto("https://www.juanjosenavarro.es/");
  await page.getByRole("link", { name: "Blog" }).click();
  await expect(page.locator("h1").first()).toContainText("titulo test e2e");
  await expect(page.getByRole("article").first()).toContainText(
    "contenido test e2e",
  );

  // editar
  await login(page);
  await page.getByRole("link", { name: "Articulos blog" }).click();
  await page.getByRole("link", { name: "EDITAR" }).first().click();
  await page.getByLabel("Título:").click();
  await page.getByLabel("Título:").fill("titulo test e2e editado");
  await page.locator(".ql-editor").click();
  await page.locator(".ql-editor").fill("contenido test e2e editado");
  await page.getByRole("button", { name: "Guardar" }).click();

  // eliminar articulo
  await page.getByRole("link", { name: "ELIMINAR" }).first().click();
  await page.getByRole("button", { name: "Eliminar" }).click();
});
