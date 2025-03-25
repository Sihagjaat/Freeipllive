// Show the popup when the page loads
window.onload = function() {
  document.getElementById('popup').style.visibility = 'visible';
};

// Function to close the popup and enable video interaction
function clearPopup() {
  document.getElementById('popup').style.visibility = 'hidden';
}

// Function to open WhatsApp channel and close the popup
function joinWhatsApp() {
  window.open('https://whatsapp.com/channel/0029VbA8B2vHrDZoWYuiaZ3W', '_blank');
  clearPopup();
}

// HLS.js to load the M3U8 stream
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById('live-stream');
  var videoSrc = "https://mtsft.ruscfd.lat/720p.m3u8";

  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    video.addEventListener('loadedmetadata', function () {
      video.play();
    });
  }
});
