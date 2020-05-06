var notificationId = "";

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.poll) {
    chrome.notifications.create({
      "type": "basic",
      "iconUrl": chrome.extension.getURL("icons/icon-48.png"),
      "title": "⚠️ Nouveau sondage disponible !",
      "message": "Un nouveau sondage est disponible sur la classe virtuelle. Pense à y répondre !"
    }, function(id) {
      notificationId = id;
    });
  } else {
    chrome.notifications.clear(notificationId);
  }
  sendResponse();
});
