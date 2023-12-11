const analyzerArray = {
  max(arr) {
    this.max = Math.max(...arr);
    return this.max;
  },
  min(arr) {
    this.min = Math.min(...arr);
    return this.min;
  },
  length(arr) {
    this.length = arr.length;
    return this.length;
  },
  average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    this.average = sum / arr.length;
    return this.average;
  },
};
module.exports = analyzerArray;
