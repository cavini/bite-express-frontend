import { ORDER_STATUS } from "../config/order-status-config";
import { Order } from "../types";
import { Progress } from "./ui/progress";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order?.createdAt);
    const today = new Date();

    if (
      created.getDate() !== today.getDate() ||
      created.getMonth() !== today.getMonth() ||
      created.getFullYear() !== today.getFullYear()
    ) {
      return null;
    }

    created.setMinutes(
      created.getMinutes() + order?.restaurant?.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order?.status) || ORDER_STATUS[0]
    );
  };

  const expectedDelivery = getExpectedDelivery();
  const orderStatusLabel = getOrderStatusInfo()?.label;

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span> Order Status: {orderStatusLabel}</span>
        <span>
          {expectedDelivery ? `Expected by: ${expectedDelivery}` : ""}
        </span>
      </h1>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
