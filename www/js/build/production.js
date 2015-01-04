var bio = {
	"name" : "Ekaterina KORNEEVA",
	"role" : "Front-end Developer",
	"contacts": {
		"email" : "korneevaed@gmail.com",
		"mobile":"017676209810",
		"github":"korneevaed",
		"location":"Berlin"
	},
	"welcomeMessage":"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
	"skills": [
		"sanctus", "ipsum", "clita", "gubergren"
	],
	"bioPic":"images/face.jpg"	
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",charEscape(bio.name));
	$("#name").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%",charEscape(bio.role));
	$("#name").append(formattedRole);

	$("#allContacts").append(HTMLcontactsStart);
	var formattedMobile =  HTMLmobile.replace("%data%",charEscape(bio.contacts.mobile));
	$("#contacts").append(formattedMobile);
	var formattedEmail =  HTMLemail.replace("%data%",charEscape(bio.contacts.email));
	$("#contacts").append(formattedEmail);
	var formattedGithub =  HTMLgithub.replace("%data%",charEscape(bio.contacts.github));
	$("#contacts").append(formattedGithub);
	var formattedLocation =  HTMLlocation.replace("%data%", charEscape(bio.contacts.location));
	$("#contacts").append(formattedLocation);
	var formattedPic = HTMLbioPic.replace("%data%", charEscape(bio.bioPic));
	$("#pic").append(formattedPic);

	if (bio.skills.length>0) {
		$("#allSkills").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", charEscape(bio.skills[skill]));
			$("#skills").append(formattedSkill);
		}
	}
};

var education = {
    "schools": [
        {
            "name": "Higher School of Economics",
            "location": "Moscow",
            "degree": "Bachelor",
            "major": "Business Informatics",
            "dates": "2008-2012",
        }
    ],
    "courses": [
        {
            "title": "Front-end Dev Nanodegree",
            "school": "Udacity",
            "dates" : "2014",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title": "Java-Script",
            "school": "Codeacademy",            
            "dates" : "2013",
            "url": ""
        },
        {
            "title": "PHP",
            "school": "Codeacademy",            
            "dates" : "2013",
            "url": ""
        },
        {
            "title": "HTML, CSS",
            "school": "Codeacademy",            
            "dates" : "2013",
            "url": ""
        }
    ]
};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	if (education.schools.length > 0) {
		$(".education-entry:last").append(HTMLschools);
		for (school in education.schools) {
			var formattedName = HTMLschoolName.replace("%data%",charEscape(education.schools[school].name));
			$(".education-entry:last").append(formattedName);
			var formattedDegree = HTMLschoolDegree.replace("%data%",charEscape(education.schools[school].degree));
			$(".education-entry:last").append(formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%",charEscape(education.schools[school].dates));
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",charEscape(education.schools[school].location));
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%",charEscape(education.schools[school].major));
			$(".education-entry:last").append(formattedMajor);
		};
	};
	if (education.courses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);
		for (course in education.courses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",charEscape(education.courses[course].title));
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",charEscape(education.courses[course].school));
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",charEscape(education.courses[course].dates));
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",charEscape(education.courses[course].url));
			$(".education-entry:last").append(formattedOnlineURL);
		};
	};
};

var work = {
	"jobs": [
		{
			"employer":"Home24",
			"link":"http://www.home24.de/",
			"title":"Software Tester",
			"dates":"April 2013 - now",
			"location":"Berlin",
			"description":"Home24 is situated in a former cigar factory in Berlin, \
			Prenzlauer Berg. From there, our young and international team manages \
			our web shops in Germany, France, Austria, the Netherlands, \
			Switzerland and Belgium. Since 2009 we have been working with great \
			passion and enthusiasm for a great cause: To revolutionize the furniture market. "
		},
		{
			"employer":"CHTD",
			"link":"http://chtd.ru/",
			"title":"Software Tester",
			"dates":"April 2012 - March 2013",
			"location":"Moscow",
			"description":"The company develops high-loaded distributed large \
			web applications with nontrivial business logic. \
			I performed functional testing Automation based on Selenium IDE \
			and Selenium Web Driver, load testing, usability testing."
		},
		{
			"employer":"Student startup Ecofood",
			"link":"#",
			"title":"Marketing, Website administration, search for investors",
			"dates":"September 2011 - December 2011",
			"location":"Moscow",
			"description":"Our mission was to \
			deliver naturally produced farm food to citizens the same day it was produced."
		}
	]
};

work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",charEscape(work.jobs[i].employer));
		var formattedWorkEmployerLink = formattedWorkEmployer.replace("#", charEscape(work.jobs[i].link));
		$(".work-entry:last").append(formattedWorkEmployerLink);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",charEscape(work.jobs[i].title));
		$(".work-entry:last").append(formattedWorkTitle);
		var formattedWorkDates =  HTMLworkDates.replace("%data%",charEscape(work.jobs[i].dates));
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkLocation =  HTMLworkLocation.replace("%data%", charEscape(work.jobs[i].location));
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription =  HTMLworkDescription.replace("%data%", charEscape(work.jobs[i].description));
		$(".work-entry:last").append(formattedWorkDescription);
	};
};

var projects = {
	"projects" : [
		{
			"title":"Stereoskverna website",
			"link":"http://www.stereoskverna.com/",
			"dates":"2013-2014",
			"description": "Website for Industrial music project Stereoskverna. \
			The player which is used on this website is represented in next project.",
			"images": [
				"images/build/project1-0.png",
				"images/build/project1-8.png",
				"images/build/project1-6.png"
			]			
		},
		{
			"title":"Circle JS player with playlist",
			"link":"http://korneevaed.github.io/radial_player/",
			"dates":"2014",
			"description": "Combination of radial progress feature from this artickle \
			https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9 and HTML5 audio player.\
			I've done this project because most of radial players I could find were not adapted for playlists. \
			Maybe someday I will develop it into reusable plugin.",
			"images": [
				"images/build/project2-2.png"
			]
		},		
		{
			"title":"Mockup to website",
			"link":"http://korneevaed.github.io/mockup_to_website/",
			"dates":"2014",
			"description": "A project made within Udacity HTML&CSS introduction course. \
			It would probably be later developed into something usefull. For now \
			it represents my knowledge of HTML5, CSS3 and Bootstrap framework, but only by itself, \
			containing no actual portfolio. And my photography achievments, of course",
			"images": [
				"images/build/project3-2.png",
				"images/build/project3-3.png"
			]
		}

	]
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", charEscape(projects.projects[project].title));
		var formattedTitleLink = formattedTitle.replace('#', projects.projects[project].link)
		$(".project-entry:last").append(formattedTitleLink);
		var formattedDates = HTMLprojectDates.replace("%data%", charEscape(projects.projects[project].dates));
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", charEscape(projects.projects[project].description));
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", charEscape(projects.projects[project].images[image]));
				$(".project-entry:last").append(formattedImage);
			};
		};
	};
};

function displayMap () {
	$("#mapDiv").append('<div id="map"></div>');
}

var charEscape = function(_html) {
	var newHTML = _html;
	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");
	return newHTML;
};

// Shows diagrams for skills in Skills Charts
$('.skillChart1').diagram();
$('.skillChart2').diagram();
$('.skillChart3').diagram();
$('.skillChart4').diagram();

// Displaying the contents of the CV
bio.display();
projects.display();
work.display();
education.display();
displayMap();
/*
This is used to construct resume sections. %data% is replaced with custom data in resumeBuilder
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<h4>%data%</h4>";

var HTMLcontactsStart = "<h3 id='contactH3'>Contacts:</h3><ul id='contacts'></ul>";
var HTMLcontactGeneric = "<li class='flex-item'><span>%contact%</span><span>%data%</span></li>";
var HTMLmobile = "<li><span>mobile:</span><span>%data%</span></li>";
var HTMLemail = "<li><span>email:</span><span>%data%</span></li>";
var HTMLtwitter = "<li><span>twitter:</span><span>%data%</span></li>";
var HTMLgithub = "<li><span>github:</span><span>%data%</span></li>";
var HTMLblog = "<li><span>blog:</span><span>%data%</span></li>";
var HTMLlocation = "<li><span>location:</span><span>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic' alt='avatar'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skills-h3'>Skills:</h3><ul id='skills'></ul>";
var HTMLskills = "<li><span>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img class='img-responsive projectpic' src='%data%' alt='illustration for project'>";

var HTMLschools = "<h3>Schools</h3>";
var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";

/*
Here's where the custom Google Map for the website is generated.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
    
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name ='<div class="mapInfoWindow"><h4>' + placeData.formatted_address + '</h4></div>';   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}


// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});

(function($) {

	$.fn.diagram = function(params){
	
		function rotate(angle) {
			return {
				"-webkit-transform": "rotate("+angle+"deg)",
				"-moz-transform": "rotate("+angle+"deg)",
				"-ms-transform": "rotate("+angle+"deg)",
				"-o-transform": "rotate("+angle+"deg)",
				"transform": "rotate("+angle+"deg)"
			};
		}

		var defaults = {
			size: "100",
			borderWidth: "10",
			bgFill: '#F3F3F3',
			frFill: '#16a085',
			textSize: 15+'px',
			font: "serif",
			textColor: '#000'
		};

		var options = $.extend({}, defaults, params);

		var $this = $(this);
		var dataAttr = $this.data("percent");
		var data = parseFloat(dataAttr);

		var cssMain = {
			"position": "relative",
			"width": options.size+"px",
			"height": options.size+"px",
			"border": options.borderWidth + "px " + "solid" + options.bgFill,
			"border-radius": "50%",
			"z-index": "1"
		};

		var cssElems = {
			"position": "absolute",
			"top": -options.borderWidth+"px",
			"right": -options.borderWidth+"px",
			"bottom": -options.borderWidth+"px",
			"left": -options.borderWidth+"px",
			"border": options.borderWidth+"px " + "solid",
			"border-radius": "50%"
		};

		$this.css(cssMain);
		
		var text = $('<span></span>')
			.appendTo($this)
			.css({
				"display": "block",
				"position": "relative",
				"z-index": "2",
				"text-align": "center",
				"font-size": options.textSize,
				"font-family": options.font,
				"height": options.size+"px",
				"line-height": options.size+"px",
				"color": options.textColor
			})
			.text(dataAttr);
		
		var bg = $('<div></div>')
			.appendTo($this)
			.css(cssElems)
			.css({
				"border-color": options.frFill,
				"border-left-color": "transparent",
				"border-bottom-color": "transparent",
				"z-index": "1"
			});

		var fill = $('<div></div>')
			.appendTo($this)
			.css(cssElems)
				.css({
				"border-color": options.bgFill,
				"border-left-color": "transparent",
				"border-bottom-color": "transparent",
				"z-index": "1"
			});

		var angle;
		if (data >= 0 && data <= 50) {
			angle = (225 - 45)/50*data + 45;
		} else {
			angle = (405 - 225)/50*data + 225;
			fill.css({
				"border-color": options.frFill,
				"border-left-color": "transparent",
				"border-bottom-color": "transparent",
				"z-index": "1"
			});
		}
		
		bg.css(rotate(45));
		fill.css(rotate(angle));

		return this;
	};

})(jQuery);