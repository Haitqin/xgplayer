import Player from '../../player'

let s_miniplayer = function () {
  let player = this
  let util = Player.util
  if (!player.config.miniplayer) { return }
  let miniplayer = player.lang.MINIPLAYER
  let btn = util.createDom('xg-miniplayer', `<p class="name"><span>${miniplayer}</span></p>`, {tabindex: 9}, 'xgplayer-miniplayer')

  player.once('ready', () => {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(item => {
    btn.addEventListener(item, e => {
      e.preventDefault()
      e.stopPropagation()
      player.emit('miniplayerBtnClick')
    })
  })
}

Player.install('s_miniplayer', s_miniplayer)
