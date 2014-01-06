siteconf {

	config {
		# Add L and print values to all links in TYPO3.
		linkVars = L(0-1) 
		uniqueLinkVars = 1
		# Standard System Language ID
		sys_language_uid = 0
		# cat=plugin.skin_wingaslwl//i; type=text; label= language
		langKey = de
		language = de
		# cat=plugin.skin_wingaslwl//h; type=text; label= locale_all
		locale_all = de_DE.utf8
		# How to handle locallization
		sys_language_mode = strict
		# Records that are not locallized till be hidden
		sys_language_overlay = hideNonTranslated

		meaningfulTempFilePrefix = 64

		# cat=plugin.skin_wingaslwl//j; type=text; label= Kontakt E-Mail
		contactMail = test@paints.de
	}
	# cat=plugin.skin_wingaslwl//b; type=text; label= SiteUrl
	siteUrl = www.wingas-lwl.de

	# cat=plugin.skin_wingaslwl//e; type=text; label= Name skin-Extension
	skinname = skin_wingaslwl

	# cat=plugin.skin_wingaslwl//c; type=text; label= Titeltext Zusatz
	siteTitle = WINGAS-LWL

	# cat=plugin.skin_wingaslwl//d; type=text; label= Copyright URL
	copyrighturl = www.wingas-lwl.de

	# cat=plugin.skin_wingaslwl//f; type=text; label= Logo Titletext
	logo.titletext = Startseite WINGAS-Lichtwellenleiter

	# cat=plugin.skin_wingaslwl.ids//a; type=int+; label= PID Home
	home = 1

	# cat=plugin.skin_wingaslwl.ids//b; type=int+; label= PID Main-Menü
	menu.main = 1

	# cat=plugin.skin_wingaslwl.ids//c; type=int+; label= PID Top-Menü
	menu.top = 2

	# cat=plugin.skin_wingaslwl.ids//c; type=int+; label= PID Main Content Column
	mainContentColumn = 0
	
	# cat=plugin.skin_wingaslwl.ids//c; type=int+; label= PID Feature Content Column
	featureContentColumn = 1

	# cat=plugin.skin_wingaslwl.ids//c; type=int+; label= PID Map Content Column Homepage
	homeMapContentColumn = 5

	# cat=plugin.skin_wingaslwl.ids//d; type=int+; label= PID Footer-Menü
	menu.footer = 3

	# cat=plugin.skin_wingaslwl.ids//d; type=int+; label= PID Footer-Content-Menü
	footerContentMenu = 16

	# cat=plugin.skin_wingaslwl.ids//d; type=int+; label= PID Footer-Content-Menü
	disturbanceContentMenu = 47
	
	# cat=plugin.skin_wingaslwl.ids//d; type=int+; label= PID Footer-Content-Menü
	copyRightContentMenu = 53

	# cat=plugin.skin_wingaslwl.ids//g; type=int+; label= ID Kontakt erfolgreich
	id.contact.success = 48

	# cat=plugin.skin_wingaslwl.ids//h; type=int+; label= ID Kontakt fehlerhaft
	id.contact.error = 62

	# cat=plugin.skin_wingas.ids//i; type=int+; label= PID Search Results
	searchResults = 18

	# cat=plugin.skin_wingaslwl.ids//i; type=int+; label= Google Tag Manager ID
	#id.googleTagManager = GTM-XMJQ

}



# English Sprache
[globalVar = GP:L = 1]
	siteconf {
		config {
			sys_language_uid = 1
			language = en
			langKey = en
			htmlTag_langKey = en
			locale_all = en_US.utf8
		}
	}
[global]



styles.content.imgtext.maxW = 960
styles.content.imgtext.maxWInText = 450

