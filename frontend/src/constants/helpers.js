export const arrayMove = (data, oldIndex, newIndex) => {
  if (newIndex >= data.length) {
    var x = newIndex - data.length + 1;
    while (x--) {
      data.push(undefined);
    }
  }
  data.splice(newIndex, 0, data.splice(oldIndex, 1)[0]);
  return data;
};
