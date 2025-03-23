"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/app/getQueryClient";

type ReactQueryClientProviderProps = {
  children: React.ReactNode;
};

const ReactQueryClientProvider = ({
  children,
}: ReactQueryClientProviderProps) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
