import { QueryCache, QueryClient } from "@tanstack/react-query";
import { showError } from "./service/notificationService";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      showError(`${error.message}`);
    },
  }),
});
