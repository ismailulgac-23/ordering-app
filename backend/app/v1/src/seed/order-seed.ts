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
    for (let index = 0; index < ordersData.length; index++) {
      const element = ordersData[index];
      await db.order.create({
        data: element
      });
    }
  }
});