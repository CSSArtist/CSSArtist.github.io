// Javascript Document
function update(online) {
	document.getElementById('status').textContent =
	online ? 'Online' : 'Offline';
}
function openNav() {
    document.getElementById("hiddenSideNav").style.width = "10rem";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	document.body.style.transition="all 1s"
}
function closeNav() {
    document.getElementById("hiddenSideNav").style.width = "0";
    document.body.style.backgroundColor = "";
}
// ********** CLOSE OPENED DETAILS ELEMENT 
// Fetch all the details element.
var details = Array.from(document.querySelectorAll("details"));
// Add the onclick listeners.
details.forEach(function(detail){
  detail.addEventListener("click", closeOthers.bind(null, detail));
});
// Close all the details that are not targetDetail.
function closeOthers(targetDetail){
  details.forEach(function(detail){
    if(detail !== targetDetail){
      detail.removeAttribute("open");
    }
  });
}

function newEdgeSupport() {
	$(document).ready(function() {
    $("button").hover(function() {
        $("p:last").removeClass("inlineHeaderLite").addClass("inlineHeader");
    });
});
}
function removeNewEdgeSupport() {
	$(document).ready(function() {
    $("button").hover(function() {
        $("p:last").removeClass("inlineHeader").addClass("inlineHeaderLite");
    });
});
}
function global_class() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-class').removeAttribute('hidden');
}
function global_contenteditable() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-contenteditable').removeAttribute('hidden');
}
function global_dir() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-dir').removeAttribute('hidden');
}
function global_draggable() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-draggable').removeAttribute('hidden');
}
function global_hidden() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-hidden').removeAttribute('hidden');
}
function global_id() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-id').removeAttribute('hidden');
}
function global_spellcheck() {
	document.getElementById('emptyAttributePrevious').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-spellcheck').removeAttribute('hidden');
}
function returnToAttribute() {
	document.getElementById('emptyAttributePrevious').removeAttribute('hidden');	
	document.getElementById('emptyAttribute-hidden').setAttribute('hidden','true');	
	document.getElementById('emptyAttribute-dir').setAttribute('hidden','true'); 
	document.getElementById('emptyAttribute-contenteditable').setAttribute('hidden','true'); 
	document.getElementById('emptyAttribute-draggable').setAttribute('hidden','true'); 
	document.getElementById('emptyAttribute-class').setAttribute('hidden','true'); 
	document.getElementById('emptyAttribute-spellcheck').setAttribute('hidden','true');	
}
function th_abbrAttribute() {
	document.getElementById('td-thAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('th-abbrAttribute').removeAttribute('hidden');
}
function th_abbrReturn() {
	document.getElementById('th-abbrAttribute').setAttribute('hidden','true');
	document.getElementById('td-thAttributesPrevious').removeAttribute('hidden');
}
function meta_contentAttribute() {
	document.getElementById('metaAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('meta-contentAttribute').removeAttribute('hidden');
}
function meta_contentReturn() {
	document.getElementById('meta-contentAttribute').setAttribute('hidden','true');
	document.getElementById('metaAttributesPrevious').removeAttribute('hidden');
}
function area_altAttribute() {
	document.getElementById('areaAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('area-altAttribute').removeAttribute('hidden');
}
function area_altReturn() {
	document.getElementById('area-altAttribute').setAttribute('hidden','true');
	document.getElementById('areaAttributesPrevious').removeAttribute('hidden');
}
function img_altAttribute() {
	document.getElementById('imgAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('img-altAttribute').removeAttribute('hidden');
}
function img_altReturn() {
	document.getElementById('img-altAttribute').setAttribute('hidden','true');
	document.getElementById('imgAttributesPrevious').removeAttribute('hidden');
}
function input_altAttribute() {
	document.getElementById('inputAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('input-altAttribute').removeAttribute('hidden');
}
function input_altReturn() {
	document.getElementById('input-altAttribute').setAttribute('hidden','true');
	document.getElementById('inputAttributesPrevious').removeAttribute('hidden');
}
function a_downloadAttribute() {
	document.getElementById('aAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('a-downloadAttribute').removeAttribute('hidden');
}
function a_downloadReturn() {
	document.getElementById('a-downloadAttribute').setAttribute('hidden','true');
	document.getElementById('aAttributesPrevious').removeAttribute('hidden');
}
function area_downloadAttribute() {
	document.getElementById('areaAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('area-downloadAttribute').removeAttribute('hidden');
}
function area_downloadReturn() {
	document.getElementById('area-downloadAttribute').setAttribute('hidden','true');
	document.getElementById('areaAttributesPrevious').removeAttribute('hidden');
}
function menuitem_labelAttribute() {
	document.getElementById('menuitemAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('menuitem-labelAttribute').removeAttribute('hidden');
}
function menuitemReturn() {
	document.getElementById('menuitem-labelAttribute').setAttribute('hidden','true');
	document.getElementById('menuitemAttributesPrevious').removeAttribute('hidden');
}
function menu_labelAttribute() {
	document.getElementById('menuAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('menu-labelAttribute').removeAttribute('hidden');
}
function menuReturn() {
	document.getElementById('menu-labelAttribute').setAttribute('hidden','true');
	document.getElementById('menuAttributesPrevious').removeAttribute('hidden');
}
function optgroup_labelAttribute() {
	document.getElementById('optgroupAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('optgroup-labelAttribute').removeAttribute('hidden');
}
function optgroupReturn() {
	document.getElementById('optgroup-labelAttribute').setAttribute('hidden','true');
	document.getElementById('optgroupAttributesPrevious').removeAttribute('hidden');
}
function option_labelAttribute() {
	document.getElementById('optionAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('option-labelAttribute').removeAttribute('hidden');
}
function optionReturn() {
	document.getElementById('option-labelAttribute').setAttribute('hidden','true');
	document.getElementById('optionAttributesPrevious').removeAttribute('hidden');
}
function track_labelAttribute() {
	document.getElementById('trackAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('track-labelAttribute').removeAttribute('hidden');
}
function trackReturn() {
	document.getElementById('track-labelAttribute').setAttribute('hidden','true');
	document.getElementById('trackAttributesPrevious').removeAttribute('hidden');
}
function lang_translateAttribute() {
	document.getElementById('langAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('lang-translateAttribute').removeAttribute('hidden');
}
function lang_translateReturn() {
	document.getElementById('lang-translateAttribute').setAttribute('hidden','true');
	document.getElementById('langAttributesPrevious').removeAttribute('hidden');
}
function input_placeholderAttribute() {
	document.getElementById('inputAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('input-placeholderAttribute').removeAttribute('hidden');
}
function input_placeholderReturn() {
	document.getElementById('input-placeholderAttribute').setAttribute('hidden','true');
	document.getElementById('inputAttributesPrevious').removeAttribute('hidden');
}
function textarea_placeholderAttribute() {
	document.getElementById('textareaAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('textarea-placeholderAttribute').removeAttribute('hidden');
}
function textarea_placeholderReturn() {
	document.getElementById('textarea-placeholderAttribute').setAttribute('hidden','true');
	document.getElementById('textareaAttributesPrevious').removeAttribute('hidden');
}
function iframe_srcdocAttribute() {
	document.getElementById('iframeAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('iframe-srcdocAttribute').removeAttribute('hidden');
}
function iframe_srcdocReturn() {
	document.getElementById('iframe-srcdocAttribute').setAttribute('hidden','true');
	document.getElementById('iframeAttributesPrevious').removeAttribute('hidden');
}
function style_translateAttribute() {
	document.getElementById('styleAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('style-translateAttribute').removeAttribute('hidden');
}
function style_translateReturn() {
	document.getElementById('style-translateAttribute').setAttribute('hidden','true');
	document.getElementById('styleAttributesPrevious').removeAttribute('hidden');
}
function title_translateAttribute() {
	document.getElementById('titleAttributesPrevious').setAttribute('hidden','true');
	document.getElementById('title-translateAttribute').removeAttribute('hidden');
}
function title_translateReturn() {
	document.getElementById('title-translateAttribute').setAttribute('hidden','true');
	document.getElementById('titleAttributesPrevious').removeAttribute('hidden');
}
function class_id() {
	document.getElementById('class-idAttribute').removeAttribute('hidden');
}
function id_class() {
	document.getElementById('class-idAttribute').setAttribute('hidden','true');
}
function goEmptyAttribute() {
	document.getElementById('attributeNamePrevious').setAttribute('hidden','true');
	document.getElementById('attributeNameEmptyAttribute').removeAttribute('hidden');
}
function goUnQuotedValue() {
	document.getElementById('attributeNamePrevious').setAttribute('hidden','true');
	document.getElementById('attributeNameUnQuotedValue').removeAttribute('hidden');
}
function goSingleQuotedValue() {
	document.getElementById('attributeNamePrevious').setAttribute('hidden','true');
	document.getElementById('attributeNameSingleQuotedValue').removeAttribute('hidden');
}
function goDoubleQuotedValue() {
	document.getElementById('attributeNamePrevious').setAttribute('hidden','true');
	document.getElementById('attributeNameDoubleQuotedValue').removeAttribute('hidden');
}
function backAttributeValues() {
	document.getElementById('attributeNameEmptyAttribute').setAttribute('hidden','true');
	document.getElementById('attributeNameUnQuotedValue').setAttribute('hidden','true');
	document.getElementById('attributeNameSingleQuotedValue').setAttribute('hidden','true');
	document.getElementById('attributeNameDoubleQuotedValue').setAttribute('hidden','true');
	document.getElementById('attributeNamePrevious').removeAttribute('hidden');
}
function listed() {
	document.getElementById('formAssociateListed').className='activeLink';
	document.getElementById('formAssociateSubmittable').className='disabledLink';
	document.getElementById('formAssociateResettable').className='disabledLink';
	document.getElementById('formAssociateReassociateable').className='disabledLink';
	document.getElementById('formAssociateLabelable').className='disabledLink';
	document.getElementById('listedElements').className='block listSwapIn';
	document.getElementById('submittableElements').className='displayNone';
	document.getElementById('resettableElements').className='displayNone';
	document.getElementById('reassociateableElements').className='displayNone';
	document.getElementById('labelableElements').className='displayNone'
}
function submittable() {
	document.getElementById('formAssociateSubmittable').className='activeLink';
	document.getElementById('formAssociateListed').className='disabledLink';
	document.getElementById('formAssociateResettable').className='disabledLink';
	document.getElementById('formAssociateReassociateable').className='disabledLink';
	document.getElementById('formAssociateLabelable').className='disabledLink';
	document.getElementById('submittableElements').className='block listSwapIn';
	document.getElementById('listedElements').className='displayNone';
	document.getElementById('resettableElements').className='displayNone';
	document.getElementById('reassociateableElements').className='displayNone';
	document.getElementById('labelableElements').className='displayNone'
}
function resettable() {
	document.getElementById('formAssociateListed').className='disabledLink';
	document.getElementById('formAssociateSubmittable').className='disabledLink';
	document.getElementById('formAssociateReassociateable').className='disabledLink';
	document.getElementById('formAssociateLabelable').className='disabledLink';
	document.getElementById('formAssociateResettable').className='activeLink';
	document.getElementById('resettableElements').className='block listSwapIn';
	document.getElementById('submittableElements').className='displayNone';
	document.getElementById('listedElements').className='displayNone';
	document.getElementById('reassociateableElements').className='displayNone';
	document.getElementById('labelableElements').className='displayNone'
}
function reassociateable() {
	document.getElementById('formAssociateListed').className='disabledLink';
	document.getElementById('formAssociateSubmittable').className='disabledLink';
	document.getElementById('formAssociateResettable').className='disabledLink';
	document.getElementById('formAssociateLabelable').className='disabledLink';
	document.getElementById('formAssociateReassociateable').className='activeLink';
	document.getElementById('reassociateableElements').className='block listSwapIn';
	document.getElementById('submittableElements').className='displayNone';
	document.getElementById('listedElements').className='displayNone';
	document.getElementById('resettableElements').className='displayNone';
	document.getElementById('labelableElements').className='displayNone'
}
function labelable() {
	document.getElementById('formAssociateListed').className='disabledLink';
	document.getElementById('formAssociateSubmittable').className='disabledLink';
	document.getElementById('formAssociateReassociateable').className='disabledLink';
	document.getElementById('formAssociateResettable').className='disabledLink';
	document.getElementById('formAssociateLabelable').className='activeLink';
	document.getElementById('labelableElements').className='block listSwapIn';
	document.getElementById('submittableElements').className='displayNone';
	document.getElementById('listedElements').className='displayNone';
	document.getElementById('resettableElements').className='displayNone';
	document.getElementById('reassociateableElements').className='displayNone'
}


window.document.onkeydown = function (e)
{
	if (!e){
		e = event;
	}
	if (e.keyCode == 27){
		lightbox_close();
	}
	if (!e){
		e = event;
	}
	if (e.keyCode == 27){
		disclaimerClose();
	}
}
function lightbox_open() {
	window.scrollTo(0,0);
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block';	
}
function lightbox_close() {
	document.getElementById('light').style.display='none';
	document.getElementById('fade').style.display='none';
}
function disclaimerOpen() {
	window.scrollTo(0,0);
	document.getElementById('lightDisclaimer').style.display='block';
	document.getElementById('fadeDisclaimer').style.display='block';	
}
function disclaimerClose() {
	document.getElementById('lightDisclaimer').style.display='none';
	document.getElementById('fadeDisclaimer').style.display='none';
}
function ani() {
	document.getElementById('opening').className='flipOutY2';
	document.getElementById('wrapperOutline').style.display='block';
}
function closeHomeSection() {
	document.getElementById('graphicDesign').style.display='none';
	document.getElementById('aboutMe').style.display='none';
	document.getElementById('artwork').style.display='none'; 
	document.getElementById('webDesign').style.display='none' 
	document.getElementById('computerAnimation').style.display='none';
}
//function EmailLink() {
//window.location = "mailto:"+"?subject=I thought this link might interest you." + "&body="+document.title+"  "+window.location;
//}
//document.write('<INPUT class="select" TYPE="button" VALUE="E-mail this link to a friend" onClick="EmailLink()"></FORM>')
function validate() {
var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("commentName").value;
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x == "") {
        document.getElementById(submitAlert).style.display='none';
    } else {
        document.getElementById(submitAlert).style.display='block';
    }
    document.getElementById("submitAlert").innerHTML = style.display='block';
}
(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }
  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();
// show-hide content
function toggle(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "show";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "hide";
	}
} 
function toggle2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "restore";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "collapse";
	}
}
// show hide image Plus Minus HTML/HTML5
function newFeatures(showHideDiv, switchImgTag) {
	var ele = document.getElementById(showHideDiv);
	var imageEle = document.getElementById(switchImgTag);
	if(ele.style.display == "block") {
			ele.style.display = "none";
	imageEle.innerHTML = '<img src="images/plusSign.png" style="vertical-align:middle" alt="Plus Opens Information Container">';
	}
	else {
			ele.style.display = "block";
			imageEle.innerHTML = '<img src="images/minusSign.png" style="vertical-align:middle" alt="Minus Closes Information Container">';
	}
}
function close() {
	this.window.close()
}
function showDialog() {
	dialog.show()	
}
function closeDialog() {
	dialog.close()	
}
function linkExample() {
	alert('          My Apologizes,\n\n               This is just an Example\n               No Real Link Here')
}
function emailExample() {
	alert('          My Apologizes,\n\n               This is just an Example\n               Nothing Happens Here!')
}
function siteNavSpecialDisplay() {
	document.getElementById("wrapper").style.display="none";
	document.getElementById("siteNavSpecsPage").style.display="block";
}
function siteNavSpecialClose() {
	document.getElementById("wrapper").style.display="block";
	document.getElementById("siteNavSpecsPage").style.display="none";
}
// I hope this works 
var editable = document.getElementById('editable');
addEvent(editable, 'blur', function () {
  // lame that we're hooking the blur event
  localStorage.setItem('contenteditable', this.innerHTML);
  document.designMode = 'off';
});
addEvent(editable, 'focus', function () {
  document.designMode = 'on';
});
addEvent(document.getElementById('clear'), 'click', function () {
  localStorage.clear();
  window.location = window.location; // refresh
});
if (localStorage.getItem('contenteditable')) {
  editable.innerHTML = localStorage.getItem('contenteditable');
}
// For discussion and comments, see: http://remysharp.com/2009/01/07/html5-enabling-script/
/*@cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@*/
var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();
(function () {
var pre = document.createElement('pre');
pre.id = "view-source"
// private scope to avoid conflicts with demos
addEvent(window, 'click', function (event) {
  if (event.target.hash == '#view-source') {
    // event.preventDefault();
    if (!document.getElementById('view-source')) {
      // pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
      var xhr = new XMLHttpRequest();
      // original source - rather than rendered source
      xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          pre.innerHTML = this.responseText.replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
          prettyPrint();
        }
      };
      document.body.appendChild(pre);
      // really need to be sync? - I like to think so
      xhr.open("GET", window.location, true);
      xhr.send();
    }
    document.body.className = 'view-source';
    
    var sourceTimer = setInterval(function () {
      if (window.location.hash != '#view-source') {
        clearInterval(sourceTimer);
        document.body.className = '';
      }
    }, 200);
  }
});
  
})();
function runCode()
            {
                var content = document.getElementById('sourceCode').value;
                var iframe = document.getElementById('targetCode');
                iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
                iframe.document.open();
                iframe.document.write(content);
                iframe.document.close();
                return false;
            }
            runCode();
// background color change for Basic HTML section Code Examples
function changeDoctype() {
	document.getElementById("basicHTML5Container").style.display="block";
	document.getElementById("doctypeNav").style.display="block";
	document.getElementById("htmlNav").style.display="none";
	document.getElementById("commentNav").style.display="none";
	var doctype = document.getElementById("basicDOCTYPE");
	var tag = document.getElementById("htmlTag");
	var tagClose = document.getElementById("htmlTagClose");
	var comment1 = document.getElementById("htmlComment1");
	var comment2 = document.getElementById("htmlComment2");
	var comment3 = document.getElementById("htmlComment3");
	var leadHeader1 = document.getElementById("basicListHeaderA");
	var leadHeader2 = document.getElementById("basicListHeaderB");
	var header1 = document.getElementById("basicListHeader1A");
	var header2 = document.getElementById("basicListHeader1B");
	var header3 = document.getElementById("basicListHeader2A");
	var header4 = document.getElementById("basicListHeader2B");
	var header5 = document.getElementById("basicListHeader3A");
	var header6 = document.getElementById("basicListHeader3B");
	var basicSiteNav = document.getElementById("basicSiteNav");
	header1.style.display = "inline";
	header2.style.display = "inline";
	header3.style.display = "none";
	header4.style.display = "none";
	header5.style.display = "none";
	header6.style.display = "none";
	leadHeader1.style.display = "none";
	leadHeader2.style.display = "none";
    doctype.style.background = "rgba(255,255,0,.5)";
    tag.style.background = "transparent";
    tagClose.style.background = "transparent";
	header4.style.color = "rgba(20,0,20,1)";
    comment1.style.background = "transparent";
    comment2.style.background = "transparent";
    comment3.style.background = "transparent";
}
function changeHTML() {
	document.getElementById("basicHTML5Container").style.display="block";
	document.getElementById("doctypeNav").style.display="none";
	document.getElementById("htmlNav").style.display="block";
	document.getElementById("commentNav").style.display="none";
	var doctype = document.getElementById("basicDOCTYPE");
	var tag = document.getElementById("htmlTag");
	var tagClose = document.getElementById("htmlTagClose");
	var comment1 = document.getElementById("htmlComment1");
	var comment2 = document.getElementById("htmlComment2");
	var comment3 = document.getElementById("htmlComment3");
	var leadHeader1 = document.getElementById("basicListHeaderA");
	var leadHeader2 = document.getElementById("basicListHeaderB");
	var header1 = document.getElementById("basicListHeader1A");
	var header2 = document.getElementById("basicListHeader1B");
	var header3 = document.getElementById("basicListHeader2A");
	var header4 = document.getElementById("basicListHeader2B");
	var header5 = document.getElementById("basicListHeader3A");
	var header6 = document.getElementById("basicListHeader3B");
	header1.style.display="none";
	header2.style.display="none";
	header3.style.display="inline";
	header4.style.display="inline";
	header5.style.display="none";
	header6.style.display="none";
	leadHeader1.style.display="none";
	leadHeader2.style.display="none";
    doctype.style.background = "transparent";
    tag.style.background = "rgba(255,255,0,.5)";
    tagClose.style.background = "rgba(255,255,0,.5)";
	header4.style.color="rgba(20,0,20,1)";
    comment1.style.background = "transparent";
    comment2.style.background = "transparent";
    comment3.style.background = "transparent";
}
function changeComment() {
	document.getElementById("basicHTML5Container").style.display="block";
	document.getElementById("doctypeNav").style.display="none";
	document.getElementById("htmlNav").style.display="none";
	document.getElementById("commentNav").style.display="block";
	var doctype = document.getElementById("basicDOCTYPE");
	var tag = document.getElementById("htmlTag");
	var tagClose = document.getElementById("htmlTagClose");
	var comment1 = document.getElementById("htmlComment1");
	var comment2 = document.getElementById("htmlComment2");
	var comment3 = document.getElementById("htmlComment3");
	var leadHeader1 = document.getElementById("basicListHeaderA");
	var leadHeader2 = document.getElementById("basicListHeaderB");
	var header1 = document.getElementById("basicListHeader1A");
	var header2 = document.getElementById("basicListHeader1B");
	var header3 = document.getElementById("basicListHeader2A");
	var header4 = document.getElementById("basicListHeader2B");
	var header5 = document.getElementById("basicListHeader3A");
	var header6 = document.getElementById("basicListHeader3B");
	leadHeader1.style.display="none";
	leadHeader2.style.display="none";
	header1.style.display="none";
	header2.style.display="none";
	header3.style.display="none";
	header4.style.display="none";
	header5.style.display="inline";
	header6.style.display="inline";
	header6.style.color="rgba(20,0,20,1)";
    comment1.style.background = "rgba(255,255,0,.5)";
    comment2.style.background = "rgba(255,255,0,.5)";
    comment3.style.background = "rgba(255,255,0,.5)";
    doctype.style.background = "transparent";
    tag.style.background = "transparent";
    tagClose.style.background = "transparent";
}
function clearBasicHTML() {
	document.getElementById("basicHTML5Container").style.display="block";
	document.getElementById("doctypeNav").style.display="none";
	document.getElementById("htmlNav").style.display="none";
	document.getElementById("commentNav").style.display="none";
	var doctype = document.getElementById("basicDOCTYPE");
	var tag = document.getElementById("htmlTag");
	var tagClose = document.getElementById("htmlTagClose");
	var comment1 = document.getElementById("htmlComment1");
	var comment2 = document.getElementById("htmlComment2");
	var comment3 = document.getElementById("htmlComment3");
	var leadHeader1 = document.getElementById("basicListHeaderA");
	var leadHeader2 = document.getElementById("basicListHeaderB");
	var header1 = document.getElementById("basicListHeader1A");
	var header2 = document.getElementById("basicListHeader1B");
	var header3 = document.getElementById("basicListHeader2A");
	var header4 = document.getElementById("basicListHeader2B");
	var header5 = document.getElementById("basicListHeader3A");
	var header6 = document.getElementById("basicListHeader3B");
	leadHeader1.style.display="inline";
	leadHeader2.style.display="inline";
	header1.style.display="none";
	header2.style.display="none";
	header3.style.display="none";
	header4.style.display="none";
	header5.style.display="none";
	header6.style.display="none";
    tag.style.background = "transparent";
    tagClose.style.background = "transparent";
    comment1.style.background = "transparent";
    comment2.style.background = "transparent";
    comment3.style.background = "transparent";
    doctype.style.background = "transparent";
}
// end Basic HTML background color change
function showSiteNav () {
	var container=document.getElementById("basicHTML5Container");
		container.style.display="none";
	var mainNav=document.getElementById("basicSiteNav");
		mainNav.style.display="block";
	document.getElementById("doctypeNav").style.display="none";
	document.getElementById("htmlNav").style.display="none";
	document.getElementById("commentNav").style.display="none";
}
function closeBasicSiteNav () {
	document.getElementById("basicHTML5Container").style.display="block";
	document.getElementById("basicSiteNav").style.display="none";
	document.getElementById("doctypeNav").style.display="none";
	document.getElementById("htmlNav").style.display="none";
	document.getElementById("commentNav").style.display="none";
	document.getElementById("basicListHeaderA").style.display="inline";
	document.getElementById("basicListHeaderB").style.display="inline";
	document.getElementById("basicListHeader1A").style.display="none";
	document.getElementById("basicListHeader1B").style.display="none";
	document.getElementById("basicListHeader2A").style.display="none";
	document.getElementById("basicListHeader2B").style.display="none";
	document.getElementById("basicListHeader3A").style.display="none";
	document.getElementById("basicListHeader3B").style.display="none";
	document.getElementById("basicDOCTYPE").style.background="transparent";
	document.getElementById("htmlTag").style.background="transparent";
	document.getElementById("htmlTagClose").style.background="transparent";
	document.getElementById("htmlComment1").style.background="transparent";
	document.getElementById("htmlComment2").style.background="transparent";
	document.getElementById("htmlComment3").style.background="transparent";
}
// background color change for Document Metadata section Code Examples
function showHead() {
// opens head element
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("headAndTitleCodeExample").style.display="block";
	document.getElementById("headHeader").style.display="block";
	document.getElementById("headListHeader").style.display="block";
	document.getElementById("headList").style.display="block";
	document.getElementById("headList").style.maxHeight="30em";
	document.getElementById("headTag").style.background="rgba(225,204,0,.5)";
	document.getElementById("headTagClose").style.background="rgba(225,204,0,.5)";
	document.getElementById("headNav").style.display="block";
	document.getElementById("headTagOmission").style.display="block";
// closes title element	
	document.getElementById("titleHeader").style.display="none";
	document.getElementById("titleListHeader").style.display="none";
	document.getElementById("titleTag").style.background="transparent";
	document.getElementById("title1").style.display="inline";
	document.getElementById("title2").style.display="none";
	document.getElementById("titleTagClose").style.background="transparent";
	document.getElementById("titleNav").style.display="none";
// closes base element
	document.getElementById("baseCodeExample").style.display="none";
	document.getElementById("baseListHeader").style.display="none";
	document.getElementById("baseList").style.display="none";
	document.getElementById("baseNav").style.display="none";
// closes link element
	document.getElementById("linkCodeExample").style.display="none";
	document.getElementById("linkListHeader").style.display="none";
	document.getElementById("linkList").style.display="none";
	document.getElementById("linkNav").style.display="none";
// closes meta element
	document.getElementById("metaCodeExample").style.display="none";
	document.getElementById("metaListHeader").style.display="none";
	document.getElementById("metaList").style.display="none";
	document.getElementById("metaNav").style.display="none";
// closes style element
	document.getElementById("styleCodeExample").style.display="none";
	document.getElementById("styleListHeader").style.display="none";
	document.getElementById("styleList").style.display="none";
	document.getElementById("styleNav").style.display="none";
// closes site Map
	document.getElementById("siteNav1").style.display="none";
	
}
function showTitle() {
// opens title element
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("headAndTitleCodeExample").style.display="block";
	document.getElementById("titleHeader").style.display="block";
	document.getElementById("titleListHeader").style.display="block";
	document.getElementById("titleTag").style.background="rgba(225,204,0,.5)";
	document.getElementById("title1").style.display="none";
	document.getElementById("title2").style.display="inline";
	document.getElementById("titleTagClose").style.background="rgba(225,204,0,.5)";
	document.getElementById("titleNav").style.display="block";
// closes head element
	document.getElementById("headHeader").style.display="none";
	document.getElementById("headListHeader").style.display="none";
	document.getElementById("headList").style.display="block";
	document.getElementById("headTag").style.background="transparent";
	document.getElementById("headTagClose").style.background="transparent";
	document.getElementById("headNav").style.display="none";
	document.getElementById("headTagOmission").style.display="none";
// closes base element
	document.getElementById("baseCodeExample").style.display="none";
	document.getElementById("baseListHeader").style.display="none";
	document.getElementById("baseList").style.display="none";
	document.getElementById("baseTag").style.background="rgba(225,225,0,0)";
	document.getElementById("baseNav").style.display="none";
// closes link element
	document.getElementById("linkCodeExample").style.display="none";
	document.getElementById("linkListHeader").style.display="none";
	document.getElementById("linkList").style.display="none";
	document.getElementById("linkNav").style.display="none";
// closes meta element
	document.getElementById("metaCodeExample").style.display="none";
	document.getElementById("metaListHeader").style.display="none";
	document.getElementById("metaList").style.display="none";
	document.getElementById("metaNav").style.display="none";
// closes style element
	document.getElementById("styleCodeExample").style.display="none";
	document.getElementById("styleListHeader").style.display="none";
	document.getElementById("styleList").style.display="none";
	document.getElementById("styleNav").style.display="none";
// closes site Map
	document.getElementById("siteNav1").style.display="none";
}
function showBase() {
// opens base element
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("baseCodeExample").style.display="block";
	document.getElementById("baseListHeader").style.display="block";
	document.getElementById("baseList").style.display="block";
	document.getElementById("baseNav").style.display="block";
	document.getElementById("baseTag").style.background="rgba(225,204,0,.5)";
// closes head element
	document.getElementById("headAndTitleCodeExample").style.display="none";
	document.getElementById("headHeader").style.display="none";
	document.getElementById("headListHeader").style.display="none";
	document.getElementById("headList").style.display="none";
	document.getElementById("headTag").style.background="transparent";
	document.getElementById("headTagClose").style.background="transparent";
	document.getElementById("headNav").style.display="none";
// closes title element	
	document.getElementById("titleHeader").style.display="none";
	document.getElementById("titleListHeader").style.display="none";
	document.getElementById("titleTag").style.background="transparent";
	document.getElementById("title1").style.display="inline";
	document.getElementById("title2").style.display="none";
	document.getElementById("titleTagClose").style.background="transparent";
	document.getElementById("titleNav").style.display="none";
// closes link element
	document.getElementById("linkCodeExample").style.display="none";
	document.getElementById("linkListHeader").style.display="none";
	document.getElementById("linkList").style.display="none";
	document.getElementById("linkNav").style.display="none";
// closes meta element
	document.getElementById("metaCodeExample").style.display="none";
	document.getElementById("metaListHeader").style.display="none";
	document.getElementById("metaList").style.display="none";
	document.getElementById("metaNav").style.display="none";
// closes style element
	document.getElementById("styleCodeExample").style.display="none";
	document.getElementById("styleListHeader").style.display="none";
	document.getElementById("styleList").style.display="none";
	document.getElementById("styleNav").style.display="none";
// closes site Map
	document.getElementById("siteNav1").style.display="none";
}
function showLink() {
// opens link element
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("linkCodeExample").style.display="block";
	document.getElementById("linkListHeader").style.display="block";
	document.getElementById("linkList").style.display="block";
	document.getElementById("linkNav").style.display="block";
// closes head element
	document.getElementById("headAndTitleCodeExample").style.display="none";
	document.getElementById("headHeader").style.display="none";
	document.getElementById("headListHeader").style.display="none";
	document.getElementById("headList").style.display="none";
	document.getElementById("headTag").style.background="transparent";
	document.getElementById("headTagClose").style.background="transparent";
	document.getElementById("headNav").style.display="none";
// closes title element	
	document.getElementById("titleHeader").style.display="none";
	document.getElementById("titleListHeader").style.display="none";
	document.getElementById("titleTag").style.background="transparent";
	document.getElementById("title1").style.display="inline";
	document.getElementById("title2").style.display="none";
	document.getElementById("titleTagClose").style.background="transparent";
	document.getElementById("titleNav").style.display="none";
// opens base element
	document.getElementById("baseCodeExample").style.display="none";
	document.getElementById("baseListHeader").style.display="none";
	document.getElementById("baseList").style.display="none";
	document.getElementById("baseNav").style.display="none";
// closes meta element
	document.getElementById("metaCodeExample").style.display="none";
	document.getElementById("metaListHeader").style.display="none";
	document.getElementById("metaList").style.display="none";
	document.getElementById("metaNav").style.display="none";
// closes style element
	document.getElementById("styleCodeExample").style.display="none";
	document.getElementById("styleListHeader").style.display="none";
	document.getElementById("styleList").style.display="none";
	document.getElementById("styleNav").style.display="none";
// closes site Map
	document.getElementById("siteNav1").style.display="none";
}
function showMeta() {
// opens meta element
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("metaCodeExample").style.display="block";
	document.getElementById("metaListHeader").style.display="block";
	document.getElementById("metaList").style.display="block";
	document.getElementById("metaNav").style.display="block";
	document.getElementById("meta1").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("meta2").style.backgroundColor="rgba(225,204,0,.5)";
// closes head element
	document.getElementById("headAndTitleCodeExample").style.display="none";
	document.getElementById("headHeader").style.display="none";
	document.getElementById("headListHeader").style.display="none";
	document.getElementById("headList").style.display="none";
	document.getElementById("headTag").style.background="transparent";
	document.getElementById("headTagClose").style.background="transparent";
	document.getElementById("headNav").style.display="none";
// closes title element	
	document.getElementById("titleHeader").style.display="none";
	document.getElementById("titleListHeader").style.display="none";
	document.getElementById("titleTag").style.background="transparent";
	document.getElementById("title1").style.display="inline";
	document.getElementById("title2").style.display="none";
	document.getElementById("titleTagClose").style.background="transparent";
	document.getElementById("titleNav").style.display="none";
// closes base element
	document.getElementById("baseCodeExample").style.display="none";
	document.getElementById("baseListHeader").style.display="none";
	document.getElementById("baseList").style.display="none";
	document.getElementById("baseNav").style.display="none";
// closes link element
	document.getElementById("linkCodeExample").style.display="none";
	document.getElementById("linkListHeader").style.display="none";
	document.getElementById("linkList").style.display="none";
	document.getElementById("linkNav").style.display="none";
// closes style element
	document.getElementById("styleCodeExample").style.display="none";
	document.getElementById("styleListHeader").style.display="none";
	document.getElementById("styleList").style.display="none";
	document.getElementById("styleNav").style.display="none";
// closes site Map
	document.getElementById("siteNav1").style.display="none";
}
function showStyle() {
// opens style element
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("styleCodeExample").style.display="block";
	document.getElementById("styleListHeader").style.display="block";
	document.getElementById("styleList").style.display="block";
	document.getElementById("styleNav").style.display="block";
// closes head element
	document.getElementById("headAndTitleCodeExample").style.display="none";
	document.getElementById("headHeader").style.display="none";
	document.getElementById("headListHeader").style.display="none";
	document.getElementById("headList").style.display="none";
	document.getElementById("headTag").style.background="transparent";
	document.getElementById("headTagClose").style.background="transparent";
	document.getElementById("headNav").style.display="none";
// closes title element	
	document.getElementById("titleHeader").style.display="none";
	document.getElementById("titleListHeader").style.display="none";
	document.getElementById("titleTag").style.background="transparent";
	document.getElementById("title1").style.display="inline";
	document.getElementById("title2").style.display="none";
	document.getElementById("titleTagClose").style.background="transparent";
	document.getElementById("titleNav").style.display="none";
// closes base element
	document.getElementById("baseCodeExample").style.display="none";
	document.getElementById("baseListHeader").style.display="none";
	document.getElementById("baseList").style.display="none";
	document.getElementById("baseNav").style.display="none";
// closes link element
	document.getElementById("linkCodeExample").style.display="none";
	document.getElementById("linkListHeader").style.display="none";
	document.getElementById("linkList").style.display="none";
	document.getElementById("linkNav").style.display="none";
// closes meta element
	document.getElementById("metaCodeExample").style.display="none";
	document.getElementById("metaListHeader").style.display="none";
	document.getElementById("metaList").style.display="none";
	document.getElementById("metaNav").style.display="none";
}
function clearMetadata() {
	document.getElementById("metadataCodeExample").style.display="none";
}
//function showFocusExample() {
//}
function showNavigation() {
// opens siteWide Navigation 
	document.getElementById("metadataCodeExample").style.display="block";
	document.getElementById("siteNav1").style.display="block";
// closes head element
	document.getElementById("headAndTitleCodeExample").style.display="none";
	document.getElementById("headListHeader").style.display="none";
	document.getElementById("headList").style.display="none";
	document.getElementById("headNav").style.display="none";
// closes title element
	document.getElementById("titleListHeader").style.display="none";
	document.getElementById("titleNav").style.display="none";
// closes base element
	document.getElementById("baseCodeExample").style.display="none";
	document.getElementById("baseListHeader").style.display="none";
	document.getElementById("baseList").style.display="none";
	document.getElementById("baseNav").style.display="none";
// closes link element
	document.getElementById("linkCodeExample").style.display="none";
	document.getElementById("linkListHeader").style.display="none";
	document.getElementById("linkList").style.display="none";
	document.getElementById("linkNav").style.display="none";
// closes meta element
	document.getElementById("metaCodeExample").style.display="none";
	document.getElementById("metaListHeader").style.display="none";
	document.getElementById("metaList").style.display="none";
	document.getElementById("metaNav").style.display="none";
// closes style element
	document.getElementById("styleCodeExample").style.display="none";
	document.getElementById("styleListHeader").style.display="none";
	document.getElementById("styleList").style.display="none";
	document.getElementById("styleNav").style.display="none";
}
function closeSiteNav() {
	document.getElementById("metadataCodeExample").style.display="none";
	document.getElementById("siteNav1").style.display="none";
	document.getElementById("siteNavSpecsPage").style.display="none";
}// END  Document Metadata functions
//************** Sections functions
function showSections() {
	document.getElementById("sectionsExamples").style.display="block";
}
function closeSections() {
	document.getElementById("sectionsExamples").style.display="none";
	document.getElementById("groupingContentExamples").style.display="none";
	document.getElementById("metadataCodeExample").style.display="none";
}
function scrollToTopClose() {
	document.getElementById("sectionsExamples").style.display="none";
	document.getElementById("metadataCodeExample").style.display="none";
	document.getElementById("siteNavElements").style.display="none";
	document.getElementById("groupingContentExamples").style.display="none";
}
// Grouping Content Elements
// show p element
function showp() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="block";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showhr() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="block";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showpre() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="block";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showblockquote() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="block";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showol() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="block";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showul() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="block";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showli() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="block";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showdl() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="block";
	document.getElementById("dlElementHeader").innerHTML = "dl";
	document.getElementById("dlPurpose").innerHTML = "List";
	document.getElementById("usingdlelement").innerHTML = "dl";
	document.getElementById("dlh1").innerHTML = "dl";
	document.getElementById("dlOpeningTag").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("dlClosingTag").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("dtOpeningTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtClosingTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag3").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag3").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag4").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag4").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag5").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag5").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtOpeningTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtClosingTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag6").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag6").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag7").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag7").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag8").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag8").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dlNav").style.display="block";
	document.getElementById("dtNav").style.display="none";
	document.getElementById("ddNav").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showdt() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="block";
	document.getElementById("dlElementHeader").innerHTML = "dt";
	document.getElementById("dlPurpose").innerHTML = "Term";
	document.getElementById("usingdlelement").innerHTML = "dt";
	document.getElementById("dlh1").innerHTML = "dt";
	document.getElementById("dlOpeningTag").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dlClosingTag").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtOpeningTag1").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("dtClosingTag1").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("dtOpeningTag2").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("dtClosingTag2").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag3").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag3").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag4").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag4").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag5").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag5").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag6").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag6").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag7").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag7").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag8").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddClosingTag8").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dlNav").style.display="none";
	document.getElementById("dtNav").style.display="block";
	document.getElementById("ddNav").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showdd() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="block";
	document.getElementById("dlElementHeader").innerHTML = "dd";
	document.getElementById("dlPurpose").innerHTML = "Description";
	document.getElementById("usingdlelement").innerHTML = "dd";
	document.getElementById("dlh1").innerHTML = "dd";
	document.getElementById("dlOpeningTag").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dlClosingTag").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtOpeningTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtClosingTag1").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtOpeningTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("dtClosingTag2").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("ddOpeningTag1").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag1").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag2").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag2").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag3").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag3").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag4").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag4").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag5").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag5").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag6").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag6").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag7").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag7").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddOpeningTag8").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("ddClosingTag8").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("dlNav").style.display="none";
	document.getElementById("dtNav").style.display="none";
	document.getElementById("ddNav").style.display="block";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showfigure() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="block";
	document.getElementById("figureSectionHeader").innerHTML="figure";
	document.getElementById("figcaptionPurpose").style.display="none";
	document.getElementById("usingTheElement").innerHTML="figure";
	document.getElementById("figureDocumenth1").innerHTML="figure";
	document.getElementById("figureDocumenth1").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("figureOpeningTag").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("figureClosingTag").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("figcaptionCodeLine").style.display="none";
	document.getElementById("openfigureExample").style.display="inline";
	document.getElementById("openfigcaptionExample").style.display="none";
	document.getElementById("figureNav").style.display="block";
	document.getElementById("figcaptionNav").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function showfigcaption() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="block";
	document.getElementById("figureSectionHeader").innerHTML="figcaption";
	document.getElementById("figcaptionPurpose").style.display="block";
	document.getElementById("usingTheElement").innerHTML="figcaption";
	document.getElementById("figureDocumenth1").innerHTML="figcaption";
	document.getElementById("figureOpeningTag").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("figureClosingTag").style.backgroundColor="rgba(225,204,0,0)";
	document.getElementById("figcaptionCodeLine").style.display="list-item";
	document.getElementById("figcaptionOpeningTag").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("figcaptionClosingTag").style.backgroundColor="rgba(225,204,0,.5)";
	document.getElementById("openfigureExample").style.display="none";
	document.getElementById("openfigcaptionExample").style.display="inline";
	document.getElementById("figureNav").style.display="none";
	document.getElementById("figcaptionNav").style.display="block";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
function viewfigureExample() {
	document.getElementById("figureFigcaptionExample").style.display="block";
	document.getElementById("figureh1Display").innerHTML="figure";
	document.getElementById("figcaptionExample").style.display="none";
}
function viewfigcaptionExample() {
	document.getElementById("figureFigcaptionExample").style.display="block";
	document.getElementById("figureh1Display").innerHTML="figcaption";
	document.getElementById("figcaptionExample").style.display="block";
}
function closefigcaptionExample() {
	document.getElementById("figureFigcaptionExample").style.display="none";
}
function showdiv() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="block";
	document.getElementById("mainCodingExample").style.display="none";
}
function showmain() {
	document.getElementById("groupingContentExamples").style.display="block";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="block";
}
function closeGroupingContent() {
	document.getElementById("groupingContentExamples").style.display="none";
	document.getElementById("pCodingExample").style.display="none";
	document.getElementById("hrCodingExample").style.display="none";
	document.getElementById("preCodingExample").style.display="none";
	document.getElementById("blockquoteCodingExample").style.display="none";
	document.getElementById("olCodingExample").style.display="none";
	document.getElementById("liCodingExample").style.display="none";
	document.getElementById("ulCodingExample").style.display="none";
	document.getElementById("dlCodingExample").style.display="none";
	document.getElementById("dtCodingExample").style.display="none";
	document.getElementById("ddCodingExample").style.display="none";
	document.getElementById("figureCodingExample").style.display="none";
	document.getElementById("figcaptionCodingExample").style.display="none";
	document.getElementById("divCodingExample").style.display="none";
	document.getElementById("mainCodingExample").style.display="none";
}
//  end Grouping Content
// site Map
function showCodingZoneNav() {
	document.getElementById("codingZoneNav").style.display="block";
	document.getElementById("sectionsExamples").style.display="none";
}
function closeCodingZoneNav() {
	document.getElementById("codingZoneNav").style.display="none";
}
function showCodingZoneNavElement() {
	document.getElementById("codingZoneNavElement").style.display="block";
	document.getElementById("sectionsExamples").style.display="none";
	document.getElementById("groupingExamples").style.display="none";
}
function closeCodingZoneNavElement() {
	document.getElementById("codingZoneNavElement").style.display="none";
}
//  end site map 
function showFooter() {
	document.getElementById("sectionsExamples").style.display="block";
	document.getElementById("message").style.display="none";
	document.getElementById("footerTag").style.display="block";
	document.getElementById("addressTag").style.display="none";
	document.getElementById("footerPurpose").style.display="block";
	document.getElementById("addressPurpose").style.display="none";
	document.getElementById("footerHeader").style.display="block";
	document.getElementById("addressHeader").style.display="none";
	document.getElementById("olListFooter").style.display="block";
	document.getElementById("olListAddress").style.display="none";
	document.getElementById("showFooterExample").style.display="inline";
	document.getElementById("showAddressExample").style.display="none";
	document.getElementById("footerNav").style.display="block";
	document.getElementById("footerExample").style.display="none";
	document.getElementById("addressNav").style.display="none";
}
function showAddress() {
	document.getElementById("sectionsExamples").style.display="block";
	document.getElementById("message").style.display="none";
	document.getElementById("footerTag").style.display="none";
	document.getElementById("addressTag").style.display="block";
	document.getElementById("footerPurpose").style.display="none";
	document.getElementById("addressPurpose").style.display="block";
	document.getElementById("footerHeader").style.display="none";
	document.getElementById("addressHeader").style.display="block";
	document.getElementById("olListFooter").style.display="none";
	document.getElementById("olListAddress").style.display="block";
	document.getElementById("showFooterExample").style.display="none";
	document.getElementById("showAddressExample").style.display="inline";
	document.getElementById("footerNav").style.display="none";
	document.getElementById("footerExample").style.display="none";
	document.getElementById("addressNav").style.display="block";
}
function viewExample1() {
	document.getElementById("footerExample").style.display="block";
	document.getElementById("footerH1").style.display="block";
	document.getElementById("addressH1").style.display="none";
	document.getElementById("footerFooterExample").style.display="block";
	document.getElementById("footerAddressExample").style.display="none";
	document.getElementById("closeLink").style.display="inline";
}
function viewExample2() {
	document.getElementById("footerExample").style.display="block";
	document.getElementById("footerH1").style.display="none";
	document.getElementById("addressH1").style.display="block";
	document.getElementById("footerFooterExample").style.display="none";
	document.getElementById("footerAddressExample").style.display="block";
	document.getElementById("copyright2").style.display="inline";
	document.getElementById("closeLink").style.display="inline";
}
function closeMultipleExamples() {
	document.getElementById("footerExample").style.display="none";
}
function headingsExampleH1() {
	document.getElementById("h1Default").style.display="block";
	document.getElementById("h2Default").style.display="none";
	document.getElementById("h3Default").style.display="none";
	document.getElementById("h4Default").style.display="none";
	document.getElementById("h5Default").style.display="none";
	document.getElementById("h6Default").style.display="none";
}
$(document).ready(function () {
  $('.backToTopScroll').hide();
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
  if ($(this).scrollTop() > 650) {
    $('.backToTopScroll').fadeIn();
  } else {
    $('.backToTopScroll').fadeOut();
  }
});
 
//Click event to scroll to top
$('.backToTopScroll').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 800);
  return false;
  });
});
function scrollToTopClose() {
	document.getElementById("metadataCodeExample").style.display="none";
	document.getElementById("sectionsExamples").style.display="none";
	document.getElementById("groupingContentExamples").style.display="none";
	document.getElementById("textLevelSemantics").style.display="none";
	document.getElementById("codingZoneNavElement").style.display="none";
	document.getElementById("codingZoneNav").style.display="none";
}
function popUp(URL) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'width=625,height=450,left=350,top=100');");
}
function closeWindow() {
    this.window.close();
}
function nameFocus() {
    document.getElementById("name").focus();
}
function siteWidepopUp(URL) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'width=625,height=450,left=350,top=100');");
}
function changeColorScript() {
	var script=document.getElementById("scriptTag");
	var scriptClose=document.getElementById("scriptClose");
	var noscript=document.getElementById("noscriptTag");
	var noscriptClose=document.getElementById("noscriptClose");
    script.style.background="rgba(225,204,0,.5)";
    scriptClose.style.background="rgba(225,204,0,.5)";
    noscript.style.background="transparent";
    noscriptClose.style.background="transparent";
}
function changeColorNoscript() {
	var script=document.getElementById("scriptTag");
	var scriptClose=document.getElementById("scriptClose");
	var noscript=document.getElementById("noscriptTag");
	var noscriptClose=document.getElementById("noscriptClose");
    noscript.style.background="rgba(225,204,0,.5)";
    noscriptClose.style.background="rgba(225,204,0,.5)";
    script.style.background="transparent";
    scriptClose.style.background="transparent";
}
//  automatic breadcrumbs navigation
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
    output += bits[i] + "/\">" + bits[i] + "</a> <span class=charfix>&#10147;</span> ";
  }
  document.write(output + document.title);
  document.write("</nav>");
  }
//
////Last updated notice in footer
//function modDate() {
//var defaultDate = "06/01/2014";
//var lm = document.lastModified
//if (Date.parse(lm) == 0) {
//lm = defaultDate
//}
//document.write("<span class='b'>Date and Time Last Modified:</span> " + lm)
//}
//function modifiedDate() {
//	
//				months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
//				var d=new Date();
//				var weekday=new Array(7);
//				weekday[0]="Sunday";
//				weekday[1]="Monday";
//				weekday[2]="Tuesday";
//				weekday[3]="Wednesday";
//				weekday[4]="Thursday";
//				weekday[5]="Friday";
//				weekday[6]="Saturday";
//				var d = new Date();
//				(d.getFullYear());
//				var theDate = new Date(document.lastModified); 
//				theDate.setTime((theDate.getTime()+(60*60)) ) //  "+weekday[getDay()]+'<span class='b'>&#44;</span> '+months[getMonth()]+' '+getDate()+'<span class='b'>&#44;</span> '+d.getFullYear()+' <span class='b'>&#64;</span> '+getHours()+':'+getMinutes()+"
//				with (theDate) { 
//				document.write("<span>Last Modified<b>&#58;</b> "+weekday[getDay()]+'<b>&#44;</b> '+months[getMonth()]+' '+getDate()+'<b>&#44;</b> '+d.getFullYear()+' <b>&#64;</b> '+getHours()+':'+getMinutes()+" EST</span>") 
//				} 
//}
// popup dialog
function showHixieQuote()	{
	document.getElementById('hixieQuote').style.display='block';
}
function closeHixieQuote() {
	document.getElementById('hixieQuote').style.display='none';
}
	
	
function move_box(an, box) {
  var cleft = 0;
  var ctop = 0;
  var obj = an;
  while (obj.offsetParent) {
    cleft += obj.offsetLeft;
    ctop += obj.offsetTop;
    obj = obj.offsetParent;
  }
  box.style.left = cleft + 'px';
  ctop += an.offsetHeight + 8;
  if (document.body.currentStyle &&
    document.body.currentStyle['marginTop']) {
    ctop += parseInt(
      document.body.currentStyle['marginTop']);
  }
  box.style.top = ctop + 'px';
}
function show_hide_box(an, width, height, borderStyle) {
  var href = an.href;
  var boxdiv = document.getElementById(focusExample);
  if (boxdiv != null) {
    if (boxdiv.style.display=='none') {
      move_box(an, boxdiv);
      boxdiv.style.display='block';
    } else
      boxdiv.style.display='none';
    return false;
  }
  boxdiv = document.createElement('div');
  boxdiv.setAttribute('id',focusExample );
  boxdiv.style.display = 'block';
  boxdiv.style.position = 'absolute';
  boxdiv.style.width = width + 'px';
  boxdiv.style.height = height + 'px';
  boxdiv.style.border = borderStyle;
  boxdiv.style.backgroundColor = '#fff';
  var contents = document.createElement('iframe');
  contents.scrolling = 'no';
  contents.frameBorder = '0';
  contents.style.width = width + 'px';
  contents.style.height = height + 'px';
  contents.src = href;
  boxdiv.appendChild(contents);
  document.body.appendChild(boxdiv);
  move_box(an, boxdiv);
  return false;
}
$(document).ready(function() {
    $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    $("#figureImageNext").click(function() {
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().show().prev().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:first").show();
        }
        return false;
    });
    $("#figureImagePrev").click(function() {
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().show().next().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:last").show();
        }
        return false;
    });
});