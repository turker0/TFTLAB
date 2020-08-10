const RefactorFileName = (fileName, type) => {
  //AVATARS = SKILL CAPITALIZE
  //ITEMS CAPITALIZE
  //CLASSES LOWERCASE
  //ORIGINS LOWERCASE

  return type === "trait"
    ? fileName.replace(/\s/g, "").toLowerCase()
    : fileName.replace(/\s/g, "");
};

export default RefactorFileName;
