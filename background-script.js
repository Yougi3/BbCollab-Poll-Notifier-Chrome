var notificationId = "";
var title = chrome.i18n.getMessage("notificationTitle");
var content = chrome.i18n.getMessage("notificationContent");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.poll) {
    chrome.notifications.create(
      {
        type: "basic",
        iconUrl: chrome.extension.getURL("icons/icon-48.png"),
        title: `${title}`,
        message: `${content}`,
      },
      function (id) {
        notificationId = id;
      }
    );
  } else {
    chrome.notifications.clear(notificationId);
  }
  sendResponse();
});
