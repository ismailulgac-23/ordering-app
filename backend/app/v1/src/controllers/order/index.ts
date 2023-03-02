import { OrderInfo } from "@prisma/client";
import { Request, Response } from "express";
import { makeProcess } from "../../constants/helpers";
import db from "../../services/db";

export const getOrders = (req: Request, res: Response) => makeProcess({
  res, cb: async () => {
    const orders = await db.order.findMany({
      select: {
        uuid: true,
        products: {
          take: 1,
          select: {
            product: {
              select: {
                image: true
              }
            }
          }
        }
      }
    });
    return res.status(200).json(orders);
  }
});

export const getOrder = (req: Request, res: Response) => makeProcess({
  res, cb: async () => {
    const { uuid } = req.params;
    if (!uuid) {
      return res.status(400).json({
        error: "Eksik bilgi gönderildi!"
      });
    }
    const order = await db.order.findFirst({
      where: {
        uuid: uuid
      },
      include: {
        orderInfos: true,
        products: {
          select: {
            product: {
              select: {
                image: true,
                price: true,
                title: true,
                uuid: true
              }
            }
          }
        },
      }
    });
    return res.status(200).json(order);
  }
});

export const updateOrder = (req: Request, res: Response) => makeProcess({
  res,
  cb: async () => {
    const { uuid } = req.params;
    const { orderInfos, printPageType } = req.body;

    const selectedOrderInfos = orderInfos.filter((el: any) => el.selected == true);
    const willDeleteOrderInfos = orderInfos.filter((el: any) => el.selected == false);

    if (!orderInfos || !printPageType || !uuid) {
      return res.status(400).json({
        error: "Eksik bilgi gönderildi!"
      });
    }

    async function deleteOneOrderInfo(item: any) {
      delete item["selected"];
      delete item["orderUuid"];
      await db.order.update({
        data: {
          orderInfos: {
            delete: {
              uuid: item.uuid
            }
          },
        },
        where: {
          uuid: uuid
        }
      });
      return true;
    }
    async function updateOneOrderInfo(item: any) {
      delete item["selected"];
      delete item["orderUuid"];
      await db.order.update({
        data: {
          orderInfos: {
            update: {
              data: item,
              where: {
                uuid: item.uuid
              }
            }
          },
        },
        where: {
          uuid: uuid
        }
      });
      return true;
    }

    for (let index = 0; index < willDeleteOrderInfos.length; index++) {
      const info = willDeleteOrderInfos[index];
      deleteOneOrderInfo(info);
    }
    for (let index = 0; index < selectedOrderInfos.length; index++) {
      const info = selectedOrderInfos[index];
      updateOneOrderInfo(info);
    }

    return res.status(200).json({
      status: true,
      message: "Güncelleme işlemi başarılı!"
    });

  }
});