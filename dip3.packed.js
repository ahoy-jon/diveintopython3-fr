function getPreContent(e){if(e.nodeType==3){return e.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;")}if(e.nodeType!=1){return""}if(e.nodeName.toLowerCase()=="span"){return""}if(e.className&&e.className=="widgets"){return""}var d=e.childNodes;var c=d.length;var b="";for(var a=0;a<c;a++){b+=getPreContent(d[a])}return b}function plainTextOnClick(c){var b=document.getElementById(c);if(!b){return}var a=window.open("about:blank","plaintext","toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=600,height=400,left=35,top=75");a.document.open();a.document.write("<pre>"+getPreContent(b));a.document.close()}function toggleBlock(d){var c=document.getElementById(d);if(!c){return}var b=document.getElementById(d+"toggle");if(!b){return}var a=document.getElementById(d+"block");if(!a){return}if(b.firstChild.nodeValue=="show"){a.style.display="block";b.firstChild.nodeValue="hide"}else{a.style.display="none";b.firstChild.nodeValue="show"}}window.onload=function(){var b=document.getElementsByTagName("pre");for(var h=b.length-1;h>=0;h--){var k=b[h];if(k.className=="screen"||k.firstChild.nodeName.toLowerCase()=="code"){var a=k.id;if(!a){a="autopre"+h;k.id=a}k.innerHTML='<div id="'+a+'widgets" class="widgets">[<a id="'+a+'toggle" class="toggle" href="javascript:toggleBlock(\''+a+'\')">hide</a>] [<a id="'+a+'plaintext" href="javascript:plainTextOnClick(\''+a+'\')">open in new window</a>]</div><div id="'+a+'block">'+k.innerHTML+"</div>"}}for(var h=b.length-1;h>=0;h--){var k=b[h];var d=k.getElementsByTagName("span");if(d.length==0){continue}var p=k.nextSibling;while(p&&(p.nodeType!=1)){p=p.nextSibling}if(p.nodeName.toLowerCase()!="ol"){continue}var q=p.getElementsByTagName("li");if(q.length!=d.length){alert("Number of callouts != number of callout list items:\n"+k.innerHTML);continue}for(var g=d.length-1;g>=0;g--){var m=d[g].parentNode;var f=q[g];m._li=f;f._div=m;m.onmouseover=function(){this.className="hover";this._li.className="hover"};f.onmouseover=function(){this.className="hover";this._div.className="hover"};m.onmouseout=function(){this.className="";this._li.className=""};f.onmouseout=function(){this.className="";this._div.className=""}}}var e=document.getElementsByTagName("table");for(var h=e.length-1;h>=0;h--){var o=e[h];var n=document.getElementById("skip"+o.id);if(!n){continue}var r=n.getElementsByTagName("li");var c=o.getElementsByTagName("tr");if(r.length==0){continue}for(var g=c.length-1;g>=1;g--){var s=c[g];var l=r[g-1];s._li=l;l._tr=s;s.onmouseover=function(){this.className="hover";this._li.className="hover"};l.onmouseover=function(){this.className="hover";this._tr.className="hover"};s.onmouseout=function(){this.className="";this._li.className=""};l.onmouseout=function(){this.className="";this._tr.className=""}}}};