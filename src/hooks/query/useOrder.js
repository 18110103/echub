import { useQuery } from "react-query";
import { getOrder } from '../../api/orders'

export default function useOrder(orderId) {
    return useQuery(['order', orderId],
        () => getOrder(orderId),
        {
            keepPreviousData: true,
        }
    );
}
