!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e),o="videoplayer-current-time";t.getVideoTitle().then((function(e){console.log("title:",e)})),t.on("timeupdate",(function(e){var t=e.seconds,n=Math.round(t);localStorage.setItem(o,n)}));var n=localStorage.getItem(o);console.log("Pause on: ".concat(n," seconds")),t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.e059ba43.js.map
