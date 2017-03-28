/**
 * Created by UO232510 on 28/03/2017.
 */
function startVideo(mpd) {
    var video, context, player;
    video = document.getElementById('videoadaptativo');
    context = new Webm.di.WebmContext();
    player = new MediaPlayer(context);
    player.startup();
    player.attachView(video);
    player.setAutoPlay(true);
    player.attachSource(mpd);
}