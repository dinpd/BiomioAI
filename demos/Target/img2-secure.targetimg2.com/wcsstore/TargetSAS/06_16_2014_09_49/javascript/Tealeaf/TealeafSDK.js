/*
 * Copyright ? 1999-2012 TeaLeaf Technology, Inc.
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY TEALEAF ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE DISCLAIMED.
 * IN NO EVENT SHALL TEALEAF BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @fileoverview
 * This is the configuration for the main UI Client Event Capture JavaScript.
 *
 * @version 2012.06.01.1
 *
 */
if (typeof TeaLeaf === "undefined") {
  TeaLeaf = {};
  TeaLeaf.Private = {};
  TeaLeaf.tlStartLoad = new Date();

  if (!TeaLeaf.Configuration) {
    TeaLeaf.Configuration = {
      "tlversion" :                 "2012.06.01.1",

      "tlSetGUID":                  false,
      /* Sample GUID cookie config (only used when tlSetGUID is true) */
      "tlGUIDCookie":               {
                                      name: "TLGUID",
                                      // The following are optional
                                      valueLength: 32,
                                      valueSet: "0123456789ABCDEF",
                                      path: "",
                                      domain: "",
                                      expires: 0,    // minutes; 0 implies a session cookie
                                      secure: false
                                    },

      "tlurl":                      "/TealeafTargetView",
      "tlsecureurl":                "/TealeafTargetView",
      "xhrAsync":                   true,
      "xhrAsyncOnUnload":           true,

      "tlDisableIfInactive":        false,
      "tlActivityTimeout":          5,     // minutes, 0 = disable


      /* Cross-domain configuration (if any) */
      "xd_CommonDomain":            "",
      "xd_iframeID":                "",
      "xd_iframeSrcURL":            "",
      "xd_iframeSrcURLSecure":      ""
    };

  }
}
/*
 * Copyright ? 1999-2012 TeaLeaf Technology, Inc.
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY TEALEAF ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE DISCLAIMED.
 * IN NO EVENT SHALL TEALEAF BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @fileoverview
 * Configuration file for TeaLeafEvent.js
 *
 * @version 2012.06.01.1
 *
 */

if (window.TeaLeaf &&
    ((typeof TeaLeaf.replay === "function") ? !TeaLeaf.replay() : !TeaLeaf.replay) &&
    !TeaLeaf.Event)
{
  TeaLeaf.Event = {};

  TeaLeaf.Event.Configuration = {
            "tlinit"                    : false,
            "tlqueueevents"             : true,
            "tlqueueeventstimer"        : 5000,
            "tlqueuemaxevents"          : 1,
            "tlshowexceptions"          : false,
            "tleventcount"              : 0,
            "tlexceptioncount"          : 0,
            "tlpageid"                  : "", 
            "tlinitflag"                : false,
            "tlusetopqueue"             : false,
            "tllastdwelltime"           : "",
            "tlidoflastvisitedcontrol"  : "",
            "tlcatcherrors"             : true,
            /* tlcatchpopups
             * Set this to 'true' if you want the SDK to report on window.open() status.
             * Used to determine if popup windows were blocked on the client.
             */
            "tlcatchpopups"             : false,
            /* tlCatchAlerts
             * Set this to 'true' if you want the SDK to report on window.alert(),
             * window.confirm() and window.prompt() calls.
             */
            "tlCatchAlerts"             : false,
            "tlignoresendfailure"       : true,
            "tlasync"                   : true,
            "tlvisitorder"              : "",
            "t1970"                     : 0,
		    "tlmaxeventcount"           : 300,
		    "tlmaxeventexception"       : 10,


            tlResolution:[
                {"width": 799,       "height": 599,     "type": 0,  "displayText": "small"},
                {"width": 800,       "height": 600,     "type": 1,  "displayText": "800x600"},
                {"width": 1024,      "height": 760,     "type": 2,  "displayText": "1024x760"},
                {"width": 1280,      "height": 1024,    "type": 3,  "displayText": "1280x1024"},
                {"width": 1000000,   "height": 1000000, "type": 4,  "displayText": "large"}
            ],		             
            //This is the list of HTTP headers that are static and are
		    tlHTTPRequestHeadersSet:[
			    {"tlreqhttpheadername": "X-TeaLeafType",                    "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlEventType()"},
			    {"tlreqhttpheadername": "X-TeaLeafSubType",                 "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlEventSubType()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Url",               "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetUrlPath()"}
		    ],   
		    //This is the list of HTTP headers that have the eval value at the time of POST
		    tlHTTPRequestHeadersEvalInit:[
			    {"tlreqhttpheadername": "X-TeaLeaf-Screen-Res",         "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlResolutionType(screen.width ,screen.height)"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Browser-Res",        "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlResolutionTypeBrowser()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Render",        "tlsethttpheader": true,    "tlreqhttpheadervalue": "(function () { var RENDER_TIME_CAP = 3600000, rt = TeaLeaf.Event.tlGetRenderTime(); return (rt > RENDER_TIME_CAP ? RENDER_TIME_CAP : rt); })()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Objects",       "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetElementCount(\"object\")"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Img-Fail",      "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlBadImageCount()"}
		    ],  
		    tlHTTPRequestHeadersEvalBeforeUnload:[
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Cui-Events",    "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetEventCount()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Cui-Bytes",     "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Request.GetTotalDataLength()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Cui-Exceptions","tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetExceptionCount()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Alert-Count",        "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetAlertCount()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Dwell",         "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetDwellTime()"},
			    {"tlreqhttpheadername": "X-TeaLeaf-Page-Last-Field",    "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetLastVisitedElementID()"},   
			    {"tlreqhttpheadername": "X-TeaLeaf-Visit-Order",        "tlsethttpheader": true,    "tlreqhttpheadervalue": "TeaLeaf.Event.tlGetVisitOrder()"}   
		    ]   
  };
}
/*
 * Copyright ? 1999-2012 TeaLeaf Technology, Inc.
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY TEALEAF ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE DISCLAIMED.
 * IN NO EVENT SHALL TEALEAF BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @fileoverview
 * This is the configuration for TeaLeafEnv.js
 *
 * @version 2012.06.01.1
 *
 */
if (typeof TeaLeaf !== "undefined" &&
    ((typeof TeaLeaf.replay === "function") ? !TeaLeaf.replay() : !TeaLeaf.replay) &&
    !TeaLeaf.Env)
{
	TeaLeaf.Env = {};

    if(typeof TeaLeaf.Env.Configuration == "undefined"){
        TeaLeaf.Env.Configuration = {
            "tlinit" : false,

            tlPlugins : [
		        {"tlIEplugin": "ShockwaveFlash.ShockwaveFlash.1",         "tlpluginname": "Shockwave Flash",      "tlversion":"1.0",    "tlenable": false},    
		        {"tlIEplugin": "MediaPlayer.MediaPlayer.1",               "tlpluginname": "Windows Media Player", "tlversion":"",    "tlenable": false},
		        {"tlIEplugin": "PDF.PdfCtrl.1",                           "tlpluginname": "Adobe Acrobat",        "tlversion":"",     "tlenable": false},
		        {"tlIEplugin": "QuickTimeCheckObject.QuickTimeCheck.1",   "tlpluginname": "QuickTime",            "tlversion":"",     "tlenable": false}
			]
        };
    }
}
/*
 * Copyright ? 1999-2012 TeaLeaf Technology, Inc.
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY TEALEAF ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE DISCLAIMED.
 * IN NO EVENT SHALL TEALEAF BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @fileoverview
 * This is the configuration file for capturing Client Events that
 * happen on the rendered DOM. It proviedes the capabilty to block fields
 * and turn off an on events on the Window and Document object.
 *
 * @version 2012.06.01.1
 *
 */
if (typeof TeaLeaf !== "undefined" &&
    ((typeof TeaLeaf.replay === "function") ? !TeaLeaf.replay() : !TeaLeaf.replay) &&
    !TeaLeaf.Client)
{
    TeaLeaf.Client = {};

    if(typeof TeaLeaf.Client.Configuration == "undefined"){
	    TeaLeaf.Client.Configuration = {
	        "tlinit" : false,
		    "tlpassword"         : 1,		// 1 no capture, 2 don't send value
		    "tlsendfocus"        : false,
		    "tlsendblur"         : true,
		    "attachToFrames"     : true,
		    "pinchOnly"          : true,
		    "tlactiontype"       : "No Submit",
		    "tlcontrolsattached" : false,
		    "tlscanupdate"       : 0,
		    "tlIEhref"           : false,
		    "tlEnableAttr"       : false,
		    "tlDiscardInvalidXPath"  : false,
		    "tlUniqueIDCheckEnabled" : false,
		    "tlScrollOffsetX" : 0,
		    "tlScrollOffsetY" : 0,
		    "tlScrollX" : 0,
		    "tlScrollY" : 0,
		    "tlScrollXDirection" : 0,
		    "tlScrollYDirection" : 0,
		    "tlScrollDirection" : "",
		    "tlScrollDirectionOrig" : "",
		    "tlAndroidOrientation" : 0,


		    //	tlScheduledScan controls whether or not to periodically scan the DOM
		    //	for changes (and tag the appropriate nodes) at the interval defined by
		    //	tlscanupdate
		    tlScheduledScan : false,

		    //  tlExcludeTags controls whether to explicitly exclude or include the
		    //  tags listed in tlNodeTags when attaching to descendent elements using
		    //  TeaLeaf.Client.tlProcessNode(). See TeaLeaf.Client.tlTagNameAllowed()
		    tlExcludeTags : true,

		    //	If events are being cancelled, the document object will not catch events
		    //	since they are not being bubbled up. In order to combat this, we can attach
		    //	to every relevant item (see tlExcludeTags and tlNodeTags), except this may
		    //	result in duplicate events being captured.
		    tlUniversalAttach : false,

		    //  Option to store the xml of queued events on a page unload in a cookie, so
		    //  that it may be sent up with the next page's events. Since this may interfere
		    //  with the existing cookies on the site, this is disabled by default.
		    tlStoreQueueInCookie : false,

        //	This is where input fields can be globally blocked.  A few examples are shown
        //	below. Add or remove fields as appropriate. The parameters are
        //    name and/or id: JavaScript regular expression to match against the name and/or id of the element
        //    className: JavaScript regular expression to match against the CSS class of the element
        //    attributeName: String indicating name of the custom attribute
        //    attributeValue: JavaScript regular expression to match against the value of the custom attribute
        //    caseinsensitive (optional): the above regex match will be case insensitive.
        //    exclude (optional): If true, no value is sent (equivalent to setting the EmptyMask)
        //    mask: Callback function used to mask the element value. This can be a 3rd party custom function.
        //          The following masking functions are provided by default:
        //            PreserveMask(): Preserves the character type and value length according to the tlPrivacyMask setting below.
        //            BasicMask(): Returns a fixed string "XXXXXX" regardless of the element value.
        //            EmptyMask(): Returns the empty string "" regardless of the element value.
        //
        //  Note: The block rules are applied in the order they appear in the tlFieldBlock array.
        tlFieldBlock:[
        /* Sample block rules:
          // Mask all elements that have "private" or "secure" as one of their CSS class using the PreserveMask() function.
          {"className": "private|secure", "caseinsensitive": true,  "exclude": false, "mask": function () { return TeaLeaf.Client.PreserveMask.apply(this, arguments); }}
          // Mask all field names that have "creditcard" or "password" substrings using the PreserveMask() function.
          {"name": "creditcard|password", "caseinsensitive": true,  "exclude": false, "mask": function () { return TeaLeaf.Client.PreserveMask.apply(this, arguments); }}
          // Mask all field ids that match pvt0, pvt1 ... pvt9 using the EmptyMask() function.
          {"id": "^pvt[0-9]$",           "caseinsensitive": true,  "exclude": false, "mask": function () { return TeaLeaf.Client.EmptyMask.apply(this, arguments); }}
          // Paranoid mode: Mask all name and id values with the BasicMask() function.
          {"id": ".*", "name": ".*",     "caseinsensitive": false, "exclude": true,  "mask": function () { return TeaLeaf.Client.BasicMask.apply(this, arguments); }}
          // Mask all elements that have a private attribute "myID" and value of "secret" using the BasicMask() function.
          {"attributeName": "myID", "attributeValue": "secret", "caseinsensitive": true,  "exclude": false, "mask": function () { return TeaLeaf.Client.PreserveMask.apply(this, arguments); }}
        */

	          {"id": "password|logonPassword|logonPasswordVerify|logonPasswordOld|logonOverlayPassword|cardNumber|ccNumber|ccCode|password_tcPinNum", "name": "logonPassword|logonPasswordVerify|logonPasswordOld|cardNumber|cvv|password_tcPinNum", "caseinsensitive": true, "exclude": false, "mask": function () { return TeaLeaf.Client.PreserveMask.apply(this, arguments); } }

        ],

	      // The mask used by the PreserveMask() masking function.
		    tlPrivacyMask: {
		      "upperChar":   "X",
		      "lowerChar":   "x",
		      "numericChar": "9",
		      "symbolChar":  "#"
		    },
		
            // This is the list of events we catch off of the window object
            tlWindowHandlers:[
                {"domevent": "resize",       "load": false,    "tlhandler": "TeaLeaf.Client.tlQueueResize"},
                {"domevent": "focus",        "load": true,     "tlhandler": "TeaLeaf.Client.tlSetFocusTime"},
                {"domevent": "help",         "load": true,     "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "scroll",       "load": false,    "tlhandler": "TeaLeaf.Client.tlSendScroll"},
                {"domevent": "beforeprint",  "load": false,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "afterprint",   "load": false,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "devicemotion",     "load": false,"tlhandler": "TeaLeaf.Client.tlMotionEvent"},
                {"domevent": "deviceorientation","load": false,"tlhandler": "TeaLeaf.Client.tlDeviceOrientationEvent"},
                {"domevent": "orientationchange","load": true, "tlhandler": "TeaLeaf.Client.tlOrientationChangeEvent"},
                {"domevent": "pageshow",     "load": true,     "tlhandler": "TeaLeaf.PageSetup"},
                {"domevent": "pagehide",     "load": true,     "tlhandler": "TeaLeaf.Event.tlUnload"},
                {"domevent": "beforeunload", "load": true,     "tlhandler": "TeaLeaf.Event.tlBeforeUnload"},
                {"domevent": "unload",       "load": false,    "tlhandler": "TeaLeaf.Event.tlUnload"}
            ],

            // This is the list of events we catch off of the document object
            tlDocumentHandlers:[
                {"domevent": "click",        "load": true,     "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "dblclick",     "load": true,     "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "keyup",        "load": true,     "tlhandler": "TeaLeaf.Client.tlQueueKey"},
                {"domevent": "mousedown",    "load": true,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "mouseup",      "load": false,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "mouseover",    "load": false,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "mouseout",     "load": false,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "contextmenu",  "load": false,    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
                {"domevent": "gesturestart", "load": true,    "tlhandler": "TeaLeaf.Client.tlAddGestureEvent"},
                {"domevent": "gesturechange","load": false,    "tlhandler": "TeaLeaf.Client.tlAddGestureEvent"},
                {"domevent": "gestureend",   "load": true,    "tlhandler": "TeaLeaf.Client.tlAddGestureEvent"},
                {"domevent": "touchmove",    "load": false,    "tlhandler": "TeaLeaf.Client.tlAddTouchEvent"},
                {"domevent": "touchstart",   "load": true,    "tlhandler": "TeaLeaf.Client.tlAddTouchEvent"},
                {"domevent": "touchend",     "load": true,    "tlhandler": "TeaLeaf.Client.tlAddTouchEvent"},
                {"domevent": "touchcancel",  "load": false,    "tlhandler": "TeaLeaf.Client.tlAddTouchEvent"},
                // This event is only caught once and turned off.  This is used to
                // detect robots, since a robot will never have mouse movement.
                {"domevent": "mousemove",    "load": false,    "tlhandler": "TeaLeaf.Client.tlUserMovement"}
            ],

		    tlSingleAttach:[
			    {"domelementID": "",    "domevent": "mousedown",    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
			    {"domelementID": "",    "domevent": "mouseup",      "tlhandler": "TeaLeaf.Client.tlAddEvent"},
			    {"domelementID": "",    "domevent": "mouseover",    "tlhandler": "TeaLeaf.Client.tlAddEvent"},
			    {"domelementID": "",    "domevent": "mouseout",     "tlhandler": "TeaLeaf.Client.tlAddEvent"}
		    ],

            tlAttributeCapture:[
                {"tltagname":"a", "tlattributename":"href", "tlevent":"click"},
                {"tltagname":"button", "tlattributename":"value", "tlevent":"click"}
            ],
            

            tlIDBlackList:[
                /* Insert blacklist strings (JavaScript regular expressions) as a comma
                 * separated list here. Leave this empty for default behavior.
                 *
                 * WARNING: Use the blacklist with caution as any id that is matched by
                 * the blacklist will be ignored!
                 * Example:
                "random",
                "jQuery",
                "^gwt",
                "^GWT"
                */
            ],

            tlIDWhiteList:[
                /* Insert whitelist strings (JavaScript regular expressions) as a comma
                 * separated list here. Leave this empty for default behavior.
                 *
                 * WARNING: Use the whitelist with caution as any id that is NOT matched by
                 * the whitelist will be ignored!
                 * Example:
                "static$",
                "^unique"
                */
            ],

		    /*  tlNodeTags by default includes a list of tag names that are "unimportant"
		     *  or not rendered. The associated true/false value is used in conjunction with
		     *  tlExcludeTags - e.g. if tlExcludeTags is true and a node tag is true, it will
		     *  be excluded; if tlExcludeTags is true and a node tag is false, the tag will be
		     *  included. Similarly if tlExcludeTags is false (meaning to explicitly include the
		     *  listed node tags, those with "true" with be excluded.
		     */
		    tlNodeTags : {
		        "APPLET"    : true,
		        "ATTRIBUTE" : true,
			"B"	    : true,
		        "BASE"      : true,
			"BODY"	    : true,
		        "BR"        : true,
		        "CENTER"    : true,
		        "COL"       : true,
		        "COLGROUP"  : true,
		        "COMMENT"   : true,
			"DIV"	    : true,
		        "DEFAULT"   : true,
		        "DEL"       : true,
		        "EVENT"     : true,
		        "FONT"      : true,
			"FORM"	    : true,
			"HEAD"	    : true,
		        "HISTORY"   : true,
		        "HR"        : true,
		        "HTML"      : true,
		        "I"         : true,
		        "INS"       : true,
		        "LINK"      : true,
		        "MAP"       : true,
		        "META"      : true,
		        "NAMESPACE" : true,
		        "NAVIGGATOR" : true,
		        "NOBR"      : true,
		        "OPTION"    : true,
		        "P"         : true,
		        "PARAM"     : true,
		        "S"         : true,
		        "SCRIPT"    : true,
		        "SMALL"     : true,
		        "STRIKE"    : true,
		        "STRONG"    : true,
		        "STYLE"     : true,
		        "SUB"       : true,
		        "SUP"       : true,
		        "TH"        : true,
		        "TITLE"     : true,
		        "THEAD"     : true,
		        "TFOOT"     : true,
		        "TR"        : true,
		        "U"         : true
		    },

		    /*  tlSpecialChildNodeTags represents tags with a special
		     *  situation where the event that fires is attached to a
		     *  non-visual item that is inside the actual UI element.
                 *  Example would be a menu with a <nobr> tag inside to
                 *  keep the visual text of the menu on one line. The <nobr>
                 *  fires the event when we really want the parent menu.
		     */

		    tlSpecialChildNodeTags : {
		        "NOBR" : true,
		        "P"    : true
		    }
	    };
	    	
	    TeaLeaf.Client.Configuration.tlIdCounter = [];
    }
}



if(typeof TeaLeaf!=="undefined"&&((typeof TeaLeaf.replay==="function")?!TeaLeaf.replay():!TeaLeaf.replay)&&TeaLeaf.Configuration&&!TeaLeaf.setupComplete){TeaLeaf.setupComplete=true;if(!TeaLeaf.tlBrowser){TeaLeaf.tlBrowser={UNKNOWN:true}}if(!TeaLeaf.$C){TeaLeaf.$C=function(a){return a}}if(!Array.prototype.push){Array.prototype.stackEnd=0;Array.prototype.push=function(a){this[this.stackEnd]=a;this.stackEnd++}}if(!Array.prototype.pop){Array.prototype.pop=function(){this.stackEnd--;return this[this.stackEnd]}}TeaLeaf.trim=function(a){if(!a||!a.toString){return""}return a.toString().replace(/^\s+|\s+$/g,"")};TeaLeaf.ltrim=function(a){if(!a||!a.toString){return""}return a.toString().replace(/^\s+/,"")};TeaLeaf.rtrim=function(a){if(!a||!a.toString){return""}return a.toString().replace(/\s+$/,"")};TeaLeaf.extend=function(b,c){var a;if(!c||typeof c!=="object"){c={}}if(!b||typeof b!=="object"){return c}for(a in b){if(b.hasOwnProperty(a)){if(typeof b[a]!=="object"||b[a]===null){c[a]=b[a]}else{c[a]=(Object.prototype.toString.call(b[a])==="[object Array]")?[]:{};TeaLeaf.extend(b[a],c[a])}}}return c};TeaLeaf.serializeEventsToXML=(function(){var b=1,a=function(d,k){var e,g=[],h=0,j,c=[],f;if(!d||typeof k!=="object"){return""}d=TeaLeaf.Event.tlFormatXMLName(d);c.push("<"+d);for(j in k){if(!k.hasOwnProperty(j)||k[j]===f||k[j]===""||k[j]===null){continue}if(typeof k[j]==="object"){g.push(a(j,k[j]))}else{c.push(TeaLeaf.Event.tlFormatXMLName(j)+'="'+TeaLeaf.Event.tlFormatXMLValue(k[j].toString())+'"')}}h=g.length;if(h){c.push(">");for(e=0;e<h;e++){c.push(g[e])}c.push("</"+d+">")}else{c.push("/>")}return c.join(" ")};return function(e){var f,c=TeaLeaf.Event.tlGetPageId(),d=[];d.push('<ClientEventSet PostTimeStamp="'+(new Date()).getTime()+'">');while(!e.isEmpty()){f=e.dequeue();if(typeof f!=="object"){continue}f.count=b++;f.PageID=c;d.push(a("ClientEvent",f))}d.push("</ClientEventSet>");return d.join("\n")}}());TeaLeaf.XHRFactory=(function(){var a,b;b=30000;a=function(c){if((c>=200&&c<300)||c===304){return true}return false};return{createXHRObject:function(){var d,c,g;c=[function(){return new XMLHttpRequest()},function(){return new ActiveXObject("Msxml2.XMLHTTP.6.0")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];for(d=0;d<c.length;d++){try{g=c[d]()}catch(f){continue}if(g){this.createXHRObject=c[d];return g}}return null},xhrRequest:function(h,k,c,j,n,l,m){var f,d;if(!h||!k){return null}h=h.toUpperCase();if(!m){m=this.createXHRObject()}if(!m){return null}if(n){m.onreadystatechange=function(){var i,q;try{switch(m.readyState){case 0:break;case 1:break;case 2:if(l&&l.loaded){try{i=m.status;q=m.statusText}catch(p){if(!i){i=0}if(!q){q="None"}}finally{l.loaded(i,q)}}break;case 3:break;case 4:TeaLeaf.XHRFactory.deleteXHRObj(m);if(a(m.status)){if(l&&l.success){l.success(m.responseText,m.responseXML)}}else{if(l&&l.failure){l.failure(m.status,m.statusText)}}break;default:break}}catch(o){}}}m.open(h,k,n);if(c){for(f=0;f<c.length;f++){m.setRequestHeader(c[f].name,c[f].value)}}if(h!=="POST"||!j){j=null}if(n){try{d=setTimeout(function(){TeaLeaf.XHRFactory.deleteXHRObj(m)},b);m.timeoutID=d}catch(g){}}m.send(j);return m},deleteXHRObj:function(c){c.onreadystatechange=function(){};if(c&&c.readyState!==4){if(c.abort){c.abort()}}if(c.timeoutID){clearTimeout(c.timeoutID);c.timeoutID=null}}}}());TeaLeaf.Queue=function(){if(!(this instanceof TeaLeaf.Queue)){return new TeaLeaf.Queue()}this._q=[];this.size=0};TeaLeaf.Queue.prototype={enqueue:function(a){if(typeof a==="undefined"){return this.size}this.size=this._q.push(a);return this.size},dequeue:function(){var a=this._q.shift();this.size=this._q.length;return a},isEmpty:function(){return !this.size}};TeaLeaf.eventQ=new TeaLeaf.Queue();TeaLeaf.Request=function(){var b,c,d,a;b=c=a=null;d="POST";this.getUrl=function(){var i,g,f,h,e;if(a){return a}i=TeaLeaf.Configuration;h=window.location;e=h.protocol;f=e+"//"+h.host;if(e==="EverestLoginViewc534.html"){g=i.tlurl}else{g=i.tlsecureurl}if(g.substr(0,1)==="https://www-secure.target.com/"){f+=g}else{f+=h.pathname.substr(0,h.pathname.lastIndexOf("https://www-secure.target.com/")+1)+g}return f};this.setUrl=function(e){a=e};this.getMethod=function(){return d};this.setMethod=function(e){d=e};this.getData=function(){return b};this.setData=function(e){var f;b=e;if(b){f=TeaLeaf.Request.totalDataLength||0;f+=b.length;TeaLeaf.Request.totalDataLength=f}};this.getHeaders=function(){return c};this.setHeaders=function(e){c=e};this.clear=function(){b=c=a=null}};TeaLeaf.Request.prototype={send:function(i){var a,c,b,d,h,g;h=TeaLeaf.Configuration;if(!h.xd_iframeID){g=TeaLeaf.XHRFactory.xhrRequest(this.getMethod(),this.getUrl(),this.getHeaders(),this.getData(),h.xhrAsync,i);if(!g){if(i&&i.failure){i.failure(0,"XHR request failed!")}return}}else{try{a=document.getElementById(h.xd_iframeID);if(!a||!a.contentWindow){if(i&&i.failure){i.failure(0,"Could not retrive cross-domain iframe target!")}return}c=a.contentWindow;if(c.postMessage&&window.JSON&&0){}else{d=c.TeaLeaf;if(d&&d.Request){b=new d.Request();b.clear();this.setUrl(b.getUrl());b.setHeaders(this.getHeaders());b.setData(this.getData());b.send(i)}}}catch(f){if(i&&i.failure){i.failure(0,(f.name?(f.name+": "+f.message):f.toString()))}return}}}};TeaLeaf.Request.GetTotalDataLength=function(){var a;a=TeaLeaf.Request.totalDataLength||0;return a};TeaLeaf.sendData=function(d,g){var b=window.TeaLeaf,f,e,c,a;if(!d){return -1}g=g||"text/plain";c=new b.Request();if(!c){return -1}c.clear();c.setData(d);a="ClientEvent";e=[{name:"X-TeaLeaf",value:a},{name:"Content-Type",value:g}];e=e.concat(b.Event.tlGetHTTPHeaders(b.Event.Configuration.tlHTTPRequestHeadersSet));if(!b.initHeadersSent){e=e.concat(b.Event.tlGetHTTPHeaders(b.Event.Configuration.tlHTTPRequestHeadersEvalInit));b.initHeadersSent=true}if(b.Event.SendUnloadHeaders&&!b.Event.UnloadHeadersSent){e=e.concat(b.Event.tlGetHTTPHeaders(b.Event.Configuration.tlHTTPRequestHeadersEvalBeforeUnload));b.Event.UnloadHeadersSent=true}c.setHeaders(e);f={loaded:function(h,i){if(b.tlGetCookieValue("tlQueuedXML")){b.tlEraseCookie("tlQueuedXML")}},failure:function(h,i){if(h<200&&!b.Event.Configuration.tlignoresendfailure){b.Event.Configuration.tlignoresendfailure=true;b.Event.tlErrorHandler("XHR failure - Status "+h+": "+i,c.getUrl())}},success:function(h,i){b.Event.Configuration.tlignoresendfailure=false}};b.Event.Configuration.tlignoresendfailure=true;c.send(f);return 0};TeaLeaf.makeRandomString=function(d,c){var b,a,e;if(!d||d<=0){return}if(!c){c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@$-"}e="";for(b=0;b<d;b++){a=Math.floor(Math.random()*c.length);e+=c.charAt(a)}return e};TeaLeaf.getNodeType=function(b){var c,a;if(!b){return""}c=b.nodeName?b.nodeName.toLowerCase():"";a="";if(c==="input"||c==="object"||c==="script"){a=b.type?b.type.toLowerCase():""}return a};TeaLeaf.tLoadObjs=[];TeaLeaf.addOnLoad=function(b,a){if(arguments.length===1){TeaLeaf.tLoadObjs.push(b)}else{if(arguments.length>1){TeaLeaf.tLoadObjs.push(b[a])}}};TeaLeaf.tlSetCookie=function(b,d,a,f,c,e){if(!b){return}document.cookie=b+"="+d+(a?(";expires="+a.toUTCString()):"")+";path="+(f||"/")+(c?(";domain="+c):"")+(e?";secure":"")};TeaLeaf.tlGetCookieValue=function(a){var b,g,d,e,f;f=a+"=";e=null;d=document.cookie.split(";");for(b=0;b<d.length;b++){g=TeaLeaf.ltrim(d[b]);if(g.indexOf(f)===0){e=g.substring(f.length,g.length);break}}return e};TeaLeaf.tlEraseCookie=function(b){var a;a=new Date(1970,1,1);TeaLeaf.tlSetCookie(b,"",a)};TeaLeaf.tlBrowserIsIE=function(){var a;a=TeaLeaf.tlBrowser;if(a){return !!a.MSIE}return false};TeaLeaf.tlBrowserIsMozilla=function(){var a;a=TeaLeaf.tlBrowser;if(a){return !!a.MOZILLA}return false};TeaLeaf.tlBrowserIsWebKit=function(){var a;a=TeaLeaf.tlBrowser;if(a){return !!a.WEBKIT}return false};TeaLeaf.tlBrowserIsAndroid=function(){var a;a=TeaLeaf.tlBrowser;if(a){return !!a.ANDROID}return false};TeaLeaf.tlBrowserIsOpera=function(){var a;a=TeaLeaf.tlBrowser;if(a){return !!a.OPERA}return false};TeaLeaf.tlBrowserIsUnknown=function(){var a;a=TeaLeaf.tlBrowser;if(a){return !!a.UNKNOWN}return false};(function(){var a=TeaLeaf,i=a.Client,e=a.Configuration,f=a.Event,c=null,g=true,b=false,h=f?f.Configuration.tlmaxeventcount:300,d=false;a.tlDisable=function(){g=false;if((d||e.tlDisableIfInactive)&&!b){try{f.tlFlushQueue(true);i.tlDetachFromAllControls();TeaLeaf.Event.tlRemoveHandler(window,"beforeunload",TeaLeaf.Event.tlBeforeUnload,false);TeaLeaf.Event.tlRemoveHandler(window,"unload",TeaLeaf.Event.tlUnload,false)}catch(j){}b=true}};a.activitySinceDisabled=function(){return g};a.tlKeepAlive=function(){if(c){window.clearTimeout(c);c=null}if(d||a.Event.getEventCount()>=h){d=true;a.tlDisable();a.tlKeepAlive=function(){};return}if(!b&&e.tlActivityTimeout){c=window.setTimeout(function(){a.tlDisable()},(e.tlActivityTimeout*60000))}if(!g){g=true}}}());TeaLeaf.PageSetup=function(h){var f,n,c,j,m,b,d,l,g,a;if(document.readyState&&document.readyState!=="complete"){return}d=TeaLeaf;l=d.Configuration;g=l.tlGUIDCookie;if(d.PageSetup.Complete){return}d.PageSetup.Complete=true;d.Event.UnloadHeadersSent=false;d.unloadSent=false;if(d.PageSetup.Cleanup){d.PageSetup.Cleanup()}d.initialOrientation=window.orientation||0;d.tlBrowser.UNKNOWN=false;a=navigator.userAgent.toLowerCase();if(/opera|presto/i.test(a)){d.tlBrowser.OPERA=true}else{if(/android/i.test(a)){d.tlBrowser.ANDROID=true}else{if(/(apple)?webkit|safari|chrome/i.test(a)){d.tlBrowser.WEBKIT=true}else{if(/msie|trident/i.test(a)){d.tlBrowser.MSIE=true}else{if(/mozilla|gecko|firefox/i.test(a)){d.tlBrowser.MOZILLA=true}else{d.tlBrowser.UNKNOWN=true}}}}}if(l.xd_CommonDomain){try{document.domain=l.xd_CommonDomain}catch(h){}}if(l.xd_iframeID){try{j=document.getElementById(l.xd_iframeID);if(!j){m=((window.location.protocol==="EverestLoginViewc534.html")?l.xd_iframeSrcURL:l.xd_iframeSrcURLSecure);if(m){j=document.createElement("IFRAME");if(j){j.id=l.xd_iframeID;j.src=m;j.style.display="none";j.style.visibility="hidden";document.body.appendChild(j)}}}}catch(k){}}if(l.tlSetGUID){if(!g||!g.name){}else{if(!g.valueLength){g.valueLength=32}if(!g.valueSet){g.valueSet="0123456789ABCDEF"}n=d.tlGetCookieValue(g.name);if(!n){b=new Date();n=d.makeRandomString(g.valueLength,g.valueSet);c=g.expires?new Date(b.getTime()+g.expires*60*1000):null;d.tlSetCookie(g.name,n,c,g.path,g.domain,g.secure)}}}for(f=0;f<d.tLoadObjs.length;f++){d.tLoadObjs[f]()}d.EndLoad=new Date()};if(document.readyState==="complete"){TeaLeaf.PageSetup()}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",TeaLeaf.PageSetup,false);window.addEventListener("load",TeaLeaf.PageSetup,false);TeaLeaf.PageSetup.Cleanup=function(){var a;a=TeaLeaf;document.removeEventListener("DOMContentLoaded",a.PageSetup,false);window.removeEventListener("load",a.PageSetup,false)}}else{if(document.attachEvent){document.attachEvent("onreadystatechange",TeaLeaf.PageSetup);window.attachEvent("onload",TeaLeaf.PageSetup);TeaLeaf.PageSetup.Cleanup=function(){var a;a=TeaLeaf;document.detachEvent("onreadystatechange",a.PageSetup);window.detachEvent("onload",a.PageSetup)}}else{if(typeof window.onload==="function"){TeaLeaf.OnLoad=window.onload}else{TeaLeaf.OnLoad=null}window.onload=function(){var a;a=TeaLeaf;a.PageSetup();window.onload=a.OnLoad;if(a.OnLoad){a.OnLoad()}}}}}}if(window.TeaLeaf&&((typeof TeaLeaf.replay==="function")?!TeaLeaf.replay():!TeaLeaf.replay)&&TeaLeaf.Event&&!TeaLeaf.Event.setupComplete){TeaLeaf.Event.setupComplete=true;TeaLeaf.Event.tlQueuedXML="";TeaLeaf.Event.tlWindowObjects=[{tlWindowName:"",tlWindowObject:""}];TeaLeaf.Event.queuedEventTypes={};(function(){var a=0;TeaLeaf.Event.setEventCount=function(b){if(typeof b==="number"){a=b}return a};TeaLeaf.Event.getEventCount=function(){return a}}());TeaLeaf.Event.createBaseEvent=function(a,c){var b;b={type:(a?a.toString():null),subType:(c?c.toString():null),timeDuration:0};return b};TeaLeaf.Event.createExceptionEvent=(function(){var a;a=TeaLeaf.Event.createBaseEvent(TeaLeaf.$C("INFO"),TeaLeaf.$C("EXCEPTION"));return function(d,c,b){var f;f=TeaLeaf.extend(a,{message:d,url:c,line:b});f.timeDuration=TeaLeaf.Event.tlDateDiff(new Date());TeaLeaf.Event.queuedEventTypes.EXCEPTION=true;return f}}());TeaLeaf.Event.createCustomEvent=function(c,a){var b;b=TeaLeaf.Event.createBaseEvent("UIEventAppInfo",c);b.timeDuration=TeaLeaf.Event.tlDateDiff(new Date());TeaLeaf.Event.queuedEventTypes.CUSTOM=true;return TeaLeaf.extend(a,b)};TeaLeaf.Event.createPerformanceEvent=function(b,a){var c;c=TeaLeaf.Event.createBaseEvent("PERFORMANCE",b);c.timeDuration=TeaLeaf.Event.tlDateDiff(new Date());TeaLeaf.Event.queuedEventTypes.PERFORMANCE=true;return TeaLeaf.extend(a,c)};TeaLeaf.Event.createGuiEvent=function(d,c){var b=window.TeaLeaf,a;a=b.Event.createBaseEvent("GUI",d);a.timeDuration=b.Event.tlDateDiff(new Date());b.Event.queuedEventTypes.GUI=true;return b.extend(c,a)};TeaLeaf.Event.tlGetTeaLeafXEvent=function(){var a=TeaLeaf.$C("ClientEvent");return a};TeaLeaf.Event.tlEventType=function(){var b,c="",a;if(typeof TeaLeaf.Event.queuedEventTypes!=="object"){return""}a=TeaLeaf.Event.queuedEventTypes;for(b in a){if(a.hasOwnProperty(b)){c+=b+"; "}}TeaLeaf.Event.queuedEventTypes={};return c};TeaLeaf.Event.tlEventSubType=function(){var a;a=TeaLeaf.Event.SetSubType;TeaLeaf.Event.SetSubType="";return a};TeaLeaf.Event.tlGetUrlPath=function(){var a=window.location.pathname;return a};TeaLeaf.Event.tlGetJSVersion=function(){return TeaLeaf.Configuration.tlversion};TeaLeaf.Event.tlResolutionType=function(d,a){var c,b=TeaLeaf.Event.Configuration.tlResolution;for(c=0;c<b.length;c++){if(d<=b[c].width||a<=b[c].height){return b[c].type}}return b[b.length-1].type};TeaLeaf.Event.tlResolutionTypeBrowser=function(){var c,d,b=0,a=0;if(window.innerWidth){b=window.innerWidth;a=window.innerHeight}else{if(document.documentElement&&document.documentElement.clientWidth){b=document.documentElement.clientWidth;a=document.documentElement.clientHeight}else{if(document.body&&document.body.clientWidth){b=document.body.clientWidth;a=document.body.clientHeight}else{c=document.getElementsByTagName("body");if(c.length>0){b=c[0].clientWidth;a=c[0].clientHeight}}}}d=TeaLeaf.Event.tlResolutionType(b,a);return d};TeaLeaf.Event.tlGetRenderTime=function(){return TeaLeaf.Event.PageLoadMilliSecs};TeaLeaf.Event.tlGetElementCount=function(a){return document.getElementsByName(a).length};TeaLeaf.Event.tlBadImageCount=function(){var c,e,d,a,b;e=0;d=document.images;b=d.length;for(c=0;c<b;c++){a=d[c];if((!a)||(typeof a.complete==="boolean"&&!a.complete)||(typeof a.naturalWidth!=="undefined"&&a.naturalWidth===0)){e++;continue}}return e};TeaLeaf.Event.tlFlashSend=function(c,a,k,d){var b=window.TeaLeaf,g,f,e=b.Event.createBaseEvent(c,a),h=k.split(d);e.timeDuration=b.Event.tlDateDiff(new Date());for(g=0,f=h.length-1;g<f;g+=2){e[h[g]]=h[g+1]}b.eventQ.enqueue(e);b.tlKeepAlive()};TeaLeaf.Event.tlShowFlashDebug=function(a,d){var c,b;d+="<BR>";for(c=0;c<TeaLeaf.Event.tlWindowObjects.length;c++){if(TeaLeaf.Event.tlWindowObjects[c].tlWindowName===a){if(TeaLeaf.Event.tlWindowObjects[c].tlWindowObject.closed){TeaLeaf.Event.tlWindowObjects[c].tlWindowObject=window.open("",a,"width=600,height=300,scrollbars=yes,resizable=yes")}TeaLeaf.Event.tlWindowObjects[c].tlWindowObject.document.writeln(d.fontsize(2));TeaLeaf.Event.tlWindowObjects[c].tlWindowObject.scrollTo(0,50000);return}}b=window.open("",a,"width=600,height=300,scrollbars=yes,resizable=yes");TeaLeaf.Event.tlWindowObjects.push({tlWindowName:a,tlWindowObject:b});b.document.writeln(d.fontsize(2))};TeaLeaf.Event.tlSetEventCount=function(a){TeaLeaf.Event.Configuration.tleventcount+=a};TeaLeaf.Event.tlGetEventCount=function(){return TeaLeaf.Event.Configuration.tleventcount};TeaLeaf.Event.tlGetExceptionCount=function(){return(TeaLeaf.Event.Configuration.tlcatcherrors?TeaLeaf.Event.Configuration.tlexceptioncount:null)};TeaLeaf.Event.tlGetDwellTime=function(){return TeaLeaf.Event.tlDateDiff(TeaLeaf.Event.Configuration.tllastdwelltime)};TeaLeaf.Event.tlGetLastVisitedElementID=function(){return TeaLeaf.Event.Configuration.tlidoflastvisitedcontrol};TeaLeaf.Event.tlDateDiff=function(c,b){var a=TeaLeaf.tlStartLoad.getTime();c=c||a;b=b||a;return Math.abs(c-b)};TeaLeaf.Event.tlGetVisitOrder=function(){return TeaLeaf.Event.Configuration.tlvisitorder};TeaLeaf.Event.tlFormatXMLValue=function(a){if(a&&typeof a==="string"){if(a.replace){return a.replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return a}return""};TeaLeaf.Event.tlGetHTTPHeaders=function(tlheaderconfig){var i,headers,value;headers=[];for(i=0;i<tlheaderconfig.length;i++){if(tlheaderconfig[i].tlsethttpheader){value=eval(tlheaderconfig[i].tlreqhttpheadervalue);if(value){headers.push({name:tlheaderconfig[i].tlreqhttpheadername,value:value})}}}return headers};TeaLeaf.Event.tlGetPageId=function(){if(TeaLeaf.Event.Configuration.tlpageid){return TeaLeaf.Event.Configuration.tlpageid}if(window.TeaLeaf_PageID){TeaLeaf.Event.Configuration.tlpageid=TeaLeaf_PageID;return TeaLeaf.Event.Configuration.tlpageid}TeaLeaf.Event.Configuration.tlpageid="ID"+TeaLeaf.tlStartLoad.getHours()+"H"+TeaLeaf.tlStartLoad.getMinutes()+"M"+TeaLeaf.tlStartLoad.getSeconds()+"S"+TeaLeaf.tlStartLoad.getMilliseconds()+"R"+Math.random();return TeaLeaf.Event.Configuration.tlpageid};TeaLeaf.Event.tlAddHandler=function(a,f,c,b){try{if(!a){return}if(a.addEventListener){a.addEventListener(f,c,b)}else{if(a.attachEvent){a.attachEvent("on"+f,c)}}}catch(d){}};TeaLeaf.Event.tlRemoveHandler=function(a,f,c,b){try{if(!a){return}if(a.removeEventListener){a.removeEventListener(f,c,b)}else{if(a.detachEvent){a.detachEvent("on"+f,c)}}}catch(d){}};TeaLeaf.Event.tlFlushQueue=(function(){var c,a=1,b=(typeof TeaLeaf.Event.Configuration.jsonSerializer==="function")?true:false;c=b?"application/json":"text/xml";return function(g){var d=window.TeaLeaf,f={messageVersion:"1.0.0.0",serialNumber:a,sessions:[{id:d.Event.tlGetPageId(),startTime:d.tlStartLoad.getTime(),timezoneOffset:d.tlStartLoad.getTimezoneOffset(),messages:[],meta:{libVersion:d.Event.tlGetJSVersion(),page:window.location.href,windowId:d.Env.getWindowId(),screen:{width:window.screen.width,height:window.screen.height,orientation:d.initialOrientation}}}]},h=d.eventQ.size,e="";if(d.eventQ.isEmpty()){return}g=g||!d.Event.Configuration.tlqueueevents;if(!g&&h<d.Event.Configuration.tlqueuemaxevents){return}if(b){while(!d.eventQ.isEmpty()){f.sessions[0].messages.push(d.eventQ.dequeue())}e=d.Event.Configuration.jsonSerializer(f)}else{e=d.serializeEventsToXML(d.eventQ)}d.Event.tlSetEventCount(h);d.sendData(e,c);a+=1}}());TeaLeaf.Event.tlGetAlertCount=function(){var b,c,a;b=TeaLeaf;c=b.Event;a=c.getAlertCount?c.getAlertCount():0;return a};TeaLeaf.Event.tlErrorHandler=function(c,b,a){try{var f=TeaLeaf.Event.Configuration,g;f.tlexceptioncount+=1;if(f.tlexceptioncount>f.tlmaxeventexception){return false}if((typeof c!=="string")&&!b){return false}a=a||0;g=TeaLeaf.Event.createExceptionEvent(c,b,a);TeaLeaf.eventQ.enqueue(g)}catch(d){}return false};(function(){var d,f,a,c,g,e,b;d=TeaLeaf;f=d.Configuration;a=d.Client;c=a.Configuration;g=d.Event;e=g.Configuration;b=function(i){var k,j=new Date(),h;if(d.unloadSent){return}if(!d.activitySinceDisabled()){return}if(c.tlIEhref){c.tlIEhref=false;return}a.tlSendKeys();a.tlSendResize();a.tlSendScroll(null,true);if(!f.xhrAsyncOnUnload){f.xhrAsync=false}if(c.tlStoreQueueInCookie){j.setTime(j.getTime()+300000);k=g.tlQueuedXML.replace(/(\r|\n)/g,"").replace(/;/g,"%3B");d.tlSetCookie("tlQueuedXML",k,j,"/")}e.tllastdwelltime=new Date();g.queuedEventTypes.PERFORMANCE=true;if(!g.SetSubType){g.SetSubType=i}else{g.SetSubType+="; "+i}g.SendUnloadHeaders=true;h=TeaLeaf.Event.createPerformanceEvent(i,{MouseMove:a.tlHasUserMovement?"True":"False",Action:c.tlactiontype,VisitOrder:e.tlvisitorder,Alerts:g.tlGetAlertCount()});d.eventQ.enqueue(h);g.tlFlushQueue(true);setTimeout(function(){d.unloadSent=false;f.xhrAsync=true;g.SendUnloadHeaders=false},1000);d.PageSetup.Complete=false;d.unloadSent=true};g.tlBeforeUnload=function(){b(d.$C("BEFOREUNLOAD"))};g.tlUnload=function(h){if(!h.persisted){a.tlDetachFromAllControls()}b(d.$C("UNLOAD"))}}());TeaLeaf.Event.EventSetup=function(){var a,c,b;a=TeaLeaf;c=a.Event;b=c.Configuration;if(b.tlCatchAlerts){(function(){var d,e,g,f;d=0;if(window.alert&&window.alert.apply){e=window.alert;window.alert=function(){var h;h=e.apply(window,arguments);d++;return h}}if(window.confirm&&window.confirm.apply){g=window.confirm;window.confirm=function(){var h;h=g.apply(window,arguments);d++;return h}}if(window.prompt&&window.prompt.apply){f=window.prompt;window.prompt=function(){var h;h=f.apply(window,arguments);d++;return h}}c.getAlertCount=function(){return d}}())}if(TeaLeaf.Event.Configuration.tlcatcherrors){if(typeof window.onerror!=="function"){window.onerror=TeaLeaf.Event.tlErrorHandler}}TeaLeaf.Event.setupTimerRoutine();TeaLeaf.Event.Loaded=true};TeaLeaf.Event.setupTimerRoutine=function(a){if(TeaLeaf.Event.Configuration.tlqueueevents){a=a||TeaLeaf.Event.Configuration.tlqueueeventstimer}else{a=1000}a=(a>999)?a:1000;setTimeout(function(){TeaLeaf.Event.tlFlushQueue();TeaLeaf.Event.setupTimerRoutine()},a)};TeaLeaf.Event.tlAddCustomEvent=function(a,b){var c;if(!a||typeof a!=="string"){a="custom"}if(!b||typeof b!=="object"){return}c=TeaLeaf.Event.createCustomEvent(a,b);TeaLeaf.eventQ.enqueue(c)};if(!TeaLeaf.Event.Configuration.tlinit){TeaLeaf.Event.Configuration.tlinit=true;TeaLeaf.addOnLoad(TeaLeaf.Event.EventSetup)}}if(window.TeaLeaf&&((typeof TeaLeaf.replay==="function")?!TeaLeaf.replay():!TeaLeaf.replay)&&TeaLeaf.Env&&!TeaLeaf.Env.setupComplete){TeaLeaf.Env.setupComplete=true;TeaLeaf.Env.tlSendPageSummary=function(){var c=window.TeaLeaf,a=c.Env,d,b={document:a.getDocumentInfo(),window:a.getWindowInfo(),screen:a.getScreenInfo()};c.Event.queuedEventTypes.PERFORMANCE=true;c.Event.SetSubType="INIT";d=c.Event.createPerformanceEvent("INIT",b);c.Event.PageLoadMilliSecs=d.timeDuration;c.eventQ.enqueue(d)};TeaLeaf.Env.getDocumentInfo=function(a){var b=TeaLeaf;a=a||window.document;return{title:a.title,referer:a.referrer,contentType:a.contentType,lastModified:a.lastModified,characterSet:a.characterSet,width:a.width,height:a.height,anchors:a.anchors.length,embeds:(a.embeds?a.embeds.length:0),forms:a.forms.length,links:a.links.length,images:a.images.length,badImages:(b.tlBrowserIsWebKit()?0:b.Event.tlBadImageCount()),plugins:(a.plugins?a.plugins.length:0)}};TeaLeaf.Env.getWindowInfo=(function(){var a;TeaLeaf.Env.getWindowId=function(){if(typeof window.sessionStorage==="object"){try{a=sessionStorage.TLTWID;if(!a){a=TeaLeaf.makeRandomString(6);sessionStorage.TLTWID=a}}catch(b){a=null}}return a};return function(){var c=TeaLeaf,b=window.location,d;if(window.innerHeight&&window.innerWidth){d=window.innerWidth+"x"+window.innerHeight}else{if(document.body&&document.body.clientWidth&&document.body.clientHeight){d=document.body.clientHeight+"x"+document.body.clientWidth}}return{initialOrientation:c.initialOrientation,WindowHref:escape(b.href),protocol:b.protocol,hostName:b.hostname,port:b.port,pathName:b.pathname,frames:window.frames.length}}}());TeaLeaf.Env.getScreenInfo=function(){var a=window.screen;return{width:a.width,height:a.height,deviceXDPI:a.deviceXDPI,deviceYDPI:a.deviceYDPI,logicalXDPI:a.logicalXDPI,logicalYDPI:a.logicalYDPI}};TeaLeaf.addOnLoad(TeaLeaf.Env.tlSendPageSummary)}if(window.TeaLeaf&&((typeof TeaLeaf.replay==="function")?!TeaLeaf.replay():!TeaLeaf.replay)&&TeaLeaf.Client&&!TeaLeaf.Client.setupComplete){TeaLeaf.Client.setupComplete=true;TeaLeaf.Client.tlTimeoutID=-1;TeaLeaf.Client.tlHasUserMovement=false;TeaLeaf.Client.tlUserMovement=function(){TeaLeaf.Client.tlHasUserMovement=true;TeaLeaf.Event.tlRemoveHandler(document,"mousemove",TeaLeaf.Client.tlUserMovement,false)};TeaLeaf.Client.EmptyMask=function(){return""};TeaLeaf.Client.BasicMask=function(a){if(!a||!a.value){return null}return"XXXXXX"};TeaLeaf.Client.PreserveMask=function(b){var a,c;if(!b||!b.value){return null}a=TeaLeaf.Client.Configuration.tlPrivacyMask;c=b.value;c=c.replace(/[A-Z]/g,a.upperChar);c=c.replace(/[a-z]/g,a.lowerChar);c=c.replace(/[0-9]/g,a.numericChar);c=c.replace(/[^A-Za-z0-9]/g,a.symbolChar);return c};TeaLeaf.Client.getFieldBlockMatch=function(c){var b,e,d,a;d=TeaLeaf.Client.Configuration.tlFieldBlock;if(typeof c==="string"){c=document.getElementById(c)}if(!c){return null}for(b=0;b<d.length;b++){a=d[b];if(a.id){if(!a.idRE){a.idRE=new RegExp(a.id,(a.caseinsensitive?"i":""))}if(a.idRE.test(c.id)){return a}}if(a.name){if(!a.nameRE){a.nameRE=new RegExp(a.name,(a.caseinsensitive?"i":""))}if(a.nameRE.test(c.name)){return a}}if(a.className){if(!a.classRE){a.classRE=new RegExp(a.className,(a.caseinsensitive?"i":""))}if(a.classRE.test(c.className)){return a}}if(a.attributeName&&a.attributeValue){e=c.getAttribute(a.attributeName);if(e){if(!a.attributeRE){a.attributeRE=new RegExp(a.attributeValue,(a.caseinsensitive?"i":""))}if(a.attributeRE.test(e)){return a}}}}return null};TeaLeaf.Client.tlIsReplace=function(a){if(typeof a==="string"){a=document.getElementById(a)}if(!a){return false}if(TeaLeaf.Client.getFieldBlockMatch(a)){return true}if(TeaLeaf.getNodeType(a)==="password"){return TeaLeaf.Client.Configuration.tlpassword===2}return false};TeaLeaf.Client.tlReplaceValue=function(a){var b;if(typeof a==="string"){a=document.getElementById(a)}if(!a){return null}b=TeaLeaf.Client.getFieldBlockMatch(a);if(b){return b.mask(a)}return a.value};TeaLeaf.Client.tlIsExcluded=function(a){var b;if(typeof a==="string"){a=document.getElementById(a)}if(!a){return false}b=TeaLeaf.Client.getFieldBlockMatch(a);if(b){return b.exclude}if(TeaLeaf.getNodeType(a)==="password"){return TeaLeaf.Client.Configuration.tlpassword===2}return false};TeaLeaf.Client.tlGetName=function(c){if(!c){return null}var b=c.id,a=c.name;if(b){return b}if(a){return a}return null};TeaLeaf.Client.tlGetEventSource=function(b){var a;a=null;if(!b){return null}if(b.srcElement){a=b.srcElement}else{a=b.target;if(!a){a=b.explicitOriginalTarget}if(!a){a=b.originalTarget}}if(a&&a.tagName==="HTML"){return null}if(a&&!a.name){if(a.parentNode&&a.parentNode.tagName){if(a.parentNode.tagName==="A"||a.parentNode.tagName==="LINK"){a=a.parentNode}}}if(!a||!a.tagName){a=window.document.body}return a};TeaLeaf.Client.tlGetAnchor=function(c,b){if(!c){return null}if(c.name){return null}var a;for(a=0;a<document.anchors.length;a++){if(document.anchors[a]===c){if(b){return"<AnchorElement>"+a+"</AnchorElement>\r\n"}else{return"Anchor-"+a}}}for(a=0;a<document.links.length;a++){if(document.links[a]===c){if(b){return"<LinkElement>"+a+"</LinkElement>\r\n"}else{return"Link-"+a}}}return null};TeaLeaf.Client.checkIsInput=function(a){if(typeof a==="string"){a=document.getElementById(a)}switch(a.tagName){case"INPUT":case"SELECT":case"TEXTAREA":return true}return false};TeaLeaf.Event.tlFormatXMLName=function(d){if(!d||d.length<=0){return null}var c,a,b="";if(!TeaLeaf.Event.tlNameStartChar(d.charCodeAt(0))){b="_"}a=d.length;for(c=0;c<a;c++){if(TeaLeaf.Event.tlNameChar(d.charCodeAt(c))){b=b+d.charAt(c)}else{b=b+"_"}}return b};TeaLeaf.Event.tlNameStartChar=function(a){return(a>=65&&a<=90)||a===95||(a>=97&&a<=122)||(a>=192&&a<=214)||(a>=216&&a<=246)||(a>=248&&a<=767)||(a>=880&&a<=893)||(a>=895&&a<=8191)||(a>=8204&&a<=8205)||(a>=8304&&a<=8591)||(a>=11264&&a<=12271)||(a>=12289&&a<=55295)||(a>=63744&&a<=64975)||(a>=65008&&a<=65533)};TeaLeaf.Event.tlNameChar=function(a){return TeaLeaf.Event.tlNameStartChar(a)||a===45||a===46||(a>=48&&a<=57)||a===183||(a>=768&&a<=879)||(a>=8255&&a<=8256)};TeaLeaf.Client.tlQueuedKeys="";TeaLeaf.Client.getNormalizedKeyCode=function(b){var a;if(!b||!b.keyCode||(b.keyCode<32&&b.keyCode!==8&&b.keyCode!==20)){return null}a="";if(b.ctrlKey){a+="c-"}if(b.altKey){a+="a-"}if(b.shiftKey){a+="s-"}if(!TeaLeaf.tlBrowserIsIE()){switch(b.keyCode){case 59:a+=186;break;default:a+=b.keyCode;break}}else{a+=b.keyCode}return a};TeaLeaf.Client.tlQueueKey=function(g){var e,d,f,c,a,b;c=TeaLeaf;a=c.Client;b=a.Configuration;a.tlSendResize();a.tlSendScroll(null,true);if(!g){g=window.event}if(!a.tlQueuedKeysCount){a.tlQueuedKeys="";a.tlQueuedKeysCount=0}d=a.tlGetEventSource(g);if(!d){return}if(!d.TeaLeafFocusTime){d.TeaLeafFocusTime=new Date()}if(a.tlQueuedKeySource){if(a.tlQueuedKeySource!==d){if(a.tlQueuedKeys&&a.tlQueuedKeys.length>0){a.tlSendKeys()}a.tlQueuedKeySource=d}}else{a.tlQueuedKeySource=d}e=a.tlGetName(d);if(!e){e=a.tlGetXPathFromNode(d);if(!e){if(!a.tlGetAnchor(d,false)){a.tlQueuedKeySource=null}return}else{a.tlQueuedKeySource=d}}else{if(a.tlIsReplace(d)){a.tlQueuedKeysCount++;return}if(a.tlIsExcluded(d)){a.tlQueuedKeys="";a.tlQueuedKeysCount++;return}}f=a.getNormalizedKeyCode(g);if(f){if(a.tlQueuedKeys&&a.tlQueuedKeys.length>0){a.tlQueuedKeys+=";"}a.tlQueuedKeys+=f;a.tlQueuedKeysCount++}};TeaLeaf.Client.tlSendKeys=function(){var b=window.TeaLeaf,l=b.Client,h,j,k,i,a,n,g,f,e,d,c,m;if(!l.tlQueuedKeySource||(!l.tlQueuedKeys&&!l.tlQueuedKeysCount)){return}f=l.tlQueuedKeySource;g=l.tlQueuedKeys;n=l.tlQueuedKeysCount;l.tlQueuedKeySource=null;l.tlQueuedKeys="";l.tlQueuedKeysCount=0;e=l.tlGetXPathFromNode(f);if(!e&&l.Configuration.tlDiscardInvalidXPath){return}m=!!l.tlIsReplace(f);h=!!l.tlIsExcluded(f);if(m||h){g=null;n=0}a=b.Client.tlGetName(f);c=f.id;if(!b.Client.CheckIfIdValid(f)){c=""}k={Name:f.name,Id:c,ElementType:b.getNodeType(f),TagName:f.tagName,XPath:e,KeyCount:n};i={};d=b.Event.tlFormatXMLName(a);if(m){if(!i[d]){i={ValueIn:d};i[d]=l.tlReplaceValue(f)}}else{if(!d){d=e;d=b.Event.tlFormatXMLName(d)}i={KeyCode:g};if(f.value){i.ValueIn=d;i[d]=f.value}}j=b.Event.createGuiEvent("KeyUp",b.extend(i,k));b.eventQ.enqueue(j);b.tlKeepAlive()};TeaLeaf.Client.tlSendResize=function(){var b=window.TeaLeaf,c=b.Client,a;if(!c.ResizeClientX&&!c.ResizeClientY){return}a=b.Event.createGuiEvent("Resize",{clientX:c.ResizeClientX,clientY:c.ResizeClientY,screenX:c.ResizeScreenX,screenY:c.ResizeScreenY});b.eventQ.enqueue(a);c.ResizeClientX=null;c.ResizeClientY=null;c.ResizeScreenX=null;c.ResizeScreenY=null};TeaLeaf.Client.tlCheckScroll=function(){var b,a=TeaLeaf.Client.Configuration.tlWindowHandlers;for(b=0;b<a.length;b++){if(a[b].domevent==="scroll"&&a[b].load){return true}}return false};TeaLeaf.Client.tlSendScroll=function(e,f){var b,g,d=0,a=0,c;e=e||window.event;if(!TeaLeaf.Client.tlCheckScroll()){return}if(typeof window.pageYOffset==="number"){a=window.pageYOffset;d=window.pageXOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){a=document.body.scrollTop;d=document.body.scrollLeft}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){a=document.documentElement.scrollTop;d=document.documentElement.scrollLeft}}}if(TeaLeaf.Client.Configuration.tlScrollOffsetX===0){TeaLeaf.Client.Configuration.tlScrollOffsetX=d}else{if(d>TeaLeaf.Client.Configuration.tlScrollOffsetX){TeaLeaf.Client.Configuration.tlScrollDirection="right"}else{if(d<TeaLeaf.Client.Configuration.tlScrollOffsetX){TeaLeaf.Client.Configuration.tlScrollDirection="left"}}}if(TeaLeaf.Client.Configuration.tlScrollOffsetY===0){TeaLeaf.Client.Configuration.tlScrollOffsetY=a}else{if(a>TeaLeaf.Client.Configuration.tlScrollOffsetY){TeaLeaf.Client.Configuration.tlScrollDirection="down"}else{if(a<TeaLeaf.Client.Configuration.tlScrollOffsetY){TeaLeaf.Client.Configuration.tlScrollDirection="up"}}}if(d>0){TeaLeaf.Client.Configuration.tlScrollX=d}if(a>0){TeaLeaf.Client.Configuration.tlScrollY=a}if(TeaLeaf.Client.Configuration.tlScrollOffsetX===TeaLeaf.Client.Configuration.tlScrollX&&TeaLeaf.Client.Configuration.tlScrollOffsetY===TeaLeaf.Client.Configuration.tlScrollY){return}if(f||(TeaLeaf.Client.Configuration.tlScrollDirectionOrig!==TeaLeaf.Client.Configuration.tlScrollDirection)){g={ClientX:TeaLeaf.Client.ScrollClientX,ClientY:TeaLeaf.Client.ScrollClientY,ScreenX:TeaLeaf.Client.ScrollScreenX,ScreenY:TeaLeaf.Client.ScrollScreenY,ScrollHeight:TeaLeaf.Client.ScrollHeight,ScrollWidth:TeaLeaf.Client.ScrollWidth,ScrollTop:TeaLeaf.Client.ScrollTop,ScrollLeft:TeaLeaf.Client.ScrollLeft,OrigX:TeaLeaf.Client.Configuration.tlScrollOffsetX.toString(),OrigY:TeaLeaf.Client.Configuration.tlScrollOffsetY.toString(),CurrX:TeaLeaf.Client.Configuration.tlScrollX.toString(),CurrY:TeaLeaf.Client.Configuration.tlScrollY.toString(),OrigDirection:TeaLeaf.Client.Configuration.tlScrollDirectionOrig,CurrDirection:TeaLeaf.Client.Configuration.tlScrollDirection};b=TeaLeaf.Event.createGuiEvent("scroll",g);TeaLeaf.eventQ.enqueue(b);TeaLeaf.tlKeepAlive()}TeaLeaf.Client.Configuration.tlScrollOffsetX=TeaLeaf.Client.Configuration.tlScrollX;TeaLeaf.Client.Configuration.tlScrollOffsetY=TeaLeaf.Client.Configuration.tlScrollY;TeaLeaf.Client.Configuration.tlScrollDirectionOrig=TeaLeaf.Client.Configuration.tlScrollDirection};TeaLeaf.Client.tlFindAncestorByTag=function(b,a){var c;if(!b||!a){return null}for(c=b.parentNode;c&&c!==window.document;c=c.parentNode){if(c.nodeType===1&&c.tagName===a){break}}return c};TeaLeaf.Client.tlCheckBlackList=function(a){var d,c,b;if(!TeaLeaf.Client.Configuration.tlIDBlackList||!TeaLeaf.Client.Configuration.tlIDBlackList.length){return false}if(a){for(d=0;d<TeaLeaf.Client.Configuration.tlIDBlackList.length;d++){b=new RegExp(TeaLeaf.Client.Configuration.tlIDBlackList[d],"g");c=a.match(b);if(c){return true}}}return false};TeaLeaf.Client.tlCheckWhiteList=function(a){var d,c,b;if(!TeaLeaf.Client.Configuration.tlIDWhiteList||!TeaLeaf.Client.Configuration.tlIDWhiteList.length){return true}if(a){for(d=0;d<TeaLeaf.Client.Configuration.tlIDWhiteList.length;d++){b=new RegExp(TeaLeaf.Client.Configuration.tlIDWhiteList[d],"g");c=a.match(b);if(c){return true}}}return false};TeaLeaf.Client.tlGetXPathFromNode=function(a){var e,c,h,d=false,g=null,k=null,b=[],f=[];if(!a||TeaLeaf.Client.CheckIfIdValid(a)){return null}h=a;for(e in TeaLeaf.Client.Configuration.tlSpecialChildNodeTags){if(h.tagName.toString()===e){h=h.parentNode}}for(d=TeaLeaf.Client.CheckIfIdValid(h);h!==window.document&&!d;d=TeaLeaf.Client.CheckIfIdValid(h)){g=null;k=null;switch(h.tagName){case"TD":k=TeaLeaf.Client.tlFindAncestorByTag(h,"TR");if(k){g=k.cells}break;case"TR":k=TeaLeaf.Client.tlFindAncestorByTag(h,"TABLE");if(k){g=k.rows}break;case"OPTION":k=TeaLeaf.Client.tlFindAncestorByTag(h,"SELECT");if(k){g=k.options}break;default:k=h.parentNode;if(!k){k=window.document}g=k.childNodes;break}if(!g){return null}for(e=0,c=0;e<g.length;e++){if(g[e].nodeType===1&&g[e].tagName===h.tagName){if(g[e]===h){f[f.length]=[h.tagName.toUpperCase(),c];break}c++}}h=k}if(d){f[f.length]=[h.id]}if(!f.length){return null}for(e=f.length-1,b=[];e>=0;e--){if(f[e].length>1){b[b.length]="['"+f[e][0]+"',"+f[e][1]+"]"}else{b[b.length]="['"+f[e][0].toString().replace(/'/g,"\\'")+"']"}}return("["+b.join(",")+"]")};TeaLeaf.Client.CheckIfIdValid=function(a){var c;if(!a||!a.id||typeof a.id!=="string"){return false}if(TeaLeaf.Client.tlCheckBlackList(a.id)===true){return false}if(TeaLeaf.Client.tlCheckWhiteList(a.id)===false){return false}if(!TeaLeaf.Client.Configuration.tlUniqueIDCheckEnabled){return true}c=a.id;a.id=(new Date()).getTime()+"_TeaLeaf";try{if(!document.getElementById(c)){a.id=c;return true}else{a.id=c;return false}}catch(b){return false}finally{a.id=c}};TeaLeaf.Private.setLastProcessedEvent=function(c){var d=TeaLeaf.Private,b=null,a;if(!c){return}if(!d.tlPrevEvent){d.tlPrevEvent={}}d.tlPrevEvent.type=c.type;d.tlPrevEvent.button=c.button;d.tlPrevEvent.clientX=c.clientX;d.tlPrevEvent.clientY=c.clientY;if(c.keyCode!==a){d.tlPrevEvent.keyCode=c.keyCode}else{d.tlPrevEvent.keyCode=b}if(c.charCode!==a){d.tlPrevEvent.charCode=c.charCode}else{d.tlPrevEvent.charCode=b}if(c.timeStamp!==a){if(c.timeStamp.getTime){d.tlPrevEvent.timeStamp=c.timeStamp.getTime()}else{d.tlPrevEvent.timeStamp=c.timeStamp}}else{d.tlPrevEvent.timeStamp=new Date().getTime()}if(c.target!==a){d.tlPrevEvent.target=c.target}else{d.tlPrevEvent.target=b}if(c.srcElement!==a){d.tlPrevEvent.srcElement=c.srcElement}else{d.tlPrevEvent.srcElement=b}};TeaLeaf.Private.getLastProcessedEvent=function(){return TeaLeaf.Private.tlPrevEvent};TeaLeaf.Client.isDuplicateEvent=function(a){var d=TeaLeaf.Private,b,c=d.getLastProcessedEvent();if(!c||!a){d.setLastProcessedEvent(a);return false}if(typeof a.timeStamp!=="undefined"){b=a.timeStamp.getTime?a.timeStamp.getTime():a.timeStamp;if(c.timeStamp!==b){d.setLastProcessedEvent(a);return false}}else{a.timeStamp=new Date().getTime();if(Math.abs(a.timeStamp-c.timeStamp)>300){d.setLastProcessedEvent(a);return false}}if(c.type!==a.type){d.setLastProcessedEvent(a);return false}if(("target" in a)&&(c.target!==a.target)){d.setLastProcessedEvent(a);return false}if(("srcElement" in a)&&(c.srcElement!==a.srcElement)){d.setLastProcessedEvent(a);return false}if(c.button!==a.button){d.setLastProcessedEvent(a);return false}if(c.clientX!==a.clientX||c.clientY!==a.clientY){d.setLastProcessedEvent(a);return false}if(("keyCode" in a)&&(c.keyCode!==a.keyCode)){d.setLastProcessedEvent(a);return false}d.setLastProcessedEvent(a);return true};TeaLeaf.Client.tlCheckAttributes=function(f,e){var c,b,g,h={},a=TeaLeaf.Client.Configuration.tlAttributeCapture,d;for(c=0;c<a.length;c++){if(a[c].tltagname.toLowerCase()===f.tagName.toLowerCase()&&a[c].tlevent===e.type.toLowerCase()){b=a[c].tlattributename;g=f.getAttribute(b);if(g!==d){h[b]=g}}}return h};TeaLeaf.Client.tlOrientationChangeEvent=function(d){var c=window.TeaLeaf,b,a;d=d||window.event;if(c.tlBrowserIsAndroid()){a=c.Client.Configuration.tlAndroidOrientation+window.orientation;if(a===270){a=-90;c.Client.Configuration.tlAndroidOrientation=90}else{if(a===360){a=0;c.Client.Configuration.tlAndroidOrientation=0}else{c.Client.Configuration.tlAndroidOrientation+=a}}}else{a=window.orientation}b=c.Event.createGuiEvent(d.type,{ClientSize:(window.innerWidth+"x"+window.innerHeight),orientation:a});c.eventQ.enqueue(b);c.tlKeepAlive()};TeaLeaf.Client.tlMotionEvent=function(d){var c=window.TeaLeaf,a,b;d=d||window.event;a={accelerationIncludingGravity:d.accelerationIncludingGravity};if(d.acceleration){a.acceleration=d.acceleration}if(d.interval){a.interval=d.interval}if(d.rotationRate){a.rotationRate=d.rotationRate}b=c.Event.createGuiEvent(d.type,{target:{currState:a}});c.eventQ.enqueue(b);c.tlKeepAlive()};TeaLeaf.Client.tlDeviceOrientationEvent=function(c){var b=window.TeaLeaf,a;c=c||window.event;a=b.Event.createGuiEvent(c.type,{target:{currState:{alpha:c.alpha,beta:c.beta,gamma:c.gamma}}});b.eventQ.enqueue(a);b.tlKeepAlive()};TeaLeaf.Client.tlAddTouchEvent=(function(){var c={scale:0,timestamp:0};function a(e){var d=false;if(c.scale===e.scale&&Math.abs((new Date()).getTime()-c.timestamp)<500){d=true}return d}function b(d){c.scale=d.scale;c.timestamp=(new Date()).getTime()}return function(f){var e=window.TeaLeaf,g=e.Client,d;f=f||window.event;if(g.Configuration.pinchOnly&&(!f.scale||f.scale===1)){return}d={rotation:f.rotation?f.rotation.toFixed(2):0,scale:f.scale?f.scale.toFixed(2):1};if(g.Configuration.pinchOnly&&a(d)){return}b(d);if(typeof f.touches==="object"){d.touchCount=f.touches.length||0}g.tlAddEvent(f,d)}}());TeaLeaf.Client.tlAddEvent=function(r,w,p){var g=window.TeaLeaf,u=g.Client,f=u.Configuration,o=false,t,d,c,A=0,e,j,x,n=false,y,h,z,l,m,q,v,B,k,b,a,C,s;if(!r){r=window.event}y=u.tlGetEventSource(r);if(!y){return}c=r.type.toLowerCase();if(c==="mousedown"&&y.tagName==="BODY"){return}h=g.getNodeType(y);s=u.tlGetXPathFromNode(y);if(!s&&f.tlDiscardInvalidXPath){return}if(f.tlEnableAttr){d=u.tlCheckAttributes(y,r)}u.tlSendKeys();u.tlSendResize();u.tlSendScroll(null,true);if(!y.TeaLeafFocusTime){switch(c){case"keyup":case"change":case"click":case"dblclick":case"mousedown":y.TeaLeafFocusTime=new Date();break}}if(c==="blur"&&h==="application/x-shockwave-flash"){return}if(c==="click"&&u.checkIsInput(y)){g.Event.Configuration.tlidoflastvisitedcontrol=u.tlGetName(y)}if(c==="click"&&(y.tagName.toUpperCase()==="A")&&g.tlBrowserIsIE()){f.tlIEhref=false;v=y.href;if(v==="#"){f.tlIEhref=true}else{B="javascript:";q=v.substr(0,B.length);if(q.toLowerCase()===B){f.tlIEhref=true}}}b=u.tlGetName(y);a=y.id;if(!u.CheckIfIdValid(y)){a=""}if((c==="blur"||c==="change")&&y.TeaLeafFocusTime){A=g.Event.tlDateDiff(new Date(),y.TeaLeafFocusTime);y.TeaLeafFocusTime=null}C=null;k=null;m=[];if(!u.tlIsExcluded(y)){if(!y.value&&c==="change"&&y.tagName.toUpperCase()==="SELECT"){x=y.selectedIndex;if(x>=0&&x<y.options.length){C=escape(y.options[x].text)}}else{C=u.tlReplaceValue(y)}if(C){k=g.Event.tlFormatXMLName(b);if(!k){k=s;k=g.Event.tlFormatXMLName(k)}}if(h==="checkbox"||h==="radio"){o=true;n=!!y.checked}}l={Name:y.name,Id:a,ElementType:h,TagName:y.tagName,XPath:s,TimeInControl:A};j=l;if(k&&C){j.ValueIn=k;j[k]=C}if(o){j.Checked=n?"True":"False"}e=g.Event.createGuiEvent(r.type,j);if(typeof p==="object"){e=g.extend(p,e)}if(typeof w==="object"){e=g.extend(w,e)}if(f.tlEnableAttr&&d){e=g.extend(d,e)}g.eventQ.enqueue(e);g.tlKeepAlive()};TeaLeaf.Client.tlQueueResize=function(a){TeaLeaf.Client.tlSendKeys();TeaLeaf.Client.tlSendScroll(null,true);if(!a){a=window.event}if(a.clientX){TeaLeaf.ResizeClientX=a.clientX;TeaLeaf.ResizeClientY=a.clientY;TeaLeaf.ResizeScreenX=a.screenX;TeaLeaf.ResizeScreenY=a.screenY}else{TeaLeaf.ResizeClientX=a.target.width;TeaLeaf.ResizeClientY=a.target.height}};TeaLeaf.Client.tlAttachToAllControls=function(){TeaLeaf.Client.Configuration.tlcontrolsattached=true;TeaLeaf.Client.tlAttachToControls(window);if(TeaLeaf.Client.Configuration.attachToFrames){try{var a;for(a=0;a<window.frames.length;a++){if(window===window.frames[a]){continue}TeaLeaf.Client.tlAttachToControls(window.frames[a])}}catch(b){}}};TeaLeaf.Client.tlSingleAttach=function(){var i,func,tldomsingleelements=TeaLeaf.Client.Configuration.tlSingleAttach,tlelement;for(i=0;i<tldomsingleelements.length;i++){if(tldomsingleelements[i].domelementID){tlelement=document.getElementById(tldomsingleelements[i].domelementID);if(tlelement){func=eval(tldomsingleelements[i].tlhandler);TeaLeaf.Event.tlAddHandler(tlelement,tldomsingleelements[i].domevent,func,false)}}}};TeaLeaf.Client.tlAttachToControls=function(win){try{var i,func,handlers=TeaLeaf.Client.Configuration.tlWindowHandlers;for(i=0;i<handlers.length;i++){if(handlers[i].load){func=eval(handlers[i].tlhandler);TeaLeaf.Event.tlAddHandler(win,handlers[i].domevent,func,false)}}handlers=TeaLeaf.Client.Configuration.tlDocumentHandlers;for(i=0;i<handlers.length;i++){if(handlers[i].load){func=eval(handlers[i].tlhandler);TeaLeaf.Event.tlAddHandler(win.document,handlers[i].domevent,func,false)}}TeaLeaf.Client.tlProcessNode(win.document.body)}catch(e){}};TeaLeaf.Client.tlCheckAttach=function(control){var i,handlers;if(control.TeaLeaf||control.TeaLeafExclude){return}control.TeaLeaf=true;control.TealeafVC=0;switch(control.tagName){case"INPUT":case"SELECT":case"TEXTAREA":TeaLeaf.Event.tlAddHandler(control,"focus",TeaLeaf.Client.tlSetFocusTime,false);TeaLeaf.Event.tlAddHandler(control,"blur",TeaLeaf.Client.tlHandleBlur,false);TeaLeaf.Event.tlAddHandler(control,"change",TeaLeaf.Client.tlAddEvent,false);break}if(TeaLeaf.Client.Configuration.tlUniversalAttach){handlers=TeaLeaf.Client.Configuration.tlDocumentHandlers;for(i=0;i<handlers.length;i++){if(handlers[i].load){TeaLeaf.Event.tlAddHandler(control,handlers[i].domevent,eval(handlers[i].tlhandler),false)}}}};TeaLeaf.Client.tlProcessNode=function(h,c){var f,b,d,a;if(typeof(h)==="string"){h=document.getElementById(h)}if(!h){h=window.document.body}try{switch(h.tagName){case"INPUT":case"SELECT":case"TEXTAREA":TeaLeaf.Client.tlCheckAttach(h);break;default:if(TeaLeaf.Client.Configuration.tlUniversalAttach&&TeaLeaf.Client.tlTagNameAllowed(h.tagName)){TeaLeaf.Client.tlCheckAttach(h)}break}if(!c){d=["INPUT","SELECT","TEXTAREA"];for(f=0;f<d.length;f++){a=h.getElementsByTagName(d[f]);for(b=0;b<a.length;b++){TeaLeaf.Client.tlCheckAttach(a[b])}}if(TeaLeaf.Client.Configuration.tlUniversalAttach){if(TeaLeaf.Client.Configuration.tlExcludeTags){a=h.getElementsByTagName("*");for(f=0;f<a.length;f++){if(TeaLeaf.Client.tlTagNameAllowed(a[f].tagName)){TeaLeaf.Client.tlCheckAttach(a[f])}}}else{for(f in TeaLeaf.Client.Configuration.tlNodeTags){a=h.getElementsByTagName(f);for(b=0;b<a.length;b++){TeaLeaf.Client.tlCheckAttach(a[b])}}}}}}catch(g){}};(function(b){var a={};b.parseTarget=function(j){var e=0,c="",d=0,g={},h=TeaLeaf.getNodeType(j),f="";if(!j||b.tlIsExcluded(j)){return{}}c=b.CheckIfIdValid(j)?j.id:"";if(!c){c=b.tlGetXPathFromNode(j);d=-2}else{d=-1}switch(h){case"radio":case"checkbox":g.checked=j.checked;default:if(j.tagName.toUpperCase()==="SELECT"){e=j.selectedIndex;if(e>=0&&e<j.options.length){f=escape(j.options[e].text)}}else{f=j.value?b.tlReplaceValue(j):""}break}g.value=f;return{id:c,idType:d,state:g}};b.saveTargetState=function(d){var c=b.parseTarget(d);if(a.id===c.id){return}a=c;a.timestamp=(new Date()).getTime();d.TealeafVC=d.TealeafVC||0;d.TealeafVC+=1;a.visitCount=d.TealeafVC};b.getSavedTargetState=function(){return a};b.clearSavedTargetState=function(){a={}}}(TeaLeaf.Client));TeaLeaf.Client.tlSetFocusTime=function(d){var b,a;if(!d){d=window.event}b=TeaLeaf.Client.tlGetEventSource(d);a=TeaLeaf.getNodeType(b);if(!b||a==="application/x-shockwave-flash"){return}try{TeaLeaf.Client.saveTargetState(b);if(!b.TeaLeafFocusTime){b.TeaLeafFocusTime=new Date()}}catch(c){}if(TeaLeaf.Client.Configuration.tlsendfocus){TeaLeaf.Client.tlAddEvent(d)}};TeaLeaf.Client.tlHandleBlur=function(c){var b,a;if(!c){c=window.event}b=TeaLeaf.Client.tlGetEventSource(c);a=TeaLeaf.getNodeType(b);if(!b||a==="application/x-shockwave-flash"){return}TeaLeaf.Client.tlEndVisit(b);if(TeaLeaf.Client.checkIsInput(b)){TeaLeaf.Event.Configuration.tlidoflastvisitedcontrol=TeaLeaf.Client.tlGetName(b)}if(TeaLeaf.Client.Configuration.tlsendblur){TeaLeaf.Client.tlAddEvent(c)}b.TeaLeafFocusTime=null};TeaLeaf.Client.tlEndVisit=function(c){var d,b,a;if(c.TeaLeafFocusTime){a=TeaLeaf.Client.tlGetName(c);if(!a){a=TeaLeaf.Client.tlGetAnchor(c,false);if(a){a="LEVEL"+a}else{a="unnamed"}}d=TeaLeaf.Event.tlDateDiff(c.TeaLeafFocusTime,new Date());b=a+":"+d;if(TeaLeaf.Event.Configuration.tlvisitorder){TeaLeaf.Event.Configuration.tlvisitorder=TeaLeaf.Event.Configuration.tlvisitorder+";"+b}else{TeaLeaf.Event.Configuration.tlvisitorder=b}}};TeaLeaf.Client.tlDetachFromAllControls=function(){TeaLeaf.Client.Configuration.tlcontrolsattached=false;TeaLeaf.Client.tlDetachFromControls(window);try{var b,a;for(b=0;b<window.frames.length;b++){a=window.frames[b];TeaLeaf.Client.tlDetachFromControls(a)}}catch(c){}};TeaLeaf.Client.tlDetachFromControls=function(win){try{var i,func,handlers=TeaLeaf.Client.Configuration.tlWindowHandlers,items;for(i=0;i<handlers.length;i++){func=eval(handlers[i].tlhandler);TeaLeaf.Event.tlRemoveHandler(win,handlers[i].domevent,func,false)}handlers=TeaLeaf.Client.Configuration.tlDocumentHandlers;for(i=0;i<handlers.length;i++){func=eval(handlers[i].tlhandler);TeaLeaf.Event.tlRemoveHandler(win.document,handlers[i].domevent,func,false)}items=win.document.getElementsByTagName("INPUT");for(i=0;i<items.length;i++){TeaLeaf.Event.tlRemoveHandler(items[i],"change",TeaLeaf.Client.tlAddEvent,false);TeaLeaf.Event.tlRemoveHandler(items[i],"blur",TeaLeaf.Client.tlHandleBlur,false);items[i].TeaLeaf=false}items=win.document.getElementsByTagName("SELECT");for(i=0;i<items.length;i++){TeaLeaf.Event.tlRemoveHandler(items[i],"change",TeaLeaf.Client.tlAddEvent,false);TeaLeaf.Event.tlRemoveHandler(items[i],"blur",TeaLeaf.Client.tlHandleBlur,false);items[i].TeaLeaf=false}}catch(e){}};TeaLeaf.Client.tlAttachToControl=function(domelement,eventtype,eventHandler){if(eventHandler){TeaLeaf.Event.tlAddHandler(domelement,eventtype,eventHandler,false)}else{TeaLeaf.Event.tlAddHandler(domelement,eventtype,eval(TeaLeaf.Client.tlAddEvent),false)}};TeaLeaf.Client.tlDetachFromControl=function(domelement,eventtype,eventHandler){if(eventHandler){TeaLeaf.Event.tlRemoveHandler(domelement,eventtype,eventHandler,false)}else{TeaLeaf.Event.tlRemoveHandler(domelement,eventtype,eval(TeaLeaf.Client.tlAddEvent),false)}};TeaLeaf.Client.tlScanForAdditions=function(){var b,a;if(!TeaLeaf.Client.Configuration.tlScheduledScan){return}TeaLeaf.Client.tlProcessNode(document.body);try{for(b=0;b<window.frames.length;b++){a=window.frames[b];TeaLeaf.Client.tlProcessNode(a.document.body)}}catch(c){}window.clearTimeout(TeaLeaf.Client.tlTimeoutID);TeaLeaf.Client.tlTimeoutID=window.setTimeout(TeaLeaf.Client.tlScanForAdditions,TeaLeaf.Client.Configuration.tlscanupdate)};TeaLeaf.Client.tlTagNameAllowed=function(a){if(!a){return false}var b=TeaLeaf.Client.Configuration.tlNodeTags[a];if(!b){b=false}if(TeaLeaf.Client.Configuration.tlExcludeTags){return !b}return b};TeaLeaf.Client.tlSetup=function(){var a=TeaLeaf.tlGetCookieValue("tlQueuedXML");if(a){TeaLeaf.Event.tlQueuedXML+=a.replace(/%3B/g,";")}TeaLeaf.Client.tlAttachToAllControls();TeaLeaf.Client.tlSingleAttach();if(TeaLeaf.Event.Configuration.tlcatchpopups){TeaLeaf.SavedWindowOpen=window.open;window.open=function(g,f,i,h){var e,c="blocked",d;if(typeof TeaLeaf.SavedWindowOpen==="function"){d=TeaLeaf.SavedWindowOpen.apply(this,arguments)}else{g=g||"";f=f||"";i=i||"";d=TeaLeaf.SavedWindowOpen(g,f,i,h)}try{if(!d.closed){c="visible"}}catch(b){}e=TeaLeaf.Event.createGuiEvent("WindowOpen",{status:c,url:escape(g),name:f,features:i,replace:h});TeaLeaf.eventQ.enqueue(e);return d}}window.clearTimeout(TeaLeaf.Client.tlTimeoutID);if(TeaLeaf.Client.Configuration.tlscanupdate>0){TeaLeaf.Client.tlTimeoutID=window.setTimeout(TeaLeaf.Client.tlScanForAdditions,TeaLeaf.Client.Configuration.tlscanupdate)}};TeaLeaf.Client.CallInit=function(){TeaLeaf.addOnLoad(TeaLeaf.Client.tlSetup)};if(!TeaLeaf.Client.Configuration.tlinit){TeaLeaf.Client.Configuration.tlinit=true;TeaLeaf.Client.CallInit()}};

