export function updateKeys(inputArray:any) {
    const updatedArray = inputArray.map((obj:any) => {
      if (obj.hasOwnProperty('postName')) {
        obj = { ...obj, title: obj.postName };
        delete obj.postName;
      }
      if (obj.hasOwnProperty('course')) {
        obj = { ...obj, title: obj.course };
        delete obj.course;
      }
      return obj;
    });
    return updatedArray;
  }