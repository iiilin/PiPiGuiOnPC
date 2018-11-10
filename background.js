chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "https://m.pipigui.cc/";
    chrome.tabs.create({ url: newURL });
});
