import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getOrders } from '../../api/orders'

export default function useOrders() {
    const location = useLocation()
    return useQuery('orders',
        () => getOrders(location.search),
        {
            keepPreviousData: true,
            refetchOnReconnect: true,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
        }
    );
}
