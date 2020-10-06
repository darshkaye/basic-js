module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  /**
   * turns = S, turnsSpeed = v
   * neededHours = t, neededSeconds = neededHours * 3600
   * S=v*t => t=S/v => neededHours=turns/turnsSpeed => neededSeconds=(turns/turnsSpeed)*3600
   */
  let seconds = Math.floor((turns / turnsSpeed) * 3600);
  return {"turns": turns, "seconds": seconds }
};
