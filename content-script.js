var notificationSent = false;
var interval = 5000; // In milliseconds
window.setInterval(function() {
  var pollElement = document.getElementById("poll-popup");
  if (pollElement) {
    // Trigger the notification if the poll popup is visible on screen.
    if (!pollElement.classList.contains("ng-hide")) {
      // Send a notification only if no previous notifications were sent.
      if (!notificationSent) {
        notificationSent = true;
        chrome.runtime.sendMessage({"poll": true}, function(response) { });
      }
    } else {
      if (notificationSent) {
        notificationSent = false;
        chrome.runtime.sendMessage({"poll": false}, function(response) { });
      }
    }
  }
}, interval);
