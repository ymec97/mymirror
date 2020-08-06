/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right"
		},
	//	{
	//		module: "calendar",
	//		header: "Holidays",
	//		position: "top_left",
	//		config: {
	//			calendars: [
	//				{
	//					symbol: "calendar-check",
	//					url: "webcal://www.calendarlabs.com/ical-calendar/ics/55/JEWISH_Holidays.ics"				}
	//			]
	//		}
	//	},
		{
		  module: "MMM-GooglePhotos",
		  position: "bottom_right",
		  config: {
			albums: ["Maayan & Yarden"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
			updateInterval: 1000 * 60, // minimum 10 seconds.
			sort: "random", // "old", "random"
			condition: {
				fromDate: null, // Or "2018-03", RFC ... format available
				toDate: null, // Or "2019-12-25",
				minWidth: null, // Or 400
				maxWidth: null, // Or 8000
				minHeight: null, // Or 400
				maxHeight: null, // Or 8000
				minWHRatio: null,
				maxWHRatio: null,
				// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
			},
			showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
			showHeight: 1920,
			timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
		  }
		},
//		{
//			 module: "MMM-EasyPix",
//			 position: "right",
//			 config: {
///				picName: "atsea.jpeg", // Enter the picture file name.
//				maxWidth: "50%",        // Size picture precisely. Retains aspect ratio.
//				updateInterval: 30 * 60 * 1000,     // updates display
//	        		animationSpeed: 3000,
//			}
//		},
		{
			module: "currentweather",
			position: "right",
			config: {
				locationName: "Beer Sheva",
				locationID: "295530",  //@YMeC: The id is for Beer Sheva. ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "9523f3b841397650ae9a455492c7e358",
				degreeLabel: "true",
				useKMPHwind: "false"
			}
		}
	//	{
	//		module: "newsfeed",
	//		position: "bottom_left",
	//		config: {
	//			feeds: [
	//				{
	//					title: "Times Of Israel News",
	//					url: "http://www.timesofisrael.com/feed/"
	//				}
	//			],
	//			showSourceTitle: true,
	//			showPublishDate: true,
	//			wrapTitle: true,
	//			hideLoading: true
	//		}
	//	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
