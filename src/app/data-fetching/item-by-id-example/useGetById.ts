import { useQuery } from "@tanstack/react-query";
import fetchById from "@/app/data-fetching/item-by-id-example/fetchById";

export default function useGetById({id, enabled = false}: {id: string, enabled?: boolean}) {
  return useQuery({
    queryKey: ['selectKey', id],
    queryFn: () => fetchById(id),
    select: ({data}) => data,
    retry: false,
    staleTime: 1000,
    enabled
  })
}
