const getRelatedChampions = (champions, champname) => {
  var filtered = champions.filter((item) => {
    return item.name == champname;
  });

  return filtered;
};

export default getRelatedChampions;
