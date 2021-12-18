import { Calendar } from './enums'

/*
	The locales argument is used to determine the locale used in a given operation.
	The JavaScript implementation examines locales, and then computes a locale it
	understands that comes closest to satisfying the expressed preference. locales
	may be:

		- undefined (or omitted): The implementation's default locale will be used.
		- A locale: A locale identifier or an Intl.Locale object that wraps a locale
			identifier.
		- A list of locales: Any other value, that will be converted into an object
			and then treated as an array of locales.
		- In the latter two cases, the actual locale used is the best-supported
			locale determined by locale negotiation.

A locale identifier is a string that consists of:

	- A language subtag,
	- (optionally) a script subtag,
	- (optionally) a region (or country) subtag,
	- (optionally) one or more variant subtags (all of which must be unique),
	- (optionally) one or more BCP 47 extension sequences, and
	- (optionally) a private-use extension sequence
	- ...with all present subtags and sequences separated by hyphens. Locale
		identifiers are case-insensitive ASCII. However, it's conventional to use
		title case (first letter capitalized, successive letters lower case) for
		script subtags, upper case for region subtags, and lower case for
		everything else. For example:
		- "hi": Hindi (language)
		- "de-AT": German (language) as used in Austria (region)
		- "zh-Hans-CN": Chinese (language) written in simplified characters
			(script) as used in China (region)
		- "en-emodeng": English (language) in the "Early modern English"
			dialect (variant)
		- Subtags identifying languages, scripts, regions (including countries),
			and (rarely used) variants are registered in the IANA Language Subtag
			Registry. This registry is periodically updated over time, and
			implementations may not always be up to date, so don't rely too much
			on subtags being universally supported.

BCP 47 extension sequences consist of a single digit or letter (other than "x")
and one or more two- to eight-letter or digit subtags separated by hyphens.
Only one sequence is permitted for each digit or letter: "de-a-foo-a-foo" is
invalid. BCP 47 extension subtags are defined in the Unicode CLDR Project.
Currently only two extensions have defined semantics:
	- The "u" (Unicode) extension can be used to request additional customization
		of Intl.Collator, Intl.NumberFormat, or Intl.DateTimeFormat objects.
		Examples:
		- "de-DE-u-co-phonebk": Use the phone book variant of the German sort order,
			which interprets umlauted vowels as corresponding character pairs: ä → ae,
			ö → oe, ü → ue.
		- "th-TH-u-nu-thai": Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in
			number formatting.
		- "ja-JP-u-ca-japanese": Use the Japanese calendar in date and time formatting,
			so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.
		- "en-GB-u-ca-islamic": use British English with the Islamic (Hijri) calendar,
			where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram,
			1439.
	- The "t" (transformed) extension indicates transformed content: for example,
		text that was translated from another locale. No Intl functionality currently
		considers the "t" extension. However, this extension sometimes contains a nested
		locale (with no extensions): for example, the transformed extension in "de-t-en"
		contains the locale identifier for English. If a nested locale is present, it
		must be a valid locale identifier. For example, because "en-emodeng-emodeng"
		is invalid (because it contains a duplicate emodeng variant subtag),
		"de-t-en-emodeng-emodeng" is also invalid.

	Finally, a private-use extension sequence using the letter "x" may appear,
	followed by one or more one- to eight-letter or digit subtags separated by
	hyphens. This allows applications to encode information for their own private
	use, that will be ignored by all Intl operations.

*/

export type CalendarName = keyof typeof Calendar

export type DateOptions = {
	day?: '2-digit' | 'numeric'
	era?: 'long' | 'narrow' | 'short'
	locale?: string | Array<string>
	month?: '2-digit' | 'long' | 'numeric' | 'short' | 'narrow'
	timeZone?: TimeZoneType
	timeZoneName?: 'short' | 'long'
	weekday?: 'long' | 'narrow' | 'short'
	year?: '2-digit' | 'numeric'
	formatMatcher?: 'basic' | 'best fit'
}

export type TimeOptions = {
	hour?: '2-digit' | 'numeric'
	hour12?: boolean
	hourCycle?: 'h11' | 'h12' | 'h23' | 'h24'
	locale?: string | Array<string>
	minute?: '2-digit' | 'numeric'
	second?: '2-digit' | 'numeric'
	timeZone?: string
	timeZoneName?: 'short' | 'long'
	formatMatcher?: 'basic' | 'best fit'
}

export type DateTimeOptions = DateOptions &
	TimeOptions & {
		locale?: string | Array<string>
	}

export type DurationOptions = {
	locales?: string | Array<string>
	options?: {
		years?: '2-digit' | 'numeric'
	}
}

export type LargestUnit =
	| 'auto' // default
	| 'hour'
	| 'minute'
	| 'second'
	| 'millisecond'
	| 'microsecond'
	| 'nanosecond'

export type SmallestUnit =
	| 'auto'
	| 'hour'
	| 'minute'
	| 'second'
	| 'millisecond'
	| 'microsecond'
	| 'nanosecond' // default (no rounding)

// halfExpand rounds to the nearest of the values allowed by roundingIncrement (number) and smallestUnit
export type RoundingMode = 'ceil' | 'floor' | 'halfExpand' | 'trunc' // default

export type Locale = {
	// BCP 47 language tag or array of such strings, empty array for browser default, unicode extensions supported
	locale?: string | Array<string>
	// The date and time formats can be customized using the options argument
	options: Omit<DateTimeOptions, 'locale'>
}

export type Locales = Array<Locale>

export type TimeZoneType =
	| 'Africa/Abidjan'
	| 'Africa/Accra'
	| 'Africa/Addis_Ababa'
	| 'Africa/Algiers'
	| 'Africa/Asmara'
	| 'Africa/Bamako'
	| 'Africa/Bangui'
	| 'Africa/Banjul'
	| 'Africa/Bissau'
	| 'Africa/Blantyre'
	| 'Africa/Brazzaville'
	| 'Africa/Bujumbura'
	| 'Africa/Cairo'
	| 'Africa/Casablanca'
	| 'Africa/Ceuta'
	| 'Africa/Conakry'
	| 'Africa/Dakar'
	| 'Africa/Dar_es_Salaam'
	| 'Africa/Djibouti'
	| 'Africa/Douala'
	| 'Africa/El_Aaiun'
	| 'Africa/Freetown'
	| 'Africa/Gaborone'
	| 'Africa/Harare'
	| 'Africa/Johannesburg'
	| 'Africa/Juba'
	| 'Africa/Kampala'
	| 'Africa/Khartoum'
	| 'Africa/Kigali'
	| 'Africa/Kinshasa'
	| 'Africa/Lagos'
	| 'Africa/Libreville'
	| 'Africa/Lome'
	| 'Africa/Luanda'
	| 'Africa/Lubumbashi'
	| 'Africa/Lusaka'
	| 'Africa/Malabo'
	| 'Africa/Maputo'
	| 'Africa/Maseru'
	| 'Africa/Mbabane'
	| 'Africa/Mogadishu'
	| 'Africa/Monrovia'
	| 'Africa/Nairobi'
	| 'Africa/Ndjamena'
	| 'Africa/Niamey'
	| 'Africa/Nouakchott'
	| 'Africa/Ouagadougou'
	| 'Africa/Porto-Novo'
	| 'Africa/Sao_Tome'
	| 'Africa/Tripoli'
	| 'Africa/Tunis'
	| 'Africa/Windhoek'
	| 'America/Adak'
	| 'America/Anchorage'
	| 'America/Anguilla'
	| 'America/Antigua'
	| 'America/Araguaina'
	| 'America/Argentina/Buenos_Aires'
	| 'America/Argentina/Catamarca'
	| 'America/Argentina/Cordoba'
	| 'America/Argentina/Jujuy'
	| 'America/Argentina/La_Rioja'
	| 'America/Argentina/Mendoza'
	| 'America/Argentina/Rio_Gallegos'
	| 'America/Argentina/Salta'
	| 'America/Argentina/San_Juan'
	| 'America/Argentina/San_Luis'
	| 'America/Argentina/Tucuman'
	| 'America/Argentina/Ushuaia'
	| 'America/Aruba'
	| 'America/Asuncion'
	| 'America/Atikokan'
	| 'America/Bahia_Banderas'
	| 'America/Bahia'
	| 'America/Barbados'
	| 'America/Belem'
	| 'America/Belize'
	| 'America/Blanc-Sablon'
	| 'America/Boa_Vista'
	| 'America/Bogota'
	| 'America/Boise'
	| 'America/Cambridge_Bay'
	| 'America/Campo_Grande'
	| 'America/Cancun'
	| 'America/Caracas'
	| 'America/Cayenne'
	| 'America/Cayman'
	| 'America/Chicago'
	| 'America/Chihuahua'
	| 'America/Costa_Rica'
	| 'America/Creston'
	| 'America/Cuiaba'
	| 'America/Curacao'
	| 'America/Danmarkshavn'
	| 'America/Dawson_Creek'
	| 'America/Dawson'
	| 'America/Denver'
	| 'America/Detroit'
	| 'America/Dominica'
	| 'America/Edmonton'
	| 'America/Eirunepe'
	| 'America/El_Salvador'
	| 'America/Fort_Nelson'
	| 'America/Fortaleza'
	| 'America/Glace_Bay'
	| 'America/Goose_Bay'
	| 'America/Grand_Turk'
	| 'America/Grenada'
	| 'America/Guadeloupe'
	| 'America/Guatemala'
	| 'America/Guayaquil'
	| 'America/Guyana'
	| 'America/Halifax'
	| 'America/Havana'
	| 'America/Hermosillo'
	| 'America/Indiana/Indianapolis'
	| 'America/Indiana/Knox'
	| 'America/Indiana/Marengo'
	| 'America/Indiana/Petersburg'
	| 'America/Indiana/Tell_City'
	| 'America/Indiana/Vevay'
	| 'America/Indiana/Vincennes'
	| 'America/Indiana/Winamac'
	| 'America/Inuvik'
	| 'America/Iqaluit'
	| 'America/Jamaica'
	| 'America/Juneau'
	| 'America/Kentucky/Louisville'
	| 'America/Kentucky/Monticello'
	| 'America/Kralendijk'
	| 'America/La_Paz'
	| 'America/Lima'
	| 'America/Los_Angeles'
	| 'America/Lower_Princes'
	| 'America/Maceio'
	| 'America/Managua'
	| 'America/Manaus'
	| 'America/Marigot'
	| 'America/Martinique'
	| 'America/Matamoros'
	| 'America/Mazatlan'
	| 'America/Menominee'
	| 'America/Merida'
	| 'America/Metlakatla'
	| 'America/Mexico_City'
	| 'America/Miquelon'
	| 'America/Moncton'
	| 'America/Monterrey'
	| 'America/Montevideo'
	| 'America/Montserrat'
	| 'America/Nassau'
	| 'America/New_York'
	| 'America/Nipigon'
	| 'America/Nome'
	| 'America/Noronha'
	| 'America/North_Dakota/Beulah'
	| 'America/North_Dakota/Center'
	| 'America/North_Dakota/New_Salem'
	| 'America/Nuuk'
	| 'America/Ojinaga'
	| 'America/Panama'
	| 'America/Pangnirtung'
	| 'America/Paramaribo'
	| 'America/Phoenix'
	| 'America/Port_of_Spain'
	| 'America/Port-au-Prince'
	| 'America/Porto_Velho'
	| 'America/Puerto_Rico'
	| 'America/Punta_Arenas'
	| 'America/Rainy_River'
	| 'America/Rankin_Inlet'
	| 'America/Recife'
	| 'America/Regina'
	| 'America/Resolute'
	| 'America/Rio_Branco'
	| 'America/Santarem'
	| 'America/Santiago'
	| 'America/Santo_Domingo'
	| 'America/Sao_Paulo'
	| 'America/Scoresbysund'
	| 'America/Sitka'
	| 'America/St_Barthelemy'
	| 'America/St_Johns'
	| 'America/St_Kitts'
	| 'America/St_Lucia'
	| 'America/St_Thomas'
	| 'America/St_Vincent'
	| 'America/Swift_Current'
	| 'America/Tegucigalpa'
	| 'America/Thule'
	| 'America/Thunder_Bay'
	| 'America/Tijuana'
	| 'America/Toronto'
	| 'America/Tortola'
	| 'America/Vancouver'
	| 'America/Whitehorse'
	| 'America/Winnipeg'
	| 'America/Yakutat'
	| 'America/Yellowknife'
	| 'Antarctica/Casey'
	| 'Antarctica/Davis'
	| 'Antarctica/DumontDUrville'
	| 'Antarctica/Macquarie'
	| 'Antarctica/Mawson'
	| 'Antarctica/McMurdo'
	| 'Antarctica/Palmer'
	| 'Antarctica/Rothera'
	| 'Antarctica/Syowa'
	| 'Antarctica/Troll'
	| 'Antarctica/Vostok'
	| 'Arctic/Longyearbyen'
	| 'Asia/Aden'
	| 'Asia/Almaty'
	| 'Asia/Amman'
	| 'Asia/Anadyr'
	| 'Asia/Aqtau'
	| 'Asia/Aqtobe'
	| 'Asia/Ashgabat'
	| 'Asia/Atyrau'
	| 'Asia/Baghdad'
	| 'Asia/Bahrain'
	| 'Asia/Baku'
	| 'Asia/Bangkok'
	| 'Asia/Barnaul'
	| 'Asia/Beirut'
	| 'Asia/Bishkek'
	| 'Asia/Brunei'
	| 'Asia/Chita'
	| 'Asia/Choibalsan'
	| 'Asia/Colombo'
	| 'Asia/Damascus'
	| 'Asia/Dhaka'
	| 'Asia/Dili'
	| 'Asia/Dubai'
	| 'Asia/Dushanbe'
	| 'Asia/Famagusta'
	| 'Asia/Gaza'
	| 'Asia/Hebron'
	| 'Asia/Ho_Chi_Minh'
	| 'Asia/Hong_Kong'
	| 'Asia/Hovd'
	| 'Asia/Irkutsk'
	| 'Asia/Jakarta'
	| 'Asia/Jayapura'
	| 'Asia/Jerusalem'
	| 'Asia/Kabul'
	| 'Asia/Kamchatka'
	| 'Asia/Karachi'
	| 'Asia/Kathmandu'
	| 'Asia/Khandyga'
	| 'Asia/Kolkata'
	| 'Asia/Krasnoyarsk'
	| 'Asia/Kuala_Lumpur'
	| 'Asia/Kuching'
	| 'Asia/Kuwait'
	| 'Asia/Macau'
	| 'Asia/Magadan'
	| 'Asia/Makassar'
	| 'Asia/Manila'
	| 'Asia/Muscat'
	| 'Asia/Nicosia'
	| 'Asia/Novokuznetsk'
	| 'Asia/Novosibirsk'
	| 'Asia/Omsk'
	| 'Asia/Oral'
	| 'Asia/Phnom_Penh'
	| 'Asia/Pontianak'
	| 'Asia/Pyongyang'
	| 'Asia/Qatar'
	| 'Asia/Qostanay'
	| 'Asia/Qyzylorda'
	| 'Asia/Riyadh'
	| 'Asia/Sakhalin'
	| 'Asia/Samarkand'
	| 'Asia/Seoul'
	| 'Asia/Shanghai'
	| 'Asia/Singapore'
	| 'Asia/Srednekolymsk'
	| 'Asia/Taipei'
	| 'Asia/Tashkent'
	| 'Asia/Tbilisi'
	| 'Asia/Tehran'
	| 'Asia/Thimphu'
	| 'Asia/Tokyo'
	| 'Asia/Tomsk'
	| 'Asia/Ulaanbaatar'
	| 'Asia/Urumqi'
	| 'Asia/Ust-Nera'
	| 'Asia/Vientiane'
	| 'Asia/Vladivostok'
	| 'Asia/Yakutsk'
	| 'Asia/Yangon'
	| 'Asia/Yekaterinburg'
	| 'Asia/Yerevan'
	| 'Atlantic/Azores'
	| 'Atlantic/Bermuda'
	| 'Atlantic/Canary'
	| 'Atlantic/Cape_Verde'
	| 'Atlantic/Faroe'
	| 'Atlantic/Madeira'
	| 'Atlantic/Reykjavik'
	| 'Atlantic/South_Georgia'
	| 'Atlantic/St_Helena'
	| 'Atlantic/Stanley'
	| 'Australia/Adelaide'
	| 'Australia/Brisbane'
	| 'Australia/Broken_Hill'
	| 'Australia/Darwin'
	| 'Australia/Eucla'
	| 'Australia/Hobart'
	| 'Australia/Lindeman'
	| 'Australia/Lord_Howe'
	| 'Australia/Melbourne'
	| 'Australia/Perth'
	| 'Australia/Sydney'
	| 'Europe/Amsterdam'
	| 'Europe/Andorra'
	| 'Europe/Astrakhan'
	| 'Europe/Athens'
	| 'Europe/Belgrade'
	| 'Europe/Berlin'
	| 'Europe/Bratislava'
	| 'Europe/Brussels'
	| 'Europe/Bucharest'
	| 'Europe/Budapest'
	| 'Europe/Busingen'
	| 'Europe/Chisinau'
	| 'Europe/Copenhagen'
	| 'Europe/Dublin'
	| 'Europe/Gibraltar'
	| 'Europe/Guernsey'
	| 'Europe/Helsinki'
	| 'Europe/Isle_of_Man'
	| 'Europe/Istanbul'
	| 'Europe/Jersey'
	| 'Europe/Kaliningrad'
	| 'Europe/Kiev'
	| 'Europe/Kirov'
	| 'Europe/Lisbon'
	| 'Europe/Ljubljana'
	| 'Europe/London'
	| 'Europe/Luxembourg'
	| 'Europe/Madrid'
	| 'Europe/Malta'
	| 'Europe/Mariehamn'
	| 'Europe/Minsk'
	| 'Europe/Monaco'
	| 'Europe/Moscow'
	| 'Europe/Oslo'
	| 'Europe/Paris'
	| 'Europe/Podgorica'
	| 'Europe/Prague'
	| 'Europe/Riga'
	| 'Europe/Rome'
	| 'Europe/Samara'
	| 'Europe/San_Marino'
	| 'Europe/Sarajevo'
	| 'Europe/Saratov'
	| 'Europe/Simferopol'
	| 'Europe/Skopje'
	| 'Europe/Sofia'
	| 'Europe/Stockholm'
	| 'Europe/Tallinn'
	| 'Europe/Tirane'
	| 'Europe/Ulyanovsk'
	| 'Europe/Uzhgorod'
	| 'Europe/Vaduz'
	| 'Europe/Vatican'
	| 'Europe/Vienna'
	| 'Europe/Vilnius'
	| 'Europe/Volgograd'
	| 'Europe/Warsaw'
	| 'Europe/Zagreb'
	| 'Europe/Zaporozhye'
	| 'Europe/Zurich'
	| 'Indian/Antananarivo'
	| 'Indian/Chagos'
	| 'Indian/Christmas'
	| 'Indian/Cocos'
	| 'Indian/Comoro'
	| 'Indian/Kerguelen'
	| 'Indian/Mahe'
	| 'Indian/Maldives'
	| 'Indian/Mauritius'
	| 'Indian/Mayotte'
	| 'Indian/Reunion'
	| 'Pacific/Apia'
	| 'Pacific/Auckland'
	| 'Pacific/Bougainville'
	| 'Pacific/Chatham'
	| 'Pacific/Chuuk'
	| 'Pacific/Easter'
	| 'Pacific/Efate'
	| 'Pacific/Enderbury'
	| 'Pacific/Fakaofo'
	| 'Pacific/Fiji'
	| 'Pacific/Funafuti'
	| 'Pacific/Galapagos'
	| 'Pacific/Gambier'
	| 'Pacific/Guadalcanal'
	| 'Pacific/Guam'
	| 'Pacific/Honolulu'
	| 'Pacific/Kiritimati'
	| 'Pacific/Kosrae'
	| 'Pacific/Kwajalein'
	| 'Pacific/Majuro'
	| 'Pacific/Marquesas'
	| 'Pacific/Midway'
	| 'Pacific/Nauru'
	| 'Pacific/Niue'
	| 'Pacific/Norfolk'
	| 'Pacific/Noumea'
	| 'Pacific/Pago_Pago'
	| 'Pacific/Palau'
	| 'Pacific/Pitcairn'
	| 'Pacific/Pohnpei'
	| 'Pacific/Port_Moresby'
	| 'Pacific/Rarotonga'
	| 'Pacific/Saipan'
	| 'Pacific/Tahiti'
	| 'Pacific/Tarawa'
	| 'Pacific/Tongatapu'
	| 'Pacific/Wake'
	| 'Pacific/Wallis'

export type DurationParameters = {
	years?: number
	months?: number
	weeks?: number
	days?: number
	hours?: number
	minutes?: number
	seconds?: number
	milliseconds?: number
	microseconds?: number
	nanoseconds?: number
}
