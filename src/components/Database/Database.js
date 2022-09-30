// For Local Storage
const addToDb = (e) => {
  let breakTime = {};

  const quantity = breakTime[e];
  if (!quantity) {
      breakTime[e] = 1;
  }
  localStorage.setItem("break-time", JSON.stringify(breakTime));
};
const getStoredTime = () => {
  let breakTime = {};
  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
      breakTime = JSON.parse(storedTime);
  }
  return breakTime;
};
export { addToDb, getStoredTime };
