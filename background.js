const IMDBRegexp = new RegExp('imdb.+/title/(tt\\d{7})');

chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    function (tabs) {
      const tab = tabs[0];
      const match = IMDBRegexp.exec(tab.url);
      const IMDBid = match ? match[1] : null;
      if (typeof IMDBid === 'string') {
        var newURL = `https://cheevo.io/movie/${IMDBid}`;
        chrome.tabs.create({ url: newURL });
      }
    }
  );
});