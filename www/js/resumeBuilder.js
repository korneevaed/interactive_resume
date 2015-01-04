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
			"title":"Clone of arcade game Frogger",
			"link":"http://korneevaed.github.io/frogger-clone/",
			"dates":"2014",
			"description": "A clone of arcade game, which is built to \
			use OOJS features.",
			"images": [
				"images/project4-0.jpg"
			]			
		},
		{
			"title":"Stereoskverna website",
			"link":"http://www.stereoskverna.com/",
			"dates":"2013-2014",
			"description": "Website for Industrial music project Stereoskverna. \
			The player which is used on this website is represented in next project.",
			"images": [
				"images/project1-0.jpg",
				"images/project1-8.jpg",
				"images/project1-6.jpg"
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
				"images/project2-2.jpg"
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
				"images/project3-2.jpg",
				"images/project3-3.jpg"
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