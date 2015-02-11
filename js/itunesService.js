var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data 
  //from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all 
  //your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then 
  //makes a 'JSONP' (use 'JSONP' instead of 'GET' in the $http method:) 
  //http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order 
  //to manipulate the data before you resolve it.

  //Code here
  var deferred = $q.defer();

	this.getSongData = function(artist) {

    	$http({
        	method: 'JSONP',
        	url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'})
    			.then(function(response) {
            //console.log(response);
    			response = response.data.results;

    			deferred.resolve(response);
    	})
    	return deferred.promise;
	}
});




// $scope.gridOptions = { 
//       data: 'songData',
//       height: '110px',
//       sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
//       columnDefs: [
//         {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
//         {field: 'Artist', displayName: 'Artist'},
//         {field: 'Collection', displayName: 'Collection'},
//         {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
//         {field: 'Type', displayName: 'Type'},
//         {field: 'CollectionPrice', displayName: 'Collection Price'},
//       ]
//   };
