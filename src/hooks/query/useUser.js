import { useQuery } from "react-query";
import { getUser } from "../../api/account";

export default function useUser() {
    return useQuery('user',
        () => getUser("user5"),
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