chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.tabs.create({url: alarm.name}, tab => {
    // TODO: track tab id.
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.type == "KEEP_TAB") 
      chrome.alarms.create(request.address, request.alarmInfo);
    
    sendResponse({status: "kept tab"});
  }
);
