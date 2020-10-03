const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity == undefined || !Number.isInteger(sampleActivity) || typeof sampleActivity !== 'string') {
    return false;
  }
  
  const k = 0.693 / MODERN_ACTIVITY;
  return Math.log(HALF_LIFE_PERIOD / sampleActivity) / k;
};
