//Vandal Dining App
//Jessica G. Greene

(function(){
	var win1 = Titanium.UI.createWindow({
		title:'Vandal Dining',
		background:'#fff'
	});
	
	// open window
	win1.open();

//array of venue names
var Venues = ['Bob\'s Place', 'Denny\'s AllNighter', 'The Grid Community Store', 
	'Sisters\' Brew','Stover\'s', 'Einstein\'s Bagels', 'I of the Commons', 
	'Mein Bowl', 'Subconnections',	'Chorizos Mexican Grill', 'Jamba Juice',
	'Paradise Creek Pizza and Grill' ];
	
//array of venue images. Needs to align with matching venue in order.
var VenueImage = ['BobsImage.png', 'DennysImage.png','TheGridImage.JPG', 'SistersBrewImage.jpg',
	'stoversImage.jpg','EinsteinImage.png','IofCommonsImage.png','meinbowlImage.png',
	'SubConnectionImage.png','ChorizosImage.PNG','jambaImage.png'];
	
var allRows = [];
var theVenues = Titanium.UI.createTableView({});
var theRow;

for (var i=0; i <Venues.length; i++) {
	var rowColor;
	if (i % 2 == 0)
	{
		rowColor = '#FFFF99';	
	}
	else
	{
		rowColor = '#888888';
	}
	theLabel = Titanium.UI.createLabel({
		text:Venues[i],
		textAlign: 'right',
		textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT
	});
	theRow = Titanium.UI.createTableViewRow({backgroundColor:
	rowColor, height:50, leftImage: VenueImage[i], title:Venues[i],VenueSelection:Venues[i]});//title:Venues[i],
	//theRow.add(theLabel);
	allRows.push(theRow);
}

theVenues.setData(allRows);
win1.add(theVenues);

function getVerdict(venue) {
	Ti.API.info('processing verdict');
	Ti.API.info('venue:'+venue);
	var indicator  = venue.charAt(0);
	Ti.API.info('indicator:'+indicator);
	var VenueName= venue;
	var LargeImage;
	var VenueHours;
	var VenueLocation;
	var MenuItems = [];
	var VenueInfo = [];
	
	// make a crude decision on the strength of the tea based
	switch (indicator) {
		case 'B': //Bob's Place		
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;
		case 'D': // Denny's AllNighter
			LargeImage = 'Hungry.png';
			VenueHours = 'Sunday - Thursday: 10:00am - Midnight, '+
				'Friday - Saturday: 10:00am - 2:00am'; 
			VenueLocation = '6th Street Market at the LLC';
			MenuItems = ['Breakfast Skillet    		$6.99',
						 'Country Scramble      	 7.49',
						 'Breakfast Croissant   	 5.99',
						 'Ham and Cheese Sandwich 	 7.99']; 
			break;
		case 'T': //The Grid
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;
		case 'S': 
			var indicator2 = venue.charAt(2);
			case 'i': //Sisters'Brew
				LargeImage = 'Hungry.png';
				VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
					'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
					'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
					'Dinner: 4:30pm - 7:30pm'; 
				VenueLocation = 'Wallace Complex';
				MenuItems = ['Meal Plan    N/A']; 
				break;
			case 't': //Stovers
				LargeImage = 'Hungry.png';
				VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
					'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
					'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
					'Dinner: 4:30pm - 7:30pm'; 
				VenueLocation = 'Wallace Complex';
				MenuItems = ['Meal Plan    N/A']; 
				break;
					
			case 'u'://Subconnection
				LargeImage = 'Hungry.png';
				VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
					'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
					'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
					'Dinner: 4:30pm - 7:30pm'; 
				VenueLocation = 'Wallace Complex';
				MenuItems = ['Meal Plan    N/A']; 
				break;
			
		case 'E': //Einstein Bros
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;
		case 'I': //I of Commons
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;
		case 'M': //Mein Bowl
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;		
		case 'C': // Cobrizo Mexican Grill
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;
		case 'J': //Jamba Juice
			LargeImage = 'Hungry.png';
			VenueHours = 'Monday - Friday: Breakfast: 7:00am - 10:30am, '+
				'Lunch: 11:00am - 5:00pm, Dinner: 5:00am - 7:30pm '+
				'Saturday-Sunday: Breakfast: 8:00am - 10:00am, Brunch: 10:00am - 1:30pm, '+
				'Dinner: 4:30pm - 7:30pm'; 
			VenueLocation = 'Wallace Complex';
			MenuItems = ['Meal Plan    N/A']; 
			break;
	}
	VenueInfo = [VenueName,LargeImage,VenueHours,VenueLocation,MenuItems];
	return VenueInfo;
}

function showVenuePage(_args) {
	var VenuePage = Ti.UI.createWindow({layout:'vertical'});
	var VenueView = Ti.UI.createView({
		top:0,
		width: '100%',
		height: '50%',
		backgroundColor: '#1C1C1C'
	});
	
	var MenuView = Ti.UI.createView({
		top:10,
		width: '95%',
		height: '30%'
	});
	
	var VenueInfo = [];

	VenuePage.backgroundColor = '#DDDDDD';
	VenueInfo = getVerdict(_args);
	var VenueName = VenueInfo[0];
	var LargeImage = VenueInfo[1];
	var VenueHours = VenueInfo[2];
	var VenueLocation = VenueInfo[3];
	var MenuItems = VenueInfo[4];
	
	
	var venueLabel = Ti.UI.createLabel
	({text: VenueName, top:'0%'});
	VenueView.add(venueLabel);
	var venueImage = Ti.UI.createImageView({
		top: 25,
		image: LargeImage
	});
	VenueView.add(venueImage);
	var venueHoursLabel = Ti.UI.createLabel	({
		text: 'Hours: '+VenueHours, 
		top:'57%',
		width: '80%',
		font:{
			fontSize: '12sp'
		}
	});
	
	var venueLocationLabel = Ti.UI.createLabel	({
		text: 'Location: '+VenueLocation, 
		top:'88%',
		font:{
			fontSize: '12sp'
		}
	});
	VenueView.add(venueHoursLabel);
	VenueView.add(venueLocationLabel);
	
	VenuePage.add(VenueView);
	
	var FeedbackButton = Titanium.UI.createButton ({
		title: 'Give Us Feedback!',
		top:1,
		//left:10,
		height: 30,
		backgroundColor: '#00CCFF'	
	});
	FeedbackButton.addEventListener('click', function()
	{
		VenuePage.close();
		//release the resources
		VenuePage = null;
	
	});
	VenuePage.add(FeedbackButton);	
	
	var allRows = [];
	var theMenuItems = Titanium.UI.createTableView({});
	var theMenuRow;
	theRow = Titanium.UI.createTableViewRow({
			height:20, color: 'black',title:'Menu:'});
	allRows.push(theRow);
	for (var i=0; i < MenuItems.length; i++){
		Ti.API.info('MenuItems[i]');
		theLabel = Titanium.UI.createLabel({
			text: MenuItems[i],
			textAlign: 'left'
		});
	
		theRow = Titanium.UI.createTableViewRow({
			height:20, color: 'black',title:MenuItems[i]});
		allRows.push(theRow);
	}
	theMenuItems.setData(allRows);

	
	var close = Ti.UI.createButton({
		title:'Venue List Page', 
		color: 'black',
	  	top: 27,
	  	height:30,
	  	backgroundColor: '#FFFF99'
	 });
	
	close.addEventListener('click', function()
	{
			Ti.API.info('User Clicked Venue List Page button');
			VenuePage.close();
			//release the resources
			VenuePage = null;
	});
	
	//MenuView.add(close);
	MenuView.add(theMenuItems);
	VenuePage.add(MenuView);
	VenuePage.add(close);
	Ti.API.info('VenueName:'+VenueName);
	VenuePage.add(venueLabel);
	VenuePage.add(close);
	VenuePage.open();
}

theVenues.addEventListener('click', function(e)
	{showVenuePage(e.source.VenueSelection);});
	
	
})();