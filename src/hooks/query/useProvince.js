import { useQuery } from "react-query";
import { getProvince } from "../../api/address";

export default function useProvince() {
    return useQuery('province',
        () => getProvince(),
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
