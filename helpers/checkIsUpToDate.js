import Update from "../db/update.json";
import Last from "../db/last.json";

const checkIsUpToDate = () => {
  if (Update.year > Last.year) return false;
  else if (Update.month > Last.month) return false;
  else if (Update.day > Last.day) return false;
  else return true;
};

export default checkIsUpToDate;
