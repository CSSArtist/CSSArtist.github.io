// JavaScript Document
// Site general functions
// bearzScripts.js
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