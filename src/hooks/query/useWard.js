import { useQuery } from "react-query";
import { getWard } from "../../api/address";

export default function useWard() {
    return useQuery('ward',
        () => getWard(),
        {
            keepPreviousData: true,
            refetchInterval: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: Infinity,
            retry: true,
        }
    );
}
