import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { PortfolioResponse } from "../types";

export function usePortfolio() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { isPending, isError, data } = useQuery({
    queryKey: ["portfolio"],
    staleTime: Infinity,
    queryFn: () =>
      axios.get<PortfolioResponse>(HTTP_ENDPOINTS.portfolio + "?lang=" + lang),
  });
  return { isPending, isError, portfolio: data?.data };
}
