// create the module and name it scotchApp
var iComissionapp = angular.module('iComissionapp', ['ngRoute', 'ngTagsInput', 'ngMaterial']);

// configure our routes
iComissionapp.config(function ($routeProvider) {
	$routeProvider

		.when('/ProjectPost', {
			templateUrl: 'ProjectPost.htm',
			controller: 'ProjectPostController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/SearchProject', {
			templateUrl: 'SearchProject.htm',
			controller: 'SearchProjectController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/ProjectDetails', {
			templateUrl: 'ProjectDetails.htm',
			controller: 'ProjectDetailsController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/Vendordashboard', {
			templateUrl: 'Vendordashboard.htm',
			controller: 'VendordashboardController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/viewvendorproject', {
			templateUrl: 'Vendorprojectview.htm',
			controller: 'VendorprojectviewController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/viewconsultantproject', {
			templateUrl: 'Consultantprojectview.htm',
			controller: 'ConsultantprojectviewController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/viewSMEproject', {
			templateUrl: 'SMEprojectview.htm',
			controller: 'SMEprojectviewController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/clientdashboard', {
			templateUrl: 'Clientdashboard.htm',
			controller: 'ClientDashboardController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/Consultantdashboard', {
			templateUrl: 'Consultantdashboard.htm',
			controller: 'ConsultantdashboardController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/SMEdashboard', {
			templateUrl: 'SMEdashboard.htm',
			controller: 'SMEdashboardController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/viewclientproject', {
			templateUrl: 'Clientprojectview.htm',
			controller: 'ClientprojectviewController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/ViewAllJobs', {
			templateUrl: 'ViewAllJobs.htm',
			controller: 'ViewAllJobController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/ViewAllProjects', {
			templateUrl: 'ViewAllProjects.htm',
			controller: 'ViewAllProjectController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/OngoingJobs', {
			templateUrl: 'OngoingJobs.htm',
			controller: 'OngoingJobController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/OngoingProjects', {
			templateUrl: 'OngoingProjects.htm',
			controller: 'OngoingProjectController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/jobpost', {
			templateUrl: 'Jobpost.htm',
			controller: 'JobpostController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		//GET LIST OF APPLY CANDIDTAE TO PARTICULAR JOB
		.when('/viewjob', {
			templateUrl: 'Jobview.htm',
			controller: 'JobviewController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/editjob', {
			templateUrl: 'EditJob.htm',
			controller: 'EditJobController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/editproject', {
			templateUrl: 'EditProject.htm',
			controller: 'EditProjectController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		//Search Candidate
		.when('/SearchCandidate', {
			templateUrl: 'SearchJobseekers.htm',
			controller: 'SearchJobseekersController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		//view Jobseekers Profile info in details
		.when('/ViewProfile', {
			templateUrl: 'ViewJobSeekersProfile.htm',
			controller: 'ViewJobSeekersProfileController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/Profile', {
			templateUrl: 'Profile.htm',
			controller: 'ProfileController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		//Search Assignment Seekers
		.when('/SearchAssignmentSeekers', {
			templateUrl: 'SearchAssignmentSeekers.htm',
			controller: 'SearchAssignmentSeekersController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		//view assignment Profile info in details
		.when('/ViewUserProfile', {
			templateUrl: 'ViewAssignmentSeekersProfile.htm',
			controller: 'ViewAssignmentSeekersProfileController'
		}) 

		/*Mailbox functionality */

		//Inbox-List of mail/messages
		.when('/Inbox', {
			templateUrl: 'Inbox.htm',
			controller: 'InboxController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		//ReadMail-Read mail/messages
		.when('/ReadMessage', {
			templateUrl: 'ReadMail.htm',
			controller: 'ReadMessageController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		
		.otherwise({

			redirectTo: $routeProvider
		});

});


/**********************************			MainController			******************************************************* */

	iComissionapp.controller('MainController', function ($scope, $http, $location) {
		$scope.LogOut = function () {
			localStorage.clear();
			window.location.href = "../Index.html";
		}

		var companylogo = document.getElementById("companylogo");
						
		if(localStorage.getItem('ProfileImage')  != null || localStorage.getItem('ProfileImage') != undefined){
			companylogo.src = "php/"+localStorage.getItem('ProfileImage');
		}
		else{
			companylogo.src = "php/JobSeeker_Profile/user.PNG";
		}

		var usertypeId = localStorage.getItem('UserTypeID');

		$http.post("PHP/Profile_Complete.php", {
			'userTypeid': localStorage.getItem('UserAccountID')
		}).then(function (response) {
			if (response.data[0].ProfileComplete == "100") {
				document.getElementById("progres_status").style.width = "100%";
			}
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		if (localStorage.getItem('UserTypeID') === null) {
			window.location.href = "../Index.html";
		} else {
			$http.post("PHP/Get_UserTypebyId.php", {
				'userTypeid': usertypeId
			}).then(function (response) {

				$scope.UserRoleName = response.data[0].UserRoleName;
				localStorage.setItem("RoleName", $scope.UserRoleName);

				if (response.data != "error") {
					if (response.data[0].UserRoleName == "Client" || response.data[0].UserRoleName == "AssignmentSeeker") {
						$location.path("clientdashboard");
					} else if (response.data[0].UserRoleName == "Consultant") {
						$location.path("Consultantdashboard");
					} else if (response.data[0].UserRoleName == "Vendor") {
						$location.path("Vendordashboard");
					} else if (response.data[0].UserRoleName == "SME") {
						$location.path("SMEdashboard");
					}
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

		//get unread message count of login user
	$scope.UserID = localStorage.getItem('UserAccountID');
	
		$http.post("PHP/Get_UnreadMessagesCount.php", {
			'UserID': $scope.UserID
		}).then(function (response) {
			console.log(response.data);
			//alert(console.data);
			$scope.MessageCount = response.data.Message_count;
			//$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
		//get unread message count of login user
	});
/**********************************			MainController			******************************************************* */

/*--------------------------------        Project Portal            -------------------------------------------------------*/

		//project Post
		iComissionapp.controller('ProjectPostController', function ($scope, $http, $location, Project_service, $timeout) 
		{
			localStorage.setItem("PostType",'Project');
			//this is for wizard ruuning purpose
			
			
			$timeout(function () {
				$('#preloader').delay(350).fadeOut('slow');
			}, 1000);
			/////////////////////////////////////////////
				$scope.getMembershipPlans = function () {
					$http.post("PHP/Get_MembershipPlans.php").then(function (response) {
						console.log(response.data);
						$scope.MembershipPlansData = response.data;		
						$("#membershipPlanDropdown").empty();
						$scope.MembershipPlansData.forEach(function(val) {	   
							$("#membershipPlanDropdown").append("<option value='" + val.MembershipPlanId + "'>" + val.MembershipPlanName + "</option>");	   
						});	
						$("#membershipPlanName").html($scope.MembershipPlansData[0].MembershipPlanName);
						$("#membershipPlanDescription").html($scope.MembershipPlansData[0].MembershipPlanDescription);
						$("#membershipPlanCost").html($scope.MembershipPlansData[0].MembershipPlanCost);
					}, function (error) {
						console.log("Fetching error : " + error);			
					});		

					$("#membershipPlanDropdown").change(function() {
						$("#membershipPlanName").html($scope.MembershipPlansData[$("#membershipPlanDropdown").val() - 1].MembershipPlanName);
						$("#membershipPlanDescription").html($scope.MembershipPlansData[$("#membershipPlanDropdown").val() - 1].MembershipPlanDescription);
						$("#membershipPlanCost").html($scope.MembershipPlansData[$("#membershipPlanDropdown").val() - 1].MembershipPlanCost);
					});
				}
			////////////////////////////////////////
			$scope.show = function () {

				$("#mapdiv").show();
				$scope.latitude = "";
				$scope.langitude = "";

				var map = new google.maps.Map(document.getElementById('map_canvas'), {
					center: { lat: 16.698246090812788, lng: 74.22351164165048 },
					zoom: 13,
					mapTypeId: 'roadmap'
				});

				google.maps.event.trigger(map, 'resize');

				// Create the search box and link it to the UI element.
				var input = document.getElementById('pac-input');

				var searchBox = new google.maps.places.SearchBox(input);
				map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

				// Bias the SearchBox results towards current map's viewport.
				map.addListener('bounds_changed', function () {
					searchBox.setBounds(map.getBounds());
				});

				var markers = [];
				// Listen for the event fired when the user selects a prediction and retrieve
				// more details for that place.
				searchBox.addListener('places_changed', function () {
					var places = searchBox.getPlaces();

					if (places.length == 0) {
						return;
					}
					// Clear out the old markers.
					markers.forEach(function (marker) {
						marker.setMap(null);
					});
					markers = [];
					// For each place, get the icon, name and location.
					var bounds = new google.maps.LatLngBounds();
					places.forEach(function (place) {
						if (!place.geometry) {
							alert("Returned place contains no geometry");
							return;
						}
						var marker = new google.maps.Marker({
							map: map,
							draggable: true,
							title: place.name,
							position: place.geometry.location
						});

						if (place.geometry.viewport) {
							// Only geocodes have viewport.
							bounds.union(place.geometry.viewport);
						} else {
							bounds.extend(place.geometry.location);
						}
						google.maps.event.addListener(marker, "dragend", function (event) {

							$scope.latitude = this.getPosition().lat();
							$scope.langitude = this.getPosition().lng();

						});
					});
					map.fitBounds(bounds);
				});
			}


			$scope.postProject = function () 
			{
				if ($('#radio19').prop('checked')) {
					$scope.officelocation = "Yes";
					$scope.latitude = "No";
					$scope.langitude = "No";
					$scope.postProjectdata();
				}
				if ($('#radio20').prop('checked')) {
					if ($scope.latitude != "" && $scope.langitude != "" && $("#joblocation").val() != "") {
						$scope.officelocation = "No";
						$scope.postProjectdata();
					}
					else {
						$.Notification.autoHideNotify('info', 'top center', 'Select location', 'Select job location on map.');
					}
				}
			}

			$scope.postProjectdata = function () {
				$('#preloader').delay(350).show();
				$scope.UserID = localStorage.getItem('UserAccountID');

				$scope.projectDateTime = new Date();
				$scope.membershipType = $("#membershipPlanDropdown").val();
				$scope.projectName;
				$scope.projectDesc;
				$scope.projectType;
				$scope.projectBudget;
				$scope.project_startDate;
				$scope.project_endDate;

				$scope.MilestoneCount = document.getElementById("hidden_Milestone").value;
				$scope.MilestoneName1 = [];
				$scope.MilestoneDate1 = [];
				$scope.MilestoneBudget1 = [];

				$scope.projectDateTime = new Date();

				//alert($scope.MilestoneCount );


				for (var i = 1; i < $scope.MilestoneCount; i++) {
					$scope.MilestoneName1[i] = document.getElementById("MilestoneName_" + i).value;
					$scope.MilestoneDate1[i] = document.getElementsByName("MilestoneDate_" + i).value;
					$scope.MilestoneBudget1[i] = document.getElementById("MilestoneBudget_" + i).value;
				}
				var rex = /\S/;

				$scope.MilestoneName = [];
				$scope.MilestoneDate = [];
				$scope.MilestoneBudget = [];
				$scope.MilestoneName = $scope.MilestoneName1.filter(rex.test.bind(rex));
				$scope.MilestoneDate = $scope.MilestoneDate1.filter(rex.test.bind(rex));
				$scope.MilestoneBudget = $scope.MilestoneBudget1.filter(rex.test.bind(rex));

				console.log($scope.MilestoneName);

				console.log($scope.MilestoneDate);
				console.log($scope.MilestoneBudget);

				var FileData = [];
				var fileext = [];
				var count = 0;
				var files = document.getElementById("file_media").files.length;


				///alert(files);
				if (files == 0) {
					FileData[0] = 'No';

					insert_Project_data();

				} else {
					getFile();
				}

				function getFile() {
					var filename = document.getElementById("file_media").files[count].name;
					//alert(filename);
					fileext[count] = filename.substr((filename.lastIndexOf('.') + 1));

					//alert(fileext[count]);
					var file = document.getElementById("file_media").files[count];
					var reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = function () {
						var filedata = reader.result;
						FileData[count] = filedata.substr(filedata.indexOf(',') + 1);
						//alert(	file[count] );
						count++;
						if (files > count) {
							getFile();
						} else {
							insert_Project_data();
						}

					};
					reader.onerror = function (error) {
						alert('Error: ', error);
					};

				} //end getfile

				function insert_Project_data() {

					$http.post("PHP/Save_ProjectPost.php", {
						'JobPostBy': $scope.UserID,
						'ProjectName': $scope.projectName,
						'ProjectDesc': $('#projdesc').summernote('code'),
						'ProjectBudget': $scope.projectBudget,
						'ProjectType': $scope.projectType,
						'Project_StartDate': $scope.project_startDate,
						'Project_EndDate': $scope.project_endDate,
						'MilestoneName': $scope.MilestoneName,
						'MilestoneDate': $scope.MilestoneDate,
						'MilestoneBudget': $scope.MilestoneBudget,
						'DocumentFile': FileData,
						'DocumentFileExt': fileext,
						'projectDateTime': $scope.projectDateTime,
						'projectLocation': $("#projectLocation").val(),//$scope.projectLocation,
						'lat': $scope.latitude,
						'lng': $scope.langitude,
						'officelocation': $scope.officelocation,
						'MembershipType': +$scope.membershipType,
					}).then(function (response) {

						console.log(response.data);
						$('#preloader').delay(350).fadeOut('slow');
						if (response.data.data == true) {
							localStorage.getItem("Projectposted","Yes");
							$location.path("/clientdashboard");
						}
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					})
				}

			}

		});

		//serach Project getting all Project
		iComissionapp.controller('SearchProjectController', function ($scope, $http, $location, Project_service) {
			
			
			

			//get all project
			$scope.getAllProject = function () {
				
				$http.post("PHP/Get_ProjectLocation.php").then(function (response) {
					$scope.ProjectTypeList = response.data.ProjectType;
					$scope.ProjectLocationList = response.data.ProjectLocation;

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});

				$http.post("PHP/Get_ProjectList.php", {
					'ProjectPostedBy': 'null',
					'ShowData': 'All',
					'UserId': localStorage.getItem('UserAccountID')
				}).then(function (response) {
					console.log(response.data);
					if (response.data != "error") {
						$scope.ProjectList = response.data;
					}

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});

				var allStates = "";
				$http.get('PHP/Get_Assignments.php', {
					cache: true
				}).then(function (response) {
					console.log(response.data);
					$scope.items1 = response.data;
					
					var allStatescd = response.data;

				});

				$('#preloader').delay(350).fadeOut('slow');
			}

			$scope.getProjectID = function (id) {
				$('#preloader').delay(350).show();
				localStorage.setItem('ProjectID', id);
				$location.path('ProjectDetails');
			}

			//call when click on search_Project 
			$scope.search_Project = function () {

				if (document.getElementById('Keywords').value != "" && $.trim($("#Salary").val()) != "Bidding Amount" && ($("#ProjectType").val() != "" || $.trim($("#ProjectType").val()) != "Assignment Type") && ($("#Serach_joblocation").val() != "")) {
					$('#preloader').delay(350).show();
					var budget = $.trim($("#Salary").val());
					var MinBudget = 0,
						MaxBudget = 0;
					if (budget == "Less than $500") {
						MinBudget = 0;
						MaxBudget = 500;
					} else if (budget == "$501 to $5000") {
						MinBudget = 501;
						MaxBudget = 5000;
					} else if (budget == "$5001-$10000") {
						MinBudget = 5001;
						MaxBudget = 10000;
					} else if (budget == "Above") {
						MinBudget = 10001;
						MaxBudget = 100000;
					}
					$http.post("PHP/Get_SearchProject.php", {
						"ProjectName": document.getElementById('Keywords').value,
						"ProjectLocation": $.trim($("#Serach_joblocation").val()),
						"ProjectType": $.trim($("#ProjectType").val()),
						"MinBudget": MinBudget,
						"MaxBudget": MaxBudget,
					}).then(function (response) {

						console.log(response.data);
						if (response.data != "error") {
							$scope.ProjectList = response.data;
						}
						else {
							$scope.ProjectList = "";
						}
						$('#preloader').delay(350).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}
				else {
					//$(".card-box").effect("shake", { direction: "up", times: 2, distance: 5 }, 1000);
				}
			}

		});

		//get particular Project information
		iComissionapp.controller('ProjectDetailsController', function ($scope, $http, $location, Project_service) {
			
			
			

			$scope.getprojectdetails = function () {
				$scope.ProjectId = localStorage.getItem('ProjectID');
				
				$http.post("PHP/Get_ProjectDetails.php", {
					'ProjectID': $scope.ProjectId,

				}).then(function (response) {
					console.log(response.data);
					$scope.ProjectDetails = response.data;

					localStorage.setItem("ProjectName", response.data[0].ProjectName);

					var htmll = response.data[0].ProjectDesc;
					$("#assigndesc").append(htmll);
					
					var lat = parseFloat(response.data[0].Lat);
					var lng = parseFloat(response.data[0].Lng);
					
					var logo = response.data[0].CompanyLogo;
					var cname = response.data[0].CompanyName;
					var website = response.data[0].CompanyURL;
					var map = new google.maps.Map(document.getElementById('map'), {
						center: { lat: lat, lng: lng },
						zoom: 13,
						mapTypeId: 'roadmap'
					});
			
					var markers = [];
					var marker = new google.maps.Marker({
						map: map,
						animation: google.maps.Animation.DROP,
						position: { lat: lat, lng: lng },
						icon: 'images/pin.png',
					});

					var div = document.createElement('DIV');
					
										div.innerHTML = '<div>' +
											'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
											'<div>' +
											'<a href>' +
											'<img src="iComissionAdmin/php/' + logo + '" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
											'</a>' +
											'</div>' +
											'</div>' +
					
											'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 20px;">' +
											'<h5 style="margin: 5px 0 !important;">' +
											'<a title="">' + cname + '</a>' +
											'</h5>' +
											'<small>' +
											'<span>Website :' +
											'<a href>' + website + '</a>' +
											'</span>' +
											'</small>'+
											'</div>' +
											'</div>';
			
					var infoWindow = new google.maps.InfoWindow({
						content: div
					});
					
					//infowindow.setContent(div);
					infoWindow.open(map, marker);
					google.maps.event.addListener(marker, 'click', function () {
						infoWindow.open(map, marker);
					});

					$http.post("PHP/Get_RelevantProjectList.php", {
						'Keyword': localStorage.getItem("ProjectName"),
						// 'UserId': localStorage.getItem('EndUserAccountID'),
					}).then(function (response) {
						console.log(response.data);
						if (response.data != "error") {
							$scope.All_ProjectList = response.data;
						}
						else {
							$scope.All_ProjectList = "";
							$("#SidePnl").remove();
						}
						$('.cssload-container').delay(300).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});

					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}

			$scope.openmodal = function (ProjectId) {
				$scope.biddamount = "";
				$scope.biddesr = "";
				document.getElementById("errormsgg").innerHTML = "";
				localStorage.setItem("ApplyProjectId",ProjectId);
				$('#ProjectApply').modal('show');
			}

			//call when click on applyproject button
			$scope.applytoproject = function (isValid) {
				if (isValid) {
					var id = localStorage.getItem("ApplyProjectId");
					if (localStorage.getItem('UserAccountID') != null) {
						if (localStorage.getItem("ProfileComplete") == "No") {
							// $.Notification.autoHideNotify('info', 'top center', 'Complete your profile!','Complete profile to get extra benifits on ProcStart with jobs and projects.');
						localStorage.removeItem("ProfileComplete");
						$location.path("Profile");
						$(".modal-backdrop").remove();
						}
						else {
						$('.cssload-container').delay(300).show();
						$scope.ProjectApplytDateTime = new Date();
						$scope.ProjectSeekerID = localStorage.getItem('UserAccountID');
						
						$http.post("PHP/Save_ProjectSeeker_ApplytoJob.php", {
							'ProjectID': id,
							'ProjectSeekerID': $scope.ProjectSeekerID,
							'ApplyDate': $scope.ProjectApplytDateTime,
							'Biddamount': $scope.biddamount,
							'Biddesr': $scope.biddesr,
						}).then(function (response) {
							console.log(response.data);
							if (response.data.data == false) {
								swal({
									title: "Already Applied!",
									text: "You have already applied for this Assignment post",
									type: "info"
								});
							}
							else {
								swal({
									title: "Applied Successfully!",
									text: "You have successfully applied for this Assignment post",
									type: "success"
								});
							}
							$('#ProjectApply').modal('hide');
							$('.cssload-container').delay(300).fadeOut('slow');
						}, function (error) {
							console.log("Sorry! Data Couldn't be inserted!");
							console.log(error);
						});
					}
					}
					else {
						$location.path('Login');
					}
				}
				else {
					document.getElementById("errormsgg").innerHTML = "Please enter all data";
				}
			}
		});

		iComissionapp.controller('EditProjectController', function ($scope, $http, $location) 
		{
			
				
				
				
			
				//Get_SkillSet
				$scope.loadSkillSet = function ($query) {
			
					return $http.get('PHP/Get_SkillSet.php', {
						cache: true
					}).then(function (response) {
						//console.log(response.data);
						var countries = response.data;
			
						return countries.filter(function (country) {
							return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
						});
					});
				};
			
				//call when click on jobdescription
				$scope.viewdescription = function () {
			
					$('#preloader').delay(350).show();
					$http.post("PHP/Get_JobDetails.php", {
						'JobId': localStorage.getItem("editjobid"),
			
					}).then(function (response) {
						console.log(response.data);
						$scope.jobtitle = response.data[0].JobTitle;
						$("#jobdesc").summernote("code", response.data[0].JobDescription);
						$scope.vacancies = response.data[0].NoOfVacancy;
						$scope.skillSetName = response.data[0].Skillset;
						$("#minexp option[value='" + response.data[0].MinExp + "']").attr('selected', 'selected');
						$("#maxexp option[value='" + response.data[0].MaxExp + "']").attr('selected', 'selected');
						$("#minsalary option[value='" + response.data[0].MinSal + "']").attr('selected', 'selected');
						$("#maxsalary option[value='" + response.data[0].MaxSal + "']").attr('selected', 'selected');
						// $scope.skillSet = response.data[0].Skillset;
						$("#joblocation").val(response.data[0].JobLocation);
						$("#industry option[value='" + response.data[0].JobIndustry + "']").attr('selected', 'selected');
						$("#functionalarea option[value='" + response.data[0].JobFunctionalArea + "']").attr('selected', 'selected');
						$("#upspec option[value='" + response.data[0].UGQual + "']").attr('selected', 'selected');
						$("#pgspec option[value='" + response.data[0].PGQual + "']").attr('selected', 'selected');
			
						$scope.companynm = response.data[0].CompanyName;
						$scope.aboutcompany = response.data[0].AboutCompany;
						$scope.companyweb = response.data[0].CompanyURL;
						$scope.contactper = response.data[0].ContactPersonName;
						$scope.address = response.data[0].CompanyAddress;
						$scope.contactnum = response.data[0].ContactPersonPhNo;
						// $scope.jobPostDateTime = response.data[0].JobTitle;
						// $("#edit_job").show();
						//$scope.jobdetails = response.data;
			
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
					$('#preloader').delay(350).fadeOut('slow');
				}
			
		});

		//call when click on Search Candidate
		iComissionapp.controller('SearchAssignmentSeekersController', function ($scope, $http, $location) 
		{

			/*document.getElementById("topbar-right").style.display = "block";
			document.getElementById("topbar-right1").style.display = "none";
			document.getElementById("left side-menu").style.display = "block";*/

			$scope.GetAssignmentSeekerInfo = function () 
			{

				$('#preloader').delay(350).show();
				$http.post("PHP/Get_AssignmentSeekerInfo.php", {
					'AssignmetSeekerID': "null"
				}).then(function (response) {
					console.log(response.data);
					if(response.data.data==false)
					{
						document.getElementById("Nodata_div").style.display="block";
					}
					else
					{
						$scope.assignmentSeekerInfo = response.data;
					}
					//alert(console.data);
					
					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}

			//call when click on view_AssignmentSeekerprofile
			$scope.view_assignmentseekerprofile = function (id) 
			{
				localStorage.setItem('AssignmentSeekerID', id);
				$location.path("/ViewUserProfile");
			}

			$scope.skillSet = [];

			//Get_SkillSet
			$scope.loadSkillSet = function ($query) {

				return $http.get('PHP/Get_SkillSet.php', {
					cache: true
				}).then(function (response) {
					//console.log(response.data);
					var countries = response.data;

					return countries.filter(function (country) {
						return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
					});
				});
			};

			//call when click on serch_jobseeker
			$scope.serch_jobseeker = function () 
			{
				// alert($.trim($scope.skillSetName));
				/*if ($scope.skillSet.length > 0 && document.getElementById("Experience").value != "Experience in Year") {

					$('#preloader').delay(350).show();
					$scope.skillSetName = [];

					for (var i = 0; i < $scope.skillSet.length; i++) {
						$scope.skillSetName[i] = $scope.skillSet[i].SkillSetName;
					}

					if ($('input[name="radioB2"]:checked').val() == undefined) {
						$scope.JobSeekerType = 'undefined';
					} else {
						$scope.JobSeekerType = $('input[name="radioB2"]:checked').val();
					}

					$scope.Experience = document.getElementById("Experience").value;
					console.log($scope.skillSetName.toString()); //null
					console.log($scope.JobSeekerType); //undefined
					console.log($scope.Experience); //Experience in Year

					$http.post("PHP/Get_SearchJobSeeker.php", {
						'Keywords': $.trim($scope.skillSetName),
						'Experience': document.getElementById("Experience").value,
						'JobSeekerType': $scope.JobSeekerType
					}).then(function (response) {
						console.log(response.data);

						if (response.data != "error") {
							$scope.JobSeekerInfo = response.data;
						}
						else {
							$scope.JobSeekerInfo = "";
						}
						$('#preloader').delay(350).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}
				else {
					//alert();
				}*/
			}
		});

		//get assignment SeekersProfile  in details
		iComissionapp.controller('ViewAssignmentSeekersProfileController', function ($scope, $http) 
		{

			/*	document.getElementById("topbar-right").style.display = "block";
				document.getElementById("topbar-right1").style.display = "none";
				document.getElementById("left side-menu").style.display = "block";*/
		
				//$('#preloader').delay(350).show();
				var id = localStorage.getItem('AssignmentSeekerID');
				//alert(id);
				//get View  assignment Seekers Profile 
		
				$http.post("PHP/Get_AssignmentSeekerInfo.php", {
					'AssignmetSeekerID': id
				}).then(function (response) {
					console.log(response.data);
		
					$scope.JobSeekersProfile = response.data;
					//localStorage.removeItem("AssignmentSeekerID");
					/*$http.post("PHP/Get_JobSeekers_AppliedJobList.php", {
						'JobSeekerID': id
					}).then(function (response) {
						console.log(response.data);
						if (response.data.data != false) {
							$scope.JobSeekers_AppliedJobList = response.data;
						}
		
						$('#preloader').delay(350).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});*/
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
		
				//call when click on viewProfile 
				$scope.viewProfile = function () 
				{
					$("#AppliedJob_div").slideUp('fast');
					document.getElementById('maindiv').style.display = "block";
				}
				//call when click on AppliedJob 
				$scope.view_AppliedJob = function () 
				{
					$("#maindiv").slideUp('fast');
					document.getElementById('AppliedJob_div').style.display = "block";
				}
		});

		iComissionapp.controller('ViewAllProjectController', function ($scope, $compile, $http, $location) 
		{
			
					$scope.GetProjectData = function () {
						
						$scope.UserRole = localStorage.getItem('RoleName');
						$scope.UserID = localStorage.getItem('UserAccountID');
			
						if ($scope.UserRole == "Client" || $scope.UserRole == "Vendor" || $scope.UserRole == "AssignmentSeeker") {
							var table = $('#Project_Datatable');
							$http.post("PHP/Get_ProjectList.php", {
								'ProjectPostedBy': $scope.UserID,
								'ShowData': 'All'
			
							}).then(function (response) {
								//console.log(response.data);
								if (response.data != "error") {
									$scope.AllData = response.data;
									var data = $scope.AllData;
									var datatablevar = table.DataTable({
										data: data,
										dom: 'lfrtip',
										buttons: [{
											extend: 'excel',
											text: '<i class="fa fa-file-excel-o text-default"></i> Excel',
											exportOptions: {
												columns: [1, 2, 3]
											}
										},
										{
											extend: 'csv',
											text: '<i class="fa fa-files-o text-default"></i> CSV',
											exportOptions: {
												columns: [1, 2, 3]
											}
										},
										{
											extend: 'pdf',
											text: '<i class="fa fa-file-pdf-o text-default"></i> PDF',
											exportOptions: {
												columns: [1, 2, 3]
											},
											title: 'Assignment List',
										},
										{
											extend: 'print',
											text: '<i class="fa fa-print text-default"></i> Print',
											exportOptions: {
												columns: [1, 2, 3]
											},
											title: 'Assignment List',
										}
										],
										columns: [
			
											{
												"data": "ProjectName",
												"render": function (data, type, row) {
													return '<img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">';
												}
											},
											{
												"data": "ProjectName"
											},
											{
												"data": "ProjectBudget"
											},
											{
												"data": "ProjectType"
											},
											{
												"data": "ProjectPostID",
												"render": function (data, type, row) {
													var NumberOFCandidate_Applied = row.NumberOFCandidate_Applied;
													if (NumberOFCandidate_Applied > 0) {
														return '<a href class="table-action-btn btn-info" title="Edit Job Details" ng-click="viewdescription(' + data + ')"><i class="ion-edit"></i></a>&nbsp;&nbsp;<a href="#viewclientproject" class="table-action-btn btn-info" title="View Details" ng-click="viewproject(' + data + ')"><i class="ion-eye"></i></a>';
													}
													else {
														return '<a href class="table-action-btn btn-info" title="Edit Job Details" ng-click="viewdescription(' + data + ')"><i class="ion-edit"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="View Details" ng-click="info()"><i class="ion-eye"></i></a>'
													}
												}
											}
										]
									});
			
									$compile(table)($scope);
								}
								else {
									$('#Project_Datatable').DataTable();
								}
								$('#preloader').delay(350).fadeOut('slow');
							}, function (error) {
								console.log("Sorry! Data Couldn't be inserted!");
								console.log(error);
							});
						}
					}
			
					//call when click on jobdescription
					$scope.viewdescription = function (JobId) {
						localStorage.setItem("editprojectid", JobId);
			
						// $location.path("editjob");	
					}
			
					$scope.info = function () {
						$.Notification.autoHideNotify('info', 'top center', 'No records found !', 'No assignment seeker have applied for this assignment.');
					}
			
					$scope.viewproject = function () {
						$('#preloader').delay(350).show();
						$location.path('viewvendorproject');
					}
		});
			
		iComissionapp.controller('OngoingProjectController', function ($scope, $compile, $http, $location) 
		{
			
					$scope.GetProjectData = function () {
						
						$scope.UserRole = localStorage.getItem('RoleName');
						$scope.UserID = localStorage.getItem('UserAccountID');
			
						if ($scope.UserRole == "Client" || $scope.UserRole == "Vendor" || $scope.UserRole == "AssignmentSeeker") {
							var table = $('#Project_Datatable');
							$http.post("PHP/Get_ProjectList.php", {
								'ProjectPostedBy': $scope.UserID,
								'ShowData': 'All'
			
							}).then(function (response) {
								console.log(response.data);
								if (response.data != "error") {
									$scope.AllData = response.data;
									var data = $scope.AllData;
									var datatablevar = table.DataTable({
										data: data,
										dom: 'lBfrtip',
										buttons: [{
											extend: 'excel',
											text: '<i class="fa fa-file-excel-o text-default"></i> Excel',
											exportOptions: {
												columns: [1, 2, 3]
											}
										},
										{
											extend: 'csv',
											text: '<i class="fa fa-files-o text-default"></i> CSV',
											exportOptions: {
												columns: [1, 2, 3]
											}
										},
										{
											extend: 'pdf',
											text: '<i class="fa fa-file-pdf-o text-default"></i> PDF',
											exportOptions: {
												columns: [1, 2, 3]
											},
											title: 'Assignment List',
										},
										{
											extend: 'print',
											text: '<i class="fa fa-print text-default"></i> Print',
											exportOptions: {
												columns: [1, 2, 3]
											},
											title: 'Assignment List',
										}
										],
										columns: [
			
											// {
											// 	"data": "ProjectName",
											// 	"render": function (data, type, row) {
											// 		return '<img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">';
											// 	}
											// },
											{
												"data": "ProjectName"
											},
											{
												"data": "ProjectDateTime",
												"render": function (data) {
													var date = data.split(" ");
													return date[0];
												}
			
											},
											{
												"data": "NumberOFCandidate_Applied"
											},
											{
												"data": "ProjectPostID",
												"render": function (data, type, row) {
													var NumberOFCandidate_Applied = row.NumberOFCandidate_Applied;
													if (NumberOFCandidate_Applied > 0) {
														return '<a href class="table-action-btn btn-info" title="View Details" ng-click="viewproject(' + data + ')"><i class="ion-eye"></i></a>';
													}
													else {
														return '<a href class="table-action-btn btn-info" title="View Details" ng-click="info()"><i class="ion-eye"></i></a>'
													}
												}
											}
										]
									});
			
									$compile(table)($scope);
								}
								else {
									$('#Project_Datatable').DataTable();
								}
								$('#preloader').delay(350).fadeOut('slow');
							}, function (error) {
								console.log("Sorry! Data Couldn't be inserted!");
								console.log(error);
							});
						}
					}
			
					$scope.info = function () {
						$.Notification.autoHideNotify('info', 'top center', 'No records found !', 'No assignment seeker have applied for this assignment.');
					}
			
					$scope.viewproject = function (ProjectId) {
						localStorage.setItem('ProjectID', ProjectId);
						$('#preloader').delay(350).show();
						$location.path('viewclientproject');
					}
		});


/*--------------------------------        Project Portal            -------------------------------------------------------*/

/**********************************          Dashboard               **************************************************************** */
	/*************************************     Vendordashboard Controller        ************************************** */

		iComissionapp.controller('VendordashboardController', function ($scope, $http, $location, Project_service, Job_service) {
			
			
			

			$scope.UserID = localStorage.getItem('UserAccountID');
			$scope.NumberOFCandidate = 0;

			//get all job list posted by user
			$scope.getAllJobList = function () {
				
				Job_service.getJobList($scope.UserID).then(function (response) {
					console.log(response.data);

					if (response.data == "error") {
						$scope.TotalJob = 0;
					} else {
						$scope.TotalJob = response.data.length;
					}
					if (response.data.data == false) {
						console.log("error");

					} else {
						if (response.data != "error") {
							for (var i = 0; i < response.data.length; i++) {
								$scope.NumberOfJob = response.data[i];

								$scope.NoOfCandidate_Applied = $scope.NumberOfJob.NumberOFCandidate_Applied;

								//var gvalue = $scope.NumberOfProducts.NumberOfCampaign ;
								//console.log($scope.NumberOfProducts.NumberOfCampaign);
								$scope.NumberOFCandidate = parseInt($scope.NumberOFCandidate) + parseInt($scope.NumberOfJob.NumberOFCandidate_Applied);

							}
						} else {
							$scope.NumberOFCandidate = 0;
						}
					}
					$scope.JobList = response.data;
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}

			//call when click on viewproject
			$scope.viewproject = function () {
				$('#preloader').delay(350).show();
				$location.path('viewvendorproject');
			}

			//call when click on view job details
			$scope.viewjob = function (id, title) {

				$scope.JobTitle = title

				$scope.JobId = id;

				if ($scope.JobTitle != undefined) {

					localStorage.setItem('JobId', $scope.JobId);
					localStorage.setItem('JobTitle', $scope.JobTitle);

					//ViewJob_service.JobId = 'none';
					$location.path('viewjob');
				} else {

					localStorage.setItem('JobId', $scope.JobId);


					//ViewJob_service.JobId = 'none';
					$location.path('JobDetails');
				}

			}

			$scope.getProjectID = function (id) {
				$('#preloader').delay(350).show();
				localStorage.setItem('ProjectID', id);
				$location.path('viewvendorproject');
			}

			$scope.ProjectList = [];

			//get all Project posted by user
			$scope.getProjectList = function () {

				Project_service.getProjectList($scope.UserID).then(function (response) {
					console.log(response.data);
					$scope.ProjectList = response.data;
					$('#preloader').delay(350).fadeOut('slow');
					if (response.data == "error") {
						$scope.TotalProject = 0;
					} else {
						$scope.TotalProject = response.data.length;
					}
				});
			}
		});

		iComissionapp.controller('VendorprojectviewController', function ($scope, $http) {
			
			
			

			$scope.getprojectdetails = function () {
				$scope.ProjectId = localStorage.getItem('ProjectID');
				
				$http.post("PHP/Get_ProjectDetails.php", {
					'ProjectID': $scope.ProjectId,

				}).then(function (response) {
					console.log(response.data);
					$scope.ProjectDetails = response.data;
					$('#preloader').delay(350).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		});

	/*************************************    Vendordashboard  Controller        ************************************** */


	/**************************************** ConsultantdashboardController ****************************************/
		iComissionapp.controller('ConsultantdashboardController', function ($scope, $http, $location, Project_service, Job_service) {
			
			
			

			$scope.UserID = localStorage.getItem('UserAccountID');
			$scope.NumberOFCandidate = 0;

			//get all job list posted by user
			$scope.getAllJobList = function () {
				Job_service.getJobList($scope.UserID).then(function (response) {
					console.log(response.data);

					if (response.data == "error") {
						$scope.TotalJob = 0;
					} else {
						$scope.TotalJob = response.data.length;
					}
					if (response.data.data == false) {
						console.log("error");

					} else {
						if (response.data != "error") {
							for (var i = 0; i < response.data.length; i++) {
								$scope.NumberOfJob = response.data[i];

								$scope.NoOfCandidate_Applied = $scope.NumberOfJob.NumberOFCandidate_Applied;

								//var gvalue = $scope.NumberOfProducts.NumberOfCampaign ;
								//console.log($scope.NumberOfProducts.NumberOfCampaign);
								$scope.NumberOFCandidate = parseInt($scope.NumberOFCandidate) + parseInt($scope.NumberOfJob.NumberOFCandidate_Applied);

							}
						} else {
							$scope.NumberOFCandidate = 0;
						}

					}
					$scope.JobList = response.data;
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});

			}

			//call when click on viewproject
			$scope.viewproject = function () {
				$('#preloader').delay(350).show();
				$location.path('viewconsultantproject');
			}

			//call when click on view job details
			$scope.viewjob = function (id, title) {

				$scope.JobTitle = title

				$scope.JobId = id;

				if ($scope.JobTitle != undefined) {

					localStorage.setItem('JobId', $scope.JobId);
					localStorage.setItem('JobTitle', $scope.JobTitle);

					//ViewJob_service.JobId = 'none';
					$location.path('viewjob');
				} else {

					localStorage.setItem('JobId', $scope.JobId);


					//ViewJob_service.JobId = 'none';
					$location.path('JobDetails');
				}

			}

			$scope.getProjectID = function (id) {
				$('#preloader').delay(350).show();
				localStorage.setItem('ProjectID', id);
				$location.path('viewconsultantproject');
			}

			$scope.ProjectList = [];

			//get all Project posted by user
			$scope.getProjectList = function () {

				Project_service.getProjectList($scope.UserID).then(function (response) {
					console.log(response.data);
					$scope.ProjectList = response.data;
					$('#preloader').delay(350).fadeOut('slow');
					if (response.data == "error") {
						$scope.TotalProject = 0;
					} else {
						$scope.TotalProject = response.data.length;
					}
				});
			}
		});

		iComissionapp.controller('ConsultantprojectviewController', function ($scope, $http) {
			
			
			

			$scope.getprojectdetails = function () {
				$scope.ProjectId = localStorage.getItem('ProjectID');
				$('#preloader').delay(350).show();
				$http.post("PHP/Get_ProjectDetails.php", {
					'ProjectID': $scope.ProjectId,

				}).then(function (response) {
					console.log(response.data);
					$scope.ProjectDetails = response.data;
					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}

		});
	/**************************************** ConsultantdashboardController ****************************************/

	/**************************************** SMEdashboardController ****************************************/
		iComissionapp.controller('SMEdashboardController', function ($scope, $http, $location, Project_service, Job_service) 
		{
			
			
			

			$scope.UserID = localStorage.getItem('UserAccountID');
			$scope.NumberOFCandidate = 0;

			//get all job list posted by user
			$scope.getAllJobList = function () {
				Job_service.getJobList($scope.UserID).then(function (response) {
					console.log(response.data);

					if (response.data == "error") {
						$scope.TotalJob = 0;
					} else {
						$scope.TotalJob = response.data.length;
					}
					if (response.data.data == false) {
						console.log("error");

					} else {
						if (response.data != "error") {
							for (var i = 0; i < response.data.length; i++) {
								$scope.NumberOfJob = response.data[i];

								$scope.NoOfCandidate_Applied = $scope.NumberOfJob.NumberOFCandidate_Applied;

								//var gvalue = $scope.NumberOfProducts.NumberOfCampaign ;
								//console.log($scope.NumberOfProducts.NumberOfCampaign);
								$scope.NumberOFCandidate = parseInt($scope.NumberOFCandidate) + parseInt($scope.NumberOfJob.NumberOFCandidate_Applied);

							}
						} else {
							$scope.NumberOFCandidate = 0;
						}

					}
					$scope.JobList = response.data;
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});

			}

			//call when click on viewproject
			$scope.viewproject = function () {
				$('#preloader').delay(350).show();
				$location.path('viewSMEproject');
			}

			//call when click on view job details
			$scope.viewjob = function (id, title) {

				$scope.JobTitle = title

				$scope.JobId = id;

				if ($scope.JobTitle != undefined) {

					localStorage.setItem('JobId', $scope.JobId);
					localStorage.setItem('JobTitle', $scope.JobTitle);

					//ViewJob_service.JobId = 'none';
					$location.path('viewjob');
				} else {

					localStorage.setItem('JobId', $scope.JobId);


					//ViewJob_service.JobId = 'none';
					$location.path('JobDetails');
				}

			}

			$scope.getProjectID = function (id) {
				$('#preloader').delay(350).show();
				localStorage.setItem('ProjectID', id);
				$location.path('viewSMEproject');
			}

			$scope.ProjectList = [];

			//get all Project posted by user
			$scope.getProjectList = function () {

				Project_service.getProjectList($scope.UserID).then(function (response) {
					console.log(response.data);
					$scope.ProjectList = response.data;
					$('#preloader').delay(350).fadeOut('slow');
					if (response.data == "error") {
						$scope.TotalProject = 0;
					} else {
						$scope.TotalProject = response.data.length;
					}
				});
			}
		});

		iComissionapp.controller('SMEprojectviewController', function ($scope, $http) {
			
			
			

			$scope.getprojectdetails = function () {
				$('#preloader').delay(350).show();
				$scope.ProjectId = localStorage.getItem('ProjectID');

				$http.post("PHP/Get_ProjectDetails.php", {
					'ProjectID': $scope.ProjectId,

				}).then(function (response) {
					console.log(response.data);
					$scope.ProjectDetails = response.data;
					$('#preloader').delay(350).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		});
	/**************************************** SMEdashboardController ****************************************/

	/***********************************        ClientDashboard  Controller    **************************************** */

		iComissionapp.controller('ClientDashboardController', function ($scope, $http, $location, Project_service, Job_service) {
			
			
			

			$scope.UserID = localStorage.getItem('UserAccountID');
			$scope.NumberOFCandidate = 0;
			$scope.TotalBidder = 0;
			$scope.ProjectList = [];
			//get all job list posted by user
			$scope.getAllJobList = function () {
				
				if (localStorage.getItem("Jobposted") == "Yes") {
					swal({
						title: "Job posted successfully!",
						text: "After approval it will be listed on portal in 48 hours",
						type: "success"
					});
					localStorage.removeItem("Jobposted");
				}

				if (localStorage.getItem("Projectposted") == "Yes") {
					swal({
						title: "Assignment posted successfully!",
						text: "After approval it will be listed on portal in 48 hours",
						type: "success"
					});
					localStorage.removeItem("Projectposted");
				}

				if (localStorage.getItem("ProfileComplete") == "No") {
					$.Notification.autoHideNotify('info', 'top center', 'Complete your profile!', 'Complete profile to get extra benifits on ProcStart with jobs and projects.');
					localStorage.removeItem("ProfileComplete");
					$location.path("Profile");
				}
				if (localStorage.getItem("Completed") == "Yes") {
					$.Notification.autoHideNotify('success', 'top center', 'Profile Completed!', 'You have completed your profile. lets start with ProcStart.');
					localStorage.removeItem("Completed");
				}
				Job_service.getJobList($scope.UserID).then(function (response) {
					console.log(response.data);

					if (response.data == "error") 
					{
						$scope.TotalJob = 0;
					} 
					else 
					{
						$scope.TotalJob = response.data.length;
					}
					if (response.data.data == false) 
					{
						console.log("error");

					} 
					else 
					{
						if (response.data != "error") 
						{
							for (var i = 0; i < response.data.length; i++) {
								$scope.NumberOfJob = response.data[i];

								$scope.NoOfCandidate_Applied = $scope.NumberOfJob.NumberOFCandidate_Applied;


								$scope.NumberOFCandidate = parseInt($scope.NumberOFCandidate) + parseInt($scope.NumberOfJob.NumberOFCandidate_Applied);
							}
						} 
						else 
						{
							$scope.NumberOFCandidate = 0;
						}

						$scope.JobList = response.data;
					}

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}

			$scope.info = function () 
			{
				$.Notification.autoHideNotify('info', 'top center', 'No records found !', 'No assignment seeker have applied for this assignment.');
			}

			$scope.info_job = function () 
			{
				$.Notification.autoHideNotify('info', 'top center', 'No records found !', 'No  Jobseeker have applied for this Job.');
			}

			//call when click on viewproject
			$scope.viewproject = function () {
				$('#preloader').delay(350).show();
				$location.path('viewclientproject');
			}

			//call when click on viewjob
			$scope.viewjob = function (id, title) {

				$scope.JobTitle = title;
				$scope.JobId = id;

				localStorage.setItem('JobId', $scope.JobId);
				localStorage.setItem('JobTitle', $scope.JobTitle);
				$location.path('viewjob');
			}

			$scope.getProjectID = function (id) {
				$('#preloader').delay(350).show();
				localStorage.setItem('ProjectID', id);
				$location.path('viewclientproject');
			}

			//get all Project posted by user
			$scope.getProjectList = function () {
				Project_service.getProjectList($scope.UserID).then(function (response) {
					console.log(response.data);
					$scope.ProjectList = response.data;
					$('#preloader').delay(350).fadeOut('slow');
					if (response.data == "error") 
					{
						$scope.TotalProject = 0;
						$scope.TotalBidder = 0;
					} else {
						$scope.TotalProject = response.data.length;
						for(var i=0;i<response.data.length;i++)
						{
							$scope.TotalBidder = $scope.TotalBidder + parseInt(response.data[i].NumberOFCandidate_Applied);
						}
					}
				});
			}
		});

		iComissionapp.controller('ClientprojectviewController', function ($scope, $http) {

			
			
			

			$scope.ProjectId = localStorage.getItem('ProjectID');

			// $http.post("PHP/Get_ProjectDetails.php", {
			// 	'ProjectID': $scope.ProjectId,

			// }).then(function (response) {
			// 	console.log(response.data);
			// 	$scope.ProjectDetails = response.data;

			// 	/*for(var i=0;i<response.data.length;i++)
			// 	{
			// 		for(var j=0;j<=i;j++)
			// 		{
			// 			$scope.DocumentFile = response.data[j];

			// 		}
			// 	}
			// 	console.log($scope.DocumentFile);*/

			// }, function (error) {
			// 	console.log("Sorry! Data Couldn't be inserted!");
			// 	console.log(error);
			// });

			$scope.getprojectdetails = function () {
				
				//$scope.ProjectId = localStorage.getItem('ProjectID');

				$http.post("PHP/Get_ProjectDetails.php", {
					'ProjectID': $scope.ProjectId,

				}).then(function (response) {
					console.log(response.data);
					$scope.ProjectDetails = response.data;
					document.getElementById("prjnm").innerHTML = response.data[0].ProjectName;
					document.getElementById("projdt").innerHTML = response.data[0].ProjectDateTime;
					document.getElementById("description").innerHTML = response.data[0].ProjectDesc;

					$('#preloader').delay(350).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}

			$scope.applyCandidate = function () {

				// document.getElementById("maindiv").style.display = "block";
				// document.getElementById("jobdescription").style.display = "none";
				// document.getElementById("edit_job").style.display = "none";
				$('#preloader').delay(350).show();
				$http.post("PHP/Get_ProjectApplyCandiateList.php", {
					'ProjectId': $scope.ProjectId,

				}).then(function (response) {
					console.log(response.data);
					if (response.data.data == false) {
						console.log("error");
						$('#preloader').delay(350).fadeOut('slow');
					} else {
						$scope.ApplyCandiateList = response.data;
						$('#preloader').delay(350).fadeOut('slow');
					}
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}


		});


	/************************************       ClientDashboard  Controller     **************************************** */
/**********************************          Dashboard               **************************************************************** */


/*********************************     	   Job Portal                 ************************************************* */

	//call when click on view details
	iComissionapp.controller('JobviewController', function ($scope, $http, $location) {

		$scope.cad1 = "hello";

		
		
		

		$scope.JobId = localStorage.getItem('JobId');
		$scope.JobTitle = localStorage.getItem('JobTitle');

		//call when click on candidate list
		$scope.applyCandidate = function () {

			document.getElementById("maindiv").style.display = "block";
			document.getElementById("jobdescription").style.display = "none";
			document.getElementById("edit_job").style.display = "none";
			
			$http.post("PHP/Get_ApplyCandiateList.php", {
				'JobId': $scope.JobId,

			}).then(function (response) {
				console.log(response.data);
				if (response.data.data == false) {
					console.log("error");

				} else {
					document.getElementById("appliedcount").innerHTML = response.data.length;
					$scope.ApplyCandiateList = response.data;
				}
				$('#preloader').delay(350).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

		//Get_SkillSet
		$scope.loadSkillSet = function ($query) {

			return $http.get('PHP/Get_SkillSet.php', {
				cache: true
			}).then(function (response) {
				//console.log(response.data);
				var countries = response.data;

				return countries.filter(function (country) {
					return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
				});
			});
		};


		$scope.viewjobsingle = function () {
			document.getElementById("jobdescription").style.display = "none";
			document.getElementById("maindiv").style.display = "block";
			document.getElementById("edit_job").style.display = "none";
		}

		$scope.deletejob = function () {

			swal({
				title: 'Are you sure?',
				text: "Job post will be no longer available on portal!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.value) {

					$http.post("PHP/Delete_Job.php", {
						'JobId': $scope.JobId
					}).then(function (response) {
						console.log(response.data);
						window.location.href = "Main.htm";
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});

					//   swal(
					// 	'Deleted!',
					// 	'Your file has been deleted.',
					// 	'success'
					//   )
				}
			})
		}

		//call when click on jobdescription
		$scope.viewdescription = function () {
			document.getElementById("jobdescription").style.display = "block";
			document.getElementById("maindiv").style.display = "none";
			document.getElementById("edit_job").style.display = "none";
			$('#preloader').delay(350).show();
			$http.post("PHP/Get_JobDetails.php", {
				'JobId': $scope.JobId,

			}).then(function (response) {
				console.log(response.data);
				$scope.jobtitle = response.data[0].JobTitle;
				$("#jobdesc").summernote("code", response.data[0].JobDescription);
				$scope.vacancies = response.data[0].NoOfVacancy;
				$scope.skillSetName = response.data[0].Skillset;
				$("#minexp option[value='" + response.data[0].MinExp + "']").attr('selected', 'selected');
				$("#maxexp option[value='" + response.data[0].MaxExp + "']").attr('selected', 'selected');
				$("#minsalary option[value='" + response.data[0].MinSal + "']").attr('selected', 'selected');
				$("#maxsalary option[value='" + response.data[0].MaxSal + "']").attr('selected', 'selected');
				// $scope.skillSet = response.data[0].Skillset;
				$("#joblocation").val(response.data[0].JobLocation);
				$("#industry option[value='" + response.data[0].JobIndustry + "']").attr('selected', 'selected');
				$("#functionalarea option[value='" + response.data[0].JobFunctionalArea + "']").attr('selected', 'selected');
				$("#upspec option[value='" + response.data[0].UGQual + "']").attr('selected', 'selected');
				$("#pgspec option[value='" + response.data[0].PGQual + "']").attr('selected', 'selected');

				$scope.companynm = response.data[0].CompanyName;
				$scope.aboutcompany = response.data[0].AboutCompany;
				$scope.companyweb = response.data[0].CompanyURL;
				$scope.contactper = response.data[0].ContactPersonName;
				$scope.address = response.data[0].CompanyAddress;
				$scope.contactnum = response.data[0].ContactPersonPhNo;
				// $scope.jobPostDateTime = response.data[0].JobTitle;
				$("#edit_job").show();
				//$scope.jobdetails = response.data;

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
			$('#preloader').delay(350).fadeOut('slow');
		}

		//call when click on jobdescription
		$scope.jobdescription = function () {
			document.getElementById("jobdescription").style.display = "block";
			document.getElementById("maindiv").style.display = "none";
			document.getElementById("edit_job").style.display = "none";
			$('#preloader').delay(350).show();
			$http.post("PHP/Get_JobDetails.php", {
				'JobId': $scope.JobId,

			}).then(function (response) {
				console.log(response.data);
				$scope.jobdetails = response.data;

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
			$('#preloader').delay(350).fadeOut('slow');
		}

		//call when on next and get selectedCandidate id

		$scope.item = [];
		$scope.selectedcandidatelist = function () {
			//alert("in pp")
			var checkBoxes = document.getElementsByName("checkItem");
			//alert(checkBoxes.length)
			$scope.selectedCandidate = [];
			for (var i = 0; i < checkBoxes.length; i++) {
				if (checkBoxes[i].type == 'checkbox' && checkBoxes[i].checked == true)
					$scope.selectedCandidate[i] = checkBoxes[i].value;
			}

			var rex = /\S/;
			//console.log(JSON.stringify($scope.MilestoneName.filter(rex.test.bind(rex))) );
			$scope.item = $scope.selectedCandidate.filter(rex.test.bind(rex));
			var userids = $scope.item;
			if (userids) {
				var JobSeekerID = "";
				for (i = 0; i < userids.length; i++) {
					JobSeekerID += userids[i] + ",";
				}

				$http.post("PHP/Get_SelectedCandiateList.php", {
					'JobSeekerIds': JobSeekerID,

				}).then(function (response) {
					console.log(response.data);

					$scope.emailids = "";
					for (i = 0; i < response.data.length; i++) {
						$scope.emailids += response.data[i].Email + ",";
					}
					$scope.ids = "";
					for (i = 0; i < response.data.length; i++) {
						$scope.ids += response.data[i].JobSeekerID + ",";
					}
					$scope.FirstNames = "";
					for (i = 0; i < response.data.length; i++) {
						$scope.FirstNames += response.data[i].FirstName + ",";
					}

					if (response.data.data == false) {
						console.log("error");

					} else {
						if (response.data.length == "1090") {
							document.getElementById("selectedcount").innerHTML = "0";
						}
						else {
							document.getElementById("selectedcount").innerHTML = response.data.length;
						}
						$scope.SelectedCandiateList = response.data;
					}


				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
				console.log($scope.selectedCandidate);
				console.log($scope.item);
			}
		}

		$scope.SendInterviewScheduleToSelectedCandidate = function (isValid) {

			if (isValid) {
				$('#preloader').delay(350).show();
				$http.post("PHP/Send_InterviewScheduleMail.php", {
					'mailsubject': $scope.mailsubject,
					'EmailIds': $scope.emailids,
					'Names': $scope.FirstNames,
					'JobSeekerIDs': $scope.ids,
					'JobId': $scope.JobId,
					//'skypeId': $scope.skypeid,
					'MsgBody': $('#MailBody').summernote('code'),

				}).then(function (response) {
					console.log(response.data);
					if (response.data.data == false) {
						console.log("error");
					} else {
						$('#ScheduleMail').modal('hide');
						$('#preloader').delay(350).fadeOut('slow');
						swal({
							title: "Sent successfully!",
							text: "Interview schedule mail sent successfully",
							type: "info"
						});
					}
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				document.getElementById('errormsg').innerHTML = "Please enter all data";
			}
		}
		//call when click on viewcandidateProfile			
		$scope.viewcandidateProfile = function (id) {

			localStorage.setItem('JobSeekerID', id);

			$location.path("/ViewProfile");

		}

	});

	//call when click on view details
	iComissionapp.controller('EditJobController', function ($scope, $http, $location) 
	{

		
		
		

		//Get_SkillSet
		$scope.loadSkillSet = function ($query) {

			return $http.get('PHP/Get_SkillSet.php', {
				cache: true
			}).then(function (response) {
				//console.log(response.data);
				var countries = response.data;

				return countries.filter(function (country) {
					return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
				});
			});
		};

		//call when click on jobdescription
		$scope.viewdescription = function () {

			$('#preloader').delay(350).show();
			$http.post("PHP/Get_JobDetails.php", {
				'JobId': localStorage.getItem("editjobid"),

			}).then(function (response) {
				console.log(response.data);
				$scope.jobtitle = response.data[0].JobTitle;
				$("#jobdesc").summernote("code", response.data[0].JobDescription);
				$scope.vacancies = response.data[0].NoOfVacancy;
				$scope.skillSetName = response.data[0].Skillset;
				$("#minexp option[value='" + response.data[0].MinExp + "']").attr('selected', 'selected');
				$("#maxexp option[value='" + response.data[0].MaxExp + "']").attr('selected', 'selected');
				$("#minsalary option[value='" + response.data[0].MinSal + "']").attr('selected', 'selected');
				$("#maxsalary option[value='" + response.data[0].MaxSal + "']").attr('selected', 'selected');
				// $scope.skillSet = response.data[0].Skillset;
				$("#joblocation").val(response.data[0].JobLocation);
				$("#industry option[value='" + response.data[0].JobIndustry + "']").attr('selected', 'selected');
				$("#functionalarea option[value='" + response.data[0].JobFunctionalArea + "']").attr('selected', 'selected');
				$("#upspec option[value='" + response.data[0].UGQual + "']").attr('selected', 'selected');
				$("#pgspec option[value='" + response.data[0].PGQual + "']").attr('selected', 'selected');

				$scope.companynm = response.data[0].CompanyName;
				$scope.aboutcompany = response.data[0].AboutCompany;
				$scope.companyweb = response.data[0].CompanyURL;
				$scope.contactper = response.data[0].ContactPersonName;
				$scope.address = response.data[0].CompanyAddress;
				$scope.contactnum = response.data[0].ContactPersonPhNo;
				// $scope.jobPostDateTime = response.data[0].JobTitle;
				// $("#edit_job").show();
				//$scope.jobdetails = response.data;

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
			$('#preloader').delay(350).fadeOut('slow');
		}

	});

	//call when job post
	iComissionapp.controller('JobpostController', function ($scope, $http, $location) {
		
		
		localStorage.setItem("PostType",'Job');

		$scope.UserID = localStorage.getItem('UserAccountID');
		$scope.jobPostDateTime = new Date();

		$scope.UGQual = [];
		$scope.PGQual = [];
		$scope.skillSet = [];
		
		//Get_AllBachelorQualification
		$scope.loadCountries = function ($query) {

			return $http.get('PHP/Get_AllBachelorQualification.php', {
				cache: true
			}).then(function (response) {
				//console.log(response.data);
				var countries = response.data;

				return countries.filter(function (country) {
					return country.JobQualification.toLowerCase().indexOf($query.toLowerCase()) != -1;
				});
			});
		}


		$scope.show = function () {

			$("#mapdiv").show();
			$scope.latitude = "";
			$scope.langitude = "";

			var map = new google.maps.Map(document.getElementById('map_canvas'), {
				center: { lat: 16.698246090812788, lng: 74.22351164165048 },
				zoom: 13,
				mapTypeId: 'roadmap'
			});

			google.maps.event.trigger(map, 'resize');

			// Create the search box and link it to the UI element.
			var input = document.getElementById('pac-input');

			var searchBox = new google.maps.places.SearchBox(input);
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

			// Bias the SearchBox results towards current map's viewport.
			map.addListener('bounds_changed', function () {
				searchBox.setBounds(map.getBounds());
			});

			var markers = [];
			// Listen for the event fired when the user selects a prediction and retrieve
			// more details for that place.
			searchBox.addListener('places_changed', function () {
				var places = searchBox.getPlaces();

				if (places.length == 0) {
					return;
				}
				// Clear out the old markers.
				markers.forEach(function (marker) {
					marker.setMap(null);
				});
				markers = [];
				// For each place, get the icon, name and location.
				var bounds = new google.maps.LatLngBounds();
				places.forEach(function (place) {
					if (!place.geometry) {
						alert("Returned place contains no geometry");
						return;
					}
					var marker = new google.maps.Marker({
						map: map,
						draggable: true,
						title: place.name,
						position: place.geometry.location
					});

					if (place.geometry.viewport) {
						// Only geocodes have viewport.
						bounds.union(place.geometry.viewport);
					} else {
						bounds.extend(place.geometry.location);
					}
					google.maps.event.addListener(marker, "dragend", function (event) {

						$scope.latitude = this.getPosition().lat();
						$scope.langitude = this.getPosition().lng();

					});
				});
				map.fitBounds(bounds);
			});
		}


		//Get_AllMasterQualification
		$scope.loadJobMasterQualification = function ($query) {

			return $http.get('PHP/Get_AllMasterQualification.php', {
				cache: true
			}).then(function (response) {
				//console.log(response.data);
				var countries1 = response.data;

				return countries1.filter(function (country1) {
					return country1.Qualification.toLowerCase().indexOf($query.toLowerCase()) != -1;
				});
			});
		};

		//Get_SkillSet
		$scope.loadSkillSet = function ($query) {

			return $http.get('PHP/Get_SkillSet.php', {
				cache: true
			}).then(function (response) {
				//console.log(response.data);
				var countries = response.data;

				return countries.filter(function (country) {
					return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
				});
			});
		};
		$('#preloader').delay(350).fadeOut('slow');

		//call when click on job post
		$scope.Savejobpost = function () 
		{
			//	console.log($scope.skillSet);
			//	console.log($scope.UGQual);
			//	console.log($scope.PGQual);

			//				alert($("#joblocation").val())
			$('#preloader').delay(350).show();
			$scope.skillSetName = [];
			$scope.UGQualName = [];
			$scope.PGQualName = [];

			for (var i = 0; i < $scope.skillSet.length; i++) {
				$scope.skillSetName[i] = $scope.skillSet[i].SkillSetName;
			}

			for (var i = 0; i < $scope.UGQual.length; i++) {
				$scope.UGQualName[i] = $scope.UGQual[i].JobQualification;
			}

			for (var i = 0; i < $scope.PGQual.length; i++) {
				$scope.PGQualName[i] = $scope.PGQual[i].Qualification;
			}

			if ($('#radio19').prop('checked')) {
				$scope.officelocation = "Yes";
				$scope.latitude = "No";
				$scope.langitude = "No";
				$scope.Savejobpostdata();
			}
			if ($('#radio20').prop('checked')) {
				if ($scope.latitude != "" && $scope.langitude != "" && $("#joblocation").val() != "") {
					$scope.officelocation = "No";
					$scope.Savejobpostdata();
				}
				else {
					$.Notification.autoHideNotify('info', 'top center', 'Select location', 'Select job location on map.');
				}
			}
		}

		$scope.Savejobpostdata = function () {
			$http.post("PHP/Save_JobPostDetails.php", {
				'jobPostedBy': $scope.UserID,
				'jobtitle': $scope.jobtitle,
				'jobdescription': $('#jobdesc').summernote('code'),
				'NoOfVacancy': $scope.vacancies,
				'Keywords': $scope.skillSetName.toString(),
				'minexp': document.getElementById("minexp").value.replace(/\s+/g, ''),
				'maxexp': document.getElementById("maxexp").value.replace(/\s+/g, ''),
				'currency': document.getElementById("currency").value.replace(/\s+/g, ''),
				'minsalary': document.getElementById("minsalary").value.replace(/\s+/g, ''),
				'maxsalary': document.getElementById("maxsalary").value.replace(/\s+/g, ''),
				'saldetails': $scope.saldetails,
				'joblocation': $("#joblocation").val(),//toString().replace(/\s+/g, ''),
				'industry': document.getElementById("industry").value.toString().replace(/\s+/g, ''),
				'functionalarea': document.getElementById("functionalarea").value.toString().replace(/\s+/g, ''),
				'upspec': $scope.UGQualName.toString().replace(/\s+/g, ''),
				'pgspec': $scope.PGQualName.toString().replace(/\s+/g, ''),
				// 'companyname': $scope.companynm,
				// 'aboutcompany': $scope.aboutcompany,
				// 'companywebsite': $scope.companyweb,
				// 'companycontactpersonname': $scope.contactper,
				// 'companyaddress': $scope.address,
				// 'companycontactPersonPhNo': $scope.contactnum,
				'jobPostDateTime': $scope.jobPostDateTime,
				'lat': $scope.latitude,
				'lng': $scope.langitude,
				'officelocation': $scope.officelocation,
			}).then(function (response) {
				console.log(response.data);
				$('#preloader').delay(350).fadeOut('slow');
				if (response.data.data == true) {
					localStorage.setItem("Jobposted","Yes");
					$location.path("/clientdashboard");
				} else {
					console.log("error");
				}

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

	});

	//get JobSeekersProfile 
	iComissionapp.controller('ViewJobSeekersProfileController', function ($scope, $http) {

		
		
		

		var id = localStorage.getItem('JobSeekerID');
		//get ViewJobSeekersProfile 

		$http.post("PHP/Get_JobSeekerInfo.php", {
			'JobSeekerID': id
		}).then(function (response) {
			console.log(response.data);

			$scope.JobSeekersProfile = response.data;

			$http.post("PHP/Get_JobSeekers_AppliedJobList.php", {
				'JobSeekerID': id
			}).then(function (response) {
				console.log(response.data);
				if (response.data.data != false) {
					$scope.JobSeekers_AppliedJobList = response.data;
				}

				$('#preloader').delay(350).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		//call when click on viewProfile 
		$scope.viewProfile = function () {
			$("#AppliedJob_div").slideUp('fast');
			document.getElementById('maindiv').style.display = "block";
		}
		//call when click on AppliedJob 
		$scope.view_AppliedJob = function () {
			$("#maindiv").slideUp('fast');
			document.getElementById('AppliedJob_div').style.display = "block";
		}
	})

	//call when click on Search Candidate
	iComissionapp.controller('SearchJobseekersController', function ($scope, $http, $location) {

		
		
		

		$scope.GetJobSeekerInfo = function () {
			
			$http.post("PHP/Get_JobSeekerInfo.php", {
				'JobSeekerID': "null"
			}).then(function (response) {
				console.log(response.data);
				$scope.JobSeekerInfo = response.data;
				$('#preloader').delay(350).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

		//call when click on view_jobseekerprofile
		$scope.view_jobseekerprofile = function (id) {
			localStorage.setItem('JobSeekerID', id);
			$location.path("/ViewProfile");
		}

		$scope.skillSet = [];

		//Get_SkillSet
		$scope.loadSkillSet = function ($query) {

			return $http.get('PHP/Get_SkillSet.php', {
				cache: true
			}).then(function (response) {
				//console.log(response.data);
				var countries = response.data;

				return countries.filter(function (country) {
					return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
				});
			});
		};

		//call when click on serch_jobseeker
		$scope.serch_jobseeker = function () {
			// alert($.trim($scope.skillSetName));
			if ($scope.skillSet.length > 0 && document.getElementById("Experience").value != "Experience in Year") {

				$('#preloader').delay(350).show();
				$scope.skillSetName = [];

				for (var i = 0; i < $scope.skillSet.length; i++) {
					$scope.skillSetName[i] = $scope.skillSet[i].SkillSetName;
				}

				if ($('input[name="radioB2"]:checked').val() == undefined) {
					$scope.JobSeekerType = 'undefined';
				} else {
					$scope.JobSeekerType = $('input[name="radioB2"]:checked').val();
				}

				$scope.Experience = document.getElementById("Experience").value;
				console.log($scope.skillSetName.toString()); //null
				console.log($scope.JobSeekerType); //undefined
				console.log($scope.Experience); //Experience in Year

				$http.post("PHP/Get_SearchJobSeeker.php", {
					'Keywords': $.trim($scope.skillSetName),
					'Experience': document.getElementById("Experience").value,
					'JobSeekerType': $scope.JobSeekerType
				}).then(function (response) {
					console.log(response.data);

					if (response.data != "error") {
						$scope.JobSeekerInfo = response.data;
					}
					else {
						$scope.JobSeekerInfo = "";
					}
					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				//alert();
			}
		}
	})

	iComissionapp.controller('ViewAllJobController', function ($scope, $compile, $http, $location) {
		$scope.GetJobData = function () {
			
			$scope.UserRole = localStorage.getItem('RoleName');
			$scope.UserID = localStorage.getItem('UserAccountID');

			if ($scope.UserRole == "Client" || $scope.UserRole == "Vendor" || $scope.UserRole == "AssignmentSeeker") {
				var table = $('#Job_Datatable');
				$http.post("PHP/Get_JobList.php", {
					'jobPostedBy': $scope.UserID,
					'ShowData': 'All'

				}).then(function (response) {
					//console.log(response.data);
					if (response.data != "error") {
						$scope.AllData = response.data;
						var data = $scope.AllData;
						var datatablevar = table.DataTable({
							data: data,
							dom: 'lfrtip',
							buttons: [{
								extend: 'excel',
								text: '<i class="fa fa-file-excel-o text-default"></i> Excel',
								exportOptions: {
									columns: [1, 2, 3, 4]
								}
							},
							{
								extend: 'csv',
								text: '<i class="fa fa-files-o text-default"></i> CSV',
								exportOptions: {
									columns: [1, 2, 3, 4]
								}
							},
							{
								extend: 'pdf',
								text: '<i class="fa fa-file-pdf-o text-default"></i> PDF',
								exportOptions: {
									columns: [1, 2, 3, 4]
								},
								title: 'Job List',
							},
							{
								extend: 'print',
								text: '<i class="fa fa-print text-default"></i> Print',
								exportOptions: {
									columns: [1, 2, 3, 4]
								},
								title: 'Job List',
							}
							],
							columns: [

								{
									"data": "JobTitle",
									"render": function (data, type, row) {
										return '<img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">';
									}
								},
								{
									"data": "JobTitle"
								},
								{
									"data": "NoOfVacancy"
								},
								{
									"data": "JobLocation"
								},

								{
									"data": "JobPostDate"
								},
								{
									"data": "JobActive",
									"render": function (data) {
										if (data == "Active") {
											return '<span class="label label-info">' + data + '</span>';
										} else {
											return '<span class="label label-danger">' + data + '</span>';
										}
									}
								},
								{
									"data": "JobPostID",
									"render": function (data, type, row) {
										var NumberOFCandidate_Applied = row.NumberOFCandidate_Applied;
										if (NumberOFCandidate_Applied > 0) {
											return '<a href class="table-action-btn btn-info" title="Edit Job Details" ng-click="viewdescription(' + data + ')"><i class="ion-edit"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="View Details" ng-click="viewjob(' + data + ')"><i class="ion-eye"></i></a>';
										}
										else {
											return '<a href class="table-action-btn btn-info" title="Edit Job Details" ng-click="viewdescription(' + data + ')"><i class="ion-edit"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="View Details" ng-click="info()"><i class="ion-eye"></i></a>'
										}
									}
								},
							]
						});

						$compile(table)($scope);
					}
					else {
						$('#Job_Datatable').DataTable();
					}
					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});

			}
		}

		//call when click on jobdescription
		$scope.viewdescription = function (JobId) {
			localStorage.setItem("editjobid", JobId);

			$location.path("editjob");
		}

		$scope.info = function () {
			$.Notification.autoHideNotify('info', 'top center', 'No records found !', 'No Jobseeker have applied for this Job.');
		}

		

		$scope.viewjob = function (id) {

			$scope.JobId = id;

			localStorage.setItem('JobId', $scope.JobId);

			$location.path('viewjob');
		}
	});

	iComissionapp.controller('OngoingJobController', function ($scope, $compile, $http, $location) {
		$scope.GetJobData = function () {
			
			$scope.UserRole = localStorage.getItem('RoleName');
			$scope.UserID = localStorage.getItem('UserAccountID');

			if ($scope.UserRole == "Client" || $scope.UserRole == "Vendor" || $scope.UserRole == "AssignmentSeeker") {
				var table = $('#Job_Datatable');
				$http.post("PHP/Get_JobList.php", {
					'jobPostedBy': $scope.UserID,
					'ShowData': 'All'

				}).then(function (response) {
					//console.log(response.data);
					if (response.data != "error") {
						$scope.AllData = response.data;
						var data = $scope.AllData;
						var datatablevar = table.DataTable({
							data: data,
							dom: 'lBfrtip',
							buttons: [{
								extend: 'excel',
								text: '<i class="fa fa-file-excel-o text-default"></i> Excel',
								exportOptions: {
									columns: [1, 2, 3, 4]
								}
							},
							{
								extend: 'csv',
								text: '<i class="fa fa-files-o text-default"></i> CSV',
								exportOptions: {
									columns: [1, 2, 3, 4]
								}
							},
							{
								extend: 'pdf',
								text: '<i class="fa fa-file-pdf-o text-default"></i> PDF',
								exportOptions: {
									columns: [1, 2, 3, 4]
								},
								title: 'Job List',
							},
							{
								extend: 'print',
								text: '<i class="fa fa-print text-default"></i> Print',
								exportOptions: {
									columns: [1, 2, 3, 4]
								},
								title: 'Job List',
							}
							],
							columns: [

								// {
								// 	"data": "JobTitle",
								// 	"render": function (data, type, row) {
								// 		return '<img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">';
								// 	}
								// },
								{
									"data": "JobTitle"
								},
								// {
								// 	"data": "NoOfVacancy"
								// },
								// {
								// 	"data": "JobLocation"
								// },

								{
									"data": "JobPostDate"
								},
								{
									"data": "NumberOFCandidate_Applied"
								},
								{
									"data": "JobActive",
									"render": function (data) {
										if (data == "Active") {
											return '<span class="label label-info">' + data + '</span>';
										} else {
											return '<span class="label label-danger">' + data + '</span>';
										}
									}
								},
								{
									"data": "JobPostID",
									"render": function (data, type, row) {
										var NumberOFCandidate_Applied = row.NumberOFCandidate_Applied;
										if (NumberOFCandidate_Applied > 0) {
											return '<a href class="table-action-btn btn-info" title="View Details" ng-click="viewjob(' + data + ')"><i class="ion-eye"></i></a>'
										}
										else {
											return '<a href class="table-action-btn btn-info" title="View Details" ng-click="info()"><i class="ion-eye"></i></a>'
										}
									}
								},
							]
						});

						$compile(table)($scope);
					}
					else {
						$('#Job_Datatable').DataTable();
					}
					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});

			}
		}

		$scope.info = function () {
			$.Notification.autoHideNotify('info', 'top center', 'No records found !', 'No  Jobseeker have applied for this job.');
		}

		$scope.viewjob = function (id) {

			//$scope.JobTitle = titlev;

			$scope.JobId = id;

			localStorage.setItem('JobId', $scope.JobId);

			$location.path('viewjob');

		}
	});


/*********************************        	Job Portal 			      ********************************************************* */

/********************************     	SERVICES OF PROJECT AND JOB  PORTAL        ********************************************************************* */


	iComissionapp.service('Project_service', function ($http) {
		this.ProjectId = ''

		//get all project list
		this.getProjectList = function (UserID) {
			return $http.post("PHP/Get_ProjectList.php", {
				'ProjectPostedBy': UserID,
				'ShowData': 'limited'
			}).then(function (response) {
				//console.log(response.data);
				return response;

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	});


	iComissionapp.service("Job_service", function ($http) {

		this.getJobList = function (UserID) {
			return $http.post("PHP/Get_JobList.php", {
				'jobPostedBy': UserID,
				'ShowData': 'limited'

			}).then(function (response) {
				console.log(response.data);
				return response;

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	});

/********************************      	SERVICES OF PROJECT AND JOB  PORTAL          ********************************************************************** */

/*******************************         Profile                        ***************************************** */


	iComissionapp.controller('ProfileController', function ($scope, $http, $location) {

		//....................validation start...............
		$scope.onlytext = '^[a-zA-Z._ -]+$';
		$scope.onlynumber = '^[0-9]+$';
		$scope.Mobilenumber = "[0-9]{10}"; //
		//....................validation end................

		//$scope.CDate = new Date();

		$scope.getmap = function () {
			$('#preloader').delay(350).fadeOut('slow');
			$scope.latitude = "";
			$scope.langitude = "";
			var map = new google.maps.Map(document.getElementById('map_canvas'), {
				center: { lat: 16.698246090812788, lng: 74.22351164165048 },
				zoom: 13,
				mapTypeId: 'roadmap'
			});

			$('#MapModal').on('shown.bs.modal', function () {
				google.maps.event.trigger(map, 'resize');
			})

			// Create the search box and link it to the UI element.
			var input = document.getElementById('pac-input');

			var searchBox = new google.maps.places.SearchBox(input);
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

			// Bias the SearchBox results towards current map's viewport.
			map.addListener('bounds_changed', function () {
				searchBox.setBounds(map.getBounds());
			});

			var markers = [];
			// Listen for the event fired when the user selects a prediction and retrieve
			// more details for that place.
			searchBox.addListener('places_changed', function () {
				var places = searchBox.getPlaces();

				if (places.length == 0) {
					return;
				}
				// Clear out the old markers.
				markers.forEach(function (marker) {
					marker.setMap(null);
				});
				markers = [];
				// For each place, get the icon, name and location.
				var bounds = new google.maps.LatLngBounds();
				places.forEach(function (place) {
					if (!place.geometry) {
						alert("Returned place contains no geometry");
						return;
					}
					var marker = new google.maps.Marker({
						map: map,
						draggable: true,
						title: place.name,
						position: place.geometry.location
					});

					if (place.geometry.viewport) {
						// Only geocodes have viewport.
						bounds.union(place.geometry.viewport);
					} else {
						bounds.extend(place.geometry.location);
					}
					google.maps.event.addListener(marker, "dragend", function (event) {

						$scope.latitude = this.getPosition().lat();
						$scope.langitude = this.getPosition().lng();

						var lat = this.getPosition().lat();
						var lng = this.getPosition().lng();
						var latlng = new google.maps.LatLng(lat, lng);
						var geocoder = geocoder = new google.maps.Geocoder();
						geocoder.geocode({ 'latLng': latlng }, function (results, status) {
							if (status == google.maps.GeocoderStatus.OK) {
								if (results[1]) {
									$scope.officelocationn = results[1].formatted_address;
								}
							}
						});

					});
				});
				map.fitBounds(bounds);
			});
		}

		$scope.GetOtherFileData = function (isValid) {

			if (isValid) {
				if ($('#CLogo').val() != "" && $("#CCertificate").val() != "") {
					if ($scope.latitude != "" && $scope.langitude != "") {
						$('#preloader').delay(350).show();

						var filename = document.getElementById("CLogo").files[0].name;
						$scope.fileext = filename.substr((filename.lastIndexOf('.') + 1));
						var file = document.getElementById("CLogo").files[0];
						var reader = new FileReader();
						reader.readAsDataURL(file);
						reader.onload = function () {
							var filedata = reader.result;
							$scope.FileData = filedata.substr(filedata.indexOf(',') + 1);
							$scope.GetFile();
						};
						reader.onerror = function (error) {
							//alert('Error: ', error);
						};
					}
					else {
						document.getElementById("errormsg").innerHTML = "Please select company location on google map";
					}
				}
				else {
					document.getElementById("errormsg").innerHTML = "Please select company logo, Incorporation certificate";
				}
			}
			else {
				document.getElementById("errormsg").innerHTML = "Please enter all data";
			}
		}

		$scope.GetFile = function () {
			var filename1 = document.getElementById("CCertificate").files[0].name;
			$scope.fileext1 = filename1.substr((filename1.lastIndexOf('.') + 1));
			var file1 = document.getElementById("CCertificate").files[0];
			var reader1 = new FileReader();
			reader1.readAsDataURL(file1);
			reader1.onload = function () {
				var filedata1 = reader1.result;
				$scope.FileData1 = filedata1.substr(filedata1.indexOf(',') + 1);
				$scope.SaveOtherData();
			};
			reader1.onerror = function (error) {
				//alert('Error: ', error);
			};
		}

		$scope.SaveOtherData = function () {

			$http.post("PHP/Register_OtherUser.php", {
				'UserID': localStorage.getItem('UserAccountID'),
				'CompanyName': $scope.CName,
				'CompanyEmail': $scope.CEmail,
				'CompanyAddress': $scope.CAddress,
				'CompanyPhone': $scope.CPhone,
				'CompanyWebsite': $scope.CWebsite,
				'CompanyRegNo': $scope.CRegNo,
				'aboutcompany': $('#aboutcompany').summernote('code'),
				'Industry': $scope.CIndustry,
				'Lat': $scope.latitude,
				'Lng': $scope.langitude,
				'CompanyLogo': $scope.FileData,
				'CompanyLogoFileExt': $scope.fileext,
				'IncorporationCert': $scope.FileData1,
				'IncorporationCertFileExt': $scope.fileext1,
				'Date': $scope.CDate,
				'Country': $scope.CCountry,
				'State': $scope.CState,
				'PAN': $scope.CPAN,
				'TAN': $scope.CTAN,
				'officelocation': $scope.officelocationn,
				'Complete': '100',
			}).then(function (response) {
				console.log(response);
				if (response.data != "error") {
					$('#preloader').delay(350).fadeOut('slow');
					localStorage.setItem("Completed", "Yes");
					$location.path("clientdashboard");
				}
				$('#preloader').delay(350).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	});
/*******************************         Profile                        ***************************************** */

/**********************************     Mailbox      *************************************************** */
	//call when click on Inbox
	iComissionapp.controller('InboxController', function ($scope, $http, $location) {

		$scope.UserID = localStorage.getItem('UserAccountID');
		
		$http.post("PHP/Get_Messages.php", {
			'ReceiverID': $scope.UserID
		}).then(function (response) {
			console.log(response.data);
			// alert(console.data);
			if(response.data=="error")
			{
				$scope.MessageQueue ="";
				$scope.MessageQueueContent = "";
			}
			else
			{
				$scope.MessageQueue = response.data;
				$scope.MessageQueueContent = response.data[0][0];
			}
			
			//console.log(response.data[0][1]);
			$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});


		$scope.getMessageSenderID = function (id, name) {

			localStorage.setItem("SenderName", name);
			localStorage.setItem("SenderID", id);
		}

	});

	//call when click on mail for view
	iComissionapp.controller('ReadMessageController', function ($scope, $http, $location) {
		$scope.chatText = "";

		
		
		

		$scope.UserID = localStorage.getItem('UserAccountID');
		$scope.UserFirstName = localStorage.getItem('FirstName');

		//regarding message
		$scope.SenderID = localStorage.getItem('SenderID');
		$scope.SenderName = localStorage.getItem('SenderName');


		//get Messsage Content//

		//Sender user message content
		$http.post("PHP/Get_MessagesContent.php", {
			'SenderID': $scope.SenderID,
			'ReciverID': $scope.UserID
		}).then(function (response) {
			console.log(response.data);
			//alert(console.data);
			$scope.MessageContent = response.data;
			$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
		//

		//Login user message content
		$('#preloader').delay(350).show();
		$http.post("PHP/Get_MessagesContent.php", {
			'SenderID': $scope.UserID,
			'ReciverID': $scope.SenderID
		}).then(function (response) {
			console.log(response.data);
			//alert(console.data);
			if (response.data.data == false) {

			}
			else {
				$scope.MessageData = response.data;
			}

			$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
		//



		//get Messsage Content//

		//save messsage//
		$scope.SendMessage = function () {
			$scope.chatTime = moment().format("h:mm");
			$scope.SendTime = new Date();
			//alert($scope.chatTime);
			//alert($scope.chatText);
			if ($scope.chatText == "") {
				//sweetAlert("Oops...", "You forgot to enter your chat message", "error");
				$('.chat-input').focus();
			}
			else {
				//save message  in db
				$http.post("PHP/Save_Messages.php", {
					'SenderID': $scope.UserID,
					'ReceiverID': $scope.SenderID,
					'MessageText': $scope.chatText,
					'MessageTime': $scope.SendTime
				}).then(function (response) {
					console.log(response.data);
					//alert(console.data);
					if (response.data.data == true) {
						$('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-3.jpg" alt="male"><i>' + $scope.chatTime + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>' + $scope.UserFirstName + '</i><p>' + $scope.chatText + '</p></div></div></li>').appendTo('.conversation-list');
						$('.chat-input').val('');
						$scope.chatText = "";
						$('.chat-input').focus();
						$('.conversation-list').scrollTo('100%', '100%', {
							easing: 'swing'
						});
					}

					$('#preloader').delay(350).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});








			}
		}

		$('.chat-input').keypress(function (ev) {
			var p = ev.which;
			if (p == 13) {
				$scope.SendMessage();
				//return false;
			}
		});
		//save messsage//


	});
/**********************************     Mailbox      *************************************************** */

