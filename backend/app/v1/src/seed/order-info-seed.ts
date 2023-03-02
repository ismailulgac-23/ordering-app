import { Order, OrderInfo, Product } from "@prisma/client";
import { createUUID, makeProcess } from "../constants/helpers";
import db from "../services/db";
import { ordersData } from "./order-seed";

const orderInfoForFirstOrder: OrderInfo[] = [
  {
    uuid: createUUID(),
    name: "Sipariş No",
    value: "2358237592375235",
    orderUuid: ordersData[0].uuid,
    rowNumber: 1
  },
  {
    uuid: createUUID(),
    name: "Takip Numarası",
    value: "368239583295",
    orderUuid: ordersData[0].uuid,
    rowNumber: 2
  },
  {
    uuid: createUUID(),
    name: "Kargo Kural İsmi",
    value: "Aras Kargo",
    orderUuid: ordersData[0].uuid,
    rowNumber: 3
  },
  {
    uuid: createUUID(),
    name: "Alıcı Ad Soyad",
    value: "Said Dize",
    orderUuid: ordersData[0].uuid,
    rowNumber: 4
  },
  {
    uuid: createUUID(),
    name: "Alıcı Telefon",
    value: "05346342975",
    orderUuid: ordersData[0].uuid,
    rowNumber: 4
  },
  {
    uuid: createUUID(),
    name: "Alıcı Adresi",
    value: "Çayyolu Mh. Koru Mah. Ahmet Taner Kışlalı Cad. No:4 North Star iş merkezi Kat:6 Daire:11 06810 / ANKARA / Turkey",
    orderUuid: ordersData[0].uuid,
    rowNumber: 5
  },
];
const orderInfoForSecondOrder: OrderInfo[] = [
  {
    uuid: createUUID(),
    name: "Sipariş No",
    value: "2358237592375235",
    orderUuid: ordersData[1].uuid,
    rowNumber: 1
  },
  {
    uuid: createUUID(),
    name: "Takip Numarası",
    value: "368239583295",
    orderUuid: ordersData[1].uuid,
    rowNumber: 2
  },
  {
    uuid: createUUID(),
    name: "Kargo Kural İsmi",
    value: "MNG Kargo Ücretli",
    orderUuid: ordersData[1].uuid,
    rowNumber: 3
  },
  {
    uuid: createUUID(),
    name: "Alıcı Ad Soyad",
    value: "Said Dize",
    orderUuid: ordersData[1].uuid,
    rowNumber: 4
  },
];

export const orderInfoData: OrderInfo[] = [
  ...orderInfoForFirstOrder,
  ...orderInfoForSecondOrder
];

export default () => makeProcess({
  cb: async () => {
    await db.orderInfo.createMany({
      data: orderInfoData
    });
  }
});