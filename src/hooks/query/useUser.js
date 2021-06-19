import { useQuery } from "react-query";
import { getUser } from "../../api/account";

export default function useUser() {
    return useQuery('user',
        () => getUser("32a73eb8-d9e8-da82-f349-2430a2dc0110"),
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