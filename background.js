browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.url) {
	  console.log(`Tab URL changed to: ${changeInfo.url}`);
	}
 });