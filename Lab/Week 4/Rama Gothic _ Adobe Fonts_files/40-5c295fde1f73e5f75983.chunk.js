/*! For license information please see 40-5c295fde1f73e5f75983.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(19);var a=r(0).d`
            :host {
  --card-actions-padding: 10px 0 0 0;
  --card-background: var(--spectrum-global-color-gray-50);
  --card-border-radius: 4px;
  --card-box-shadow: 0 2px var(--spectrum-alias-dropshadow-blur) var(--spectrum-alias-dropshadow-color);
  --card-font-color: var(--spectrum-global-color-gray-900);
  --card-overlay-background: rgba(0, 0, 0, 0.7);

  background: var(--card-background);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  display: inline-flex;
  flex-direction: column;
  position: relative;
  outline: none;
  overflow: hidden;
}

:host(.linkable) {
  cursor: pointer;
}

::slotted(img) {
  /* Make slotted images display: block so they don't have a small gap
     underneath */
  display: block;
  width: 100%;
}

.activation-switch {
  --spectrum-switch-m-handle-size: 24px;
  --spectrum-switch-m-text-size: 0;
  --spectrum-switch-m-track-height: 24px;
  --spectrum-switch-track-width: 40px;

  width: 36px;
}

.anchor {
  visibility: hidden;
}

.overlay {
  background: var(--card-overlay-background);
  border-radius: var(--card-border-radius);
  bottom: 0;
  color: var(--spectrum-global-color-static-gray-100);
  left: 0;
  opacity: 0;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
}

:host(:hover) .overlay,
:host(:focus) .overlay,
:host(:focus-within) .overlay {
  opacity: 1;
}

.overlay .actions {
  padding: var(--card-actions-padding);
  position: absolute;
  top: 0;
  right: 0;
}

:host(:focus-visible),
:host([selected]) {
  border-color: var(
    --spectrum-card-border-color-key-focus,
    var(--spectrum-alias-border-color-focus));

  box-shadow: 0 0 0 2px var(
    --spectrum-card-border-color-key-focus,
    var(--spectrum-alias-border-color-focus));
}

          `},106:function(e,t,r){"use strict";function a(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()+4-(t.getUTCDay()||7))),a=new Date(Date.UTC(r.getFullYear(),0,1));return Math.ceil(((r.getTime()-a.getTime())/864e5+1)/7)}r.d(t,"a",(function(){return a}))},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a extends CustomEvent{constructor(e){super("af.activation",{detail:e,bubbles:!0,composed:!0})}}a.EVENT_NAME="af.activation"},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return v}));var a=r(53);const s="?as_channel=adobe_com&as_campclass=brand&as_camptype=app&as_source=Fonts&as_content=navbar&as_campaign=Marketplace",o={url:"https://stock.adobe.com/illustrations"+s,label:"navbar-header.stock-links.illustrations-label"},l={url:"https://stock.adobe.com/templates"+s,label:"navbar-header.stock-links.templates-label"},c={url:"https://stock.adobe.com/audio"+s,label:"navbar-header.stock-links.audio-label"},i={url:"https://stock.adobe.com/photos"+s,label:"navbar-header.stock-links.photos-label"},n={url:"https://stock.adobe.com/vectors"+s,label:"navbar-header.stock-links.vectors-label"},u={url:"https://stock.adobe.com/video"+s,label:"navbar-header.stock-links.videos-label"},p={url:"https://exchange.adobe.com/creativecloud.html"+s,label:"navbar-header.stock-links.plugins-label"},m={url:"https://stock.adobe.com/3d-assets"+s,label:"navbar-header.stock-links.3d-label"},d=[o,l,c],g=[i,n,u,p,m],b=[i,o,n,u,c,l,p,m];function h(e){return e!=a.ViewportSize.LARGE?g:b}function v(e){return e!=a.ViewportSize.LARGE?d:[]}},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=r(0).d`
:host([size=s]){--spectrum-divider-height:var(
--spectrum-divider-s-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-s-vertical-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-s-vertical-width,var(--spectrum-global-dimension-size-10)
)}:host([size=m]){--spectrum-divider-height:var(
--spectrum-divider-m-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-m-vertical-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-m-vertical-width,var(--spectrum-global-dimension-size-25)
)}:host([size=l]){--spectrum-divider-height:var(
--spectrum-divider-l-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-l-vertical-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-l-vertical-width,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-divider-vertical-height:100%}:host{border:none;border-radius:var(--spectrum-divider-height);border-width:var(--spectrum-divider-height);height:var(--spectrum-divider-height);overflow:visible;width:100%}:host([vertical]){height:var(
--spectrum-divider-vertical-height
);width:var(--spectrum-divider-vertical-width)}:host{--spectrum-divider-l-background-color:var(
--spectrum-global-color-gray-800
);--spectrum-divider-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-divider-s-background-color:var(
--spectrum-global-color-gray-300
)}:host([size=l]){background-color:var(
--spectrum-divider-l-background-color,var(--spectrum-global-color-gray-800)
)}:host([size=m]){background-color:var(
--spectrum-divider-m-background-color,var(--spectrum-global-color-gray-300)
)}:host([size=s]){background-color:var(
--spectrum-divider-s-background-color,var(--spectrum-global-color-gray-300)
)}:host{display:block}hr{border:none;margin:0}
`},136:function(e,t,r){"use strict";r(55),r(45);var a=r(98);r.d(t,"a",(function(){return a.a})),r.d(t,"b",(function(){return a.b})),r.d(t,"c",(function(){return a.c})),r.d(t,"d",(function(){return a.d}));r(99)},140:function(e,t,r){"use strict";var a=r(69),s=r(0),o=r(2),l=s.d`
:host{--spectrum-switch-handle-size:var(
--spectrum-switch-m-handle-size,var(--spectrum-alias-control-two-size-m)
);--spectrum-switch-handle-border-size:var(
--spectrum-switch-m-handle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-switch-handle-border-radius:var(
--spectrum-switch-m-handle-border-radius,var(--spectrum-alias-control-two-border-radius-m)
);--spectrum-switch-text-gap:var(
--spectrum-switch-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-switch-text-size:var(
--spectrum-switch-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-switch-track-height:var(
--spectrum-switch-m-track-height,var(--spectrum-alias-control-three-height-m)
);--spectrum-switch-track-width:var(
--spectrum-switch-m-track-width,var(--spectrum-alias-control-three-width-m)
);--spectrum-switch-cursor-hit-x:var(
--spectrum-switch-m-cursor-hit-x,var(--spectrum-global-dimension-size-100)
);--spectrum-switch-height:var(
--spectrum-switch-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65
);--spectrum-switch-label-line-height:1.49}:host([dir=ltr]){margin-right:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host([dir=rtl]){margin-left:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host{align-items:flex-start;display:inline-flex;max-width:100%;min-height:var(--spectrum-switch-height);position:relative;vertical-align:top}:host([dir=ltr]) #input{left:0}:host([dir=rtl]) #input{right:0}#input{box-sizing:border-box;cursor:pointer;height:100%;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%;z-index:1}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - 100%))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc((var(--spectrum-switch-track-width) - 100%)*-1))}#input[disabled],:host([disabled]) #input{cursor:default}#input.focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#label{font-size:var(--spectrum-switch-text-size);line-height:var(--spectrum-switch-label-line-height);margin-bottom:0;margin-left:var(--spectrum-switch-text-gap);margin-right:var(--spectrum-switch-text-gap);margin-top:var(--spectrum-switch-label-margin-top);transition:color var(--spectrum-global-animation-duration-200,.16s) ease-in-out}:host([dir=ltr]) #switch{left:0}:host([dir=rtl]) #switch{right:0}:host([dir=ltr]) #switch{right:0}:host([dir=rtl]) #switch{left:0}#switch{border-radius:calc(var(--spectrum-switch-track-height)/2);box-sizing:border-box;display:inline-block;flex-grow:0;flex-shrink:0;height:var(--spectrum-switch-track-height);margin-bottom:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/2);margin-left:0;margin-right:0;margin-top:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/2);position:relative;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:middle;width:var(--spectrum-switch-track-width)}#switch:before{box-sizing:border-box;content:"";display:block;position:absolute}:host([dir=ltr]) #switch:before{left:0}:host([dir=rtl]) #switch:before{right:0}#switch:before{border-radius:var(--spectrum-switch-handle-border-radius);border-style:solid;border-width:var(--spectrum-switch-handle-border-size);height:var(--spectrum-switch-handle-size);top:0;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-switch-handle-size)}:host([dir=ltr]) #switch:after{left:0}:host([dir=rtl]) #switch:after{right:0}:host([dir=ltr]) #switch:after{right:0}:host([dir=rtl]) #switch:after{left:0}#switch:after{border-radius:calc(var(--spectrum-switch-track-height) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;margin:0;position:absolute;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}#switch{background-color:var(
--spectrum-switch-m-track-color,var(--spectrum-global-color-gray-300)
)}#switch:before{background-color:var(
--spectrum-switch-m-handle-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-switch-m-handle-border-color,var(--spectrum-alias-toggle-border-color-default)
)}#input~#label{color:var(
--spectrum-switch-m-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([checked]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host([checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host(:hover) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
);box-shadow:none}:host(:hover) #input~#label{color:var(
--spectrum-switch-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:active) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active) #input~#label{color:var(
--spectrum-switch-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host(:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host(:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host([disabled]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) #input~#label{color:var(
--spectrum-switch-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([disabled][checked][dir]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input~#label{color:var(
--spectrum-switch-m-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][checked]) #input+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]:hover) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized][checked]:hover) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized]:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([emphasized]:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}#input.focus-visible+#switch:after,:host(:hover) #input.focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input:focus-visible+#switch:after,:host(:hover) #input:focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input.focus-visible+#switch:before,:host(:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input:focus-visible+#switch:before,:host(:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}:host(:hover[checked]) #input.focus-visible+#switch,:host([checked]) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input:focus-visible+#switch,:host([checked]) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input.focus-visible+#switch:before,:host([checked]) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input:focus-visible+#switch:before,:host([checked]) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host([emphasized][checked]) #input.focus-visible+#switch,:host([emphasized][checked]:hover) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input:focus-visible+#switch,:host([emphasized][checked]:hover) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input.focus-visible+#switch:before,:host([emphasized][checked]:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input:focus-visible+#switch:before,:host([emphasized][checked]:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}@media (forced-colors:active){:host{--spectrum-switch-m-emphasized-handle-border-color-selected:Highlight;--spectrum-switch-m-emphasized-handle-border-color-selected-down:Highlight;--spectrum-switch-m-emphasized-handle-border-color-selected-hover:Highlight;--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus:Highlight;--spectrum-switch-m-emphasized-track-color-selected:Highlight;--spectrum-switch-m-emphasized-track-color-selected-down:Highlight;--spectrum-switch-m-emphasized-track-color-selected-hover:Highlight;--spectrum-switch-m-emphasized-track-color-selected-key-focus:Highlight;--spectrum-switch-m-focus-ring-color-key-focus:ButtonText;--spectrum-switch-m-handle-background-color:ButtonFace;--spectrum-switch-m-handle-border-color:ButtonText;--spectrum-switch-m-handle-border-color-disabled:GrayText;--spectrum-switch-m-handle-border-color-down:Highlight;--spectrum-switch-m-handle-border-color-hover:Highlight;--spectrum-switch-m-handle-border-color-key-focus:ButtonText;--spectrum-switch-m-handle-border-color-selected:Highlight;--spectrum-switch-m-handle-border-color-selected-disabled:GrayText;--spectrum-switch-m-handle-border-color-selected-down:Highlight;--spectrum-switch-m-handle-border-color-selected-hover:Highlight;--spectrum-switch-m-handle-border-color-selected-key-focus:Highlight;--spectrum-switch-m-text-color:CanvasText;--spectrum-switch-m-text-color-disabled:GrayText;--spectrum-switch-m-text-color-down:CanvasText;--spectrum-switch-m-text-color-hover:CanvasText;--spectrum-switch-m-text-color-selected-disabled:GrayText;--spectrum-switch-m-track-color:ButtonFace;--spectrum-switch-m-track-color-disabled:ButtonFace;--spectrum-switch-m-track-color-selected:Highlight;--spectrum-switch-m-track-color-selected-disabled:GrayText;--spectrum-switch-m-track-color-selected-down:Highlight;--spectrum-switch-m-track-color-selected-hover:Highlight;--spectrum-switch-m-track-color-selected-key-focus:Highlight;forced-color-adjust:none}#input:not([checked])+#switch{box-shadow:inset 0 0 0 1px var(
--spectrum-switch-m-handle-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host(:hover) #input:not([checked])+#switch{box-shadow:inset 0 0 0 1px var(
--spectrum-switch-m-handle-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
)}:host([disabled]) #input+#switch{box-shadow:inset 0 0 0 1px var(
--spectrum-switch-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host(:hover[disabled]) #input+#switch{box-shadow:inset 0 0 0 1px var(
--spectrum-switch-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}}:host{--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65,5px
);--spectrum-switch-track-width:var(--spectrum-global-dimension-size-325);--spectrum-switch-handle-border-radius:50%}:host([disabled]){pointer-events:none}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - var(--spectrum-switch-handle-size)))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-handle-size) - var(--spectrum-switch-track-width)))}
`,c=s.d`
#switch:before{transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}
`,i=Object.defineProperty;Object.getOwnPropertyDescriptor;class n extends a.a{constructor(){super(...arguments),this.emphasized=!1}static get styles(){return window.hasOwnProperty("ShadyDOM")?[l,c]:[l]}render(){return s.a`
            ${super.render()}
            <span id="switch"></span>
            <label id="label" for="input"><slot></slot></label>
        `}firstUpdated(e){super.firstUpdated(e),this.inputElement.setAttribute("role","switch")}updated(e){e.has("checked")&&this.inputElement.setAttribute("aria-checked",this.checked?"true":"false")}}((e,t,r,a)=>{for(var s,o=void 0,l=e.length-1;l>=0;l--)(s=e[l])&&(o=s(t,r,o)||o);o&&i(t,r,o)})([Object(o.b)({type:Boolean,reflect:!0})],n.prototype,"emphasized"),customElements.define("sp-switch",n)},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a,s,o=r(3),l=(r(19),r(0)),c=r(28),i=r(8),n=r(122),u=r(25),p=(r(48),r(72)),m=r(96),d=r(41),g=r(116),b=r(91),h=r(23),v=r(7),f=(r(74),r(140),r(174),r(103)),x=r(22),y=(r(43),r(24),r(67),r(106),r(26),r(11),r(9),r(4),r(2),r(20),r(69),r(15),r(13),r(14),'<?xml version="1.0" encoding="UTF-8"?>\n<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72.593 70">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: none;\n      }\n\n      .cls-2 {\n        clip-path: url(#clippath);\n      }\n\n      .cls-3 {\n        fill: #000b1d;\n      }\n\n      .cls-4 {\n        clip-path: url(#clippath-1);\n      }\n\n      .cls-5 {\n        clip-path: url(#clippath-2);\n      }\n    </style>\n    <clipPath id="clippath">\n      <path class="cls-1" d="M55.17987,45.78332l-10.91522-25.81523c-1.34225-3.17266-4.44734-5.23411-7.89223-5.23411-3.45115,0-6.58049,2.06884-7.91878,5.24993l-10.83775,25.80878c-1.48376,3.52689,1.10033,7.42613,4.92664,7.42613h12.07027c-.00007-.00022-.00007-.00047-.00015-.00069,2.9632-.00755,5.36319-2.41132,5.36319-5.37628,0-2.96962-2.40737-5.37699-5.37699-5.37699-.12107,0-2.06235,.01574-2.06235,.01574-.87239-.00123-1.46265-.88979-1.12558-1.69447l3.84805-9.16698c.41745-.99654,1.7838-1.001,2.20759-.00714l7.84941,18.35116c.84184,1.97442,2.79245,3.25565,4.93883,3.25565h.00004c3.83485,0,6.4192-3.90368,4.92503-7.4355Z"/>\n    </clipPath>\n    <clipPath id="clippath-1">\n      <rect class="cls-1" x="12.19374" y="9.73375" width="48.413" height="48.485"/>\n    </clipPath>\n    <clipPath id="clippath-2">\n      <rect class="cls-1" x="12.19374" y="9.73375" width="48.413" height="48.485"/>\n    </clipPath>\n  </defs>\n  <g id="Logo">\n    <path id="Background" class="cls-3" d="M12.844,0H59.744c7.09354-.00276,12.84624,5.74546,12.849,12.839V57.156c0,7.09354-5.75045,12.844-12.844,12.844H12.849C5.75545,70.00276,.00276,64.25455,0,57.161c0-.00167,0-.00333,0-.005V12.844C0,5.75046,5.75045,0,12.844,0Z"/>\n    <g class="cls-2">\n      <g class="cls-4">\n        <g class="cls-5">\n          <image width="102" height="102" transform="translate(12 9.52) scale(.48)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABlCAYAAAC/S5bMAAAACXBIWXMAABcRAAAXEQHKJvM/AAAgAElEQVR4nM19faxtaXnX87zv2ufcO2AGg1IlarWDIikVP0AZ6cBAC5agURI0GvuP/yg1MbHAf9Zyj9+QmkC0BiKtSWt1EkempCXgNJFzsQMUbJFSKHS4VIRCp9OB8jHcs/da7/uY5+t9n7X2OnfuvXPOnbuTdfdaa6+9z97vb/2e3+953o+LRERwmz/q8QehXr4M06V/BgBkG6w8n/JAgHTvvbINP/rm2/3nyuO2BqYc/UsYL/2LAMbaBnBNYHD/Ob3sXhje/GZIL733/H/ETT5uS2DK0b+G6dK/Yq4AzcCoNw8MP9IcKGHQj9yeAN1WwJSjt8B06d8EABiYeg1gYLG/eERQcMGe1M/ll94LmQG65/YB6LYBZnzFa6Ee/y+GB4A6CKcDU+2d1wFMfA4b4hykzfs+cNuAk57qL1Avfxi2+Q9Dvfwh+zpJWwyXrbl8LOlwysunfAziPlDja14O4199+Xn8zBt+PKXA1MsfgfH7/hYABkAcnHZ8vQCtvbby1oj58u0IUH/xGMa/9tSD85QBU/7522H8/r+zDwrOYwyugoPXACo8lpetvX3ldfrQMUx/46kF5ynRGPrgR2F85d8FoKqb6IoJvR+3fTMBsl8BV7UH5vtPAEYjJgSCBr3xeyW95F4Y3v2BW9087Wvd0gd98GMw/pW/B4AZAIfAmAxoDJHn1kLaYr2tT2HJNRiwKviwACUtNg5rHz6G6XVPDXNuOTDjD/x9A8RAYYCS79uWsu2jNSL2EOcNHD/0Gprhx7MIeQoQi3tBjutHj6G87ejWNZA9bikw06tfHxhioPAGARQ51lbEpUuLqs2vyxb+wIpPkLdFAPI+IH4N5pXrEKC8/RLQLx3fyqa6dRpDv/hxmF79DwFoMm0pph1F9+1Y9abMX2+aU5oetZwGQ8KJ4acsksjIElyyZsmgyB7oQG0evnVyfMsYM73mhy1kDT18pQ1gOtDQJcfGIAln2jIYmeItGsManKIr12jwvS2HzY7Rzw22ZYD647cupN0SYOpbfrqDknw76CDhpgMSQ1zSDWf6gnMWrGlKWjkX3PgqOGkR0gJIvpV3XLoVzSWPWwJMeet/DYK/MVAWuuKsaeDNgcLE7EmmLc6k2PC0D87CAuNSPwIAmDsz9nQmgFPfeWtYc+7A1LfeB8iN7b8+bTpAdoxpkGtQADBA4i2cUmNUBATl/Ir97Q58HxDzFhEAHBbhbAlOOK7/8daw5vyB+bcPAOABYDqUZ2WM6otuQ9AYPcbc9QYllDE4qADlrM/J2JNwxhAMLmvGnLyyv7THuGBJ0JemOxuA+hPnz5pzdWX1xx6A+mP/vbssdmTNVRVzZKOd82d2bbw/2X7YoH8G+fXsztA+8zQXZs8UQXJiRsBO0554jZF/uHy+Dm04zw+nj1xRPZHGzbbtrCFBmUCkVX6xupxu8wtW0hcXbFa4zksvWLnFqr3XTq/c/TGMNeFfC1XQG12YF8MezlkkX/tXjwH/zPl1EZxbKKMPfw7gI58HxI3qB4coDkv5goKVDwHyxjRGN2mN7OK/aa5MWiJb+JKQhu0YM67aX8wrYr+iGc0YbIIh3IQQtgkhbeiA0c+cbzg7N8bQ2x4EYF3hcMN3NxhroEjliyQk+a2OwgwR9sqvkbKqDqrrjRagxU5JUDs15PNgUXI5RehnYcyZsFnoz/K9EDTGztGnj4F+7Rjw+efDmvMD5qNf1Lue7C7nhkxk2XsCpKTgZHtNHsXqYKiaw40lIcy+5uy9GEQjASYLecsGRlpl06m2eOW5aREu3vPpywDnBMy5iD+9/TLQ23+hlVD0DjfxbqJu+9xwtG3iT/L6jsuddu3OXhv7+eo6tZNr5D252meV3nBICtiyVrbI8CkagmUtbZlsRlPBkfa+8zEB58IY+vcPAaQLrbFRgFBLQ+B3+mS/rpqeYwhz1CLcrC5WzYWxNiE2UyCBLNtnyfmq7PTGlV9Je/qCMaFE05a0EPsli7CDIiHtgSPA1579WLWzZ8xHvwT1B++zu9esrxcf7RwJQ4o2JEyBEfysLNDzJ3oeJ4C6lWcylsg5sOsl7FUDxrbs+2RuS4ucDQxYZPprzAgubQbgokKQ3nX2rDlzxtCP/7KVXChY5NHyjSq/SDViZ6GN9C5nFnmhmF0ZN3itoTuR1CCwblUfJeOdbaAhbZkkylYX+Qztg+GtsMj+m7bAKe7O2fjwMcCfPFutOVtgPvbbQP/7UQVGGj3045KxQ84RILciFusMnhZ2amehx5MTCF3IaN0GoTYG1vB+jg1FzEEGMkDsYtESDXW0YgQwLUDCACAu3Bzfdw8eAd7OwCgo7MQGDWNoAt+yfX+YPuCkAIGLOJjxdV0ZDOAMJEmEhSZwYPxzqog8efjM1jfTGta0JytjVOBRrvMy3qpDi6FsE66BeamGvnA871E9g8fZAvOOz5joVxP4Yr+k9tBDpg0S1ub1k/7jjB0JWw4jBUsyMyDZoLGDb3mzxEpOHqhRrK5moSthA0YSUgdtCOFoTfQHmDNvWY32Mg//rP95BPiKszMBZyf+7/wNoHf8erDH47xHEtlxlVAXY8s76ogXed4qw3ifzQE/t327ls0AH+dpfp6BTsEQJLfPk2qMGwEJabYfQpEwLCSSDawIWLTUw+KcF89/9OxMwJkxhn7l61o9pgkQTbSbG5vsF5WuPW57OJxhAhIDsOvduZiB0LQpeZ0fQghTwDEVMQuEVg0QZmRr4EFBTBTYYCUdZk0MT7FONszZELVmZqlx4eweOgJ4ydmw5myA+eXfA/iVb1nBMlkoskSy/XKyEBYTianVRlBCk8cJtL4Xr7xs9e+YvmhPM6lrkwYbNZFEG2+WVT80jCVjSQhhyV8PbIlha+hfY1VzTqm90VdYa24jYOhdv2Vxv5rNMeH28r2VWvQXjCHF3s5GxWgD8nXeGVa1vwWscpAsK0TTLDYZuV8L0tk2dV1JCOQMSVpM055KamGIYq1smcv4V96E/Will4bhy8e6PfvJO7SzYczHrxr/daRkGyXZbrnRGtzYwde0vvqiz8kZxJ9hVlbAmnpy6rUw64NBOABiNrUuaAQYBg1/Bgh6NXrAXg1w1rBDO7DvsQxbwyJUQRD+pVmI4fDjR7cJMD/xiN3FaHkEl0jU+uo/1lcvzAFrwCpjxkgMQA2hC7vbylnCG7meoIUmeXA4K8IwNhQkpsG6DLKFUbQQ5jnNgAudcY2xsAahv+Va3QQxpMHKuUfPZvzZkwaGfvJrmo2LbTWmUNJ8BFN3Zg0EaiyRKjJaIbONwHS34+wBC5PFNrNL0l9DwiikEYjfa05Mxg2kAuQhTMDRDaNVDk6L0oINS1YMKyCsdbzx9skjgO95clrz5Ozyf/oawE8+ZrlGnHDkFhkCMGMApfQaGLsqODF9MfvL4Snt7JlD1VXd92O4CpD4uhPd0glQ2gLK/k6v4deHnVrxQZNddXBVGTLUnoim0CHmN8aBNTgFnYmNv6ylLRn2uidnnZ8cY/7PzvzjFOys7xvXrT7WKskODJr2JNMfYYMNuHBmtUw75B7J8hO5PgEl691ElH20gYISupghJvqqMfYdN7Qenpbin1ds8ZpNXmPWZ48AnnvzrLl5YBiUT0zWF4umJ6YXXqrHwCAIQh+HG6E32NTBwBqcVDUWHVo+sgESpk19RKd3R+PYXBg6YDKqpq5n9KdZ39MqznkFgLWQxs9fZ615KoD5hOckZL2UVnCUJM/mtjRgfHRDtRDmnesm6m2wnjNj6HoiDFFQyPOebBrDgLGuMEjJWjvbOAHWqKVwe/l/WDTyJuiNVwNgASIsgFs4MhoW575xDPh7xwDPuDmHdvPA/NRJB6ZpSeibT1ZQbMBgqI9ZrHe35SMxEcKYMerZt2iDVRDwEMhEXzvMRnNZYKKv76eNhkWMQDSAaCb8DZhlOMMFUJFZAQTaLNhjINHXLwPeJDA3J/4Myk9dNbEHY83a4ghhdpjg5Z1j0Qjs7I4fTfDZYY1d9NOJifkJkIj743b8bYB0FSBf1XP5RPf5PcMWMJuBGE4A+fps4DKTBuvhXGb9ayFsLWQtOtBo4cooXJ/uvjkTkK7jmv3Hfx77wO/VLY7QDsNhfYAwhyY5Z+OYZdNz1IbQ+vs4ieTzOjqT8gWgPIg95nOy5QOgvAHi5HIziLbQkPROzqjsYRBY9A+MBXGLIy4jSAfh3GDXH1ivRtia5R4CKF51/vLNDXO68VD2qzWEMGUKhX3tB0shtDlbTIOQQt/8YrS3a02i1hVMEsaygVaEWQwMj1cj0ZGuKygg6Rg2ZWEGGhBwsHLP4H002NmyFPylS1v0iC7Z0XIgDNfbxufro5dgePaNm4AbBoZ+xvo6KnV9oQgAaIeVDDMK59F7I2sQ/TAo3LP+4OZIhP+ijriUupcKPZsAZVAc04wh5qNqi3SEJQs3dk7O126ZcYUpp4j8nsB7GIMFSNBDmmzfPga848a05saB+aSWVTB1hvRRLu0qbVgfI+bnvBKA5tIwGoPwo+Xjqt11RRwYl13IJtTWdAiYd8oODmGZk8gDSKxPwwgoLNJRmhpqkgLkujKsZP/LULboGKO8YISDgl1PYhijAGB57AiG8wSG/ouHINBhSNJ371bXW9SvRpv2nXsPprOEB2RgCewIrJGOMzUJ8jdggioWegRiUBgICVOHUkmuSTvDeL9IGNsYqw5F8FOe5iWZoZ5eqFwbNbMMXSsC34CDDgoFgOr2GNLJMaQL1w/ODQFT7iOt1obudvLkkqhV7DsgFsIIbSEFf712YFsY87kw6tZ8xEtNBxLSSJ5JmERSBxutXnYooUl15VBcV2KHxroyZLHUKWuvJpuDxGFswMYczLU7rdOKlZEZeQFIWgEm9RG81QYUlu3l8wGm3qdoUAtdFFiio16o6U1DoIFDs5CGVsCsNmcG7bOTQEpSVdZwxnpSsUDFC6Y5g9wMHNZU6LNViA80jA0Jaj6AlEaZZ1M9GR0qpFT0mJmTi7BHzMFySNOwAOgUO0wOxBBCGdpQbezM4W33rUuwufP6TcD1A/MpHu/dhm9L4zSzhRgAgVA368fYxUi/NHgXQGCNsYgBKcwSZk4aoOBGwJHwhFsgBlPClU18EofGRcqdTLZFAaBAtkozbTIkAWzQyzmnGVIAwwubK5XktaQyODFv+AZEeK3iHKDtt47g8OnXB851AcOglE9pyZys0bHNawlgQNeJeMpQCLaZQt+Lfqb0zyQUPamsJUhQk45lZpBYS6q4MM112ABIyZ8r0qY3OuWDgZkAs4Y65NAmhdINIIv+gAYOqVMbUFnjNn0tsVxWA/ICFOjhiyx0LTcOadPVS2cLTPmU/yHrDPNWj6zwRieYhzE77Bgq60iYUo1wSYEAfs4wCUuqin3aWCjbQIVDqGKVyXRnhJQOhWHsyNgg5LSDlLNoUs6jsIfaSBlLfJOCkNi1tdH/dR7KMs2BcaZgd1x7bAnAVAcK+j4zaJyOYTM8sdZcFzDjf+v5n4Ljom5fuDlnDAwIU1/AGOZOzcIgeigDDl1atmftUNZkqCkLS2QfMhQBzWwxD1DHAyhiAkrrlk6p6jAATrXYlSWS/JPBEd0J9Sy23DJQ0BpdQ9xKNXnRmcaPmkOeAov9AEwDCNWbPr49gmecBTC7+xVphHDXi6TgInpZaAO30zBjFIVFFCiAh8bE/kMSFGEQirObYANFtIZByaI3lA4hSV2NQdSiZrJCZ2LtYdZI98BgelSAhkNrfFKxbrPYdzoVY/Bhs3VulQMAM8eVg7gbMBUX+24EoB9frcfwjOsgwxMCc3K/DRGLFhmaTmujuwHwtvfzVgXo+Li4d5gR1FSQgJFgSvr6xACJ5jAYgwBQONzJxnpyQRhSpe+lqM4kZUxJEwwMEhYRfbC8CG0MQG6hsADZGDT5jZwPtaFPcYjTXFMoAOQgnBa6SquG2HUI8PXxCO7cXFtrrgnM9Ov6RzwsIbX8srV8PEfxvN0lEEDyweTOGJJG1tf1xyEUYQ8Ka0bRmCrhjY8LbMw+Z2ECJuueho2EPzYnG+Awd0E0itt8I+GNXZtXk0k0SOLd4DW12ud1OhhDB2cGRF6AkqwqyCBEcFaOnTVfLZeeHDBX321fgroj9snFHtciO2YPAitueiJqu/aGaqB4Dw2DMQpDNEeZsMDIGmOMmcSlgQIAozwTXoBk3dWsP4mZhhU2SWeVHWCxQRkEG0mV2CSoza4S/riWljWEZauheZEzqQHwouUsnBlDanh2pkQAStAWP+cgPVaO4Jn5dHBOBWb8DMDuM7of1w2dgRN6XmbOOIh+NGk1AtPA0er0xJYYAaakyj0JOFWe1T5XafwRM2Q4tJk1WpPTEbQnoi9TOoQxPQ0GqSLoeObinW1cIRD7zKUarb2RzJiuffxZTkFnaJZQQtoHZG/fAKkLpvhcB3/9G3QMz7xG1/OpwDAoNamgJEJjRGdAY0pzXf29Lnh+rhJY+OoxV4YF2hcWyvNotEQw2jgA1pidgKKgqQYpe04kX9EEVMaVSV7EVqFAAl1D4AAqez0YEeEifgMyHsp7+JcMyaoJ3K+TrfNMQINmpX00JyWaMSaGrgjKZL/ZQZkCQ6YAFNjxCR3DN+kYfh+uO7RTgfnme0itpVjhXlCBEMowrH4ctcR6aLzI3wAWenvtGalR3H/MKKFIHdqYmDWdObxWgDZ1hp00MmghVFiHYqe1XwvFjbGT45LYRqy5zTZgM5AKTOmCPJNUD0bry6l9rLMN6KDkmqIlopLD901zhkwhhDkwTXugs8ZvTt7/Uj2C5+UbAIZBqdiFnQIQ7REdmlf9idpdIl/AmFKhXxuZImzgsJnUmbGOMHuK7GtYY2c2mW3mz+IftROItNUyPC6gECTYIsEhagGVP+sO69pOeAhJXBwpODjBgFtNWpk5zW5jH3Ng+uIsKa6JOHdcckOl/RDmjV8CIBVbR7vqDJw+anMVmKu/oY2GlkxGe9zB6eA1pjTdoXa3xH2weWPxiwsA9qOZLTtUA7CTqRkVJlAWbZkFPmdAKgH9M5G2UtLJ9vkZTqCQgn7Ajo30hihyjQ7fZdPAYU8TUh/h6aUkHa3jAl6Cwyrt5tFzEZAWwqCDMkV9iYDZ8W/SEfwJ3NeaPWBOPsvA2AwtX63CFb2Xt9odEHOZpT2O/2WCNAy2EWY6BwBJpzIZW7b8Q0DLMztIMMr0cxBwtmIEFLyKO7sxdMucvzATeJA5oDgw1hjWxsJdDtynA1b+gQp3yPi/EQ65KwGnzhKuPGQdRMiJbJEboCqTPYdKASy7qSYv8Us47kBMIYxFxsRhKg/TpesD5qs/rw3oYax1hMXHwnEheQwN9tiAoLBfwmrJDtLOnvlH7JKFM8lhqrBnEsG3H4kkWcrENTPIUGmEQll6iQsNsCFWmB1kYogSHOBVm8PW12lOolIM+Q6+zZDjBBvc2eCOarmVloi08dEAQsmN9MagdlONFnaVMTTTk4I9bPlkRwcEA4M+C0fw3IVD2wPm8Yer5AMQGn6pL9Q9miWK/awyh9pdEfed5iVsO7/zJDsheZb1L1j05XVNRCebQjsyk0jv/omSAKS2adIBL4RiAE4owx2EsGEGcniz9QYGGGEDB7ClC7IwxCBhcIIiS3RlSHBiYa+071SkPFTleQdgOZSC46FY8xVsv1fOBwCmaARCmsHHj9AxPBevAczvvpcsdpPpSU9Wuj2mnqtYwwPF/5uC2p3CL/U1YKnH3UZz9EVKYIvYmMEhbSvXZBF69lpbuRbhhK/HZC5vggkGqDVBzghb6VYZAOoEmXawqxku1AEmQqisOaSrbvjKtNJlAE+DXUU4kBkKW4G50IHo1sTwcB6kgRMKaFibAA2calHAZpdaVOBmG0NqUMI+wT57vgLH8DtwDM+C7tBmwDz63hq6jPVj0LN2S/3jeEvParH9IeqZrpkDMkEu4Q7hcOATzUdbFP6kAaWgnNiPG8Uyk4YQAQb0LraMb0faaBrONrCpOxhoJ7lhIZ3BzMygWgUcBoxkdY4CU61wgRAuEsFIxWYHkrBmgguQ4KoEvb7wMAo41X7PCGoUaogAfNNUG4jSRD44MwjRAwJAX4HL68A8/jC1KnIstfg+mRWuATgKf2x+J1AIWUH0ycCwL7ptwJCErJ2dv2oiKpuEE77jNb6f2D6f41CmjCPRlYkIDknHrB7WDAMNUCrCVBM8TX5DgVRHYUipzKAKVPndowCColeoo3thC0SHspIg/y2uOpA5Omf5iP2mJHu12DCayAiPGBB0xdsL7Qb9GFyCFwSdacA88r5+t7u0tC78UPZ33aHouJrIhz9MQeSpOxRuXF+HaTQ94XM2KdxYgramEgp4AqKEtaQ/no2ChSfemBmsKXzz7NgA1Am2NMAhXYVtHTSfYlCIFUoXH0K6CFRHYc+ukjCOjU6iquNBqs6E498xyWdPZn1Rvr2ART5WoQa3pZqkAk/7moLzm9hvYBJwjuBFBo4A863PEXzzYZoxxUNZ71/pNRf/YIgfHOLpFMLctMhZ/HUV1rb4VQNoa0yqOp2puTZdGQAldHFDy3lStzWJLfZVGzNQPYChbuCwZLiYrgJVAqoFSkEYC8A2JbizTuLqqLIWTdIzsEkIB3wtd67JgnUkn8tAToSBHaCKY+G1UhL2kM1Bde3EEMIpzE6NQIXxqvAhuDQH5psPQyu/xwSSDHWg3iHkQk9R4D2GkoWuFYFzICrp/mSNPhpzfC2lrYWwnbszey+HqavGrIl0G+Xv18ZASSSZMawlfMfb0ibsyE7oos5yq0+z0HUHTHWC4sBQhYEmyDxFvQIccFGVFyPyybz8u2jQup/NIN3aGCWURJjEjCs81MDwyscSHIoRKCScX4Rj+KNwrwLz5feXBkccM9FnFocPwvmHzny6P1PMbjGwxISfPGR1AEpjTQhn5uC2Abwdhzi+QwUsEEc2pf43q4HFtpnKRUkIxQzUHSAdQK13AJQRainiBK8mgguZ4LBWyLXAkCf5xlsqUPkzKiewRX54Na0Ve0xDE3kf2qjOLZlBN/ts5fgKNIs0NexDCGdfgMsdmBoAafkkzs/XBcJNU5BmzHBb6ED4nRCZMZnujM6AEKpOoIv+JBIcmEPUcgkOLR4SycJbtTUZuCc0FYTKQ2O5e60eQKaDtlTKiaxBsAHOaogOoNAh7Ngi14swlAoDhzIucNr6m1hLW9ZmsjvT+6hqa7BqgSy1MRGTtVhy9jB0raMQ9sIab5+HY/heeDMMX3p/nZVSYiYZKvmzeOhsagVJA2lalhxQQ06JoDRnhp1FBsrYyhbYrPTyml0wEg5GsYZSUEB+vFS2iTUlw+PpDqBSxRRwjkNlBzXvYFuLhLGDyoyaYCODaSYY6iirCepEuWLzK0jF3oBJlkpMkkZMUjzyxi+WoFdr0NTqh+rWUmPYvF15+5wVNgdaMgbmjxkgM3SDliyqptVCUA2NWKkzqmXx1IXd1/aLVQHXora4FjkLaXa+OjACkjVEsJBaJRjg2/UCTKUC5S1QvSAgTPUAdvUQch3hgLaQ6AASbSDVIkDyWGi251kSUzfLOvySDBR2b6mNtNb4kqwqWI3RXQ46g8A+DRZty6wZyGo8PsYybh7a3BhoyaWX9mMIm3v2DkJLJLE37GT6MGFnkOtJC2uePcP8fA1MqYExERy+iGuSpSYokt8k4IWCJ1kuOMGJhK8N5LqBDdfc6gawbuCkXIQNj1WrB1DzpK/Z2muH0j7cyLmFOF2SWBPdZKLuLch5lY+b64klzUKSH4duSNmuwGXTmDBYj9plMWcJ1Av1LlgBpy7v+uDCHIgxhLmeRPbG7wzShG0M79EQhpa/GCje9zP7v8xAXFWtZmeLTnyiupGNwdAE9ADGegFS3UnGn2VpyANlS52ke4BH4Yzs2EIJko8GAchHlMe8PkFCAluGwpbC6163cwQhjMJrwPLz8H//R3dk3n+ypNYyb/Gv5695WCFrpBHn7PHXC811J2pPWJahvb8asAXn36N4ecSd2HIKaPjyMrqTmeN3Jucj0vvFoChTDuW1DEnqbIeQZDHVQdixgX79Jumi3pM1Bnc35OYElDVgzBJwWpe6Jq4YSlg9O3RP18ESYFxfeqjqYWxZ32nJUOwmDdaYcM6WAvtASD4TqgETwQyYFqpwAarryaL8Qw5KBMNCmVxXsrizIoknb9p5z/kOMyeVAyh1gMx3fR1kGyRfyWKJN6SjAVHKOYOtbwOgUCfJl8j6roYWb1CURNcA12FVDpjmViDnUmBMhEaAufM5CF+9EliCezfdft4Sywk4v5P9Do6MmIUtgpnTcuMwRf0JTKmLv1kiILF7m3r+Jef8v9HMCFUafJQ3FMlNkuiNj71gY5CYPQJAFjCYLaxPXOrhinXiUEZD+2A9V3X4lNTZOLfKEsJcMSTRtf8Er4Zjb1zCNsJYHinkOsOdz0nw2JXSNWXFwsHyLl1oSQxnbpNLyDWi84qAciNFZvlxDWEsdjJRAGSmgw7Gst+oWpnGcu5q4cDrWCQdayg6kQU8XWh1lBA3SNiS8k4eRd5TW664ShLLLBuEOerYhAWUmmIgapE1piIpTEhBG1MIQWl8AMvQmLDIX5aJDwUQlsBUmocif20MYWxCL8fsJ59LkPvfx/nfo3kYpQBW8y9hArXfpfqGpCBJPU3nRUi3s2lOhTgSSP+zVLI542M5hIw2NqBmG1FaRZMyaT1Zxb4KgBhsiOiTjC9wFmEYTWz9XtbX4iHtr3OCGcPRaeFrLYQtbfKeG/PSN85LNHvMon2AlnbbE9jGlOblg3MMP4BISyBJ/na1zrE6/2/MsBpwqjkc2lJVRrCLyxbOBCQLdZlnC4AyJskInSJd29mYIj2gsk+toRmFZOAoX+psjq0/UtB1fgzPeVWChx8sq2B4Gyzv5NjYLcGMZf+wevKy4aVfnHAG1Ho+1Ps0plU29cQ4RArLsGPxHLgAAAbXSURBVI1rrYGq6Eqysa1y17aR4DJfA/y/Q60GzsTPNUNK2apfbNsHKXQ6J6S8wuGMjYHNyGYQMloNwCsENntbPYC6ydxmPOico2Sse12sLv/+uxB+9wrtAbKnKyHel1CKKeF4Apwxp85Y1Bt8piWL4wrrHXGzZG2eq7WQpi6AWroHAaRKut9H+rARsABCSUKT6I5tZGYgy5L3Ft5AGaBMG4QdXtFGA6UYfWVstKlGJp2R13IWSUAperWZETBgEvzOlbLKlrrI8meNughF0yJs7Yc63ANgLURGkY+vRRDaPs3tfjsp36vaIlD2123OBJq2kA1OIyuju960ib5WzZ1I/1NuAUsS0GoaU8HzfjB18QZPkrtg+38Liq/yZfmMj8RVNhk4BPA38Z92YP7AXQifWZTzlyFjmenPnNIKcGURxkbCBbC4B8j8dbIxz/ulotn3i5WJMObNBUh65G2FDpmnCWuCZbKFvqanOjXXHweFN8l5kteRdQhhstxeuqd1ZFyzyZbRtO/sIa3aUp1AffbhC+ClM82BZ96F8KdelVdZEd3SXgdYcGOdRTQDM74/atJpjFm7MfxRaX7syaWD0t5DNuPNnFn13pLq37n2zXIb6dcpOqKGbyLuTpaNu7NnvxOte1whGCnDjvx9Sa+X99iYBFL4vGZXbLRPBbSwr1rFn/238UfmwPDjea9Me3fuaXf0E7GmJYG4/vpp4assgAFnQjymlddbkqn5RG0g+bH2g+jfrPZMMoCv2BCkScaNqSD74MXOeu0b8gEgU8y/lj227fre8JrP9WM/pyZIj58PL4PvWTLGH3/6VflUa7w0Aqv5zMJN7Qn6tQCm7qg80uyJ+0JkInvaNdhBERDQ9gww3azDqiYDoDbQiowlKzok1vqb9I7XMk2VioBP+EAZ18nMGilbgpzkeXKGUGdXf48zC+09CD+I/2T2W2bjyr77lQkeuVLhkSu0CsjyeJ6H4CxkrQG3NANr9hxmbOj6EYYfBgemSHiPoEtGl47upSkW1aJ7I58OXsIMOJ35GmvVKuh+lETkJYu3hFH/frIyTdcX9WVquMG0K2GvqfHjz8P3wgvgnhkwewvJPf+VebXRrhWuvCK6xqrlHe9t4izpbDn9vXEmdNDrPdbsfV8pa3Hfv+YqIEVMbBokrLH1AnSi7GirPJXZcNYahr+WNkYZbYiu+C8BysNUMW3R8JnM6PTQ5QM6eP8FeA+8Lb1vCcM+MM+6C+H7Xz+cGnqWorzGqLlR0C+wpxFRKzC6KwOBwN6He9fPBoTYTiNDeJHMCjeTIPMnBq0yE8Ddz3q6rrjhHVptAaGiCz3YKEsyfWoaYQMzorP0YUw9XEET/Wo3QXXQLNz9WbwH/l167x4oq8Dw4zvuQnjV64dTGXMaYKeFpWu9vkKMhbjv68t88kEYS01uAJQpcZ63MkV1hZlz//c9D+6/5y/A3X/wTmPL1maYVRv9Qm18cnWAZpt31nWdqOggGougi3tpI0f13J/De+A/pJ87rSVOXxPzD92F8AOBOUtgnijULRu0n8fOiuX7aPF5CwT92BcXnPXDLJ7nnxPmfpcB7n/1H4O7v+Ppcum7X/gKeNN3PV+6kpUpusRJtWVV1EDATMfcXFArPeGcMc6QxpTUxqjxxpryzvyeU0G5JjAOzmteP8jzaS5tDRhYAQisgdp1i4S26e6yD3WFXrgArz2HupnHPDIhlND1RzZw/2ufCXc/++Ls8970nS+En/3u19mqgr7GZ7XQVu0/uaPmGj10OSsag8J+acfGVDMSP5TeBO8aHrgmKAA3sLzvb10heOAd0yIJxb2yf8z4p+bpbZ8WQ5L8ullH2bzepp1p/Xg5tU4S2rYggjmtTDbbmGyBnwJvfNkAb3zJ4RP+zrf+9gfgrY++X0IbLxMsSwRn3kZd8IErzPIfCU1hG2Vep8yKTpPsy1RCtNU5sMJfSn8R/tHww/CidPf1NPeNr7v8S79Q4UMPlj4nZAnMbD8MP/IuZOoDL+KQpKkNZ1oMWQJog7TrKjDQF55LEADRBRXecG+Cv/zHE9z9nde/kvFDj1+Btzz28/DQ9tO6HjQDkxQMfR7tf3kqCoqD1IDogLw4vxBenBmUf3wjzXzz/xvGF68Q/L/PE3zwwTqvi1EYUxaGx/qw2ELzQXz7rLkGMHEK3WIGcUUHBODu7wK4+y6AN7z85paVjo+3fO098ND21+Ch3Sd0fbQ0tmcFYxKAhDENnApvOPgheHF+kYByM48z+V/9vnCF4DdjUhqs5NIQzPpx9jJ/XH0t2uOlNjVdQYAX36WgnNdDAfpkm9XsC65K+d7OvfHwHzz5Pw8A/x8LTvtSy5F67AAAAABJRU5ErkJggg=="/>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>'),w='<svg id="Badge_-_Premium_-_S" data-name="Badge - Premium - S" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n  <circle id="Ellipse_24535" data-name="Ellipse 24535" cx="10" cy="10" r="10" fill="#242424"/>\n  <g id="SL_PremiumV3_18_N" transform="translate(4 4)">\n    <g id="Smock">\n      <rect id="Canvas" width="12" height="12" fill="rgba(255,19,220,0)"/>\n    </g>\n    <g id="premium_testing" data-name="premium testing" transform="translate(1.334 1.573)">\n      <g id="Group_173774" data-name="Group 173774">\n        <path id="Path_124080" data-name="Path 124080" d="M3.556,8.936H9.778a.518.518,0,0,0,.513-.448c.109-.783.914-3.419,1.037-4.307a.519.519,0,0,0-.8-.507,12.758,12.758,0,0,0-1.283.987c-.237.2-.467.39-.694.564-.189-.333-.375-.688-.563-1.042-.292-.552-.585-1.105-.887-1.593a.539.539,0,0,0-.882,0c-.31.5-.61,1.067-.905,1.627-.182.344-.363.687-.544,1.007-.227-.173-.455-.365-.692-.563A13.035,13.035,0,0,0,2.8,3.672a.519.519,0,0,0-.794.509c.125.9.929,3.528,1.037,4.307a.518.518,0,0,0,.512.448Z" transform="translate(-2.001 -2.36)" fill="#ebcf2d"/>\n        <path id="Path_124081" data-name="Path 124081" d="M10.167,14h-6a.667.667,0,0,0,0,1.333h6a.667.667,0,1,0,0-1.333Z" transform="translate(-2.501 -6.24)" fill="#ebcf2d"/>\n      </g>\n    </g>\n  </g>\n</svg>',z={"ccx-specimen-card.activate-font":"Open in Adobe Express","ccx-specimen-card.open-in-ccx":"Open in Adobe Express","ccx-specimen-card.premium-icon-tooltip":"This is a Premium Express template","ccx-specimen-card.activate-font-tooltip":"Activate font","ccx-specimen-card.activate-fonts-tooltip":"Activate fonts","ccx-specimen-card.deactivate-font-tooltip":"Deactivate font","ccx-specimen-card.deactivate-fonts-tooltip":"Deactivate fonts"},k=l.d`
            :host {
  display: inline-flex;
  box-shadow: none;
  border-radius: 8px;
}

:host(:hover) .overlay,
:host(:focus) .overlay,
:host(:focus-within) .overlay {
  opacity: 0;
}
#wrapper-highlight:hover .overlay,
#wrapper-highlight:focus .overlay,
#wrapper-highlight:focus-within .overlay {
  opacity: 1;
}

#fonts {
  align-items: flex-start;
  display: flex;
  height: 45px;
  padding: 10px 4px 0 0;
}

#fonts li .font-title {
  display: inline-block;
  line-height: 1.1em;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#fonts li .font-title {
  position: relative;
}

#fonts li:after {
  content: '&';
  margin-left: 5px;
  position: absolute;
  color: var(--spectrum-global-color-gray-600);
  font-weight: 600;
  line-height: 1.1em;
}

#fonts li:last-child:after {
  display: none;
}

#font-list {
  color: var(--card-font-color);
  flex: 1;
  list-style: none;
  margin: 0 10px 0 0;
  padding: 4px 0 0 0;
  width: 74%;
}

#font-list a {
  text-decoration: none;
  color: var(--spectrum-global-color-gray-600);
}

#actions {
  width: 40px;
}

.title, .font-title {
  color: var(--spectrum-global-color-gray-600);
  display: inline;
  font-weight: 600;
}

.font-title:hover,
.font-title .highlighted {
  color: var(--spectrum-global-color-gray-600);
  text-decoration: underline;
}

.activation-switch {
  margin: 0;
}

/**
 * We need to provide a label for the activation switch, but the title
 * and aria-label attributes don't seem to work with sp-switch.
 *
 * To get around this, we need to provide a label element that's visible
 * to screen readers, but not visible to sighted users.
 *
 * (There may be a better workaround for this we can switch to in the future).
 */
#activation-switch-label {
  display: inline-block;
  height: 0;
  width: 0;
  visibility: hidden;
}

#wrapper-highlight {
  border-radius: 8px;
  flex: 1;
  overflow: hidden;
  position: relative;
}

af-ccx-text-frame-highlight {
  flex: 1;
}

.transition-translation af-ccx-text-frame-highlight {
  transition: transform 0.5s ease;
}

#svg-ccx-logo {
  position: absolute;
  bottom: 4px;
  left: 8px;
  z-index: 2;
}

#svg-ccx-logo svg {
  height: 35px;
  width: 35px
}

#svg-ccx-premium-logo-in-text-frame {
  position: absolute;
  bottom: 4px;
  right: 8px;
  z-index: 2;
}

#svg-ccx-premium-logo-in-bottom-bar {
  padding: 0 0 0 11px;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
}

          `;(s=a||(a={})).ConstantHeight="constantHeight",s.ConstantWidth="constantWidth",s.ConstantHeightAndWidth="constantHeightAndWidth";let T=class extends(Object(h.a)(Object(v.a)(l.e,z))){constructor(){super(...arguments),this.activated=!1,this.fontsInfo=[],this.showPremium=!1,this.showActivationButton=!1,this.imageMode=!1,this.fitMode=a.ConstantHeight,this._handleClick=e=>{e.target.blur(),this.sendAnalyticsEvent("ccx-edit-template",{templateLink:this.templateLink})},this._handleActivationChange=e=>{var t;const r=e.target;this.dispatchEvent(new g.a({fontIds:this.fontsInfo.map((e=>e.id)),isActivated:r.checked})),this.sendAnalyticsEvent("ccx-activation-event",{isActivated:r.checked,numFonts:null===(t=this.fontsInfo)||void 0===t?void 0:t.length})},this._handleFontMouseEnter=e=>{this._currentTextFrames=e.textFrame},this._handleTemplateHighlight=e=>{this._highlightedFontInfo=this._findFontByTextFrame(e.detail)},this._handleTemplateMouseEnter=()=>{this._currentTextFrames=this._getAllTextFrames()},this._handleTemplateUnhighlight=()=>{this._highlightedFontInfo=void 0}}get hasFontsInfo(){return this.fontsInfo&&this.fontsInfo.length>0}get _aspectRatio(){return this.templateDimensions.width/this.templateDimensions.height}static get styles(){return[f.a,k]}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("title",null===(e=this.fontsInfo)||void 0===e?void 0:e.map((e=>e.name)).join(" & "))}updated(e){var t;e.has("fontsInfo")&&e.has("templateDimensions")&&this.hasFontsInfo&&this.setAttribute("title",null===(t=this.fontsInfo)||void 0===t?void 0:t.map((e=>e.name)).join(" & "))}render(){return l.a`${this._highlightView()} ${this._fontInfo()}`}_renderOverlay(){return l.a`<a @click="${this._handleClick}" href="${this.templateLink}" target="_blank"><div class="overlay"><sp-button variant="secondary">${this.t("ccx-specimen-card.open-in-ccx")}</sp-button></div></a>`}_highlightView(){return l.a`<div id="wrapper-highlight" tabindex="0" style="${Object(m.a)(this._getCCXTextFrameStyleMap())}">${this._ccxIcons()}<af-ccx-text-frame-highlight style="${Object(m.a)(this._getCCXTextFrameStyleMap())}" .templateDimensions="${this.templateDimensions}" .textFrames="${this._currentTextFrames}" @textframeenter="${this._handleTemplateHighlight}" @textframeenterleave="${this._handleTemplateUnhighlight}" @mouseenter="${this._handleTemplateMouseEnter}" @mouseleave="${this._handleMouseLeave}" ?image-fit-contain="${this.fitMode!=a.ConstantHeightAndWidth}" ?image-fit-cover="${this.fitMode==a.ConstantHeightAndWidth}"><slot></slot></af-ccx-text-frame-highlight>${this._renderOverlay()}</div>`}_ccxIcons(){return this.showPremium&&(this.imageMode||this.showActivationButton)?l.a`<div id="svg-ccx-logo">${Object(d.a)(y)}</div><div id="svg-ccx-premium-logo-in-text-frame">${Object(d.a)(w)}</div>`:l.a`<div id="svg-ccx-logo">${Object(d.a)(y)}</div>`}_fontInfo(){return this.imageMode?l.a``:l.a`<div id="fonts" style="${Object(m.a)(this._getBottomBarStyleMap())}">${this._getFontList()}<div id="actions">${this._activatedButton()}</div></div>`}_activatedButton(){return this.showPremium&&!this.showActivationButton?l.a`<overlay-trigger id="trigger" placement="top"><div id="svg-ccx-premium-logo-in-bottom-bar" slot="trigger">${Object(d.a)(w)}</div><sp-tooltip placement="top" slot="hover-content">${this.t("ccx-specimen-card.premium-icon-tooltip")}</sp-tooltip></overlay-trigger>`:l.a`<sp-switch class="activation-switch" emphasized ?checked="${this.activated}" @change="${this._handleActivationChange}" @mouseenter="${this.handleActivationSwitchMouseEnter}" @mouseleave="${this.handleActivationSwitchMouseLeave}"><span id="#activation-switch-label">${this.t("ccx-specimen-card.activate-font")}</span></sp-switch>`}_getFontList(){var e;return l.a`<ul id="font-list">${null===(e=this.fontsInfo)||void 0===e?void 0:e.map((e=>this._getFontListItem(e)))}</ul>`}_getFontListItem(e){var t;const r={highlighted:(null===(t=this._highlightedFontInfo)||void 0===t?void 0:t.psName)===e.psName};return l.a`<li class="${Object(p.a)(r)}"><a href="${Object(b.getFamilyOpenHref)(e.familySlug)}" @click="${()=>this._openFDPAnalytics(e.familySlug)}"><span class="font-title" @mouseleave="${()=>this._handleMouseLeave()}" @mouseenter="${()=>this._handleFontMouseEnter(e)}">${e.name}</span></a></li>`}_getAllTextFrames(){return this.fontsInfo.reduce(((e,t)=>[...e,...t.textFrame]),[])}_findFontByTextFrame(e){var t;return null===(t=this.fontsInfo.filter((t=>t.textFrame.includes(e))))||void 0===t?void 0:t[0]}_handleMouseLeave(){this._currentTextFrames=void 0}_openFDPAnalytics(e){this.sendAnalyticsEvent("ccx-fdp-open",{familySlug:e})}_getCCXTextFrameStyleMap(){const e=this.getBoundingClientRect(),t=this.imageMode?0:55;switch(this.fitMode){case a.ConstantHeight:return{height:e.height-t+"px",width:this.templateDimensions?this._aspectRatio*(e.height-t)+"px":"initial"};case a.ConstantWidth:return{height:this.templateDimensions?e.width/this._aspectRatio+"px":"initial",width:`${e.width}px`};case a.ConstantHeightAndWidth:return{height:e.height-t+"px",width:`${e.width}px`}}}_getBottomBarStyleMap(){const e=this.getBoundingClientRect(),t=this.imageMode?0:55;switch(this.fitMode){case a.ConstantHeight:return{height:`${t}px`,width:this.templateDimensions?this._aspectRatio*(e.height-t)+"px":"initial"};case a.ConstantWidth:case a.ConstantHeightAndWidth:return{height:`${t}px`,width:`${e.width}px`}}}handleActivationSwitchMouseEnter(){const e=document.createElement("sp-tooltip");e.textContent=this._getActivationToolTipMessage()||"",e.placement="top",this._closeOverlay=Object(x.a)(this.activationSwitch,"hover",e,{placement:"top"})}handleActivationSwitchMouseLeave(){return Object(o.e)(this,void 0,void 0,(function*(){const{_closeOverlay:e}=this;e&&(delete this._closeOverlay,(yield e)())}))}_getActivationToolTipMessage(){var e,t;return(null===(e=this.fontsInfo)||void 0===e?void 0:e.length)>1?this.activationSwitch.checked?this.t("ccx-specimen-card.deactivate-fonts-tooltip"):this.t("ccx-specimen-card.activate-fonts-tooltip"):(null===(t=this.activationSwitch)||void 0===t?void 0:t.checked)?this.t("ccx-specimen-card.deactivate-font-tooltip"):this.t("ccx-specimen-card.activate-font-tooltip")}};Object(o.a)([Object(i.a)({type:Boolean})],T.prototype,"activated",void 0),Object(o.a)([Object(i.a)({type:String})],T.prototype,"templateLink",void 0),Object(o.a)([Object(i.a)({type:Array})],T.prototype,"fontsInfo",void 0),Object(o.a)([Object(i.a)({type:Object})],T.prototype,"templateDimensions",void 0),Object(o.a)([Object(i.a)({type:Boolean})],T.prototype,"showPremium",void 0),Object(o.a)([Object(i.a)({type:Boolean})],T.prototype,"showActivationButton",void 0),Object(o.a)([Object(i.a)({type:Boolean})],T.prototype,"imageMode",void 0),Object(o.a)([Object(i.a)()],T.prototype,"fitMode",void 0),Object(o.a)([Object(u.a)(".activation-switch")],T.prototype,"activationSwitch",void 0),Object(o.a)([Object(n.a)()],T.prototype,"_currentTextFrames",void 0),Object(o.a)([Object(n.a)()],T.prototype,"_highlightedFontInfo",void 0),T=Object(o.a)([Object(c.a)("af-ccx-specimen-card")],T)},148:function(e,t,r){"use strict";var a=r(92),s=r(20),o=r(0),l=r(5),c=r(2),i=r(4),n=r(37),u=r(13),p=r(15),m=Object.defineProperty,d=Object.getOwnPropertyDescriptor,g=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?d(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&m(t,r,o),o};const b="transform: translateX(0px) scaleX(0) scaleY(0)";class h extends(Object(s.a)(i.a)){constructor(){super(...arguments),this.selectionIndicatorStyle=b,this.shouldAnimate=!1,this.onClick=e=>{const t=e.target;this.shouldAnimate=!0,this.selectTarget(t)},this.items=[],this.updateSelectionIndicator=async()=>{const e=this.items.find((e=>e.value===this.selected||e.value===window.location.href));if(!e)return void(this.selectionIndicatorStyle=b);await Promise.all([e.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const t=e.getBoundingClientRect().width,r=e.offsetLeft;this.selectionIndicatorStyle=`transform: translateX(${r}px) scaleX(${t});`}}static get styles(){return[a.b]}set selected(e){const t=this.selected;e!==t&&(this.updateCheckedState(e),this._selected=e,this.requestUpdate("selected",t))}get selected(){return this._selected}manageItems(){this.items=[...this.querySelectorAll("sp-top-nav-item")];const e=this.items.find((e=>e.value===window.location.href));e&&this.selectTarget(e)}render(){return o.a`
            <div
                @click=${this.onClick}
                id="list"
                @sp-top-nav-item-contentchange=${this.updateSelectionIndicator}
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${Object(l.a)(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                ></div>
            </div>
        `}firstUpdated(e){super.firstUpdated(e),this.setAttribute("direction","horizontal"),this.manageItems()}updated(e){super.updated(e),e.has("dir")&&this.updateSelectionIndicator(),!this.shouldAnimate&&void 0!==e.get("shouldAnimate")&&(this.shouldAnimate=!0)}selectTarget(e){const{value:t}=e;t&&(this.selected=t)}onSlotChange(){this.manageItems()}updateCheckedState(e){this.items.forEach((e=>{e.selected=!1})),requestAnimationFrame((()=>{if(e&&e.length){const t=this.items.find((t=>t.value===e||t.value===window.location.href));t?t.selected=!0:this.selected=""}this.updateSelectionIndicator()}))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}g([Object(c.b)()],h.prototype,"selectionIndicatorStyle",2),g([Object(c.b)({attribute:!1})],h.prototype,"shouldAnimate",2),g([Object(c.b)({reflect:!0})],h.prototype,"selected",1),customElements.define("sp-top-nav",h);var v=o.d`
a{color:inherit}a:focus{outline:none}:host(:focus-within){color:var(
--spectrum-tabs-m-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host(:focus-within):before{border-color:var(
--spectrum-tabs-m-focus-ring-color,var(--spectrum-alias-border-color-key-focus)
)}:host(:focus-within) ::slotted([slot=icon]){color:var(
--spectrum-tabs-m-icon-color-key-focus,var(--spectrum-alias-icon-color-key-focus)
)}
`,f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,y=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?x(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&f(t,r,o),o};class w extends(Object(n.a)(p.a)){constructor(){super(...arguments),this.selected=!1,this.value=""}static get styles(){return[a.a,v]}handleContentChange(){this.dispatchEvent(new Event("sp-top-nav-item-contentchange",{bubbles:!0,composed:!0}))}get focusElement(){return this.anchor}click(){this.anchor.click()}render(){return o.a`
            <a
                id="item-label"
                href=${Object(l.a)(this.href)}
                download=${Object(l.a)(this.download)}
                target=${Object(l.a)(this.target)}
                aria-label=${Object(l.a)(this.label)}
                aria-current=${Object(l.a)(this.selected&&this.href?"page":void 0)}
                rel=${Object(l.a)(this.rel)}
            >
                <slot></slot>
            </a>
        `}firstUpdated(e){super.firstUpdated(e),this.shadowRoot.addEventListener("slotchange",this.handleContentChange)}updated(e){super.updated(e),e.has("label")&&void 0!==e.get("label")&&this.handleContentChange(),this.value=this.anchor.href}}y([Object(u.a)("a")],w.prototype,"anchor",2),y([Object(c.b)({type:Boolean,reflect:!0})],w.prototype,"selected",2),customElements.define("sp-top-nav-item",w)},150:function(e,t,r){"use strict";var a=r(50);var s=r(136).b`
:host,:root{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(.45,0,.40,1);--spectrum-global-animation-ease-in:cubic-bezier(.50,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.40,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-black:rgb(var(--spectrum-global-color-static-black-rgb));--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-global-color-static-white:rgb(var(--spectrum-global-color-static-white-rgb));--spectrum-global-color-static-blue-rgb:0,87,191;--spectrum-global-color-static-blue:rgb(var(--spectrum-global-color-static-blue-rgb));--spectrum-global-color-static-gray-50-rgb:255,255,255;--spectrum-global-color-static-gray-50:rgb(var(--spectrum-global-color-static-gray-50-rgb));--spectrum-global-color-static-gray-75-rgb:255,255,255;--spectrum-global-color-static-gray-75:rgb(var(--spectrum-global-color-static-gray-75-rgb));--spectrum-global-color-static-gray-100-rgb:255,255,255;--spectrum-global-color-static-gray-100:rgb(var(--spectrum-global-color-static-gray-100-rgb));--spectrum-global-color-static-gray-200-rgb:235,235,235;--spectrum-global-color-static-gray-200:rgb(var(--spectrum-global-color-static-gray-200-rgb));--spectrum-global-color-static-gray-300-rgb:217,217,217;--spectrum-global-color-static-gray-300:rgb(var(--spectrum-global-color-static-gray-300-rgb));--spectrum-global-color-static-gray-400-rgb:179,179,179;--spectrum-global-color-static-gray-400:rgb(var(--spectrum-global-color-static-gray-400-rgb));--spectrum-global-color-static-gray-500-rgb:146,146,146;--spectrum-global-color-static-gray-500:rgb(var(--spectrum-global-color-static-gray-500-rgb));--spectrum-global-color-static-gray-600-rgb:110,110,110;--spectrum-global-color-static-gray-600:rgb(var(--spectrum-global-color-static-gray-600-rgb));--spectrum-global-color-static-gray-700-rgb:71,71,71;--spectrum-global-color-static-gray-700:rgb(var(--spectrum-global-color-static-gray-700-rgb));--spectrum-global-color-static-gray-800-rgb:34,34,34;--spectrum-global-color-static-gray-800:rgb(var(--spectrum-global-color-static-gray-800-rgb));--spectrum-global-color-static-gray-900-rgb:0,0,0;--spectrum-global-color-static-gray-900:rgb(var(--spectrum-global-color-static-gray-900-rgb));--spectrum-global-color-static-red-400-rgb:237,64,48;--spectrum-global-color-static-red-400:rgb(var(--spectrum-global-color-static-red-400-rgb));--spectrum-global-color-static-red-500-rgb:217,28,21;--spectrum-global-color-static-red-500:rgb(var(--spectrum-global-color-static-red-500-rgb));--spectrum-global-color-static-red-600-rgb:187,2,2;--spectrum-global-color-static-red-600:rgb(var(--spectrum-global-color-static-red-600-rgb));--spectrum-global-color-static-red-700-rgb:154,0,0;--spectrum-global-color-static-red-700:rgb(var(--spectrum-global-color-static-red-700-rgb));--spectrum-global-color-static-red-800-rgb:124,0,0;--spectrum-global-color-static-red-800:rgb(var(--spectrum-global-color-static-red-800-rgb));--spectrum-global-color-static-orange-400-rgb:250,139,26;--spectrum-global-color-static-orange-400:rgb(var(--spectrum-global-color-static-orange-400-rgb));--spectrum-global-color-static-orange-500-rgb:233,117,0;--spectrum-global-color-static-orange-500:rgb(var(--spectrum-global-color-static-orange-500-rgb));--spectrum-global-color-static-orange-600-rgb:209,97,0;--spectrum-global-color-static-orange-600:rgb(var(--spectrum-global-color-static-orange-600-rgb));--spectrum-global-color-static-orange-700-rgb:182,80,0;--spectrum-global-color-static-orange-700:rgb(var(--spectrum-global-color-static-orange-700-rgb));--spectrum-global-color-static-orange-800-rgb:155,64,0;--spectrum-global-color-static-orange-800:rgb(var(--spectrum-global-color-static-orange-800-rgb));--spectrum-global-color-static-yellow-200-rgb:250,237,123;--spectrum-global-color-static-yellow-200:rgb(var(--spectrum-global-color-static-yellow-200-rgb));--spectrum-global-color-static-yellow-300-rgb:250,224,23;--spectrum-global-color-static-yellow-300:rgb(var(--spectrum-global-color-static-yellow-300-rgb));--spectrum-global-color-static-yellow-400-rgb:238,205,0;--spectrum-global-color-static-yellow-400:rgb(var(--spectrum-global-color-static-yellow-400-rgb));--spectrum-global-color-static-yellow-500-rgb:221,185,0;--spectrum-global-color-static-yellow-500:rgb(var(--spectrum-global-color-static-yellow-500-rgb));--spectrum-global-color-static-yellow-600-rgb:201,164,0;--spectrum-global-color-static-yellow-600:rgb(var(--spectrum-global-color-static-yellow-600-rgb));--spectrum-global-color-static-yellow-700-rgb:181,144,0;--spectrum-global-color-static-yellow-700:rgb(var(--spectrum-global-color-static-yellow-700-rgb));--spectrum-global-color-static-yellow-800-rgb:160,125,0;--spectrum-global-color-static-yellow-800:rgb(var(--spectrum-global-color-static-yellow-800-rgb));--spectrum-global-color-static-chartreuse-300-rgb:176,222,27;--spectrum-global-color-static-chartreuse-300:rgb(var(--spectrum-global-color-static-chartreuse-300-rgb));--spectrum-global-color-static-chartreuse-400-rgb:157,203,13;--spectrum-global-color-static-chartreuse-400:rgb(var(--spectrum-global-color-static-chartreuse-400-rgb));--spectrum-global-color-static-chartreuse-500-rgb:139,182,4;--spectrum-global-color-static-chartreuse-500:rgb(var(--spectrum-global-color-static-chartreuse-500-rgb));--spectrum-global-color-static-chartreuse-600-rgb:122,162,0;--spectrum-global-color-static-chartreuse-600:rgb(var(--spectrum-global-color-static-chartreuse-600-rgb));--spectrum-global-color-static-chartreuse-700-rgb:106,141,0;--spectrum-global-color-static-chartreuse-700:rgb(var(--spectrum-global-color-static-chartreuse-700-rgb));--spectrum-global-color-static-chartreuse-800-rgb:90,120,0;--spectrum-global-color-static-chartreuse-800:rgb(var(--spectrum-global-color-static-chartreuse-800-rgb));--spectrum-global-color-static-celery-200-rgb:126,229,114;--spectrum-global-color-static-celery-200:rgb(var(--spectrum-global-color-static-celery-200-rgb));--spectrum-global-color-static-celery-300-rgb:87,212,86;--spectrum-global-color-static-celery-300:rgb(var(--spectrum-global-color-static-celery-300-rgb));--spectrum-global-color-static-celery-400-rgb:48,193,61;--spectrum-global-color-static-celery-400:rgb(var(--spectrum-global-color-static-celery-400-rgb));--spectrum-global-color-static-celery-500-rgb:15,172,38;--spectrum-global-color-static-celery-500:rgb(var(--spectrum-global-color-static-celery-500-rgb));--spectrum-global-color-static-celery-600-rgb:0,150,20;--spectrum-global-color-static-celery-600:rgb(var(--spectrum-global-color-static-celery-600-rgb));--spectrum-global-color-static-celery-700-rgb:0,128,15;--spectrum-global-color-static-celery-700:rgb(var(--spectrum-global-color-static-celery-700-rgb));--spectrum-global-color-static-celery-800-rgb:0,107,15;--spectrum-global-color-static-celery-800:rgb(var(--spectrum-global-color-static-celery-800-rgb));--spectrum-global-color-static-green-400-rgb:29,169,115;--spectrum-global-color-static-green-400:rgb(var(--spectrum-global-color-static-green-400-rgb));--spectrum-global-color-static-green-500-rgb:0,148,97;--spectrum-global-color-static-green-500:rgb(var(--spectrum-global-color-static-green-500-rgb));--spectrum-global-color-static-green-600-rgb:0,126,80;--spectrum-global-color-static-green-600:rgb(var(--spectrum-global-color-static-green-600-rgb));--spectrum-global-color-static-green-700-rgb:0,105,65;--spectrum-global-color-static-green-700:rgb(var(--spectrum-global-color-static-green-700-rgb));--spectrum-global-color-static-green-800-rgb:0,86,53;--spectrum-global-color-static-green-800:rgb(var(--spectrum-global-color-static-green-800-rgb));--spectrum-global-color-static-seafoam-200-rgb:75,206,199;--spectrum-global-color-static-seafoam-200:rgb(var(--spectrum-global-color-static-seafoam-200-rgb));--spectrum-global-color-static-seafoam-300-rgb:32,187,180;--spectrum-global-color-static-seafoam-300:rgb(var(--spectrum-global-color-static-seafoam-300-rgb));--spectrum-global-color-static-seafoam-400-rgb:0,166,160;--spectrum-global-color-static-seafoam-400:rgb(var(--spectrum-global-color-static-seafoam-400-rgb));--spectrum-global-color-static-seafoam-500-rgb:0,145,139;--spectrum-global-color-static-seafoam-500:rgb(var(--spectrum-global-color-static-seafoam-500-rgb));--spectrum-global-color-static-seafoam-600-rgb:0,124,118;--spectrum-global-color-static-seafoam-600:rgb(var(--spectrum-global-color-static-seafoam-600-rgb));--spectrum-global-color-static-seafoam-700-rgb:0,103,99;--spectrum-global-color-static-seafoam-700:rgb(var(--spectrum-global-color-static-seafoam-700-rgb));--spectrum-global-color-static-seafoam-800-rgb:10,83,80;--spectrum-global-color-static-seafoam-800:rgb(var(--spectrum-global-color-static-seafoam-800-rgb));--spectrum-global-color-static-blue-200-rgb:130,193,251;--spectrum-global-color-static-blue-200:rgb(var(--spectrum-global-color-static-blue-200-rgb));--spectrum-global-color-static-blue-300-rgb:98,173,247;--spectrum-global-color-static-blue-300:rgb(var(--spectrum-global-color-static-blue-300-rgb));--spectrum-global-color-static-blue-400-rgb:66,151,244;--spectrum-global-color-static-blue-400:rgb(var(--spectrum-global-color-static-blue-400-rgb));--spectrum-global-color-static-blue-500-rgb:27,127,245;--spectrum-global-color-static-blue-500:rgb(var(--spectrum-global-color-static-blue-500-rgb));--spectrum-global-color-static-blue-600-rgb:4,105,227;--spectrum-global-color-static-blue-600:rgb(var(--spectrum-global-color-static-blue-600-rgb));--spectrum-global-color-static-blue-700-rgb:0,87,190;--spectrum-global-color-static-blue-700:rgb(var(--spectrum-global-color-static-blue-700-rgb));--spectrum-global-color-static-blue-800-rgb:0,72,153;--spectrum-global-color-static-blue-800:rgb(var(--spectrum-global-color-static-blue-800-rgb));--spectrum-global-color-static-indigo-200-rgb:178,181,255;--spectrum-global-color-static-indigo-200:rgb(var(--spectrum-global-color-static-indigo-200-rgb));--spectrum-global-color-static-indigo-300-rgb:155,159,255;--spectrum-global-color-static-indigo-300:rgb(var(--spectrum-global-color-static-indigo-300-rgb));--spectrum-global-color-static-indigo-400-rgb:132,137,253;--spectrum-global-color-static-indigo-400:rgb(var(--spectrum-global-color-static-indigo-400-rgb));--spectrum-global-color-static-indigo-500-rgb:109,115,246;--spectrum-global-color-static-indigo-500:rgb(var(--spectrum-global-color-static-indigo-500-rgb));--spectrum-global-color-static-indigo-600-rgb:87,93,232;--spectrum-global-color-static-indigo-600:rgb(var(--spectrum-global-color-static-indigo-600-rgb));--spectrum-global-color-static-indigo-700-rgb:68,74,208;--spectrum-global-color-static-indigo-700:rgb(var(--spectrum-global-color-static-indigo-700-rgb));--spectrum-global-color-static-indigo-800-rgb:68,74,208;--spectrum-global-color-static-indigo-800:rgb(var(--spectrum-global-color-static-indigo-800-rgb));--spectrum-global-color-static-purple-400-rgb:178,121,250;--spectrum-global-color-static-purple-400:rgb(var(--spectrum-global-color-static-purple-400-rgb));--spectrum-global-color-static-purple-500-rgb:161,93,246;--spectrum-global-color-static-purple-500:rgb(var(--spectrum-global-color-static-purple-500-rgb));--spectrum-global-color-static-purple-600-rgb:142,67,234;--spectrum-global-color-static-purple-600:rgb(var(--spectrum-global-color-static-purple-600-rgb));--spectrum-global-color-static-purple-700-rgb:120,43,216;--spectrum-global-color-static-purple-700:rgb(var(--spectrum-global-color-static-purple-700-rgb));--spectrum-global-color-static-purple-800-rgb:98,23,190;--spectrum-global-color-static-purple-800:rgb(var(--spectrum-global-color-static-purple-800-rgb));--spectrum-global-color-static-fuchsia-400-rgb:228,93,230;--spectrum-global-color-static-fuchsia-400:rgb(var(--spectrum-global-color-static-fuchsia-400-rgb));--spectrum-global-color-static-fuchsia-500-rgb:211,63,212;--spectrum-global-color-static-fuchsia-500:rgb(var(--spectrum-global-color-static-fuchsia-500-rgb));--spectrum-global-color-static-fuchsia-600-rgb:188,39,187;--spectrum-global-color-static-fuchsia-600:rgb(var(--spectrum-global-color-static-fuchsia-600-rgb));--spectrum-global-color-static-fuchsia-700-rgb:163,10,163;--spectrum-global-color-static-fuchsia-700:rgb(var(--spectrum-global-color-static-fuchsia-700-rgb));--spectrum-global-color-static-fuchsia-800-rgb:135,0,136;--spectrum-global-color-static-fuchsia-800:rgb(var(--spectrum-global-color-static-fuchsia-800-rgb));--spectrum-global-color-static-magenta-200-rgb:253,127,175;--spectrum-global-color-static-magenta-200:rgb(var(--spectrum-global-color-static-magenta-200-rgb));--spectrum-global-color-static-magenta-300-rgb:242,98,157;--spectrum-global-color-static-magenta-300:rgb(var(--spectrum-global-color-static-magenta-300-rgb));--spectrum-global-color-static-magenta-400-rgb:226,68,135;--spectrum-global-color-static-magenta-400:rgb(var(--spectrum-global-color-static-magenta-400-rgb));--spectrum-global-color-static-magenta-500-rgb:205,40,111;--spectrum-global-color-static-magenta-500:rgb(var(--spectrum-global-color-static-magenta-500-rgb));--spectrum-global-color-static-magenta-600-rgb:179,15,89;--spectrum-global-color-static-magenta-600:rgb(var(--spectrum-global-color-static-magenta-600-rgb));--spectrum-global-color-static-magenta-700-rgb:149,0,72;--spectrum-global-color-static-magenta-700:rgb(var(--spectrum-global-color-static-magenta-700-rgb));--spectrum-global-color-static-magenta-800-rgb:119,0,58;--spectrum-global-color-static-magenta-800:rgb(var(--spectrum-global-color-static-magenta-800-rgb));--spectrum-global-color-static-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-global-color-static-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-global-color-static-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-global-color-static-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-global-color-static-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-global-color-static-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-global-color-static-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-global-color-static-transparent-white-900-rgb:255,255,255;--spectrum-global-color-static-transparent-white-900:rgb(var(--spectrum-global-color-static-transparent-white-900-rgb));--spectrum-global-color-static-transparent-black-200:rgba(0,0,0,.1);--spectrum-global-color-static-transparent-black-300:rgba(0,0,0,.25);--spectrum-global-color-static-transparent-black-400:rgba(0,0,0,.4);--spectrum-global-color-static-transparent-black-500:rgba(0,0,0,.55);--spectrum-global-color-static-transparent-black-600:rgba(0,0,0,.7);--spectrum-global-color-static-transparent-black-700:rgba(0,0,0,.8);--spectrum-global-color-static-transparent-black-800:rgba(0,0,0,.9);--spectrum-global-color-static-transparent-black-900-rgb:0,0,0;--spectrum-global-color-static-transparent-black-900:rgb(var(--spectrum-global-color-static-transparent-black-900-rgb));--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-color-default:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-color-hover:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-dark:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-border-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-icon-color:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-status-color:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-text-color-large:var(--spectrum-global-color-red-500);--spectrum-semantic-negative-text-color-small:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-text-color-small-hover:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-text-color-small-key-focus:var(--spectrum-global-color-red-600);--spectrum-semantic-negative-color-down:var(--spectrum-global-color-red-700);--spectrum-semantic-negative-color-key-focus:var(--spectrum-global-color-red-400);--spectrum-semantic-negative-background-color-default:var(--spectrum-global-color-static-red-600);--spectrum-semantic-negative-background-color-hover:var(--spectrum-global-color-static-red-700);--spectrum-semantic-negative-background-color-down:var(--spectrum-global-color-static-red-800);--spectrum-semantic-negative-background-color-key-focus:var(--spectrum-global-color-static-red-700);--spectrum-semantic-notice-background-color:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-color-default:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-color-dark:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-border-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-icon-color:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-status-color:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-text-color-large:var(--spectrum-global-color-orange-500);--spectrum-semantic-notice-text-color-small:var(--spectrum-global-color-orange-600);--spectrum-semantic-notice-color-down:var(--spectrum-global-color-orange-700);--spectrum-semantic-notice-color-key-focus:var(--spectrum-global-color-orange-400);--spectrum-semantic-notice-background-color-default:var(--spectrum-global-color-static-orange-600);--spectrum-semantic-notice-background-color-hover:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-notice-background-color-down:var(--spectrum-global-color-static-orange-800);--spectrum-semantic-notice-background-color-key-focus:var(--spectrum-global-color-static-orange-700);--spectrum-semantic-positive-background-color:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-color-default:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-color-dark:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-border-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-icon-color:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-status-color:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-text-color-large:var(--spectrum-global-color-green-500);--spectrum-semantic-positive-text-color-small:var(--spectrum-global-color-green-600);--spectrum-semantic-positive-color-down:var(--spectrum-global-color-green-700);--spectrum-semantic-positive-color-key-focus:var(--spectrum-global-color-green-400);--spectrum-semantic-positive-background-color-default:var(--spectrum-global-color-static-green-600);--spectrum-semantic-positive-background-color-hover:var(--spectrum-global-color-static-green-700);--spectrum-semantic-positive-background-color-down:var(--spectrum-global-color-static-green-800);--spectrum-semantic-positive-background-color-key-focus:var(--spectrum-global-color-static-green-700);--spectrum-semantic-informative-background-color:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-color-dark:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-border-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-icon-color:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-status-color:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-text-color-large:var(--spectrum-global-color-blue-500);--spectrum-semantic-informative-text-color-small:var(--spectrum-global-color-blue-600);--spectrum-semantic-informative-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-informative-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-semantic-informative-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-informative-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-informative-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-informative-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-default:var(--spectrum-global-color-static-blue-600);--spectrum-semantic-cta-background-color-hover:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-cta-background-color-down:var(--spectrum-global-color-static-blue-800);--spectrum-semantic-cta-background-color-key-focus:var(--spectrum-global-color-static-blue-700);--spectrum-semantic-emphasized-border-color-default:var(--spectrum-global-color-blue-500);--spectrum-semantic-emphasized-border-color-hover:var(--spectrum-global-color-blue-600);--spectrum-semantic-emphasized-border-color-down:var(--spectrum-global-color-blue-700);--spectrum-semantic-emphasized-border-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-semantic-neutral-background-color-default:var(--spectrum-global-color-static-gray-700);--spectrum-semantic-neutral-background-color-hover:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-neutral-background-color-down:var(--spectrum-global-color-static-gray-900);--spectrum-semantic-neutral-background-color-key-focus:var(--spectrum-global-color-static-gray-800);--spectrum-semantic-presence-color-1:var(--spectrum-global-color-static-red-500);--spectrum-semantic-presence-color-2:var(--spectrum-global-color-static-orange-400);--spectrum-semantic-presence-color-3:var(--spectrum-global-color-static-yellow-400);--spectrum-semantic-presence-color-4-rgb:75,204,162;--spectrum-semantic-presence-color-4:rgb(var(--spectrum-semantic-presence-color-4-rgb));--spectrum-semantic-presence-color-5-rgb:0,199,255;--spectrum-semantic-presence-color-5:rgb(var(--spectrum-semantic-presence-color-5-rgb));--spectrum-semantic-presence-color-6-rgb:0,140,184;--spectrum-semantic-presence-color-6:rgb(var(--spectrum-semantic-presence-color-6-rgb));--spectrum-semantic-presence-color-7-rgb:126,75,243;--spectrum-semantic-presence-color-7:rgb(var(--spectrum-semantic-presence-color-7-rgb));--spectrum-semantic-presence-color-8:var(--spectrum-global-color-static-fuchsia-600);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-185:15px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-350:28px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,"Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","Osaka",YuGothic,"Yu Gothic","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-loupe-entry-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-loupe-exit-animation-duration:var(--spectrum-global-animation-duration-300);--spectrum-alias-heading-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-light);--spectrum-alias-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-text-font-weight-strong-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-heading-margin-bottom:var(--spectrum-global-font-multiplier-25);--spectrum-alias-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-body-text-font-family:var(--spectrum-global-font-family-base);--spectrum-alias-body-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-body-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-body-margin-bottom:var(--spectrum-global-font-multiplier-75);--spectrum-alias-detail-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-detail-text-font-weight-light:var(--spectrum-global-font-weight-regular);--spectrum-alias-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-heading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-heading-text-font-weight-quiet:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-body-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-subheading-text-font-weight:var(--spectrum-global-font-weight-bold);--spectrum-alias-article-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-article-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-article-detail-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-font-family:var(--spectrum-global-font-family-code);--spectrum-alias-code-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-code-text-font-weight-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-code-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-code-margin-bottom:var(--spectrum-global-font-multiplier-0);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(--spectrum-global-font-font-family-zhhans);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(--spectrum-global-font-font-family-condensed);--spectrum-alias-button-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-component-text-line-height:var(--spectrum-global-font-line-height-small);--spectrum-alias-han-component-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-serif-text-font-family:var(--spectrum-global-font-family-serif);--spectrum-alias-han-heading-text-line-height:var(--spectrum-global-font-line-height-medium);--spectrum-alias-han-heading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-light:var(--spectrum-global-font-weight-light);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-heading-text-font-weight-light-strong:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-heading-text-font-weight-heavy:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(--spectrum-global-font-weight-black);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-body-text-line-height:var(--spectrum-global-font-line-height-large);--spectrum-alias-han-body-text-font-weight-regular:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-body-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-body-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-subheading-text-font-weight-regular:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(--spectrum-global-font-weight-extra-bold);--spectrum-alias-han-subheading-text-font-weight-strong:var(--spectrum-global-font-weight-black);--spectrum-alias-han-detail-text-font-weight:var(--spectrum-global-font-weight-regular);--spectrum-alias-han-detail-text-font-weight-emphasis:var(--spectrum-global-font-weight-bold);--spectrum-alias-han-detail-text-font-weight-strong:var(--spectrum-global-font-weight-black)}:host,:root{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-border-radius-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-border-radius-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-border-radius-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-text-size-s:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-item-text-size-m:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-item-text-size-l:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-item-text-size-xl:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-item-text-padding-top-s:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-item-text-padding-top-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-text-padding-top-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-text-padding-bottom-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-text-padding-bottom-xl:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-icon-padding-top-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-top-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-top-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-top-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-icon-padding-bottom-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icon-padding-bottom-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icon-padding-bottom-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icon-padding-bottom-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-rounded-padding-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-rounded-padding-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-rounded-padding-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-icononly-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-icononly-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-icononly-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-icononly-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-control-gap-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-gap-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-gap-l:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-control-gap-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-workflow-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-workflow-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-ui-icon-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-ui-icon-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-ui-icon-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-ui-icon-gap-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-item-clearbutton-gap-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-clearbutton-gap-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-clearbutton-gap-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-workflow-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-workflow-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-workflow-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-rounded-workflow-padding-left-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-l:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-padding-top-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-top-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-bottom-s:var(--spectrum-global-dimension-size-40);--spectrum-alias-item-mark-padding-bottom-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-padding-bottom-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-item-mark-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-item-mark-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-1-size-s:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-item-control-1-size-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-2-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-2-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-2-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-item-control-2-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-2-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-2-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-2-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-2-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-2-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-control-3-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-control-3-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-item-control-3-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-control-3-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-control-3-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-control-3-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-item-control-3-padding-m:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-control-3-padding-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-padding-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-mark-size-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-mark-size-l:var(--spectrum-global-dimension-size-275);--spectrum-alias-item-mark-size-xl:var(--spectrum-global-dimension-size-325);--spectrum-alias-heading-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-xxl-text-size:var(--spectrum-global-dimension-font-size-1100);--spectrum-alias-heading-xl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-l-text-size:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-m-text-size:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-xxl-margin-top:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-xl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-l-margin-top:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-m-margin-top:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-heading-han-xxxl-text-size:var(--spectrum-global-dimension-font-size-1300);--spectrum-alias-heading-han-xxl-text-size:var(--spectrum-global-dimension-font-size-900);--spectrum-alias-heading-han-xl-text-size:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-l-text-size:var(--spectrum-global-dimension-font-size-600);--spectrum-alias-heading-han-m-text-size:var(--spectrum-global-dimension-font-size-400);--spectrum-alias-heading-han-s-text-size:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-xs-text-size:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xxs-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxxl-margin-top:var(--spectrum-global-dimension-font-size-1200);--spectrum-alias-heading-han-xxl-margin-top:var(--spectrum-global-dimension-font-size-800);--spectrum-alias-heading-han-xl-margin-top:var(--spectrum-global-dimension-font-size-700);--spectrum-alias-heading-han-l-margin-top:var(--spectrum-global-dimension-font-size-500);--spectrum-alias-heading-han-m-margin-top:var(--spectrum-global-dimension-font-size-300);--spectrum-alias-heading-han-s-margin-top:var(--spectrum-global-dimension-font-size-200);--spectrum-alias-heading-han-xs-margin-top:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-heading-han-xxs-margin-top:var(--spectrum-global-dimension-font-size-75);--spectrum-alias-component-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-component-border-radius-quiet:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-component-focusring-gap-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-component-focusring-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-component-focusring-size-emphasized:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-input-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-input-focusring-gap:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-input-quiet-focusline-gap:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-control-two-size-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-two-size-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-two-size-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-control-two-size-xxl:var(--spectrum-global-dimension-size-250);--spectrum-alias-control-two-border-radius-s:var(--spectrum-global-dimension-size-75);--spectrum-alias-control-two-border-radius-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-control-two-border-radius-l:var(--spectrum-global-dimension-size-100);--spectrum-alias-control-two-border-radius-xl:var(--spectrum-global-dimension-size-115);--spectrum-alias-control-two-border-radius-xxl:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-s:var(--spectrum-global-dimension-size-125);--spectrum-alias-control-two-focus-ring-border-radius-m:var(--spectrum-global-dimension-size-130);--spectrum-alias-control-two-focus-ring-border-radius-l:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-two-focus-ring-border-radius-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-control-two-focus-ring-border-radius-xxl:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-control-three-height-l:var(--spectrum-global-dimension-size-200);--spectrum-alias-control-three-height-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-infieldbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-infieldbutton-fill-padding-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-infieldbutton-fill-padding-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-infieldbutton-fill-padding-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-infieldbutton-fill-padding-xl:var(--spectrum-global-dimension-size-160);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-infieldbutton-full-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-infieldbutton-full-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-infieldbutton-full-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-infieldbutton-half-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-infieldbutton-half-height-m:var(--spectrum-global-dimension-size-200);--spectrum-alias-infieldbutton-half-height-l:var(--spectrum-global-dimension-size-250);--spectrum-alias-infieldbutton-half-height-xl:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(--spectrum-global-dimension-size-225);--spectrum-alias-stepperbutton-width-m:var(--spectrum-global-dimension-size-300);--spectrum-alias-stepperbutton-width-l:var(--spectrum-global-dimension-size-400);--spectrum-alias-stepperbutton-width-xl:var(--spectrum-global-dimension-size-450);--spectrum-alias-stepperbutton-icon-x-offset-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-x-offset-m:var(--spectrum-global-dimension-size-85);--spectrum-alias-stepperbutton-icon-x-offset-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(--spectrum-global-dimension-size-130);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(--spectrum-global-dimension-size-65);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(--spectrum-global-dimension-size-75);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(--spectrum-global-dimension-size-10);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(--spectrum-global-dimension-size-25);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(--spectrum-global-dimension-size-40);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(--spectrum-global-dimension-size-50);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(--spectrum-global-dimension-size-100);--spectrum-alias-clearbutton-icon-margin-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-clearbutton-icon-margin-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-clearbutton-icon-margin-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-clearbutton-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-icononly-padding-x-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-pickerbutton-icononly-padding-x-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-pickerbutton-icononly-padding-x-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-pickerbutton-icononly-padding-x-xl:var(--spectrum-global-dimension-size-200);--spectrum-alias-pickerbutton-icon-margin-y-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-pickerbutton-icon-margin-y-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-pickerbutton-icon-margin-y-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-pickerbutton-icon-margin-y-xl:var(--spectrum-global-dimension-size-200);--spectrum-alias-pickerbutton-label-padding-y-s:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-label-padding-y-m:var(--spectrum-global-dimension-size-75);--spectrum-alias-pickerbutton-label-padding-y-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-pickerbutton-label-padding-y-xl:var(--spectrum-global-dimension-size-150);--spectrum-alias-pickerbutton-border-radius-rounded:var(--spectrum-global-dimension-size-50);--spectrum-alias-pickerbutton-border-radius-rounded-sided:0;--spectrum-alias-search-border-radius:var(--spectrum-global-dimension-size-50);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(--spectrum-global-dimension-size-100);--spectrum-alias-thumbnail-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-search-padding-left-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-search-padding-left-l:var(--spectrum-global-dimension-size-160);--spectrum-alias-search-padding-left-xl:var(--spectrum-global-dimension-size-185);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-border-size-thick:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-size-thicker:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-size-thickest:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thin:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-border-offset-thick:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-border-offset-thicker:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-border-offset-thickest:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-baseline:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-grid-gutter-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-gutter-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-gutter-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-gutter-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-gutter-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-margin-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-margin-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-margin-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-margin-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-margin-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-grid-layout-region-margin-bottom-small:var(--spectrum-global-dimension-static-size-300);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(--spectrum-global-dimension-static-size-400);--spectrum-alias-grid-layout-region-margin-bottom-large:var(--spectrum-global-dimension-static-size-500);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-radial-reaction-size-default:var(--spectrum-global-dimension-static-size-550);--spectrum-alias-focus-ring-gap:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-size:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-focus-ring-gap-small:var(--spectrum-global-dimension-static-size-0);--spectrum-alias-focus-ring-size-small:var(--spectrum-global-dimension-static-size-10);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(--spectrum-global-dimension-size-10);--spectrum-alias-font-size-default:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-layout-label-gap-size:var(--spectrum-global-dimension-size-100);--spectrum-alias-pill-button-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-alias-pill-button-text-baseline:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-border-radius-xsmall:var(--spectrum-global-dimension-size-10);--spectrum-alias-border-radius-small:var(--spectrum-global-dimension-size-25);--spectrum-alias-border-radius-regular:var(--spectrum-global-dimension-size-50);--spectrum-alias-border-radius-medium:var(--spectrum-global-dimension-size-100);--spectrum-alias-border-radius-large:var(--spectrum-global-dimension-size-200);--spectrum-alias-border-radius-xlarge:var(--spectrum-global-dimension-size-300);--spectrum-alias-focus-ring-border-radius-xsmall:var(--spectrum-global-dimension-size-50);--spectrum-alias-focus-ring-border-radius-small:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-focus-ring-border-radius-medium:var(--spectrum-global-dimension-size-150);--spectrum-alias-focus-ring-border-radius-large:var(--spectrum-global-dimension-size-250);--spectrum-alias-focus-ring-border-radius-xlarge:var(--spectrum-global-dimension-size-350);--spectrum-alias-single-line-height:var(--spectrum-global-dimension-size-400);--spectrum-alias-single-line-width:var(--spectrum-global-dimension-size-2400);--spectrum-alias-workflow-icon-size-s:var(--spectrum-global-dimension-size-200);--spectrum-alias-workflow-icon-size-m:var(--spectrum-global-dimension-size-225);--spectrum-alias-workflow-icon-size-xl:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-alert-size-75:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-alert-size-100:var(--spectrum-global-dimension-size-225);--spectrum-alias-ui-icon-alert-size-200:var(--spectrum-global-dimension-size-250);--spectrum-alias-ui-icon-alert-size-300:var(--spectrum-global-dimension-size-275);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(--spectrum-global-dimension-size-100);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(--spectrum-global-dimension-size-200);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(--spectrum-global-dimension-size-300);--spectrum-alias-ui-icon-cornertriangle-size-75:var(--spectrum-global-dimension-size-65);--spectrum-alias-ui-icon-cornertriangle-size-200:var(--spectrum-global-dimension-size-75);--spectrum-alias-ui-icon-asterisk-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-asterisk-size-100:var(--spectrum-global-dimension-size-100);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-avatar-border-size:var(--spectrum-global-dimension-size-0);--spectrum-alias-colorloupe-width:var(--spectrum-global-dimension-static-size-600);--spectrum-alias-colorloupe-height:var(--spectrum-global-dimension-static-size-800)}:host,:root{--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,.42);--spectrum-alias-transparent-blue-background-color-hover:rgba(0,87,190,.15);--spectrum-alias-transparent-blue-background-color-down:rgba(0,72,153,.3);--spectrum-alias-transparent-blue-background-color-key-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color-mouse-focus:var(--spectrum-alias-transparent-blue-background-color-hover);--spectrum-alias-transparent-blue-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-transparent-red-background-color-hover:rgba(154,0,0,.15);--spectrum-alias-transparent-red-background-color-down:rgba(124,0,0,.3);--spectrum-alias-transparent-red-background-color-key-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color-mouse-focus:var(--spectrum-alias-transparent-red-background-color-hover);--spectrum-alias-transparent-red-background-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-component-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-component-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-component-text-color-key-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-mouse-focus:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-default:var(--spectrum-alias-component-text-color-default);--spectrum-alias-component-text-color-selected-hover:var(--spectrum-alias-component-text-color-hover);--spectrum-alias-component-text-color-selected-down:var(--spectrum-alias-component-text-color-down);--spectrum-alias-component-text-color-selected-key-focus:var(--spectrum-alias-component-text-color-key-focus);--spectrum-alias-component-text-color-selected-mouse-focus:var(--spectrum-alias-component-text-color-mouse-focus);--spectrum-alias-component-text-color-selected:var(--spectrum-alias-component-text-color-selected-default);--spectrum-alias-component-text-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-text-color-emphasized-selected-hover:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-down:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-emphasized-selected:var(--spectrum-alias-component-text-color-emphasized-selected-default);--spectrum-alias-component-text-color-error-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-component-text-color-error-hover:var(--spectrum-semantic-negative-text-color-small-hover);--spectrum-alias-component-text-color-error-down:var(--spectrum-semantic-negative-text-color-small-down);--spectrum-alias-component-text-color-error-key-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error-mouse-focus:var(--spectrum-semantic-negative-text-color-small-key-focus);--spectrum-alias-component-text-color-error:var(--spectrum-alias-component-text-color-error-default);--spectrum-alias-component-icon-color-disabled:var(--spectrum-alias-icon-color-disabled);--spectrum-alias-component-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-component-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-component-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-component-icon-color:var(--spectrum-alias-component-icon-color-default);--spectrum-alias-component-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral-subdued);--spectrum-alias-component-icon-color-emphasized-selected-default:var(--spectrum-global-color-static-white);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-down:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-icon-color-emphasized-selected:var(--spectrum-alias-component-icon-color-emphasized-selected-default);--spectrum-alias-component-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-quiet-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-selected-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-component-background-color-default:var(--spectrum-global-color-gray-75);--spectrum-alias-component-background-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-component-background-color:var(--spectrum-alias-component-background-color-default);--spectrum-alias-component-background-color-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected-key-focus:var(--spectrum-global-color-gray-200);--spectrum-alias-component-background-color-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet-down:var(--spectrum-global-color-gray-300);--spectrum-alias-component-background-color-quiet-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-component-background-color-quiet:var(--spectrum-alias-component-background-color-quiet-default);--spectrum-alias-component-background-color-quiet-selected-default:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-quiet-selected-hover:var(--spectrum-alias-component-background-color-selected-hover);--spectrum-alias-component-background-color-quiet-selected-down:var(--spectrum-alias-component-background-color-selected-down);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(--spectrum-alias-component-background-color-selected-key-focus);--spectrum-alias-component-background-color-quiet-selected:var(--spectrum-alias-component-background-color-selected-default);--spectrum-alias-component-background-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-background-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-background-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-background-color-emphasized-selected:var(--spectrum-alias-component-background-color-emphasized-selected-default);--spectrum-alias-component-border-color-disabled:var(--spectrum-alias-border-color-disabled);--spectrum-alias-component-border-color-quiet-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color:var(--spectrum-alias-component-border-color-default);--spectrum-alias-component-border-color-selected-default:var(--spectrum-alias-border-color);--spectrum-alias-component-border-color-selected-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-component-border-color-selected-down:var(--spectrum-alias-border-color-down);--spectrum-alias-component-border-color-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-selected:var(--spectrum-alias-component-border-color-selected-default);--spectrum-alias-component-border-color-quiet-default:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-hover:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-down:var(--spectrum-alias-border-color-transparent);--spectrum-alias-component-border-color-quiet-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet:var(--spectrum-alias-component-border-color-quiet-default);--spectrum-alias-component-border-color-quiet-selected-default:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-hover:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-down:var(--spectrum-global-color-gray-200);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-component-border-color-quiet-selected:var(--spectrum-alias-component-border-color-quiet-selected-default);--spectrum-alias-component-border-color-emphasized-selected-default:var(--spectrum-semantic-cta-background-color-default);--spectrum-alias-component-border-color-emphasized-selected-hover:var(--spectrum-semantic-cta-background-color-hover);--spectrum-alias-component-border-color-emphasized-selected-down:var(--spectrum-semantic-cta-background-color-down);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(--spectrum-semantic-cta-background-color-key-focus);--spectrum-alias-component-border-color-emphasized-selected:var(--spectrum-alias-component-border-color-emphasized-selected-default);--spectrum-alias-avatar-border-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-down:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color:var(--spectrum-alias-avatar-border-color-default);--spectrum-alias-avatar-border-color-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-hover:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-down:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected-key-focus:var(--spectrum-alias-background-color-transparent);--spectrum-alias-avatar-border-color-selected:var(--spectrum-alias-avatar-border-color-selected-default);--spectrum-alias-avatar-border-color-selected-disabled:var(--spectrum-alias-background-color-transparent);--spectrum-alias-toggle-background-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-background-color:var(--spectrum-alias-toggle-background-color-default);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(--spectrum-global-color-blue-500);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-toggle-background-color-emphasized-selected:var(--spectrum-alias-toggle-background-color-emphasized-selected-default);--spectrum-alias-toggle-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-toggle-border-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-toggle-border-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-toggle-border-color:var(--spectrum-alias-toggle-border-color-default);--spectrum-alias-toggle-icon-color-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-toggle-icon-color-emphasized-selected:var(--spectrum-global-color-gray-75);--spectrum-alias-button-primary-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-primary-background-color-hover:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-background-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-button-primary-background-color-key-focus:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-background-color:var(--spectrum-alias-button-primary-background-color-default);--spectrum-alias-button-primary-border-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-border-color-hover:var(--spectrum-alias-button-primary-background-color-hover);--spectrum-alias-button-primary-border-color-down:var(--spectrum-alias-button-primary-background-color-down);--spectrum-alias-button-primary-border-color-key-focus:var(--spectrum-alias-button-primary-background-color-key-focus);--spectrum-alias-button-primary-border-color:var(--spectrum-alias-button-primary-border-color-default);--spectrum-alias-button-primary-text-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-button-primary-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-primary-text-color:var(--spectrum-alias-button-primary-text-color-default);--spectrum-alias-button-primary-icon-color-default:var(--spectrum-alias-button-primary-text-color-default);--spectrum-alias-button-primary-icon-color-hover:var(--spectrum-alias-button-primary-text-color-hover);--spectrum-alias-button-primary-icon-color-down:var(--spectrum-alias-button-primary-text-color-down);--spectrum-alias-button-primary-icon-color-key-focus:var(--spectrum-alias-button-primary-text-color-key-focus);--spectrum-alias-button-primary-icon-color:var(--spectrum-alias-button-primary-icon-color-default);--spectrum-alias-button-secondary-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-secondary-background-color-hover:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-background-color-down:var(--spectrum-global-color-gray-800);--spectrum-alias-button-secondary-background-color-key-focus:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-background-color:var(--spectrum-alias-button-secondary-background-color-default);--spectrum-alias-button-secondary-border-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-border-color-hover:var(--spectrum-alias-button-secondary-background-color-hover);--spectrum-alias-button-secondary-border-color-down:var(--spectrum-alias-button-secondary-background-color-down);--spectrum-alias-button-secondary-border-color-key-focus:var(--spectrum-alias-button-secondary-background-color-key-focus);--spectrum-alias-button-secondary-border-color:var(--spectrum-alias-button-secondary-border-color-default);--spectrum-alias-button-secondary-text-color-default:var(--spectrum-global-color-gray-700);--spectrum-alias-button-secondary-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-secondary-text-color:var(--spectrum-alias-button-secondary-text-color-default);--spectrum-alias-button-secondary-icon-color-default:var(--spectrum-alias-button-secondary-text-color-default);--spectrum-alias-button-secondary-icon-color-hover:var(--spectrum-alias-button-secondary-text-color-hover);--spectrum-alias-button-secondary-icon-color-down:var(--spectrum-alias-button-secondary-text-color-down);--spectrum-alias-button-secondary-icon-color-key-focus:var(--spectrum-alias-button-secondary-text-color-key-focus);--spectrum-alias-button-secondary-icon-color:var(--spectrum-alias-button-secondary-icon-color-default);--spectrum-alias-button-negative-background-color-default:var(--spectrum-alias-background-color-transparent);--spectrum-alias-button-negative-background-color-hover:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-background-color-down:var(--spectrum-global-color-red-700);--spectrum-alias-button-negative-background-color-key-focus:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-background-color:var(--spectrum-alias-button-negative-background-color-default);--spectrum-alias-button-negative-border-color-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color-hover:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color-down:var(--spectrum-global-color-red-700);--spectrum-alias-button-negative-border-color-key-focus:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-border-color:var(--spectrum-alias-button-negative-border-color-default);--spectrum-alias-button-negative-text-color-default:var(--spectrum-semantic-negative-text-color-small);--spectrum-alias-button-negative-text-color-hover:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color-down:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color-key-focus:var(--spectrum-global-color-gray-50);--spectrum-alias-button-negative-text-color:var(--spectrum-alias-button-negative-text-color-default);--spectrum-alias-button-negative-icon-color-default:var(--spectrum-alias-button-negative-text-color-default);--spectrum-alias-button-negative-icon-color-hover:var(--spectrum-alias-button-negative-text-color-hover);--spectrum-alias-button-negative-icon-color-down:var(--spectrum-alias-button-negative-text-color-down);--spectrum-alias-button-negative-icon-color-key-focus:var(--spectrum-alias-button-negative-text-color-key-focus);--spectrum-alias-button-negative-icon-color:var(--spectrum-alias-button-negative-icon-color-default);--spectrum-alias-input-border-color-disabled:var(--spectrum-alias-border-color-transparent);--spectrum-alias-input-border-color-quiet-disabled:var(--spectrum-alias-border-color-mid);--spectrum-alias-input-border-color-default:var(--spectrum-alias-border-color);--spectrum-alias-input-border-color-hover:var(--spectrum-alias-border-color-hover);--spectrum-alias-input-border-color-down:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-mouse-focus:var(--spectrum-alias-border-color-mouse-focus);--spectrum-alias-input-border-color-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color:var(--spectrum-alias-input-border-color-default);--spectrum-alias-input-border-color-invalid-default:var(--spectrum-semantic-negative-color-default);--spectrum-alias-input-border-color-invalid-hover:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-down:var(--spectrum-semantic-negative-color-down);--spectrum-alias-input-border-color-invalid-mouse-focus:var(--spectrum-semantic-negative-color-hover);--spectrum-alias-input-border-color-invalid-key-focus:var(--spectrum-alias-border-color-key-focus);--spectrum-alias-input-border-color-invalid:var(--spectrum-alias-input-border-color-invalid-default);--spectrum-alias-background-color-yellow-default:var(--spectrum-global-color-static-yellow-300);--spectrum-alias-background-color-yellow-hover:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-key-focus:var(--spectrum-global-color-static-yellow-400);--spectrum-alias-background-color-yellow-down:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-background-color-yellow:var(--spectrum-alias-background-color-yellow-default);--spectrum-alias-infieldbutton-background-color:var(--spectrum-global-color-gray-200);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-infieldbutton-fill-border-color-default:var(--spectrum-alias-input-border-color-default);--spectrum-alias-infieldbutton-fill-border-color-hover:var(--spectrum-alias-input-border-color-hover);--spectrum-alias-infieldbutton-fill-border-color-down:var(--spectrum-alias-input-border-color-down);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(--spectrum-alias-input-border-color-mouse-focus);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(--spectrum-alias-input-border-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(--spectrum-alias-component-background-color-default);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(--spectrum-alias-component-background-color-hover);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(--spectrum-alias-component-background-color-down);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(--spectrum-alias-component-background-color-key-focus);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(--spectrum-alias-component-background-color-disabled);--spectrum-alias-tabs-divider-background-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-tabs-divider-background-color-quiet:var(--spectrum-alias-background-color-transparent);--spectrum-alias-tabitem-text-color-default:var(--spectrum-alias-label-text-color);--spectrum-alias-tabitem-text-color-hover:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-down:var(--spectrum-alias-text-color-down);--spectrum-alias-tabitem-text-color-key-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color-mouse-focus:var(--spectrum-alias-text-color-hover);--spectrum-alias-tabitem-text-color:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-selected-default:var(--spectrum-global-color-gray-900);--spectrum-alias-tabitem-text-color-selected-hover:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-down:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-key-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-selected:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-text-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-text-color-emphasized-selected-default:var(--spectrum-global-color-static-blue-500);--spectrum-alias-tabitem-text-color-emphasized-selected-hover:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-down:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-key-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected-mouse-focus:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-text-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-selection-indicator-color-default:var(--spectrum-alias-tabitem-text-color-selected-default);--spectrum-alias-tabitem-selection-indicator-color-emphasized:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-tabitem-icon-color-disabled:var(--spectrum-alias-text-color-disabled);--spectrum-alias-tabitem-icon-color-default:var(--spectrum-alias-icon-color);--spectrum-alias-tabitem-icon-color-hover:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-down:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color-key-focus:var(--spectrum-alias-icon-color-hover);--spectrum-alias-tabitem-icon-color-mouse-focus:var(--spectrum-alias-icon-color-down);--spectrum-alias-tabitem-icon-color:var(--spectrum-alias-tabitem-icon-color-default);--spectrum-alias-tabitem-icon-color-selected:var(--spectrum-alias-icon-color-selected-neutral);--spectrum-alias-tabitem-icon-color-emphasized:var(--spectrum-alias-tabitem-text-color-default);--spectrum-alias-tabitem-icon-color-emphasized-selected:var(--spectrum-alias-tabitem-text-color-emphasized-selected-default);--spectrum-alias-assetcard-selectionindicator-background-color-ordered:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-overlay-background-color:rgba(27,127,245,.1);--spectrum-alias-assetcard-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-hover:var(--spectrum-global-color-blue-500);--spectrum-alias-assetcard-border-color-selected-down:var(--spectrum-global-color-blue-600);--spectrum-alias-background-color-default:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quiet-overbackground-hover:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quiet-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-overbackground-disabled:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-placeholder-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-placeholder-text-color-selected:var(--spectrum-global-color-gray-800);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-mouse-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(--spectrum-global-color-blue-400);--spectrum-alias-border-color-mouse-focus:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-disabled:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-extralight:var(--spectrum-global-color-gray-100);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(--spectrum-global-color-gray-600);--spectrum-alias-border-color-darker-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-darker-down:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-fill-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-disabled:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-darksquare-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-thumbnail-lightsquare-background-color:var(--spectrum-global-color-static-white);--spectrum-alias-track-color-overbackground:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(--spectrum-global-color-static-white);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-quiet-overbackground-disabled:hsla(0,0%,100%,.15);--spectrum-alias-icon-color-selected-neutral:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-selected-neutral-subdued:var(--spectrum-global-color-gray-800);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(--spectrum-global-color-blue-600);--spectrum-alias-icon-color-selected-down:var(--spectrum-global-color-blue-700);--spectrum-alias-icon-color-selected-focus:var(--spectrum-global-color-blue-600);--spectrum-alias-image-opacity-disabled:var(--spectrum-global-color-opacity-30);--spectrum-alias-toolbar-background-color:var(--spectrum-global-color-gray-100);--spectrum-alias-code-highlight-color-default:var(--spectrum-global-color-gray-800);--spectrum-alias-code-highlight-background-color:var(--spectrum-global-color-gray-75);--spectrum-alias-code-highlight-color-keyword:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-section:var(--spectrum-global-color-red-600);--spectrum-alias-code-highlight-color-literal:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-attribute:var(--spectrum-global-color-seafoam-600);--spectrum-alias-code-highlight-color-class:var(--spectrum-global-color-magenta-600);--spectrum-alias-code-highlight-color-variable:var(--spectrum-global-color-purple-600);--spectrum-alias-code-highlight-color-title:var(--spectrum-global-color-indigo-600);--spectrum-alias-code-highlight-color-string:var(--spectrum-global-color-fuchsia-600);--spectrum-alias-code-highlight-color-function:var(--spectrum-global-color-blue-600);--spectrum-alias-code-highlight-color-comment:var(--spectrum-global-color-gray-700);--spectrum-alias-categorical-color-1:var(--spectrum-global-color-static-seafoam-200);--spectrum-alias-categorical-color-2:var(--spectrum-global-color-static-indigo-700);--spectrum-alias-categorical-color-3:var(--spectrum-global-color-static-orange-500);--spectrum-alias-categorical-color-4:var(--spectrum-global-color-static-magenta-500);--spectrum-alias-categorical-color-5:var(--spectrum-global-color-static-indigo-200);--spectrum-alias-categorical-color-6:var(--spectrum-global-color-static-celery-200);--spectrum-alias-categorical-color-7:var(--spectrum-global-color-static-blue-500);--spectrum-alias-categorical-color-8:var(--spectrum-global-color-static-purple-800);--spectrum-alias-categorical-color-9:var(--spectrum-global-color-static-yellow-500);--spectrum-alias-categorical-color-10:var(--spectrum-global-color-static-orange-700);--spectrum-alias-categorical-color-11:var(--spectrum-global-color-static-green-600);--spectrum-alias-categorical-color-12:var(--spectrum-global-color-static-chartreuse-300);--spectrum-alias-categorical-color-13:var(--spectrum-global-color-static-blue-200);--spectrum-alias-categorical-color-14:var(--spectrum-global-color-static-fuchsia-500);--spectrum-alias-categorical-color-15:var(--spectrum-global-color-static-magenta-200);--spectrum-alias-categorical-color-16:var(--spectrum-global-color-static-yellow-200)}:host,:root{--spectrum-colorloupe-express-visibility:none;--spectrum-colorloupe-spectrum-visibility:block;--spectrum-colorloupe-outer-border-color:transparent;--spectrum-colorloupe-outer-border-size:0;--spectrum-colorloupe-outer-stroke-color:var(--spectrum-global-color-static-transparent-black-200);--spectrum-colorloupe-outer-stroke-width:var(--spectrum-alias-border-size-thick);--spectrum-colorhandle-background-offset:calc(var(--spectrum-global-dimension-static-size-25)*-1);--spectrum-colorhandle-inner-shadow-color:var(--spectrum-colorhandle-outer-shadow-color);--spectrum-colorhandle-outer-shadow-color:rgba(0,0,0,.42);--spectrum-colorhandle-outer-shadow-blur:0;--spectrum-colorhandle-outer-shadow-spread:var(--spectrum-alias-border-size-thin);--spectrum-colorcontrol-checkerboard-light-color:var(--spectrum-global-color-static-white);--spectrum-colorcontrol-checkerboard-dark-color:var(--spectrum-global-color-static-gray-300);--spectrum-slider-m-track-inside-border-radius:var(--spectrum-slider-m-track-border-radius);--spectrum-slider-label-text-size:var(--spectrum-global-dimension-font-size-75)}:host,:root{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host,:root{--spectrum-transparent-white-100:hsla(0,0%,100%,0);--spectrum-transparent-white-200:hsla(0,0%,100%,.1);--spectrum-transparent-white-300:hsla(0,0%,100%,.25);--spectrum-transparent-white-400:hsla(0,0%,100%,.4);--spectrum-transparent-white-500:hsla(0,0%,100%,.55);--spectrum-transparent-white-600:hsla(0,0%,100%,.7);--spectrum-transparent-white-700:hsla(0,0%,100%,.8);--spectrum-transparent-white-800:hsla(0,0%,100%,.9);--spectrum-transparent-white-900:#fff;--spectrum-transparent-black-100:transparent;--spectrum-transparent-black-200:rgba(0,0,0,.1);--spectrum-transparent-black-300:rgba(0,0,0,.25);--spectrum-transparent-black-400:rgba(0,0,0,.4);--spectrum-transparent-black-500:rgba(0,0,0,.55);--spectrum-transparent-black-600:rgba(0,0,0,.7);--spectrum-transparent-black-700:rgba(0,0,0,.8);--spectrum-transparent-black-800:rgba(0,0,0,.9);--spectrum-transparent-black-900:#000;--spectrum-focus-indicator-color:var(--spectrum-blue-800);--spectrum-static-white-focus-indicator-color:var(--spectrum-white);--spectrum-static-black-focus-indicator-color:var(--spectrum-black);--spectrum-overlay-color:var(--spectrum-black);--spectrum-neutral-content-color-default:var(--spectrum-gray-800);--spectrum-neutral-content-color-hover:var(--spectrum-gray-900);--spectrum-neutral-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-content-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-default:var(--spectrum-gray-700);--spectrum-neutral-subdued-content-color-hover:var(--spectrum-gray-800);--spectrum-neutral-subdued-content-color-down:var(--spectrum-gray-900);--spectrum-neutral-subdued-content-color-key-focus:var(--spectrum-gray-800);--spectrum-accent-content-color-default:var(--spectrum-accent-color-900);--spectrum-accent-content-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-content-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-content-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-negative-content-color-default:var(--spectrum-negative-color-900);--spectrum-negative-content-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-content-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-content-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-disabled-content-color:var(--spectrum-gray-400);--spectrum-disabled-static-white-content-color:var(--spectrum-transparent-white-500);--spectrum-disabled-static-black-content-color:var(--spectrum-transparent-black-500);--spectrum-disabled-background-color:var(--spectrum-gray-200);--spectrum-disabled-static-white-background-color:var(--spectrum-transparent-white-200);--spectrum-disabled-static-black-background-color:var(--spectrum-transparent-black-200);--spectrum-disabled-border-color:var(--spectrum-gray-300);--spectrum-disabled-static-white-border-color:var(--spectrum-transparent-white-300);--spectrum-disabled-static-black-border-color:var(--spectrum-transparent-black-300);--spectrum-opacity-disabled:0.3;--spectrum-background-opacity-default:0;--spectrum-background-opacity-hover:0.1;--spectrum-background-opacity-down:0.1;--spectrum-background-opacity-key-focus:0.1;--spectrum-negative-border-color-default:var(--spectrum-negative-color-900);--spectrum-negative-border-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-border-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-border-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-informative-color-100:var(--spectrum-blue-100);--spectrum-informative-color-200:var(--spectrum-blue-200);--spectrum-informative-color-300:var(--spectrum-blue-300);--spectrum-informative-color-400:var(--spectrum-blue-400);--spectrum-informative-color-500:var(--spectrum-blue-500);--spectrum-informative-color-600:var(--spectrum-blue-600);--spectrum-informative-color-700:var(--spectrum-blue-700);--spectrum-informative-color-800:var(--spectrum-blue-800);--spectrum-informative-color-900:var(--spectrum-blue-900);--spectrum-informative-color-1000:var(--spectrum-blue-1000);--spectrum-informative-color-1100:var(--spectrum-blue-1100);--spectrum-informative-color-1200:var(--spectrum-blue-1200);--spectrum-informative-color-1300:var(--spectrum-blue-1300);--spectrum-informative-color-1400:var(--spectrum-blue-1400);--spectrum-negative-color-100:var(--spectrum-red-100);--spectrum-negative-color-200:var(--spectrum-red-200);--spectrum-negative-color-300:var(--spectrum-red-300);--spectrum-negative-color-400:var(--spectrum-red-400);--spectrum-negative-color-500:var(--spectrum-red-500);--spectrum-negative-color-600:var(--spectrum-red-600);--spectrum-negative-color-700:var(--spectrum-red-700);--spectrum-negative-color-800:var(--spectrum-red-800);--spectrum-negative-color-900:var(--spectrum-red-900);--spectrum-negative-color-1000:var(--spectrum-red-1000);--spectrum-negative-color-1100:var(--spectrum-red-1100);--spectrum-negative-color-1200:var(--spectrum-red-1200);--spectrum-negative-color-1300:var(--spectrum-red-1300);--spectrum-negative-color-1400:var(--spectrum-red-1400);--spectrum-notice-color-100:var(--spectrum-orange-100);--spectrum-notice-color-200:var(--spectrum-orange-200);--spectrum-notice-color-300:var(--spectrum-orange-300);--spectrum-notice-color-400:var(--spectrum-orange-400);--spectrum-notice-color-500:var(--spectrum-orange-500);--spectrum-notice-color-600:var(--spectrum-orange-600);--spectrum-notice-color-700:var(--spectrum-orange-700);--spectrum-notice-color-800:var(--spectrum-orange-800);--spectrum-notice-color-900:var(--spectrum-orange-900);--spectrum-notice-color-1000:var(--spectrum-orange-1000);--spectrum-notice-color-1100:var(--spectrum-orange-1100);--spectrum-notice-color-1200:var(--spectrum-orange-1200);--spectrum-notice-color-1300:var(--spectrum-orange-1300);--spectrum-notice-color-1400:var(--spectrum-orange-1400);--spectrum-positive-color-100:var(--spectrum-green-100);--spectrum-positive-color-200:var(--spectrum-green-200);--spectrum-positive-color-300:var(--spectrum-green-300);--spectrum-positive-color-400:var(--spectrum-green-400);--spectrum-positive-color-500:var(--spectrum-green-500);--spectrum-positive-color-600:var(--spectrum-green-600);--spectrum-positive-color-700:var(--spectrum-green-700);--spectrum-positive-color-800:var(--spectrum-green-800);--spectrum-positive-color-900:var(--spectrum-green-900);--spectrum-positive-color-1000:var(--spectrum-green-1000);--spectrum-positive-color-1100:var(--spectrum-green-1100);--spectrum-positive-color-1200:var(--spectrum-green-1200);--spectrum-positive-color-1300:var(--spectrum-green-1300);--spectrum-positive-color-1400:var(--spectrum-green-1400);--spectrum-black:#000;--spectrum-white:#fff;--spectrum-swatch-border-color:var(--spectrum-gray-900);--spectrum-swatch-border-opacity:0.51;--spectrum-swatch-disabled-icon-border-color:var(--spectrum-black);--spectrum-swatch-disabled-icon-border-opacity:0.51;--spectrum-alert-dialog-minimum-width:288px;--spectrum-alert-dialog-maximum-width:480px;--spectrum-button-minimum-width-multiplier:2.25;--spectrum-divider-thickness-small:1px;--spectrum-divider-thickness-medium:2px;--spectrum-divider-thickness-large:4px;--spectrum-field-label-to-component:0px;--spectrum-menu-item-label-to-description:1px;--spectrum-meter-minimum-width:48px;--spectrum-meter-maximum-width:768px;--spectrum-swatch-rectangle-width-multiplier:2;--spectrum-swatch-slash-thickness-extra-small:2px;--spectrum-swatch-slash-thickness-small:3px;--spectrum-swatch-slash-thickness-medium:4px;--spectrum-swatch-slash-thickness-large:5px;--spectrum-progress-bar-minimum-width:48px;--spectrum-progress-bar-maximum-width:768px;--spectrum-radio-button-selection-indicator:4px;--spectrum-help-text-to-component:0px;--spectrum-popover-tip-width:16px;--spectrum-popover-tip-height:8px;--spectrum-sans-serif-heading-light:var(--spectrum-font-light-default);--spectrum-serif-heading-light:var(--spectrum-font-regular-default);--spectrum-heading-heavy:var(--spectrum-font-black-default);--spectrum-heading-light-strong:var(--spectrum-font-bold-default);--spectrum-heading-strong:var(--spectrum-font-black-default);--spectrum-heading-heavy-strong:var(--spectrum-font-black-default);--spectrum-sans-serif-heading-light-emphasized:var(--spectrum-font-light-italic-default);--spectrum-serif-heading-light-emphasized:var(--spectrum-font-italic-default);--spectrum-heading-heavy-emphasized:var(--spectrum-font-black-italic-default);--spectrum-heading-light-strong-emphasized:var(--spectrum-font-bold-italic-default);--spectrum-heading-strong-emphasized:var(--spectrum-font-black-italic-default);--spectrum-heading-heavy-strong-emphasized:var(--spectrum-font-black-italic-default);--spectrum-cjk-heading-light:var(--spectrum-font-light-cjk);--spectrum-cjk-heading-heavy:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-light-strong:var(--spectrum-font-extra-bold-cjk);--spectrum-cjk-heading-strong:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-heavy-strong:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-light-emphasized:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-emphasized:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-heavy-emphasized:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-light-strong-emphasized:var(--spectrum-font-extra-bold-cjk);--spectrum-cjk-heading-strong-emphasized:var(--spectrum-font-black-cjk);--spectrum-cjk-heading-heavy-strong-emphasized:var(--spectrum-font-black-cjk);--spectrum-heading-size-xxxl:var(--spectrum-font-size-1300);--spectrum-heading-size-xxl:var(--spectrum-font-size-1100);--spectrum-heading-size-xl:var(--spectrum-font-size-900);--spectrum-heading-size-l:var(--spectrum-font-size-700);--spectrum-heading-size-m:var(--spectrum-font-size-500);--spectrum-heading-size-s:var(--spectrum-font-size-300);--spectrum-heading-size-xs:var(--spectrum-font-size-200);--spectrum-heading-size-xxs:var(--spectrum-font-size-100);--spectrum-heading-line-height:var(--spectrum-line-height-100);--spectrum-cjk-heading-line-height:var(--spectrum-cjk-line-height-100);--spectrum-heading-margin-top-multiplier:0.8889;--spectrum-heading-margin-bottom-multiplier:0.25;--spectrum-body:var(--spectrum-font-regular-default);--spectrum-body-strong:var(--spectrum-font-bold-default);--spectrum-body-emphasized:var(--spectrum-font-italic-default);--spectrum-body-strong-emphasized:var(--spectrum-font-bold-italic-default);--spectrum-cjk-body:var(--spectrum-font-regular-cjk);--spectrum-cjk-body-strong:var(--spectrum-font-black-cjk);--spectrum-cjk-body-emphasized:var(--spectrum-font-extra-bold-cjk);--spectrum-cjk-body-strong-emphasized:var(--spectrum-font-black-cjk);--spectrum-body-size-xxxl:var(--spectrum-font-size-600);--spectrum-body-size-xxl:var(--spectrum-font-size-500);--spectrum-body-size-xl:var(--spectrum-font-size-400);--spectrum-body-size-l:var(--spectrum-font-size-300);--spectrum-body-size-m:var(--spectrum-font-size-200);--spectrum-body-size-s:var(--spectrum-font-size-100);--spectrum-body-size-xs:var(--spectrum-font-size-75);--spectrum-body-line-height:var(--spectrum-line-height-200);--spectrum-cjk-body-line-height:var(--spectrum-cjk-line-height-200);--spectrum-body-margin-multiplier:0.75;--spectrum-detail:var(--spectrum-font-bold-default);--spectrum-detail-light:var(--spectrum-font-regular-default);--spectrum-detail-strong:var(--spectrum-font-bold-default);--spectrum-detail-light-strong:var(--spectrum-font-regular-default);--spectrum-detail-emphasized:var(--spectrum-font-bold-italic-default);--spectrum-detail-light-emphasized:var(--spectrum-font-italic-default);--spectrum-detail-strong-emphasized:var(--spectrum-font-bold-italic-default);--spectrum-detail-light-strong-emphasized:var(--spectrum-font-italic-default);--spectrum-cjk-detail:var(--spectrum-font-extra-bold-cjk);--spectrum-cjk-detail-light:var(--spectrum-font-light-cjk);--spectrum-cjk-detail-strong:var(--spectrum-font-black-cjk);--spectrum-cjk-detail-light-strong:var(--spectrum-font-extra-bold-cjk);--spectrum-cjk-detail-emphasized:var(--spectrum-font-black-cjk);--spectrum-cjk-detail-light-emphasized:var(--spectrum-font-regular-cjk);--spectrum-cjk-detail-strong-emphasized:var(--spectrum-font-black-cjk);--spectrum-cjk-detail-light-strong-emphasized:var(--spectrum-font-extra-bold-cjk);--spectrum-detail-size-xl:var(--spectrum-font-size-200);--spectrum-detail-size-l:var(--spectrum-font-size-100);--spectrum-detail-size-m:var(--spectrum-font-size-75);--spectrum-detail-size-s:var(--spectrum-font-size-50);--spectrum-detail-line-height:var(--spectrum-line-height-100);--spectrum-cjk-detail-line-height:var(--spectrum-cjk-line-height-100);--spectrum-detail-margin-top-mulitplier:0.8889;--spectrum-detail-margin-bottom-multiplier:0.25;--spectrum-detail-letter-spacing:0.06em;--spectrum-code:var(--spectrum-font-regular-default);--spectrum-code-strong:var(--spectrum-font-bold-default);--spectrum-code-emphasized:var(--spectrum-font-italic-default);--spectrum-code-strong-emphasized:var(--spectrum-font-bold-italic-default);--spectrum-cjk-code:var(--spectrum-font-regular-cjk);--spectrum-cjk-code-strong:var(--spectrum-font-black-cjk);--spectrum-cjk-code-emphasized:var(--spectrum-font-bold-cjk);--spectrum-cjk-code-strong-emphasized:var(--spectrum-font-black-cjk);--spectrum-code-size-xl:var(--spectrum-font-size-400);--spectrum-code-size-l:var(--spectrum-font-size-300);--spectrum-code-size-m:var(--spectrum-font-size-200);--spectrum-code-size-s:var(--spectrum-font-size-100);--spectrum-code-size-xs:var(--spectrum-font-size-75);--spectrum-code-line-height:var(--spectrum-line-height-200);--spectrum-cjk-code-line-height:var(--spectrum-cjk-line-height-200);--spectrum-picker-minimum-width-multiplier:2;--spectrum-text-field-minimum-width-multiplier:1.5;--spectrum-combo-box-minimum-width-multiplier:2.5;--spectrum-combo-box-quiet-minimum-width-multiplier:2;--spectrum-combo-box-visual-to-field-button-quiet:0;--spectrum-android-elevation:2dp;--spectrum-spacing-50:2px;--spectrum-spacing-75:4px;--spectrum-spacing-100:8px;--spectrum-spacing-200:12px;--spectrum-spacing-300:16px;--spectrum-spacing-400:24px;--spectrum-spacing-500:32px;--spectrum-spacing-600:40px;--spectrum-spacing-700:48px;--spectrum-spacing-800:64px;--spectrum-spacing-900:80px;--spectrum-spacing-1000:96px;--spectrum-focus-indicator-thickness:2px;--spectrum-focus-indicator-gap:2px;--spectrum-border-width-200:2px;--spectrum-border-width-400:4px;--spectrum-line-height-100:1.3;--spectrum-line-height-200:1.5;--spectrum-font-family-default:var(--spectrum-font-family-sans-serif);--spectrum-font-family-sans-serif:adobe clean;--spectrum-font-family-serif:adobe clean serif;--spectrum-font-family-code:source code pro;--spectrum-font-light-default:adobe clean light;--spectrum-font-light-cjk:adobe clean han light;--spectrum-font-light-monospace:source code pro;--spectrum-font-light-italic-default:adobe clean light italic;--spectrum-font-light-italic-monospace:source code pro light italic;--spectrum-font-regular-default:adobe clean regular;--spectrum-font-regular-cjk:adobe clean han regular;--spectrum-font-regular-serif:adobe clean serif regular;--spectrum-font-regular-monospace:source code pro regular;--spectrum-font-italic-default:adobe clean italic;--spectrum-font-italic-serif:adobe clean serif italic;--spectrum-font-italic-monospace:source code pro italic;--spectrum-font-medium-default:adobe clean medium;--spectrum-font-medium-serif:adobe clean serif medium;--spectrum-font-medium-monospace:source code pro medium;--spectrum-font-bold-default:adobe clean bold;--spectrum-font-bold-cjk:adobe clean han bold;--spectrum-font-bold-serif:adobe clean serif bold;--spectrum-font-bold-monospace:source code pro bold;--spectrum-font-bold-italic-default:adobe clean bold italic;--spectrum-font-bold-italic-serif:adobe clean serif bold italic;--spectrum-font-bold-italic-monospace:source code pro bold italic;--spectrum-font-extra-bold-default:adobe clean extra bold;--spectrum-font-extra-bold-cjk:adobe clean han extra bold;--spectrum-font-black-default:adobe clean #000;--spectrum-font-black-cjk:adobe clean han #000;--spectrum-font-black-serif:adobe clean serif #000;--spectrum-font-black-monospace:source code pro #000;--spectrum-font-black-italic-default:adobe clean #000 italic;--spectrum-font-black-italic-serif:adobe clean serif #000 italic;--spectrum-font-black-italic-monospace:source code pro #000 italic;--spectrum-cjk-letter-spacing:0.05em;--spectrum-cjk-line-height-100:1.5;--spectrum-cjk-line-height-200:1.7;--spectrum-field-edge-to-text-quiet:0px;--spectrum-field-edge-to-border-quiet:0px;--spectrum-field-edge-to-alert-icon-quiet:0px;--spectrum-field-edge-to-validation-icon-quiet:0px}:host,:root{--spectrum-accent-color-100:var(--spectrum-blue-100);--spectrum-accent-color-200:var(--spectrum-blue-200);--spectrum-accent-color-300:var(--spectrum-blue-300);--spectrum-accent-color-400:var(--spectrum-blue-400);--spectrum-accent-color-500:var(--spectrum-blue-500);--spectrum-accent-color-600:var(--spectrum-blue-600);--spectrum-accent-color-700:var(--spectrum-blue-700);--spectrum-accent-color-800:var(--spectrum-blue-800);--spectrum-accent-color-900:var(--spectrum-blue-900);--spectrum-accent-color-1000:var(--spectrum-blue-1000);--spectrum-accent-color-1100:var(--spectrum-blue-1100);--spectrum-accent-color-1200:var(--spectrum-blue-1200);--spectrum-accent-color-1300:var(--spectrum-blue-1300);--spectrum-accent-color-1400:var(--spectrum-blue-1400);--spectrum-heading:var(--spectrum-font-bold-default);--spectrum-heading-emphasized:var(--spectrum-font-bold-italic-default);--spectrum-cjk-heading:var(--spectrum-font-extra-bold-cjk);--spectrum-slider-track-thickness:2px;--spectrum-slider-handle-gap:4px;--spectrum-border-width-100:1px}:host,:root{--system-spectrum-actionbutton-background-color-default:var(--spectrum-gray-75);--system-spectrum-actionbutton-background-color-hover:var(--spectrum-gray-200);--system-spectrum-actionbutton-background-color-down:var(--spectrum-gray-300);--system-spectrum-actionbutton-background-color-focus:var(--spectrum-gray-200);--system-spectrum-actionbutton-border-color-default:var(--spectrum-gray-400);--system-spectrum-actionbutton-border-color-hover:var(--spectrum-gray-500);--system-spectrum-actionbutton-border-color-down:var(--spectrum-gray-600);--system-spectrum-actionbutton-border-color-focus:var(--spectrum-gray-500);--system-spectrum-actionbutton-content-color-default:var(--spectrum-neutral-content-color-default);--system-spectrum-actionbutton-content-color-hover:var(--spectrum-neutral-content-color-hover);--system-spectrum-actionbutton-content-color-down:var(--spectrum-neutral-content-color-down);--system-spectrum-actionbutton-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--system-spectrum-actionbutton-background-color-disabled:transparent;--system-spectrum-actionbutton-border-color-disabled:var(--spectrum-disabled-border-color);--system-spectrum-actionbutton-content-color-disabled:var(--spectrum-disabled-content-color);--system-spectrum-actionbutton-quiet-background-color-default:transparent;--system-spectrum-actionbutton-quiet-background-color-hover:var(--spectrum-gray-200);--system-spectrum-actionbutton-quiet-background-color-down:var(--spectrum-gray-300);--system-spectrum-actionbutton-quiet-background-color-focus:var(--spectrum-gray-200);--system-spectrum-actionbutton-quiet-border-color-default:transparent;--system-spectrum-actionbutton-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-quiet-border-color-down:transparent;--system-spectrum-actionbutton-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-quiet-background-color-disabled:transparent;--system-spectrum-actionbutton-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-background-color-default:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-actionbutton-selected-background-color-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-actionbutton-selected-background-color-down:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-actionbutton-selected-background-color-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-actionbutton-selected-border-color-default:transparent;--system-spectrum-actionbutton-selected-border-color-hover:transparent;--system-spectrum-actionbutton-selected-border-color-down:transparent;--system-spectrum-actionbutton-selected-border-color-focus:transparent;--system-spectrum-actionbutton-selected-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-selected-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-selected-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-selected-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-selected-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-actionbutton-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-selected-emphasized-background-color-default:var(--spectrum-accent-background-color-default);--system-spectrum-actionbutton-selected-emphasized-background-color-hover:var(--spectrum-accent-background-color-hover);--system-spectrum-actionbutton-selected-emphasized-background-color-down:var(--spectrum-accent-background-color-down);--system-spectrum-actionbutton-selected-emphasized-background-color-focus:var(--spectrum-accent-background-color-key-focus);--system-spectrum-actionbutton-staticblack-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-default:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-hover:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-down:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-focus:transparent;--system-spectrum-actionbutton-staticblack-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-quiet-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-background-color-default:transparent;--system-spectrum-actionbutton-staticblack-background-color-hover:var(--spectrum-transparent-black-300);--system-spectrum-actionbutton-staticblack-background-color-down:var(--spectrum-transparent-black-400);--system-spectrum-actionbutton-staticblack-background-color-focus:var(--spectrum-transparent-black-300);--system-spectrum-actionbutton-staticblack-border-color-default:var(--spectrum-transparent-black-400);--system-spectrum-actionbutton-staticblack-border-color-hover:var(--spectrum-transparent-black-500);--system-spectrum-actionbutton-staticblack-border-color-down:var(--spectrum-transparent-black-600);--system-spectrum-actionbutton-staticblack-border-color-focus:var(--spectrum-transparent-black-500);--system-spectrum-actionbutton-staticblack-content-color-default:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-hover:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-down:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-content-color-focus:var(--spectrum-black);--system-spectrum-actionbutton-staticblack-focus-indicator-color:var(--spectrum-static-black-focus-indicator-color);--system-spectrum-actionbutton-staticblack-background-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-border-color-disabled:var(--spectrum-disabled-static-black-border-color);--system-spectrum-actionbutton-staticblack-content-color-disabled:var(--spectrum-disabled-static-black-content-color);--system-spectrum-actionbutton-staticblack-selected-background-color-default:var(--spectrum-transparent-black-800);--system-spectrum-actionbutton-staticblack-selected-background-color-hover:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-background-color-down:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-background-color-focus:var(--spectrum-transparent-black-900);--system-spectrum-actionbutton-staticblack-selected-border-color-disabled:transparent;--system-spectrum-actionbutton-staticblack-selected-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-staticblack-selected-background-color-disabled:var(--spectrum-disabled-static-black-background-color);--system-spectrum-actionbutton-staticwhite-background-color-default:transparent;--system-spectrum-actionbutton-staticwhite-background-color-hover:var(--spectrum-transparent-white-300);--system-spectrum-actionbutton-staticwhite-background-color-down:var(--spectrum-transparent-white-400);--system-spectrum-actionbutton-staticwhite-background-color-focus:var(--spectrum-transparent-white-300);--system-spectrum-actionbutton-staticwhite-border-color-default:var(--spectrum-transparent-white-400);--system-spectrum-actionbutton-staticwhite-border-color-hover:var(--spectrum-transparent-white-500);--system-spectrum-actionbutton-staticwhite-border-color-down:var(--spectrum-transparent-white-600);--system-spectrum-actionbutton-staticwhite-border-color-focus:var(--spectrum-transparent-white-500);--system-spectrum-actionbutton-staticwhite-content-color-default:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-hover:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-down:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-content-color-focus:var(--spectrum-white);--system-spectrum-actionbutton-staticwhite-focus-indicator-color:var(--spectrum-static-white-focus-indicator-color);--system-spectrum-actionbutton-staticwhite-background-color-disabled:transparent;--system-spectrum-actionbutton-staticwhite-border-color-disabled:var(--spectrum-disabled-static-white-border-color);--system-spectrum-actionbutton-staticwhite-content-color-disabled:var(--spectrum-disabled-static-white-content-color);--system-spectrum-actionbutton-staticwhite-selected-background-color-default:var(--spectrum-transparent-white-800);--system-spectrum-actionbutton-staticwhite-selected-background-color-hover:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-background-color-down:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-background-color-focus:var(--spectrum-transparent-white-900);--system-spectrum-actionbutton-staticwhite-selected-content-color-default:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-content-color-hover:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-content-color-down:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-content-color-focus:var(--spectrum-black);--system-spectrum-actionbutton-staticwhite-selected-background-color-disabled:var(--spectrum-disabled-static-white-background-color);--system-spectrum-actionbutton-staticwhite-selected-border-color-disabled:transparent}:host,:root{--system-spectrum-checkbox-control-color-default:var(--spectrum-gray-600);--system-spectrum-checkbox-control-color-hover:var(--spectrum-gray-700);--system-spectrum-checkbox-control-color-down:var(--spectrum-gray-800);--system-spectrum-checkbox-control-color-focus:var(--spectrum-gray-700);--system-spectrum-checkbox-control-selected-color-default:var(--spectrum-gray-700);--system-spectrum-checkbox-control-selected-color-hover:var(--spectrum-gray-800);--system-spectrum-checkbox-control-selected-color-down:var(--spectrum-gray-900)}:host,:root{--system-spectrum-closebutton-background-color-default:transparent;--system-spectrum-closebutton-background-color-hover:var(--spectrum-gray-200);--system-spectrum-closebutton-background-color-down:var(--spectrum-gray-300);--system-spectrum-closebutton-background-color-focus:var(--spectrum-gray-200)}:host,:root{--system-spectrum-radio-button-border-color-default:var(--spectrum-gray-600);--system-spectrum-radio-button-border-color-hover:var(--spectrum-gray-700);--system-spectrum-radio-button-border-color-down:var(--spectrum-gray-800);--system-spectrum-radio-button-border-color-focus:var(--spectrum-gray-700);--system-spectrum-radio-button-checked-border-color-default:var(--spectrum-gray-700);--system-spectrum-radio-button-checked-border-color-hover:var(--spectrum-gray-800);--system-spectrum-radio-button-checked-border-color-down:var(--spectrum-gray-900);--system-spectrum-radio-button-checked-border-color-focus:var(--spectrum-gray-800);--system-spectrum-radio-emphasized-button-checked-border-color-default:var(--spectrum-accent-color-900);--system-spectrum-radio-emphasized-button-checked-border-color-hover:var(--spectrum-accent-color-1000);--system-spectrum-radio-emphasized-button-checked-border-color-down:var(--spectrum-accent-color-1100);--system-spectrum-radio-emphasized-button-checked-border-color-focus:var(--spectrum-accent-color-1000)}:host,:root{--system-spectrum-switch-background-color-selected-default:var(--spectrum-gray-700);--system-spectrum-switch-background-color-selected-hover:var(--spectrum-gray-800);--system-spectrum-switch-background-color-selected-down:var(--spectrum-gray-900);--system-spectrum-switch-background-color-selected-focus:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-default:var(--spectrum-gray-600);--system-spectrum-switch-handle-border-color-hover:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-down:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-focus:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-selected-default:var(--spectrum-gray-700);--system-spectrum-switch-handle-border-color-selected-hover:var(--spectrum-gray-800);--system-spectrum-switch-handle-border-color-selected-down:var(--spectrum-gray-900);--system-spectrum-switch-handle-border-color-selected-focus:var(--spectrum-gray-800)}:host,:root{--system-spectrum-toast-background-color-default:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system-spectrum-actiongroup-gap-size-compact:0;--system-spectrum-actiongroup-horizontal-spacing-compact:-1px;--system-spectrum-actiongroup-vertical-spacing-compact:-1px}:host,:root{--system-spectrum-tag-border-color:var(--spectrum-gray-700);--system-spectrum-tag-border-color-hover:var(--spectrum-gray-800);--system-spectrum-tag-border-color-active:var(--spectrum-gray-900);--system-spectrum-tag-border-color-focus:var(--spectrum-gray-800);--system-spectrum-tag-size-small-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-size-medium-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-size-large-corner-radius:var(--spectrum-corner-radius-100);--system-spectrum-tag-background-color:var(--spectrum-gray-75);--system-spectrum-tag-background-color-hover:var(--spectrum-gray-75);--system-spectrum-tag-background-color-active:var(--spectrum-gray-200);--system-spectrum-tag-background-color-focus:var(--spectrum-gray-75);--system-spectrum-tag-content-color:var(--spectrum-neutral-subdued-content-color-default);--system-spectrum-tag-content-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--system-spectrum-tag-content-color-active:var(--spectrum-neutral-subdued-content-color-down);--system-spectrum-tag-content-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--system-spectrum-tag-border-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-tag-border-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-tag-border-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-tag-border-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-tag-background-color-selected:var(--spectrum-neutral-subdued-background-color-default);--system-spectrum-tag-background-color-selected-hover:var(--spectrum-neutral-subdued-background-color-hover);--system-spectrum-tag-background-color-selected-active:var(--spectrum-neutral-subdued-background-color-down);--system-spectrum-tag-background-color-selected-focus:var(--spectrum-neutral-subdued-background-color-key-focus);--system-spectrum-tag-border-color-disabled:transparent;--system-spectrum-tag-background-color-disabled:var(--spectrum-disabled-background-color);--system-spectrum-tag-size-small-spacing-inline-start:var(--spectrum-component-edge-to-visual-75);--system-spectrum-tag-size-small-label-spacing-inline-end:var(--spectrum-component-edge-to-text-75);--system-spectrum-tag-size-small-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-75);--system-spectrum-tag-size-medium-spacing-inline-start:var(--spectrum-component-edge-to-visual-100);--system-spectrum-tag-size-medium-label-spacing-inline-end:var(--spectrum-component-edge-to-text-100);--system-spectrum-tag-size-medium-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-100);--system-spectrum-tag-size-large-spacing-inline-start:var(--spectrum-component-edge-to-visual-200);--system-spectrum-tag-size-large-label-spacing-inline-end:var(--spectrum-component-edge-to-text-200);--system-spectrum-tag-size-large-clear-button-spacing-inline-end:var(--spectrum-component-edge-to-visual-200)}:host,:root{--system-spectrum-tooltip-backgound-color-default-neutral:var(--spectrum-neutral-subdued-background-color-default)}:host,:root{--system:spectrum}:host,:root{--spectrum-animation-duration-100:130ms;--spectrum-animation-duration-200:160ms;--spectrum-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-line-height-large:1.7;--spectrum-line-height-medium:1.5;--spectrum-line-height-small:1.3;--spectrum-font-weight-thin:100;--spectrum-font-weight-ultra-light:200;--spectrum-font-weight-light:300;--spectrum-font-weight-regular:400;--spectrum-font-weight-medium:500;--spectrum-font-weight-semi-bold:600;--spectrum-font-weight-bold:700;--spectrum-font-weight-extra-bold:800;--spectrum-font-weight-black:900;--spectrum-docs-static-white-background-color:#0f797d;--spectrum-docs-static-black-background-color:#cef7f3}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;a.a.registerThemeFragment("spectrum","theme",s)},174:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(4),l=r(2),c=r(14),i=s.d`
            :host {
  display: flex;
  position: relative;
  animation: loading-animation 1s linear infinite;
}

@keyframes loading-animation {
  from {
    background: linear-gradient(to left, var(--spectrum-global-color-static-white), var(--spectrum-global-color-static-gray-300));
  }
  50% {
    background: linear-gradient(to left, var(--spectrum-global-color-static-white), var(--spectrum-global-color-static-gray-300), var(--spectrum-global-color-static-white));
  }
  to {
    background: linear-gradient(to left, var(--spectrum-global-color-static-gray-300), var(--spectrum-global-color-static-white));
  }
}

#highlight-canvas {
  display: block;
  height: 100%;
  left: 0;
  overflow: visible;
  position: absolute;
  top: 0;
  width: 100%;
}

:host(:hover) #highlight-canvas {
  display: block;
}

.highlight-rect {
  stroke: var(--spectrum-global-color-blue-500);
  stroke-width: 2;
  fill: transparent;
}

:host([image-fit-contain]) ::slotted(img) {
  object-fit: contain;
}

:host([image-fit-cover]) ::slotted(img) {
  object-fit: fill;
}

          `;class n extends CustomEvent{constructor(e){super("textframeenter",{detail:e,bubbles:!0,composed:!0})}}let u=class extends o.a{constructor(){super(...arguments),this.templateDimensions={width:0,height:0},this.textFrames=[],this._handleHighlightBoxMouseEnter=e=>{this.dispatchEvent(new n(e))},this._handleHighlightBoxMouseLeave=()=>{this.dispatchEvent(new CustomEvent("textframeenterleave"))}}static get styles(){return i}render(){return s.a`<slot></slot>${this._getHighlightCanvas()}`}_getHighlightCanvas(){if(this.textFrames)return s.a`<svg id="highlight-canvas">${this.textFrames.map((e=>this._getHighlightBox(e)))}</svg>`}_getHighlightBox(e){const t=this._getScaledCoords(e),r=`M${t[0]} ${t[1]} L${t[2]} ${t[3]} L${t[6]} ${t[7]} L${t[4]} ${t[5]} Z`;return s.h`<path class="highlight-rect" d="${r}" @mouseenter="${()=>this._handleHighlightBoxMouseEnter(e)}" @mouseleave="${this._handleHighlightBoxMouseLeave}"></path>`}_getScaledCoords(e){const t=this.getBoundingClientRect(),[r,a]=[t.height/this.templateDimensions.height,t.width/this.templateDimensions.width];return e.map(((e,t)=>t%2==0?e*a:e*r))}};Object(a.a)([Object(l.b)()],u.prototype,"templateDimensions",void 0),Object(a.a)([Object(l.b)()],u.prototype,"textFrames",void 0),u=Object(a.a)([Object(c.a)("af-ccx-text-frame-highlight")],u)},186:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=r(25),i=(r(48),r(148),r(105),r(74),r(97)),n=r(16),u=r(9),p=r(125),m=r(5),d=r(2),g=r(130),b=r(20),h=r(4),v=(r(182),r(181),r(23)),f=r(7),x=r(54),y=r(126),w=r(53);r(43),r(92),r(37),r(13),r(15),r(49),r(11),r(22),r(68),r(47),r(104),r(63),r(83),r(17),r(26);customElements.define("sp-icon-more",class extends u.a{render(){return Object(n.a)(s.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="More"}={})=>n.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 36 36"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <circle cx="17.8" cy="18.2" r="3.4" />
    <circle cx="29.5" cy="18.2" r="3.4" />
    <circle cx="6.1" cy="18.2" r="3.4" />
  </svg>`)({hidden:!this.label,title:this.label})}});var z=s.d`
:host{display:inline-flex}:host([quiet]){min-width:0}::slotted([slot=icon]){flex-shrink:0}.icon{flex-shrink:0}#popover{display:none;max-width:none;width:auto}:host([dir=ltr]) .icon,:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=rtl]) .icon,:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir]) slot[icon-only] .icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-inline-end:calc((var(
--custom-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--custom-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
))*-1);margin-inline-start:calc((var(
--custom-actionbutton-edge-to-text,
var(--spectrum-actionbutton-edge-to-text)
) - var(
--custom-actionbutton-edge-to-visual-only,
var(--spectrum-actionbutton-edge-to-visual-only)
))*-1)}
`,k=Object.defineProperty;Object.getOwnPropertyDescriptor;class T extends(Object(i.a)(p.b,"label")){constructor(){super(...arguments),this.selects=void 0,this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[z]}get hasLabel(){return this.slotHasContent}get buttonContent(){return[s.a`
                <slot name="icon" slot="icon" ?icon-only=${!this.hasLabel}>
                    <sp-icon-more class="icon"></sp-icon-more>
                </slot>
                <slot name="label" ?hidden=${!this.hasLabel}></slot>
            `]}render(){return s.a`
            <sp-action-button
                quiet
                ?selected=${this.open}
                aria-haspopup="true"
                aria-controls="popover"
                aria-expanded=${this.open?"true":"false"}
                aria-label=${Object(m.a)(this.label||void 0)}
                id="button"
                class="button"
                size=${this.size}
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
            >
                ${this.buttonContent}
            </sp-action-button>
        `}update(e){e.has("invalid")&&(this.invalid=!1),this.quiet=!0,super.update(e)}}((e,t,r,a)=>{for(var s,o=void 0,l=e.length-1;l>=0;l--)(s=e[l])&&(o=s(t,r,o)||o);o&&k(t,r,o)})([Object(d.b)({type:String})],T.prototype,"selects"),customElements.define("sp-action-menu",T);var j=Object.defineProperty;Object.getOwnPropertyDescriptor;class C extends(Object(b.a)(h.a,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.vertical=!1}render(){return s.a``}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","separator")}updated(e){super.updated(e),e.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}C.styles=[g.a],((e,t,r,a)=>{for(var s,o=void 0,l=e.length-1;l>=0;l--)(s=e[l])&&(o=s(t,r,o)||o);o&&j(t,r,o)})([Object(d.b)({type:Boolean,reflect:!0})],C.prototype,"vertical"),customElements.define("sp-divider",C),customElements.define("sp-icon-show-menu",class extends u.a{render(){return Object(n.a)(s.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="Show Menu"}={})=>n.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <rect height="4" rx="1" ry="1" width="28" x="4" y="16" />
    <rect height="4" rx="1" ry="1" width="28" x="4" y="6" />
    <rect height="4" rx="1" ry="1" width="28" x="4" y="26" />
  </svg>`)({hidden:!this.label,title:this.label})}});var S={"navbar-header.site.name":"Adobe Fonts","navbar-header.expand-navigation":"Expand site navigation","navbar-header.icons.menu-name":"Adobe Stock Navigation","navbar-header.icons.more-menu-name":"More","navbar-header.stock-links.illustrations-label":"Illustrations","navbar-header.stock-links.templates-label":"Templates","navbar-header.stock-links.audio-label":"Audio","navbar-header.stock-links.photos-label":"Photos","navbar-header.stock-links.vectors-label":"Vectors","navbar-header.stock-links.videos-label":"Videos","navbar-header.stock-links.plugins-label":"Plugins","navbar-header.stock-links.3d-label":"3D"},O=s.d`
            .svg-logo svg {
  width: 24px;
  padding-top: 5px;
}

.spectrum-UIIcon-ChevronDown75 {
  padding-left: 4px;
  padding-bottom: 4px;
  color: var(--spectrum-global-color-gray-700);
}

.site-name {
  color: var(--spectrum-global-color-gray-900);
  font-size: var(--spectrum-alias-font-size-default,var(--spectrum-global-dimension-font-size-100));
  font-weight: 400;
  margin-left: 24px;
  padding-top: 2px;
  text-decoration: none;
}

.navbar-link {
  color: var(--spectrum-global-color-gray-700);
}

.af-top-nav {
  background-color: var(--spectrum-global-color-static-white);
  position: relative;
}

.site-name {
  align-items: center;
  display: flex;

  /* sp-top-nav doesn't allow you to set its height, so we need to force the
   * height by setting the height of one of its childen. */
  height: 54px;

  /* We also need to adjust the position slightly to make it line up with the
   * rest of the items. The long term solution is to just top using the
   * sp-top-nav component, as it seems like we're not using it as intended. */
  position: relative;
  top: -2px;
}

.af-nav-divider {
  height: 34px;
}

[slot="icon"] {
  order: 2;
  color: var(--spectrum-global-color-gray-800);
  margin-left: 0;
}

.left-nav-icon {
  margin-left: 0;
  padding-right: 20px;
}

.overlay {
  background-color: var(--spectrum-global-color-static-black);
  display: none;
  height: 200vh;
  left: 0;
  opacity: 0.35;
  position: fixed;
  width: 100vw;
}

.visible {
  display: block;
}

          `;let L=class extends(Object(v.a)(Object(f.a)(s.e,S))){constructor(){super(...arguments),this._dispatchFlyoutEvent=e=>{this.dispatchEvent(new CustomEvent(e?"flyout.expanded":"flyout.collapsed"))}}connectedCallback(){super.connectedCallback(),this.enableClickTracking()}render(){return s.a`<af-flyout id="flyout" autoclose overlay @collapse="${()=>this._dispatchFlyoutEvent(!1)}" @expand="${()=>this._dispatchFlyoutEvent(!0)}"><af-side-navigation></af-flyout><sp-top-nav class="af-top-nav">${this._renderSidebarMenuIcon(this.size)} <a class="site-name" href="/"><adobe-fonts-logo>Adobe Fonts</adobe-fonts-logo></a>${this._includesAnyNav(this.size)?this._renderNav(this.size):this._renderCollapsedNav()}</sp-top-nav>`}_handleSidebarMenuIconClick(){var e;null===(e=this.flyout)||void 0===e||e.setAttribute("expanded","")}_includesAnyNav(e){return e!=w.ViewportSize.XX_SMALL}_includesMoreNav(e){return!(e==w.ViewportSize.XX_SMALL||e==w.ViewportSize.LARGE)}_renderNav(e){return s.a`<sp-divider size="s" vertical class="af-nav-divider"></sp-divider>${Object(y.a)(e).map((e=>this._renderTopNavItem(e)))} ${this._includesMoreNav(e)?this._renderMoreNav(e):this._renderCollapsedNav()}`}_renderMoreNav(e){return s.a`<sp-action-menu id="more-menu" size="m" placement="bottom-end"><span slot="label">${this.t("navbar-header.icons.more-menu-name")}</span><sp-icon-chevron75 class="spectrum-UIIcon-ChevronDown75" slot="icon"></sp-icon-chevron75>${Object(y.b)(e).map((e=>this._renderDropDownNavItem(e)))}</sp-action-menu>`}_renderCollapsedNav(){return s.a``}_renderTopNavItem(e){return s.a`<sp-top-nav-item href="${Object(f.e)(e.url,Object(f.d)())}" class="navbar-link">${this.t(e.label)}</sp-top-nav-item>`}_renderDropDownNavItem(e){return s.a`<sp-menu-item href="${e.url}">${this.t(e.label)}</sp-menu-item>`}_renderSidebarMenuIcon(e){if(e===w.ViewportSize.XX_SMALL)return s.a`<sp-action-button @click="${this._handleSidebarMenuIconClick}" class="left-nav-icon" label="${this.t("navbar-header.expand-navigation")}" quiet><sp-icon-show-menu slot="icon"></sp-icon-show-menu></sp-action-button>`}};L.styles=[x.a,O],Object(a.a)([Object(c.a)("#flyout")],L.prototype,"flyout",void 0),Object(a.a)([Object(l.a)()],L.prototype,"size",void 0),L=Object(a.a)([Object(o.a)("af-navbar-header")],L)},187:function(e,t,r){"use strict";var a=r(3),s=r(23),o=(r(148),r(7)),l=(r(19),r(0)),c=r(4),i=r(2),n=r(14),u=(r(92),r(20),r(5),r(37),r(13),r(15),r(26),{"navbar-subnav.site.manage":"Manage fonts"}),p=l.d`
            .subnav-manage {
  padding-left: 20px;
  padding-right: 20px;
  margin-inline-start: auto;
}

.af-subnav {
  background-color: var(--spectrum-global-color-static-white);
  --spectrum-tabs-rule-border-radius: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox - hide scrollbar */
  -ms-overflow-style: none;  /* Internet Explorer 10+  - hide scrollbar */
}

.af-subnav::-webkit-scrollbar { /* WebKit - hide scrollbar */
  width: 0;
  height: 0;
}

.af-subnav-first {
  margin-inline-start: 35px;
}

.search-bar-container {
  margin-inline-start: auto;
  margin-right: 10px;
  position: relative;
  top: 12px;
}

.search-present.subnav-manage {
  margin-inline-start: 0;
}

#subnav-search {
  width: 23vw;
}

@media screen and (max-width: 993px) {
  .search-bar-container {
    visibility: hidden;
    display: none;
    margin-inline-start: 0;
  }

  .search-present.subnav-manage {
    padding-left: 20px;
    margin-inline-start: 0;
  }
}

          `;let m=class extends(Object(s.a)(Object(o.a)(c.a,u))){constructor(){super(...arguments),this.manageLink={url:"/my_fonts",label:this.t("navbar-subnav.site.manage")||"Manage fonts"},this.user="",this.subNavLinks=[],this.searchVisible=!1,this.searchResults=[]}static get styles(){return p}connectedCallback(){this.enableClickTracking(),super.connectedCallback()}render(){return l.a`<sp-top-nav class="af-subnav">${this.subNavLinks.map(((e,t)=>this._renderTopNavItem(e,t)))} ${this.renderSearchBar()} ${this._renderManageFonts(this.user,this.manageLink)}</sp-top-nav>`}renderSearchBar(){const e="false"===this.user||void 0===this.user?"20":null;return"/"!=this.getPathname()&&"/search"!=this.getPathname()?(this.searchVisible=window.innerWidth>961,l.a`<div class="search-bar-container"><af-search-bar id="subnav-search" class="search-bar" .results="${this.searchResults}" .tooltipOffset="${e}"></af-search-bar></div>`):l.a``}getPathname(){return window.location.pathname}_renderTopNavItem(e,t){return 0===t?l.a`<sp-top-nav-item href="${e.url}" class="af-subnav-first">${e.label}</sp-top-nav-item>`:l.a`<sp-top-nav-item href="${e.url}">${e.label}</sp-top-nav-item>`}_renderManageFonts(e,t){if("false"===e||void 0===e)return l.a``;const r=!0===this.searchVisible?"search-present":"";return l.a`<sp-top-nav-item href="${t.url}" class="subnav-manage ${r}">${t.label}</sp-top-nav-item>`}};Object(a.a)([Object(i.b)({type:Object})],m.prototype,"manageLink",void 0),Object(a.a)([Object(i.b)()],m.prototype,"user",void 0),Object(a.a)([Object(i.b)({type:Array})],m.prototype,"subNavLinks",void 0),Object(a.a)([Object(i.b)({type:Boolean})],m.prototype,"searchVisible",void 0),Object(a.a)([Object(i.b)({type:Array})],m.prototype,"searchResults",void 0),m=Object(a.a)([Object(n.a)("af-navbar-subnav")],m)},192:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(3),s=(r(19),r(0)),o=r(25),l=(r(48),r(37));r(43),r(2),r(5);const c=e=>{class t extends(Object(l.a)(e)){get hasHref(){return!!this.href&&this.href.length>0}connectedCallback(){super.connectedCallback(),this.hasHref&&(this.classList.add("linkable"),this.setAttribute("role","link"),this.addEventListener("click",this.handleClick),this.addEventListener("keypress",this.handleKeypress))}renderLinkable(e){return s.a`${e} ${this.hasHref?this.renderAnchor({id:"anchor",className:"anchor",ariaHidden:!0}):""}`}handleClick(){this.anchorElement.click()}handleKeypress(e){const{code:t}=e;switch(t){case"Enter":case"Space":this.click()}}}return Object(a.a)([Object(o.a)(".anchor")],t.prototype,"anchorElement",void 0),t}},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));const a="af.search-bar.visual-search";class s extends CustomEvent{constructor(){super(a,{bubbles:!0,composed:!0})}}s.EVENT_NAME=a},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=r(25),i=(r(48),r(16)),n=r(9),u=r(72),p=r(41),m=r(4);r(43),r(2),r(24);customElements.define("sp-icon-chevron-right",class extends n.a{render(){return Object(i.a)(s.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="Chevron Right"}={})=>i.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <path
      d="M24 18a1.988 1.988 0 0 1-.585 1.409l-7.983 7.98a2 2 0 1 1-2.871-2.772l.049-.049L19.181 18l-6.572-6.57a2 2 0 0 1 2.773-2.87l.049.049 7.983 7.98A1.988 1.988 0 0 1 24 18Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}}),customElements.define("sp-icon-chevron-left",class extends n.a{render(){return Object(i.a)(s.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="Chevron Left"}={})=>i.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <path
      d="M12 18a1.988 1.988 0 0 0 .585 1.409l7.983 7.98a2 2 0 1 0 2.871-2.772l-.049-.049L16.819 18l6.572-6.57a2 2 0 0 0-2.773-2.87l-.049.049-7.983 7.98A1.988 1.988 0 0 0 12 18Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var d,g,b=s.d`
            :host {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100px;
  --af-carousel-next-button-right: -20px;
  --af-carousel-previous-button-left: -20px;
  --af-carousel-previous-button-right: initial;
  --af-carousel-button-size: 40px;
  --af-carousel-button-top: 40%;
  --af-carousel-button-radius: 50px;
  --af-carousel-icon-color: #444;
  --af-carousel-shadow-color: #fff;
}

sp-action-button {
  width: var(--af-carousel-button-size);
  height: var(--af-carousel-button-size);
  position: absolute;
  top: var(--af-carousel-button-top);
  z-index: 4;
}

sp-action-button.left-scroll {
  left: var(--af-carousel-previous-button-left);
  right: var(--af-carousel-previous-button-right);
}

sp-action-button.right-scroll {
  right: var(--af-carousel-next-button-right);
}

sp-action-button:active {
  background: initial;
}

sp-action-button.left-scroll.hide,
sp-action-button.right-scroll.hide {
  visibility: hidden;
}

sp-action-button.left-scroll.rounded,
sp-action-button.right-scroll.rounded {
  background-color: var(--spectrum-global-color-gray-50);
  border-radius: var(--af-carousel-button-radius);
  border: none;
  box-shadow: 0 4px 20px rgb(0 0 0 / 15%);
  text-align: center;
}

sp-icon-chevron-right.rounded,
sp-icon-chevron-left.rounded {
  color: var(--af-carousel-icon-color);
}

.af-carousel-container {
  position: relative;
  min-width: 320px;
}

.af-carousel-content-section {
  position: relative;
  border-radius: 16px;
}

@media screen and (min-width: 768px) {
  .af-carousel-content-section::before {
    content: "";
    visibility: hidden;
    position: absolute;
    z-index: 1;
    border-radius: inherit;
    background: transparent linear-gradient(270deg, #ffffff00, var(--af-carousel-shadow-color)) 0 0 no-repeat padding-box;
    height: 100%;
    width: 140px;
    pointer-events: none;
    top: 0;
    left: 0;
  }

  .af-carousel-content-section::after {
    content: "";
    visibility: hidden;
    position: absolute;
    z-index: 1;
    border-radius: inherit;
    background: transparent linear-gradient(90deg, #ffffff00, var(--af-carousel-shadow-color)) 0 0 no-repeat padding-box;
    height: 100%;
    width: 140px;
    pointer-events: none;
    top: 0;
    right: 0;
  }
}

.af-carousel-content-section.left-shadow::before,
.af-carousel-content-section.right-shadow::after {
  visibility: visible;
}

.af-carousel-content-scroller {
  position: relative;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  overflow-y: hidden;
  justify-content: flex-start;
  flex-flow: row;
  scrollbar-width: none;
}

.af-carousel-content-scroller .can-scroll {
  overflow-x: scroll;
}

.af-carousel-content-scroller::-webkit-scrollbar {
  display: none;
}

          `;(g=d||(d={})).Rounded="rounded",g.Arrow="arrow";let h=class extends m.a{constructor(){super(...arguments),this.showShadow=!1,this.buttonType=d.Rounded,this._resizeObserver=void 0,this._onScrollHandler=()=>{this.requestUpdate()},this._onResize=()=>{this.requestUpdate()}}static get styles(){return b}get canScroll(){var e,t;return(null===(e=this.carouselContent)||void 0===e?void 0:e.scrollWidth)>(null===(t=this.carouselContent)||void 0===t?void 0:t.clientWidth)}get showPreviousNav(){var e;return(null===(e=this.carouselContent)||void 0===e?void 0:e.scrollLeft)>0}get showNextNav(){var e,t,r;return Math.ceil(null===(e=this.carouselContent)||void 0===e?void 0:e.scrollLeft)<(null===(t=this.carouselContent)||void 0===t?void 0:t.scrollWidth)-(null===(r=this.carouselContent)||void 0===r?void 0:r.clientWidth)-1}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._onScrollHandler),this._resizeObserver=new ResizeObserver(this._onResize),this._resizeObserver.observe(this)}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("resize",this._onScrollHandler),null===(e=this._resizeObserver)||void 0===e||e.unobserve(this)}_handleScrollClick(e){var t;const r=e.currentTarget,a=.5*this.carouselContent.clientWidth,s=(null===(t=null==r?void 0:r.classList)||void 0===t?void 0:t.contains("left-scroll"))?-a:a;this.carouselContent.scrollBy({left:s,top:0,behavior:"smooth"})}render(){const{showShadow:e}=this,t={"af-carousel-content-section":!0,"left-shadow":this.showPreviousNav&&e,"right-shadow":this.showNextNav&&e},r={"af-carousel-content-scroller":!0,"can-scroll":this.canScroll};return s.a`<div class="${Object(u.a)(t)}">${this._renderLeftButton()}<div id="carouselContent" class="${Object(u.a)(r)}" @scroll="${this._onScrollHandler}"><slot @slotchange="${this._onScrollHandler}"></slot></div>${this._renderRightButton()}</div>`}_renderLeftButton(){if(this.buttonType===d.Arrow){const e={"left-scroll":!0,hide:!this.showPreviousNav&&!this.showNextNav};return s.a`<sp-action-button class="${Object(u.a)(e)}" ?disabled="${!this.showPreviousNav}" quiet dir="rtl" @click="${this._handleScrollClick}"><sp-icon size="s">${Object(p.a)('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path d="M.5 7.999a1.24 1.24 0 0 0 .386.896l-.003.003 7 6.748.002-.003a1.246 1.246 0 1 0 1.746-1.777l-.016-.016.003-.003L3.55 7.999 9.618 2.15l-.003-.003A1.246 1.246 0 1 0 7.896.344l-.011.01-.003-.002-.015.015h-.001L.883 7.1l.002.003a1.24 1.24 0 0 0-.385.897z"/></svg>')}</sp-icon></sp-action-button>`}{const e={"left-scroll":!0,rounded:!0,show:this.showPreviousNav,hide:!this.showPreviousNav};return s.a`<sp-action-button class="${Object(u.a)(e)}" quiet dir="rtl" @click="${this._handleScrollClick}"><sp-icon-chevron-left class="rounded" slot="icon" size="xl"></sp-icon-chevron-left></sp-action-button>`}}_renderRightButton(){if(this.buttonType===d.Arrow){const e={"right-scroll":!0,hide:!this.showPreviousNav&&!this.showNextNav};return s.a`<sp-action-button class="${Object(u.a)(e)}" ?disabled="${!this.showNextNav}" quiet @click="${this._handleScrollClick}"><sp-icon size="s">${Object(p.a)('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path d="M11.5 8.001a1.24 1.24 0 0 0-.386-.896l.003-.003-7-6.748-.002.003a1.246 1.246 0 1 0-1.746 1.777l.016.016-.003.003L8.45 8.001 2.382 13.85l.003.003a1.246 1.246 0 1 0 1.719 1.803l.011-.01.003.002.015-.015h.001L11.117 8.9l-.003-.003a1.24 1.24 0 0 0 .386-.897z"/></svg>')}</sp-icon></sp-action-button>`}{const e={"right-scroll":!0,rounded:!0,show:this.showNextNav,hide:!this.showNextNav};return s.a`<sp-action-button class="${Object(u.a)(e)}" quiet @click="${this._handleScrollClick}"><sp-icon-chevron-right class="rounded" slot="icon" size="xl"></sp-icon-chevron-right></sp-action-button>`}}};Object(a.a)([Object(c.a)("#carouselContent")],h.prototype,"carouselContent",void 0),Object(a.a)([Object(l.a)({type:Boolean})],h.prototype,"showShadow",void 0),Object(a.a)([Object(l.a)()],h.prototype,"buttonType",void 0),h=Object(a.a)([Object(o.a)("af-carousel")],h)},202:function(e,t,r){"use strict";var a=r(50);customElements.define("sp-theme",a.a)},203:function(e,t,r){"use strict";var a=r(136).b`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0.00;--spectrum-global-color-celery-400-rgb:48,193,61;--spectrum-global-color-celery-400:rgb(var(--spectrum-global-color-celery-400-rgb));--spectrum-global-color-celery-500-rgb:15,172,38;--spectrum-global-color-celery-500:rgb(var(--spectrum-global-color-celery-500-rgb));--spectrum-global-color-celery-600-rgb:0,150,20;--spectrum-global-color-celery-600:rgb(var(--spectrum-global-color-celery-600-rgb));--spectrum-global-color-celery-700-rgb:0,128,15;--spectrum-global-color-celery-700:rgb(var(--spectrum-global-color-celery-700-rgb));--spectrum-global-color-chartreuse-400-rgb:157,203,13;--spectrum-global-color-chartreuse-400:rgb(var(--spectrum-global-color-chartreuse-400-rgb));--spectrum-global-color-chartreuse-500-rgb:139,182,4;--spectrum-global-color-chartreuse-500:rgb(var(--spectrum-global-color-chartreuse-500-rgb));--spectrum-global-color-chartreuse-600-rgb:122,162,0;--spectrum-global-color-chartreuse-600:rgb(var(--spectrum-global-color-chartreuse-600-rgb));--spectrum-global-color-chartreuse-700-rgb:106,141,0;--spectrum-global-color-chartreuse-700:rgb(var(--spectrum-global-color-chartreuse-700-rgb));--spectrum-global-color-yellow-400-rgb:238,205,0;--spectrum-global-color-yellow-400:rgb(var(--spectrum-global-color-yellow-400-rgb));--spectrum-global-color-yellow-500-rgb:221,185,0;--spectrum-global-color-yellow-500:rgb(var(--spectrum-global-color-yellow-500-rgb));--spectrum-global-color-yellow-600-rgb:201,164,0;--spectrum-global-color-yellow-600:rgb(var(--spectrum-global-color-yellow-600-rgb));--spectrum-global-color-yellow-700-rgb:181,144,0;--spectrum-global-color-yellow-700:rgb(var(--spectrum-global-color-yellow-700-rgb));--spectrum-global-color-magenta-400-rgb:226,68,135;--spectrum-global-color-magenta-400:rgb(var(--spectrum-global-color-magenta-400-rgb));--spectrum-global-color-magenta-500-rgb:205,40,111;--spectrum-global-color-magenta-500:rgb(var(--spectrum-global-color-magenta-500-rgb));--spectrum-global-color-magenta-600-rgb:179,15,89;--spectrum-global-color-magenta-600:rgb(var(--spectrum-global-color-magenta-600-rgb));--spectrum-global-color-magenta-700-rgb:149,0,72;--spectrum-global-color-magenta-700:rgb(var(--spectrum-global-color-magenta-700-rgb));--spectrum-global-color-fuchsia-400-rgb:211,63,212;--spectrum-global-color-fuchsia-400:rgb(var(--spectrum-global-color-fuchsia-400-rgb));--spectrum-global-color-fuchsia-500-rgb:188,39,187;--spectrum-global-color-fuchsia-500:rgb(var(--spectrum-global-color-fuchsia-500-rgb));--spectrum-global-color-fuchsia-600-rgb:163,10,163;--spectrum-global-color-fuchsia-600:rgb(var(--spectrum-global-color-fuchsia-600-rgb));--spectrum-global-color-fuchsia-700-rgb:135,0,136;--spectrum-global-color-fuchsia-700:rgb(var(--spectrum-global-color-fuchsia-700-rgb));--spectrum-global-color-purple-400-rgb:161,93,246;--spectrum-global-color-purple-400:rgb(var(--spectrum-global-color-purple-400-rgb));--spectrum-global-color-purple-500-rgb:142,67,234;--spectrum-global-color-purple-500:rgb(var(--spectrum-global-color-purple-500-rgb));--spectrum-global-color-purple-600-rgb:120,43,216;--spectrum-global-color-purple-600:rgb(var(--spectrum-global-color-purple-600-rgb));--spectrum-global-color-purple-700-rgb:98,23,190;--spectrum-global-color-purple-700:rgb(var(--spectrum-global-color-purple-700-rgb));--spectrum-global-color-indigo-400-rgb:109,115,246;--spectrum-global-color-indigo-400:rgb(var(--spectrum-global-color-indigo-400-rgb));--spectrum-global-color-indigo-500-rgb:87,93,232;--spectrum-global-color-indigo-500:rgb(var(--spectrum-global-color-indigo-500-rgb));--spectrum-global-color-indigo-600-rgb:68,74,208;--spectrum-global-color-indigo-600:rgb(var(--spectrum-global-color-indigo-600-rgb));--spectrum-global-color-indigo-700-rgb:53,58,176;--spectrum-global-color-indigo-700:rgb(var(--spectrum-global-color-indigo-700-rgb));--spectrum-global-color-seafoam-400-rgb:0,166,160;--spectrum-global-color-seafoam-400:rgb(var(--spectrum-global-color-seafoam-400-rgb));--spectrum-global-color-seafoam-500-rgb:0,145,139;--spectrum-global-color-seafoam-500:rgb(var(--spectrum-global-color-seafoam-500-rgb));--spectrum-global-color-seafoam-600-rgb:0,124,118;--spectrum-global-color-seafoam-600:rgb(var(--spectrum-global-color-seafoam-600-rgb));--spectrum-global-color-seafoam-700-rgb:0,103,99;--spectrum-global-color-seafoam-700:rgb(var(--spectrum-global-color-seafoam-700-rgb));--spectrum-global-color-red-400-rgb:237,64,48;--spectrum-global-color-red-400:rgb(var(--spectrum-global-color-red-400-rgb));--spectrum-global-color-red-500-rgb:217,28,21;--spectrum-global-color-red-500:rgb(var(--spectrum-global-color-red-500-rgb));--spectrum-global-color-red-600-rgb:187,2,2;--spectrum-global-color-red-600:rgb(var(--spectrum-global-color-red-600-rgb));--spectrum-global-color-red-700-rgb:154,0,0;--spectrum-global-color-red-700:rgb(var(--spectrum-global-color-red-700-rgb));--spectrum-global-color-orange-400-rgb:250,139,26;--spectrum-global-color-orange-400:rgb(var(--spectrum-global-color-orange-400-rgb));--spectrum-global-color-orange-500-rgb:233,117,0;--spectrum-global-color-orange-500:rgb(var(--spectrum-global-color-orange-500-rgb));--spectrum-global-color-orange-600-rgb:209,97,0;--spectrum-global-color-orange-600:rgb(var(--spectrum-global-color-orange-600-rgb));--spectrum-global-color-orange-700-rgb:182,80,0;--spectrum-global-color-orange-700:rgb(var(--spectrum-global-color-orange-700-rgb));--spectrum-global-color-green-400-rgb:0,148,97;--spectrum-global-color-green-400:rgb(var(--spectrum-global-color-green-400-rgb));--spectrum-global-color-green-500-rgb:0,126,80;--spectrum-global-color-green-500:rgb(var(--spectrum-global-color-green-500-rgb));--spectrum-global-color-green-600-rgb:0,105,65;--spectrum-global-color-green-600:rgb(var(--spectrum-global-color-green-600-rgb));--spectrum-global-color-green-700-rgb:0,86,53;--spectrum-global-color-green-700:rgb(var(--spectrum-global-color-green-700-rgb));--spectrum-global-color-blue-400-rgb:27,127,245;--spectrum-global-color-blue-400:rgb(var(--spectrum-global-color-blue-400-rgb));--spectrum-global-color-blue-500-rgb:4,105,227;--spectrum-global-color-blue-500:rgb(var(--spectrum-global-color-blue-500-rgb));--spectrum-global-color-blue-600-rgb:0,87,190;--spectrum-global-color-blue-600:rgb(var(--spectrum-global-color-blue-600-rgb));--spectrum-global-color-blue-700-rgb:0,72,153;--spectrum-global-color-blue-700:rgb(var(--spectrum-global-color-blue-700-rgb));--spectrum-global-color-gray-50-rgb:255,255,255;--spectrum-global-color-gray-50:rgb(var(--spectrum-global-color-gray-50-rgb));--spectrum-global-color-gray-75-rgb:255,255,255;--spectrum-global-color-gray-75:rgb(var(--spectrum-global-color-gray-75-rgb));--spectrum-global-color-gray-100-rgb:255,255,255;--spectrum-global-color-gray-100:rgb(var(--spectrum-global-color-gray-100-rgb));--spectrum-global-color-gray-200-rgb:235,235,235;--spectrum-global-color-gray-200:rgb(var(--spectrum-global-color-gray-200-rgb));--spectrum-global-color-gray-300-rgb:217,217,217;--spectrum-global-color-gray-300:rgb(var(--spectrum-global-color-gray-300-rgb));--spectrum-global-color-gray-400-rgb:179,179,179;--spectrum-global-color-gray-400:rgb(var(--spectrum-global-color-gray-400-rgb));--spectrum-global-color-gray-500-rgb:146,146,146;--spectrum-global-color-gray-500:rgb(var(--spectrum-global-color-gray-500-rgb));--spectrum-global-color-gray-600-rgb:110,110,110;--spectrum-global-color-gray-600:rgb(var(--spectrum-global-color-gray-600-rgb));--spectrum-global-color-gray-700-rgb:71,71,71;--spectrum-global-color-gray-700:rgb(var(--spectrum-global-color-gray-700-rgb));--spectrum-global-color-gray-800-rgb:34,34,34;--spectrum-global-color-gray-800:rgb(var(--spectrum-global-color-gray-800-rgb));--spectrum-global-color-gray-900-rgb:0,0,0;--spectrum-global-color-gray-900:rgb(var(--spectrum-global-color-gray-900-rgb));--spectrum-alias-background-color-primary:var(--spectrum-global-color-gray-50);--spectrum-alias-background-color-secondary:var(--spectrum-global-color-gray-100);--spectrum-alias-background-color-tertiary:var(--spectrum-global-color-gray-300);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.4);--spectrum-alias-dropshadow-color:rgba(0,0,0,.15);--spectrum-alias-background-color-hover-overlay:rgba(0,0,0,.04);--spectrum-alias-highlight-hover:rgba(0,0,0,.06);--spectrum-alias-highlight-down:rgba(0,0,0,.1);--spectrum-alias-highlight-selected:rgba(4,105,227,.1);--spectrum-alias-highlight-selected-hover:rgba(4,105,227,.2);--spectrum-alias-text-highlight-color:rgba(4,105,227,.2);--spectrum-alias-background-color-quickactions:hsla(0,0%,100%,.9);--spectrum-alias-border-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-border-color-translucent:rgba(0,0,0,.1);--spectrum-alias-radial-reaction-color-default:rgba(34,34,34,.6);--spectrum-alias-pasteboard-background-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-border-color:var(--spectrum-global-color-gray-300);--spectrum-alias-appframe-separator-color:var(--spectrum-global-color-gray-300)}:host,:root{color-scheme:light}:host,:root{--spectrum-overlay-opacity:0.4;--spectrum-gray-background-color-default:var(--spectrum-gray-700);--spectrum-red-background-color-default:var(--spectrum-red-600);--spectrum-orange-background-color-default:var(--spectrum-orange-600);--spectrum-yellow-background-color-default:var(--spectrum-yellow-400);--spectrum-chartreuse-background-color-default:var(--spectrum-chartreuse-500);--spectrum-celery-background-color-default:var(--spectrum-celery-600);--spectrum-green-background-color-default:var(--spectrum-green-900);--spectrum-seafoam-background-color-default:var(--spectrum-seafoam-900);--spectrum-cyan-background-color-default:var(--spectrum-cyan-900);--spectrum-blue-background-color-default:var(--spectrum-blue-900);--spectrum-indigo-background-color-default:var(--spectrum-indigo-900);--spectrum-purple-background-color-default:var(--spectrum-purple-900);--spectrum-fuchsia-background-color-default:var(--spectrum-fuchsia-900);--spectrum-magenta-background-color-default:var(--spectrum-magenta-900);--spectrum-neutral-background-color-default:var(--spectrum-gray-800);--spectrum-neutral-background-color-hover:var(--spectrum-gray-900);--spectrum-neutral-background-color-down:var(--spectrum-gray-900);--spectrum-neutral-background-color-key-focus:var(--spectrum-gray-900);--spectrum-neutral-subdued-background-color-default:var(--spectrum-gray-600);--spectrum-neutral-subdued-background-color-hover:var(--spectrum-gray-700);--spectrum-neutral-subdued-background-color-down:var(--spectrum-gray-800);--spectrum-neutral-subdued-background-color-key-focus:var(--spectrum-gray-700);--spectrum-accent-background-color-default:var(--spectrum-accent-color-900);--spectrum-accent-background-color-hover:var(--spectrum-accent-color-1000);--spectrum-accent-background-color-down:var(--spectrum-accent-color-1100);--spectrum-accent-background-color-key-focus:var(--spectrum-accent-color-1000);--spectrum-informative-background-color-default:var(--spectrum-informative-color-900);--spectrum-informative-background-color-hover:var(--spectrum-informative-color-1000);--spectrum-informative-background-color-down:var(--spectrum-informative-color-1100);--spectrum-informative-background-color-key-focus:var(--spectrum-informative-color-1000);--spectrum-negative-background-color-default:var(--spectrum-negative-color-900);--spectrum-negative-background-color-hover:var(--spectrum-negative-color-1000);--spectrum-negative-background-color-down:var(--spectrum-negative-color-1100);--spectrum-negative-background-color-key-focus:var(--spectrum-negative-color-1000);--spectrum-positive-background-color-default:var(--spectrum-positive-color-900);--spectrum-positive-background-color-hover:var(--spectrum-positive-color-1000);--spectrum-positive-background-color-down:var(--spectrum-positive-color-1100);--spectrum-positive-background-color-key-focus:var(--spectrum-positive-color-1000);--spectrum-neutral-visual-color:var(--spectrum-gray-500);--spectrum-accent-visual-color:var(--spectrum-accent-color-800);--spectrum-informative-visual-color:var(--spectrum-informative-color-800);--spectrum-negative-visual-color:var(--spectrum-negative-color-800);--spectrum-notice-visual-color:var(--spectrum-notice-color-700);--spectrum-positive-visual-color:var(--spectrum-positive-color-700);--spectrum-gray-visual-color:var(--spectrum-gray-500);--spectrum-red-visual-color:var(--spectrum-red-800);--spectrum-orange-visual-color:var(--spectrum-orange-700);--spectrum-yellow-visual-color:var(--spectrum-yellow-600);--spectrum-chartreuse-visual-color:var(--spectrum-chartreuse-600);--spectrum-celery-visual-color:var(--spectrum-celery-700);--spectrum-green-visual-color:var(--spectrum-green-700);--spectrum-seafoam-visual-color:var(--spectrum-seafoam-700);--spectrum-cyan-visual-color:var(--spectrum-cyan-600);--spectrum-blue-visual-color:var(--spectrum-blue-800);--spectrum-indigo-visual-color:var(--spectrum-indigo-800);--spectrum-purple-visual-color:var(--spectrum-purple-800);--spectrum-fuchsia-visual-color:var(--spectrum-fuchsia-800);--spectrum-magenta-visual-color:var(--spectrum-magenta-800);--spectrum-drop-shadow-color:rgba(0,0,0,.15);--spectrum-background-base-color:var(--spectrum-gray-200);--spectrum-background-layer-1-color:var(--spectrum-gray-100);--spectrum-background-layer-2-color:var(--spectrum-gray-50);--spectrum-gray-50:#fff;--spectrum-gray-75:#fdfdfd;--spectrum-gray-100:#f8f8f8;--spectrum-gray-200:#e6e6e6;--spectrum-gray-300:#d5d5d5;--spectrum-gray-400:#b1b1b1;--spectrum-gray-500:#909090;--spectrum-gray-600:#6d6d6d;--spectrum-gray-700:#464646;--spectrum-gray-800:#222;--spectrum-gray-900:#000;--spectrum-red-100:#ffebe7;--spectrum-red-200:#ffddd6;--spectrum-red-300:#ffcdc3;--spectrum-red-400:#ffb7a9;--spectrum-red-500:#ff9b88;--spectrum-red-600:#ff7c65;--spectrum-red-700:#f75c46;--spectrum-red-800:#ea3829;--spectrum-red-900:#d31510;--spectrum-red-1000:#b40000;--spectrum-red-1100:#930000;--spectrum-red-1200:#740000;--spectrum-red-1300:#590000;--spectrum-red-1400:#430000;--spectrum-orange-100:#ffeccc;--spectrum-orange-200:#ffdfad;--spectrum-orange-300:#fdd291;--spectrum-orange-400:#ffbb63;--spectrum-orange-500:#ffa037;--spectrum-orange-600:#f68511;--spectrum-orange-700:#e46f00;--spectrum-orange-800:#cb5d00;--spectrum-orange-900:#b14c00;--spectrum-orange-1000:#953d00;--spectrum-orange-1100:#7a2f00;--spectrum-orange-1200:#612300;--spectrum-orange-1300:#491901;--spectrum-orange-1400:#351201;--spectrum-yellow-100:#fbf198;--spectrum-yellow-200:#f8e750;--spectrum-yellow-300:#f8d904;--spectrum-yellow-400:#e8c600;--spectrum-yellow-500:#d7b300;--spectrum-yellow-600:#c49f00;--spectrum-yellow-700:#b08c00;--spectrum-yellow-800:#9b7800;--spectrum-yellow-900:#856600;--spectrum-yellow-1000:#705300;--spectrum-yellow-1100:#5b4300;--spectrum-yellow-1200:#483300;--spectrum-yellow-1300:#362500;--spectrum-yellow-1400:#281a00;--spectrum-chartreuse-100:#dbfc6e;--spectrum-chartreuse-200:#cbf443;--spectrum-chartreuse-300:#bce92a;--spectrum-chartreuse-400:#aad816;--spectrum-chartreuse-500:#98c50a;--spectrum-chartreuse-600:#87b103;--spectrum-chartreuse-700:#769c00;--spectrum-chartreuse-800:#678800;--spectrum-chartreuse-900:#577400;--spectrum-chartreuse-1000:#486000;--spectrum-chartreuse-1100:#3a4d00;--spectrum-chartreuse-1200:#2c3b00;--spectrum-chartreuse-1300:#212c00;--spectrum-chartreuse-1400:#181f00;--spectrum-celery-100:#cdfcbf;--spectrum-celery-200:#aef69d;--spectrum-celery-300:#96ee85;--spectrum-celery-400:#72e06a;--spectrum-celery-500:#4ecf50;--spectrum-celery-600:#27bb36;--spectrum-celery-700:#07a721;--spectrum-celery-800:#009112;--spectrum-celery-900:#007c0f;--spectrum-celery-1000:#00670f;--spectrum-celery-1100:#00530d;--spectrum-celery-1200:#00400a;--spectrum-celery-1300:#003007;--spectrum-celery-1400:#002205;--spectrum-green-100:#cef8e0;--spectrum-green-200:#adf4ce;--spectrum-green-300:#89ecbc;--spectrum-green-400:#67dea8;--spectrum-green-500:#49cc93;--spectrum-green-600:#2fb880;--spectrum-green-700:#15a46e;--spectrum-green-800:#008f5d;--spectrum-green-900:#007a4d;--spectrum-green-1000:#00653e;--spectrum-green-1100:#005132;--spectrum-green-1200:#053f27;--spectrum-green-1300:#0a2e1d;--spectrum-green-1400:#0a2015;--spectrum-seafoam-100:#cef7f3;--spectrum-seafoam-200:#aaf1ea;--spectrum-seafoam-300:#8ce9e2;--spectrum-seafoam-400:#65dad2;--spectrum-seafoam-500:#3fc9c1;--spectrum-seafoam-600:#0fb5ae;--spectrum-seafoam-700:#00a19a;--spectrum-seafoam-800:#008c87;--spectrum-seafoam-900:#007772;--spectrum-seafoam-1000:#00635f;--spectrum-seafoam-1100:#0c4f4c;--spectrum-seafoam-1200:#123c3a;--spectrum-seafoam-1300:#122c2b;--spectrum-seafoam-1400:#0f1f1e;--spectrum-cyan-100:#c5f8ff;--spectrum-cyan-200:#a4f0ff;--spectrum-cyan-300:#88e7fa;--spectrum-cyan-400:#60d8f3;--spectrum-cyan-500:#33c5e8;--spectrum-cyan-600:#12b0da;--spectrum-cyan-700:#019cc8;--spectrum-cyan-800:#0086b4;--spectrum-cyan-900:#00719f;--spectrum-cyan-1000:#005d89;--spectrum-cyan-1100:#004a73;--spectrum-cyan-1200:#00395d;--spectrum-cyan-1300:#002a46;--spectrum-cyan-1400:#001e33;--spectrum-blue-100:#e0f2ff;--spectrum-blue-200:#cae8ff;--spectrum-blue-300:#b5deff;--spectrum-blue-400:#96cefd;--spectrum-blue-500:#78bbfa;--spectrum-blue-600:#59a7f6;--spectrum-blue-700:#3892f3;--spectrum-blue-800:#147af3;--spectrum-blue-900:#0265dc;--spectrum-blue-1000:#0054b6;--spectrum-blue-1100:#004491;--spectrum-blue-1200:#003571;--spectrum-blue-1300:#002754;--spectrum-blue-1400:#001c3c;--spectrum-indigo-100:#edeeff;--spectrum-indigo-200:#e0e2ff;--spectrum-indigo-300:#d3d5ff;--spectrum-indigo-400:#c1c4ff;--spectrum-indigo-500:#acafff;--spectrum-indigo-600:#9599ff;--spectrum-indigo-700:#7e84fc;--spectrum-indigo-800:#686df4;--spectrum-indigo-900:#5258e4;--spectrum-indigo-1000:#4046ca;--spectrum-indigo-1100:#3236a8;--spectrum-indigo-1200:#262986;--spectrum-indigo-1300:#1b1e64;--spectrum-indigo-1400:#141648;--spectrum-purple-100:#f6ebff;--spectrum-purple-200:#edf;--spectrum-purple-300:#e6d0ff;--spectrum-purple-400:#dbbbfe;--spectrum-purple-500:#cca4fd;--spectrum-purple-600:#bd8bfc;--spectrum-purple-700:#ae72f9;--spectrum-purple-800:#9d57f4;--spectrum-purple-900:#893de7;--spectrum-purple-1000:#7326d3;--spectrum-purple-1100:#5d13b7;--spectrum-purple-1200:#470c94;--spectrum-purple-1300:#33106a;--spectrum-purple-1400:#230f49;--spectrum-fuchsia-100:#ffe9fc;--spectrum-fuchsia-200:#ffdafa;--spectrum-fuchsia-300:#fec7f8;--spectrum-fuchsia-400:#fbaef6;--spectrum-fuchsia-500:#f592f3;--spectrum-fuchsia-600:#ed74ed;--spectrum-fuchsia-700:#e055e2;--spectrum-fuchsia-800:#cd3ace;--spectrum-fuchsia-900:#b622b7;--spectrum-fuchsia-1000:#9d039e;--spectrum-fuchsia-1100:#800081;--spectrum-fuchsia-1200:#640664;--spectrum-fuchsia-1300:#470e46;--spectrum-fuchsia-1400:#320d31;--spectrum-magenta-100:#ffeaf1;--spectrum-magenta-200:#ffdce8;--spectrum-magenta-300:#ffcadd;--spectrum-magenta-400:#ffb2ce;--spectrum-magenta-500:#ff95bd;--spectrum-magenta-600:#fa77aa;--spectrum-magenta-700:#ef5a98;--spectrum-magenta-800:#de3d82;--spectrum-magenta-900:#c82269;--spectrum-magenta-1000:#ad0955;--spectrum-magenta-1100:#8e0045;--spectrum-magenta-1200:#700037;--spectrum-magenta-1300:#54032a;--spectrum-magenta-1400:#3c061d}
`,s=r(50);r(150);s.a.registerThemeFragment("lightest","color",a)},204:function(e,t,r){"use strict";var a=r(136).b`
:host,:root{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-30:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-text-padding-bottom-s:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-item-workflow-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-rounded-workflow-padding-left-m:var(--spectrum-global-dimension-size-175);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-item-mark-padding-bottom-m:var(--spectrum-global-dimension-static-size-75);--spectrum-alias-item-mark-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-1-size-l:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-1-size-xl:var(--spectrum-global-dimension-size-125);--spectrum-alias-item-control-2-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(--spectrum-global-dimension-size-250);--spectrum-alias-component-focusring-border-radius:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-control-two-size-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-three-height-s:var(--spectrum-global-dimension-size-150);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(--spectrum-global-dimension-static-size-325);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-search-padding-left-m:var(--spectrum-global-dimension-size-125);--spectrum-alias-focus-ring-border-radius-regular:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-focus-ring-radius-default:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-workflow-icon-size-l:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-chevron-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-chevron-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-chevron-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-chevron-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-chevron-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-chevron-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-50:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-checkmark-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-checkmark-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-checkmark-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-checkmark-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-dash-size-50:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-dash-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-dash-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-dash-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-dash-size-400:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-dash-size-500:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-dash-size-600:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-cross-size-75:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-cross-size-100:var(--spectrum-global-dimension-static-size-100);--spectrum-alias-ui-icon-cross-size-200:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-cross-size-300:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-400:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-cross-size-500:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-cross-size-600:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-75:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-arrow-size-100:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-arrow-size-200:var(--spectrum-global-dimension-static-size-150);--spectrum-alias-ui-icon-arrow-size-300:var(--spectrum-global-dimension-static-size-175);--spectrum-alias-ui-icon-arrow-size-400:var(--spectrum-global-dimension-static-size-200);--spectrum-alias-ui-icon-arrow-size-500:var(--spectrum-global-dimension-static-size-225);--spectrum-alias-ui-icon-arrow-size-600:var(--spectrum-global-dimension-static-size-250);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(--spectrum-global-dimension-static-size-50);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(--spectrum-global-dimension-static-size-25);--spectrum-alias-ui-icon-cornertriangle-size-100:var(--spectrum-global-dimension-static-size-65);--spectrum-alias-ui-icon-cornertriangle-size-300:var(--spectrum-global-dimension-static-size-85);--spectrum-alias-ui-icon-asterisk-size-200:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-ui-icon-asterisk-size-300:var(--spectrum-global-dimension-static-size-125);--spectrum-alias-avatar-size-100:var(--spectrum-global-dimension-size-250);--spectrum-alias-avatar-size-400:var(--spectrum-global-dimension-size-350);--spectrum-alias-avatar-size-600:var(--spectrum-global-dimension-size-450);--spectrum-button-s-primary-fill-textonly-text-padding-bottom:var(--spectrum-global-dimension-static-size-65);--spectrum-button-m-primary-fill-texticon-padding-left:var(--spectrum-global-dimension-size-175);--spectrum-button-l-primary-fill-textonly-text-padding-top:var(--spectrum-global-dimension-size-115);--spectrum-button-xl-primary-fill-texticon-padding-left:21px;--spectrum-button-m-primary-outline-texticon-padding-left:var(--spectrum-global-dimension-size-175);--spectrum-dialog-confirm-title-text-size:var(--spectrum-alias-heading-s-text-size);--spectrum-dialog-confirm-description-text-size:var(--spectrum-global-dimension-font-size-100);--spectrum-dialog-confirm-padding:var(--spectrum-global-dimension-static-size-500);--spectrum-listitem-m-texticon-padding-left:var(--spectrum-global-dimension-size-125);--spectrum-listitem-m-textthumbnail-padding-left:var(--spectrum-global-dimension-size-125);--spectrum-picker-m-texticon-padding-left:var(--spectrum-global-dimension-size-125);--spectrum-progressbar-s-border-radius:var(--spectrum-global-dimension-static-size-25);--spectrum-progressbar-m-border-radius:var(--spectrum-global-dimension-static-size-40);--spectrum-progressbar-xl-border-radius:var(--spectrum-global-dimension-static-size-65);--spectrum-textfield-m-texticon-padding-left:var(--spectrum-global-dimension-size-125)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}:host,:root{--spectrum-component-pill-edge-to-visual-75:10px;--spectrum-component-pill-edge-to-visual-100:14px;--spectrum-component-pill-edge-to-visual-200:18px;--spectrum-component-pill-edge-to-visual-300:21px;--spectrum-component-pill-edge-to-visual-only-75:4px;--spectrum-component-pill-edge-to-visual-only-100:7px;--spectrum-component-pill-edge-to-visual-only-200:10px;--spectrum-component-pill-edge-to-visual-only-300:13px;--spectrum-component-pill-edge-to-text-75:12px;--spectrum-component-pill-edge-to-text-100:16px;--spectrum-component-pill-edge-to-text-200:20px;--spectrum-component-pill-edge-to-text-300:24px;--spectrum-component-edge-to-visual-50:6px;--spectrum-component-edge-to-visual-75:7px;--spectrum-component-edge-to-visual-100:10px;--spectrum-component-edge-to-visual-200:13px;--spectrum-component-edge-to-visual-300:15px;--spectrum-component-edge-to-visual-only-50:3px;--spectrum-component-edge-to-visual-only-75:4px;--spectrum-component-edge-to-visual-only-100:7px;--spectrum-component-edge-to-visual-only-200:10px;--spectrum-component-edge-to-visual-only-300:13px;--spectrum-component-edge-to-text-50:8px;--spectrum-component-edge-to-text-75:9px;--spectrum-component-edge-to-text-100:12px;--spectrum-component-edge-to-text-200:15px;--spectrum-component-edge-to-text-300:18px;--spectrum-component-height-50:20px;--spectrum-component-height-75:24px;--spectrum-component-height-100:32px;--spectrum-component-height-200:40px;--spectrum-component-height-300:48px;--spectrum-component-top-to-workflow-icon-50:3px;--spectrum-component-top-to-workflow-icon-75:4px;--spectrum-component-top-to-workflow-icon-100:7px;--spectrum-component-top-to-workflow-icon-200:10px;--spectrum-component-top-to-workflow-icon-300:13px;--spectrum-component-top-to-text-50:3px;--spectrum-component-top-to-text-75:4px;--spectrum-component-top-to-text-100:6px;--spectrum-component-top-to-text-200:9px;--spectrum-component-top-to-text-300:12px;--spectrum-component-bottom-to-text-50:3px;--spectrum-component-bottom-to-text-75:5px;--spectrum-component-bottom-to-text-100:9px;--spectrum-component-bottom-to-text-200:11px;--spectrum-component-bottom-to-text-300:14px;--spectrum-component-to-menu-small:6px;--spectrum-component-to-menu-medium:6px;--spectrum-component-to-menu-large:7px;--spectrum-component-to-menu-extra-large:8px;--spectrum-action-bar-height:48px;--spectrum-action-bar-top-to-item-counter:14px;--spectrum-action-button-edge-to-hold-icon-extra-small:3px;--spectrum-action-button-edge-to-hold-icon-small:3px;--spectrum-action-button-edge-to-hold-icon-medium:4px;--spectrum-action-button-edge-to-hold-icon-large:5px;--spectrum-action-button-edge-to-hold-icon-extra-large:6px;--spectrum-field-label-text-to-asterisk-small:4px;--spectrum-field-label-text-to-asterisk-medium:4px;--spectrum-field-label-text-to-asterisk-large:5px;--spectrum-field-label-text-to-asterisk-extra-large:5px;--spectrum-field-label-top-to-asterisk-small:8px;--spectrum-field-label-top-to-asterisk-medium:12px;--spectrum-field-label-top-to-asterisk-large:15px;--spectrum-field-label-top-to-asterisk-extra-large:19px;--spectrum-field-label-top-margin-small:0px;--spectrum-field-label-top-margin-medium:4px;--spectrum-field-label-top-margin-large:4px;--spectrum-field-label-top-margin-extra-large:4px;--spectrum-field-label-to-component-quiet-small:-8px;--spectrum-field-label-to-component-quiet-medium:-8px;--spectrum-field-label-to-component-quiet-large:-12px;--spectrum-field-label-to-component-quiet-extra-large:-15px;--spectrum-help-text-top-to-workflow-icon-small:4px;--spectrum-help-text-top-to-workflow-icon-medium:3px;--spectrum-help-text-top-to-workflow-icon-large:6px;--spectrum-help-text-top-to-workflow-icon-extra-large:9px;--spectrum-in-line-alert-minimum-width:320px;--spectrum-menu-item-edge-to-content-not-selected-small:28px;--spectrum-menu-item-edge-to-content-not-selected-medium:32px;--spectrum-menu-item-edge-to-content-not-selected-large:38px;--spectrum-menu-item-edge-to-content-not-selected-extra-large:45px;--spectrum-menu-item-top-to-disclosure-icon-small:7px;--spectrum-menu-item-top-to-disclosure-icon-medium:11px;--spectrum-menu-item-top-to-disclosure-icon-large:14px;--spectrum-menu-item-top-to-disclosure-icon-extra-large:17px;--spectrum-meter-default-width:192px;--spectrum-meter-thickness-small:4px;--spectrum-meter-thickness-medium:6px;--spectrum-swatch-size-extra-small:16px;--spectrum-swatch-size-small:24px;--spectrum-swatch-size-medium:32px;--spectrum-swatch-size-large:40px;--spectrum-progress-bar-thickness-small:4px;--spectrum-progress-bar-thickness-medium:6px;--spectrum-progress-bar-thickness-large:8px;--spectrum-progress-bar-thickness-extra-large:10px;--spectrum-progress-circle-size-small:16px;--spectrum-progress-circle-size-medium:32px;--spectrum-progress-circle-size-large:64px;--spectrum-progress-circle-thickness-small:2px;--spectrum-progress-circle-thickness-medium:3px;--spectrum-progress-circle-thickness-large:4px;--spectrum-status-light-dot-size-small:8px;--spectrum-status-light-dot-size-medium:8px;--spectrum-status-light-dot-size-large:10px;--spectrum-status-light-dot-size-extra-large:10px;--spectrum-status-light-top-to-dot-small:8px;--spectrum-status-light-top-to-dot-medium:12px;--spectrum-status-light-top-to-dot-large:15px;--spectrum-status-light-top-to-dot-extra-large:19px;--spectrum-toast-height:48px;--spectrum-toast-top-to-workflow-icon:15px;--spectrum-toast-top-to-text:14px;--spectrum-toast-bottom-to-text:17px;--spectrum-tooltip-tip-width:8px;--spectrum-tooltip-tip-height:4px;--spectrum-tooltip-maximum-width:160px;--spectrum-tag-top-to-avatar-small:4px;--spectrum-tag-top-to-avatar-medium:6px;--spectrum-tag-top-to-avatar-large:9px;--spectrum-tag-top-to-cross-icon-small:8px;--spectrum-tag-top-to-cross-icon-medium:12px;--spectrum-tag-top-to-cross-icon-large:15px;--spectrum-thumbnail-size-50:16px;--spectrum-thumbnail-size-75:18px;--spectrum-thumbnail-size-100:20px;--spectrum-thumbnail-size-200:22px;--spectrum-thumbnail-size-300:26px;--spectrum-thumbnail-size-400:28px;--spectrum-thumbnail-size-500:32px;--spectrum-thumbnail-size-600:36px;--spectrum-thumbnail-size-700:40px;--spectrum-thumbnail-size-800:44px;--spectrum-thumbnail-size-900:50px;--spectrum-thumbnail-size-1000:56px;--spectrum-popover-top-to-content-area:4px;--spectrum-text-area-minimum-width:112px;--spectrum-text-area-minimum-height:56px;--spectrum-font-size-50:11px;--spectrum-font-size-75:12px;--spectrum-font-size-100:14px;--spectrum-font-size-200:16px;--spectrum-font-size-300:18px;--spectrum-font-size-400:20px;--spectrum-font-size-500:22px;--spectrum-font-size-600:25px;--spectrum-font-size-700:28px;--spectrum-font-size-800:32px;--spectrum-font-size-900:36px;--spectrum-font-size-1000:40px;--spectrum-font-size-1100:45px;--spectrum-font-size-1200:50px;--spectrum-font-size-1300:60px;--spectrum-workflow-icon-size-50:14px;--spectrum-workflow-icon-size-75:16px;--spectrum-workflow-icon-size-100:18px;--spectrum-workflow-icon-size-200:20px;--spectrum-workflow-icon-size-300:22px;--spectrum-text-to-visual-50:6px;--spectrum-text-to-visual-75:7px;--spectrum-text-to-visual-100:8px;--spectrum-text-to-visual-200:9px;--spectrum-text-to-visual-300:10px;--spectrum-text-to-control-75:9px;--spectrum-text-to-control-100:10px;--spectrum-text-to-control-200:11px;--spectrum-text-to-control-300:13px;--spectrum-field-edge-to-disclosure-icon-75:7px;--spectrum-field-edge-to-disclosure-icon-100:11px;--spectrum-field-edge-to-disclosure-icon-200:14px;--spectrum-field-edge-to-disclosure-icon-300:17px;--spectrum-field-top-to-alert-icon-small:4px;--spectrum-field-top-to-alert-icon-medium:7px;--spectrum-field-top-to-alert-icon-large:10px;--spectrum-field-top-to-alert-icon-extra-large:13px;--spectrum-field-top-to-validation-icon-small:7px;--spectrum-field-top-to-validation-icon-medium:11px;--spectrum-field-top-to-validation-icon-large:14px;--spectrum-field-top-to-validation-icon-extra-large:17px;--spectrum-field-top-to-progress-circle-small:4px;--spectrum-field-top-to-progress-circle-medium:8px;--spectrum-field-top-to-progress-circle-large:12px;--spectrum-field-top-to-progress-circle-extra-large:16px;--spectrum-field-edge-to-alert-icon-small:9px;--spectrum-field-edge-to-alert-icon-medium:12px;--spectrum-field-edge-to-alert-icon-large:15px;--spectrum-field-edge-to-alert-icon-extra-large:18px;--spectrum-field-edge-to-validation-icon-small:9px;--spectrum-field-edge-to-validation-icon-medium:12px;--spectrum-field-edge-to-validation-icon-large:15px;--spectrum-field-edge-to-validation-icon-extra-large:18px;--spectrum-field-text-to-alert-icon-small:8px;--spectrum-field-text-to-alert-icon-medium:12px;--spectrum-field-text-to-alert-icon-large:15px;--spectrum-field-text-to-alert-icon-extra-large:18px;--spectrum-field-text-to-validation-icon-small:8px;--spectrum-field-text-to-validation-icon-medium:12px;--spectrum-field-text-to-validation-icon-large:15px;--spectrum-field-text-to-validation-icon-extra-large:18px;--spectrum-character-count-to-field-quiet-small:-3px;--spectrum-character-count-to-field-quiet-medium:-3px;--spectrum-character-count-to-field-quiet-large:-3px;--spectrum-character-count-to-field-quiet-extra-large:-4px;--spectrum-side-label-character-count-to-field:12px;--spectrum-side-label-character-count-top-margin-small:4px;--spectrum-side-label-character-count-top-margin-medium:8px;--spectrum-side-label-character-count-top-margin-large:10px;--spectrum-side-label-character-count-top-margin-extra-large:13px;--spectrum-disclosure-indicator-top-to-disclosure-icon-small:7px;--spectrum-disclosure-indicator-top-to-disclosure-icon-medium:11px;--spectrum-disclosure-indicator-top-to-disclosure-icon-large:14px;--spectrum-disclosure-indicator-top-to-disclosure-icon-extra-large:17px}:host,:root{--spectrum-edge-to-visual-only-75:4px;--spectrum-edge-to-visual-only-100:7px;--spectrum-edge-to-visual-only-200:10px;--spectrum-edge-to-visual-only-300:13px}:host,:root{--spectrum-checkbox-control-size-small:12px;--spectrum-checkbox-control-size-medium:14px;--spectrum-checkbox-control-size-large:16px;--spectrum-checkbox-control-size-extra-large:18px;--spectrum-checkbox-top-to-control-small:6px;--spectrum-checkbox-top-to-control-medium:9px;--spectrum-checkbox-top-to-control-large:12px;--spectrum-checkbox-top-to-control-extra-large:15px;--spectrum-radio-button-control-size-small:12px;--spectrum-radio-button-control-size-medium:14px;--spectrum-radio-button-control-size-large:16px;--spectrum-radio-button-control-size-extra-large:18px;--spectrum-radio-button-top-to-control-small:6px;--spectrum-radio-button-top-to-control-medium:9px;--spectrum-radio-button-top-to-control-large:12px;--spectrum-radio-button-top-to-control-extra-large:15px;--spectrum-switch-control-width-small:23px;--spectrum-switch-control-width-medium:26px;--spectrum-switch-control-width-large:29px;--spectrum-switch-control-width-extra-large:33px;--spectrum-switch-control-height-small:12px;--spectrum-switch-control-height-medium:14px;--spectrum-switch-control-height-large:16px;--spectrum-switch-control-height-extra-large:18px;--spectrum-switch-top-to-control-small:6px;--spectrum-switch-top-to-control-medium:9px;--spectrum-switch-top-to-control-large:12px;--spectrum-switch-top-to-control-extra-large:15px;--spectrum-slider-control-height-small:14px;--spectrum-slider-control-height-medium:16px;--spectrum-slider-control-height-large:18px;--spectrum-slider-control-height-extra-large:20px;--spectrum-slider-handle-size-small:14px;--spectrum-slider-handle-size-medium:16px;--spectrum-slider-handle-size-large:18px;--spectrum-slider-handle-size-extra-large:20px;--spectrum-slider-handle-border-width-down-small:5px;--spectrum-slider-handle-border-width-down-medium:6px;--spectrum-slider-handle-border-width-down-large:7px;--spectrum-slider-handle-border-width-down-extra-large:8px;--spectrum-slider-bottom-to-handle-small:5px;--spectrum-slider-bottom-to-handle-medium:8px;--spectrum-slider-bottom-to-handle-large:11px;--spectrum-slider-bottom-to-handle-extra-large:14px;--spectrum-picker-visual-to-disclosure-icon-small:7px;--spectrum-picker-visual-to-disclosure-icon-medium:8px;--spectrum-picker-visual-to-disclosure-icon-large:9px;--spectrum-picker-visual-to-disclosure-icon-extra-large:10px;--spectrum-combo-box-visual-to-field-button-small:7px;--spectrum-combo-box-visual-to-field-button-medium:8px;--spectrum-combo-box-visual-to-field-button-large:9px;--spectrum-combo-box-visual-to-field-button-extra-large:10px;--spectrum-corner-radius-75:2px;--spectrum-corner-radius-100:4px;--spectrum-corner-radius-200:8px;--spectrum-drop-shadow-x:0px;--spectrum-drop-shadow-y:1px;--spectrum-drop-shadow-blur:4px}
`,s=r(50);r(150);s.a.registerThemeFragment("medium","scale",a)},254:function(e,t,r){"use strict";var a=r(9),s=r(5),o=r(13),l=r(0),c=r(2);class i{constructor(){this.iconsetMap=new Map}static getInstance(){return i.instance||(i.instance=new i),i.instance}addIconset(e,t){this.iconsetMap.set(e,t);const r=new CustomEvent("sp-iconset-added",{bubbles:!0,composed:!0,detail:{name:e,iconset:t}});setTimeout((()=>window.dispatchEvent(r)),0)}removeIconset(e){this.iconsetMap.delete(e);const t=new CustomEvent("sp-iconset-removed",{bubbles:!0,composed:!0,detail:{name:e}});setTimeout((()=>window.dispatchEvent(t)),0)}getIconset(e){return this.iconsetMap.get(e)}}var n=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?u(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&n(t,r,o),o};class m extends a.a{constructor(){super(...arguments),this.iconsetListener=e=>{if(!this.name)return;const t=this.parseIcon(this.name);e.detail.name===t.iconset&&(this.updateIconPromise=this.updateIcon())}}connectedCallback(){super.connectedCallback(),window.addEventListener("sp-iconset-added",this.iconsetListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sp-iconset-added",this.iconsetListener)}firstUpdated(){this.updateIconPromise=this.updateIcon()}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),this.updateIconPromise=this.updateIcon()}render(){return this.name?l.a`
                <div id="container"></div>
            `:this.src?l.a`
                <img src="${this.src}" alt=${Object(s.a)(this.label)} />
            `:super.render()}async updateIcon(){if(this.updateIconPromise&&await this.updateIconPromise,!this.name)return Promise.resolve();const e=this.parseIcon(this.name),t=i.getInstance().getIconset(e.iconset);return t&&this.iconContainer?(this.iconContainer.innerHTML="",t.applyIconToElement(this.iconContainer,e.icon,this.size||"",this.label?this.label:"")):Promise.resolve()}parseIcon(e){const t=e.split(":");let r="default",a=e;return t.length>1&&(r=t[0],a=t[1]),{iconset:r,icon:a}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.updateIconPromise,e}}p([Object(c.b)()],m.prototype,"src",2),p([Object(c.b)()],m.prototype,"name",2),p([Object(o.a)("#container")],m.prototype,"iconContainer",2),customElements.define("sp-icon",m)},265:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o}));r(19);var a=r(0),s=a.d`
            .web-project-editor-table {
  width: 100%;
}

.web-project-editor-table-head-cell {
  color: var(--spectrum-global-color-static-gray-900);
  font-weight: 400;
}

tbody.spectrum-Table-body .spectrum-Table-cell {
  border: none;
  color: var(--spectrum-global-color-gray-700);
}

tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell {
  border: none;
}

tbody.spectrum-Table-body .spectrum-Table-row:hover {
  background: none;
  cursor: unset;
}

.css-copy-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 12px;
}

          `,o=a.d`
            .spectrum-Table {
  border-collapse: separate;
  border-spacing: 0;
}

.spectrum-Table--sizeS {
  --spectrum-table-compact-quiet-border-radius: var(--spectrum-table-s-compact-quiet-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-compact-header-border-radius: var(--spectrum-table-s-compact-header-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-compact-cell-border-radius-key-focus: var(--spectrum-table-s-compact-cell-border-radius-key-focus, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-compact-divider-border-size: var(--spectrum-table-s-compact-divider-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-compact-header-text-size: var(--spectrum-table-s-compact-header-text-size, var(--spectrum-global-dimension-font-size-50));
  --spectrum-table-compact-header-text-font-weight: var(--spectrum-table-s-compact-header-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  --spectrum-table-compact-header-text-letter-spacing: var(--spectrum-table-s-compact-header-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  --spectrum-table-compact-header-text-line-height: var(--spectrum-table-s-compact-header-text-line-height, var(--spectrum-alias-heading-text-line-height));
  --spectrum-table-compact-header-sort-icon-gap: var(--spectrum-table-s-compact-header-sort-icon-gap, var(--spectrum-global-dimension-size-125));
  --spectrum-table-compact-header-min-height: var(--spectrum-table-s-compact-header-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-compact-header-padding-top: var(--spectrum-table-s-compact-header-padding-top, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-compact-header-padding-bottom: var(--spectrum-table-s-compact-header-padding-bottom, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-compact-header-padding-left: var(--spectrum-table-s-compact-header-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-header-padding-right: var(--spectrum-table-s-compact-header-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-cell-text-size: var(--spectrum-table-s-compact-cell-text-size, var(--spectrum-global-dimension-font-size-75));
  --spectrum-table-compact-cell-text-font-weight: var(--spectrum-table-s-compact-cell-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  --spectrum-table-compact-cell-text-line-height: var(--spectrum-table-s-compact-cell-text-line-height, var(--spectrum-alias-component-text-line-height));
  --spectrum-table-compact-cell-checkbox-padding-right: var(--spectrum-table-s-compact-cell-checkbox-padding-right, var(--spectrum-global-dimension-size-100));
  --spectrum-table-compact-cell-checkbox-vertical-alignment: var(--spectrum-table-s-compact-cell-checkbox-vertical-alignment, middle);
  --spectrum-table-compact-cell-min-height: var(--spectrum-table-s-compact-cell-min-height, var(--spectrum-global-dimension-size-300));
  --spectrum-table-compact-cell-padding-top: var(--spectrum-table-s-compact-cell-padding-top, var(--spectrum-global-dimension-size-50));
  --spectrum-table-compact-cell-padding-bottom: var(--spectrum-table-s-compact-cell-padding-bottom, var(--spectrum-global-dimension-size-50));
  --spectrum-table-compact-cell-padding-left: var(--spectrum-table-s-compact-cell-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-cell-padding-right: var(--spectrum-table-s-compact-cell-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-cell-vertical-alignment: var(--spectrum-table-s-compact-cell-vertical-alignment, top);
  --spectrum-table-compact-border-radius: var(--spectrum-table-s-compact-border-radius, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-compact-border-size: var(--spectrum-table-s-compact-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-regular-quiet-border-radius: var(--spectrum-table-s-regular-quiet-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-regular-header-border-radius: var(--spectrum-table-s-regular-header-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-regular-cell-border-radius-key-focus: var(--spectrum-table-s-regular-cell-border-radius-key-focus, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-regular-divider-border-size: var(--spectrum-table-s-regular-divider-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-regular-header-text-size: var(--spectrum-table-s-regular-header-text-size, var(--spectrum-global-dimension-font-size-50));
  --spectrum-table-regular-header-text-font-weight: var(--spectrum-table-s-regular-header-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  --spectrum-table-regular-header-text-letter-spacing: var(--spectrum-table-s-regular-header-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  --spectrum-table-regular-header-text-line-height: var(--spectrum-table-s-regular-header-text-line-height, var(--spectrum-alias-heading-text-line-height));
  --spectrum-table-regular-header-sort-icon-gap: var(--spectrum-table-s-regular-header-sort-icon-gap, var(--spectrum-global-dimension-size-125));
  --spectrum-table-regular-header-min-height: var(--spectrum-table-s-regular-header-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-regular-header-padding-top: var(--spectrum-table-s-regular-header-padding-top, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-regular-header-padding-bottom: var(--spectrum-table-s-regular-header-padding-bottom, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-regular-header-padding-left: var(--spectrum-table-s-regular-header-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-header-padding-right: var(--spectrum-table-s-regular-header-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-cell-text-size: var(--spectrum-table-s-regular-cell-text-size, var(--spectrum-global-dimension-font-size-75));
  --spectrum-table-regular-cell-text-font-weight: var(--spectrum-table-s-regular-cell-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  --spectrum-table-regular-cell-text-line-height: var(--spectrum-table-s-regular-cell-text-line-height, var(--spectrum-alias-component-text-line-height));
  --spectrum-table-regular-cell-checkbox-padding-right: var(--spectrum-table-s-regular-cell-checkbox-padding-right, var(--spectrum-global-dimension-size-100));
  --spectrum-table-regular-cell-checkbox-vertical-alignment: var(--spectrum-table-s-regular-cell-checkbox-vertical-alignment, middle);
  --spectrum-table-regular-cell-min-height: var(--spectrum-table-s-regular-cell-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-regular-cell-padding-top: var(--spectrum-table-s-regular-cell-padding-top, var(--spectrum-global-dimension-size-85));
  --spectrum-table-regular-cell-padding-bottom: var(--spectrum-table-s-regular-cell-padding-bottom, var(--spectrum-global-dimension-size-85));
  --spectrum-table-regular-cell-padding-left: var(--spectrum-table-s-regular-cell-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-cell-padding-right: var(--spectrum-table-s-regular-cell-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-cell-vertical-alignment: var(--spectrum-table-s-regular-cell-vertical-alignment, top);
  --spectrum-table-regular-border-radius: var(--spectrum-table-s-regular-border-radius, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-regular-border-size: var(--spectrum-table-s-regular-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-spacious-quiet-border-radius: var(--spectrum-table-s-spacious-quiet-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-spacious-header-border-radius: var(--spectrum-table-s-spacious-header-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-spacious-cell-border-radius-key-focus: var(--spectrum-table-s-spacious-cell-border-radius-key-focus, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-spacious-divider-border-size: var(--spectrum-table-s-spacious-divider-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-spacious-header-text-size: var(--spectrum-table-s-spacious-header-text-size, var(--spectrum-global-dimension-font-size-50));
  --spectrum-table-spacious-header-text-font-weight: var(--spectrum-table-s-spacious-header-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  --spectrum-table-spacious-header-text-letter-spacing: var(--spectrum-table-s-spacious-header-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  --spectrum-table-spacious-header-text-line-height: var(--spectrum-table-s-spacious-header-text-line-height, var(--spectrum-alias-heading-text-line-height));
  --spectrum-table-spacious-header-sort-icon-gap: var(--spectrum-table-s-spacious-header-sort-icon-gap, var(--spectrum-global-dimension-size-125));
  --spectrum-table-spacious-header-min-height: var(--spectrum-table-s-spacious-header-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-spacious-header-padding-top: var(--spectrum-table-s-spacious-header-padding-top, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-spacious-header-padding-bottom: var(--spectrum-table-s-spacious-header-padding-bottom, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-spacious-header-padding-left: var(--spectrum-table-s-spacious-header-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-header-padding-right: var(--spectrum-table-s-spacious-header-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-cell-text-size: var(--spectrum-table-s-spacious-cell-text-size, var(--spectrum-global-dimension-font-size-75));
  --spectrum-table-spacious-cell-text-font-weight: var(--spectrum-table-s-spacious-cell-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  --spectrum-table-spacious-cell-text-line-height: var(--spectrum-table-s-spacious-cell-text-line-height, var(--spectrum-alias-component-text-line-height));
  --spectrum-table-spacious-cell-checkbox-padding-right: var(--spectrum-table-s-spacious-cell-checkbox-padding-right, var(--spectrum-global-dimension-size-100));
  --spectrum-table-spacious-cell-checkbox-vertical-alignment: var(--spectrum-table-s-spacious-cell-checkbox-vertical-alignment, middle);
  --spectrum-table-spacious-cell-min-height: var(--spectrum-table-s-spacious-cell-min-height, var(--spectrum-global-dimension-size-500));
  --spectrum-table-spacious-cell-padding-top: var(--spectrum-table-s-spacious-cell-padding-top, var(--spectrum-global-dimension-size-125));
  --spectrum-table-spacious-cell-padding-bottom: var(--spectrum-table-s-spacious-cell-padding-bottom, var(--spectrum-global-dimension-size-125));
  --spectrum-table-spacious-cell-padding-left: var(--spectrum-table-s-spacious-cell-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-cell-padding-right: var(--spectrum-table-s-spacious-cell-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-cell-vertical-alignment: var(--spectrum-table-s-spacious-cell-vertical-alignment, top);
  --spectrum-table-spacious-border-radius: var(--spectrum-table-s-spacious-border-radius, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-spacious-border-size: var(--spectrum-table-s-spacious-border-size, var(--spectrum-alias-border-size-thin));
}

.spectrum-Table--sizeM {
  --spectrum-table-compact-quiet-border-radius: var(--spectrum-table-m-compact-quiet-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-compact-header-border-radius: var(--spectrum-table-m-compact-header-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-compact-cell-border-radius-key-focus: var(--spectrum-table-m-compact-cell-border-radius-key-focus, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-compact-divider-border-size: var(--spectrum-table-m-compact-divider-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-compact-header-text-size: var(--spectrum-table-m-compact-header-text-size, var(--spectrum-global-dimension-font-size-50));
  --spectrum-table-compact-header-text-font-weight: var(--spectrum-table-m-compact-header-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  --spectrum-table-compact-header-text-letter-spacing: var(--spectrum-table-m-compact-header-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  --spectrum-table-compact-header-text-line-height: var(--spectrum-table-m-compact-header-text-line-height, var(--spectrum-alias-heading-text-line-height));
  --spectrum-table-compact-header-sort-icon-gap: var(--spectrum-table-m-compact-header-sort-icon-gap, var(--spectrum-global-dimension-size-125));
  --spectrum-table-compact-header-min-height: var(--spectrum-table-m-compact-header-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-compact-header-padding-top: var(--spectrum-table-m-compact-header-padding-top, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-compact-header-padding-bottom: var(--spectrum-table-m-compact-header-padding-bottom, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-compact-header-padding-left: var(--spectrum-table-m-compact-header-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-header-padding-right: var(--spectrum-table-m-compact-header-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-cell-text-size: var(--spectrum-table-m-compact-cell-text-size, var(--spectrum-global-dimension-font-size-100));
  --spectrum-table-compact-cell-text-font-weight: var(--spectrum-table-m-compact-cell-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  --spectrum-table-compact-cell-text-line-height: var(--spectrum-table-m-compact-cell-text-line-height, var(--spectrum-alias-component-text-line-height));
  --spectrum-table-compact-cell-checkbox-padding-right: var(--spectrum-table-m-compact-cell-checkbox-padding-right, var(--spectrum-global-dimension-size-100));
  --spectrum-table-compact-cell-checkbox-vertical-alignment: var(--spectrum-table-m-compact-cell-checkbox-vertical-alignment, middle);
  --spectrum-table-compact-cell-min-height: var(--spectrum-table-m-compact-cell-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-compact-cell-padding-top: var(--spectrum-table-m-compact-cell-padding-top, var(--spectrum-global-dimension-size-85));
  --spectrum-table-compact-cell-padding-bottom: var(--spectrum-table-m-compact-cell-padding-bottom, var(--spectrum-global-dimension-size-85));
  --spectrum-table-compact-cell-padding-left: var(--spectrum-table-m-compact-cell-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-cell-padding-right: var(--spectrum-table-m-compact-cell-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-compact-cell-vertical-alignment: var(--spectrum-table-m-compact-cell-vertical-alignment, top);
  --spectrum-table-compact-border-radius: var(--spectrum-table-m-compact-border-radius, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-compact-border-size: var(--spectrum-table-m-compact-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-regular-quiet-border-radius: var(--spectrum-table-m-regular-quiet-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-regular-header-border-radius: var(--spectrum-table-m-regular-header-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-regular-cell-border-radius-key-focus: var(--spectrum-table-m-regular-cell-border-radius-key-focus, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-regular-divider-border-size: var(--spectrum-table-m-regular-divider-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-regular-header-text-size: var(--spectrum-table-m-regular-header-text-size, var(--spectrum-global-dimension-font-size-50));
  --spectrum-table-regular-header-text-font-weight: var(--spectrum-table-m-regular-header-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  --spectrum-table-regular-header-text-letter-spacing: var(--spectrum-table-m-regular-header-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  --spectrum-table-regular-header-text-line-height: var(--spectrum-table-m-regular-header-text-line-height, var(--spectrum-alias-heading-text-line-height));
  --spectrum-table-regular-header-sort-icon-gap: var(--spectrum-table-m-regular-header-sort-icon-gap, var(--spectrum-global-dimension-size-125));
  --spectrum-table-regular-header-min-height: var(--spectrum-table-m-regular-header-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-regular-header-padding-top: var(--spectrum-table-m-regular-header-padding-top, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-regular-header-padding-bottom: var(--spectrum-table-m-regular-header-padding-bottom, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-regular-header-padding-left: var(--spectrum-table-m-regular-header-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-header-padding-right: var(--spectrum-table-m-regular-header-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-cell-text-size: var(--spectrum-table-m-regular-cell-text-size, var(--spectrum-global-dimension-font-size-100));
  --spectrum-table-regular-cell-text-font-weight: var(--spectrum-table-m-regular-cell-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  --spectrum-table-regular-cell-text-line-height: var(--spectrum-table-m-regular-cell-text-line-height, var(--spectrum-alias-component-text-line-height));
  --spectrum-table-regular-cell-checkbox-padding-right: var(--spectrum-table-m-regular-cell-checkbox-padding-right, var(--spectrum-global-dimension-size-100));
  --spectrum-table-regular-cell-checkbox-vertical-alignment: var(--spectrum-table-m-regular-cell-checkbox-vertical-alignment, middle);
  --spectrum-table-regular-cell-min-height: var(--spectrum-table-m-regular-cell-min-height, var(--spectrum-global-dimension-size-500));
  --spectrum-table-regular-cell-padding-top: var(--spectrum-table-m-regular-cell-padding-top, var(--spectrum-global-dimension-size-130));
  --spectrum-table-regular-cell-padding-bottom: var(--spectrum-table-m-regular-cell-padding-bottom, var(--spectrum-global-dimension-size-130));
  --spectrum-table-regular-cell-padding-left: var(--spectrum-table-m-regular-cell-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-cell-padding-right: var(--spectrum-table-m-regular-cell-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-regular-cell-vertical-alignment: var(--spectrum-table-m-regular-cell-vertical-alignment, top);
  --spectrum-table-regular-border-radius: var(--spectrum-table-m-regular-border-radius, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-regular-border-size: var(--spectrum-table-m-regular-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-spacious-quiet-border-radius: var(--spectrum-table-m-spacious-quiet-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-spacious-header-border-radius: var(--spectrum-table-m-spacious-header-border-radius, var(--spectrum-global-dimension-static-size-0));
  --spectrum-table-spacious-cell-border-radius-key-focus: var(--spectrum-table-m-spacious-cell-border-radius-key-focus, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-spacious-divider-border-size: var(--spectrum-table-m-spacious-divider-border-size, var(--spectrum-alias-border-size-thin));
  --spectrum-table-spacious-header-text-size: var(--spectrum-table-m-spacious-header-text-size, var(--spectrum-global-dimension-font-size-50));
  --spectrum-table-spacious-header-text-font-weight: var(--spectrum-table-m-spacious-header-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  --spectrum-table-spacious-header-text-letter-spacing: var(--spectrum-table-m-spacious-header-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  --spectrum-table-spacious-header-text-line-height: var(--spectrum-table-m-spacious-header-text-line-height, var(--spectrum-alias-heading-text-line-height));
  --spectrum-table-spacious-header-sort-icon-gap: var(--spectrum-table-m-spacious-header-sort-icon-gap, var(--spectrum-global-dimension-size-125));
  --spectrum-table-spacious-header-min-height: var(--spectrum-table-m-spacious-header-min-height, var(--spectrum-global-dimension-size-400));
  --spectrum-table-spacious-header-padding-top: var(--spectrum-table-m-spacious-header-padding-top, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-spacious-header-padding-bottom: var(--spectrum-table-m-spacious-header-padding-bottom, var(--spectrum-global-dimension-static-size-125));
  --spectrum-table-spacious-header-padding-left: var(--spectrum-table-m-spacious-header-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-header-padding-right: var(--spectrum-table-m-spacious-header-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-cell-text-size: var(--spectrum-table-m-spacious-cell-text-size, var(--spectrum-global-dimension-font-size-100));
  --spectrum-table-spacious-cell-text-font-weight: var(--spectrum-table-m-spacious-cell-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  --spectrum-table-spacious-cell-text-line-height: var(--spectrum-table-m-spacious-cell-text-line-height, var(--spectrum-alias-component-text-line-height));
  --spectrum-table-spacious-cell-checkbox-padding-right: var(--spectrum-table-m-spacious-cell-checkbox-padding-right, var(--spectrum-global-dimension-size-100));
  --spectrum-table-spacious-cell-checkbox-vertical-alignment: var(--spectrum-table-m-spacious-cell-checkbox-vertical-alignment, middle);
  --spectrum-table-spacious-cell-min-height: var(--spectrum-table-m-spacious-cell-min-height, var(--spectrum-global-dimension-size-600));
  --spectrum-table-spacious-cell-padding-top: var(--spectrum-table-m-spacious-cell-padding-top, var(--spectrum-global-dimension-size-185));
  --spectrum-table-spacious-cell-padding-bottom: var(--spectrum-table-m-spacious-cell-padding-bottom, var(--spectrum-global-dimension-size-185));
  --spectrum-table-spacious-cell-padding-left: var(--spectrum-table-m-spacious-cell-padding-left, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-cell-padding-right: var(--spectrum-table-m-spacious-cell-padding-right, var(--spectrum-global-dimension-static-size-200));
  --spectrum-table-spacious-cell-vertical-alignment: var(--spectrum-table-m-spacious-cell-vertical-alignment, top);
  --spectrum-table-spacious-border-radius: var(--spectrum-table-m-spacious-border-radius, var(--spectrum-alias-border-radius-regular));
  --spectrum-table-spacious-border-size: var(--spectrum-table-m-spacious-border-size, var(--spectrum-alias-border-size-thin));
}

[dir="ltr"] .spectrum-Table-sortedIcon {
  margin-left: var(--spectrum-table-regular-header-sort-icon-gap);
}

[dir="rtl"] .spectrum-Table-sortedIcon {
  margin-right: var(--spectrum-table-regular-header-sort-icon-gap);
}

.spectrum-Table-sortedIcon {
  display: none;

  vertical-align: middle;

  transition: transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
}

[dir="ltr"] .spectrum-Table-headCell {
  text-align: left;
}

[dir="rtl"] .spectrum-Table-headCell {
  text-align: right;
}

[dir="ltr"] .spectrum-Table-headCell {
  padding-left: var(--spectrum-table-regular-header-padding-left);
  padding-right: var(--spectrum-table-regular-header-padding-right);
}

[dir="rtl"] .spectrum-Table-headCell {
  padding-right: var(--spectrum-table-regular-header-padding-left);
  padding-left: var(--spectrum-table-regular-header-padding-right);
}

.spectrum-Table-headCell {
  box-sizing: border-box;
  font-size: var(--spectrum-table-regular-header-text-size);
  font-weight: var(--spectrum-table-regular-header-text-font-weight);
  line-height: var(--spectrum-table-regular-header-text-line-height);
  min-height: var(--spectrum-table-regular-header-min-height);
  letter-spacing: var(--spectrum-table-regular-header-text-letter-spacing);
  text-transform: uppercase;
  padding-top: var(--spectrum-table-regular-header-padding-top);
  padding-bottom: var(--spectrum-table-regular-header-padding-bottom);
  transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
  cursor: default;
  outline: 0;
  border-radius: var(--spectrum-table-regular-header-border-radius);
}

.spectrum-Table-headCell.is-sortable {
    cursor: pointer;
  }

.spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon, .spectrum-Table-headCell.is-sorted-desc .spectrum-Table-sortedIcon {
      display: inline-block;
      margin-top: calc(var(--spectrum-global-dimension-size-25) * -1);
    }

.spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon {
      transform: rotateZ(-90deg);
    }

.spectrum-Table-cell--alignCenter {
  text-align: center;
}

[dir="ltr"] .spectrum-Table-cell--alignRight {
  text-align: right;
}

[dir="rtl"] .spectrum-Table-cell--alignRight {
  text-align: left;
}

[dir="ltr"] .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
    left: 0;
}

[dir="rtl"] .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
    right: 0;
}

[dir="ltr"] .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
    right: 0;
}

[dir="rtl"] .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
    left: 0;
}

.spectrum-Table-body.is-drop-target::before,
.spectrum-Table-row.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
  }

.spectrum-Table-body {
  position: relative;

  border-width: var(--spectrum-table-regular-border-size);
  border-radius: var(--spectrum-table-regular-border-radius);
  overflow: auto;
  vertical-align: var(--spectrum-table-regular-cell-vertical-alignment);
}

.spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body {
    border-width: var(--spectrum-table-regular-border-size);
    border-radius: var(--spectrum-table-regular-border-radius);
  }

[dir="ltr"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
      border-top-left-radius: var(--spectrum-table-regular-border-radius);
}

[dir="rtl"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
      border-top-right-radius: var(--spectrum-table-regular-border-radius);
}

[dir="ltr"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
      border-top-right-radius: var(--spectrum-table-regular-border-radius);
}

[dir="rtl"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
      border-top-left-radius: var(--spectrum-table-regular-border-radius);
}

[dir="ltr"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
      border-bottom-left-radius: var(--spectrum-table-regular-border-radius);
}

[dir="rtl"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
      border-bottom-right-radius: var(--spectrum-table-regular-border-radius);
}

[dir="ltr"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
      border-bottom-right-radius: var(--spectrum-table-regular-border-radius);
}

[dir="rtl"] .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
      border-bottom-left-radius: var(--spectrum-table-regular-border-radius);
}

[dir="ltr"] .spectrum-Table-cell {
  padding-left: var(--spectrum-table-regular-cell-padding-left);
  padding-right: var(--spectrum-table-regular-cell-padding-right);
}

[dir="rtl"] .spectrum-Table-cell {
  padding-right: var(--spectrum-table-regular-cell-padding-left);
  padding-left: var(--spectrum-table-regular-cell-padding-right);
}

.spectrum-Table-cell {
  box-sizing: border-box;
  font-size: var(--spectrum-table-regular-cell-text-size);
  font-weight: var(--spectrum-table-regular-cell-text-font-weight);
  line-height: var(--spectrum-table-regular-cell-text-line-height);
  padding-top: var(--spectrum-table-regular-cell-padding-top);
  padding-bottom: var(--spectrum-table-regular-cell-padding-bottom);
  min-height: calc(var(--spectrum-table-regular-cell-min-height) - var(--spectrum-table-regular-cell-padding-top) - var(--spectrum-table-regular-cell-padding-bottom));
}

.spectrum-Table-cell,
.spectrum-Table-headCell {
  position: relative;
}

.spectrum-Table-cell.focus-ring,
  .spectrum-Table-cell.is-focused,
  .spectrum-Table-headCell.focus-ring,
  .spectrum-Table-headCell.is-focused {
    outline: none;
  }

[dir="ltr"] .spectrum-Table-cell.focus-ring::before,[dir="ltr"]  .spectrum-Table-cell.is-focused::before,[dir="ltr"]  .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table-headCell.is-focused::before {
      right: 0;
}

[dir="rtl"] .spectrum-Table-cell.focus-ring::before,[dir="rtl"]  .spectrum-Table-cell.is-focused::before,[dir="rtl"]  .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table-headCell.is-focused::before {
      left: 0;
}

[dir="ltr"] .spectrum-Table-cell.focus-ring::before,[dir="ltr"]  .spectrum-Table-cell.is-focused::before,[dir="ltr"]  .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table-headCell.is-focused::before {
      left: 0;
}

[dir="rtl"] .spectrum-Table-cell.focus-ring::before,[dir="rtl"]  .spectrum-Table-cell.is-focused::before,[dir="rtl"]  .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table-headCell.is-focused::before {
      right: 0;
}

.spectrum-Table-cell.focus-ring::before, .spectrum-Table-cell.is-focused::before, .spectrum-Table-headCell.focus-ring::before, .spectrum-Table-headCell.is-focused::before {
      content: '';
      z-index: 1;
      position: absolute;

      top: 0;
      bottom: 0;

      border-radius: calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);
    }

[dir="ltr"] .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table-headCell.is-focused::before {
      right: var(--spectrum-table-regular-border-size);
}

[dir="rtl"] .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table-headCell.is-focused::before {
      left: var(--spectrum-table-regular-border-size);
}

[dir="ltr"] .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table-headCell.is-focused::before {
      left: var(--spectrum-table-regular-border-size);
}

[dir="rtl"] .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table-headCell.is-focused::before {
      right: var(--spectrum-table-regular-border-size);
}

.spectrum-Table-headCell.focus-ring::before, .spectrum-Table-headCell.is-focused::before {
      top: var(--spectrum-table-regular-border-size);
      bottom: var(--spectrum-table-regular-border-size);
    }

[dir="ltr"] .spectrum-Table-cell--divider {
  border-right-width: var(--spectrum-table-regular-divider-border-size);
}

[dir="rtl"] .spectrum-Table-cell--divider {
  border-left-width: var(--spectrum-table-regular-divider-border-size);
}

.spectrum-Table-row {
  position: relative;
  cursor: pointer;
  transition: background-color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
}

.spectrum-Table-row:focus {
    outline: 0;
  }

.spectrum-Table > .spectrum-Table-body > .spectrum-Table-row:last-of-type {
  border-bottom-style: none;
}

.spectrum-Table--quiet .spectrum-Table-body {
    border-radius: var(--spectrum-table-regular-quiet-border-radius);
  }

.spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before, .spectrum-Table--quiet .spectrum-Table-row.is-drop-target::before {
        border-radius: var(--spectrum-alias-border-radius-regular, var(--spectrum-global-dimension-size-50));
      }

[dir="ltr"] .spectrum-Table-checkboxCell {
  padding-right: var(--spectrum-table-regular-cell-checkbox-padding-right);
}

[dir="rtl"] .spectrum-Table-checkboxCell {
  padding-left: var(--spectrum-table-regular-cell-checkbox-padding-right);
}

.spectrum-Table-checkboxCell {
  padding-top: 0px;
  padding-bottom: 0px;
  vertical-align: var(--spectrum-table-regular-cell-checkbox-vertical-alignment);
}

.spectrum-Table-checkbox {
  vertical-align: super;
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-sortedIcon {
    margin-left: var(--spectrum-table-compact-header-sort-icon-gap);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-sortedIcon {
    margin-right: var(--spectrum-table-compact-header-sort-icon-gap);
}

.spectrum-Table--compact .spectrum-Table-sortedIcon {
    display: none;

    vertical-align: middle;

    transition: transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
  }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-headCell {
    text-align: left;
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-headCell {
    text-align: right;
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-headCell {
    padding-left: var(--spectrum-table-compact-header-padding-left);
    padding-right: var(--spectrum-table-compact-header-padding-right);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-headCell {
    padding-right: var(--spectrum-table-compact-header-padding-left);
    padding-left: var(--spectrum-table-compact-header-padding-right);
}

.spectrum-Table--compact .spectrum-Table-headCell {
    box-sizing: border-box;
    font-size: var(--spectrum-table-compact-header-text-size);
    font-weight: var(--spectrum-table-compact-header-text-font-weight);
    line-height: var(--spectrum-table-compact-header-text-line-height);
    min-height: var(--spectrum-table-compact-header-min-height);
    letter-spacing: var(--spectrum-table-compact-header-text-letter-spacing);
    text-transform: uppercase;
    padding-top: var(--spectrum-table-compact-header-padding-top);
    padding-bottom: var(--spectrum-table-compact-header-padding-bottom);
    transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
    cursor: default;
    outline: 0;
    border-radius: var(--spectrum-table-compact-header-border-radius);
  }

.spectrum-Table--compact .spectrum-Table-headCell.is-sortable {
      cursor: pointer;
    }

.spectrum-Table--compact .spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon, .spectrum-Table--compact .spectrum-Table-headCell.is-sorted-desc .spectrum-Table-sortedIcon {
        display: inline-block;
        margin-top: calc(var(--spectrum-global-dimension-size-25) * -1);
      }

.spectrum-Table--compact .spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon {
        transform: rotateZ(-90deg);
      }

.spectrum-Table--compact .spectrum-Table-cell--alignCenter {
    text-align: center;
  }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-cell--alignRight {
    text-align: right;
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-cell--alignRight {
    text-align: left;
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      left: 0;
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      right: 0;
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      right: 0;
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      left: 0;
}

.spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--compact .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
    }

.spectrum-Table--compact .spectrum-Table-body {
    position: relative;

    border-width: var(--spectrum-table-compact-border-size);
    border-radius: var(--spectrum-table-compact-border-radius);
    overflow: auto;
    vertical-align: var(--spectrum-table-compact-cell-vertical-alignment);
  }

.spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body {
      border-width: var(--spectrum-table-compact-border-size);
      border-radius: var(--spectrum-table-compact-border-radius);
    }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
        border-top-left-radius: var(--spectrum-table-compact-border-radius);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
        border-top-right-radius: var(--spectrum-table-compact-border-radius);
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
        border-top-right-radius: var(--spectrum-table-compact-border-radius);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
        border-top-left-radius: var(--spectrum-table-compact-border-radius);
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
        border-bottom-left-radius: var(--spectrum-table-compact-border-radius);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
        border-bottom-right-radius: var(--spectrum-table-compact-border-radius);
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
        border-bottom-right-radius: var(--spectrum-table-compact-border-radius);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
        border-bottom-left-radius: var(--spectrum-table-compact-border-radius);
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-cell {
    padding-left: var(--spectrum-table-compact-cell-padding-left);
    padding-right: var(--spectrum-table-compact-cell-padding-right);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-cell {
    padding-right: var(--spectrum-table-compact-cell-padding-left);
    padding-left: var(--spectrum-table-compact-cell-padding-right);
}

.spectrum-Table--compact .spectrum-Table-cell {
    box-sizing: border-box;
    font-size: var(--spectrum-table-compact-cell-text-size);
    font-weight: var(--spectrum-table-compact-cell-text-font-weight);
    line-height: var(--spectrum-table-compact-cell-text-line-height);
    padding-top: var(--spectrum-table-compact-cell-padding-top);
    padding-bottom: var(--spectrum-table-compact-cell-padding-bottom);
    min-height: calc(var(--spectrum-table-compact-cell-min-height) - var(--spectrum-table-compact-cell-padding-top) - var(--spectrum-table-compact-cell-padding-bottom));
  }

.spectrum-Table--compact .spectrum-Table-cell,
  .spectrum-Table--compact .spectrum-Table-headCell {
    position: relative;
  }

.spectrum-Table--compact .spectrum-Table-cell.focus-ring,
    .spectrum-Table--compact .spectrum-Table-cell.is-focused,
    .spectrum-Table--compact .spectrum-Table-headCell.focus-ring,
    .spectrum-Table--compact .spectrum-Table-headCell.is-focused {
      outline: none;
    }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-cell.focus-ring::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-cell.is-focused::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        right: 0;
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-cell.focus-ring::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-cell.is-focused::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        left: 0;
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-cell.focus-ring::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-cell.is-focused::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        left: 0;
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-cell.focus-ring::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-cell.is-focused::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        right: 0;
}

.spectrum-Table--compact .spectrum-Table-cell.focus-ring::before, .spectrum-Table--compact .spectrum-Table-cell.is-focused::before, .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before, .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        content: '';
        z-index: 1;
        position: absolute;

        top: 0;
        bottom: 0;

        border-radius: calc(var(--spectrum-table-compact-cell-border-radius-key-focus) - 1px);
      }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        right: var(--spectrum-table-compact-border-size);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        left: var(--spectrum-table-compact-border-size);
}

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        left: var(--spectrum-table-compact-border-size);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        right: var(--spectrum-table-compact-border-size);
}

.spectrum-Table--compact .spectrum-Table-headCell.focus-ring::before, .spectrum-Table--compact .spectrum-Table-headCell.is-focused::before {
        top: var(--spectrum-table-compact-border-size);
        bottom: var(--spectrum-table-compact-border-size);
      }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-cell--divider {
    border-right-width: var(--spectrum-table-compact-divider-border-size);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-cell--divider {
    border-left-width: var(--spectrum-table-compact-divider-border-size);
}

.spectrum-Table--compact .spectrum-Table-row {
    position: relative;
    cursor: pointer;
    transition: background-color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
  }

.spectrum-Table--compact .spectrum-Table-row:focus {
      outline: 0;
    }

.spectrum-Table--compact .spectrum-Table > .spectrum-Table-body > .spectrum-Table-row:last-of-type {
    border-bottom-style: none;
  }

.spectrum-Table--compact .spectrum-Table--quiet .spectrum-Table-body {
      border-radius: var(--spectrum-table-compact-quiet-border-radius);
    }

.spectrum-Table--compact .spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before, .spectrum-Table--compact .spectrum-Table--quiet .spectrum-Table-row.is-drop-target::before {
          border-radius: var(--spectrum-alias-border-radius-regular, var(--spectrum-global-dimension-size-50));
        }

[dir="ltr"] .spectrum-Table--compact .spectrum-Table-checkboxCell {
    padding-right: var(--spectrum-table-compact-cell-checkbox-padding-right);
}

[dir="rtl"] .spectrum-Table--compact .spectrum-Table-checkboxCell {
    padding-left: var(--spectrum-table-compact-cell-checkbox-padding-right);
}

.spectrum-Table--compact .spectrum-Table-checkboxCell {
    padding-top: 0px;
    padding-bottom: 0px;
    vertical-align: var(--spectrum-table-compact-cell-checkbox-vertical-alignment);
  }

.spectrum-Table--compact .spectrum-Table-checkbox {
    vertical-align: super;
  }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-sortedIcon {
    margin-left: var(--spectrum-table-spacious-header-sort-icon-gap);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-sortedIcon {
    margin-right: var(--spectrum-table-spacious-header-sort-icon-gap);
}

.spectrum-Table--spacious .spectrum-Table-sortedIcon {
    display: none;

    vertical-align: middle;

    transition: transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
  }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-headCell {
    text-align: left;
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-headCell {
    text-align: right;
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-headCell {
    padding-left: var(--spectrum-table-spacious-header-padding-left);
    padding-right: var(--spectrum-table-spacious-header-padding-right);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-headCell {
    padding-right: var(--spectrum-table-spacious-header-padding-left);
    padding-left: var(--spectrum-table-spacious-header-padding-right);
}

.spectrum-Table--spacious .spectrum-Table-headCell {
    box-sizing: border-box;
    font-size: var(--spectrum-table-spacious-header-text-size);
    font-weight: var(--spectrum-table-spacious-header-text-font-weight);
    line-height: var(--spectrum-table-spacious-header-text-line-height);
    min-height: var(--spectrum-table-spacious-header-min-height);
    letter-spacing: var(--spectrum-table-spacious-header-text-letter-spacing);
    text-transform: uppercase;
    padding-top: var(--spectrum-table-spacious-header-padding-top);
    padding-bottom: var(--spectrum-table-spacious-header-padding-bottom);
    transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
    cursor: default;
    outline: 0;
    border-radius: var(--spectrum-table-spacious-header-border-radius);
  }

.spectrum-Table--spacious .spectrum-Table-headCell.is-sortable {
      cursor: pointer;
    }

.spectrum-Table--spacious .spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon, .spectrum-Table--spacious .spectrum-Table-headCell.is-sorted-desc .spectrum-Table-sortedIcon {
        display: inline-block;
        margin-top: calc(var(--spectrum-global-dimension-size-25) * -1);
      }

.spectrum-Table--spacious .spectrum-Table-headCell.is-sorted-asc .spectrum-Table-sortedIcon {
        transform: rotateZ(-90deg);
      }

.spectrum-Table--spacious .spectrum-Table-cell--alignCenter {
    text-align: center;
  }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-cell--alignRight {
    text-align: right;
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-cell--alignRight {
    text-align: left;
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      left: 0;
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      right: 0;
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="ltr"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      right: 0;
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,[dir="rtl"] 
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      left: 0;
}

.spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table--compact .spectrum-Table-row.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-body.is-drop-target::before,
.spectrum-Table--spacious .spectrum-Table--spacious .spectrum-Table-row.is-drop-target::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
    }

.spectrum-Table--spacious .spectrum-Table-body {
    position: relative;

    border-width: var(--spectrum-table-spacious-border-size);
    border-radius: var(--spectrum-table-spacious-border-radius);
    overflow: auto;
    vertical-align: var(--spectrum-table-spacious-cell-vertical-alignment);
  }

.spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body {
      border-width: var(--spectrum-table-spacious-border-size);
      border-radius: var(--spectrum-table-spacious-border-radius);
    }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
        border-top-left-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:first-child {
        border-top-right-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
        border-top-right-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:first-child .spectrum-Table-cell:last-child {
        border-top-left-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
        border-bottom-left-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:first-child {
        border-bottom-right-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
        border-bottom-right-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table:not(.spectrum-Table--quiet) tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell:last-child {
        border-bottom-left-radius: var(--spectrum-table-spacious-border-radius);
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-cell {
    padding-left: var(--spectrum-table-spacious-cell-padding-left);
    padding-right: var(--spectrum-table-spacious-cell-padding-right);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-cell {
    padding-right: var(--spectrum-table-spacious-cell-padding-left);
    padding-left: var(--spectrum-table-spacious-cell-padding-right);
}

.spectrum-Table--spacious .spectrum-Table-cell {
    box-sizing: border-box;
    font-size: var(--spectrum-table-spacious-cell-text-size);
    font-weight: var(--spectrum-table-spacious-cell-text-font-weight);
    line-height: var(--spectrum-table-spacious-cell-text-line-height);
    padding-top: var(--spectrum-table-spacious-cell-padding-top);
    padding-bottom: var(--spectrum-table-spacious-cell-padding-bottom);
    min-height: calc(var(--spectrum-table-spacious-cell-min-height) - var(--spectrum-table-spacious-cell-padding-top) - var(--spectrum-table-spacious-cell-padding-bottom));
  }

.spectrum-Table--spacious .spectrum-Table-cell,
  .spectrum-Table--spacious .spectrum-Table-headCell {
    position: relative;
  }

.spectrum-Table--spacious .spectrum-Table-cell.focus-ring,
    .spectrum-Table--spacious .spectrum-Table-cell.is-focused,
    .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring,
    .spectrum-Table--spacious .spectrum-Table-headCell.is-focused {
      outline: none;
    }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-cell.focus-ring::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-cell.is-focused::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        right: 0;
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-cell.focus-ring::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-cell.is-focused::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        left: 0;
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-cell.focus-ring::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-cell.is-focused::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        left: 0;
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-cell.focus-ring::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-cell.is-focused::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        right: 0;
}

.spectrum-Table--spacious .spectrum-Table-cell.focus-ring::before, .spectrum-Table--spacious .spectrum-Table-cell.is-focused::before, .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before, .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        content: '';
        z-index: 1;
        position: absolute;

        top: 0;
        bottom: 0;

        border-radius: calc(var(--spectrum-table-spacious-cell-border-radius-key-focus) - 1px);
      }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        right: var(--spectrum-table-spacious-border-size);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        left: var(--spectrum-table-spacious-border-size);
}

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="ltr"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        left: var(--spectrum-table-spacious-border-size);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before,[dir="rtl"]  .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        right: var(--spectrum-table-spacious-border-size);
}

.spectrum-Table--spacious .spectrum-Table-headCell.focus-ring::before, .spectrum-Table--spacious .spectrum-Table-headCell.is-focused::before {
        top: var(--spectrum-table-spacious-border-size);
        bottom: var(--spectrum-table-spacious-border-size);
      }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-cell--divider {
    border-right-width: var(--spectrum-table-spacious-divider-border-size);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-cell--divider {
    border-left-width: var(--spectrum-table-spacious-divider-border-size);
}

.spectrum-Table--spacious .spectrum-Table-row {
    position: relative;
    cursor: pointer;
    transition: background-color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;
  }

.spectrum-Table--spacious .spectrum-Table-row:focus {
      outline: 0;
    }

.spectrum-Table--spacious .spectrum-Table > .spectrum-Table-body > .spectrum-Table-row:last-of-type {
    border-bottom-style: none;
  }

.spectrum-Table--spacious .spectrum-Table--quiet .spectrum-Table-body {
      border-radius: var(--spectrum-table-spacious-quiet-border-radius);
    }

.spectrum-Table--spacious .spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before, .spectrum-Table--spacious .spectrum-Table--quiet .spectrum-Table-row.is-drop-target::before {
          border-radius: var(--spectrum-alias-border-radius-regular, var(--spectrum-global-dimension-size-50));
        }

[dir="ltr"] .spectrum-Table--spacious .spectrum-Table-checkboxCell {
    padding-right: var(--spectrum-table-spacious-cell-checkbox-padding-right);
}

[dir="rtl"] .spectrum-Table--spacious .spectrum-Table-checkboxCell {
    padding-left: var(--spectrum-table-spacious-cell-checkbox-padding-right);
}

.spectrum-Table--spacious .spectrum-Table-checkboxCell {
    padding-top: 0px;
    padding-bottom: 0px;
    vertical-align: var(--spectrum-table-spacious-cell-checkbox-vertical-alignment);
  }

.spectrum-Table--spacious .spectrum-Table-checkbox {
    vertical-align: super;
  }

.spectrum-Table-headCell {
  color: var(--spectrum-table-m-regular-header-text-color, var(--spectrum-alias-label-text-color));
  background-color: var(--spectrum-table-m-regular-header-background-color, var(--spectrum-alias-background-color-transparent));
}

.spectrum-Table-headCell.is-sortable .spectrum-Table-sortedIcon {
      color: var(--spectrum-table-m-regular-header-sort-icon-color, var(--spectrum-global-color-gray-600));
    }

.spectrum-Table-headCell.is-sortable:hover {
      color: var(--spectrum-table-m-regular-header-text-color-hover, var(--spectrum-alias-text-color-hover));
    }

.spectrum-Table-headCell.is-sortable:hover .spectrum-Table-sortedIcon {
        color: var(--spectrum-table-m-regular-header-sort-icon-color-hover, var(--spectrum-alias-icon-color-hover));
      }

.spectrum-Table-headCell.is-sortable.focus-ring,
    .spectrum-Table-headCell.is-sortable.is-focused {
      color: var(--spectrum-table-m-regular-header-text-color-key-focus, var(--spectrum-alias-text-color-hover));
    }

.spectrum-Table-headCell.is-sortable.focus-ring .spectrum-Table-sortedIcon, .spectrum-Table-headCell.is-sortable.is-focused .spectrum-Table-sortedIcon {
        color: var(--spectrum-table-m-regular-header-sort-icon-color-key-focus, var(--spectrum-alias-icon-color-key-focus));
      }

.spectrum-Table-headCell.is-sortable:active {
      color: var(--spectrum-table-m-regular-header-text-color-down, var(--spectrum-alias-text-color-down));
    }

.spectrum-Table-headCell.is-sortable:active .spectrum-Table-sortedIcon {
        color: var(--spectrum-table-m-regular-header-sort-icon-color-down, var(--spectrum-alias-icon-color-down));
      }

.spectrum-Table-cell.focus-ring::before, .spectrum-Table-cell.is-focused::before, .spectrum-Table-headCell.focus-ring::before, .spectrum-Table-headCell.is-focused::before {
      box-shadow: inset 0 0 0 2px
        var(--spectrum-table-m-regular-cell-border-color-key-focus, var(--spectrum-alias-border-color-key-focus));
    }

.spectrum-Table-body {
  border-style: solid;
  border-color: var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
  background-color: var(--spectrum-table-m-regular-background-color, var(--spectrum-global-color-gray-50));
}

.spectrum-Table-body.is-drop-target {
    border-color: var(--spectrum-alias-border-color-key-focus, var(--spectrum-global-color-blue-400));
    box-shadow: 0 0 0 1px var(--spectrum-alias-border-color-key-focus, var(--spectrum-global-color-blue-400));
  }

.spectrum-Table-body.is-drop-target::before {
      background-color: var(--spectrum-alias-highlight-selected);
    }

tbody.spectrum-Table-body {
  border: none;
}

tbody.spectrum-Table-body .spectrum-Table-row {
    border-top: none;
  }

tbody.spectrum-Table-body .spectrum-Table-cell {
    border-top: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
  }

[dir="ltr"] tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child {
    border-left: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
}

[dir="rtl"] tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child {
    border-right: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
}

[dir="ltr"] tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
    border-right: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
}

[dir="rtl"] tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
    border-left: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
}

tbody.spectrum-Table-body .spectrum-Table-row:last-child .spectrum-Table-cell {
    border-bottom: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
  }

.spectrum-Table-row {
  border-bottom: 1px solid var(--spectrum-table-m-regular-border-color, var(--spectrum-alias-border-color-mid));
  background-color: var(--spectrum-table-m-regular-row-background-color, var(--spectrum-alias-background-color-transparent));
}

.spectrum-Table-row:hover {
    background-color: var(--spectrum-table-m-regular-row-background-color-hover, var(--spectrum-alias-highlight-hover));
  }

.spectrum-Table-row.focus-ring,
  .spectrum-Table-row.is-focused {
    background-color: var(--spectrum-table-m-regular-row-background-color-hover, var(--spectrum-alias-highlight-hover));
  }

.spectrum-Table-row:active {
    background-color: var(--spectrum-table-m-regular-row-background-color-down, var(--spectrum-alias-highlight-down));
  }

.spectrum-Table-row.is-selected {
    background-color: var(--spectrum-table-m-regular-row-background-color-selected, var(--spectrum-alias-highlight-selected));
  }

.spectrum-Table-row.is-selected:hover {
      background-color: var(--spectrum-table-m-regular-row-background-color-selected-hover, var(--spectrum-alias-highlight-selected-hover));
    }

.spectrum-Table-row.is-selected.focus-ring,
    .spectrum-Table-row.is-selected.is-focused {
      background-color: var(--spectrum-table-m-regular-row-background-color-selected-key-focus, var(--spectrum-alias-highlight-selected-hover));
    }

.spectrum-Table-row.is-drop-target::before {
      box-shadow: inset 0 0 0 2px var(--spectrum-alias-border-color-key-focus, var(--spectrum-global-color-blue-400));
      background-color: var(--spectrum-alias-highlight-selected);
    }

.spectrum-Table-cell {
  color: var(--spectrum-table-m-regular-cell-text-color, var(--spectrum-alias-text-color));
  background-color: var(--spectrum-table-m-regular-cell-background-color, var(--spectrum-alias-background-color-transparent));
}

[dir="ltr"] .spectrum-Table-cell--divider {
  border-right-style: solid;
}

[dir="rtl"] .spectrum-Table-cell--divider {
  border-left-style: solid;
}

[dir="ltr"] .spectrum-Table-cell--divider {
  border-right-color: var(--spectrum-table-m-regular-divider-border-color, var(--spectrum-alias-border-color-mid));
}

[dir="rtl"] .spectrum-Table-cell--divider {
  border-left-color: var(--spectrum-table-m-regular-divider-border-color, var(--spectrum-alias-border-color-mid));
}

.spectrum-Table--quiet .spectrum-Table-body {
    border-width: 1px 0;
    background-color: var(--spectrum-table-m-regular-quiet-cell-background-color, var(--spectrum-alias-background-color-transparent));
  }

.spectrum-Table--quiet .spectrum-Table-body.is-drop-target {
      box-shadow: none;
      border-color: transparent;
    }

.spectrum-Table--quiet .spectrum-Table-body.is-drop-target::before {
        box-shadow: inset 0 0 0 2px var(--spectrum-alias-border-color-key-focus, var(--spectrum-global-color-blue-400));
      }

.spectrum-Table--quiet .spectrum-Table-row {
    background-color: var(--spectrum-table-m-regular-quiet-row-background-color, var(--spectrum-alias-background-color-transparent));
  }

.spectrum-Table--quiet .spectrum-Table-row:hover {
      background-color: var(--spectrum-table-m-regular-quiet-row-background-color-hover, var(--spectrum-alias-highlight-hover));
    }

.spectrum-Table--quiet .spectrum-Table-row.focus-ring,
    .spectrum-Table--quiet .spectrum-Table-row.is-focused {
      background-color: var(--spectrum-table-m-regular-quiet-row-background-color-hover, var(--spectrum-alias-highlight-hover));
    }

.spectrum-Table--quiet .spectrum-Table-row:active {
      background-color: var(--spectrum-table-m-regular-quiet-row-background-color-down, var(--spectrum-alias-highlight-down));
    }

.spectrum-Table--quiet .spectrum-Table-row.is-selected {
      background-color: var(--spectrum-table-m-regular-quiet-row-background-color-selected, var(--spectrum-alias-highlight-selected));
    }

.spectrum-Table--quiet .spectrum-Table-row.is-selected:hover {
        background-color: var(--spectrum-table-m-regular-quiet-row-background-color-selected-hover, var(--spectrum-alias-highlight-selected-hover));
      }

.spectrum-Table--quiet .spectrum-Table-row.is-selected.focus-ring,
      .spectrum-Table--quiet .spectrum-Table-row.is-selected.is-focused {
        background-color: var(--spectrum-table-m-regular-quiet-row-background-color-selected-key-focus, var(--spectrum-alias-highlight-selected-hover));
      }

[dir="ltr"] .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,[dir="ltr"] 
    .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-left: none;
}

[dir="rtl"] .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,[dir="rtl"] 
    .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-right: none;
}

[dir="ltr"] .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,[dir="ltr"] 
    .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-right: none;
}

[dir="rtl"] .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:first-child,[dir="rtl"] 
    .spectrum-Table--quiet tbody.spectrum-Table-body .spectrum-Table-row .spectrum-Table-cell:last-child {
      border-left: none;
}

          `},269:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(25),c=(r(48),r(7)),i=r(22),n=(r(74),r(128),r(105),r(43),r(26),r(11),r(9),r(4),r(2),r(20),r(13),r(49),r(37),r(5),r(15),r(54),r(68),r(47),{"feedback-button.label":"Feedback and support","feedback-button.link.help-center":"Adobe Fonts Help Center","feedback-button.link.send-feedback":"Send your feedback","feedback-button.link.support":"Adobe Fonts Support Community"}),u=s.d`
            h1 {
  font-weight: 850;
}

sp-action-button {
  background: var(--spectrum-global-color-blue-400);
  border-radius: 50%;
  color: var(--spectrum-global-color-gray-50);
  height: 48px;
  width: 48px;
}

          `;const p={"ja-JP":"https://community.adobe.com/t5/adobe-fonts%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A9%E3%83%A0/ct-p/ct-fonts-jp","ko-KR":"https://community.adobe.com/t5/adobe-fonts-%EA%B2%8C%EC%8B%9C%ED%8C%90/ct-p/ct-fonts-ko"};let m=class extends(Object(c.a)(s.e,n)){static get styles(){return u}get listLinks(){return[{text:this.t("feedback-button.link.send-feedback"),link:Object(c.e)("https://adobefonts.uservoice.com",Object(c.d)())},{text:this.t("feedback-button.link.help-center"),link:Object(c.e)("https://helpx.adobe.com/support/fonts.html",Object(c.d)())},{text:this.t("feedback-button.link.support"),link:this.localizedSupportLinks()}]}localizedSupportLinks(){const e=Object(c.d)();return e in p?p[e]:Object(c.e)("https://community.adobe.com/t5/adobe-fonts/ct-p/ct-fonts",e)}closePopover(){return Object(a.e)(this,void 0,void 0,(function*(){this.closeOverlay&&((yield this.closeOverlay)(),delete this.closeOverlay)}))}openPopover(){return Object(a.e)(this,void 0,void 0,(function*(){this.popover&&(this.closeOverlay=yield Object(i.a)(this,"inline",this.popover,{offset:6,placement:"top-end"}))}))}handleClick(e){e.preventDefault(),null==this.popover?this.closePopover():this.openPopover()}render(){return s.a`<sp-action-button id="feedback-action" @click="${this.handleClick}" label="${this.t("feedback-button.label")}" title="${this.t("feedback-button.label")}" quiet><h1>?</h1></sp-action-button><sp-popover slot="click-content"><sp-menu>${this.listLinks.map((e=>s.a`<sp-menu-item target="_blank" href="${e.link}">${e.text}</sp-menu-item>`))}</sp-menu></sp-popover>`}};Object(a.a)([Object(l.a)("sp-popover")],m.prototype,"popover",void 0),m=Object(a.a)([Object(o.a)("af-feedback-button")],m)},270:function(e,t,r){"use strict";var a=r(3),s=r(91),o=(r(172),r(74),r(128),r(254),r(173),r(16)),l=r(9),c=r(0),i=(r(19),r(7)),n=r(23),u=r(4),p=r(2),m=r(14);r(67),r(106),r(26),r(63),r(70),r(22),r(11),r(20),r(5),r(13);customElements.define("sp-icon-open-in",class extends l.a{render(){return Object(o.a)(c.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="Open In"}={})=>o.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 36 36"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <path
      d="M33 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h24v24H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
    />
    <path
      d="M18.636 27.764a.784.784 0 0 0 .56.236.803.803 0 0 0 .804-.754v-10.75a.497.497 0 0 0-.496-.496H8.754a.803.803 0 0 0-.754.804.785.785 0 0 0 .235.56l3.786 3.786-9.042 9.042a1 1 0 0 0 0 1.415l1.414 1.414a1 1 0 0 0 1.414 0l9.043-9.042Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var d=c.d`
            :host {
  display: inline-flex;
}

          `,g={"open-in-ccx-button.open-in-ccx":"Try in Adobe Express"};let b=class extends(Object(n.a)(Object(i.a)(u.a,g))){constructor(){super(...arguments),this._handleClick=()=>{this.sendAnalyticsEvent("ccx-edit-font",{psName:this.psName})}}static get styles(){return d}render(){return c.a`<sp-action-button @click="${this._handleClick}" href="${Object(s.getCCXOpenFontSpecimenHref)(this.psName,this.previewString)}" target="_blank"><sp-icon-open-in slot="icon"></sp-icon-open-in>${this.t("open-in-ccx-button.open-in-ccx")}</sp-action-button>`}};Object(a.a)([Object(p.b)({type:String})],b.prototype,"psName",void 0),Object(a.a)([Object(p.b)({type:String})],b.prototype,"previewString",void 0),b=Object(a.a)([Object(m.a)("af-open-in-ccx-button")],b)},271:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(4),l=r(2),c=r(14),i=s.d`
            :host {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform .2s;
  width: 200px;
}

:host([expanded]) {
  left: 0;
  transform: translateX(0);
}

          `;let n=class extends o.a{constructor(){super(...arguments),this.expanded=!1}static get styles(){return i}render(){return s.a`<nav><slot></slot></nav>`}};Object(a.a)([Object(l.b)({type:Boolean})],n.prototype,"expanded",void 0),n=Object(a.a)([Object(c.a)("af-flyout-navigation")],n)},272:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(4),l=r(2),c=r(14),i=s.d`
            :host {
  --flyout-transition-time: .2s;
  --spectrum-tabs-item-gap: 0;

  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform var(--flyout-transition-time);
  z-index: 3;
}

:host([right]) {
  transform: translateX(100%);
}

:host([top]) {
  transform: translate(0, -100%);
}

:host([bottom]) {
  transform: translate(0, 100%);
}

:host([expanded]) {
  transform: translateX(0);
}

:host([expanded][bottom]),
:host([expanded][right]),
:host([expanded][top]) {
  transform: translate(0, 0);
}

/*
 * Overlay scrim
 */
:host([overlay]):before {
  background-color: var(--spectrum-global-color-static-black);
  content: '';
  display: none;
  height: 200vh;
  opacity: 0;
  position: fixed;
  top: 0;
  width: 200vw;
  z-index: -1;
}

:host([bottom]):before,
:host([right]):before,
:host([top]):before {
  left: -100vw;
}

:host([bottom]):before {
  top: -100vh;
}

:host([overlay][expanded]):before {
  display: block;
  opacity: 0.35;
}


          `;let n=class extends o.a{constructor(){super(...arguments),this.expanded=!1,this.overlay=!1,this._handleClick=e=>{e.stopPropagation()},this._handleOutsideSlotClick=e=>{e.stopPropagation(),this.removeAttribute("expanded"),this.dispatchEvent(new CustomEvent("closed"))},this._updateAutocloseEvents=()=>{this.expanded?(this.addEventListener("click",this._handleOutsideSlotClick),window.addEventListener("click",this._handleOutsideSlotClick)):this._removeEventListeners()}}static get styles(){return i}updated(e){return Object(a.e)(this,void 0,void 0,(function*(){if(e.has("expanded"))return this.hasAttribute("autoclose")?new Promise(requestAnimationFrame).then((()=>{this._updateAutocloseEvents()})):(this._dispatchUpdateEvent(),Promise.resolve())}))}disconnectedCallback(){super.disconnectedCallback(),this._removeEventListeners()}render(){return s.a`<slot @click="${this._handleClick}"></slot>`}_dispatchUpdateEvent(){this.dispatchEvent(new CustomEvent(this.expanded?"expand":"collapse"))}_removeEventListeners(){this.removeEventListener("click",this._handleOutsideSlotClick),window.removeEventListener("click",this._handleOutsideSlotClick)}};Object(a.a)([Object(l.b)({type:Boolean})],n.prototype,"expanded",void 0),Object(a.a)([Object(l.b)({type:Boolean})],n.prototype,"overlay",void 0),n=Object(a.a)([Object(c.a)("af-flyout")],n)},273:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=r(25),i=(r(48),r(186),r(187),r(43),r(148),r(92),r(20),r(2),r(4),r(5),r(37),r(13),r(15),r(105),r(49),r(11),r(9),r(54),r(22),r(68),r(47),r(74),r(97),r(16),r(125),r(104),r(63),r(83),r(17),r(130),r(182),r(181),r(23),r(7),r(26),r(126),r(53),r(14),s.d`
            
          `);let n=class extends s.e{constructor(){super(...arguments),this.manageLink={url:"/my_fonts",label:"Manage fonts"},this.searchResults=[],this.showSubnav=!0,this.subNavLinks=[],this.user="",this._handleFlyoutToggle=e=>{this.showSubnav=!e}}static get styles(){return i}render(){return s.a`<af-navbar-header id="navbar-header" .size="${this.size}" @flyout.expanded="${()=>this._handleFlyoutToggle(!0)}" @flyout.collapsed="${()=>this._handleFlyoutToggle(!1)}"></af-navbar-header>${this.showSubnav?s.a`<af-navbar-subnav id="navbar-subnav" .manageLink="${this.manageLink}" .searchResults="${this.searchResults}" .subNavLinks="${this.subNavLinks}" .user="${this.user}"></af-navbar-subnav>`:""}`}};Object(a.a)([Object(l.a)()],n.prototype,"size",void 0),Object(a.a)([Object(l.a)({type:Object})],n.prototype,"manageLink",void 0),Object(a.a)([Object(c.a)("#navbar-header")],n.prototype,"navbarHeader",void 0),Object(a.a)([Object(c.a)("#navbar-subnav")],n.prototype,"navbarSubnav",void 0),Object(a.a)([Object(l.a)({type:Array})],n.prototype,"searchResults",void 0),Object(a.a)([Object(l.a)({type:Boolean})],n.prototype,"showSubnav",void 0),Object(a.a)([Object(l.a)({type:Array})],n.prototype,"subNavLinks",void 0),Object(a.a)([Object(l.a)()],n.prototype,"user",void 0),n=Object(a.a)([Object(o.a)("af-navbar-combo")],n)},274:function(e,t,r){"use strict";(function(e){var t=r(3),a=(r(19),r(0)),s=r(28),o=r(8),l=r(25),c=(r(48),r(41)),i=(r(105),r(172),r(281),r(16)),n=r(9),u=r(183),p=r(5),m=r(2),d=r(13),g=(r(173),r(23)),b=r(22),h=r(7),v=r(121),f=r(196);r(43),r(24),r(4),r(49),r(11),r(37),r(15),r(54),r(68),r(47),r(63),r(70),r(104),r(17),r(51),r(26);customElements.define("sp-icon-magnify",class extends n.a{render(){return Object(i.a)(a.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="Magnify"}={})=>i.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <path
      d="M33.173 30.215 25.4 22.443a12.826 12.826 0 1 0-2.957 2.957l7.772 7.772a2.1 2.1 0 0 0 2.958-2.958ZM6 15a9 9 0 1 1 9 9 9 9 0 0 1-9-9Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var x=a.d`
:host{--spectrum-search-quiet-button-offset:calc(var(
--spectrum-actionbutton-m-texticon-min-width,
var(--spectrum-global-dimension-size-400)
)/2 - var(--spectrum-alias-ui-icon-cross-size-100)/2)}#textfield{display:inline-block;position:relative}:host([dir=ltr]) #button{right:0}:host([dir=rtl]) #button{left:0}#button{position:absolute;top:0}.input{-webkit-appearance:none;border-radius:var(
--spectrum-alias-search-border-radius,var(--spectrum-global-dimension-size-50)
);outline-offset:-2px}.input::-webkit-search-cancel-button,.input::-webkit-search-decoration{-webkit-appearance:none}#textfield:after{border-radius:var(
--spectrum-alias-search-border-radius,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]:not([quiet])) #textfield .icon{left:var(
--spectrum-alias-search-padding-left-m
)}:host([dir=rtl]:not([quiet])) #textfield .icon{right:var(
--spectrum-alias-search-padding-left-m
)}:host([dir=ltr]:not([quiet])) #textfield .input{padding-left:calc(var(--spectrum-alias-search-padding-left-m) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-textfield-m-texticon-icon-gap,
var(--spectrum-global-dimension-size-100)
) - var(
--spectrum-textfield-m-texticon-border-size,
var(--spectrum-alias-input-border-size)
))}:host([dir=rtl]:not([quiet])) #textfield .input{padding-right:calc(var(--spectrum-alias-search-padding-left-m) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-textfield-m-texticon-icon-gap,
var(--spectrum-global-dimension-size-100)
) - var(
--spectrum-textfield-m-texticon-border-size,
var(--spectrum-alias-input-border-size)
))}:host([quiet]) #button{transform:translateX(var(--spectrum-search-quiet-button-offset))}:host([quiet]) .input{border-radius:var(
--spectrum-alias-search-border-radius-quiet,0
)}:host([quiet]) #textfield:after{border-radius:var(
--spectrum-alias-search-border-radius-quiet,0
)}.icon{color:var(
--spectrum-textfield-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}.input:hover~.icon{color:var(
--spectrum-search-m-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}.input:active~.icon{color:var(
--spectrum-search-m-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}.input.focus-visible~.icon{color:var(
--spectrum-search-m-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}.input:focus-visible~.icon{color:var(
--spectrum-search-m-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}.input:disabled~.icon{color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}input::-webkit-search-cancel-button{display:none}
`,y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,z=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?w(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&y(t,r,o),o};const k=e=>e.stopPropagation();class T extends u.a{constructor(){super(...arguments),this.action="",this.label="Search",this.placeholder="Search"}static get styles(){return[...super.styles,x]}handleSubmit(e){this.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))||e.preventDefault()}handleKeydown(e){const{code:t}=e;!this.value||"Escape"!==t||this.reset()}async reset(){this.value="",await this.updateComplete,this.focusElement.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.focusElement.dispatchEvent(new InputEvent("change",{bubbles:!0}))}renderField(){return a.a`
            <form
                action=${this.action}
                id="form"
                method=${Object(p.a)(this.method)}
                @submit=${this.handleSubmit}
                @reset=${this.reset}
                @keydown=${this.handleKeydown}
            >
                <sp-icon-magnify
                    class="icon magnifier icon-workflow"
                ></sp-icon-magnify>
                ${super.renderField()}
                ${this.value?a.a`
                          <sp-clear-button
                              id="button"
                              label="Reset"
                              tabindex="-1"
                              type="reset"
                              @keydown=${k}
                          ></sp-clear-button>
                      `:a.a``}
            </form>
        `}firstUpdated(e){super.firstUpdated(e),this.inputElement.setAttribute("type","search")}willUpdate(){this.multiline=!1}}z([Object(m.b)()],T.prototype,"action",2),z([Object(m.b)()],T.prototype,"label",2),z([Object(m.b)()],T.prototype,"method",2),z([Object(m.b)()],T.prototype,"placeholder",2),z([Object(d.a)("#form")],T.prototype,"form",2),customElements.define("sp-search",T);var j="object"==typeof e&&e&&e.Object===Object&&e,C="object"==typeof self&&self&&self.Object===Object&&self,S=j||C||Function("return this")(),O=S.Symbol,L=Object.prototype,A=L.hasOwnProperty,H=L.toString,B=O?O.toStringTag:void 0,D=Object.prototype.toString,M=O?O.toStringTag:void 0;var $=/\s/,P=/^\s+/;function E(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var X=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,F=/^0o[0-7]+$/i,I=parseInt;function q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?function(e){var t=A.call(e,B),r=e[B];try{e[B]=void 0;var a=!0}catch(e){}var s=H.call(e);return a&&(t?e[B]=r:delete e[B]),s}(e):function(e){return D.call(e)}(e)}(e)}(e))return NaN;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&$.test(e.charAt(t)););return t}(e)+1).replace(P,""):e}(e);var r=_.test(e);return r||F.test(e)?I(e.slice(2),r?2:8):X.test(e)?NaN:+e}var N=function(){return S.Date.now()},R=Math.max,G=Math.min;var U=a.d`
            :host {
  --spectrum-textfield-m-border-color-key-focus: var(--spectrum-alias-border-color);
  display: inline-flex;
}

.search-field,
.search-field-container {
  --spectrum-textfield-texticon-text-size: var(--searchbar-text-size);
  --spectrum-textfield-texticon-height: var(--searchbar-textfield-height, var(--spectrum-global-dimension-size-400));

  width: 100%;
}

.search-field-container {
  height: 56px;
  position: relative;
}

.visual-search-icon {
  color: var(--spectrum-global-color-gray-700);
  cursor: pointer;
  float: right;
  position: absolute;
  right: 8px;
  top: 8px;
}

.visual-search-icon:hover {
  color: var(--spectrum-global-color-gray-800);
}

          `,Y={"search-bar.placeholder.text":"Search all fonts, foundries, and designers","search-bar.autocomplete.title":"Top family results","search-bar.visual-search.tooltip-label":"Upload a photo to scan for similar type"};let Q=class extends(Object(g.a)(Object(h.a)(a.e,Object.assign({},Y)))){constructor(){super(...arguments),this.popoverMenu=null,this.results=[],this.showVisualSearch="true",this._handleSearchInput=function(e,t,r){var a,s,o,l,c,i,n=0,u=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=a,o=s;return a=s=void 0,n=t,l=e.apply(o,r)}function g(e){return n=e,c=setTimeout(h,t),u?d(e):l}function b(e){var r=e-i;return void 0===i||r>=t||r<0||p&&e-n>=o}function h(){var e=N();if(b(e))return v(e);c=setTimeout(h,function(e){var r=t-(e-i);return p?G(r,o-(e-n)):r}(e))}function v(e){return c=void 0,m&&a?d(e):(a=s=void 0,l)}function f(){var e=N(),r=b(e);if(a=arguments,s=this,i=e,r){if(void 0===c)return g(i);if(p)return clearTimeout(c),c=setTimeout(h,t),d(i)}return void 0===c&&(c=setTimeout(h,t)),l}return t=q(t)||0,E(r)&&(u=!!r.leading,o=(p="maxWait"in r)?R(q(r.maxWait)||0,t):o,m="trailing"in r?!!r.trailing:m),f.cancel=function(){void 0!==c&&clearTimeout(c),n=0,a=i=s=c=void 0},f.flush=function(){return void 0===c?l:v(N())},f}((()=>{var e;(null===(e=this.search)||void 0===e?void 0:e.value)&&this.dispatchEvent(new v.default(this.search.value))}),200),this._handleWindowResize=()=>{this.closePopover()}}static get styles(){return U}get isHidden(){return!this.offsetParent}connectedCallback(){window.addEventListener("resize",this._handleWindowResize),super.connectedCallback()}disconnectedCallback(){window.removeEventListener("resize",this._handleWindowResize),this.closePopover(),super.disconnectedCallback()}updated(e){e.get("results")&&(e.get("results").length>0&&!this.isHidden?this.openPopover():this.closePopover())}closePopover(){return Object(t.e)(this,void 0,void 0,(function*(){this.closeOverlay&&((yield this.closeOverlay)(),delete this.closeOverlay)}))}openPopover(){this.popover&&(this.popoverMenu=this.popover.querySelector("sp-menu"),this.closeOverlay=Object(b.a)(this,"inline",this.popover,{offset:0,placement:"bottom"}))}handleVisualSearchClick(){window.dispatchEvent(new f.a)}handleKeydown(e){var t;"ArrowDown"===e.code&&(null===(t=this.popoverMenu)||void 0===t||t.focus())}handleSubmit(e){e.preventDefault();const t=e.target;this.visitUrl(`/search?query=${null==t?void 0:t.value}`),this.sendAnalyticsEvent("search-param-submitted",{searchParam:t.value})}visitUrl(e){window.location.href=e}renderResults(){if(0==this.results.length)return a.a``;const e=`${Math.floor(this.getBoundingClientRect().width)}px`;return a.a`<sp-popover style="width:${e}"><sp-menu><sp-menu-item style="text-transform:uppercase;font-weight:700">${this.t("search-bar.autocomplete.title")}</sp-menu-item>${this.results.map((e=>a.a`<sp-menu-item href="/fonts/${e.slug}">${e.name}</sp-menu-item>`))}</sp-menu></sp-popover>`}render(){return a.a`<div class="search-field-container"><sp-search class="search-field" @input="${this._handleSearchInput}" @change="${this._handleSearchInput}" @keydown="${this.handleKeydown}" @submit="${this.handleSubmit}" autocomplete="off" placeholder="${this.t("search-bar.placeholder.text")}"></sp-search>${this._renderVisualSearch()} ${this.renderResults()}</div>`}_renderVisualSearch(){if("false"===this.showVisualSearch)return a.a``;const e=`--spectrum-tooltip-tip-height: 0; float: right; left: -${parseInt(this.tooltipOffset||"90")}px; min-width: 210px; top: -6px`;return a.a`<overlay-trigger id="trigger" placement="bottom"><span class="visual-search-icon" slot="trigger" @click="${this.handleVisualSearchClick}"><div class="svg-logo">${Object(c.a)('<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">\n  <defs>\n    <style>\n      .a {\n        fill: #6E6E6E;\n      }\n    </style>\n  </defs>\n  <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="a" d="M9,6a3,3,0,1,0,3,3A3,3,0,0,0,9,6Z" />\n  <path class="a" d="M16.5,4H13.475L11.8,2.163A.5.5,0,0,0,11.4295,2H6.5705a.5.5,0,0,0-.3695.163L4.525,4H1.5a.5.5,0,0,0-.5.5v10a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,16.5,4ZM9,13.1A4.1,4.1,0,1,1,13.1,9,4.1,4.1,0,0,1,9,13.1Z" />\n</svg>')}</div></span><sp-tooltip class="visual-search-tooltip" placement="bottom" slot="hover-content" style="${e}">${this.t("search-bar.visual-search.tooltip-label")}</sp-tooltip></overlay-trigger>`}};Object(t.a)([Object(l.a)("sp-popover")],Q.prototype,"popover",void 0),Object(t.a)([Object(o.a)({type:Array})],Q.prototype,"results",void 0),Object(t.a)([Object(o.a)({type:String})],Q.prototype,"showVisualSearch",void 0),Object(t.a)([Object(o.a)({type:String})],Q.prototype,"tooltipOffset",void 0),Object(t.a)([Object(l.a)("sp-search")],Q.prototype,"search",void 0),Q=Object(t.a)([Object(s.a)("af-search-bar")],Q)}).call(this,r(27))},281:function(e,t,r){"use strict";var a=r(153),s=r(583),o=r(120),l=r(127),c=r(136);var i=c.b`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}:host{background-color:transparent;border:none;border-radius:100%;margin:0;padding:var(--spectrum-clearbutton-padding)}:host>.icon{margin:0 auto}:host([size=s]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-s-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-s-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-s-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-s-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-s-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-s-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-s-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-s-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-s-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-s-fill-size,var(--spectrum-alias-infieldbutton-full-height-s)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-s-padding,var(--spectrum-alias-infieldbutton-padding-s)
)}:host([size=m]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-m-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-m-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-m-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-m-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-m-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-m-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-m-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-m-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-m-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-m-fill-size,var(--spectrum-alias-infieldbutton-full-height-m)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-m-padding,var(--spectrum-alias-infieldbutton-padding-m)
)}:host([size=l]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-l-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-l-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-l-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-l-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-l-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-l-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-l-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-l-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-l-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-l-fill-size,var(--spectrum-alias-infieldbutton-full-height-l)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-l-padding,var(--spectrum-alias-infieldbutton-padding-l)
)}:host([size=xl]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-xl-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-xl-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-xl-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-xl-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-xl-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-xl-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-xl-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-xl-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-xl-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-xl-fill-size,var(--spectrum-alias-infieldbutton-full-height-xl)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-xl-padding,var(--spectrum-alias-infieldbutton-padding-xl)
)}.fill{align-items:center;background-color:var(
--spectrum-clearbutton-fill-background-color
);border-radius:100%;display:flex;height:var(--spectrum-clearbutton-fill-size);justify-content:center;width:var(--spectrum-clearbutton-fill-size)}:host{color:var(
--spectrum-clearbutton-m-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
)}:host(:hover){color:var(
--spectrum-clearbutton-fill-uiicon-color
)}:host([active]){color:var(
--spectrum-clearbutton-fill-uiicon-color-down
)}:host(.focus-visible){color:var(
--spectrum-clearbutton-fill-uiicon-color-key-focus
)}:host(.focus-visible){color:var(
--spectrum-clearbutton-fill-uiicon-color-key-focus
)}:host(:focus-visible){color:var(
--spectrum-clearbutton-fill-uiicon-color-key-focus
)}:host([disabled]){color:var(
--spectrum-clearbutton-fill-uiicon-color-disabled
)}:host(:hover) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-hover
)}:host([active]) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-down
)}:host(.focus-visible) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-key-focus
)}:host(.focus-visible) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-key-focus
)}:host(:focus-visible) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-key-focus
)}:host([disabled]) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-disabled
)}:host([variant=overBackground]){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][disabled]),:host([variant=overBackground][disabled]) .fill{background-color:var(
--spectrum-alias-icon-color-overbackground-disabled,hsla(0,0%,100%,.2)
)}:host([variant=overBackground]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);box-shadow:none;color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);box-shadow:none;color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);box-shadow:none;color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-down,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][disabled]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host>.icon{margin:0}}@media (forced-colors:active){:host{--spectrum-alias-icon-color-overbackground:ButtonText;--spectrum-alias-icon-color-overbackground-disabled:GrayText;--spectrum-button-m-primary-outline-white-texticon-background-color:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-border-color:ButtonText;--spectrum-button-m-primary-outline-white-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-outline-white-texticon-border-color-down:ButtonText;--spectrum-button-m-primary-outline-white-texticon-border-color-hover:ButtonText;--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus:ButtonText;--spectrum-button-m-primary-outline-white-texticon-text-color:ButtonText;--spectrum-button-m-primary-outline-white-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-outline-white-texticon-text-color-down:Highlight;--spectrum-button-m-primary-outline-white-texticon-text-color-hover:Highlight;--spectrum-clearbutton-fill-background-color:ButtonFace;--spectrum-clearbutton-fill-background-color-disabled:ButtonFace;--spectrum-clearbutton-fill-background-color-down:ButtonFace;--spectrum-clearbutton-fill-background-color-hover:ButtonFace;--spectrum-clearbutton-fill-background-color-key-focus:ButtonFace;--spectrum-clearbutton-fill-uiicon-color:ButtonText;--spectrum-clearbutton-fill-uiicon-color-disabled:GrayText;--spectrum-clearbutton-fill-uiicon-color-down:Highlight;--spectrum-clearbutton-fill-uiicon-color-key-focus:Highlight;--spectrum-clearbutton-m-fill-uiicon-color:ButtonText}:host(:hover){color:var(--spectrum-clearbutton-fill-uiicon-color-key-focus)}:host([disabled]){color:var(--spectrum-clearbutton-fill-uiicon-color-disabled)}}
`,n=(r(109),r(77)),u=(r(110),r(111),r(112),r(113),r(114),r(78),r(115),Object.defineProperty),p=Object.getOwnPropertyDescriptor;const m=new Set;new MutationObserver((()=>{const e="rtl"===document.documentElement.dir?document.documentElement.dir:"ltr";m.forEach((t=>{t.setAttribute("dir",e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const d=e=>"undefined"!=typeof e.startManagingContentDirection||"SP-THEME"===e.tagName;function g(e){class t extends e{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return"ltr"===this.dir}hasVisibleFocusInTree(){const e=this.getRootNode().activeElement;if(!e)return!1;try{return e.matches(":focus-visible")||e.matches(".focus-visible")}catch(x){return e.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!d(e);)e=e.assignedSlot||e.parentNode||e.host;const t=this.dir;if(this.dir="rtl"===e.dir?e.dir:this.dir||"ltr",t===this.dir&&this.setAttribute("dir",this.dir),e===document.documentElement)m.add(this);else{const{localName:t}=e;t.search("-")>-1&&!customElements.get(t)?customElements.whenDefined(t).then((()=>{e.startManagingContentDirection(this)})):e.startManagingContentDirection(this)}this._dirParent=e}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?m.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return((e,t,r,a)=>{for(var s,o=a>1?void 0:a?p(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);a&&o&&u(t,r,o)})([Object(n.a)({reflect:!0})],t.prototype,"dir",2),t}class b extends(g(c.a)){}var h=c.b`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{color:inherit;height:100%;vertical-align:top;width:100%}@media (forced-colors:active){::slotted(*),img,svg{forced-color-adjust:auto}}
`,v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,x=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?f(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&v(t,r,o),o};class y extends b{static get styles(){return[h]}render(){return c.c`
            <slot></slot>
        `}}let w;x([Object(n.a)()],y.prototype,"label",2),x([Object(n.a)({reflect:!0})],y.prototype,"size",2);const z=function(e,...t){return w?w(e,...t):t.reduce(((t,r,a)=>t+r+e[a+1]),e[0])},k=e=>{w=e};customElements.define("sp-icon-cross75",class extends y{render(){return k(c.c),z`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`}});customElements.define("sp-icon-cross100",class extends y{render(){return k(c.c),z`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`}});customElements.define("sp-icon-cross200",class extends y{render(){return k(c.c),z`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`}});customElements.define("sp-icon-cross300",class extends y{render(){return k(c.c),z`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`}});var T=c.b`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(
--spectrum-alias-ui-icon-cross-size-75
)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(
--spectrum-alias-ui-icon-cross-size-100
)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(
--spectrum-alias-ui-icon-cross-size-200
)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(
--spectrum-alias-ui-icon-cross-size-300
)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(
--spectrum-alias-ui-icon-cross-size-400
)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(
--spectrum-alias-ui-icon-cross-size-500
)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(
--spectrum-alias-ui-icon-cross-size-600
)}
`,j=Object.defineProperty,C=Object.getOwnPropertyDescriptor;const S={s:()=>a.c`
        <sp-icon-cross75
            slot="icon"
            class="icon spectrum-UIIcon-Cross75"
        ></sp-icon-cross75>
    `,m:()=>a.c`
        <sp-icon-cross100
            slot="icon"
            class="icon spectrum-UIIcon-Cross100"
        ></sp-icon-cross100>
    `,l:()=>a.c`
        <sp-icon-cross200
            slot="icon"
            class="icon spectrum-UIIcon-Cross200"
        ></sp-icon-cross200>
    `,xl:()=>a.c`
        <sp-icon-cross300
            slot="icon"
            class="icon spectrum-UIIcon-Cross300"
        ></sp-icon-cross300>
    `};class O extends(Object(s.a)(l.a)){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,i,T]}get buttonContent(){return[S[this.size]()]}render(){return a.c`
            <div class="fill">${super.render()}</div>
        `}}((e,t,r,a)=>{for(var s,o=a>1?void 0:a?C(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);a&&o&&j(t,r,o)})([Object(o.a)({reflect:!0})],O.prototype,"variant",2),customElements.define("sp-clear-button",O)},282:function(e,t,r){"use strict";var a=r(3),s=r(188),o=r(0),l=r(37),c=r(15),i=r(5),n=r(2),u=r(4),p=r(23),m=r(7),d=(r(19),r(41)),g=r(14),b=(r(24),o.d`
            :host {
  display: inline-flex;
  height: 24px;
}

svg {
  width: 24px;
}

slot {
  color: var(--spectrum-global-color-gray-900);
  display: inline-block;
  font-size: var(--spectrum-alias-font-size-default,var(--spectrum-global-dimension-font-size-100));
  margin-left: 10px;
  padding-top: 3px;
  font-weight: 600px;
  text-decoration: none;
}

          `);let h=class extends u.a{static get styles(){return b}render(){return o.a`${Object(d.a)('<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: #000b1d;\n      }\n\n      .cls-2 {\n        fill: #fff;\n      }\n    </style>\n  </defs>\n  <g>\n    <rect class="cls-1" y="0.5" width="32" height="31" rx="5.64848"/>\n    <path class="cls-2" d="M17.63921,13.46488c-.74711,2.504-1.37579,4.91772-2.12289,7.28029a12.90012,12.90012,0,0,1-1.47406,3.41265,4.1921,4.1921,0,0,1-3.31166,1.777c-1.02992,0-2.03957-.48468-2.03957-1.5549A1.40176,1.40176,0,0,1,9.92281,23.0876a.61424.61424,0,0,1,.56539.32311c.50483.90867.98951,1.43364,1.21164,1.43364s.40383-.30284.76725-1.61534l2.65045-9.76247-1.90691-.00211a.91358.91358,0,0,1,.30208-1.03289h1.89816a17.53964,17.53964,0,0,1,1.3978-3.43866,5.04817,5.04817,0,0,1,4.36161-2.928c1.51448,0,2.14044.72695,2.14044,1.65589A1.52543,1.52543,0,0,1,22.01837,9.215c-.323,0-.48456-.24228-.58555-.58555-.34326-1.29235-.78752-1.676-1.05007-1.676s-.66638.48456-1.11052,1.49421a25.74394,25.74394,0,0,0-1.343,3.99058l2.30933-.003a.86867.86867,0,0,1-.31678,1.02946Z"/>\n  </g>\n</svg>')}<slot></slot>`}};h=Object(a.a)([Object(g.a)("adobe-fonts-logo")],h);const v="?as_channel=adobe_com&as_campclass=brand&as_camptype=app&as_source=Fonts&as_content=navbar&as_campaign=Marketplace";var f=[{url:"https://stock.adobe.com/photos"+v,label:"side-navigation.stock-links.photos-label"},{url:"https://stock.adobe.com/illustrations"+v,label:"side-navigation.stock-links.illustrations-label"},{url:"https://stock.adobe.com/vectors"+v,label:"side-navigation.stock-links.vectors-label"},{url:"https://stock.adobe.com/video"+v,label:"side-navigation.stock-links.videos-label"},{url:"https://stock.adobe.com/audio"+v,label:"side-navigation.stock-links.audio-label"},{url:"https://stock.adobe.com/templates"+v,label:"side-navigation.stock-links.templates-label"},{url:"https://exchange.adobe.com/creativecloud.html"+v,label:"side-navigation.stock-links.plugins-label"},{url:"https://stock.adobe.com/3d-assets"+v,label:"side-navigation.stock-links.3d-label"}],x=(r(129),r(26),o.d`
:host{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
)}:host{list-style-type:none;margin:0;padding:0}:host{--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,var(--spectrum-global-font-weight-regular)
);display:block;width:240px}:host([variant=multilevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-multilevel-main-item-font-weight,var(--spectrum-global-font-weight-bold)
)}
`),y=o.d`
#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host{list-style-type:none;margin-bottom:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-sidenav-item-gap,var(--spectrum-global-dimension-size-50)
)}#item-link{align-items:center;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;cursor:pointer;display:inline-flex;font-size:var(
--spectrum-sidenav-item-text-size,var(--spectrum-alias-font-size-default)
);font-style:normal;font-weight:var(
--spectrum-sidenav-item-text-font-weight,var(--spectrum-global-font-weight-regular)
);-webkit-hyphens:auto;hyphens:auto;justify-content:left;min-height:var(
--spectrum-sidenav-item-height,var(--spectrum-alias-single-line-height)
);padding:var(--spectrum-sidenav-item-padding-y) var(
--spectrum-sidenav-item-padding-x,var(--spectrum-global-dimension-size-150)
);position:relative;text-decoration:none;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out;width:100%;word-break:break-word}#item-link:focus{outline:none}#item-link:before{border:var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) solid transparent;border-radius:var(
--spectrum-sidenav-item-border-radius,var(--spectrum-alias-border-radius-regular)
);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #item-link ::slotted([slot=icon]){margin-right:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) #item-link ::slotted([slot=icon]){margin-left:var(
--spectrum-sidenav-icon-gap,var(--spectrum-global-dimension-size-100)
)}#item-link ::slotted([slot=icon]){flex-shrink:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-right:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-left:0}:host([dir=ltr]) .spectrum-SideNav-heading{margin-left:0}:host([dir=rtl]) .spectrum-SideNav-heading{margin-right:0}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #item-link{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #item-link{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) .spectrum-SideNav--multiLevel #list #list #item-link{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) .spectrum-SideNav--multiLevel #list #list #item-link{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-margin-left,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([selected])>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-selected,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-selected,var(--spectrum-alias-text-color-hover)
)}.is-active>#item-link{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}:host([disabled]) #item-link{background-color:var(
--spectrum-sidenav-item-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);cursor:default;pointer-events:none}#item-link{background-color:var(
--spectrum-sidenav-item-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-sidenav-item-text-color,var(--spectrum-alias-text-color)
)}#item-link:hover{background-color:var(
--spectrum-sidenav-item-background-color-hover,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-hover,var(--spectrum-alias-text-color-hover)
)}#item-link:active{background-color:var(
--spectrum-sidenav-item-background-color-down,var(--spectrum-alias-highlight-hover)
)}#item-link.focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link:focus-visible{background-color:var(
--spectrum-sidenav-item-background-color-key-focus,var(--spectrum-alias-highlight-hover)
);color:var(
--spectrum-sidenav-item-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}#item-link.focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#item-link:focus-visible:before{border-color:var(
--spectrum-sidenav-item-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}@media (forced-colors:active){:host{--spectrum-sidenav-item-text-color-selected:HighlightText;--spectrum-sidenav-item-background-color-selected:Highlight;--spectrum-sidenav-item-background-color-disabled:ButtonFace;--spectrum-sidenav-item-text-color-disabled:GrayText;--spectrum-sidenav-item-background-color:ButtonFace;--spectrum-sidenav-item-text-color:ButtonText;--spectrum-sidenav-item-background-color-hover:ButtonFace;--spectrum-sidenav-item-text-color-hover:ButtonText;--spectrum-sidenav-item-background-color-down:ButtonFace;--spectrum-sidenav-item-background-color-key-focus:ButtonFace;--spectrum-sidenav-item-text-color-key-focus:ButtonText;--spectrum-sidenav-item-border-color-key-focus:ButtonText;forced-color-adjust:none}}:host{display:block}:host([disabled]){pointer-events:none}:host([multiLevel]){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,700
)}::slotted(sp-sidenav-item:not([multiLevel])){--spectrum-web-component-sidenav-font-weight:var(
--spectrum-sidenav-item-font-weight,400
)}#item-link{font-weight:var(--spectrum-web-component-sidenav-font-weight);justify-content:start}:host([dir=ltr]) #item-link[data-level="1"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=ltr]) #item-link[data-level="2"]{padding-left:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="1"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level1,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}:host([dir=rtl]) #item-link[data-level="2"]{padding-right:calc(var(
--spectrum-sidenav-multilevel-item-indentation-level2,
var(--spectrum-global-dimension-size-300)
) + var(
--spectrum-sidenav-item-padding-x,
var(--spectrum-global-dimension-size-150)
))}a ::slotted(sp-sidenav-item){display:none}
`,w=Object.defineProperty,z=Object.getOwnPropertyDescriptor,k=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?z(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&w(t,r,o),o};const T=class extends(Object(l.a)(c.a)){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[y]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let e=0,t=this.parentElement;for(;t instanceof T;)e++,t=t.parentElement;return e}handleSideNavSelect(e){this.selected=e.target===this}handleClick(e){!this.href&&e&&e.preventDefault(),this.disabled||(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(e){const t=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:{value:e}});this.dispatchEvent(t)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(e){this.hasAttribute("slot")||(this.slot="descendant"),super.update(e)}render(){return o.a`
            <a
                href=${this.href||"#"}
                target=${Object(i.a)(this.target)}
                download=${Object(i.a)(this.download)}
                rel=${Object(i.a)(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${Object(i.a)(this.selected&&this.href?"page":void 0)}
            >
                <slot name="icon"></slot>
                ${this.label}
                <slot></slot>
            </a>
            ${this.expanded?o.a`
                      <slot name="descendant"></slot>
                  `:o.a``}
        `}updated(e){this.hasChildren&&this.expanded&&!this.selected&&(this.focusElement.tabIndex=-1),super.updated(e)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){const e=this.parentSideNav;e&&(await e.updateComplete,e.startTrackingSelectionForItem(this),this.selected=null!=this.value&&this.value===e.value)}stopTrackingSelection(){const e=this.parentSideNav;e&&e.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}};let j=T;k([Object(n.b)()],j.prototype,"value",2),k([Object(n.b)({type:Boolean,reflect:!0})],j.prototype,"selected",2),k([Object(n.b)({type:Boolean,reflect:!0})],j.prototype,"expanded",2);var C=o.d`
#list{--spectrum-sidenav-item-padding-y:var(
--spectrum-global-dimension-size-65
);list-style-type:none;margin:0;padding:0}:host([dir=ltr]) #heading{margin-right:0}:host([dir=rtl]) #heading{margin-left:0}:host([dir=ltr]) #heading{margin-left:0}:host([dir=rtl]) #heading{margin-right:0}#heading{border-radius:var(
--spectrum-sidenav-heading-border-radius,var(--spectrum-alias-border-radius-regular)
);color:var(
--spectrum-sidenav-heading-text-color,var(--spectrum-global-color-gray-700)
);font-size:var(
--spectrum-sidenav-heading-text-size,var(--spectrum-global-dimension-font-size-50)
);font-style:normal;font-weight:var(
--spectrum-sidenav-heading-text-font-weight,var(--spectrum-global-font-weight-medium)
);height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);letter-spacing:var(
--spectrum-sidenav-heading-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);line-height:var(
--spectrum-sidenav-heading-height,var(--spectrum-alias-single-line-height)
);margin-bottom:var(
--spectrum-sidenav-heading-gap-bottom,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-sidenav-heading-gap-top,var(--spectrum-global-dimension-size-200)
);padding-bottom:0;padding-left:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-right:var(
--spectrum-sidenav-heading-padding-x,var(--spectrum-global-dimension-size-150)
);padding-top:0;text-transform:uppercase}:host{display:block}
`,S=Object.defineProperty;Object.getOwnPropertyDescriptor;class O extends u.a{constructor(){super(...arguments),this.label=""}static get styles(){return[y,C]}update(e){this.hasAttribute("slot")||(this.slot="descendant"),super.update(e)}render(){return o.a`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading">
                <slot name="descendant"></slot>
            </div>
        `}}((e,t,r,a)=>{for(var s,o=void 0,l=e.length-1;l>=0;l--)(s=e[l])&&(o=s(t,r,o)||o);o&&S(t,r,o)})([Object(n.b)({reflect:!0})],O.prototype,"label");var L=Object.defineProperty,A=Object.getOwnPropertyDescriptor,H=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?A(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&L(t,r,o),o};class B extends c.a{constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new s.a(this,{focusInIndex:e=>e.findIndex((e=>this.value?!e.disabled&&!this.isDisabledChild(e)&&e.value===this.value:!e.disabled&&!this.isDisabledChild(e))),direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:e=>!e.disabled&&!this.isDisabledChild(e)}),this.manageTabIndex=!1,this.value=void 0}static get styles(){return[x]}startTrackingSelectionForItem(e){this.items.add(e),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(e){this.items.delete(e),this.rovingTabindexController.clearElementCache()}handleSelect(e){if(e.stopPropagation(),this.value===e.detail.value)return;const t=this.value;this.value=e.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach((t=>t.handleSideNavSelect(e))):(this.value=t,e.target.selected=!1,e.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(e){if(e.disabled)return!0;let t=e.parentElement;for(;t instanceof O||!t.disabled&&t instanceof j&&t.expanded;)t=t.parentElement;return t!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return o.a`
            <nav @sidenav-select=${this.handleSelect}>
                <slot
                    name="descendant"
                    @slotchange=${this.handleSlotchange}
                ></slot>
            </nav>
        `}willUpdate(){if(!this.hasUpdated){const e=this.querySelector("[selected]");e&&(this.value=e.value)}}updated(e){super.updated(e),e.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}}H([Object(n.b)({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],B.prototype,"manageTabIndex",2),H([Object(n.b)({reflect:!0})],B.prototype,"value",2),customElements.define("sp-sidenav",B),customElements.define("sp-sidenav-item",j);var D={"side-navigation.site.name":"Adobe Fonts","side-navigation.icons.menu-name":"Adobe Stock Navigation","side-navigation.icons.more-menu-name":"More","side-navigation.stock-links.illustrations-label":"Illustrations","side-navigation.stock-links.templates-label":"Templates","side-navigation.stock-links.audio-label":"Audio","side-navigation.stock-links.photos-label":"Photos","side-navigation.stock-links.vectors-label":"Vectors","side-navigation.stock-links.videos-label":"Videos","side-navigation.stock-links.plugins-label":"Plugins","side-navigation.stock-links.3d-label":"3D"},M=o.d`
            :host {
  background: var(--spectrum-global-color-static-white);
  display: block;
  height: 100%;
  padding: 20px;
}

.home-link {
  text-decoration: none;
}

          `;let $=class extends(Object(p.a)(Object(m.a)(u.a,D))){static get styles(){return M}render(){return this.enableClickTracking(),o.a`<a class="home-link" href="/"><adobe-fonts-logo>Adobe Fonts</adobe-fonts-logo></a><sp-sidenav>${this._renderLinks()}</sp-sidenav>`}_renderLinks(){return f.map((({label:e,url:t})=>o.a`<sp-sidenav-item href="${t}">${this.t(e)}</sp-sidenav-item>`))}};$=Object(a.a)([Object(g.a)("af-side-navigation")],$)},370:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=(r(48),r(23)),i=(r(128),s.d`
            .browse-filter-title, .browse-filter-description {
  margin: 4px 0;
}

.browse-filter-image {
  width: 100%;
}

          `);let n=class extends(Object(c.a)(s.e)){static get styles(){return i}connectedCallback(){super.connectedCallback(),this.enableClickTracking()}render(){if(this.src)return s.a`<div><a href="${this.href}" aria-label="${this.title}"><img class="browse-filter-image" alt="${this.title}" src="${this.src}"></a><h4 class="browse-filter-title">${this.title}</h4><p class="browse-filter-description"><slot name="description">${this.description}</slot></p></div>`}};Object(a.a)([Object(l.a)({type:String})],n.prototype,"description",void 0),Object(a.a)([Object(l.a)({type:String})],n.prototype,"href",void 0),Object(a.a)([Object(l.a)({type:String})],n.prototype,"src",void 0),Object(a.a)([Object(l.a)({type:String})],n.prototype,"title",void 0),n=Object(a.a)([Object(o.a)("af-browse-filter-card")],n)},371:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(200),l=r(145),c=r(83),i=r(2),n=r(14),u=(r(28),r(8),r(25),r(43),r(48),r(16),r(9),r(4),r(72),r(24),r(41),r(122),r(96),r(116),r(91),r(67),r(7),r(26),r(106),r(23),r(74),r(11),r(20),r(140),r(69),r(15),r(13),r(174),r(103),r(22),r(17),s.d`
            :host {
  --specimen-card-height: 400px;

  align-items: center;
  display: flex;
  width: 100%;
}

af-ccx-specimen-card {
  flex-shrink: 0;
  height: var(--specimen-card-height);
  width: auto;
  margin-right: 20px;
}

af-carousel.arrow {
  --af-carousel-previous-button-right: calc(50vw);
  --af-carousel-next-button-right: calc(50vw - 30px);
  --af-carousel-previous-button-left: initial;
  --af-carousel-button-top: -32px;
}

@media screen and (min-width: 768px) {
  af-carousel.arrow {
    --af-carousel-previous-button-right: 20px;
    --af-carousel-next-button-right: -10px;
  }
}

.empty-card {
  animation: loading-animation 1s linear infinite;
  border-radius: 8px;
  margin-right: 20px;
  flex-shrink: 0;
  height: var(--specimen-card-height);
}

.empty-card {
  width: 250px;
}

.empty-card:nth-child(2n) {
  width: 100px;
}

.empty-card:nth-child(3n) {
  width: 150px;
}

.empty-card:nth-child(4n) {
  width: 200px;
}

.empty-card:nth-child(5n) {
  width: 350px;
}


@keyframes loading-animation {
  from {
    background: linear-gradient(to left, var(--spectrum-global-color-static-white), var(--spectrum-global-color-static-gray-300));
  }
  50% {
    background: linear-gradient(to left, var(--spectrum-global-color-static-white), var(--spectrum-global-color-static-gray-300), var(--spectrum-global-color-static-white));
  }
  to {
    background: linear-gradient(to left, var(--spectrum-global-color-static-gray-300), var(--spectrum-global-color-static-white));
  }
}

          `);let p=class extends s.e{constructor(){super(...arguments),this.activeIds=[],this.items=[],this.buttonType=o.a.Rounded,this.showShadow=!1,this.imageMode=!1}static get styles(){return u}render(){const e={arrow:this.buttonType==o.a.Arrow};return s.a`<af-carousel class="${Object(c.a)(e)}" buttonType="${this.buttonType}" ?showShadow="${this.showShadow}">${this._content()}</af-carousel>`}_content(){return 0===this.items.length?s.a`${[...Array(20)].map((()=>s.a`<div class="empty-card"></div>`))}`:s.a`${this.items.map((e=>s.a`<af-ccx-specimen-card .templateLink="${e.templateLink}" .tabindex="0" .fontsInfo="${e.fonts}" .templateDimensions="${e.templateDimensions}" ?activated="${this._isItemActivated(e)}" ?showPremium="${e.showPremium}" ?imageMode="${this.imageMode}" ?showActivationButton="${e.showActivationButton}" fitMode="${l.a.ConstantHeight}"><img src="${e.src}"></af-ccx-specimen-card>`))}`}_isItemActivated(e){for(let t=0;t<e.fonts.length;t++)if(!this.activeIds.includes(e.fonts[t].id))return!1;return!0}};Object(a.a)([Object(i.b)()],p.prototype,"activeIds",void 0),Object(a.a)([Object(i.b)()],p.prototype,"items",void 0),Object(a.a)([Object(i.b)()],p.prototype,"buttonType",void 0),Object(a.a)([Object(i.b)({type:Boolean})],p.prototype,"showShadow",void 0),Object(a.a)([Object(i.b)({type:Boolean})],p.prototype,"imageMode",void 0),p=Object(a.a)([Object(n.a)("af-ccx-templates-carousel")],p)},372:function(e,t,r){"use strict";var a=r(3),s=(r(140),r(116)),o=r(192),l=r(103),c=(r(19),r(0)),i=r(7),n=r(23),u=r(4),p=r(5),m=r(2),d=r(14),g=(r(69),r(15),r(13),r(25),r(43),r(48),r(37),r(26),c.d`
            :host {
  box-shadow: none;
  border: 1px solid var(--spectrum-global-color-gray-300);
  background: var(--spectrum-global-color-gray-75);

}

:host(:hover),
:host(:focus) {
  border-color: var(
    --spectrum-card-border-color-key-focus,
    var(--spectrum-alias-border-color-focus));

  box-shadow: 0 0 0 2px var(
    --spectrum-card-border-color-key-focus,
    var(--spectrum-alias-border-color-focus));
}

.anchor {
  visibility: visible;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.actions {
  z-index: 2;
}

#footer {
  height: 60px;
  border-top:  1px solid var(--spectrum-global-color-gray-300);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 15px;
  /*Need to hardcode the value since we are using lightest
  theme on tk/tk and this color isn't present*/
  background-color: #FAFAFA;
}

#description {
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
}

#title {
  margin-block-start: 0px;
  margin-block-end: 0px;
  color: var(--spectrum-global-color-gray-600);
  font-weight: 600;
}

#subtitle {
  color: var(--spectrum-global-color-gray-600);
}

          `),b={"specimen-card.view-family":"View family"};let h=class extends(Object(n.a)(Object(i.a)(Object(o.a)(u.a),b))){constructor(){super(...arguments),this.activated=!1,this.footer=!1,this._openFDPAnalytics=e=>{this.sendAnalyticsEvent("specimen-fdp-open",{title:e})}}static get styles(){return[l.a,g]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.title),this.addEventListener("click",(()=>this._openFDPAnalytics(this.title)))}render(){return this.renderLinkable(c.a`<div class="specimen" @click="${this._openFDPAnalytics}"><slot></slot>${this._footer()}</div>${this.renderOverlay()}`)}handleActivationSwitchChange(){this.dispatchEvent(new s.a({isActivated:!this.activated}))}stopKeypressPropagation(e){e.stopPropagation()}handleEnterKeydown(e){if(!e.target)return;e.stopPropagation();const{code:t}=e;"Enter"===t&&e.target.click()}renderActions(){return c.a`<div class="actions"><sp-switch emphasized class="activation-switch" checked="${Object(p.a)(this.activated||void 0)}" @change="${this.handleActivationSwitchChange}" @keydown="${this.handleEnterKeydown}" @click="${this.stopKeypressPropagation}"></sp-switch></div>`}renderOverlay(){if(!this.footer)return c.a`<div class="overlay">${this.renderActions()}<div class="title">${this.title}</div><div class="subtitle">${this.subtitle}</div></div>`}_footer(){if(this.footer)return c.a`<div id="footer"><div id="description"><div id="title">${this.title}</div><div id="subtitle">${this.subtitle}</div></div><div id="actions"><div id="subtitle">${this.t("specimen-card.view-family")}</div></div></div>`}};Object(a.a)([Object(m.b)({type:Boolean})],h.prototype,"activated",void 0),Object(a.a)([Object(m.b)({type:String})],h.prototype,"title",void 0),Object(a.a)([Object(m.b)({type:String})],h.prototype,"subtitle",void 0),Object(a.a)([Object(m.b)({type:Boolean})],h.prototype,"footer",void 0),h=Object(a.a)([Object(d.a)("af-specimen-card")],h)},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(136);const s=["spectrum","express"],o=["medium","large","medium-express","large-express"],l=["light","lightest","dark","darkest","light-express","lightest-express","dark-express","darkest-express"],c=class extends HTMLElement{constructor(){super(),this._dir="",this._theme="spectrum",this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const e=document.importNode(c.template.content,!0);this.shadowRoot.appendChild(e),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","theme","lang","dir"]}set dir(e){if(e===this.dir)return;this.setAttribute("dir",e),this._dir=e;const t="rtl"===e?e:"ltr";this.trackedChildren.forEach((e=>{e.setAttribute("dir",t)}))}get dir(){return this._dir}attributeChangedCallback(e,t,r){t!==r&&("color"===e?this.color=r:"scale"===e?this.scale=r:"lang"===e&&r?(this.lang=r,this._provideContext()):"theme"===e?this.theme=r:"dir"===e&&(this.dir=r))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get theme(){const e=c.themeFragmentsByKind.get("theme"),{name:t}=e&&e.get("default")||{};return this._theme||t||""}set theme(e){if(e===this._theme)return;const t=e&&s.includes(e)?e:this.theme;t!==this._theme&&(this._theme=t,this.requestUpdate()),t?this.setAttribute("theme",t):this.removeAttribute("theme")}get color(){const e=c.themeFragmentsByKind.get("color"),{name:t}=e&&e.get("default")||{};return this._color||t||""}set color(e){if(e===this._color)return;const t=e&&l.includes(e)?e:this.color;t!==this._color&&(this._color=t,this.requestUpdate()),t?this.setAttribute("color",t):this.removeAttribute("color")}get scale(){const e=c.themeFragmentsByKind.get("scale"),{name:t}=e&&e.get("default")||{};return this._scale||t||""}set scale(e){if(e===this._scale)return;const t=e&&o.includes(e)?e:this.scale;t!==this._scale&&(this._scale=t,this.requestUpdate()),t?this.setAttribute("scale",t):this.removeAttribute("scale")}get styles(){const e=[...c.themeFragmentsByKind.keys()],t=(e,t,r)=>{const a=r&&"theme"!==r&&"express"===this.theme?e.get(`${t}-express`):e.get(t),s="spectrum"===t||!r||this.hasAttribute(r);if(a&&s)return a.styles};return[...e.reduce(((e,r)=>{const a=c.themeFragmentsByKind.get(r);let s;if("app"===r||"core"===r)s=t(a,r);else{const{[r]:e}=this;s=t(a,e,r)}return s&&e.push(s),e}),[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise((e=>{this.__resolve=e}))}onQueryTheme(e){if(e.defaultPrevented)return;e.preventDefault();const{detail:t}=e;t.color=this.color||void 0,t.scale=this.scale||void 0,t.lang=this.lang||document.documentElement.lang||navigator.language,t.theme=this.theme||void 0}connectedCallback(){if(this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),c.instances.add(this),!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!(e instanceof c);)e=e.assignedSlot||e.parentNode||e.host;this.dir="rtl"===e.dir?e.dir:"ltr"}}disconnectedCallback(){c.instances.delete(this)}startManagingContentDirection(e){this.trackedChildren.add(e)}stopManagingContentDirection(e){this.trackedChildren.delete(e)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const e=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const e=[];for(const[t,r]of c.themeFragmentsByKind)for(const[a,{styles:s}]of r){if("default"===a)continue;let r=s.cssText;c.defaultFragments.has(a)||(r=r.replace(":host",`:host([${t}='${a}'])`)),e.push(r)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e,this.localName),window.ShadyCSS.prepareTemplate(c.template,this.localName)}else if(a.d){const t=[];for(const r of e)t.push(r.styleSheet);this.shadowRoot.adoptedStyleSheets=t}else this.shadowRoot.querySelectorAll("style").forEach((e=>e.remove())),e.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.shadowRoot.appendChild(t)}))}static registerThemeFragment(e,t,r){const a=c.themeFragmentsByKind.get(t)||new Map;0===a.size&&(c.themeFragmentsByKind.set(t,a),a.set("default",{name:e,styles:r}),c.defaultFragments.add(e)),a.set(e,{name:e,styles:r}),c.instances.forEach((e=>e.shouldAdoptStyles()))}_provideContext(){this._contextConsumers.forEach((([e,t])=>e(this.lang,t)))}_handleContextPresence(e){const t=e.composedPath()[0];if(this._contextConsumers.has(t))return;this._contextConsumers.set(t,[e.detail.callback,()=>this._contextConsumers.delete(t)]);const[r,a]=this._contextConsumers.get(t)||[];r&&a&&r(this.lang||document.documentElement.lang||navigator.language,a)}};let i=c;i.themeFragmentsByKind=new Map,i.defaultFragments=new Set(["spectrum"]),i.instances=new Set},761:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=r(25),i=(r(48),r(128),r(7)),n=r(192),u=r(103),p=r(15),m=(r(43),r(26),r(37),r(2),r(5),r(4),{"tag-card.view-tag":"View tag"}),d=s.d`
            :host {
  --card-actions-padding: 10px;
  --card-overlay-background: rgba(0, 0, 0, 0.6);
  --tag-card-font-color: var(--spectrum-global-color-static-gray-50);
  --tag-card-font-size: 40px;
  --tag-card-background: linear-gradient(90deg, #085078 0%, #85d8ce 100%);

  background: var(--tag-card-background);
  height: 100px;
}

::slotted(*) {
  color: var(--tag-card-font-color);
  font-size: var(--tag-card-font-size);
}

.browse-fonts-button {
  --spectrum-button-primary-m-border-color: var(--spectrum-global-color-static-gray-100);
  --spectrum-button-primary-m-border-color-hover: var(--spectrum-global-color-static-gray-50);
  --spectrum-button-primary-m-text-color: var(--spectrum-global-color-static-gray-100)
}

.browse-fonts-button:hover {
  color: var(--spectrum-global-color-static-gray-900);
}

.specimen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

          `;let g=class extends(Object(i.a)(Object(n.a)(p.a),m)){static get styles(){return[u.a,d]}get focusElement(){return this.browseFontsButton}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",this.tag),this.setAttribute("title",this.tag)}render(){return this.renderLinkable(s.a`<div class="specimen"><slot></slot></div>${this.renderOverlay()}`)}renderActions(){return s.a`<div class="actions"><sp-button class="browse-fonts-button" variant="overBackground">${this.t("tag-card.view-tag")}</sp-button></div>`}renderOverlay(){return s.a`<div class="overlay">${this.renderActions()}</div>`}};Object(a.a)([Object(c.a)(".browse-fonts-button")],g.prototype,"browseFontsButton",void 0),Object(a.a)([Object(l.a)({type:String})],g.prototype,"tag",void 0),g=Object(a.a)([Object(o.a)("af-tag-card")],g)},762:function(e,t,r){"use strict";var a=r(3),s=r(7),o=(r(19),r(0)),l=r(265),c=r(16),i=r(9),n=(r(172),r(173),r(4)),u=r(2),p=r(14),m=(r(26),r(63),r(70),r(22),r(13),{"web-project-editor-style-selector.axes-ranges":"Axes Ranges","web-project-editor-style-selector.axes-settings":"Axes Settings","web-project-editor-style-selector.axes-tooltip":"Each axis in a variable font has a range of values. Add any value within the range to your CSS to customize the font\u2019s appearance.","web-project-editor-style-selector.axis":"Axis","web-project-editor-style-selector.copy-css":"Copy CSS","web-project-editor-style-selector.instance":"Instance","web-project-editor-style-selector.instances-tooltip":"When pasting CSS, you can use the default setting or select a present instance.","web-project-editor-style-selector.preview":"Preview","web-project-editor-style-selector.range":"Range","web-project-editor-style-selector.remove":"Remove","web-project-editor-style-selector.tag":"Tag","web-project-editor-style-selector.variable-font-instances":"Variable Font Instances"}),d=o.d`
            .web-project-editor-table-wrapper {
  max-height: 220px;
  overflow-y: scroll;
}

.table-heading-wrapper {
  display: inline;
}

.table-heading, .info-icon {
  display: inline-block;
}

.table-heading {
  margin-bottom: 10px;
}

.info-icon {
  color: var(--spectrum-global-color-gray-700);
  left: 4px;
  position: relative;
  top: 4px;
}


.axis-table-head-cell {
  text-align: unset;
}

.coordinates-accordion {
  --spectrum-accordion-border-color: var(--spectrum-global-color-static-white);
  --spectrum-accordion-item-background-color-hover: var(--spectrum-global-color-static-white);
  margin-left: -18px;
  margin-top: -12px;
  width: 20vw;
}

.coordinate {
  font-family: adobe-clean, "Source Sans Pro", sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}

.coordinate-header {
  background: none;
  border: none;
  color: var(--spectrum-global-color-gray-700);
  display: flex;
  justify-content: start;
  margin-left: -6px;
}

.coordinate-item {
  margin-left: 22px;
}

.coordinate-item:first-of-type {
  margin-top: -12px;
}

.sample-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 40vw;
}

@media screen and (min-width: 768px) {
  .sample-text {
    width: 15vw;
  }
}

          `;customElements.define("sp-icon-info",class extends i.a{render(){return Object(c.a)(o.a),(({width:e=24,height:t=24,hidden:r=!1,title:a="Info"}={})=>c.b`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${r?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${a}"
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"
    />
  </svg>`)({hidden:!this.label,title:this.label})}});var g=o.d`
            .spectrum {
  font-family: var(--spectrum-alias-body-text-font-family, var(--spectrum-global-font-family-base));
  font-size: var(--spectrum-alias-font-size-default, var(--spectrum-global-dimension-font-size-100));
}

.spectrum:lang(ar) {
    font-family: var(--spectrum-alias-font-family-ar, var(--spectrum-global-font-font-family-ar));
  }

.spectrum:lang(he) {
    font-family: var(--spectrum-alias-font-family-he, var(--spectrum-global-font-font-family-he));
  }

.spectrum:lang(zh-Hans) {
    font-family: var(--spectrum-alias-font-family-zhhans, var(--spectrum-global-font-font-family-zhhans));
  }

.spectrum:lang(zh-Hant) {
    font-family: var(--spectrum-alias-font-family-zh, var(--spectrum-global-font-font-family-zh));
  }

.spectrum:lang(zh) {
    font-family: var(--spectrum-alias-font-family-zh, var(--spectrum-global-font-font-family-zh));
  }

.spectrum:lang(ko) {
    font-family: var(--spectrum-alias-font-family-ko, var(--spectrum-global-font-font-family-ko));
  }

.spectrum:lang(ja) {
    font-family: var(--spectrum-alias-font-family-ja, var(--spectrum-global-font-font-family-ja));
  }

.spectrum-Heading--sizeXXXL {
  

    font-size: var(--spectrum-heading-xxxl-text-size, var(--spectrum-alias-heading-xxxl-text-size));
  font-weight: var(--spectrum-heading-xxxl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-xxxl-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-xxxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-xxxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeXXL {
  

    font-size: var(--spectrum-heading-xxl-text-size, var(--spectrum-alias-heading-xxl-text-size));
  font-weight: var(--spectrum-heading-xxl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-xxl-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-xxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-xxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeXL {
  

    font-size: var(--spectrum-heading-xl-text-size, var(--spectrum-alias-heading-xl-text-size));
  font-weight: var(--spectrum-heading-xl-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-xl-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-xl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeL {
  

    font-size: var(--spectrum-heading-l-text-size, var(--spectrum-alias-heading-l-text-size));
  font-weight: var(--spectrum-heading-l-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-l-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-l-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeM {
  

    font-size: var(--spectrum-heading-m-text-size, var(--spectrum-alias-heading-m-text-size));
  font-weight: var(--spectrum-heading-m-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-m-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-m-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeS {
  

    font-size: var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));
  font-weight: var(--spectrum-heading-s-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-s-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-s-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeXS {
  

    font-size: var(--spectrum-heading-xs-text-size, var(--spectrum-alias-heading-xs-text-size));
  font-weight: var(--spectrum-heading-xs-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-xs-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-xs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-xs-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading--sizeXXS {
  

    font-size: var(--spectrum-heading-xxs-text-size, var(--spectrum-alias-heading-xxs-text-size));
  font-weight: var(--spectrum-heading-xxs-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-xxs-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-heading-xxs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-xxs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-heading-xxs-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Heading {
  font-family: var(--spectrum-heading-m-text-font-family, var(--spectrum-alias-body-text-font-family));
  font-weight: var(--spectrum-heading-m-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular));
}

.spectrum-Heading em,
  .spectrum-Heading .spectrum-Heading-emphasized {
    font-style: var(--spectrum-heading-m-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  }

.spectrum-Heading strong,
  .spectrum-Heading .spectrum-Heading-strong {
    font-weight: var(--spectrum-heading-m-strong-text-font-weight, var(--spectrum-alias-heading-text-font-weight-regular-strong));
  }

.spectrum-Heading--serif {
  font-family: var(--spectrum-body-m-serif-text-font-family, var(--spectrum-alias-serif-text-font-family));
}

.spectrum-Heading--heavy {
  font-weight: var(--spectrum-heading-m-heavy-text-font-weight, var(--spectrum-alias-heading-text-font-weight-heavy));
}

.spectrum-Heading--heavy em,
  .spectrum-Heading--heavy .spectrum-Heading-emphasized {
    font-style: var(--spectrum-heading-m-heavy-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  }

.spectrum-Heading--heavy strong,
  .spectrum-Heading--heavy .spectrum-Heading-strong {
    font-weight: var(--spectrum-heading-m-heavy-strong-text-font-weight, var(--spectrum-alias-heading-text-font-weight-heavy-strong));
  }

.spectrum-Heading--light {
  font-weight: var(--spectrum-heading-m-light-emphasized-text-font-weight, var(--spectrum-alias-heading-text-font-weight-light));
}

.spectrum-Heading--light em,
  .spectrum-Heading--light .spectrum-Heading-emphasized {
    font-style: var(--spectrum-heading-m-light-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  }

.spectrum-Heading--light strong,
  .spectrum-Heading--light .spectrum-Heading-strong {
    font-weight: var(--spectrum-heading-m-light-strong-text-font-weight, var(--spectrum-alias-heading-text-font-weight-light-strong));
  }

.spectrum-Body--sizeXXXL {
  

    font-size: var(--spectrum-body-xxxl-text-size, var(--spectrum-global-dimension-font-size-600));
  font-weight: var(--spectrum-body-xxxl-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-xxxl-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-xxxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-xxxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body--sizeXXL {
  

    font-size: var(--spectrum-body-xxl-text-size, var(--spectrum-global-dimension-font-size-500));
  font-weight: var(--spectrum-body-xxl-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-xxl-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-xxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-xxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body--sizeXL {
  

    font-size: var(--spectrum-body-xl-text-size, var(--spectrum-global-dimension-font-size-400));
  font-weight: var(--spectrum-body-xl-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-xl-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-xl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body--sizeL {
  

    font-size: var(--spectrum-body-l-text-size, var(--spectrum-global-dimension-font-size-300));
  font-weight: var(--spectrum-body-l-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-l-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-l-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body--sizeM {
  

    font-size: var(--spectrum-body-m-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-body-m-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-m-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-m-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body--sizeS {
  

    font-size: var(--spectrum-body-s-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-body-s-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-s-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-s-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body--sizeXS {
  

    font-size: var(--spectrum-body-xs-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-body-xs-text-font-weight, var(--spectrum-alias-body-text-font-weight));
  line-height: var(--spectrum-body-xs-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-body-xs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  text-transform: var(--spectrum-body-xs-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum-Body {
  font-family: var(--spectrum-body-m-text-font-family, var(--spectrum-alias-body-text-font-family));
}

.spectrum-Body strong,
  .spectrum-Body .spectrum-Body-strong {
    font-weight: var(--spectrum-body-m-strong-text-font-weight, var(--spectrum-global-font-weight-bold));
  }

.spectrum-Body em,
  .spectrum-Body .spectrum-Body-emphasized {
    font-style: var(--spectrum-body-m-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  }

.spectrum-Body--serif {
  font-family: var(--spectrum-body-m-serif-text-font-family, var(--spectrum-alias-serif-text-font-family));
}

.spectrum-Detail {
  font-family: var(--spectrum-heading-m-text-font-family, var(--spectrum-alias-body-text-font-family));
}

.spectrum-Detail strong,
  .spectrum-Detail .spectrum-Detail-strong {
    font-weight: var(--spectrum-detail-m-strong-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  }

.spectrum-Detail em,
  .spectrum-Detail .spectrum-Detail-emphasized {
    font-style: var(--spectrum-detail-m-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  }

.spectrum-Detail--light {
  font-style: var(--spectrum-detail-m-light-text-font-style, var(--spectrum-global-font-style-regular));
  font-weight: var(--spectrum-detail-m-light-text-font-weight, var(--spectrum-alias-detail-text-font-weight-light));
}

.spectrum-Detail--serif {
  font-family: var(--spectrum-body-m-serif-text-font-family, var(--spectrum-alias-serif-text-font-family));
}

.spectrum-Detail--sizeXL {
  

    font-size: var(--spectrum-detail-xl-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-detail-xl-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-xl-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-xl-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum-Detail--sizeXL em {
        font-size: var(--spectrum-detail-xl-emphasized-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-detail-xl-emphasized-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-xl-emphasized-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-xl-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  letter-spacing: var(--spectrum-detail-xl-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-xl-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeXL strong {
        font-size: var(--spectrum-detail-xl-strong-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-detail-xl-strong-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-xl-strong-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-xl-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-xl-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeL {
  

    font-size: var(--spectrum-detail-l-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-detail-l-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-l-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-l-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum-Detail--sizeL em {
        font-size: var(--spectrum-detail-l-emphasized-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-detail-l-emphasized-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-l-emphasized-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-l-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  letter-spacing: var(--spectrum-detail-l-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-l-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeL strong {
        font-size: var(--spectrum-detail-l-strong-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-detail-l-strong-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-l-strong-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-l-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-l-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-l-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeM {
  

    font-size: var(--spectrum-detail-m-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-detail-m-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-m-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-m-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum-Detail--sizeM em {
        font-size: var(--spectrum-detail-m-emphasized-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-detail-m-emphasized-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-m-emphasized-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-m-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  letter-spacing: var(--spectrum-detail-m-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-m-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeM strong {
        font-size: var(--spectrum-detail-m-strong-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-detail-m-strong-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-m-strong-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-m-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-m-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-m-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeS {
  

    font-size: var(--spectrum-detail-s-text-size, var(--spectrum-global-dimension-font-size-50));
  font-weight: var(--spectrum-detail-s-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-s-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-s-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum-Detail--sizeS em {
        font-size: var(--spectrum-detail-s-emphasized-text-size, var(--spectrum-global-dimension-font-size-50));
  font-weight: var(--spectrum-detail-s-emphasized-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-s-emphasized-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-s-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  letter-spacing: var(--spectrum-detail-s-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-s-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Detail--sizeS strong {
        font-size: var(--spectrum-detail-s-strong-text-size, var(--spectrum-global-dimension-font-size-50));
  font-weight: var(--spectrum-detail-s-strong-text-font-weight, var(--spectrum-alias-detail-text-font-weight-regular));
  line-height: var(--spectrum-detail-s-strong-text-line-height, var(--spectrum-alias-heading-text-line-height));
  font-style: var(--spectrum-detail-s-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-s-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-s-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum-Code {
  font-family: var(--spectrum-heading-m-text-font-family, var(--spectrum-alias-body-text-font-family));
}

.spectrum-Code strong,
  .spectrum-Code .spectrum-Code-strong {
    font-weight: var(--spectrum-code-m-strong-text-font-weight, var(--spectrum-global-font-weight-bold));
  }

.spectrum-Code em,
  .spectrum-Code .spectrum-Code-emphasized {
    font-style: var(--spectrum-code-m-emphasized-text-font-style, var(--spectrum-global-font-style-italic));
  }

.spectrum-Code--serif {
  font-family: var(--spectrum-body-m-serif-text-font-family, var(--spectrum-alias-serif-text-font-family));
}

.spectrum-Code--sizeXL {
  

    font-size: var(--spectrum-code-xl-text-size, var(--spectrum-global-dimension-font-size-400));
  font-weight: var(--spectrum-code-xl-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));
  line-height: var(--spectrum-code-xl-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-code-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--spectrum-code-xl-text-font-family, var(--spectrum-alias-code-text-font-family));

    
  }

.spectrum-Code--sizeL {
  

    font-size: var(--spectrum-code-l-text-size, var(--spectrum-global-dimension-font-size-300));
  font-weight: var(--spectrum-code-l-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));
  line-height: var(--spectrum-code-l-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-code-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--spectrum-code-l-text-font-family, var(--spectrum-alias-code-text-font-family));

    
  }

.spectrum-Code--sizeM {
  

    font-size: var(--spectrum-code-m-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-code-m-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));
  line-height: var(--spectrum-code-m-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-code-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--spectrum-code-m-text-font-family, var(--spectrum-alias-code-text-font-family));

    
  }

.spectrum-Code--sizeS {
  

    font-size: var(--spectrum-code-s-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-code-s-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));
  line-height: var(--spectrum-code-s-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-code-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--spectrum-code-s-text-font-family, var(--spectrum-alias-code-text-font-family));

    
  }

.spectrum-Code--sizeXS {
  

    font-size: var(--spectrum-code-xs-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-code-xs-text-font-weight, var(--spectrum-alias-code-text-font-weight-regular));
  line-height: var(--spectrum-code-xs-text-line-height, var(--spectrum-alias-body-text-line-height));
  font-style: var(--spectrum-code-xs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-none));
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--spectrum-code-xs-text-font-family, var(--spectrum-alias-code-text-font-family));

    
  }

.spectrum-Typography .spectrum-Heading--sizeXXXL {
    margin-top: var(--spectrum-heading-xxxl-margin-top, var(--spectrum-alias-heading-xxxl-margin-top));
    margin-bottom: var(--spectrum-heading-xxxl-margin-bottom, var(--spectrum-global-dimension-size-125));
  }

.spectrum-Typography .spectrum-Heading--sizeXXL {
    margin-top: var(--spectrum-heading-xxl-margin-top, var(--spectrum-alias-heading-xxl-margin-top));
    margin-bottom: var(--spectrum-heading-xxl-margin-bottom, var(--spectrum-global-dimension-size-115));
  }

.spectrum-Typography .spectrum-Heading--sizeXL {
    margin-top: var(--spectrum-heading-xl-margin-top, var(--spectrum-alias-heading-xl-margin-top));
    margin-bottom: var(--spectrum-heading-xl-margin-bottom, var(--spectrum-global-dimension-size-100));
  }

.spectrum-Typography .spectrum-Heading--sizeL {
    margin-top: var(--spectrum-heading-l-margin-top, var(--spectrum-alias-heading-l-margin-top));
    margin-bottom: var(--spectrum-heading-l-margin-bottom, var(--spectrum-global-dimension-size-85));
  }

.spectrum-Typography .spectrum-Heading--sizeM {
    margin-top: var(--spectrum-heading-m-margin-top, var(--spectrum-alias-heading-m-margin-top));
    margin-bottom: var(--spectrum-heading-m-margin-bottom, var(--spectrum-global-dimension-size-75));
  }

.spectrum-Typography .spectrum-Heading--sizeS {
    margin-top: var(--spectrum-heading-s-margin-top, var(--spectrum-alias-heading-s-margin-top));
    margin-bottom: var(--spectrum-heading-s-margin-bottom, var(--spectrum-global-dimension-size-65));
  }

.spectrum-Typography .spectrum-Heading--sizeXS {
    margin-top: var(--spectrum-heading-xs-margin-top, var(--spectrum-alias-heading-xs-margin-top));
    margin-bottom: var(--spectrum-heading-xs-margin-bottom, var(--spectrum-global-dimension-size-50));
  }

.spectrum-Typography .spectrum-Heading--sizeXXS {
    margin-top: var(--spectrum-heading-xxs-margin-top, var(--spectrum-alias-heading-xxs-margin-top));
    margin-bottom: var(--spectrum-heading-xxs-margin-bottom, var(--spectrum-global-dimension-size-40));
  }

.spectrum-Typography .spectrum-Body--sizeXXXL {
    margin-top: var(--spectrum-body-xxxl-margin-top, 0px);
    margin-bottom: var(--spectrum-body-xxxl-margin-bottom, var(--spectrum-global-dimension-size-400));
  }

.spectrum-Typography .spectrum-Body--sizeXXL {
    margin-top: var(--spectrum-body-xxl-margin-top, 0px);
    margin-bottom: var(--spectrum-body-xxl-margin-bottom, var(--spectrum-global-dimension-size-300));
  }

.spectrum-Typography .spectrum-Body--sizeXL {
    margin-top: var(--spectrum-body-xl-margin-top, 0px);
    margin-bottom: var(--spectrum-body-xl-margin-bottom, var(--spectrum-global-dimension-size-200));
  }

.spectrum-Typography .spectrum-Body--sizeL {
    margin-top: var(--spectrum-body-l-margin-top, 0px);
    margin-bottom: var(--spectrum-body-l-margin-bottom, var(--spectrum-global-dimension-size-160));
  }

.spectrum-Typography .spectrum-Body--sizeM {
    margin-top: var(--spectrum-body-m-margin-top, 0px);
    margin-bottom: var(--spectrum-body-m-margin-bottom, var(--spectrum-global-dimension-size-150));
  }

.spectrum-Typography .spectrum-Body--sizeS {
    margin-top: var(--spectrum-body-s-margin-top, 0px);
    margin-bottom: var(--spectrum-body-s-margin-bottom, var(--spectrum-global-dimension-size-125));
  }

.spectrum-Typography .spectrum-Body--sizeXS {
    margin-top: var(--spectrum-body-xs-margin-top, 0px);
    margin-bottom: var(--spectrum-body-xs-margin-bottom, var(--spectrum-global-dimension-size-115));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXXL {
  

    font-size: var(--spectrum-heading-han-xxxl-text-size, var(--spectrum-alias-heading-han-xxxl-text-size));
  font-weight: var(--spectrum-heading-han-xxxl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-xxxl-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-xxxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-xxxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXL {
  

    font-size: var(--spectrum-heading-han-xxl-text-size, var(--spectrum-alias-heading-han-xxl-text-size));
  font-weight: var(--spectrum-heading-han-xxl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-xxl-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-xxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-xxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXL, .spectrum:lang(ko) .spectrum-Heading--sizeXL, .spectrum:lang(zh) .spectrum-Heading--sizeXL {
  

    font-size: var(--spectrum-heading-han-xl-text-size, var(--spectrum-alias-heading-han-xl-text-size));
  font-weight: var(--spectrum-heading-han-xl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-xl-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-xl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeL, .spectrum:lang(ko) .spectrum-Heading--sizeL, .spectrum:lang(zh) .spectrum-Heading--sizeL {
  

    font-size: var(--spectrum-heading-han-l-text-size, var(--spectrum-alias-heading-han-l-text-size));
  font-weight: var(--spectrum-heading-han-l-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-l-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-l-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeM, .spectrum:lang(ko) .spectrum-Heading--sizeM, .spectrum:lang(zh) .spectrum-Heading--sizeM {
  

    font-size: var(--spectrum-heading-han-m-text-size, var(--spectrum-alias-heading-han-m-text-size));
  font-weight: var(--spectrum-heading-han-m-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-m-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-m-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeS, .spectrum:lang(ko) .spectrum-Heading--sizeS, .spectrum:lang(zh) .spectrum-Heading--sizeS {
  

    font-size: var(--spectrum-heading-han-s-text-size, var(--spectrum-alias-heading-han-s-text-size));
  font-weight: var(--spectrum-heading-han-s-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-s-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-s-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXS, .spectrum:lang(ko) .spectrum-Heading--sizeXS, .spectrum:lang(zh) .spectrum-Heading--sizeXS {
  

    font-size: var(--spectrum-heading-han-xs-text-size, var(--spectrum-alias-heading-han-xs-text-size));
  font-weight: var(--spectrum-heading-han-xs-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-xs-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-xs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-xs-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXXS, .spectrum:lang(ko) .spectrum-Heading--sizeXXS, .spectrum:lang(zh) .spectrum-Heading--sizeXXS {
  

    font-size: var(--spectrum-heading-han-xxs-text-size, var(--spectrum-alias-heading-han-xxs-text-size));
  font-weight: var(--spectrum-heading-han-xxs-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-heading-han-xxs-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-heading-han-xxs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-heading-han-xxs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-heading-han-xxs-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Heading--heavy, .spectrum:lang(ko) .spectrum-Heading--heavy, .spectrum:lang(zh) .spectrum-Heading--heavy {
      font-weight: var(--spectrum-heading-han-m-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
    }

.spectrum:lang(ja) .spectrum-Heading--heavy em,
      .spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--emphasized,
      .spectrum:lang(ko) .spectrum-Heading--heavy em,
      .spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--emphasized,
      .spectrum:lang(zh) .spectrum-Heading--heavy em,
      .spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--emphasized {
        font-style: var(
          --spectrum-heading-han-heavy-m-emphasized-text-font-style
        );
        font-weight: var(
          --spectrum-heading-han-heavy-m-emphasized-text-font-weight
        );
      }

.spectrum:lang(ja) .spectrum-Heading--heavy strong,
      .spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--strong,
      .spectrum:lang(ko) .spectrum-Heading--heavy strong,
      .spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--strong,
      .spectrum:lang(zh) .spectrum-Heading--heavy strong,
      .spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--strong {
        font-style: var(--spectrum-heading-m-heavy-strong-text-font-style, var(--spectrum-global-font-style-regular));
        font-weight: var(--spectrum-heading-m-heavy-strong-text-font-weight, var(--spectrum-alias-heading-text-font-weight-heavy-strong));
      }

.spectrum:lang(ja) .spectrum-Heading--light, .spectrum:lang(ko) .spectrum-Heading--light, .spectrum:lang(zh) .spectrum-Heading--light {
      font-weight: var(--spectrum-heading-han-m-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
    }

.spectrum:lang(ja) .spectrum-Heading--light em,
      .spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--emphasized,
      .spectrum:lang(ko) .spectrum-Heading--light em,
      .spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--emphasized,
      .spectrum:lang(zh) .spectrum-Heading--light em,
      .spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--emphasized {
        font-style: var(--spectrum-heading-han-m-light-emphasized-text-font-style, var(--spectrum-global-font-style-regular));
        font-weight: var(--spectrum-heading-han-m-light-emphasized-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-light-emphasis));
      }

.spectrum:lang(ja) .spectrum-Heading--light strong,
      .spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--strong,
      .spectrum:lang(ko) .spectrum-Heading--light strong,
      .spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--strong,
      .spectrum:lang(zh) .spectrum-Heading--light strong,
      .spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--strong {
        font-style: var(--spectrum-heading-han-m-light-strong-text-font-style, var(--spectrum-global-font-style-regular));
        font-weight: var(--spectrum-heading-han-m-light-strong-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-light-strong));
      }

.spectrum:lang(ja) .spectrum-Body--sizeXXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXXL {
  

    font-size: var(--spectrum-body-han-xxxl-text-size, var(--spectrum-global-dimension-font-size-600));
  font-weight: var(--spectrum-body-han-xxxl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-xxxl-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-xxxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-xxxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-xxxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Body--sizeXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXL {
  

    font-size: var(--spectrum-body-han-xxl-text-size, var(--spectrum-global-dimension-font-size-500));
  font-weight: var(--spectrum-body-han-xxl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-xxl-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-xxl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-xxl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-xxl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Body--sizeXL, .spectrum:lang(ko) .spectrum-Body--sizeXL, .spectrum:lang(zh) .spectrum-Body--sizeXL {
  

    font-size: var(--spectrum-body-han-xl-text-size, var(--spectrum-global-dimension-font-size-400));
  font-weight: var(--spectrum-body-han-xl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-xl-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-xl-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Body--sizeL, .spectrum:lang(ko) .spectrum-Body--sizeL, .spectrum:lang(zh) .spectrum-Body--sizeL {
  

    font-size: var(--spectrum-body-han-l-text-size, var(--spectrum-global-dimension-font-size-300));
  font-weight: var(--spectrum-body-han-l-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-l-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-l-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Body--sizeM, .spectrum:lang(ko) .spectrum-Body--sizeM, .spectrum:lang(zh) .spectrum-Body--sizeM {
  

    font-size: var(--spectrum-body-han-m-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-body-han-m-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-m-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-m-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Body--sizeS, .spectrum:lang(ko) .spectrum-Body--sizeS, .spectrum:lang(zh) .spectrum-Body--sizeS {
  

    font-size: var(--spectrum-body-han-s-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-body-han-s-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-s-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-s-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Body--sizeXS, .spectrum:lang(ko) .spectrum-Body--sizeXS, .spectrum:lang(zh) .spectrum-Body--sizeXS {
  

    font-size: var(--spectrum-body-han-xs-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-body-han-xs-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-body-han-xs-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-body-han-xs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-body-han-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  text-transform: var(--spectrum-body-han-xs-text-transform, none);
  margin-top: 0;
  margin-bottom: 0;

    
  }

.spectrum:lang(ja) .spectrum-Detail--sizeXL, .spectrum:lang(ko) .spectrum-Detail--sizeXL, .spectrum:lang(zh) .spectrum-Detail--sizeXL {
  

    font-size: var(--spectrum-detail-han-xl-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-detail-han-xl-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-detail-han-xl-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-xl-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum:lang(ja) .spectrum-Detail--sizeXL em, .spectrum:lang(ko) .spectrum-Detail--sizeXL em, .spectrum:lang(zh) .spectrum-Detail--sizeXL em {
        font-size: var(--spectrum-detail-han-xl-emphasized-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-detail-han-xl-emphasized-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));
  line-height: var(--spectrum-detail-han-xl-emphasized-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-xl-emphasized-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-xl-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-xl-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeXL strong, .spectrum:lang(ko) .spectrum-Detail--sizeXL strong, .spectrum:lang(zh) .spectrum-Detail--sizeXL strong {
        font-size: var(--spectrum-detail-han-xl-strong-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-detail-han-xl-strong-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-strong));
  line-height: var(--spectrum-detail-han-xl-strong-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-xl-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-xl-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-xl-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeL, .spectrum:lang(ko) .spectrum-Detail--sizeL, .spectrum:lang(zh) .spectrum-Detail--sizeL {
  

    font-size: var(--spectrum-detail-han-l-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-detail-han-l-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-detail-han-l-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-l-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum:lang(ja) .spectrum-Detail--sizeL em, .spectrum:lang(ko) .spectrum-Detail--sizeL em, .spectrum:lang(zh) .spectrum-Detail--sizeL em {
        font-size: var(--spectrum-detail-han-l-emphasized-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-detail-han-l-emphasized-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));
  line-height: var(--spectrum-detail-han-l-emphasized-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-l-emphasized-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-l-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-l-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeL strong, .spectrum:lang(ko) .spectrum-Detail--sizeL strong, .spectrum:lang(zh) .spectrum-Detail--sizeL strong {
        font-size: var(--spectrum-detail-han-l-strong-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-detail-han-l-strong-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-strong));
  line-height: var(--spectrum-detail-han-l-strong-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-l-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-l-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-l-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeM, .spectrum:lang(ko) .spectrum-Detail--sizeM, .spectrum:lang(zh) .spectrum-Detail--sizeM {
  

    font-size: var(--spectrum-detail-han-m-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-detail-han-m-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-detail-han-m-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-m-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum:lang(ja) .spectrum-Detail--sizeM em, .spectrum:lang(ko) .spectrum-Detail--sizeM em, .spectrum:lang(zh) .spectrum-Detail--sizeM em {
        font-size: var(--spectrum-detail-han-m-emphasized-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-detail-han-m-emphasized-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));
  line-height: var(--spectrum-detail-han-m-emphasized-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-m-emphasized-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-m-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-m-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeM strong, .spectrum:lang(ko) .spectrum-Detail--sizeM strong, .spectrum:lang(zh) .spectrum-Detail--sizeM strong {
        font-size: var(--spectrum-detail-han-m-strong-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-detail-han-m-strong-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-strong));
  line-height: var(--spectrum-detail-han-m-strong-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-m-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-m-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-m-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeS, .spectrum:lang(ko) .spectrum-Detail--sizeS, .spectrum:lang(zh) .spectrum-Detail--sizeS {
  

    font-size: var(--spectrum-detail-han-s-text-size, var(--spectrum-global-dimension-font-size-50));
  font-weight: var(--spectrum-detail-han-s-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
  line-height: var(--spectrum-detail-han-s-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-s-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;
  
  }

.spectrum:lang(ja) .spectrum-Detail--sizeS em, .spectrum:lang(ko) .spectrum-Detail--sizeS em, .spectrum:lang(zh) .spectrum-Detail--sizeS em {
        font-size: var(--spectrum-detail-han-s-emphasized-text-size, var(--spectrum-global-dimension-font-size-50));
  font-weight: var(--spectrum-detail-han-s-emphasized-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-emphasis));
  line-height: var(--spectrum-detail-han-s-emphasized-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-s-emphasized-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-s-emphasized-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-s-emphasized-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--sizeS strong, .spectrum:lang(ko) .spectrum-Detail--sizeS strong, .spectrum:lang(zh) .spectrum-Detail--sizeS strong {
        font-size: var(--spectrum-detail-han-s-strong-text-size, var(--spectrum-global-dimension-font-size-50));
  font-weight: var(--spectrum-detail-han-s-strong-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular-strong));
  line-height: var(--spectrum-detail-han-s-strong-text-line-height, var(--spectrum-alias-han-heading-text-line-height));
  font-style: var(--spectrum-detail-han-s-strong-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-detail-han-s-strong-text-letter-spacing, var(--spectrum-global-font-letter-spacing-medium));
  text-transform: var(--spectrum-detail-han-s-strong-text-transform, uppercase);
  margin-top: 0;
  margin-bottom: 0;

    }

.spectrum:lang(ja) .spectrum-Detail--light, .spectrum:lang(ko) .spectrum-Detail--light, .spectrum:lang(zh) .spectrum-Detail--light {
      font-weight: var(--spectrum-detail-han-m-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-regular));
    }

.spectrum:lang(ja) .spectrum-Detail--light em,
      .spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--emphasized,
      .spectrum:lang(ko) .spectrum-Detail--light em,
      .spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--emphasized,
      .spectrum:lang(zh) .spectrum-Detail--light em,
      .spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--emphasized {
        font-style: var(--spectrum-detail-han-m-light-emphasized-text-font-style, var(--spectrum-global-font-style-regular));
        font-weight: var(--spectrum-detail-han-m-light-emphasized-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-light-emphasis));
      }

.spectrum:lang(ja) .spectrum-Detail--light strong,
      .spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--strong,
      .spectrum:lang(ko) .spectrum-Detail--light strong,
      .spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--strong,
      .spectrum:lang(zh) .spectrum-Detail--light strong,
      .spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--strong {
        font-style: var(--spectrum-detail-han-m-light-strong-text-font-style, var(--spectrum-global-font-style-regular));
        font-weight: var(--spectrum-detail-han-m-light-strong-text-font-weight, var(--spectrum-alias-han-heading-text-font-weight-light-strong));
      }

.spectrum:lang(ja) .spectrum-Code--sizeXL, .spectrum:lang(ko) .spectrum-Code--sizeXL, .spectrum:lang(zh) .spectrum-Code--sizeXL {
  

    font-size: var(--spectrum-code-han-xl-text-size, var(--spectrum-global-dimension-font-size-400));
  font-weight: var(--spectrum-code-han-xl-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-code-han-xl-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-code-han-xl-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-han-xl-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  margin-top: 0;
  margin-bottom: 0;
      font-family: var(--spectrum-code-han-xl-text-font-family, var(--spectrum-alias-font-family-zh));

    
  }

.spectrum:lang(ja) .spectrum-Code--sizeL, .spectrum:lang(ko) .spectrum-Code--sizeL, .spectrum:lang(zh) .spectrum-Code--sizeL {
  

    font-size: var(--spectrum-code-han-l-text-size, var(--spectrum-global-dimension-font-size-300));
  font-weight: var(--spectrum-code-han-l-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-code-han-l-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-code-han-l-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-han-l-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  margin-top: 0;
  margin-bottom: 0;
      font-family: var(--spectrum-code-han-l-text-font-family, var(--spectrum-alias-font-family-zh));

    
  }

.spectrum:lang(ja) .spectrum-Code--sizeM, .spectrum:lang(ko) .spectrum-Code--sizeM, .spectrum:lang(zh) .spectrum-Code--sizeM {
  

    font-size: var(--spectrum-code-han-m-text-size, var(--spectrum-global-dimension-font-size-200));
  font-weight: var(--spectrum-code-han-m-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-code-han-m-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-code-han-m-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-han-m-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  margin-top: 0;
  margin-bottom: 0;
      font-family: var(--spectrum-code-han-m-text-font-family, var(--spectrum-alias-font-family-zh));

    
  }

.spectrum:lang(ja) .spectrum-Code--sizeS, .spectrum:lang(ko) .spectrum-Code--sizeS, .spectrum:lang(zh) .spectrum-Code--sizeS {
  

    font-size: var(--spectrum-code-han-s-text-size, var(--spectrum-global-dimension-font-size-100));
  font-weight: var(--spectrum-code-han-s-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-code-han-s-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-code-han-s-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-han-s-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  margin-top: 0;
  margin-bottom: 0;
      font-family: var(--spectrum-code-han-s-text-font-family, var(--spectrum-alias-font-family-zh));

    
  }

.spectrum:lang(ja) .spectrum-Code--sizeXS, .spectrum:lang(ko) .spectrum-Code--sizeXS, .spectrum:lang(zh) .spectrum-Code--sizeXS {
  

    font-size: var(--spectrum-code-han-xs-text-size, var(--spectrum-global-dimension-font-size-75));
  font-weight: var(--spectrum-code-han-xs-text-font-weight, var(--spectrum-alias-han-body-text-font-weight-regular));
  line-height: var(--spectrum-code-han-xs-text-line-height, var(--spectrum-alias-han-body-text-line-height));
  font-style: var(--spectrum-code-han-xs-text-font-style, var(--spectrum-global-font-style-regular));
  letter-spacing: var(--spectrum-code-han-xs-text-letter-spacing, var(--spectrum-global-font-letter-spacing-han));
  margin-top: 0;
  margin-bottom: 0;
      font-family: var(--spectrum-code-han-xs-text-font-family, var(--spectrum-alias-font-family-zh));

    
  }

.spectrum-Heading--sizeXXXL {
    
    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeXXL {
    
    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeXL {
    
    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeL {
    
    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeM {
    
    color: var(--spectrum-heading-m-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeS {
    
    color: var(--spectrum-heading-s-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeXS {
    
    color: var(--spectrum-heading-xs-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading--sizeXXS {
    
    color: var(--spectrum-heading-xxs-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXXXL--light {
    
    color: var(--spectrum-heading-xxxl-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXXL--light {
    
    color: var(--spectrum-heading-xxl-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXL--light {
    
    color: var(--spectrum-heading-xl-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeL--light {
    
    color: var(--spectrum-heading-l-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXXXL--heavy {
    
    color: var(--spectrum-heading-xxxl-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXXL--heavy {
    
    color: var(--spectrum-heading-xxl-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXL--heavy {
    
    color: var(--spectrum-heading-xl-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeL--heavy {
    
    color: var(--spectrum-heading-l-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXXXL--heading {
    
    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXXL--heading {
    
    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeXL--heading {
    
    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Heading-sizeL--heading {
    
    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Body--sizeXXXL {
    
    color: var(--spectrum-body-xxxl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Body--sizeXXL {
    
    color: var(--spectrum-body-xxl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Body--sizeXL {
    
    color: var(--spectrum-body-xl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Body--sizeL {
    
    color: var(--spectrum-body-l-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Body--sizeM {
    
    color: var(--spectrum-body-m-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Body--sizeS {
    
    color: var(--spectrum-body-s-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Body--sizeXS {
    
    color: var(--spectrum-body-xs-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Detail--sizeXL {
    
    color: var(--spectrum-detail-xl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Detail--sizeL {
    
    color: var(--spectrum-detail-l-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Detail--sizeM {
    
    color: var(--spectrum-detail-m-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Detail--sizeS {
    
    color: var(--spectrum-detail-s-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum-Code--sizeXL {
    
    color: var(--spectrum-code-xl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Code--sizeL {
    
    color: var(--spectrum-code-l-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Code--sizeM {
    
    color: var(--spectrum-code-m-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Code--sizeS {
    
    color: var(--spectrum-code-s-text-color, var(--spectrum-alias-text-color));
  }

.spectrum-Code--sizeXS {
    
    color: var(--spectrum-code-xs-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeXXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXXL {
    
    color: var(--spectrum-body-han-xxxl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXL {
    
    color: var(--spectrum-body-han-xxl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeXL, .spectrum:lang(ko) .spectrum-Body--sizeXL, .spectrum:lang(zh) .spectrum-Body--sizeXL {
    
    color: var(--spectrum-body-han-xl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeL, .spectrum:lang(ko) .spectrum-Body--sizeL, .spectrum:lang(zh) .spectrum-Body--sizeL {
    
    color: var(--spectrum-body-han-l-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeM, .spectrum:lang(ko) .spectrum-Body--sizeM, .spectrum:lang(zh) .spectrum-Body--sizeM {
    
    color: var(--spectrum-body-han-m-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeS, .spectrum:lang(ko) .spectrum-Body--sizeS, .spectrum:lang(zh) .spectrum-Body--sizeS {
    
    color: var(--spectrum-body-han-s-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Body--sizeXS, .spectrum:lang(ko) .spectrum-Body--sizeXS, .spectrum:lang(zh) .spectrum-Body--sizeXS {
    
    color: var(--spectrum-body-han-xs-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXXL {
    
    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXL {
    
    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXL, .spectrum:lang(ko) .spectrum-Heading--sizeXL, .spectrum:lang(zh) .spectrum-Heading--sizeXL {
    
    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeL, .spectrum:lang(ko) .spectrum-Heading--sizeL, .spectrum:lang(zh) .spectrum-Heading--sizeL {
    
    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeM, .spectrum:lang(ko) .spectrum-Heading--sizeM, .spectrum:lang(zh) .spectrum-Heading--sizeM {
    
    color: var(--spectrum-heading-m-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeS, .spectrum:lang(ko) .spectrum-Heading--sizeS, .spectrum:lang(zh) .spectrum-Heading--sizeS {
    
    color: var(--spectrum-heading-s-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXS, .spectrum:lang(ko) .spectrum-Heading--sizeXS, .spectrum:lang(zh) .spectrum-Heading--sizeXS {
    
    color: var(--spectrum-heading-xs-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading--sizeXXS, .spectrum:lang(ko) .spectrum-Heading--sizeXXS, .spectrum:lang(zh) .spectrum-Heading--sizeXXS {
    
    color: var(--spectrum-heading-xxs-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXXXL--light, .spectrum:lang(ko) .spectrum-Heading-sizeXXXL--light, .spectrum:lang(zh) .spectrum-Heading-sizeXXXL--light {
    
    color: var(--spectrum-heading-xxxl-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXXL--light, .spectrum:lang(ko) .spectrum-Heading-sizeXXL--light, .spectrum:lang(zh) .spectrum-Heading-sizeXXL--light {
    
    color: var(--spectrum-heading-xxl-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXL--light, .spectrum:lang(ko) .spectrum-Heading-sizeXL--light, .spectrum:lang(zh) .spectrum-Heading-sizeXL--light {
    
    color: var(--spectrum-heading-xl-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeL--light, .spectrum:lang(ko) .spectrum-Heading-sizeL--light, .spectrum:lang(zh) .spectrum-Heading-sizeL--light {
    
    color: var(--spectrum-heading-l-light-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXXXL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeXXXL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeXXXL--heavy {
    
    color: var(--spectrum-heading-xxxl-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXXL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeXXL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeXXL--heavy {
    
    color: var(--spectrum-heading-xxl-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeXL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeXL--heavy {
    
    color: var(--spectrum-heading-xl-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeL--heavy {
    
    color: var(--spectrum-heading-l-heavy-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXXXL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeXXXL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeXXXL--heading {
    
    color: var(--spectrum-heading-xxxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXXL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeXXL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeXXL--heading {
    
    color: var(--spectrum-heading-xxl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeXL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeXL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeXL--heading {
    
    color: var(--spectrum-heading-xl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Heading-sizeL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeL--heading {
    
    color: var(--spectrum-heading-l-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Detail--sizeXL, .spectrum:lang(ko) .spectrum-Detail--sizeXL, .spectrum:lang(zh) .spectrum-Detail--sizeXL {
    
    color: var(--spectrum-detail-xl-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Detail--sizeL, .spectrum:lang(ko) .spectrum-Detail--sizeL, .spectrum:lang(zh) .spectrum-Detail--sizeL {
    
    color: var(--spectrum-detail-l-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Detail--sizeM, .spectrum:lang(ko) .spectrum-Detail--sizeM, .spectrum:lang(zh) .spectrum-Detail--sizeM {
    
    color: var(--spectrum-detail-m-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Detail--sizeS, .spectrum:lang(ko) .spectrum-Detail--sizeS, .spectrum:lang(zh) .spectrum-Detail--sizeS {
    
    color: var(--spectrum-detail-s-text-color, var(--spectrum-alias-heading-text-color));
  }

.spectrum:lang(ja) .spectrum-Code--sizeXL, .spectrum:lang(ko) .spectrum-Code--sizeXL, .spectrum:lang(zh) .spectrum-Code--sizeXL {
    
    color: var(--spectrum-code-xl-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Code--sizeL, .spectrum:lang(ko) .spectrum-Code--sizeL, .spectrum:lang(zh) .spectrum-Code--sizeL {
    
    color: var(--spectrum-code-l-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Code--sizeM, .spectrum:lang(ko) .spectrum-Code--sizeM, .spectrum:lang(zh) .spectrum-Code--sizeM {
    
    color: var(--spectrum-code-m-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Code--sizeS, .spectrum:lang(ko) .spectrum-Code--sizeS, .spectrum:lang(zh) .spectrum-Code--sizeS {
    
    color: var(--spectrum-code-s-text-color, var(--spectrum-alias-text-color));
  }

.spectrum:lang(ja) .spectrum-Code--sizeXS, .spectrum:lang(ko) .spectrum-Code--sizeXS, .spectrum:lang(zh) .spectrum-Code--sizeXS {
    
    color: var(--spectrum-code-xs-text-color, var(--spectrum-alias-text-color));
  }

.spectrum,
.spectrum-Body {
  color: var(--spectrum-body-m-text-color, var(--spectrum-alias-text-color));
}

          `;let b=class extends(Object(s.a)(n.a,m)){constructor(){super(...arguments),this.sampleText="The quick brown fox jumps over the lazy dog",this.variableFont=null,this.variation=null}static get styles(){return[l.b,l.a,g,d]}render(){return o.a`${this._renderHeading(this.t("web-project-editor-style-selector.variable-font-instances"),this.t("web-project-editor-style-selector.instances-tooltip"))} ${this._renderInstancesTable()} ${this._renderHeading(this.t("web-project-editor-style-selector.axes-ranges"),this.t("web-project-editor-style-selector.axes-tooltip"))} ${this._renderAxesTable()}`}_copyCSS(e){return navigator.clipboard.writeText("font-variation-settings: "+Object.keys(e.coordinates).map((t=>`"${t}" ${e.coordinates[t]}`)).join(", ")+";")}_getAxisName(e){var t;return this.variableFont&&(null===(t=this.variableFont.axes.filter((t=>e===t.tag))[0])||void 0===t?void 0:t.name)||e}_renderAxesTable(){return this.variableFont?o.a`<table class="spectrum-Table spectrum-Table--sizeM web-project-editor-table" data-id="axes-table"><thead class="spectrum-Table-head"><tr><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.axis")}</th><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.tag")}</th><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.range")}</th></tr></thead><tbody class="spectrum-Table-body">${this.variableFont.axes.map((e=>this._renderAxisTableRow(e)))}</tbody></table>`:o.a``}_renderAxisTableRow(e){return o.a`<tr class="spectrum-Table-row"><td class="spectrum-Table-cell" tabindex="0">${e.name}</td><td class="spectrum-Table-cell" tabindex="0">${e.tag}</td><td class="spectrum-Table-cell" tabindex="0">${e.min}-${e.max}</td></tr>`}_renderCoordinateItem(e,t){return o.a`<div class="coordinate coordinate-item">${this._getAxisName(e)} - ${t}</div>`}_renderDisplayFont(e){if(!this.variation)return o.a``;const t=Object.keys(e.coordinates).map((t=>`'${t}' ${e.coordinates[t]}`)).join(", ");return o.a`<af-display-in-font fontStyle="${this.variation.style}" fontVariationSettings="${t}" fontWeight="${this.variation.weight}" webId="${this.variation.familyWebId}" unicodeRange="${this.variation.unicodeRange}"><div class="sample-text">${this.sampleText}</div></af-display-in-font>`}_renderHeading(e,t){return o.a`<div class="table-heading-wrapper"><h3 class="spectrum-Detail--sizeL table-heading">${e}</h3><overlay-trigger placement="top"><span class="info-icon" slot="trigger"><sp-icon-info></sp-icon-info></span><sp-tooltip placement="top" slot="hover-content">${t}</sp-tooltip></overlay-trigger></div>`}_renderInstancesTable(){return this.variableFont?o.a`<div class="web-project-editor-table-wrapper"><table class="spectrum-Table spectrum-Table--sizeM web-project-editor-table" data-id="instances-table"><thead class="spectrum-Table-head"><tr><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.instance")}</th><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.preview")}</th><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.axes-settings")}</th><th class="web-project-editor-table-head-cell axis-table-head-cell">${this.t("web-project-editor-style-selector.copy-css")}</th></tr></thead><tbody class="spectrum-Table-body">${this.variableFont.instances.map((e=>this._renderInstancesTableRow(e)))}</tbody></table></div>`:o.a``}_renderInstancesTableAxesSettings(e,t,r){return 0===r.length?o.a`<button class="coordinate coordinate-header">${this._getAxisName(t)} - ${e.coordinates[t]}</button>`:o.a`<sp-accordion class="coordinates-accordion"><sp-accordion-item label="${this._getAxisName(t)} - ${e.coordinates[t]}">${r.map((t=>this._renderCoordinateItem(t,e.coordinates[t])))}</sp-accordion-item></sp-accordion>`}_renderInstancesTableRow(e){const t=Object.keys(e.coordinates)[0],r=Object.keys(e.coordinates).filter((e=>e!=t));return o.a`<tr class="spectrum-Table-row"><td class="spectrum-Table-cell" tabindex="0">${e.instanceName}</td><td class="spectrum-Table-cell" tabindex="0">${this._renderDisplayFont(e)}</td><td class="spectrum-Table-cell" tabindex="0">${this._renderInstancesTableAxesSettings(e,t,r)}</td><td class="spectrum-Table-cell" tabindex="0"><button aria-label="${this.t("web-project-editor-style-selector.copy-css")}}" class="css-copy-button" @click="${()=>this._copyCSS(e)}"><sp-icon-copy></sp-icon-copy></button></td></tr>`}};Object(a.a)([Object(u.b)({type:String})],b.prototype,"sampleText",void 0),Object(a.a)([Object(u.b)({type:Object})],b.prototype,"variableFont",void 0),Object(a.a)([Object(u.b)({type:Object})],b.prototype,"variation",void 0),b=Object(a.a)([Object(p.a)("af-web-project-editor-variable-style-selector")],b)},763:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=(r(48),r(460)),i=r(7),n=(r(329),r(26),r(184),r(67),r(146),r(2),r(17),r(4),r(14),{"variable-font-sample-card.axes-count":"{count, plural, =0 {0 Axes} =1 {1 Axis} other {# Axes}}"}),u=s.d`
            :host {
  --variable-font-sample-card-border-color: var(--spectrum-global-color-gray-200);
  --variable-font-sample-card-font-size: 30px;
  --variable-font-sample-card-hover-color: var(--spectrum-global-color-blue-400);

  border: 1px solid var(--variable-font-sample-card-border-color);
  border-radius: 2px;
  display: inline-block;
  min-width: 180px;
}

:host(:hover) {
  border-color: var(--variable-font-sample-card-hover-color);
}

#specimens {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 5px 8px;
}

.specimen {
  color: var(--spectrum-global-color-gray-700);
  font-size: var(--variable-font-sample-card-font-size);
  list-style: none;
  margin: 8px;
}

#footer {
  /* Temporarily hardcode this background color so it matches up with the
   * existing sample card for non-variable fonts. */
  background: #fafafa;
  border-top: 1px solid var(--variable-font-sample-card-border-color);
  color: var(--spectrum-global-color-gray-700);
  padding: 4px 8px;
}

:host(:hover) #footer {
  color: var(--spectrum-global-color-gray-50);
  background: var(--variable-font-sample-card-hover-color);
}

          `;let p=class extends(Object(i.a)(s.e,n)){constructor(){super(...arguments),this.fontId="",this.sampleString="Ag",this.unicodeRange=""}static get styles(){return u}render(){if(this.fontData)return s.a`${this.renderSpecimens()} ${this.renderFooter()}`}renderSpecimens(){return s.a`<ul id="specimens">${this.renderSpecimen(this._getMinAxisData())} ${this.renderSpecimen(this._getMidAxisData())} ${this.renderSpecimen(this._getMaxAxisData())}</ul>`}renderSpecimen(e){var t;return s.a`<li class="specimen"><af-display-in-font fontVariationSettings="${Object(c.a)(e)}" fontStyle="${null===(t=this.fontData)||void 0===t?void 0:t.style}" unicodeRange="${this.unicodeRange}" webId="${this.fontId}">${this.sampleString}</af-display-in-font></li>`}renderFooter(){var e,t;return s.a`<div id="footer">${null===(e=this.fontData)||void 0===e?void 0:e.fontName}: ${this.t("variable-font-sample-card.axes-count",{count:null===(t=this.fontData)||void 0===t?void 0:t.axes.length})}</div>`}setFontData(e){this.fontData=e}_getMaxAxisData(){var e,t;return null!==(t=null===(e=this.fontData)||void 0===e?void 0:e.axes.map((e=>({tag:e.tag,value:e.max}))))&&void 0!==t?t:[]}_getMidAxisData(){var e,t;return null!==(t=null===(e=this.fontData)||void 0===e?void 0:e.axes.map((e=>({tag:e.tag,value:e.min+(e.max-e.min)/2}))))&&void 0!==t?t:[]}_getMinAxisData(){var e,t;return null!==(t=null===(e=this.fontData)||void 0===e?void 0:e.axes.map((e=>({tag:e.tag,value:e.min}))))&&void 0!==t?t:[]}};Object(a.a)([Object(l.a)()],p.prototype,"fontData",void 0),Object(a.a)([Object(l.a)()],p.prototype,"fontId",void 0),Object(a.a)([Object(l.a)()],p.prototype,"sampleString",void 0),Object(a.a)([Object(l.a)()],p.prototype,"unicodeRange",void 0),p=Object(a.a)([Object(o.a)("af-variable-font-sample-card")],p)},818:function(e,t,r){"use strict";var a,s,o=r(3),l=(r(19),r(0)),c=r(28),i=r(8),n=(r(48),r(256)),u=r(41),p=r(15),m=(r(105),r(54)),d=r(2),g=r(129),b=r(4),h=r(97),v=(r(74),r(128),r(253),r(254),r(758),r(130)),f=(r(760),r(23));(s=a||(a={})).Default="default",s.Japanese="japanese",s.Korean="ko",s.SimplifiedChinese="zh-Hans",s.TraditionalChinese="zh-Hant";var x=r(319);r(329);const y={classification:[{label:"Sans Serif",key:"cl:ss",slug:"default-cl-ss"},{label:"Serif",key:"cl:se",slug:"default-cl-se"},{label:"Slab Serif",key:"cl:sl",slug:"default-cl-sl"},{label:"Script",key:"cl:sc",slug:"default-cl-sc"},{label:"Mono",key:"cl:ms",slug:"default-cl-ms"},{label:"Hand",key:"cl:hm",slug:"default-cl-hm"}],fontTechnologies:[{label:"",key:"vf",slug:"default-vf"}],properties:[{id:"weight",label:"filter-sidebar.properties.weight.header",filters:[{label:"Light",key:"wt:l",slug:"default-wt-l"},{label:"Regular",key:"wt:r",slug:"default-wt-r"},{label:"Heavy",key:"wt:h",slug:"default-wt-h"}]},{id:"width",label:"filter-sidebar.properties.width.header",filters:[{label:"Condensed",key:"wd:c",slug:"default-wd-c"},{label:"Regular",key:"wd:r",slug:"default-wd-r"},{label:"Extended",key:"wd:e",slug:"default-wd-e"}]},{id:"x-height",label:"filter-sidebar.properties.x-height.header",filters:[{label:"Low",key:"xh:l",slug:"default-xh-l"},{label:"Regular",key:"xh:r",slug:"default-xh-r"},{label:"High",key:"xh:h",slug:"default-xh-h"}]},{id:"contrast",label:"filter-sidebar.properties.contrast.header",filters:[{label:"Low",key:"ct:l",slug:"default-ct-l"},{label:"Regular",key:"ct:r",slug:"default-ct-r"},{label:"High",key:"ct:h",slug:"default-ct-h"}]},{id:"italics",label:"filter-sidebar.properties.italics.header",filters:[{label:"italics",key:"il:i",slug:"default-il-i"}]},{id:"standard-or-caps-only",label:"filter-sidebar.properties.standard-or-caps-only.header",filters:[{label:"Standard",key:"cp:ul",slug:"default-cp-ul"},{label:"Capitals Only",key:"cp:co",slug:"default-cp-co"}]},{id:"story",label:"filter-sidebar.properties.story.header",filters:[{label:"Double",key:"st:d",slug:"default-st-d"},{label:"Single",key:"st:s",slug:"default-st-s"}]},{label:"filter-sidebar.properties.default-figure-style.header",filters:[{label:"Uppercase",key:"ns:uc",slug:"default-ns-uc"},{label:"Lowercase",key:"ns:lc",slug:"default-ns-lc"}]}]},w={classification:[{label:"Mincho",key:"cl:mi",slug:"japanese-cl-mi"},{label:"Gothic",key:"cl:go",slug:"japanese-cl-go"},{label:"Maru Gothic",key:"cl:mg",slug:"japanese-cl-mg"},{label:"Brush",key:"cl:br",slug:"japanese-cl-br"},{label:"Stylized",key:"cl:st",slug:"japanese-cl-st"},{label:"UD",key:"cl:ud",slug:"japanese-cl-ud"},{label:"Antique",key:"cl:an",slug:"japanese-cl-an"}],properties:[{label:"filter-sidebar.properties.weight.header",filters:[{label:"Light",key:"wt:l",slug:"japanese-wt-l"},{label:"Regular",key:"wt:r",slug:"japanese-wt-r"},{label:"Heavy",key:"wt:h",slug:"japanese-wt-h"}]},{label:"filter-sidebar.properties.kana.header",filters:[{label:"Kana Only",key:"ka:ko",slug:"japanese-ka-ko"}]}],recommendations:[{label:"Paragraphs",key:"rc:p",slug:"japanese-rc-p"},{label:"Headings",key:"rc:h",slug:"japanese-rc-h"}]},z={classification:[{label:"Batang",key:"cl:ba",slug:"ko-cl-ba"},{label:"Dotum",key:"cl:do",slug:"ko-cl-do"},{label:"Gulim",key:"cl:gu",slug:"ko-cl-gu"},{label:"Design",key:"cl:ds",slug:"ko-cl-ds"},{label:"Handwritten",key:"cl:ha",slug:"ko-cl-ha"}],properties:[{label:"filter-sidebar.properties.weight.header",filters:[{label:"Light",key:"wt:l",slug:"ko-wt-l"},{label:"Regular",key:"wt:r",slug:"ko-wt-r"},{label:"Heavy",key:"wt:h",slug:"ko-wt-h"}]},{label:"filter-sidebar.properties.fixed-or-proportional.header",filters:[{label:"Fixed",key:"fp:f",slug:"ko-fp-f"},{label:"Proportional",key:"fp:p",slug:"ko-fp-p"}]}]},k={classification:[{label:"K\u01cei T\u01d0",key:"cl:ka",slug:"zh-Hans-cl-ka"},{label:"F\u01ceng S\xf2ng T\u01d0",key:"cl:fa",slug:"zh-Hans-cl-fa"},{label:"S\xf2ng T\u01d0",key:"cl:so",slug:"zh-Hans-cl-so"},{label:"H\u0113i T\u01d0",key:"cl:he",slug:"zh-Hans-cl-he"},{label:"Yu\xe1n T\u01d0",key:"cl:yu",slug:"zh-Hans-cl-yu"},{label:"Old script styles",key:"cl:ol",slug:"zh-Hans-cl-ol"},{label:"Handwritten",key:"cl:ha",slug:"zh-Hans-cl-ha"},{label:"Decorative",key:"cl:de",slug:"zh-Hans-cl-de"}],properties:[{label:"filter-sidebar.properties.weight.header",filters:[{label:"Light",key:"wt:l",slug:"zh-Hans-wt-l"},{label:"Regular",key:"wt:r",slug:"zh-Hans-wt-r"},{label:"Heavy",key:"wt:h",slug:"zh-Hans-wt-h"}]}]},T={classification:[{label:"K\u01cei T\u01d0",key:"cl:ka",slug:"zh-Hant-cl-ka"},{label:"F\u01ceng S\xf2ng T\u01d0",key:"cl:fa",slug:"zh-Hant-cl-fa"},{label:"S\xf2ng T\u01d0",key:"cl:so",slug:"zh-Hant-cl-so"},{label:"H\u0113i T\u01d0",key:"cl:he",slug:"zh-Hant-cl-he"},{label:"Yu\xe1n T\u01d0",key:"cl:yu",slug:"zh-Hant-cl-yu"}],properties:[{label:"filter-sidebar.properties.weight.header",filters:[{label:"Light",key:"wt:l",slug:"zh-Hant-wt-l"},{label:"Regular",key:"wt:r",slug:"zh-Hant-wt-r"},{label:"Heavy",key:"wt:h",slug:"zh-Hant-wt-h"}]}]};var j=r(320),C=r(7),S=r(321),O=r(355),L=r(322),A=r(324),H=r(323),B=r(135),D=(r(24),r(13),r(49),r(11),r(9),r(37),r(5),r(22),r(68),r(47),r(20),r(69),r(83),r(17),r(146),r(51),r(125),r(104),r(16),r(63),r(184),r(67),r(14),r(26),l.d`
:host([dir=ltr]) .indicator{left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) .indicator{right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) .indicator{transform:matrix(-1,0,0,1,0,0)}.indicator{display:block;position:absolute;top:calc(50% - var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
)/2);transition:transform ease var(--spectrum-accordion-animation-duration)}:host{border-bottom:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent;display:list-item;margin:0;position:relative;z-index:inherit}:host(:first-of-type){border-top:var(
--spectrum-accordion-item-border-size,var(--spectrum-alias-border-size-thin)
) solid transparent}#heading{box-sizing:border-box;margin:0}:host([dir=ltr]) #header{padding-left:calc(var(
--spectrum-accordion-item-padding-x,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
) + var(
--spectrum-accordion-icon-gap,
var(--spectrum-global-dimension-size-100)
) + var(
--spectrum-accordion-item-border-left-size,
var(--spectrum-alias-border-size-thick)
))}:host([dir=rtl]) #header{padding-right:calc(var(
--spectrum-accordion-item-padding-x,
var(--spectrum-global-dimension-size-225)
) + var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
) + var(
--spectrum-accordion-icon-gap,
var(--spectrum-global-dimension-size-100)
) + var(
--spectrum-accordion-item-border-left-size,
var(--spectrum-alias-border-size-thick)
))}:host([dir=ltr]) #header{padding-right:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=rtl]) #header{padding-left:var(
--spectrum-accordion-item-padding-x,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr]) #header{text-align:left}:host([dir=rtl]) #header{text-align:right}#header{align-items:center;appearance:none;background-color:inherit;border:0;box-sizing:border-box;cursor:pointer;display:flex;font-family:inherit;font-size:var(
--spectrum-accordion-item-title-text-size,var(--spectrum-global-dimension-font-size-50)
);font-weight:500;justify-content:flex-start;letter-spacing:calc(var(
--spectrum-accordion-item-title-tracking,
var(--spectrum-global-font-letter-spacing-medium)
)/100);line-height:var(
--spectrum-accordion-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin:0;padding-bottom:var(--spectrum-accordion-item-title-padding-y);padding-top:var(--spectrum-accordion-item-title-padding-y);position:relative;text-overflow:ellipsis;text-transform:uppercase;width:100%}#header:focus{outline:none}:host([dir=ltr]) #header:focus:after{left:0}:host([dir=rtl]) #header:focus:after{right:0}#header:focus:after{bottom:calc(var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
)*-1);content:"";position:absolute;top:calc(var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
)*-1);width:var(
--spectrum-accordion-item-border-left-size,var(--spectrum-alias-border-size-thick)
)}#content{display:none;padding-bottom:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-left:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-right:var(
--spectrum-accordion-item-content-padding,var(--spectrum-global-dimension-size-200)
);padding-top:0}:host([dir=ltr][open])>#heading>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>#heading>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([dir=ltr][open])>.indicator{transform:rotate(90deg)}:host([dir=rtl][open])>.indicator{transform:matrix(-1,0,0,1,0,0) rotate(90deg)}:host([open])>#content{display:block}:host([disabled]) #header{cursor:default}:host{border-color:var(
--spectrum-accordion-border-color,var(--spectrum-global-color-gray-300)
)}.indicator{color:var(
--spectrum-accordion-icon-color,var(--spectrum-global-color-gray-600)
)}#header{color:var(
--spectrum-accordion-text-color,var(--spectrum-global-color-gray-700)
)}#header:hover{background-color:var(
--spectrum-accordion-item-background-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-accordion-text-color-hover,var(--spectrum-global-color-gray-900)
)}#header:hover+.indicator{color:var(
--spectrum-accordion-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}#header.focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#header:focus-visible:after{background-color:var(
--spectrum-accordion-item-border-left-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([open]) #header:hover{background-color:transparent}:host([disabled]) #header,:host([disabled]) #header.focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header,:host([disabled]) #header:focus-visible,:host([disabled]) #header:hover{background-color:transparent;color:var(
--spectrum-accordion-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([disabled]) #header+.indicator{color:var(
--spectrum-accordion-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}@media (forced-colors:active){#header.focus-visible{outline:3px solid CanvasText}#header:focus-visible{outline:3px solid CanvasText}}:host{--spectrum-accordion-item-header-height:46px}#indicator{top:calc(50% - var(
--spectrum-accordion-icon-height,
var(--spectrum-global-dimension-size-125)
)/2)}#heading{height:auto;position:relative}#header{min-height:calc(100% - var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([open])>#header:after{height:calc(100% - var(
--spectrum-accordion-item-border-size,
var(--spectrum-alias-border-size-thin)
))}
`),M=Object.defineProperty,$=Object.getOwnPropertyDescriptor,P=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?$(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&M(t,r,o),o};class E extends p.a{constructor(){super(...arguments),this.open=!1,this.label="",this.disabled=!1}static get styles(){return[D,m.a]}get focusElement(){return this.shadowRoot.querySelector("#header")}onClick(){this.disabled||this.toggle()}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("sp-accordion-item-toggle",{bubbles:!0,composed:!0,cancelable:!0}))||(this.open=!this.open)}render(){return l.a`
            <h3 id="heading">
                <button
                    id="header"
                    @click=${this.onClick}
                    aria-expanded=${this.open}
                    aria-controls="content"
                    ?disabled=${this.disabled}
                >
                    ${this.label}
                </button>
                <sp-icon-chevron100
                    class="indicator spectrum-UIIcon-ChevronRight100"
                ></sp-icon-chevron100>
            </h3>
            <div id="content" role="region" aria-labelledby="header">
                <slot></slot>
            </div>
        `}updated(e){super.updated(e),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}P([Object(d.b)({type:Boolean,reflect:!0})],E.prototype,"open",2),P([Object(d.b)({type:String,reflect:!0})],E.prototype,"label",2),P([Object(d.b)({type:Boolean,reflect:!0})],E.prototype,"disabled",2),customElements.define("sp-accordion-item",E);var X=l.d`
:host{--spectrum-accordion-item-title-padding-y:var(
--spectrum-global-dimension-size-150
);--spectrum-accordion-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
)}:host{display:block;list-style:none;margin:0;padding:0}
`,_=Object.defineProperty,F=Object.getOwnPropertyDescriptor,I=(e,t,r,a)=>{for(var s,o=a>1?void 0:a?F(t,r):t,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(a?s(t,r,o):s(o))||o);return a&&o&&_(t,r,o),o};class q extends b.a{constructor(){super(...arguments),this.allowMultiple=!1,this.focusGroupController=new g.a(this,{direction:"vertical",elements:()=>this.items,isFocusableElement:e=>!e.disabled})}static get styles(){return[X]}get items(){return[...this.defaultNodes||[]].filter((e=>void 0!==e.tagName))}focus(){this.focusGroupController.focus()}async onToggle(e){const t=e.target;if(await 0,this.allowMultiple||e.defaultPrevented)return;const r=[...this.items];r&&!r.length||r.forEach((e=>{e!==t&&(e.open=!1)}))}handleSlotchange(){this.focusGroupController.clearElementCache()}render(){return l.a`
            <slot
                @slotchange=${this.handleSlotchange}
                @sp-accordion-item-toggle=${this.onToggle}
            ></slot>
        `}}I([Object(d.b)({type:Boolean,reflect:!0,attribute:"allow-multiple"})],q.prototype,"allowMultiple",2),I([Object(h.b)()],q.prototype,"defaultNodes",2),customElements.define("sp-accordion",q);var N=l.d`
:host{margin:calc(var(--spectrum-listitem-texticon-divider-padding)/2) var(--spectrum-listitem-texticon-padding-y);overflow:visible;width:auto}@media (forced-colors:active){:host{background-color:CanvasText;forced-color-adjust:none}}:host{display:block}
`;customElements.define("sp-menu-divider",class extends b.a{static get styles(){return[v.a,N]}firstUpdated(){this.setAttribute("role","separator"),this.setAttribute("size","m")}});var R={"filter-sidebar.classification.header":"Classification","filter-sidebar.clear-filters-button.text":"Clear Filters","filter-sidebar.show-paid-fonts-checkbox.text":"Show fonts available with Creative Cloud","filter-sidebar.font-technologies.header":"Font Technology","filter-sidebar.font-technologies.popover":"Fonts with unlimited style variations you can customize to fit any project","filter-sidebar.font-technologies.filter-button":"Variable Fonts","filter-sidebar.fonts-in-family-slider.all":"All","filter-sidebar.fonts-in-family-slider.slider-label":"Number of fonts in family","filter-sidebar.languages.header":"Languages and Writing Systems","filter-sidebar.languages.options.all":"All","filter-sidebar.languages.options.english":"English","filter-sidebar.languages.select-language-label":"Select a Country","filter-sidebar.properties.header":"Properties","filter-sidebar.properties.weight.header":"Weight","filter-sidebar.properties.width.header":"Width","filter-sidebar.properties.x-height.header":"x-Height","filter-sidebar.properties.contrast.header":"Contrast","filter-sidebar.properties.standard-or-caps-only.header":"Standard or Caps Only","filter-sidebar.properties.default-figure-style.header":"Lining or Oldstyle Figures","filter-sidebar.properties.italics.header":"Italics","filter-sidebar.properties.story.header":"Double or Single Story","filter-sidebar.properties.kana.header":"Kana","filter-sidebar.properties.fixed-or-proportional.header":"Fixed or Proportional","filter-sidebar.tags.header":"Tags","filter-sidebar.tags.show-less":"Show less","filter-sidebar.tags.view-more":"View {tagCount} more"},G={"filter-sidebar.filter-label.default-cl-ss":"Sans Serif","filter-sidebar.filter-label.default-cl-se":"Serif","filter-sidebar.filter-label.default-cl-sl":"Slab Serif","filter-sidebar.filter-label.default-cl-sc":"Script","filter-sidebar.filter-label.default-cl-bl":"Blackletter","filter-sidebar.filter-label.default-cl-ms":"Mono","filter-sidebar.filter-label.default-cl-hm":"Hand","filter-sidebar.filter-label.default-cl-de":"Decorative","filter-sidebar.filter-label.default-wt-l":"Light","filter-sidebar.filter-label.default-wt-r":"Regular","filter-sidebar.filter-label.default-wt-h":"Heavy","filter-sidebar.filter-label.default-wd-c":"Condensed","filter-sidebar.filter-label.default-wd-r":"Regular","filter-sidebar.filter-label.default-wd-e":"Extended","filter-sidebar.filter-label.default-xh-l":"Low","filter-sidebar.filter-label.default-xh-r":"Regular","filter-sidebar.filter-label.default-xh-h":"High","filter-sidebar.filter-label.default-ct-l":"Low","filter-sidebar.filter-label.default-ct-r":"Regular","filter-sidebar.filter-label.default-ct-h":"High","filter-sidebar.filter-label.default-cp-ul":"Standard","filter-sidebar.filter-label.default-cp-co":"Capitals Only","filter-sidebar.filter-label.default-ns-uc":"Uppercase","filter-sidebar.filter-label.default-ns-lc":"Lowercase","filter-sidebar.filter-label.japanese-cl-mi":"Mincho","filter-sidebar.filter-label.japanese-cl-go":"Gothic","filter-sidebar.filter-label.japanese-cl-mg":"Maru Gothic","filter-sidebar.filter-label.japanese-cl-br":"Brush","filter-sidebar.filter-label.japanese-cl-st":"Stylized","filter-sidebar.filter-label.japanese-cl-ud":"UD","filter-sidebar.filter-label.japanese-cl-an":"Antique","filter-sidebar.filter-label.japanese-rc-p":"Paragraphs","filter-sidebar.filter-label.japanese-rc-h":"Headings","filter-sidebar.filter-label.japanese-wt-l":"Light","filter-sidebar.filter-label.japanese-wt-r":"Regular","filter-sidebar.filter-label.japanese-wt-h":"Heavy","filter-sidebar.filter-label.japanese-ka-ko":"Kana Only","filter-sidebar.filter-label.zh-Hans-cl-ka":"K\u01cei T\u01d0","filter-sidebar.filter-label.zh-Hans-cl-fa":"F\u01ceng S\xf2ng T\u01d0","filter-sidebar.filter-label.zh-Hans-cl-so":"S\xf2ng T\u01d0","filter-sidebar.filter-label.zh-Hans-cl-he":"H\u0113i T\u01d0","filter-sidebar.filter-label.zh-Hans-cl-yu":"Yu\xe1n T\u01d0","filter-sidebar.filter-label.zh-Hans-cl-ol":"Old script styles","filter-sidebar.filter-label.zh-Hans-cl-ha":"Handwritten","filter-sidebar.filter-label.zh-Hans-cl-de":"Decorative","filter-sidebar.filter-label.zh-Hans-wt-l":"Light","filter-sidebar.filter-label.zh-Hans-wt-r":"Regular","filter-sidebar.filter-label.zh-Hans-wt-h":"Heavy","filter-sidebar.filter-label.zh-Hant-cl-ka":"K\u01cei T\u01d0","filter-sidebar.filter-label.zh-Hant-cl-fa":"F\u01ceng S\xf2ng T\u01d0","filter-sidebar.filter-label.zh-Hant-cl-so":"S\xf2ng T\u01d0","filter-sidebar.filter-label.zh-Hant-cl-he":"H\u0113i T\u01d0","filter-sidebar.filter-label.zh-Hant-cl-yu":"Yu\xe1n T\u01d0","filter-sidebar.filter-label.zh-Hant-cl-ol":"Old script styles","filter-sidebar.filter-label.zh-Hant-cl-ha":"Handwritten","filter-sidebar.filter-label.zh-Hant-cl-de":"Decorative","filter-sidebar.filter-label.zh-Hant-wt-l":"Light","filter-sidebar.filter-label.zh-Hant-wt-r":"Regular","filter-sidebar.filter-label.zh-Hant-wt-h":"Heavy","filter-sidebar.filter-label.ko-cl-ba":"Batang","filter-sidebar.filter-label.ko-cl-do":"Dotum","filter-sidebar.filter-label.ko-cl-gu":"Gulim","filter-sidebar.filter-label.ko-cl-ds":"Design","filter-sidebar.filter-label.ko-cl-ha":"Handwritten","filter-sidebar.filter-label.ko-wt-l":"Light","filter-sidebar.filter-label.ko-wt-r":"Regular","filter-sidebar.filter-label.ko-wt-h":"Heavy","filter-sidebar.filter-label.ko-fp-f":"Fixed","filter-sidebar.filter-label.ko-fp-p":"Proportional"},U=l.d`
            :host {
  display: flex;
  flex-direction: column;
  background: var(--spectrum-global-color-gray-100);
}

.classification-list,
.properties-filter-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}

.classification-list .classification-list-item {
  flex: 1 0 21%;
  margin: 0 5px 15px 0;
  max-width: 24%;
  width: 24%;
}

@media screen and (min-width: 768px) {
  .classification-list .classification-list-item {
    min-width: 32%;
    max-width: unset;
    width: 32%;
  }
}

@media screen and (min-width: 1280px) {
  .classification-list .classification-list-item {
    min-width: unset;
    max-width: 24%;
    width: 24%;
  }

  .classification-list .classification-list-item:lang(fi),
  .classification-list .classification-list-item:lang(nl) {
    min-width: 32%;
    max-width: unset;
    width: 32%;
  }
}

@media screen and (min-width: 1768px) {
  .classification-list .classification-list-item:lang(fi),
  .classification-list .classification-list-item:lang(nl) {
    min-width: unset;
    max-width: 24%;
    width: 24%;
  }
}

.classification-list .filter-button {
  color: var(--spectrum-global-color-gray-600);
  height: 48px;
  width: 100%;
}

.classification-list .filter-button-label {
  color: var(--spectrum-global-color-gray-700);
  margin-top: 7px;
  text-align: center;
}

.clear-filters-section {
  border-bottom: 1px solid var(--spectrum-global-color-gray-300);
  border-top: 1px solid var(--spectrum-global-color-gray-300);
  padding: 16px 0;
  text-align: center;
  width: 100%;
}

.show-paid-fonts-section {
  border-bottom: 1px solid var(--spectrum-global-color-gray-300);
  padding: 16px 0;
  width: 100%;
}

.show-paid-fonts-checkbox {
  margin-left: 18px;
}

.filter-button:hover,
.filter-button[selected],
.filter-tag[selected],
.filter-tag[selected]:hover {
  color: var(--spectrum-global-color-static-white);
  background-color: var(--spectrum-global-color-static-blue-600);
}

.filter-button-content {
  display: flex;
}

.filter-button-text {
  margin-left: 5px;
  font-size: 16px;
}

.filter-button-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.filter-button-group__filters {
  display: flex;
}

.filter-button-group__filters .filter-button {
  flex: 1;
  height: 48px;
}

.filter-button-group__filters .filter-button:first-child:not(:only-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.filter-button-group__filters .filter-button:last-child:not(:only-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.filter-button-group__filters .filter-button:not(:first-child):not(:last-child) {
  border-left: none;
  border-radius: 0;
  border-right: none;
}

/*
 * When the are only 2 buttons, remove left border from the second button.
 */
.filter-button-group__filters .filter-button:first-child + .filter-button:last-child {
  border-left: none;
}

.filter-button-group__label {
  color: var(--spectrum-global-color-gray-700);
  text-align: center;
}

.filter-sections {
  width: 100%;
}

.filter-tag {
  display: inline-flex;
  flex-grow: 0;
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  margin: 0 0 7px 0;
  padding: 0 4px;
  width: 100%;
}

.filter-tag:hover {
  border-color: var(--spectrum-global-color-static-blue-600);
  color: var(--spectrum-global-color-static-blue-600);
}

.filter-tags {
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.filter-tag-item {
  flex: 1 0 calc(100% - 5px);
  flex-basis: calc(33% - 5px);
  margin: 0 5px 0 0;
  white-space: nowrap;
}

.filter-tags-footer {
  margin: 20px 5px 18px 0;
  text-align: right;
}

.language-picker {
  width: 100%;
}

.language-menu {
  max-height: 200px;
}

.number-of-fonts-slider {
  margin-right: 13px;
  margin-bottom: 10px;
  margin-top: 5px;
}

.properties-filter-list .properties-filter-list-item {
  margin: 0 5px 10px 0;
  width: 100%;
}

@media screen and (min-width: 1280px) {
  .properties-filter-list .properties-filter-list-item {
    width: 48%;
  }
}

svg {
  height: 22px;
  width: 22px;
}

.svg-sprite {
  display: none;
}

.filter-icon-sprite-japanese-ka-ko {
  height: 23px;
  width: 48px;
}


.filter-icon-sprite-default-il-i {
  height: 18px;
  width: 18px;
}

.filter-icon-sprite-default-st-d {
  height: 18px;
  width: 18px;
}

.filter-icon-sprite-default-st-s {
  height: 18px;
  width: 18px;
}

.font-technologies .filter-button {
  padding: 20px;
}

          `;const Y=["ja-JP","ru-RU","zh-CN","zh-TW"];let Q=class extends(Object(f.a)(Object(C.a)(l.e,Object.assign(Object.assign({},R),G)))){constructor(){super(...arguments),this.browseMode=a.Default,this.showPaidFontsSection=!0,this.showPaidFontsChecked=!0,this.languages=[],this.selectedFilters=[],this.selectedLanguage="",this.selectedTags=[],this.tags=[],this.fontsInFamilyMax="",this.fontsInFamilyMin="",this._filterIconSprites=void 0,this._isTagListExpanded=!1}static get styles(){return U}connectedCallback(){super.connectedCallback(),r.e(47).then(r.bind(null,2003)).then((e=>{this._filterIconSprites=e.default}))}render(){return l.a`${this._renderSprites()}<div class="clear-filters-section"><sp-button variant="secondary" quiet @click="${e=>this._handleClearButtonClick(e)}" ?disabled="${!this._isClearButtonEnabled()}">${this.t("filter-sidebar.clear-filters-button.text")}</sp-button></div>${this._renderShowPaidFontsSection()}<sp-accordion class="filter-sections" allow-multiple><sp-accordion-item id="languages" label="${this.t("filter-sidebar.languages.header")}" open>${this._renderLanguages()}</sp-accordion-item>${this._isFontTechnologiesSectionVisible()?l.a`<sp-accordion-item label="${this.t("filter-sidebar.font-technologies.header")}" open>${this._renderFontTechnologyFilters()}</sp-accordion-item>`:""} ${this._isTagsSectionVisible()?l.a`<sp-accordion-item id="tags" label="${this.t("filter-sidebar.tags.header")}" open>${this._renderTags()}</sp-accordion-item>`:""}<sp-accordion-item id="classifications" label="${this.t("filter-sidebar.classification.header")}" open>${this._renderClassifications()}</sp-accordion-item>${this._isPropertiesSectionVisible()?l.a`<sp-accordion-item id="properties" label="${this.t("filter-sidebar.properties.header")}" open>${this._renderNumberOfFontsSlider()} ${this._renderProperties()}</sp-accordion-item>`:""}</sp-accordion>`}_getAllSelectedCount(){let e=this.selectedTags.length+this.selectedFilters.length;return this._isDefaultLanguageSelected()&&(e+=1),this._isFontTechnologySelected()?e+1:e}_getFilterLabelText(e){return this.t(`filter-sidebar.filter-label.${e.slug}`)}_getTagText(e){return e.font&&!Y.includes(this.getLocale())?l.a`<af-display-in-font always-display fontStyle="${e.font.style}" fontWeight="${e.font.weight}" webId="${e.font.webId}" unicodeRange="${e.font.unicodeRange}">${e.label}</af-display-in-font>`:e.label}_handleClearButtonClick(e){e.stopPropagation(),this.dispatchEvent(new x.a)}_renderShowPaidFontsSection(){return this.showPaidFontsSection?l.a`<div class="show-paid-fonts-section"><sp-checkbox class="show-paid-fonts-checkbox" @click="${e=>this._handleShowPaidFontsCheckboxClick(e)}" ?checked="${Object(n.a)(this.showPaidFontsChecked||void 0)}">${this.t("filter-sidebar.show-paid-fonts-checkbox.text")}</sp-checkbox></div>`:l.a``}_handleShowPaidFontsCheckboxClick(e){e.stopPropagation();const t=!e.target.hasAttribute("checked");this.dispatchEvent(new H.a(t))}_handleFilterClick(e,t){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new j.a(t))}_handleLanguageChange(e){e.stopPropagation();const t=e.target.value;this.dispatchEvent(new S.a(t))}_handleKeyDown(e){e.stopPropagation()}_handleNumberOfFontsSliderEvent(e,t){const r=e.target.value;this.dispatchEvent(new L.a(t,r))}_handleTagClick(e,t){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new A.a(t.tag))}_handleTagExpansionClick(e){e.stopPropagation(),this._isTagListExpanded=!this._isTagListExpanded}_handleTechnologyFilterClick(e,t){e.preventDefault(),e.stopPropagation(),this.sendAnalyticsEvent("technology-filter-button-click",{filterTechnologyType:t.key}),this.dispatchEvent(new O.default(t.key))}_isClearButtonEnabled(){return this._getAllSelectedCount()>0}_isDefaultLanguageSelected(){return"all"===this.selectedLanguage}_isFontTechnologySelected(){return!!this.selectedTechnologyFilter}_isFilterSelected(e){return this.selectedFilters.includes(e)}_isPropertiesSectionVisible(){return!this._isFontTechnologySelected()}_isTagSelected(e){return this.selectedTags.includes(e.tag)}_isTagsSectionVisible(){return this.browseMode===a.Default&&!this._isFontTechnologySelected()}_isFontTechnologiesSectionVisible(){return Object(B.isFlagEnabled)("VariableFonts")}_getLabelFromCode(e){const t=this.languages.filter((t=>t.value===Object(C.f)(e)));if(t.length>0)return t[0].label}_renderClassifications(){return l.a`<div class="classifications"><div aria-labelledby="classifications" class="classification-list" role="radiogroup">${function(e){switch(e){case a.Japanese:return w.classification;case a.Korean:return z.classification;case a.SimplifiedChinese:return k.classification;case a.TraditionalChinese:return T.classification;default:return y.classification}}(this.browseMode).map((e=>{const t=`classifications ${e.key}`;return l.a`<div class="classification-list-item">${this._renderFilterButton(e,{labelledBy:t})}<div id="${e.key}" class="filter-button-label">${this._getFilterLabelText(e)}</div></div>`}))}</div></div>`}_renderFilterButton(e,{labelledBy:t,text:r}={}){const a=this._filterIconSprites?`\n      <svg role="presentation" class="filter-icon-sprite-${e.slug}">\n        <use xlink:href="#filter-icon-sprite-${e.slug}"></use>\n      </svg>\n    `:"",s=`/filters?filters=${e.key}`;return l.a`<sp-action-button aria-labelledby="${t}" class="filter-button" data-href="${s}" role="radio" @click="${t=>this._handleFilterClick(t,e.key)}" @keydown="${e=>this._handleKeyDown(e)}" ?checked="${this._isFilterSelected(e.key)}" .selected="${this._isFilterSelected(e.key)}"><div class="filter-button-content">${Object(u.a)(a)} ${r&&l.a`<span class="filter-button-text">${r}</span>`}</div></sp-action-button>`}_renderFilterGroup(e,t,r,a){if(!t)return;const s=`${r}-${a}`;return l.a`<div role="radiogroup" aria-labelledby="${s}" class="filter-button-group"><div class="filter-button-group__filters">${t.map((e=>{const t=`${r} ${s}`;return this._renderFilterButton(e,{labelledBy:t})}))}</div><div id="${s}" class="filter-button-group__label">${this.t(e)}</div></div>`}_renderFontTechnologyFilters(){return l.a`<div class="font-technologies"><overlay-trigger placement="top-start"><span slot="trigger">${y.fontTechnologies.map((e=>this._renderFontTechnologyFilterButton(e)))}</span><sp-tooltip slot="hover-content" tip>${this.t("filter-sidebar.font-technologies.popover")}</sp-tooltip></overlay-trigger></div>`}_renderFontTechnologyFilterButton(e){const t=this._filterIconSprites?`\n      <svg role="presentation" class="filter-icon-sprite-${e.slug}">\n        <use xlink:href="#filter-icon-sprite-${e.slug}"></use>\n      </svg>\n    `:"",r=`/fonts?font_technology=${e.key}`;return l.a`<sp-action-button class="filter-button" data-href="${r}" role="radio" @click="${t=>this._handleTechnologyFilterClick(t,e)}" @keydown="${e=>this._handleKeyDown(e)}" ?checked="${this._isFontTechnologySelected()}" .selected="${this._isFontTechnologySelected()}"><div class="filter-button-content">${Object(u.a)(t)} ${l.a`<span class="filter-button-text">${this.t("filter-sidebar.font-technologies.filter-button")}</span>`}</div></sp-action-button>`}_renderLanguages(){if(!this.languages)return;const e=this.getLocale(),t=Object(C.f)(e),r=this._getLabelFromCode(t);return l.a`<sp-picker aria-labelledby="languages" class="language-picker" label="${this.t("filter-sidebar.languages.select-language-label")}" @change="${e=>this._handleLanguageChange(e)}" @keydown="${e=>this._handleKeyDown(e)}" .value="${this.selectedLanguage}"><sp-menu class="language-menu">${r&&l.a`<sp-menu-item value="${t}">${r}</sp-menu-item>`}<sp-menu-divider></sp-menu-divider>${this.languages.map((e=>l.a`<sp-menu-item value="${e.value}">${e.label}</sp-menu-item>`))}</sp-menu></sp-picker>`}_renderNumberOfFontsSlider(){return l.a`<sp-slider class="number-of-fonts-slider" step="1" label="${this.t("filter-sidebar.fonts-in-family-slider.slider-label")}" min="1" max="${26}" variant="range" .getAriaValueText="${()=>this._getNumberOfFontsSliderLabel()}"><sp-slider-handle @input="${e=>this._handleNumberOfFontsSliderEvent(e,"min")}" slot="handle" name="min" label="Minimum" value="${this.fontsInFamilyMin}" max="next"></sp-slider-handle><sp-slider-handle @input="${e=>this._handleNumberOfFontsSliderEvent(e,"max")}" slot="handle" name="max" label="Maximum" value="${this.fontsInFamilyMax}" min="previous"></sp-slider-handle></sp-slider>`}_renderProperties(){return l.a`<div class="properties"><div class="properties-filter-list">${function(e){switch(e){case a.Japanese:return w.properties;case a.Korean:return z.properties;case a.SimplifiedChinese:return k.properties;case a.TraditionalChinese:return T.properties;default:return y.properties}}(this.browseMode).map(((e,t)=>l.a`<div class="properties-filter-list-item">${this._renderFilterGroup(e.label,e.filters,"properties",t)}</div>`))}</div></div>`}_renderSprites(){if(this._filterIconSprites)return l.a`<div class="svg-sprite">${Object(u.a)(this._filterIconSprites)}</div>`}_renderTags(){return l.a`<div aria-labelledby="tags" class="filter-tags" role="radiogroup">${this._getTagsToDisplay().map((e=>l.a`<div class="filter-tag-item">${this._renderTagButton(e)}</div>`))}</div><div class="filter-tags-footer"><sp-button quiet variant="secondary" @click="${e=>this._handleTagExpansionClick(e)}" @keydown="${e=>this._handleKeyDown(e)}">${this._getExpansionButtonText()}</sp-button></div>`}_renderTagButton(e){const t=`/fonts?tag=${e.tag}`;return l.a`<sp-action-button class="filter-tag" data-href="${t}" role="radio" @click="${t=>this._handleTagClick(t,e)}" @keydown="${e=>this._handleKeyDown(e)}" ?checked="${this._isTagSelected(e)}" .selected="${this._isTagSelected(e)}">${this._getTagText(e)}</sp-action-button>`}_getExpansionButtonText(){return this._isTagListExpanded?this.t("filter-sidebar.tags.show-less"):this.t("filter-sidebar.tags.view-more",{tagCount:this.tags.length-14})}_getNumberOfFontsSliderLabel(){let e=this.fontsInFamilyMax,t=!1,r=!1;return parseInt(this.fontsInFamilyMax,10)>25&&(e="25+",t=!0),this.fontsInFamilyMin===this.fontsInFamilyMax&&(r=!0),r&&t?e:r?this.fontsInFamilyMin.toString():`${this.fontsInFamilyMin} - ${e}`}_getTagsToDisplay(){return this._isTagListExpanded?this.tags:this.tags.slice(0,14)}};Object(o.a)([Object(i.a)()],Q.prototype,"browseMode",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"showPaidFontsSection",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"showPaidFontsChecked",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"languages",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"selectedFilters",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"selectedLanguage",void 0),Object(o.a)([Object(i.a)({type:String})],Q.prototype,"selectedTechnologyFilter",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"selectedTags",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"tags",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"fontsInFamilyMax",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"fontsInFamilyMin",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"_filterIconSprites",void 0),Object(o.a)([Object(i.a)()],Q.prototype,"_isTagListExpanded",void 0),Q=Object(o.a)([Object(c.a)("af-filter-sidebar")],Q)},819:function(e,t,r){"use strict";var a=r(3),s=(r(19),r(0)),o=r(28),l=r(8),c=r(43);r(48);var i=r(256),n=r(7);class u extends CustomEvent{constructor(e,t){super("pagination-change",{detail:{page:e},bubbles:!0,composed:!0}),this.originalEvent=t}preventDefault(){super.preventDefault(),this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),this.originalEvent.stopPropagation()}}u.EVENT_NAME="pagination-change";r(74),r(26),r(11),r(9),r(4),r(2),r(20);var p=s.d`
            .spectrum-Pagination--explicit,
.spectrum-Pagination--listing {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
      flex-direction: row;
  -ms-flex-align: center;
      align-items: center;
}

.spectrum-Pagination-textfield {
  width: var(--spectrum-pagination-textfield-width, var(--spectrum-global-dimension-size-600));
  min-width: var(--spectrum-pagination-textfield-width, var(--spectrum-global-dimension-size-600));
}

[dir="ltr"] .spectrum-Pagination-counter {
  margin-left: var(--spectrum-pagination-counter-margin-left, var(--spectrum-global-dimension-size-65));
}

[dir="rtl"] .spectrum-Pagination-counter {
  margin-right: var(--spectrum-pagination-counter-margin-left, var(--spectrum-global-dimension-size-65));
}

[dir="ltr"] .spectrum-Pagination-prevButton {
  margin-right: var(--spectrum-pagination-page-button-margin-horizontal, var(--spectrum-global-dimension-size-65));
}

[dir="rtl"] .spectrum-Pagination-prevButton {
  margin-left: var(--spectrum-pagination-page-button-margin-horizontal, var(--spectrum-global-dimension-size-65));
}

[dir="ltr"] .spectrum-Pagination-nextButton {
  margin-left: var(--spectrum-pagination-page-button-margin-horizontal, var(--spectrum-global-dimension-size-65));
}

[dir="rtl"] .spectrum-Pagination-nextButton {
  margin-right: var(--spectrum-pagination-page-button-margin-horizontal, var(--spectrum-global-dimension-size-65));
}

[dir="rtl"] .spectrum-Pagination-prevButton .spectrum-Icon,[dir="rtl"]  .spectrum-Pagination-nextButton .spectrum-Icon { transform: matrix(-1, 0, 0, 1, 0, 0) ; }

.spectrum-Pagination-pageButton:hover {
    background-color: var(--spectrum-pagination-page-button-background-color-hover, var(--spectrum-alias-background-color-hover-overlay));
  }

.spectrum-Pagination-pageButton:focus {
    border-color: var(--spectrum-pagination-page-button-border-color-key-focus, var(--spectrum-alias-focus-color));
  }

.spectrum-Pagination-pageButton.is-selected {
    background-color: var(--spectrum-pagination-page-button-background-color-down, var(--spectrum-global-color-gray-800));
    color: var(--spectrum-pagination-page-button-text-color-down, var(--spectrum-global-color-static-white));
  }

.spectrum-Pagination-counter {
  color: var(--spectrum-alias-label-text-color, var(--spectrum-global-color-gray-700));
}

          `,m=s.d`
            nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.separator {
  margin: 0 10px;
}

          `,d={"pagination.next":"Next","pagination.previous":"Previous"};let g=class extends(Object(n.a)(s.e,d)){constructor(){super(...arguments),this.currentPage=1,this.totalPages=0,this.urlParam=null}static get styles(){return[p,m]}get leftSegmentPageCount(){return this.currentPage<=5?6:1}get rightSegmentPageCount(){return this.currentPage>this.totalPages-2?3:1}render(){return s.a`<nav class="spectrum-Pagination spectrum-Pagination--listing"><sp-action-button @click="${e=>this._handlePageButtonClick(this.currentPage-1,e)}" .href="${Object(i.a)(this._getUrlForPage(this.currentPage-1))}" quiet ?disabled="${!this._isPreviousButtonEnabled()}">${this.t("pagination.previous")}</sp-action-button>${this._isSplitNecessary()?this._getSplitPages():this._getSinglePageList()}<sp-action-button @click="${e=>this._handlePageButtonClick(this.currentPage+1,e)}" .href="${Object(i.a)(this._getUrlForPage(this.currentPage+1))}" quiet ?disabled="${!this._isNextButtonEnabled()}">${this.t("pagination.next")}</sp-action-button></nav>`}_getSinglePageList(){return this._getPageButtons(this._getAllPages())}_getSplitPages(){return s.a`${this._getPageButtons(this._getLeftSegmentPages())} ${this._isLeftSegmentSeparatorVisible()?s.a`<div aria-hidden="true">...</div>`:""} ${this._isMiddleSegmentVisible()?this._getPageButtons(this._getMiddleSegmentPages()):""} ${this._isRightSegmentSeparatorVisible()?s.a`<div aria-hidden="true">...</div>`:""} ${this._getPageButtons(this._getRightSegmentPages())}`}_getAllPages(){return Array.from({length:this.totalPages}).map(((e,t)=>t+1))}_getLeftSegmentPages(){return Array.from({length:this.leftSegmentPageCount}).map(((e,t)=>t+1))}_getMiddleSegmentMiddlePage(){return this._getLeftSegmentPages().includes(this.currentPage)||this._getRightSegmentPages().includes(this.currentPage)?Math.floor(this.totalPages/2):this.currentPage}_getMiddleSegmentPages(){const e=this._getMiddleSegmentMiddlePage();let t=[e];return this._getLeftSegmentPages().includes(e-1)||(t=[e-1,...t]),this._getRightSegmentPages().includes(e+1)||(t=[...t,e+1]),t}_getPageButton(e){return s.a`<sp-action-button @click="${t=>this._handlePageButtonClick(e,t)}" .href="${Object(i.a)(this._getUrlForPage(e))}" ?selected="${this._isCurrentPage(e)}" ?disabled="${this._isCurrentPage(e)}" quiet>${e}</sp-action-button>`}_getPageButtons(e){return e.map((e=>this._getPageButton(e)))}_getRightSegmentPages(){const e=Array.from({length:this.rightSegmentPageCount}).map(((e,t)=>this.totalPages-t));return e.reverse(),e}_getUrlForPage(e){if(!this.urlParam)return;const t=new URLSearchParams(window.location.search);return t.set(this.urlParam,e.toString()),`?${t.toString()}`}_handlePageButtonClick(e,t){this.dispatchEvent(new u(e,t))}_isCurrentPage(e){return this.currentPage===e}_isMiddleSegmentVisible(){return this._getMiddleSegmentPages().includes(this.currentPage)}_isNextButtonEnabled(){return this.currentPage<this.totalPages}_isPreviousButtonEnabled(){return this.currentPage>1}_isSplitNecessary(){return this.totalPages>12}_isLeftSegmentSeparatorVisible(){return!this._getRightSegmentPages().includes(this.currentPage)}_isRightSegmentSeparatorVisible(){return!this._getLeftSegmentPages().includes(this.currentPage)}};var b;Object(a.a)([Object(l.a)({type:Number})],g.prototype,"currentPage",void 0),Object(a.a)([Object(l.a)({type:Number})],g.prototype,"totalPages",void 0),Object(a.a)([Object(l.a)({type:String})],g.prototype,"urlParam",void 0),Object(a.a)([(b={passive:!0},Object(c.a)({finisher:(e,t)=>{Object.assign(e.prototype[t],b)}}))],g.prototype,"_handlePageButtonClick",null),g=Object(a.a)([Object(o.a)("af-pagination")],g)},820:function(e,t,r){"use strict";var a=r(3);const s="images-toggle.toggled";class o extends CustomEvent{constructor(e){super(s,{detail:{isChecked:e},bubbles:!0,composed:!0})}}o.EVENT_NAME=s;r(253);var l=r(23),c=r(7),i=(r(19),r(0)),n=r(4),u=r(2),p=r(14),m=(r(69),r(15),r(13),r(11),r(9),r(49),r(20),r(26),{"images-toggle.label":"Images"}),d=i.d`
            .blue-checkbox {
  --spectrum-checkbox-m-box-border-color: var(--spectrum-global-color-static-blue-500);
  --spectrum-checkbox-m-box-border-color-down: var(--spectrum-global-color-static-blue-500);
  --spectrum-checkbox-m-box-border-color-hover: var(--spectrum-global-color-static-blue-500);
  --spectrum-checkbox-m-box-border-color-selected: var(--spectrum-global-color-static-blue-500);
  --spectrum-checkbox-m-box-border-color-selected-down: var(--spectrum-global-color-static-blue-500);
  --spectrum-checkbox-m-box-border-color-selected-hover: var(--spectrum-global-color-static-blue-500);
}

          `;let g=class extends(Object(l.a)(Object(c.a)(n.a,m))){constructor(){super(...arguments),this.checkboxClass="",this.checked=!1}static get styles(){return d}connectedCallback(){this._initEventListeners(),super.connectedCallback()}render(){return i.a`<sp-checkbox @click="${e=>this._handleClick(e)}" .checked="${this.checked}" class="${this.checkboxClass}">${this.t("images-toggle.label")}</sp-checkbox>`}_handleClick(e){this.sendAnalyticsEvent("images-toggle-checkbox-click",{isChecked:!e.target.checked}),this.dispatchEvent(new o(!e.target.checked))}_initEventListeners(){window.addEventListener("sample-text.blur",(()=>{this.checkboxClass=""})),window.addEventListener("sample-text.focus",(()=>{this.checkboxClass="blue-checkbox"}))}};Object(a.a)([Object(u.b)({type:String})],g.prototype,"checkboxClass",void 0),Object(a.a)([Object(u.b)({type:Boolean})],g.prototype,"checked",void 0),g=Object(a.a)([Object(p.a)("af-images-toggle")],g)},821:function(e,t,r){"use strict";var a=r(3),s=r(7),o=(r(19),r(0)),l=r(265);r(759);const c="web-project.checkbox-checked";class i extends CustomEvent{constructor(e){super(c,{detail:e,bubbles:!0,composed:!0})}}i.EVENT_NAME=c;var n=r(4),u=r(2),p=r(14),m=(r(26),r(16),r(9),{"web-project-editor-style-selector.add":"Add","web-project-editor-style-selector.copy-css":"Copy CSS","web-project-editor-style-selector.font":"Font","web-project-editor-style-selector.font-style":"Font Style","web-project-editor-style-selector.font-weight":"Font Weight","web-project-editor-style-selector.preview":"Preview","web-project-editor-style-selector.remove":"Remove"}),d=o.d`
            .web-project-editor-table-head-content-wrapper {
  float: left;
}

.spectrum-Table-checkboxCell {
  width: 6%;
}

@media screen and (max-width: 1279px) {
  .spectrum-Table-checkboxCell {
    width: 11%;
  }
}

.font-name-column {
  width: 20%;
}

@media screen and (max-width: 1279px) {
  .preview-column {
    display: none;
  }
}

.code-font {
  font-family: Source Code Pro, Monaco, monospace;
  font-size: 12px;
}

.font-preview-wrapper {
  font-size: 20px;
  margin-top: -6px;
  max-width: 30vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

          `;let g=class extends(Object(s.a)(n.a,m)){constructor(){super(...arguments),this.textSamples={en:{list:"The quick brown fox jumps over the lazy dog"}},this.variations=[],this.variationIdsSelected=[]}static get styles(){return[l.b,l.a,d]}render(){return o.a`<table class="spectrum-Table spectrum-Table--sizeM web-project-editor-table"><thead class="spectrum-Table-head"><tr><th class="web-project-editor-table-head-cell spectrum-Table-checkboxCell"><div class="web-project-editor-table-head-content-wrapper" data-id="variation-counter">${this.variationIdsSelected.length}/${this.variations.length}</div></th><th class="web-project-editor-table-head-cell font-name-column"><div class="web-project-editor-table-head-content-wrapper">${this.t("web-project-editor-style-selector.font")}</div></th><th class="web-project-editor-table-head-cell preview-column"><div class="web-project-editor-table-head-content-wrapper">${this.t("web-project-editor-style-selector.preview")}</div></th><th class="web-project-editor-table-head-cell"><div class="web-project-editor-table-head-content-wrapper">${this.t("web-project-editor-style-selector.font-weight")}</div></th><th class="web-project-editor-table-head-cell"><div class="web-project-editor-table-head-content-wrapper">${this.t("web-project-editor-style-selector.font-style")}</div></th><th class="web-project-editor-table-head-cell"><div class="web-project-editor-table-head-content-wrapper">${this.t("web-project-editor-style-selector.copy-css")}</div></th></tr></thead><tbody class="spectrum-Table-body">${this.variations.map((e=>this._renderTableRow(e)))}</tbody></table>`}_copyCSS(e){return navigator.clipboard.writeText("font-family: "+e.cssFontStack+";\nfont-weight: "+e.weight+";\nfont-style: "+e.style+";")}_handleCheckboxClick(e){const t=e.target,r=parseInt(t.getAttribute("data-variation-id")||"",10);t.checked?this.variationIdsSelected=this.variationIdsSelected.concat([r]):this.variationIdsSelected=this.variationIdsSelected.filter((e=>e!==r)),window.dispatchEvent(new i({isChecked:t.checked,variationId:r}))}_isCheckedboxChecked(e){return this.variationIdsSelected.includes(e)}_renderTableRow(e){return o.a`<tr class="spectrum-Table-row"><td class="spectrum-Table-cell spectrum-Table-checkboxCell checkbox-column" tabindex="0"><label class="spectrum-Checkbox spectrum-Checkbox--sizeM spectrum-Table-checkbox"><input type="checkbox" aria-label="${this.t("web-project-editor-style-selector."+(this._isCheckedboxChecked(e.id)?"add":"remove"))}" class="spectrum-Checkbox-input" data-variation-id="${e.id}" @click="${this._handleCheckboxClick}" ?checked="${this._isCheckedboxChecked(e.id)}"> <span class="spectrum-Checkbox-box"></span></label></td><td class="spectrum-Table-cell font-name-column" tabindex="0">${e.preferredSubfamilyName}</td><td class="spectrum-Table-cell preview-column checkbox-cell" tabindex="0"><div class="font-preview-wrapper"><af-display-in-font class="font-preview" fontStyle="${e.style}" fontWeight="${e.weight}" webId="${e.familyWebId}" unicodeRange="${this.textSamples[e.defaultLanguage||"en"].unicode_range}">${this.textSamples[e.defaultLanguage||"en"].list}</af-display-in-font></div></td><td class="spectrum-Table-cell code-font" tabindex="0">${e.weight}</td><td class="spectrum-Table-cell code-font" tabindex="0">${e.style}</td><td class="spectrum-Table-cell" tabindex="0"><button aria-label="${this.t("web-project-editor-style-selector.copy-css")}}" class="css-copy-button" @click="${()=>this._copyCSS(e)}"><sp-icon-copy></sp-icon-copy></button></td></tr>`}};Object(a.a)([Object(u.b)({type:Object})],g.prototype,"textSamples",void 0),Object(a.a)([Object(u.b)({type:Array})],g.prototype,"variations",void 0),Object(a.a)([Object(u.b)({type:Array})],g.prototype,"variationIdsSelected",void 0),g=Object(a.a)([Object(p.a)("af-web-project-editor-style-selector")],g)},91:function(e,t,r){"use strict";r.r(t),r.d(t,"fetchCCXFamilyTemplates",(function(){return p})),r.d(t,"fetchCCXSeasonalTemplates",(function(){return u})),r.d(t,"fetchCCXTemplatesFontMetaData",(function(){return m})),r.d(t,"fetchFontMetaDataFromCDN",(function(){return d})),r.d(t,"getCCXOpenFontSpecimenHref",(function(){return i})),r.d(t,"getFamilyOpenHref",(function(){return c}));var a=r(67),s=r(7),o=r(106);r(3),r(26);const l=Object(a.a)()?{APIKey:"TypeKit2",CCHomeUrl:"https://cchome.adobe.io/int/v1/models",CCHomeCDNUrl:"https://uis-cdn.creativecloud.adobe.com/int/v1/models",CCXUrl:"https://express.adobe.com",FontsUrl:"https://fonts.adobe.com"}:{APIKey:"TypeKit2",CCHomeUrl:"https://cchome-stage.adobe.io/int/v1/models",CCHomeCDNUrl:"https://stage-uis-cdn.creativecloud.adobe.com/int/v1/models",CCXUrl:"https://express-stage.adobe.com",FontsUrl:"https://fonts-relstage.adobe.com"};function c(e){return`/fonts/${e}`}function i(e,t){return`${l.CCXUrl}/sp/design/post/new?${["workflow=blank","fallbackThresh=default","requestor=af",`font=${e}`,`fontSpecimen=${t}`].join("&")}`}function n(e,t,r){return new Promise(((a,s)=>{const o=(new Date).getTime();fetch(e).then((t=>{const r=(new Date).getTime();var a,s;return a=e,s=r-o,window.dispatchEvent(new CustomEvent("af-analytics",{detail:{componentName:"ccx-wavelength-api",eventName:"wavelength-api-response-time",url:a,responseTime:s}})),t.json()})).then((e=>{if(200===e.statusCode){const s=e.data.map((e=>({src:e.thumbnail,templateLink:`${l.CCXUrl}/sp/design/post/template/${e.id}?requestor=af`,fonts:e.fonts.map((e=>({name:e.psName,psName:e.psName,textFrame:e.textFrame,familySlug:""}))),templateDimensions:{width:e.size[0],height:e.size[1]},showPremium:e.premium&&!t,showActivationButton:!(e.premium&&r&&!t)})));a(s),"fallbacksUsed"in e&&Object.keys(e.fallbacksUsed).length>0&&g(Object.assign({fallbacksUsed:!0},e.fallbacksUsed))}else"errors"in e?(g({status:e.errors[0].status,message:e.errors[0].title}),s(`[Crossbar]: ${e.errors[0].status} received from API call`)):(g({status:e.statusCode}),s(`[Crossbar]: ${e.statusCode} received from API call`))})).catch((e=>{var t;g({errorName:e.name,errorMessage:e.message,error:e.toString(),errorStack:null===(t=e.stack)||void 0===t?void 0:t.toString()}),s(e)}))}))}function u(e,t,r,a){let c=Object(s.c)().toLowerCase();"ud"===c&&(c="us");const i=[`country=${c}`,`week=${Object(o.a)(new Date)}`,"sort=gs",`offset=${e}`,`limit=${t}`,`api_key=${l.APIKey}`];return n(`${l.CCHomeCDNUrl}/crossbar-templates-v1?${i.join("&")}`,r,a)}function p(e,t,r,a,s){return n(`${l.CCHomeCDNUrl}/crossbar-font-family-v1?${[`font-family=${e}`,`offset=${t}`,`limit=${r}`,`api_key=${l.APIKey}`].join("&")}`,a,s)}function m(e){const t=[],r={};return e.forEach((e=>{e.fonts.forEach((e=>{e.psName in r||(t.push(d(e.psName)),r[e.psName]=!0)}))})),Promise.allSettled(t).then((t=>{const r={};return t.forEach((e=>{if("fulfilled"===e.status){const t=e.value;r[t.postscript_name]=t}})),e.forEach((e=>{e.fonts.forEach((e=>{var t;const a=r[e.psName];a&&(e.familySlug=null===(t=a.family)||void 0===t?void 0:t.slug,e.id=a.id,e.name=a.name)}))})),e}))}function d(e){let t="en";"ja"==Object(s.f)(Object(s.d)())&&(t="ja");const r=`https://apicdn.typekit.net/v1/variations/${e}?locale=${t}&include=full&api_key=${l.APIKey}`;return new Promise(((e,t)=>{fetch(r).then((e=>{if(200===e.status)return e.json();t(`[Crossbar][FontMetadataAPI]: ${e.status} received from API call`)})).then((t=>e(t))).catch((e=>{t(e)}))}))}function g(e){window.dispatchEvent(new CustomEvent("af-analytics",{detail:Object.assign({componentName:"ccx-wavelength-api",eventName:"wavelength-api-call-error"},e)}))}}}]);
//# sourceMappingURL=40-5c295fde1f73e5f75983.chunk.js.map