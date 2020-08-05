const getRelatedElement = (itemname, items) => {
  var filtered = items.filter((item) => {
    return item.name == itemname;
  });

  return filtered;
};

export default getRelatedElement;
