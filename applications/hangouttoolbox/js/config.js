var version = "1.0.7";
var faces = [
	{title : "LOL", scale: 2.4, data : "lolface.png", offset: 0},
	{title : "BOSS", scale: 2.5, data : "boss.png", offset: 0},
	{title : "CHALLENGE", scale: 2.7, data : "challenge.png", offset: 0},
	{title : "ALONE", scale: 2.8, data : "alone.png", offset: 0},
	{title : "MEGUSTA", scale: 2.5, data : "megusta_meme.png", offset: 0},
	{title : "PLEASE", scale: 2.8, data : "bitch.png", offset: 0},
	{title : "TROLL", scale: 3.2, data : "trollface.png", offset: 0.05},
	{title : "CEREAL", scale: 2.8, data : "cereal.png", offset: 0},
	{title : "CUTE", scale: 2.5, data : "cute.png", offset: 0}
];

var sounds = [
	{title : "Applause", source : "applause.wav", loop : false},
	{title : "Silence", source : "silence.wav", loop : false, volume : 1.0},
	{title : "HA HA!", source : "haha.wav", loop : false, volume : 0.6},
	{title : "Buh!", source : "boo.wav", loop : false, volume : 0.4},
	{title : "Boxing Bell", source : "boxing_bell.wav", loop : false},
	{title : "Burp", source : "burp.wav", loop : false, volume : 0.5},
	{title : "Buzzer", source : "buzzer.wav", loop : false, volume : 0.4},
	{title : "Cash", source : "cash.wav", loop : false},
	{title : "Cheering", source : "cheering.wav", loop : false},
	{title : "Fart", source : "fart.wav", loop : false, volume : 0.5},
	{title : "Gasp", source : "gasp.wav", loop : false, volume : 0.7},
	{title : "Gong", source : "gong.wav", loop : false},
	{title : "Heartbeat", source : "heartbeat.wav", loop : false, volume : 0.8},
	{title : "Kiss", source : "kiss.wav", loop : false, volume : 0.6},
	{title : "Snore", source : "snore.wav", loop : false, volume : 0.4},
	{title : "Intercom", source : "intercom.wav", loop : false, volume : 0.6},
	{title : "Hallelujah", source : "hallelujah.wav", loop : false},
	{title : "Laugh", source : "laugh.wav", loop : false},
	{title : "Pacman", source : "pacman.wav", loop : false},
	{title : "BowBow", source : "BowChickaBowBow.wav", loop : false, volume : 0.8},
	{title : "Rimshot", source : "rimshot.wav", loop : false, volume : 0.7},
	{title : "Sad", source : "sad.wav", loop : false, volume : 0.7},
	{title : "Siren", source : "siren.wav", loop : false},
	{title : "Squeaky", source : "squeaky.wav", loop : false, volume : 0.6},
	{title : "Mario", source : "mario.wav", loop : false,volume : 0.5},
	{title : "Whistle", source : "whistle.wav", loop : false, volume : 0.6},
	{title : "Psycho", source : "psycho.wav", loop : false, volume : 0.6}
];

var countries =  [
		{code : "XX", name : "Select Country"},
		{code : "AF", name : "Afghanistan"},
		{code : "AL", name : "Albania"},
		{code : "DZ", name : "Algeria"},
		{code : "AS", name : "America Samora"},
		{code : "AD", name : "Andorra"},
		{code : "AO", name : "Angola"},
		{code : "AG", name : "Antigua and Bermuda"},
		{code : "AR", name : "Argentina"},
		{code : "AM", name : "Armenia"},
		{code : "AW", name : "Aruba"},
		{code : "AU", name : "Australia"},
		{code : "AT", name : "Austria"},
		{code : "AZ", name : "Azerbaijan"},
		{code : "BS", name : "Bahamas"},
		{code : "BH", name : "Bahrain"},
		{code : "BD", name : "Bangladesh"},
		{code : "BB", name : "Barbados"},
		{code : "BY", name : "Belarus"},
		{code : "BE", name : "Belgium"},
		{code : "BZ", name : "Belize"},
		{code : "BJ", name : "Benin"},
		{code : "BM", name : "Bermuda"},
		{code : "BT", name : "Bhutan"},
		{code : "BO", name : "Bolivia"},
		{code : "BA", name : "Bosnia and Herzegovina"},
		{code : "BW", name : "Botswana"},
		{code : "BR", name : "Brazil"},
		{code : "VG", name : "British Virgin Islands"},
		{code : "BG", name : "Bulgaria"},
		{code : "BF", name : "Burkina Faso"},
		{code : "BI", name : "Burundi"},
		{code : "KH", name : "Cambodia"},
		{code : "CM", name : "Cameroon"},
		{code : "CA", name : "Canada"},
		{code : "CV", name : "Cape Verde"},
		{code : "KY", name : "Cayman Islands"},
		{code : "CF", name : "Central African Republic"},
		{code : "TD", name : "Chad"},
		{code : "CL", name : "Chile"},
		{code : "CN", name : "China"},
		{code : "CO", name : "Colombia"},
		{code : "CG", name : "Congo"},
		{code : "CD", name : "DR Congo"},
		{code : "CK", name : "Cook Islands"},
		{code : "CR", name : "Costa Rica"},
		{code : "CI", name : "Côte d'Ivoire"},
		{code : "HR", name : "Croatia"},
		{code : "CU", name : "Cuba"},
		{code : "CY", name : "Cyprus"},
		{code : "CZ", name : "Czech Republic"},
		{code : "DK", name : "Denmark"},
		{code : "DJ", name : "Djibouti"},
		{code : "DM", name : "Dominica"},
		{code : "DO", name : "Dominican Republic"},
		{code : "EC", name : "Ecuador"},
		{code : "EG", name : "Egypt"},
		{code : "SV", name : "El Salvador"},
		{code : "XE", name : "England"},
		{code : "ER", name : "Eritrea"},
		{code : "EE", name : "Estonia"},
		{code : "ET", name : "Ethiopia"},
		{code : "FJ", name : "Fiji"},
		{code : "FI", name : "Finland"},
		{code : "FR", name : "France"},
		{code : "GA", name : "Gabon"},
		{code : "GM", name : "Gambia"},
		{code : "GE", name : "Georgia"},
		{code : "DE", name : "Germany"},
		{code : "GH", name : "Ghana"},
		{code : "GB", name : "Great Britain"},
		{code : "GR", name : "Greece"},
		{code : "GD", name : "Grenada"},
		{code : "GU", name : "Guam"},
		{code : "GT", name : "Guatemala"},
		{code : "GN", name : "Guinea"},
		{code : "GW", name : "Guinea-Bissau"},
		{code : "GY", name : "Guyana"},
		{code : "HT", name : "Haiti"},
		{code : "HN", name : "Honduras"},
		{code : "HK", name : "Hong Kong"},
		{code : "HU", name : "Hungary"},
		{code : "IS", name : "Iceland"},
		{code : "IN", name : "India"},
		{code : "ID", name : "Indonesia"},
		{code : "IR", name : "Iran"},
		{code : "IQ", name : "Iraq"},
		{code : "IE", name : "Ireland"},
		{code : "IL", name : "Israel"},
		{code : "IT", name : "Italy"},
		{code : "JM", name : "Jamaica"},
		{code : "JP", name : "Japan"},
		{code : "JO", name : "Jordan"},
		{code : "KZ", name : "Kazakhstan"},
		{code : "KE", name : "Kenya"},
		{code : "KI", name : "Kiribati"},
		{code : "KP", name : "North korea"},
		{code : "KR", name : "South Korea"},
		{code : "KW", name : "Kuwait"},
		{code : "KG", name : "Kyrgyzstan"},
		{code : "LV", name : "Latvia"},
		{code : "LB", name : "Lebanon"},
		{code : "LS", name : "Lesotho"},
		{code : "LR", name : "Liberia"},
		{code : "LY", name : "Libya"},
		{code : "LI", name : "Liechtenstein"},
		{code : "LT", name : "Lithuania"},
		{code : "LU", name : "Luxenbourg"},
		{code : "MK", name : "Macedonia"},
		{code : "MG", name : "Madagascar"},
		{code : "MY", name : "Malaysia"},
		{code : "MV", name : "Maledives"},
		{code : "ML", name : "Mali"},
		{code : "MT", name : "Malta"},
		{code : "MU", name : "Mauritius"},
		{code : "MX", name : "Mexico"},
		{code : "FM", name : "Micronesia"},
		{code : "MD", name : "Moldova"},
		{code : "MC", name : "Monaco"},
		{code : "MN", name : "Mongolia"},
		{code : "ME", name : "Montenegro"},
		{code : "MA", name : "Morocco"},
		{code : "MZ", name : "Mozambique"},
		{code : "MM", name : "Myanmar"},
		{code : "NA", name : "Namibia"},
		{code : "NR", name : "Nauru"},
		{code : "NL", name : "Netherlands"},
		{code : "NZ", name : "New Zealand"},
		{code : "NI", name : "Nicaragua"},
		{code : "NE", name : "Niger"},
		{code : "NG", name : "Nigeria"},
		{code : "XNI", name : "Northern ireland"},
		{code : "NO", name : "Norway"},
		{code : "OM", name : "Oman"},
		{code : "PK", name : "Pakistan"},
		{code : "PW", name : "Palau"},
		{code : "PS", name : "Palestine"},
		{code : "PA", name : "Panama"},
		{code : "PG", name : "Papua New Guinea"},
		{code : "PY", name : "Paraguay"},
		{code : "PE", name : "Peru"},
		{code : "PH", name : "Philippines"},
		{code : "PL", name : "Poland"},
		{code : "PT", name : "Portugal"},
		{code : "PR", name : "Puerto Rico"},
		{code : "QA", name : "Qatar"},
		{code : "RO", name : "Romania"},
		{code : "RU", name : "Russia"},
		{code : "RW", name : "Rwanda"},
		{code : "KN", name : "Saint Kitts and Nevis"},
		{code : "LC", name : "Saint Lucia"},
		{code : "WS", name : "Samoa"},
		{code : "SM", name : "San Marino"},
		{code : "SA", name : "Saudi Arabia"},
		{code : "XS", name : "Scotland"},
		{code : "SN", name : "Senegal"},
		{code : "RS", name : "Serbia"},
		{code : "SC", name : "Seychelles"},
		{code : "SL", name : "Sierra Leone"},
		{code : "SG", name : "Singapore"},
		{code : "SK", name : "Slovakia"},
		{code : "SI", name : "Slovenia"},
		{code : "SB", name : "Solomon Islands"},
		{code : "ZA", name : "South Africa"},
		{code : "ES", name : "Spain"},
		{code : "LK", name : "Sri Lanka"},
		{code : "SD", name : "Sudan"},
		{code : "SR", name : "Suriname"},
		{code : "SE", name : "Sweden"},
		{code : "CH", name : "Switzerland"},
		{code : "SY", name : "Syria"},
		{code : "TW", name : "Chinese Taipei"},
		{code : "TJ", name : "Tajikistan"},
		{code : "TZ", name : "Tanzania"},
		{code : "TH", name : "Thailand"},
		{code : "TG", name : "Togo"},
		{code : "TT", name : "Trinidad and Tobago"},
		{code : "TN", name : "Tunesia"},
		{code : "TR", name : "Turkey"},
		{code : "TM", name : "Turkmenistan"},
		{code : "UG", name : "Uganda"},
		{code : "UA", name : "Ukrain"},
		{code : "AE", name : "United Arab Emirates"},
		{code : "US", name : "United States"},
		{code : "UY", name : "Urugay"},
		{code : "ZU", name : "Uzbekistan"},
		{code : "VU", name : "Vanuatu"},
		{code : "VE", name : "Venezuela"},
		{code : "VN", name : "Vietnam"},
		{code : "VI", name : "Virgin Islands"},
		{code : "XW", name : "Wales"},
		{code : "YE", name : "Yemen"},
		{code : "ZM", name : "Zambia"},
		{code : "ZW", name : "Zimbabwe"}
];		

