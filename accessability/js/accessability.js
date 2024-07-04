var LANAGUAGE = 'en-US';
const widgetSection = 
	`<div class="uwaw uw-light-theme gradient-head uwaw-initial paid_widget" id="uw-main" >
	<div class="relative second-panel">
		<h3>Accessibility options</h3>
		<div class="uwaw-close" onclick="closeMain()"></div>
	</div>
	<div class="uwaw-body">
		<div class="h-scroll">
			<div class="uwaw-features">
				<div class="uwaw-features__item reset-feature" id="featureItem_sp">
					<button id="speak" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon"> <span class="waf-icon icon-speaker"> </span> </span>
						<span class="uwaw-features__item__name">Screen Reader</span> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon_sp" style="display: none;"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem">
					<button id="btn-s9" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-bigger-text"> </span>
						</span><span class="uwaw-features__item__name">Bigger Text</span>
						<div class="uwaw-features__item__steps reset-steps" id="featureSteps">
							<!-- Steps span tags will be dynamically added here -->
						</div> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon" style="display: none"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-st">
					<button id="btn-small-text" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-small-text"> </span>
						</span><span class="uwaw-features__item__name">Small Text</span>
						<div class="uwaw-features__item__steps reset-steps" id="featureSteps-st">
							<!-- Steps span tags will be dynamically added here -->
						</div> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-st" style="display: none"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-lh">
					<button id="btn-s12" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-line-hight"> </span>
						</span>
						<span class="uwaw-features__item__name">Line Height</span>
						<div class="uwaw-features__item__steps reset-steps" id="featureSteps-lh">
							<!-- Steps span tags will be dynamically added here -->
						</div> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-lh" style="display: none"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-ht">
					<button id="btn-s10" onclick="highlightLinks()" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-highlight-links"> </span>
						</span> <span class="uwaw-features__item__name">Highlight Links</span> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-ht" style="display: none"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-ts">
					<button id="btn-s13" onclick="increaseAndReset()" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-text-spacing"> </span>
						</span> <span class="uwaw-features__item__name">Text Spacing</span>
						<div class="uwaw-features__item__steps reset-steps" id="featureSteps-ts">
							<!-- Steps span tags will be dynamically added here -->
						</div> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-ts" style="display: none"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-df">
					<button id="btn-df" onclick="toggleFontFeature()" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-dyslexia-font"> </span>
						</span> <span class="uwaw-features__item__name">Dyslexia Friendly</span> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-df" style="display: none;"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-hi">
					<button id="btn-s11" onclick="toggleImages()" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon">
							<span class="waf-icon icon-hide-images"> </span>
						</span>
						<span class="uwaw-features__item__name">Hide Images</span> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-hi" style="display: none;"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-Cursor">
					<button id="btn-cursor" onclick="toggleCursorFeature()" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon"> <span class="waf-icon icon-cursor"> </span> </span>
						<span class="uwaw-features__item__name">Cursor</span> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-cursor" style="display: none;"> </span>
					</button>
				</div>
				<div class="uwaw-features__item reset-feature" id="featureItem-ht-dark">
					<button id="dark-btn" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__name">
							<span class="light_dark_icon">
								<input type="checkbox" class="light_mode uwaw-featugres__item__i" id="checkbox"> <label for="checkbox" class="checkbox-label">
									<!-- <i class="fas fa-moon-stars"></i> --> <i class="fas fa-moon-stars">
										<span class="waf-icon icon-moon"></span>
									</i> <i class="fas fa-sun">
										<span class="waf-icon icon-sun"></span>
									</i> <span class="ball"></span>
								</label>
							</span> <span class="uwaw-features__item__name">Light-Dark</span>
						</span>
						<span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-ht-dark" style="display: none; pointer-events: none;"> </span>
					</button>
				</div>
				<!-- Invert Colors Widget -->
				<div class="uwaw-features__item reset-feature" id="featureItem-ic">
					<button id="btn-invert" class="uwaw-features__item__i" data-uw-reader-content="Enable the UserWay screen reader" aria-label="Enable the UserWay screen reader" aria-pressed="false">
						<span class="uwaw-features__item__icon"> <span class="waf-icon icon-invert"> </span> </span>
						<span class="uwaw-features__item__name">Invert Colors</span> <span class="tick-active uwaw-features__item__enabled reset-tick" id="tickIcon-ic" style="display: none"> </span>
					</button>
				</div>
			</div>
		</div> <!-- Reset Button -->
	</div>
	<div class="reset-panel">
		<!-- copyright accessibility bar -->
		<div class="copyrights-accessibility">
			<button class="btn-reset-all" id="reset-all" onclick="resetAll()">
				<span class="reset-icon"> </span> <span class="reset-btn-text">Reset All Settings</span>
			</button>
			<!-- <a href="https://www.ux4g.gov.in" target="_blank" class="copyright-text" contenteditable="false"
				style="cursor: pointer;"> <span class="uwaw-features__item__name waf-copy waf-copyright">Created
					by</span> <img src="https://www.ux4g.gov.in/assets/img/logo/waf-logo.svg" alt="logo"
					loading="lazy"> </a> -->
		</div>
	</div>
</div>`;
var accessabilityBtnText = 
	`<img src="data:image/svg+xml,%0A%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_1506)'%3E%3Cpath d='M16 7C15.3078 7 14.6311 6.79473 14.0555 6.41015C13.4799 6.02556 13.0313 5.47894 12.7664 4.83939C12.5015 4.19985 12.4322 3.49612 12.5673 2.81719C12.7023 2.13825 13.0356 1.51461 13.5251 1.02513C14.0146 0.535644 14.6383 0.202301 15.3172 0.0672531C15.9961 -0.0677952 16.6999 0.00151652 17.3394 0.266423C17.9789 0.53133 18.5256 0.979934 18.9101 1.55551C19.2947 2.13108 19.5 2.80777 19.5 3.5C19.499 4.42796 19.1299 5.31762 18.4738 5.97378C17.8176 6.62994 16.928 6.99901 16 7Z' fill='white'/%3E%3Cpath d='M27 7.05L26.9719 7.0575L26.9456 7.06563C26.8831 7.08313 26.8206 7.10188 26.7581 7.12125C25.595 7.4625 19.95 9.05375 15.9731 9.05375C12.2775 9.05375 7.14313 7.67875 5.50063 7.21188C5.33716 7.14867 5.17022 7.09483 5.00063 7.05063C3.81313 6.73813 3.00063 7.94438 3.00063 9.04688C3.00063 10.1388 3.98188 10.6588 4.9725 11.0319V11.0494L10.9238 12.9081C11.5319 13.1413 11.6944 13.3794 11.7738 13.5856C12.0319 14.2475 11.8256 15.5581 11.7525 16.0156L11.39 18.8281L9.37813 29.84C9.37188 29.87 9.36625 29.9006 9.36125 29.9319L9.34688 30.0112C9.20188 31.0206 9.94313 32 11.3469 32C12.5719 32 13.1125 31.1544 13.3469 30.0037C13.5813 28.8531 15.0969 20.1556 15.9719 20.1556C16.8469 20.1556 18.6494 30.0037 18.6494 30.0037C18.8838 31.1544 19.4244 32 20.6494 32C22.0569 32 22.7981 31.0162 22.6494 30.0037C22.6363 29.9175 22.6206 29.8325 22.6019 29.75L20.5625 18.8294L20.2006 16.0169C19.9387 14.3788 20.1494 13.8375 20.2206 13.7106C20.2225 13.7076 20.2242 13.7045 20.2256 13.7013C20.2931 13.5763 20.6006 13.2963 21.3181 13.0269L26.8981 11.0763C26.9324 11.0671 26.9662 11.0563 26.9994 11.0438C27.9994 10.6688 28.9994 10.15 28.9994 9.04813C28.9994 7.94625 28.1875 6.73813 27 7.05Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_1506'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A" style="visibility: visible !important;">
	<span>Accessibility Options</span>`;
	
function isExcludedElement(element) {
	// Check if the element is inside #uw-main or has class .uwaw-features__item__name
	if (
		element.closest('#uw-main') ||
		element.classList.contains('uwaw-features__item__name') ||
		element.classList.contains('waf-text-spacing') ||
		element.classList.contains('feature-image') ||
		element.classList.contains('icon_global') ||
		element.classList.contains('copyright-text') ||
		element.classList.contains('waf-copy')
	) {
		return true;
	}

	// Exclude script and svg elements
	if (element.tagName === 'SCRIPT' || element.tagName === 'DIV' || element.tagName === 'LINK' ||
		element.tagName === 'HTML' ||
		element.tagName === 'HEAD' ||
		element.tagName === 'BODY' ||
		(element.tagName === 'svg' && element.namespaceURI === 'http://www.w3.org/2000/svg')) {
		return true;
	}

	return false;
}

function handleFontSizes(btnId, featureItemId, featureStepsId, tickIconId, increase, btn) {
	var Storageclick = btn + '-clickCount';
	var ButtonStorageClick = btn + '-buttonClicked';
	var SizeStorage = btn + '-size';
	var clickCount = 0;
	var addsize = 0;

	// Check local storage for previous state
	var localStorageClickCount = localStorage.getItem(Storageclick);
	if (localStorageClickCount) {
		clickCount = parseInt(localStorageClickCount, 10);
	}

	document.addEventListener('DOMContentLoaded', function() {

		var featureItem = document.getElementById(featureItemId);
		var featureSteps = document.getElementById(featureStepsId);
		var tickIcon = document.getElementById(tickIconId);

		// Get Storage Items
		var FontSizeBtnState = JSON.parse(localStorage.getItem(ButtonStorageClick));
		var FontSizeClickState = JSON.parse(localStorage.getItem(Storageclick));
		// var FontSizeState = localStorage.getItem(SizeStorage);
		var FontSizeStateBigger = localStorage.getItem('bt-size');
		var FontSizeStateSmaller = localStorage.getItem('st-size');


		if (FontSizeBtnState) {

			featureItem.classList.add('feature-active');
			featureSteps.classList.add('featureSteps-visible');
			tickIcon.style.display = 'inline-block';

			// Add step span tags dynamically
			var StoragestepsHTML = '';
			for (var i = 0; i < 4; i++) {
				StoragestepsHTML += '<span class="' + (i < FontSizeClickState ? 'active step uwaw-features__step' : 'step uwaw-features__step') + '"></span>';
			}
			featureSteps.innerHTML = StoragestepsHTML;

			if (FontSizeStateBigger != 0) {
				document.getElementById('btn-small-text').disabled = true;
				var elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)');
				elements.forEach(function(element) {
					// Exclude elements inside #uw-main and with class .uwaw-features__item__name
					if (!isExcludedElement(element)) {
						var currentSize = window.getComputedStyle(element).fontSize;
						var newSize = parseFloat(currentSize) + parseFloat(FontSizeStateBigger);
						element.style.setProperty('font-size', newSize + 'px', 'important');


					}
				});

			}

			if (FontSizeStateSmaller != 0) {
				document.getElementById('btn-s9').disabled = true;
				var elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)');
				elements.forEach(function(element) {
					// Exclude elements inside #uw-main and with class .uwaw-features__item__name
					if (!isExcludedElement(element)) {
						var currentSize = window.getComputedStyle(element).fontSize;
						var newSize = parseFloat(currentSize) - parseFloat(FontSizeStateSmaller);
						element.style.setProperty('font-size', newSize + 'px', 'important');


					}
				});
			}
		}

	});

	document.getElementById(btnId).addEventListener('click', function() {
		clickCount++;
		addsize += 2;
		var featureItem = document.getElementById(featureItemId);
		var featureSteps = document.getElementById(featureStepsId);
		var tickIcon = document.getElementById(tickIconId);

		if (btnId == "btn-s9") {
			document.getElementById('btn-small-text').disabled = true;
			localStorage.setItem('btn-big', true);
		}

		if (btnId == "btn-small-text") {
			document.getElementById('btn-s9').disabled = true;
			localStorage.setItem('btn-small', true);
		}

		// Save current state to local storage
		localStorage.setItem(Storageclick, clickCount);
		localStorage.setItem(ButtonStorageClick, true);


		// Reset on 5th click
		if (clickCount === 5) {
			clickCount = 0;
			addsize = 0;
			featureItem.classList.remove('feature-active');
			featureSteps.classList.remove('featureSteps-visible');
			featureSteps.innerHTML = '';
			tickIcon.style.display = 'none';
			localStorage.setItem(Storageclick, 0);
			localStorage.setItem(ButtonStorageClick, false);

			if (btnId == "btn-s9") {
				document.getElementById('btn-small-text').disabled = false;
				localStorage.setItem('btn-big', false);
			}
			if (btnId == "btn-small-text") {
				var otherBtn = document.getElementById('btn-s9').disabled = false;
				localStorage.setItem('btn-small', false);
			}

			// Reset font size of all elements
			resetFontSizes(btn, Storageclick, ButtonStorageClick);
			return;
		}
		// Add feature-active class on the first click
		if (clickCount === 1) {
			featureItem.classList.add('feature-active');
			featureSteps.classList.add('featureSteps-visible');
			localStorage.setItem(Storageclick, clickCount);
			localStorage.setItem(ButtonStorageClick, true);
		}

		// Update data-uw-reader-content attribute
		document.getElementById(btnId).setAttribute('data-uw-reader-content', clickCount);

		// Add step span tags dynamically
		var stepsHTML = '';
		for (var i = 0; i < 4; i++) {
			stepsHTML += '<span class="' + (i < clickCount ? 'active step uwaw-features__step' : 'step uwaw-features__step') + '"></span>';
		}
		featureSteps.innerHTML = stepsHTML;

		// Display tick icon until the 4th click
		if (clickCount < 5) {
			tickIcon.style.display = 'inline-block';
		}

		adjustFontSizes(increase, btn, addsize);
	});
}

function adjustFontSizes(increase, btn, addsize) {
	var SizeStorage = btn + '-size';
	var elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)');
	elements.forEach(function(element) {
		// Exclude elements inside #uw-main and with class .uwaw-features__item__name
		if (!isExcludedElement(element)) {
			var currentSize = window.getComputedStyle(element).fontSize;
			var newSize = increase ? parseFloat(currentSize) + 2 : parseFloat(currentSize) - 2;
			// element.style.fontSize = newSize + 'px';
			element.style.setProperty('font-size', newSize + 'px', 'important');
			localStorage.setItem(SizeStorage, parseFloat(addsize));
		}
	});
}

// Reset font sizes
function resetFontSizes() {
	var elements = document.querySelectorAll('*');
	elements.forEach(function(element) {
		// Reset font-size style for all elements
		element.style.fontSize = '';
		localStorage.setItem('st-size', 0);
		localStorage.setItem('st-clickCount', 0);
		localStorage.setItem('st-buttonClicked', false);
		localStorage.setItem('bt-size', 0);
		localStorage.setItem('bt-clickCount', 0);
		localStorage.setItem('bt-buttonClicked', false);
		localStorage.setItem('btn-big', false);
		localStorage.setItem('btn-small', false);
	});
}

let letterSpacing = 0; // Initial letter spacing (auto)
let clickCountText = 0; // Counter to track button clicks

// Check local storage for previous state
var localStorageSpacingCount = localStorage.getItem('ts-clickCount');
if (localStorageSpacingCount) {
	clickCountText = parseInt(localStorageSpacingCount, 10);
}


function increaseAndReset() {
	;
	clickCountText++;
	var featureItem_ts = document.getElementById('featureItem-ts');
	var featureSteps_ts = document.getElementById('featureSteps-ts');
	var tickIcon_ts = document.getElementById('tickIcon-ts');

	// Save current state to local storage
	localStorage.setItem('ts-clickCount', clickCountText);
	localStorage.setItem('ts-buttonClicked', true);

	// Reset letter spacing after the third click
	if (clickCountText === 4) {
		letterSpacing = 0; // Reset letter spacing to auto (0)
		clickCountText = 0; // Reset click count
		featureItem_ts.classList.remove('feature-active');
		featureSteps_ts.classList.remove('featureSteps-visible');
		featureSteps_ts.innerHTML = '';
		tickIcon_ts.style.display = 'none';

		// Save current state to local storage
		localStorage.setItem('ts-clickCount', clickCountText);
		localStorage.setItem('ts-buttonClicked', false);

		// Reset font size of all elements
		resetLetterspacing();
		return;
	}

	// Add feature-active class on the first click
	if (clickCountText === 1) {
		featureItem_ts.classList.add('feature-active');
		featureSteps_ts.classList.add('featureSteps-visible');

		// Save current state to local storage
		localStorage.setItem('ts-clickCount', clickCountText);
		localStorage.setItem('ts-buttonClicked', true);
	}

	// Add step span tags dynamically
	var stepsHTML_ts = '';
	for (var i = 0; i < 3; i++) {
		stepsHTML_ts += '<span class="' + (i < clickCountText ? 'active step uwaw-features__step' : 'step uwaw-features__step') + '"></span>';
	}
	featureSteps_ts.innerHTML = stepsHTML_ts;
	// Display tick icon until the 4th click
	if (clickCountText < 4) {
		tickIcon_ts.style.display = 'inline-block';
	}

	letterSpacing += 0.7; // Increase by 5px
	applyLetterSpacing();
}

function decreaseSpacing() {
	letterSpacing -= 5; // Decrease by 5px
	applyLetterSpacing();
}

function applyLetterSpacing() {
	const elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)'); // Select all elements except buttons
	elements.forEach(function(element) {
		if (!isExcludedElement(element)) {

			var currentSize_ts = parseFloat(window.getComputedStyle(element).letterSpacing);
			currentSize_ts = isNaN(currentSize_ts) ? 0 : currentSize_ts; // Handle cases where lineHeight is 'normal' or an invalid value

			// Convert to pixels (optional, depending on your needs)
			currentSize_ts = currentSize_ts + 'px';
			var newSize_ts = parseFloat(currentSize_ts) + 0.7;
			// element.style.letterSpacing = newSize_ts;
			element.style.setProperty('letter-spacing', newSize_ts + 'px', 'important');
			localStorage.setItem('ts-spacing', parseFloat(newSize_ts));
		}
	});
}

function resetLetterspacing() {
	var elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)');
	elements.forEach(function(element) {
		// Reset font-size style for all elements
		element.style.letterSpacing = ''; // Reset to default or "normal"
		localStorage.setItem('ts-spacing', null);
		localStorage.setItem('ts-clickCount', 0);
		localStorage.setItem('ts-buttonClicked', false);
	});
}

var clickCount_lh = 0;

// Check local storage for previous state
var localStorageClickCount = localStorage.getItem('lh-clickCount');
if (localStorageClickCount) {
	clickCount_lh = parseInt(localStorageClickCount, 10);
}

function increaseLineheight() {
	var elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)');
	elements.forEach(function(element) {
		// Exclude elements inside #uw-main and with class .uwaw-features__item__name
		if (!isExcludedElement(element)) {
			var currentSize_lh = parseFloat(window.getComputedStyle(element).lineHeight);
			currentSize_lh = isNaN(currentSize_lh) ? 0 : currentSize_lh; // Handle cases where lineHeight is 'normal' or an invalid value

			// Convert to pixels (optional, depending on your needs)
			currentSize_lh = currentSize_lh + 'px';
			var newSize_lh = parseFloat(currentSize_lh) + 10 + 'px';
			localStorage.setItem('lh-height', parseFloat(newSize_lh));
			// element.style.lineHeight = newSize_lh;
			element.style.setProperty('line-height', newSize_lh, 'important'); /*add er*/

		}
	});
}

function resetlineheight() {
	var elements = document.querySelectorAll('*');
	elements.forEach(function(element) {
		// Reset font-size style for all elements
		element.style.lineHeight = ''; // Reset to default or "normal"
		localStorage.setItem('lh-height', null);
		localStorage.setItem('lh-clickCount', 0);
		localStorage.setItem('lh-buttonClicked', false);
	});
}

// Function to toggle the visibility of images
function toggleImages() {
	;
	document.documentElement.classList.toggle('image-hide');
	document.documentElement.id = document.documentElement.classList.contains('image-hide') ? 'imageHideBg' : '';
	var images = document.querySelectorAll('img');
	// var bgRemove = document.querySelectorAll('*');
	var imageVisibilityState = {};
	// var bgimageVisibilityState = {};
	var tickIcon_ht = document.getElementById('tickIcon-hi');
	var featureItem = document.getElementById('featureItem-hi');

	// Toggle the visibility of images
	images.forEach(function(image, index) {
		if (!isExcludedElement(image)) {
			image.style.setProperty('visibility', image.style.visibility === 'hidden' ? 'visible' : 'hidden', 'important');
			imageVisibilityState[index] = image.style.visibility;

		}
	});


	// Toggle the visibility of the tickIcon
	tickIcon_ht.style.display = tickIcon_ht.style.display === 'none' ? 'inline-block' : 'none';

	// Toggle the feature-active class on featureItem
	featureItem.classList.toggle('feature-active');

	localStorage.setItem('imageVisibilityState', JSON.stringify(imageVisibilityState));

}

function highlightLinks() {
	;
	var tickIcon_ht = document.getElementById('tickIcon-ht');
	var featureItem = document.getElementById('featureItem-ht');

	// Toggle the visibility of the tickIcon
	tickIcon_ht.style.display = tickIcon_ht.style.display === 'none' ? 'inline-block' : 'none';

	// Toggle the feature-active class on featureItem
	featureItem.classList.toggle('feature-active');

	// Toggle the highlight of links
	var links = document.querySelectorAll('a');
	var linksHighlighted = false;
	links.forEach(function(link, index) {
		if (!isExcludedElement(link)) {
			link.style.setProperty('background', link.style.background ? '' : 'black', 'important');
			link.style.setProperty('color', link.style.color ? '' : 'yellow', 'important');
			// Check if link is highlighted
			if (link.style.getPropertyValue('background') === 'black' && link.style.getPropertyValue('color') === 'yellow') {
				linksHighlighted = true;
			}
		}
	});

	// Save state in local storage
	var HighlightLinkState = {
		tickIconVisible: tickIcon_ht.style.display === 'none' ? false : true,
		featureActive: featureItem.classList.contains('feature-active'),
		linksHighlighted: linksHighlighted
	};
	localStorage.setItem("highlightLinks", JSON.stringify(HighlightLinkState));
}

// Function to toggle the cursor feature and save state in local storage
function toggleCursorFeature() {
	;
	// Toggle the 'waf-bg-cursor' class on the body
	document.documentElement.classList.toggle('waf-bg-cursor');

	// Toggle the tick icon
	var tickIcon_cursor = document.getElementById('tickIcon-cursor');
	tickIcon_cursor.style.display = tickIcon_cursor.style.display === 'none' ? 'inline-block' : 'none';

	var featureItem = document.getElementById('featureItem-Cursor');

	// Toggle the feature-active class on featureItem
	featureItem.classList.toggle('feature-active');

	// Save state in local storage
	localStorage.setItem("cursorFeatureActive", featureItem.classList.contains('feature-active'));
}


function toggleFontFeature() {
	;

	// Toggle the 'waf-font-df' class on the body
	document.documentElement.classList.toggle('waf-font-df');

	// Toggle the tick icon
	var tickIcon_df = document.getElementById('tickIcon-df');
	tickIcon_df.style.display = tickIcon_df.style.display === 'none' ? 'inline-block' : 'none';

	var featureItem = document.getElementById('featureItem-df');

	// Toggle the feature-active class on featureItem
	featureItem.classList.toggle('feature-active');

	// Save state in local storage
	localStorage.setItem("dyslexia", document.documentElement.classList.contains('waf-font-df'));

}

function openMain() {
	var mainElement = document.getElementById('uw-main');
	mainElement.style.right = '0px';
}

function closeMain() {
	;
	var mainElement = document.getElementById('uw-main');
	mainElement.style.right = '-490px';

}

function resetAll() {
	;

	var resetFeatures = document.querySelectorAll('.reset-feature');
	resetFeatures.forEach(function(feature) {
		feature.classList.remove('feature-active');
	});

	// Hide spans with class 'reset-tick'
	var resetTicks = document.querySelectorAll('.reset-tick');
	resetTicks.forEach(function(tick) {
		tick.style.display = 'none';
	});

	// Remove yellow highlight color on links
	var links = document.querySelectorAll('a');
	links.forEach(function(link) {
		link.style.background = '';
		link.style.color = '';
	});

	localStorage.setItem('highlightLinks', false);

	// Make Images Visible

	var images = document.querySelectorAll('img');
	images.forEach(function(image) {
		image.style.visibility = 'visible';
	});

	var resetImageVisibilityState = {};
	localStorage.setItem('imageVisibilityState', JSON.stringify(resetImageVisibilityState));

	document.documentElement.classList.remove('image-hide');
	document.documentElement.id = document.documentElement.classList.contains('image-hide') ? 'imageHideBg' : '';


	//Make Invert to default

	document.documentElement.classList.remove('waf-bg-white');
	localStorage.setItem('invertFeature', false);

	// Make font to default

	document.documentElement.classList.remove('waf-font-df');
	localStorage.setItem("dyslexia", false);

	// Make cursor default

	document.documentElement.classList.remove('waf-bg-cursor');
	localStorage.setItem("cursorFeatureActive", false);

	// Make Light-Dark to default

	// Uncheck
	var reset_check = document.getElementById("checkbox").checked = false;
	document.body.classList.remove("dark", reset_check);
	localStorage.setItem("darkMode", false);

	//Reset Lineheight

	resetlineheight();


	// Reset Ltter Spacing
	resetLetterspacing();

	//Reset Font Sizes
	resetFontSizes();
	document.getElementById('btn-s9').disabled = false;
	document.getElementById('btn-small-text').disabled = false;

	// Remove inner HTML of parent divs with class 'reset-steps'
	var resetSteps = document.querySelectorAll('.reset-steps');
	resetSteps.forEach(function(step) {
		step.innerHTML = '';
		step.classList.remove('featureSteps-visible');
	});

	//Reset Speech
	resetspeech();
	localStorage.setItem("speak", false);

}


// grab the UI elements to work with
let isReading = false;
let utterance = null;
let previousSelectedElement = null;

// Create audio elements for sound effects
const speakOnSound = new Audio('./accessability/audio/screen_reader_on.mp3');;
const speakOffSound = new Audio('./accessability/audio/screen_reader_off.mp3');
//   RGV2ZWxvcGVkIGJ5IC0gRmlyb3ogQW5zYXJpIC04Nzg5NzAxOTY=

function toggleSpeech() {
	if (!isReading) {
		// Enable speech
		speakOnSound.play();
		isReading = true;
	} else {
		// Disable speech
		resetspeech();
	}
}

function resetspeech() {
	speakOffSound.play();
	window.speechSynthesis.cancel();
	isReading = false;
	previousSelectedElement = null;
}

function startReadingOld(text) {
	utterance = new SpeechSynthesisUtterance(text);

	// Set properties for a more formal voice
	utterance.rate = 0.7; // Adjust the rate (0.5 is slower, 2.0 is faster)
	utterance.pitch = 10.0; // Set pitch to 1.0 for a natural voice

	// Attempt to set a female voice
	const voices = window.speechSynthesis.getVoices();
	const femaleVoice = voices.find(voice => voice.name.includes('female') && voice.lang.includes('en'));
	if (femaleVoice) {
		utterance.voice = femaleVoice;
	}

	window.speechSynthesis.speak(utterance);

	// Add an event listener for the 'end' event to reset the selection
	utterance.addEventListener('end', function() {
		resetSelection();
	});
}

	function startReadingOld2(text, LANG = 'en-US') {

		const speech = new SpeechSynthesisUtterance();
		const availableVoices = window.speechSynthesis.getVoices();
		let selectedVoice = null;

		// Check if the specified language is available
		selectedVoice = availableVoices.find(voice => voice.lang.includes(LANG));
		if (selectedVoice) {
			speech.voice = selectedVoice;
			speech.lang = selectedVoice.lang;
			// alert(`Selected language (${LANG}) is not available.`);
			return;
		}

		speech.text = text;
		speech.volume = 1; // Volume (0 to 1)
		speech.rate = 0.9; // Speed (0.1 to 10)
		speech.pitch = 1; // Pitch (0 to 2)

		// Speak the text
		window.speechSynthesis.speak(speech);

		// Add an event listener for the 'end' event to reset the selection
		speech.addEventListener('end', function() {
			resetSelection();
		});
	}

	function startReading(text, LANG = LANAGUAGE) {

		const speech = new SpeechSynthesisUtterance();
		if(LANG =='gu'){
		  speech.lang = "gu-IN";
		}else if(LANG =='hi'){
			speech.lang = "hi-IN";
		}else if(LANG =='en'){
			speech.lang = "en-US";
		}else{
		  console.log('Invalid language selected defatult language English selected.')
		  speech.lang = "en-US";
		}
		speech.text = text;
		speech.volume = 1; // Volume (0 to 1)
		speech.rate = 0.9; // Speed (0.1 to 10)
		speech.pitch = 1; // Pitch (0 to 2)
		
	
		// Speak the text
		window.speechSynthesis.speak(speech);
		// Add an event listener for the 'end' event to reset the selection
		speech.addEventListener('end', function () {
			resetSelection();
		});
	}

function selectAndSpeak(element) {
	const range = document.createRange();
	range.selectNodeContents(element);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);

	if (previousSelectedElement !== element) {
		// If a different element is clicked, cancel the current speech
		window.speechSynthesis.cancel();
		startReading(selection.toString());
		previousSelectedElement = element;
	} else {
		// If the same element is clicked, toggle between play/pause
		if (isReading) {
			window.speechSynthesis.pause();
		} else {
			window.speechSynthesis.resume();
		}
	}
}

function resetSelection() {
	const selection = window.getSelection();
	selection.removeAllRanges();
	previousSelectedElement = null;
}

function init(params) {
	//--- THIS FUNCTION ADD EVENT LISTNER TO ALL HTML ELEMENT ---//

	(function() {


		var featureItem_ts = document.getElementById('featureItem-ts');
		var featureSteps_ts = document.getElementById('featureSteps-ts');
		var tickIcon_ts = document.getElementById('tickIcon-ts');

		// Restore tickIcon visibility
		var SpacingState = JSON.parse(localStorage.getItem('ts-buttonClicked'));
		var SpacingClickState = JSON.parse(localStorage.getItem('ts-clickCount'));
		var SpacingSizeState = localStorage.getItem('ts-spacing');

		console.log(SpacingSizeState);

		if (SpacingState) {

			tickIcon_ts.style.display = 'inline-block';
			featureItem_ts.classList.add('feature-active');
			featureSteps_ts.classList.add('featureSteps-visible');

			var stepsHTML_ts = '';
			for (var i = 0; i < 3; i++) {
				stepsHTML_ts += '<span class="' + (i < SpacingClickState ? 'active step uwaw-features__step' : 'step uwaw-features__step') + '"></span>';
			}
			featureSteps_ts.innerHTML = stepsHTML_ts;

			const elements = document.querySelectorAll('*:not(.widget-custom-trigger, .widget-custom-trigger span)'); // Select all elements except buttons
			elements.forEach(function(element) {
				if (!isExcludedElement(element)) {
					element.style.setProperty('letter-spacing', SpacingSizeState + 'px', 'important');
				}
			});
		}

	});


	(function() {

		var featureItem_lh = document.getElementById('featureItem-lh');
		var featureSteps_lh = document.getElementById('featureSteps-lh');
		var tickIcon_lh = document.getElementById('tickIcon-lh');

		// Restore tickIcon visibility
		var LineHeightState = JSON.parse(localStorage.getItem('lh-buttonClicked'));
		var LineHeightClickState = JSON.parse(localStorage.getItem('lh-clickCount'));
		var LineHeightSizeState = localStorage.getItem('lh-height');

		if (LineHeightState) {

			tickIcon_lh.style.display = 'inline-block';
			featureItem_lh.classList.add('feature-active');
			featureSteps_lh.classList.add('featureSteps-visible');

			var stepsHTML_lh = '';
			for (var i = 0; i < 3; i++) {
				stepsHTML_lh += '<span class="' + (i < LineHeightClickState ? 'active step uwaw-features__step' : 'step uwaw-features__step') + '"></span>';
			}
			featureSteps_lh.innerHTML = stepsHTML_lh;

			var elements = document.querySelectorAll('*');
			elements.forEach(function(element) {
				// Exclude elements inside #uw-main and with class .uwaw-features__item__name
				if (!isExcludedElement(element)) {
					var currentSize_lh = parseFloat(window.getComputedStyle(element).lineHeight);
					currentSize_lh = isNaN(currentSize_lh) ? 0 : currentSize_lh; // Handle cases where lineHeight is 'normal' or an invalid value

					// Convert to pixels (optional, depending on your needs)
					currentSize_lh = currentSize_lh + 'px';
					var newSize_lh = parseFloat(currentSize_lh) + parseFloat(LineHeightSizeState) + 'px';
					element.style.setProperty('line-height', newSize_lh, 'important');
				}
			});

		}

	});



	(function() {

		var tickIcon_ht = document.getElementById('tickIcon-hi');
		var featureItem = document.getElementById('featureItem-hi');
		var images = document.querySelectorAll('img');

		// Restore tickIcon visibility
		var imageVisibilityState = JSON.parse(localStorage.getItem('imageVisibilityState'));

		if (imageVisibilityState) {
			images.forEach(function(image, index) {
				if (!isExcludedElement(image) && imageVisibilityState[index]) {
					image.style.setProperty('visibility', imageVisibilityState[index], 'important');

				}
			});
		}

		if (imageVisibilityState && imageVisibilityState['1'] === 'hidden') {
			tickIcon_ht.style.display = 'inline-block';
			featureItem.classList.add('feature-active');
			document.documentElement.classList.toggle('image-hide');
			document.documentElement.id = document.documentElement.classList.contains('image-hide') ? 'imageHideBg' : '';
		}
	});

	document.getElementById('dark-btn').addEventListener('click', function() {

		var tickIcon_ht_dark = document.getElementById('tickIcon-ht-dark');
		var featureItemDrak = document.getElementById('featureItem-ht-dark');
		const checkbox = document.getElementById("checkbox");

		const isDarkMode = checkbox.checked;
		document.body.classList.toggle("dark", isDarkMode);

		// Toggle the visibility of the tickIcon
		tickIcon_ht_dark.style.display = tickIcon_ht_dark.style.display === 'none' ? 'inline-block' : 'none';

		// Toggle the feature-active class on featureItem
		featureItemDrak.classList.toggle('feature-active');

		// Save the state to local storage
		localStorage.setItem("darkMode", isDarkMode);

	});

	// Call applyDarkModeOnLoad function on page load
	(function() {

		var tickIcon_ht_dark = document.getElementById('tickIcon-ht-dark');
		var featureItemDrak = document.getElementById('featureItem-ht-dark');
		const checkbox = document.getElementById("checkbox");

		const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
		if (isDarkMode === true) {
			checkbox.checked = isDarkMode;
			document.body.classList.add("dark");
			tickIcon_ht_dark.style.display = 'inline-block';
			featureItemDrak.classList.toggle('feature-active');
		}

	});

	(function() {

		var GetCursorState = JSON.parse(localStorage.getItem('cursorFeatureActive'));
		var tickIcon_cursor = document.getElementById('tickIcon-cursor');
		var featureItem = document.getElementById('featureItem-Cursor');

		if (GetCursorState === true) {
			document.documentElement.classList.add('waf-bg-cursor');
			tickIcon_cursor.style.display = 'inline-block';
			featureItem.classList.add('feature-active');
		}

	});


	(function() {

		var GetdyslexiaState = JSON.parse(localStorage.getItem('dyslexia'));
		var tickIcon_df = document.getElementById('tickIcon-df');
		var featureItem_df = document.getElementById('featureItem-df');

		if (GetdyslexiaState === true) {
			document.documentElement.classList.add('waf-font-df');
			tickIcon_df.style.display = 'inline-block';
			featureItem_df.classList.add('feature-active');
		}

	});

	(function() {

		var GetInvertState = JSON.parse(localStorage.getItem('invertFeature'));
		var tickIcon_ic = document.getElementById('tickIcon-ic');
		var featureItem_ic = document.getElementById('featureItem-ic');

		if (GetInvertState === true) {
			document.documentElement.classList.add('waf-bg-white');
			tickIcon_ic.style.display = 'inline-block';
			featureItem_ic.classList.add('feature-active');
		}

	});
	(function() {
		var GetspeakState = JSON.parse(localStorage.getItem('speak'));
		var tickIcon_sp = document.getElementById('tickIcon_sp');
		var featureItem_sp = document.getElementById('featureItem_sp');

		if (GetspeakState === true) {
			tickIcon_sp.style.display = 'inline-block';
			featureItem_sp.classList.add('feature-active');
			speakOnSound.play();
			isReading = true;
		}
	});


	(function() {
		var tickIcon_ht = document.getElementById('tickIcon-ht');
		var featureItem = document.getElementById('featureItem-ht');
		var links = document.querySelectorAll('a');

		// Restore the state from local storage
		var GetHighlightLinkState = JSON.parse(localStorage.getItem('highlightLinks'));
		if (GetHighlightLinkState) {
			// Restore tickIcon visibility
			if (GetHighlightLinkState.tickIconVisible) {
				tickIcon_ht.style.display = 'inline-block';
			} else {
				tickIcon_ht.style.display = 'none';
			}

			// Restore featureItem class
			if (GetHighlightLinkState.featureActive) {
				featureItem.classList.add('feature-active');
			} else {
				featureItem.classList.remove('feature-active');
			}

			// Restore link highlighting
			if (GetHighlightLinkState.linksHighlighted) {
				links.forEach(function(link, index) {
					if (!isExcludedElement(link) && GetHighlightLinkState) {
						link.style.setProperty('background', '#1C1D1F', 'important');
						link.style.setProperty('color', 'yellow', 'important');
					}
				});
			}
		}
	});
	//ADD EVENT TO INLARGE SMALL TEXT BUTTON
	handleFontSizes('btn-s9', 'featureItem', 'featureSteps', 'tickIcon', true, 'bt'); // For Bigger Text
	handleFontSizes('btn-small-text', 'featureItem-st', 'featureSteps-st', 'tickIcon-st', false, 'st'); // For Smaller Text

	document.getElementById('btn-s12').addEventListener('click', function() {
		clickCount_lh++;
		var featureItem_lh = document.getElementById('featureItem-lh');
		var featureSteps_lh = document.getElementById('featureSteps-lh');
		var tickIcon_lh = document.getElementById('tickIcon-lh');

		// Save current state to local storage
		localStorage.setItem('lh-clickCount', clickCount_lh);
		localStorage.setItem('lh-buttonClicked', true);

		// Reset on 5th click
		if (clickCount_lh === 4) {
			clickCount_lh = 0;
			featureItem_lh.classList.remove('feature-active');
			featureSteps_lh.classList.remove('featureSteps-visible');
			featureSteps_lh.innerHTML = '';
			tickIcon_lh.style.display = 'none';
			// Reset font size of all elements

			// Save current state to local storage
			localStorage.setItem('lh-clickCount', 0);
			localStorage.setItem('lh-buttonClicked', false);

			resetlineheight();
			return;
		}

		// Add feature-active class on the first click
		if (clickCount_lh === 1) {
			featureItem_lh.classList.add('feature-active');
			featureSteps_lh.classList.add('featureSteps-visible');
			localStorage.setItem('lh-clickCount', 1);
			localStorage.setItem('lh-buttonClicked', true);
		}

		// Update data-uw-reader-content attribute
		document.getElementById('btn-s12').setAttribute('data-uw-reader-content', clickCount_lh);
		// Add step span tags dynamically
		var stepsHTML_lh = '';
		for (var i = 0; i < 3; i++) {
			stepsHTML_lh += '<span class="' + (i < clickCount_lh ? 'active step uwaw-features__step' : 'step uwaw-features__step') + '"></span>';
		}
		featureSteps_lh.innerHTML = stepsHTML_lh;
		// Display tick icon until the 4th click
		if (clickCount_lh < 4) {
			tickIcon_lh.style.display = 'inline-block';
		}

		increaseLineheight();

	});
	// invert script

	// Function to toggle the 'Invert' feature
	document.getElementById('btn-invert').addEventListener('click', function() {

		// Toggle the 'invert' class on the body
		document.documentElement.classList.toggle('waf-bg-white');

		// Toggle the tick icon
		var tickIcon_ic = document.getElementById('tickIcon-ic');
		tickIcon_ic.style.display = tickIcon_ic.style.display === 'none' ? 'inline-block' : 'none';

		var featureItem = document.getElementById('featureItem-ic');

		// Toggle the feature-active class on featureItem
		featureItem.classList.toggle('feature-active');

		// Save the state in localStorage
		localStorage.setItem('invertFeature', document.documentElement.classList.contains('waf-bg-white'));

	});

	//   RGV2ZWxvcGVkIGJ5IC0gRmlyb3ogQW5zYXJpIC04Nzg5NzAxOTY=

	// Show Hide Main Widgets Div on Click
	document.getElementById('widget-custom-trigger').addEventListener('click', function() {
		openMain();
	});
	document.addEventListener('mouseup', function(event) {
		if (isReading) {
			const clickedElement = event.target;

			// Check if the clicked element can contain text content
			const allowedTags = ['P', 'SPAN', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'LI', 'LABEL', 'BUTTON', 'TD', 'TH', 'STRONG', 'EM', 'B', 'I', 'U', 'SMALL', 'BIG', 'SUB', 'SUP'];

			if (allowedTags.includes(clickedElement.tagName.toUpperCase())) {
				selectAndSpeak(clickedElement);
			}
		}
	});

	// click handler for the "Speak On" button
	const speakEl = document.getElementById('speak');
	speakEl.addEventListener('click', toggleSpeech);


	document.getElementById('speak').addEventListener('click', function() {
		// Toggle the tick icon
		var tickIcon_sp = document.getElementById('tickIcon_sp');
		tickIcon_sp.style.display = tickIcon_sp.style.display === 'none' ? 'inline-block' : 'none';

		var featureItem_sp = document.getElementById('featureItem_sp');

		// Toggle the feature-active class on featureItem
		featureItem_sp.classList.toggle('feature-active');

		// Save state in local storage
		localStorage.setItem("speak", featureItem_sp.classList.contains('feature-active'));




	});


	//--- THEME SET START ---
	if (params.backgroundColor) {
		document.documentElement.style.setProperty('--color-dark-blue-1', params.backgroundColor)
	}
	//--- THEME SET START END ---
}

function addAccessabilityHTML(params) {
	return new Promise((resolve) => {
		

		if(params['accessabilityBtn']){
			accessabilityBtnText = params['accessabilityBtn'];
		}
		if(params['LANAGUAGE']){
			LANAGUAGE = params['LANAGUAGE'];
		}
		var widgetBtn = `<button id="widget-custom-trigger" class="widget-custom-trigger" aria-label="Accessibility Widget" data-uw-trigger="true" aria-haspopup="dialog">
              ${accessabilityBtnText}
          </button>`;
		const body = document.querySelector('body');
		body.innerHTML = widgetSection + body.innerHTML;
		if(params.accessabilityBtnContainer){
			const btnLocation = document.getElementById(params.accessabilityBtnContainer);
			if(!btnLocation){
				alert('Invalid accessbiilty button container id');
			}else{
				btnLocation.innerHTML = widgetBtn;
			}
		}else{
			body.innerHTML += widgetBtn;
		}
		resolve(params);
	});
}

function RenderAccessability(params) {
	addAccessabilityHTML(params).then((response) => {
		params = response;
		init(params); //
	});
}