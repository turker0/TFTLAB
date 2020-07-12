const getTextHeight = (text, width) => {
  let line = text.length / 80;
  return line <= 1
    ? (width * 0.75 - 60) / 8
    : line <= 2
    ? (width * 0.75 - 60) / 6
    : line <= 3
    ? (width * 0.75 - 60) / 4
    : line < 4
    ? (width * 0.75 - 60) / 2
    : width * 0.75 - 60;
};

export default getTextHeight;
