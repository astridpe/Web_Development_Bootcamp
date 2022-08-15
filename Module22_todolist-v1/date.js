
exports.getDate = function() {

  const today = new Date();
  const currentDay = today.getDay();
  options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return today.toLocaleDateString("en-US", options);

}
