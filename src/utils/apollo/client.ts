import { ApolloClient, InMemoryCache } from "@apollo/client";
import merge from "deepmerge";
import { useMemo } from "react";

let apolloClient: ApolloClient<any>;

function createApolloClient() {
  return new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_URL}:3000/query`,
    cache: new InMemoryCache(),
    
  });
}

export function initializeApollo(initialState = {}) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    // Получение кэша Apollo Client
    const existingCache = _apolloClient.extract();
    // Объединение начального состояния с существующим кэшем
    const data = merge(initialState, existingCache);

    // Восстановление состояния кэша
    _apolloClient.cache.restore(data);
  }

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
