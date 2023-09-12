import { getAllItems, createItemBE } from "./itemService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useItemsQuery = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
    refetchOnWindowFocus: false,
    retry: 1,
  });
  
  const items = data || [];

  const newItemMutation = useMutation({
    mutationFn: createItemBE,
    onSuccess: (newItem) => {
      const items = queryClient.getQueryData(["items"]) as [];
      queryClient.setQueryData(["items"], [...items, newItem]);
    },
  });

  return { items, newItemMutation };
};
