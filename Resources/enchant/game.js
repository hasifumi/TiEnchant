enchant();

window.onload = function() {
  var game = new Game();

  game.onload = function() {
    var scene = game.rootScene;
    scene.backgroundColor = 'red'
  };

  game.start();
};
