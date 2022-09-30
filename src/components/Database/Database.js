// For Local Storage
const addToDab = (e) => {
  let breakTime = {};
  const quantity = breakTime[e];
  if (!quantity) {
    breakTime[e] = 1;
  }
  localStorage.setItem("break-time", JSON.stringify(breakTime));
};
// impo
const getStoredTime = () => {
  let breakTime = {};
  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    breakTime = JSON.parse(storedTime);
  }
  return breakTime;
};
export { addToDab, getStoredTime };
