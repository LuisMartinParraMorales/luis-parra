import { expect, test } from "@playwright/test";

test.describe("portfolio site", () => {
  test("renders the homepage and moves through the overview sections", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Software & ML Engineer" }),
    ).toBeVisible();
    await expect(
      page.getByAltText("Portrait of Luis Parra in London."),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation").getByRole("link", { name: "Home" }),
    ).toHaveAttribute("href", "/");
    await expect(
      page.getByRole("link", { name: "Browse this portfolio repo on GitHub" }),
    ).toHaveAttribute(
      "href",
      "https://github.com/LuisMartinParraMorales/luis-parra",
    );

    await page.getByRole("link", { name: "Explore flagship projects" }).click();
    await expect(
      page.getByRole("heading", {
        name: "Four projects that show the shape of the work.",
      }),
    ).toBeVisible();
  });

  test("opens the detail pages from the main navigation", async ({ page }) => {
    const routes = [
      {
        label: "Projects",
        heading: "Four systems that show how I build.",
      },
      {
        label: "How I Build",
        heading:
          "I work best when the problem is clear, the architecture is deliberate, and the code stays reviewable.",
      },
      {
        label: "CV",
        heading: "Public CV summary",
      },
      {
        label: "Contact",
        heading: "If the work resonates, I'd be glad to hear from you.",
      },
    ];

    for (const route of routes) {
      await page.goto("/");
      await page
        .locator("header")
        .getByRole("navigation")
        .getByRole("link", { name: route.label, exact: true })
        .click();

      await expect(
        page.getByRole("heading", { name: route.heading }),
      ).toBeVisible();
    }
  });

  test("keeps the public CV and contact actions reachable", async ({ page }) => {
    await page.goto("/cv");

    const downloadLink = page.getByRole("link", { name: "Download public CV" });
    await expect(downloadLink).toHaveAttribute(
      "href",
      "/documents/luis-parra-cv.pdf",
    );

    await expect(
      page.getByRole("link", { name: "Request latest CV via Gmail" }),
    ).toHaveAttribute("href", /mail\.google\.com/);

    await page.goto("/contact");
    await expect(
      page.getByRole("link", { name: /Send email to/ }),
    ).toHaveAttribute("href", /^mailto:/);
    await expect(
      page.getByRole("link", { name: /Open Luis Martin Parra Morales on LinkedIn/ }),
    ).toHaveAttribute("href", /linkedin\.com/);
    await expect(
      page.getByRole("link", { name: /Open LuisMartinParraMorales on GitHub/ }),
    ).toHaveAttribute("href", /github\.com/);
  });
});
