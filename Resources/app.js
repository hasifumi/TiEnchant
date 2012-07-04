var webView, win;

win = Ti.UI.createWindow();

win.backgroundColor = 'blue';

webView = Ti.UI.createWebView();

webView.url = './enchant/index2.html';

win.add(webView);

win.fullscreen = true;

win.open();
