
config {
    # How to handle locallization
	sys_language_mode = {$siteconf.config.sys_language_mode}
    
    # Records that are not locallized till be hidden
	sys_language_overlay = {$siteconf.config.sys_language_overlay}

    locale_all = {$siteconf.config.locale_all}
  
    # set doctype to html5
    doctype = html5

	compressJs = 0
	concatenateJs = 0
	compressCss = 0
	concatenateCss = 0
}


	#| --- System & Page Config: Start --------------------------------------------------------------------------- |#
page.config {	
	# remove xmlprologue
	xmlprologue = none

	# Tries to clean up the output. Tries...
	xhtml_cleaning = all

	# remove comments
	disablePrefixComment = 1

	# If set, the inline styles TYPO3 controls in the core are written to a file
	# done by scriptmerger, does not work with CSS_styleInline
	inlineStyle2TempFile = 1

	# All javascript (includes and inline) will be moved to the bottom of the html document
	moveJsFromHeaderToFooter = 0

	# Add L and print values to all links in TYPO3.
	linkVars = {$siteconf.config.linkVars}

	# this must be set to the language of the site
	language = {$siteconf.config.language}

	# System Language ID
	sys_language_uid = {$siteconf.config.sys_language_uid}

	# Enable RealURL
	tx_realurl_enable = 1

	# Disable simulateStaticDocuments
	simulateStaticDocuments = 0

	# The <base> tag in the header of the document which is used by RealURL
	baseURL = http://{$siteconf.siteUrl}/

	# Charset, should always be utf-8
	renderCharset = utf-8

	# Charset, should always be utf-8
	metaCharset = utf-8

	### Search. This should be disabled if you are not using Indexed search!

	# For pages
	index_enable = 1

	# For documents
	index_externals = 1

	# If set, then every “typolink�? is checked whether it's linking to a page within the current rootline of the site.
	typolinkCheckRootline = 1

	# This option enables to create links across domains using current domain's linking scheme.
	typolinkEnableLinksAcrossDomains = 1

	# Do NOT add the URL in front of local anchors to account for base URL. Otherwise the tabs won't work
	prefixLocalAnchors = all

	# Spam Protection
	spamProtectEmailAddresses = -1
	spamProtectEmailAddresses_atSubst = <img class="email" src="/typo3conf/ext/{$siteconf.skinname}/Resources/Public/Images/email.png" alt="at" />

	# overwrites removeDefaultJS = 1, that disables the email spam protection
	removeDefaultJS = external

	# admPanel = 1

	headerComment = Conception, design, programming and service providing: Paints Multimedia GmbH
}
	#| --- System & Page Config: End --------------------------------------------------------------------------- |#


	#| --- Header & Body: Start ---------------------------------------------------------------------------------- |#
page{
	meta {
		description.field = WINGAS LWL
		keywords.field = WINGAS LWL
		author.field = Paints Multimedia GmbH
		viewport = width=device-width,initial-scale=1
	}
	
	headerData{
		5 = COA
		5.10 = TEXT
		5.10 {
			value = <meta name="robots" content="index,follow" />
			if.isFalse.field = no_search
		}

		5.20 = TEXT
		5.20 {
			value = <meta name="robots" content="noindex" />
			if.isTrue.field = no_search
		}

		# Icons
		10 = TEXT
		10.value =	<link rel="shortcut icon" type="image/x-icon" href="typo3conf/ext/skin_wingaslwl/Resources/Public/Images/favicon.ico" />

		# include Web-Fonts 
#		15 = TEXT
#		15.value (
#			<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/11e1a2dd-8f61-4e6b-9560-3307feb08d41.css"/>
#		)

	}

	# Add Stylesheet files
#	includeCSS{
#		html5boilerplate4 = EXT:html5boilerplate4/res/css/normalize.css
#		style = EXT:skin_wingaslwl/Resources/Public/Stylesheets/style.css
#	}
	

	# Add JS-Files
#	includeJS{
#		hoverIntent = EXT:skin_wingaslwl/Resources/Public/JavaScripts/jquery.hoverIntent.minified.js
#		formValidator = EXT:skin_wingaslwl/Resources/Public/JavaScripts/ui.formValidator.js
#		tooltipp = EXT:skin_wingaslwl/Resources/Public/JavaScripts/ui.tooltip.js
#		skin		= EXT:skin_wingaslwl/Resources/Public/JavaScripts/skin.js
#		modernizr = EXT:html5boilerplate4/res/js/vendor/modernizr-2.6.2.min.js
#	}


	#| --- Header & Body: End ---------------------------------------------------------------------------------- |#

}


# noopd robots tag for home page
[globalVar = TSFE:id = {$siteconf.home}]
	page.headerData.5.10 >
	page.headerData.5.20 >
	page.headerData.5.30 = TEXT
	page.headerData.5.30.value = <meta name="robots" content="index,follow,noodp" />
[global]

#| --- Footer : Start ---------------------------------------------------------------------------------- |#
[browser = msie]&&[version = 8.0]
page {
    includeJSFooter {
        ie = typo3conf/ext/skin_wingaslwl/Resources/Public/JavaScripts/ie.js
        cookie = typo3conf/ext/skin_wingaslwl/Resources/Public/JavaScripts/jq_cookie.js
    }
}
[global]
#| --- Footer : End ---------------------------------------------------------------------------------- |#