/**
 * Created by XIAO034 on 2016/10/13.
 */
function loadedHandler(){
    if(CKobject.getObjectById('ckplayer_a1').getType()){
        CKobject.getObjectById('ckplayer_a1').addListener('ended',endedHandler);
    }
    else{
        CKobject.getObjectById('ckplayer_a1').addListener('ended','endedHandler');
    }
}
function endedHandler(){
    CKobject.getObjectById('ckplayer_a1').newAddress('{p->1}{f->http://movie.ks.js.cn/flv/2011/11/8-1.flv}{html5->http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4}')
}
var flashvars={
    f:'http://movie.ks.js.cn/flv/other/2014/06/20-2.flv',
    c:0,
    p:2,
    b:0,
    i:'/static/images/letitgo.jpg',
    loaded:'loadedHandler',
    my_url:encodeURIComponent(window.location.href)
};
var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
CKobject.embed('/ckplayer/6.6/ckplayer.swf','a1','ckplayer_a1','100%','100%',false,flashvars,video);