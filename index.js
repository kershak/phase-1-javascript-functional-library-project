
const myEach = (collection, callback) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (const key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  };

  const myMap = (collection, callback) => {
    const newArray = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i, collection));
      }
    } else {
      for (const key in collection) {
        newArray.push(callback(collection[key], key, collection));
      }
    }
    return newArray;
  };

  const myReduce = (collection, callback, acc) => {
    if (Array.isArray(collection)) {
      if (acc === undefined) {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      }
    } else {
      let first = true;
      for (const key in collection) {
        if (first && acc === undefined) {
          acc = collection[key];
          first = false;
        } else {
          acc = callback(acc, collection[key], collection);
        }
      }
    }
    return acc;
  };

  const myFind = (collection, predicate) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
  };

  const myFilter = (collection, predicate) => {
    const filteredArray = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          filteredArray.push(collection[i]);
        }
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key], key, collection)) {
          filteredArray.push(collection[key]);
        }
      }
    }
    return filteredArray;
  };

  const mySize = (collection) => {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  };

  const myFirst = (array, n) => {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  };
  
  const myLast = (array, n) => {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(array.length - n);
    }
  };

  const myKeys = (object) => {
    return Object.keys(object);
  };

  const myValues = (object) => {
    return Object.values(object);
  };

  const mySortBy = (array, callback) => {
    return [...array].sort((a, b) => callback(a) - callback(b));
  };
  
  const myFlatten = (array, shallow, newArr=[]) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  };