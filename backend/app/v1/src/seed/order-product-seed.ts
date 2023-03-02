import { OrderProduct } from "@prisma/client";
import { createUUID, makeProcess } from "../constants/helpers";
import db from "../services/db";
import { ordersData } from "./order-seed";
import { productsData } from "./product-seed";

export const orderProductData: OrderProduct[] = [
  {
    uuid: createUUID(),
    orderUuid: ordersData[0].uuid,
    productUuid: productsData[0].uuid
  },
  {
    uuid: createUUID(),
    orderUuid: ordersData[0].uuid,
    productUuid: productsData[1].uuid
  },
  {
    uuid: createUUID(),
    orderUuid: ordersData[1].uuid,
    productUuid: productsData[0].uuid
  },
  {
    uuid: createUUID(),
    orderUuid: ordersData[1].uuid,
    productUuid: productsData[1].uuid
  },
  {
    uuid: createUUID(),
    orderUuid: ordersData[1].uuid,
    productUuid: productsData[2].uuid
  },
];

export default () => makeProcess({
  cb: async () => {
    await db.orderProduct.createMany({
      data: orderProductData
    });
  }
});