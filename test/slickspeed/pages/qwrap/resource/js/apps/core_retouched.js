(function(){
var els=document.getElementsByTagName('script'), srcPath = '';
for (var i = 0; i < els.length; i++) {
	var src = els[i].src.split(/apps[\\\/]/g);
	if (src[1]) {
		srcPath = src[0];
		break;
	}
}
 
//ͨ������update-tag�������core��dom����ͬʱ��������
//update-tag: core/* -
//update-tag: dom/* tag001

document.write('<script type="text/javascript" src="'+srcPath+'core/core_base.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/browser.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/string.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/object.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/array.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/date.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/function.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/class.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/helper.h.js"><\/script>');
document.write('<script type="text/javascript" src="'+srcPath+'core/custevent.js"><\/script>');

document.write('<script type="text/javascript" src="'+srcPath+'core/core_retouch.js"><\/script>');
})();