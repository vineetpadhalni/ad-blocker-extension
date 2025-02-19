chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: 1,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter: "*://*.doubleclick.net/*|*://*.googlesyndication.com/*|*://*.ads.google.com/*",
            resourceTypes: ["script", "image", "xmlhttprequest", "sub_frame"]
          }
        }
      ],
      removeRuleIds: [1] // Removes previous rules before adding new ones
    });
  });
  