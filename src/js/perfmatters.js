// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    domLoading = t.domLoading,
    domComplete = t.domComplete,
    LoadedEventStart = t.domContentLoadedEventStart,
    stats = document.getElementById("crp-stats");
  var dcl = LoadedEventStart - domLoading;
  var complete = domComplete - domLoading;
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});
