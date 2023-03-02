import axios from "../services/axios";
export const getOrders = async () => axios.get("/orders");
export const getOrder = async (uuid) => axios.get(`/orders/${uuid}`);
export const updateOrder = async (uuid, payload) =>
  axios.patch(`/orders/${uuid}`, payload);
