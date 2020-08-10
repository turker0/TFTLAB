const RefactorFileName = (fileName, type) => {
  //AVATARS = SKILL CAPITALIZE
  //ITEMS CAPITALIZE
  //CLASSES LOWERCASE
  //ORIGINS LOWERCASE

  if (type == "comp") {
    fileName.map((item) => {
      return item.replace(/\s/g, "");
    });
  } else {
    return type === "trait"
      ? fileName.replace(/\s/g, "").toLowerCase()
      : fileName.replace(/\s/g, "");
  }
};

export default RefactorFileName;
