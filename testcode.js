const obj = {
    "Gift Cards" : false,
    "Products" : false,
    "Explore" : false,
  }
  console.log( typeof Object.keys(obj).findIndex(key => obj[key] === true));
  