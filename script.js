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
  var videoSrc = "https://v18tataplaysyndication.akamaized.net/bpk-tv/Sports18_1_HD_voot_MOB/output03/hdntl=exp=1742807949~acl=/*~data=hdntl~hmac=82503849249783b714bd6b5996167a88e48a528916c1ac20b7dd8bae23538118/Sports18_1_HD_voot_MOB-audio_108038_eng=108000-video=2297600.m3u8";

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