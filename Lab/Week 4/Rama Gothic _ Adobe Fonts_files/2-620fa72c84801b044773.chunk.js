(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1991:function(e,t,n){window.loadImage=n(1992);var r=n(6),a=n(76);e.exports={downsample:function(e,t,n,i,o){var s=a.getData("/visual_search/i18n");if(!r.includes(n,e.type))return void o({metric:{name:"typekit.render.visual-search.error-message",value:{error:"format",format:e.type}},errorMessage:s.image_downsampler.file_format_not_supported});window.loadImage(e,(function(n){if("error"!==n.type){var r=n.toDataURL(e.type);(function(e){return Math.round(3*e.length/4)})(r)>t?o({metric:{name:"typekit.render.visual-search.error-message",value:{error:"size",size:e.size}},errorMessage:s.image_downsampler.file_is_too_large}):i(r,e.name)}else o({metric:{name:"typekit.render.visual-search.error-message",value:{error:"unprocessable"}},errorMessage:s.image_downsampler.file_could_not_be_processed})}),{pixelRatio:1,downsamplingRatio:.5,maxWidth:4e3,maxHeight:4e3,minWidth:1,minHeight:1,canvas:!0,orientation:!0})}}},378:function(e,t,n){var r,a=n(1991),i=n(76),o=null,s="visual-search-file-input-drag-and-drop",l="visual-search-drag-and-drop-form",d="drop-file-here__upload",c=".visual-search-file-input",u=["image/gif","image/jpeg","image/jpg","image/png"],m=XMLHttpRequest.DONE||4;function f(){r=i.getData("/visual_search/i18n"),L()&&(w(L()).addEventListener("change",k),window.addEventListener("dragenter",b),window.addEventListener("dragleave",q),window.addEventListener("dragover",x),window.addEventListener("drop",H),window.addEventListener("af.search-bar.visual-search",(function(){document.getElementById(s).addEventListener("change",k),B()})),function(e){var t=e.filter((function(e){return e}));if(t.forEach((function(e){e.addEventListener("click",B)})),t.length>0){var n=function(){var e=document.getElementById(d);if(!e)return;return e.querySelector(c)}();n&&n.addEventListener("change",k)}}([document.getElementById("drop-file-here__link"),document.getElementById("search-by-image-link"),document.getElementById("try-a-visual-search")]),document.body.appendChild(p()),g().addEventListener("click",E),_()&&_().addEventListener("change",k))}function g(){return p().getElementsByClassName("visual-search-drop-zone__close")[0]}function p(){return function(){if(null===document.getElementById("drop-file-here-fullscreen"))return;var e=document.getElementById(l).getBoundingClientRect();e.top<0||e.bottom>(window.innerHeight||document.documentElement.clientHeight)?(document.getElementById("drop-file-here-fullscreen_frame").classList.add("visual-search-fullscreen__frame"),document.getElementById("drop-file-here-fullscreen").classList.remove("drop-file-here__drop-zone"),document.getElementById("drop-file-here").classList.remove("drop-file-here__small")):(document.getElementById("drop-file-here-fullscreen_frame").classList.remove("visual-search-fullscreen__frame"),document.getElementById("drop-file-here-fullscreen").classList.add("drop-file-here__drop-zone"),document.getElementById("drop-file-here").classList.add("drop-file-here__small"))}(),document.getElementById(l)}function v(){return p().querySelector(".visual-search-drop-zone")}function h(){return document.getElementsByClassName("visual-search-error__text")[0]}function y(){return document.getElementsByClassName("visual-search-error__details")[0]}function w(e){return e.querySelector(c)}function _(){return document.getElementById("upload-another-file-input")}function L(){return document.querySelector("#visual-search-upload-form")}function E(){S()}function k(e){z("typekit.click.visual-search.browse-select-image"),C(w(e.target.form).files[0])}function B(){w(L()).click()}function I(e){e.metric&&z(e.metric.name,e.metric.value),e.errorMessage&&R(e.errorMessage.text,e.errorMessage.details)}function T(e,t,n){var a=new XMLHttpRequest;a.onreadystatechange=function(){a.readyState===m&&200===a.status?a.responseText.trim()?t(JSON.parse(a.responseText)):t():a.readyState===m&&200!==a.status&&R(r.visual_search.something_went_wrong.text,r.visual_search.something_went_wrong.details)},g().addEventListener("click",(function(){var e;(e=a).onreadystatechange=null,e.abort()})),a.open("POST",e,!0),a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-CSRF-Token",function(){for(var e=document.getElementsByTagName("meta"),t=0;t<e.length;t++)if("csrf-token"==e[t].getAttribute("name"))return e[t].getAttribute("content")}()),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.send(n)}function b(e){if(function(e){for(var t=e.dataTransfer,n=0;n<t.types.length;n++)if("Files"===t.types[n])return!0;return!1}(e)){o=e.target;var t=v();M(p()),t.querySelector(".filename").innerText="",t.classList.remove("loading"),t.classList.add("active")}}function q(e){e.preventDefault(),e.target===o&&S()}function x(e){e.preventDefault(),e.stopPropagation()}function H(e){if(e.preventDefault(),z("typekit.click.visual-search.drop-image"),1==e.dataTransfer.files.length){var t=e.dataTransfer.files[0];v().classList.remove("active"),window.setTimeout((function(){C(t)}),1)}else e.dataTransfer.files.length>1&&R(r.visual_search.uploading_multiple_files.text,r.visual_search.uploading_multiple_files.details)}function M(e){e.style.display="block"}function R(e,t){v().classList.remove("loading"),v().classList.add("active"),document.querySelector(".filename").innerText="",h().innerHTML=e,y().innerHTML=t}function S(){p().style.display="none",D();var e=v();e.classList.add("loading"),e.classList.remove("active"),e.querySelector(".filename").innerText=""}function z(e,t){window.newrelic&&"undefined"!==typeof window.newrelic&&window.newrelic.addPageAction(e,t||{})}function C(e){D(),function(e){M(p());var t=v();t.classList.add("loading"),t.querySelector(".filename").innerText=e.name}(e),a.downsample(e,5242880,u,(function(t,n){!function(e,t){var n=window.URL||window.webkitURL,r=new Image;r.onload=function(){t({width:this.naturalWidth,height:this.naturalHeight,size:e.size,format:e.type})},r.src=n.createObjectURL(e)}(e,(function(e){z("typekit.click.visual-search.upload-image",e)})),T(document.getElementById(l).action+".json",(function(e){window.location.href=e.path}),JSON.stringify({image_string:t,image_file_name:n}))}),I)}function D(){h().innerHTML="",y().innerHTML=""}e.exports={init:function(){"loading"!=document.readyState?f():document.addEventListener("DOMContentLoaded",f)}}}}]);
//# sourceMappingURL=2-620fa72c84801b044773.chunk.js.map