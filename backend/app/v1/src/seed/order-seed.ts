import { Order } from "@prisma/client";
import { createUUID, makeProcess } from "../constants/helpers";
import db from "../services/db";

export const ordersData: Order[] = [
  {
    uuid: createUUID(),
    printPageType: "A4",
    createdAt: new Date()
  },
  {
    uuid: createUUID(),
    printPageType: "A5",
    createdAt: new Date()
  },
];

export default () => makeProcess({
  cb: async () => {
    await db.order.createMany({
      data: ordersData
    });
  }
});