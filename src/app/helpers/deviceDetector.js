export default function deviceDetector () {
  var detectDevice = function () {
    return ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
  }

  return {
    detectDevice: detectDevice
  };
}