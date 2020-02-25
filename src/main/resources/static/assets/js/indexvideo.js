var thePlayer;  //保存当前播放器以便操作
var playpath = "";
var initPlayer = function(playpath) {
    thePlayer = jwplayer('container_video').setup({
        flashplayer: 'jwplayer/jwplayer.flash.swf',
        file: playpath,
        width: "100%",
        height: "",
        aspectratio:'16:9',
        allowfullscreen:true,
        allowscriptaccess:"always",
        autostart:true,
        enablejs:true,
        bufferlength:1,
        rotatetime:1,
        dock: false,
        events:{
            onPlaylistComplete:function(){
                /*console.log($scope.form.order);
                $scope.form.order = $scope.form.order + 1;
                console.log($scope.dataList[$scope.form.order]);
                $scope.playClick($scope.dataList[$scope.form.order]); */
            },
            onTime:function(){
                // 只播放10s-20s那段
//                              if (jwplayer(0).getPosition()<10 || jwplayer(0).getPosition()>20){
//                                  jwplayer(0).seek(10);
//                              }
            }
        }
    });
}