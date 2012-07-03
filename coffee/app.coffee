win = Ti.UI.createWindow()
win.backgroundColor = 'blue'

webView = Ti.UI.createWebView()
webView.url = './enchant/index.html'

win.add webView
win.fullscreen = true
win.open()
