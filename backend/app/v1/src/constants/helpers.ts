import { v4 as uuidv4 } from 'uuid';
import { IMakeProcess } from '../@core/types';

export const createUUID = (): string => uuidv4();

export const makeProcess = async ({ res, cb, errorMessage = "Bir hata oluştu!" }: IMakeProcess) => {
  try {
    await cb();
  } catch (error: any) {
    console.log('error', error)
    if (res) {
      function getError() {
        if (error && error.message) {
          return error.message;
        }
        return errorMessage;
      }

      return res!.status(400).json({
        error: getError()
      });
    }
    throw new Error("Seed error");
  }
}

export const parseBodyForEmptyObject = (payload: any) => {
  var emptyStatus = [];
  if (!Object.keys(payload).length) emptyStatus.push("");
  else {
    for (let item in payload) {
      // eğer obje içerisinde obje var ise bunu döngüye alarak...
      // sınırsız objelerde boş kontrolü yapacaktır.
      if (typeof payload[item] == 'object') {
        for (let item2 in payload[item]) {
          if (String(payload[item][item2]).trim() == '') {
            emptyStatus.push(item);
          }
        }
      } else {
        if (String(payload[item]).trim() == '') {
          emptyStatus.push(item);
        }
      }
    }
  }
  return emptyStatus
}