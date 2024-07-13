import { formatDate, TestWrapper } from "@/core/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Article, ArticleProps } from "./article/article";

describe("article", () => {
  it("render article", () => {
    const today = new Date();
    const article: ArticleProps = {
      tittle: "title",
      body: "body",
      created_at: today.toString(),
    };
    render(
      <TestWrapper>
        <Article {...article} />
      </TestWrapper>,
    );
    expect(screen.getByText(article.body)).toBeInTheDocument();
    expect(screen.getByText(article.tittle)).toBeInTheDocument();
    expect(
      screen.getByText("published " + formatDate(today)),
    ).toBeInTheDocument();
  });
});
