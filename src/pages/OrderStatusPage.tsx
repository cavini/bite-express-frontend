import { Loader2 } from "lucide-react";
import { useGetMyOrders } from "../api/OrderApi";
import { AspectRatio } from "../components/ui/aspect-ratio";
import OrderStatusHeader from "../components/OrderStatusHeader";
import OrderStatusDetail from "../components/OrderStatusDetail";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <Loader2 scale={16 / 9} className="ml-2 h-4 w-full animate-spin" />;
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders?.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant?.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
