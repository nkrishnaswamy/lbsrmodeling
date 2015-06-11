function ChangeColor(tableRow, highLight){
if (highLight) tableRow.style.backgroundColor = '#95342b';
	else tableRow.style.backgroundColor = '#40475a';
}

function DoNav(theUrl)
{
document.location.href = theUrl;
}

/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact
*/

var ua = navigator.userAgent.toLowerCase();
var divw=0;
var divh=0;
var xto;
var offsetx=0;
var offsety=0;
var flagme = false;

if (document.getElementById || document.all)
     document.write('<div id="imgtrailer" style="position:absolute;visibility:hidden;"></div>')

function gettrailobject()
{
     if (document.getElementById) return document.getElementById("imgtrailer")
	else if (document.all) return document.all.trailimagid
}

function gettrailobj()
{
     if (document.getElementById) return document.getElementById("imgtrailer").style
	else 
          if (document.all) return document.all.trailimagid.style
}

function truebody()
{
     return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function tOff()
{
     flagme = false;
     if (xto && xto > 0) clearTimeout(xto);
	document.onmousemove='';
     gettrailobj().visibility="hidden";
	
     var Zoom = document.getElementById("popupZoom");
	 //alert("Hide");
     Zoom.style.visibility = "hidden";
	 KeyUpHandler();
}

	
function trailOn(img,thw,thh, description)
{
     flagme = true;
     gettrailobj().left="-2000px";
     divthw = parseInt(thw);
     divthh = parseInt(thh);
	
     loadingx = parseInt(thw) / 2 - 35; // loading icon is 70 pixels wide and high
     loadingy = parseInt(thh) / 2 - 35;
	 
	 thumbimg = img + "_thumblarge.jpg";
	 previewimg = img + "_preview.jpg";
	 zoomimg = img + "_zoom.jpg";
	 
     if ( ua.indexOf( "mozilla" ) != -1 ) 
     {
	offsetx = 2;
	offsety = 2;
     }
	
     if (navigator.userAgent.indexOf("MSIE")!=-1) 
     {
	offsetx = 0;
	offsety = 0;
     }

     var Zoom = document.getElementById("popupZoom");
     preview = previewimg;
	
     gettrailobject().innerHTML = '<table style="border: 3px solid #a2a7b3; position: absolute; z-index: 248; background-color: #40475a;" cellpadding="0" cellspacing="0"><tr><td><img src="'+thumbimg+'" style="z-index:250; width: '+divthw+'px; height:'+divthh+'px;"><img src="textures_data/loading.gif" style="position:absolute; z-index:251; left: '+loadingx+'px; top: '+loadingy+'px;"><img src="'+preview+'" style="position: absolute; left: '+offsetx+'px; top: '+offsety+'px; z-index:252; border: 0px solid;"><img id="popupZoom" src="'+zoomimg+'" style="position: absolute; left: '+offsetx+'px; top: '+offsety+'px; z-index:255; visibility:hidden;"></td></tr><tr><td><div style="font-family: Arial; font-size: 12px; padding: 8px; color: #FFF;">'+description+'<br>(Press <b>\'z\'</b> to zoom)</div></td></tr></table>';
		
     //gettrailobject().innerHTML = '<table style="border: 3px solid #a2a7b3; position: absolute; z-index: 248; background-color: #40475a;" cellpadding="0" cellspacing="0"><tr><td><img src="'+thumbimg+'" style="z-index:250; width: '+divthw+'px; height:'+divthh+'px;"><img src="/images/browse/loading.gif" style="position:absolute; z-index:251; left: '+loadingx+'px; top: '+loadingy+'px;"><table style="width: 382px; height: 65px"><tr><td style="width:25%; height: 57px;"><div id="IsAlt" style="width:100%;visibility:hidden"><b><span style="font-size: 24pt; color: #0033ff">ALT</span></b></div></td></tr></table></td></tr><tr><td><div style="font-family: Arial; font-size: 12px; padding: 8px; color: #FFF;">'+description+'</div></td></tr></table>';
		
     //setTimeOut
     xto = setTimeout("xtimeOut('"+thumbimg+"')",100);
     gettrailobj().visibility="visible";
     divw = parseInt(thw)+25;
     divh = parseInt(thh)+25;
     document.onmousemove=followmouse;
}

function xtimeOut(thumbimgg)
{
     if (document.getElementById) document.getElementById('btcontainer').src = thumbimgg;
     else 
        if (document.all) document.all.btcontainer.src = thumbimgg;
}

function followmouse(e) 
{
     var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-30
     var docheight=document.all? Math.min(truebody().scrollHeight, truebody().clientHeight) : Math.min(document.body.offsetHeight, window.innerHeight)-100
	
     if(typeof e != "undefined")
     {
	if(docwidth < 30+e.pageX+divw) xcoord = e.pageX-divw-5;
	else xcoord = 30+e.pageX;
	
        if(docheight < 30+e.pageY+divh) ycoord = 30+e.pageY-Math.max(0,(divh + e.pageY - docheight - truebody().scrollTop - 30));
	else ycoord = 30+e.pageY;
     }
     else 
        if (typeof window.event != "undefined")
	{
	   if(docwidth < 30+truebody().scrollLeft+event.clientX+divw) xcoord = truebody().scrollLeft-5+event.clientX-divw;
	   else xcoord = truebody().scrollLeft+30+event.clientX;
	
           if(docheight < -30+truebody().scrollTop+event.clientY+divh) ycoord = -30+truebody().scrollTop+event.clientY-Math.max(0,(divh + event.clientY - docheight - 30));
	   else ycoord = truebody().scrollTop+30+event.clientY;
	}
			
      gettrailobj().left=xcoord+"px"
      gettrailobj().top=ycoord+"px"
}

	
var ALT = false;
document.onkeyup = KeyUpHandler;
document.onkeydown = KeyDownHandler;

function KeyDownHandler(e)
{
      var x = '';
      if (document.all) 
      {
	 var evnt = window.event;
	 x = evnt.keyCode;
      }
      else 
      { x = e.keyCode; }
	 
      if (x == '90' && flagme == true) ALT = true;
      zoomChange();
}

function KeyUpHandler(e)
{
      var x = '';
      if (document.all) 
      {
	  var evnt = window.event;
	  x = evnt.keyCode;
      }
      else 
      { x = e.keyCode; }
 
      if (x == '90' || flagme == false ) ALT = false;
      zoomChange();
}
 
function zoomChange()
{
      var Zoom = document.getElementById("popupZoom");
      if(ALT && gettrailobj().visibility=="visible") Zoom.style.visibility = "visible";
      else Zoom.style.visibility = "hidden";
} 
