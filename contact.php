<!DOCTYPE HTML>
<html lang="en-US">
<!--
	Website: Bearz Design Concepts, The HTML Zone
    URL: www.bearzdesignconcepts.net/contact.php
    File Name: contact.php
    Author: Barry Smith
    resources:
-->
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="keywords" content="Barry Smith, Bearz Design Concepts, Bears Design Concepts, 
    	Bearz Design, Bears Design, Bears Web and Graphics, Bearz Web and Graphics, The Coding Zone, HTML Elements, 
        HTML5 Elements, HTML Tags, HTML Tag Use, Typography, HTML Syntax, CSS Default Display Settings, 
        Coding, Validation, HTML, HTHL5, CSS3, Coding Zone">
	<meta name="description" content="An HTML5/CSS3 Instructional web site with the student in mind">
    <title>
    	E-Mail Contact Form
	</title>
			<!-- supporting CSS and JavaScript and favicon files -->
	<link href="css3/MainLayout.css" rel="stylesheet" type="text/css">
	<link href="css3/banner_Logo.css" rel="stylesheet" type="text/css">
	<link href="css3/nav.css" rel="stylesheet" type="text/css">
	<link href="css3/textStyles.css" rel="stylesheet" type="text/css">
	<link href="css3/responsiveCSS.css" rel="stylesheet" type="text/css">
	<link href="css3/cssToolTip.css" rel="stylesheet" type="text/css">
	<link href="css3/specialEffects.css" rel="stylesheet" type="text/css">
	<link href="css3/myAnimations.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/embeddedFonts.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/inconsolata/inconsolata.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/alluraWebReady/allura.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/fontSavatage/savatage.css" rel="stylesheet" type="text/css">
    <link href="icon/apple-icon-57X57.png" rel="apple-touch-icon" sizes="57x57">
    <link href="icon/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60">
    <link href="icon/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
    <link href="icon/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
    <link href="icon/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
    <link href="icon/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
    <link href="icon/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">
    <link href="icon/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
    <link href="icon/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">
    <link href="icon/android-icon-192x192.png" rel="icon" type="image/png" sizes="192x192">
    <link href="icon/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
    <link href="icon/favicon-96x96.png" rel="icon" type="image/png" sizes="96x96">
    <link href="icon/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
    <link href="icon/manifest.json" rel="manifest">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="scripts/siteFunctions.js" type="text/javascript"></script>
    <script src="scripts/jquery_v2.0.0.js" type="text/javascript"></script>
    <script>document.createElement("tooltip")</script><!-- satisfies IE for a my custom element-->
    <!-- used for my floating back button in lower right corner -->
	<script>
		$(document).ready(function () {  $('.backToTopScroll').hide();//Check to see if the window is top if not then display button
		$(window).scroll(function () {  if ($(this).scrollTop() > 650) {    $('.backToTopScroll').fadeIn();  } else {    $('.backToTopScroll').fadeOut();  }}); //Click event to scroll to top
		$('.backToTopScroll').click(function () {  $('html, body').animate({ scrollTop: 0 }, 900);  return false;  });});
    </script>
    <script>
		function breadcrumbs() {
			sURL = new String;
		  	bits = new Object;
		  	var x = 0;
		  	var stop = 0;
		  	var output = "<div><a class=navBlur2 href=/>home</a> <span class=charfix>&#10147;</span> ";
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
				output += "<a class=navBlur2 href=\"";
				for(y=1;y<x-i;y++){
			  	output += "";
				}
				output += bits[i] + "/\">" + bits[i] + "</a> <span class=charfix>&#10146;</span> ";
		  	}
		  	document.write(output + document.title);
		  	document.write("</div>");
		}
    </script>
</head>
<body id="contact-page">
	<section id="wrapper" class="colGradient pageFadeIn">
        <header id="BannerLogo" class="headerBackgroundDim">
            <img src="images/pageBanner.png" alt="Bearz Web and Grafx Dezign">
        </header>
        <header id="BannerLogoResponsive" class="responsiveBackground">
            <h1 class="myH2 displayNone">barry l. smith<br><span>electronic portfolio</span></h1>
            <img id="BannerLogo2" class="logoSwap displayNone" src="images/tradeMark_300.png" alt="BearZ Web &amp; GraFX DeZign Logo">
            <noscript>
                 <p>To completely experience the functionality of this site<b>&#44;</b> it is necessary to enable JavaScript<b>&#46;</b>&ensp;<br>
                 Here are the <a class="textLink" href="http://www.enable-javascript.com/" target="_blank"><samp>www.enable-javascript.com</samp>instructions how to enable JavaScript</a> in your web browser<b>&#46;</b></p>
            </noscript><hr class="speedInLeft topNavBorderTop">
            <nav id="topNavBar" class="speedInLeft topNavContactphp navBarGradient2">
                <script type="text/javascript">breadcrumbs()</script><hr class="speedInLeft topNavBorderBottom">
            </nav>
		</header><hr class="hr-noLine-spacer2pt25">
        <section class="basicContainerNoBackground myAppearIn">
            <h2 class="contactFormH2 libSerifBoldItalic">Contact Information</h2><hr class="hr-noLine-spacer2">
            <form action="mailSent.php" method="post" name="form1" id="form1"  class="contactForm" onSubmit="MM_validateForm('from','','RisEmail','subject','','R','verif_box','','R','message','','R');return document.MM_returnValue">
                <span class="contactFormH4">Please Enter Your Name&#58;</span><hr class="hr-noLine-spacerPt5">
                <input name="name" type="text" id="name" class="contactFormName" placeholder="Your Name" value="<?php echo $_GET['name'];?>"/><hr class="hr-noLine-spacer1pt5">
                <span class="contactFormH4">Please Enter Your E-mail&#58;</span><hr class="hr-noLine-spacerPt5">
                <input name="from" type="text" id="from" class="contactFormEmail" placeholder="Your Email" value="<?php echo $_GET['from'];?>"/><hr class="hr-noLine-spacer1pt5">
                <span class="contactFormH4">Subject&#58;</span><hr class="hr-noLine-spacerPt5">
                <input name="subject" type="text" id="subject" class="contactFormSubject" value="<?php echo $_GET['subject'];?>"/><hr class="hr-noLine-spacer1pt5">
                <span class="contactFormH4">Please enter the code&#58;</span><hr class="hr-noLine-spacerPt5">
                <input name="verif_box" type="text" id="verif_box" class="contactFormVerify">
                <img src="verificationimage.php?<?php echo rand(0,9999);?>" alt="verification image, type it in the box" width="50" height="24" align="absbottom">
                <!-- if the variable "wrong_code" is sent from previous page then display the error field -->
                <?php if(isset($_GET['wrong_code'])){?>
                <div class="wrongCode">My Apologizes, Please Re-enter</div><hr class="hr-noLine"> 
                <?php ;}?><hr class="hr-noLine-spacer1pt5">
                <span class="contactFormH4">Please Enter Your Message&#58;</span><hr class="hr-noLine-spacerPt5">
                <textarea name="message" rows="5" cols="30" id="message" class="contactFormTextarea" placeholder="Message"><?php echo $_GET['message'];?></textarea><hr class="hr-noLine-spacer1pt5">
                <input name="Submit" type="submit" class="submit" value="Send Message"><hr class="hr-noLine-spacer1pt25">
            </form>
        </section>
		<footer class="pgFooter2">
            <hr class="codingZone2">
            This Web Site has been created using the latest in <img class="footerImage" src="images/HTML5Logo.png" alt="Valid HTML5!"> Technology<hr class="hr-noLine-spacer1">
            Copyright <b>&copy;</b> 2014&thinsp;<b>&ndash;</b>&thinsp;<span id="copyright">...</span><hr class="hr-noLine-spacer1"><span class="bearzLogoFooter">Bear<span class="footerSmall">Z</span> &thinsp;Web &thinsp;&amp; &thinsp;Gra<small class="footerSmall">F&thinsp;X</small> &thinsp;De<small class="footerSmall">Z</small>ign</span><hr class="hr-noLine-spacer1">All rights reserved<b>&#46;</b><hr class="hr-noLine-spacer1">
            This work is licensed under<hr class="hr-noLine-spacer1"><a class="textLinkListBottom ccTarget" rel="license external" href="http://creativecommons.org/licenses/by/4.0/" target="_blank"><span class="tipZoomIn">https://creativecommons.org/licenses/by/4.0/</span>Creative Commons Attribution 4.0 International License</a>
            <hr class="hr-noLine-spacer1">
            <script type="text/javascript">
            function copyDate() {
              var cpyrt = document.getElementById("copyright")
              if (cpyrt) {
                 cpyrt.firstChild.nodeValue = (new Date()).getFullYear();
              }
            }
            window.onload = copyDate;
            </script><hr class="hr-noLine-spacer1">
			<script> 
				months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
				var d=new Date();
				var weekday=new Array(7); weekday[0]="Sunday"; weekday[1]="Monday"; weekday[2]="Tuesday"; weekday[3]="Wednesday"; weekday[4]="Thursday"; weekday[5]="Friday"; weekday[6]="Saturday";
				var d = new Date();
				(d.getFullYear());
				var theDate = new Date(document.lastModified); 
				theDate.setTime((theDate.getTime()+(60*60)) ) 
				with (theDate) { 
				document.write("<span class='italicsBold'>Last Modified<b>&#58;</b></span> <time class='modifiedDate'>"+weekday[getDay()]+'<b>&#44;&thinsp;</b>'+months[getMonth()]+'&thinsp;'+getDate()+'<b>&#44;&thinsp;</b>'+d.getFullYear()+'<b>&ensp;&#64;&ensp;</b>'+getHours()+':'+getMinutes()+"</time>&thinsp;&ensp;<span class='italicsBold'>EST</span>") 
				} 
			</script><hr class="hr-noLine-spacer2"><hr class="codingZoneBottomFooter">
        </footer>
    </section>
</body>
</html>
