// JavaScript Document

function breadcrumbs() {
  sURL = new String;
  bits = new Object;
  var x = 0;
  var stop = 0;
  var output = "<nav class=autoBreadcrumb><a href=/>bearZ home</a> <span class=charfix>&#10147;</span> <a href=bearzCodingZone>bearZ coding zone</a> <span class=charfix>&#10147;</span> <a href=siteMap.html>topics</a> <span class=charfix>&#10147;</span>&emsp;";
  sURL = location.href;
  sURL = sURL.slice(8,sURL.length);
  chunkStart = sURL.indexOf("/");
  sURL = sURL.slice(chunkStart+1,sURL.length)
  while(!stop){
    chunkStart = sURL.indexOf("/");
    if (chunkStart != -1){
      bits[x] = sURL.slice(0,chunkStart)
      sURL = sURL.slice(chunkStart+1,sURL.length);
    } else {
      stop = 1;
    }
    x++;
  }
  for(var i in bits){
    output += "<a href=\"";
    for(y=1;y<x-i;y++){
      output += "";
    }
    output += bits[i] + "/\">" + bits[i] + "</a> <span class=charfix>&#10146;</span> ";
  }
  document.write(output + document.title);
  document.write("</nav>");
  }
  


//<!-- Begin // Version 1.10 // Copyright 2005-2012, Virtual Solutions. Restricted use is hereby granted (both personal and commercial use allowed so long as this code is  // not sold, or distributed in altered form), providing this header is fully maintained. [http://www.monster-submit.com] var base = "http://www.yourdomain.com"; var altbase = "http://yourdomain.com"; var url = location.href; var parts = url.split(base); if (! parts[1]) {    base    = altbase;  parts   = url.split(altbase); } var segs    = parts[1]; var segs = segs.split("/"); var ahref = base; var str = '<a class="special" href="' + base + '">Home</a> > '; for (var loop = 1; loop < segs.length; loop++) {  var st  = doCase(segs[loop]);   ahref = ahref + "/" + segs[loop];     str = str + '<a class="special" href="' + ahref + '">';   st = st.replace(/\.(.*)$/, "");    st = st.replace(/_/g, " ");    str = str + st;     if (loop == (segs.length - 1)) { str = str + '</a>'; }    else { str = str + '</a> > '; } } document.write(str); function doCase(str) {  return(str.charAt(0).toUpperCase() + str.substr(1)); } // End -->

