"use client";

import React, { useEffect } from "react";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { getQueryClient } from "@/app/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

type ReactQueryClientProviderProps = {
  children: React.ReactNode;
};

const ReactQueryClientProvider = ({
  children,
}: ReactQueryClientProviderProps) => {
  const queryClient = getQueryClient();

  useEffect(() => {
    const persister = createSyncStoragePersister({
      storage: localStorage,
    });

    persistQueryClient({ queryClient, persister });
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
