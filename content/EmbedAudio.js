var swfVersionStr = "10.2.0";
var xiSwfUrlStr = "swfs/playerProductInstall.swf";
var flashvars = {};
var params = {};
params.quality = "high";
params.bgcolor = "#272727";
params.allowscriptaccess = "sameDomain";
params.allowfullscreen = "true";
params.wmode = "transparent";
var attributes = {};
attributes.id = "audio-player";
attributes.name = "audio-player";
attributes.align = "middle";
swfobject.embedSWF("http://carvisualizer.plus360degrees.com/threejs/site.php", "audio-player", "240", "70", swfVersionStr, xiSwfUrlStr, flashvars, params, attributes);
swfobject.createCSS("#audio-player", "display:block;text-align:left;");