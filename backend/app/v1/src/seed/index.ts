import productSeed from "./product-seed";
import orderSeed from "./order-seed";
import { makeProcess } from "../constants/helpers";
import orderInfoSeed from "./order-info-seed";
import orderProductSeed from "./order-product-seed";
export default (() => makeProcess({
  cb: async () => {
    await productSeed();
    await orderSeed();
    await orderInfoSeed();
    await orderProductSeed();

    console.log('Seed successfuly');
  }
}))();