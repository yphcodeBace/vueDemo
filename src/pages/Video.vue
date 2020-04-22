<template>
  <div>
    <video id="my-player"
        class="video-js
            vjs-default-skin
            vjs-big-play-centered"
        preload="auto"
        width="500"
        height="400"
        data-setup='{ "html5" : { "nativeTextTracks" : false }}'>
    </video>
  </div>
</template>

<script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  import 'videojs-flash'
  import SWF_URL from 'videojs-swf/dist/video-js.swf'
  videojs.options.flash.swf = SWF_URL // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件
  export default {
    name: 'Video',
    mounted(){
        this.player1 = videojs('my-player', this.VideoOptions, function onPlayerReady() {
            videojs.log('播放器已经准备好了!')
            this.on('play', function() {
                console.log('开始/恢复播放')
            })
            this.on('pause', function() {
                console.log('暂停播放')
            })
            this.on('ended', function() {
                console.log('结束播放')
            })
        })
        setTimeout(() => {
            this.player1.player()
        }, 1000)
    },
    data () {
        return {
            VideoOptions: {
                autoplay: true, // 是否自动播放
                muted: false, // 是否静音
                controls: true,
                fluid: false, // 宽高自适应
                techOrder: ["flash"],
                sources: [{
                    src: 'rtmp://172.31.99.89:1935/live/1',
                    type: 'rtmp'
                }]
            },
        }
    }
  }
</script>

<style scoped>
    #my-player{
        border: 1px solid red;
        width: 800px;
        height: 600px;
    }
</style>
