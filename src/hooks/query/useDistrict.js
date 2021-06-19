import { useQuery } from "react-query";
import { getDistrict } from "../../api/address";

export default function useDistrict() {
    return useQuery('districts',
        () => getDistrict(),
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
