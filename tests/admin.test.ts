import { test, expect, Page } from "@playwright/test";

async function login(page: Page) {
  await page.goto("https://www.juanjosenavarro.es/auth");
  await page.locator("[data-testid=email]").click();
  await page.locator("[data-testid=email]").fill(process.env.PLAYWIRGHT_USER!);
  await page.locator("[data-testid=password]").click();
  await page
    .locator("[data-testid=password]")
    .fill(process.env.PLAYWIRGHT_PASSWORD!);
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
  await page.getByLabel("Área de edición del editor:").click();
  await page
    .getByLabel("Área de edición del editor:")
    .fill("contenido test e2e");
  await page.getByRole("button", { name: "Crear" }).click();

  // validar articulo
  await page.waitForTimeout(500);
  await page.goto("https://www.juanjosenavarro.es/");
  await page.getByRole("link", { name: "Blog" }).click();
  await expect(page.locator("h1")).toContainText("titulo test e2e");
  await expect(page.getByRole("article")).toContainText("contenido test e2e");

  // editar
  await login(page);
  await page.getByRole("link", { name: "Articulos blog" }).click();
  await page.getByRole("link", { name: "EDITAR" }).click();
  await page.getByLabel("Título:").click();
  await page.getByLabel("Título:").fill("titulo test e2e editado");
  await page.getByLabel("Área de edición del editor:").click();
  await page.getByRole("button", { name: "Guardar" }).click();
  await page.getByRole("link", { name: "ELIMINAR" }).click();
  await page.getByRole("button", { name: "Eliminar" }).click();
});
