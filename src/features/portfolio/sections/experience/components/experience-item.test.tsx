import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExperienceItem } from "./experience-item";
import { TestWrapper } from "@/core/utils";

describe("experience-item", () => {
  it("should render out end date", () => {
    render(
      <TestWrapper>
        <ExperienceItem
          experiencieItem={{
            title: "title",
            company: "company",
            description: "description",
            startDate: new Date("1,1,10"),
          }}
        />
      </TestWrapper>,
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("company")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(document.querySelector("time")?.textContent).toContain("01/01/2010");
    expect(document.querySelector("time")?.textContent).toContain(
      "experienceSection.now",
    );
  });
  it("should render with end date", () => {
    render(
      <ExperienceItem
        experiencieItem={{
          title: "title",
          company: "company",
          description: "description",
          startDate: new Date("1,1,10"),
          endDate: new Date("2,2,10"),
        }}
      />,
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("company")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(document.querySelector("time")?.textContent).toContain("01/01/2010");
    expect(document.querySelector("time")?.textContent).toContain("02/02/2010");
  });
});
