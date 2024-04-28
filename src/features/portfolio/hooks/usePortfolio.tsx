import { HTTP_ENDPOINTS } from "@/core/constants/http-endpoints";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PortfolioResponse } from "../types";
import { useTranslation } from "react-i18next";

export function usePortfolio() {
  const { i18n } = useTranslation();
  const { isPending, isError, data } = useQuery({
    queryKey: ["portfolio", i18n.language],
    staleTime: Infinity,
    queryFn: () =>
      axios.get<PortfolioResponse>(
        HTTP_ENDPOINTS.portfolio + "?lang=" + i18n.language,
      ),
  });

  return { isPending, isError, portfolio: data?.data };
}
