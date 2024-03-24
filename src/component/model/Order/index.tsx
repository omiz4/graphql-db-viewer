import { useFragment } from "@apollo/client";
import { OrderFragment } from "./Order.graphql";

export function Order({
  id,
}: {
  id: string;
}) {
  const { complete, data: order } = useFragment({
    from: {
      __typename: "Order",
      id,
    },
    fragment: OrderFragment,
  });

  if (!complete) {
    return <div>data is not complete</div>;
  }

  return (
    <ul>
      <li> {order.id} </li>
      <li> {order.iid} </li>
      <li> {order.sid} </li>
      <li> {order.uuid} </li>
    </ul>
  );
}
