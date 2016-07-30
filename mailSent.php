<?php
// remember to replace your@email.com with your own email address lower in this code.
// load the variables form address bar
$name = $_REQUEST["name"];
$subject = $_REQUEST["subject"];
$message = $_REQUEST["message"];
$from = $_REQUEST["from"];
$verif_box = $_REQUEST["verif_box"];
// remove the backslashes that normally appears when entering " or '
$name = stripslashes($name); 
$message = stripslashes($message); 
$subject = stripslashes($subject); 
$from = stripslashes($from); 
// check to see if verificaton code was correct
if(md5($verif_box).'a4xn' == $_COOKIE['tntcon']){
	// if verification code was correct send the message and show this page
	$message = "Name: ".$name."\n".$message;
	$message = "From: ".$from."\n".$message;
	mail("barrysmith@bearzdesignconcepts.net,bearzteez@outlook.com,bearzteez@live.com", 'Contact Form: '.$subject, $_SERVER['REMOTE_ADDR']."\n\n".$message, "From: $from");
	// delete the cookie so it cannot sent again by refreshing this page
	setcookie('tntcon','');
} else {
	// if verification code was incorrect then return to contact page and show error
	header("Location:".$_SERVER['HTTP_REFERER']."?subject=$subject&from=$from&message=$message&wrong_code=true");
	exit;
}
?>
<!DOCTYPE html>
<html lang="en-US">
<!--
	Website: Bearz Web & GraFX Dezign www.bearzdesignconcepts.net
    File Name: mailSent.php
    Author: Barry Smith
-->
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="keywords" content="Bearz Design Concepts, Bearz Web and Graphics Design, Bearz Design, Graphic Design, Web Design, The Coding Zone, HTML Elements, HTML5 Elements, HTML Tags, HTML Tag Use, Typography, HTML Syntax, CSS Default Display Settings, Coding, Validation, HTML, HTHL5, CSS3, Coding Zone">
	<meta name="description" content="Simple and affordable alternative to Web Design with the small business in mind">
	<title>
		Message Sent
	</title>
			<!-- supporting CSS and JavaScript and favicon files -->
    <link href="css3/leadPage.css" rel="stylesheet" type="text/css">
	<link href="css3/textStyles.css" rel="stylesheet" type="text/css">
	<link href="css3/myAlerts.css" rel="stylesheet" type="text/css">
	<link href="css3/cssToolTip.css" rel="stylesheet" type="text/css">
	<link href="css3/specialEffects.css" rel="stylesheet" type="text/css">
	<link href="css3/myAnimations.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/embeddedFonts.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/alluraWebReady/allura.css" rel="stylesheet" type="text/css">
	<link href="TheCSSZone/embeddedFonts/fontSavatage/savatage.css" rel="stylesheet" type="text/css">
    <link href="icon/iconBDC/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57">
    <link href="icon/iconBDC/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60">
    <link href="icon/iconBDC/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
    <link href="icon/iconBDC/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
    <link href="icon/iconBDC/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
    <link href="icon/iconBDC/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
    <link href="icon/iconBDC/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">
    <link href="icon/iconBDC/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
    <link href="icon/iconBDC/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">
    <link href="icon/iconBDC/android-icon-192x192.png" rel="icon" type="image/png" sizes="192x192">
    <link href="icon/iconBDC/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
    <link href="icon/iconBDC/favicon-96x96.png" rel="icon" type="image/png" sizes="96x96">
    <link href="icon/iconBDC/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
    <link href="icon/iconBDC/manifest.json" rel="manifest">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="scripts/siteFunctions.js" type="text/javascript"></script>
</head>
<body id="mailSentPHP-page" class="mailSentPage">
    <div id="mailSentDialog" class="mailSentDialog myAlertFlipIn">
        <h4 class="messageSentHeader"><span class="bearzLogoFooter">Bear<span class="footerSmall">Z</span> &thinsp;Web &thinsp;&amp; &thinsp;Gra<small class="footerSmall">F&thinsp;X</small> &thinsp;De<small class="footerSmall">Z</small>ign</span></h4>
        <p class="messageSentIcon"></p>
        <p class="sentMessage1"></p>
        <p class="sentMessage2"></p>
        <p class="sentMessageSign"></p>
        <button class="alertButtons sentButton" onClick="javascript:history.back(1)" type="button">Close and Return</button>
    </div>
</body>
</html>