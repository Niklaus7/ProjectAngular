// create the module and name it scotchApp
var iComissionapp = angular.module('iComissionapp', ['ngRoute', 'ngMaterial', 'ui.bootstrap', 'ngTagsInput', 'ngImgCrop']).filter('split', function () {
	return function (input, splitChar, splitIndex) {
		// do some bounds checking here to ensure it has that index
		return input.split(splitChar)[splitIndex];
	}
});

// configure our routes
iComissionapp.config(function ($routeProvider) {
	$routeProvider

		// route for the home page

		.when('/', {
			templateUrl: 'index.htm',
			controller: 'IndexController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/UserRegisteration', {
			templateUrl: 'Register.htm',
			controller: 'RegisterUserControllerr',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/UserRegistration', {
			templateUrl: 'UserRegister.htm',
			controller: 'RegisterUserController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/AssignmentSeekerReg', {
			templateUrl: 'AssignmentSeekerReg.htm',
			controller: 'AssignmentSeekerRegController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/OtherRegistration', {
			templateUrl: 'OtherRegister.htm',
			controller: 'RegisterOtherController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/Registration', {
			templateUrl: 'Registration.htm',
			controller: 'RegistrationController'
		})

		.when('/Login', {
			templateUrl: 'Login.htm',
			controller: 'LoginController'
		})

		.when('/JobSeekersProfile', {
			templateUrl: 'JobSeekersProfile.htm',
			controller: 'JobSeekersProfileController',
			resolve: {
				"check": function () {
					//$('#preloader').delay(350).show();
				}
			}
		})

		.when('/JobDetails', {
			templateUrl: 'JobDetails.htm',
			controller: 'JobDetailsController',
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

		.when('/JobSearch', {
			templateUrl: 'JobSearch.htm',
			controller: 'JobSearchController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/ProjectSearch', {
			templateUrl: 'ProjectSearch.htm',
			controller: 'ProjectSearchController',
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

		.when('/AssignmentSeekersProfile', {
			templateUrl: 'AssignmentSeekersProfile.htm',
			controller: 'AssignmentSeekersProfileController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/Forum', {
			templateUrl: 'Forum.htm',
			controller: 'ForumController',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/Answer', {
			templateUrl: 'ForumAnswer.htm',
			controller: 'ForumAnswerController',
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

iComissionapp.controller('MainController', function ($scope, $http, $timeout) {

	$scope.IsLoggedIn = "";
	if (localStorage.getItem('EndUserAccountID') != null) 
	{
		
		$scope.IsLoggedIn = "Yes";
		var profielpic = document.getElementById("profileimage");
		if (localStorage.getItem('EndUserAccountID') == "5") {
			profielpic.src = "iComissionAdmin/" + localStorage.getItem('ProfileImage');
		}
		else {
			profielpic.src = "iComissionAdmin/php/JobSeeker_Profile/user.PNG";
		}
	}
	else 
	{
		$scope.IsLoggedIn = "No";
	}

	if (localStorage.getItem('UserTypeID') == "6") {
		$scope.MyDashboard = "True";
	}
	if (localStorage.getItem('UserTypeID') == "5") {
		$scope.IsJobseeker = "True";
	}
	if (localStorage.getItem('UserTypeID') == "1") {
		$scope.IsClient = "True";
	}
	$scope.FirstName = localStorage.getItem('FirstName');

	$scope.LogOut = function () {
		localStorage.clear();
		window.location.href = "Index.html";
	}
	$timeout(function () {
		localStorage.clear();
		window.location.href = "Index.html";
	}, 3600000);
});

iComissionapp.controller('RegistrationController', function ($scope, $http) 
{

});

iComissionapp.controller('AssignmentSeekerRegController', function ($scope, $http, $location) {

	$scope.password = null;
	$scope.passwordConfirmation = null;

	//....................validation start...............
	$scope.onlytext = '^[a-zA-Z._ -]+$';
	$scope.onlynumber = '^[0-9]+$';
	$scope.Mobilenumber = "[0-9]{10}"; //
	//....................validation end................

	$('.selectpicker').selectpicker();
	$('#preloader').delay(350).fadeOut('slow');
	$scope.Getdata = function (isValid) {
		if (isValid) {
			$('.cssload-container').delay(300).show();
			$http.post("iComissionAdmin/PHP/CheckUser.php", {
				'Email': $scope.Email,
			}).then(function (response) {
				if (response.data == "Success") {
					$("#div_login").slideUp();
					document.getElementById('div_Otp').style.display = "block";

					$scope.OTPMSG($scope.Phone);
					document.getElementById('lbl_error2').innerHTML = "Check your message inbox for otp";
				}
				else {
					document.getElementById('errormsg').innerHTML = "Email id already exists with ProcStart";
					$('.cssload-container').delay(300).fadeOut('slow');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		} else {
			document.getElementById('errormsg').innerHTML = "Please enter all data";
		}
	}

	$scope.SaveUserData = function () {
		$('.cssload-container').delay(300).show();
		$scope.UserRoleId = 6;
		if ($scope.txt_otp != $scope.returnOTP) {
			document.getElementById('lbl_error2').innerHTML = "Incorrect OTP, please check your contact number";
		} else {
			var gender = "";
			$('input:radio').each(function (index) {
				if ($(this).is(':checked')) {
					gender = $(this).val();
				}
			});

			$http.post("PHP/Register_User.php", {
				'Name': $scope.Name,
				'Email': $scope.Email,
				'Phone': $scope.Phone,
				'Designation': $scope.Designation,
				'Password': $scope.Password,
				'gender': gender,
				'RoleType': $scope.UserRoleId
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {
					 document.getElementById('div_success').style.display = "block";
					 $("#div_Otp").slideUp();
					localStorage.setItem("success", "Yes");
					$location.path("Login");
				}
				$('.cssload-container').delay(300).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	}

	$scope.OTPMSG = function (Contact) {

		$http.post("PHP/SendOTPMessage.php", {
			'txt_contact': Contact,

		}).then(function (response) {
			//$('#loadingGif1').remove();
			$scope.returnOTP = response.data;
			alert("Your OTP is: " + response.data);
			//document.getElementById("txt_otp").value = response.data;
			$('.cssload-container').delay(300).fadeOut();
		}, function (error) {
			alert("Sorry! Data Couldn't be inserted!");
			alert(error);

		});
	}

	$scope.ResendOTP = function () {
		$('.cssload-container').delay(300).show();

		document.getElementById('lbl_error2').innerHTML = "OTP was send successfully, please check your inbox";

		$scope.OTPMSG($scope.Phone);
	}
});


iComissionapp.controller('RegisterUserController', function ($scope, $http, $location) {

	$scope.password = null;
	$scope.passwordConfirmation = null;

	//....................validation start...............
	$scope.onlytext = '^[a-zA-Z._ -]+$';
	$scope.onlynumber = '^[0-9]+$';
	$scope.Mobilenumber = "[0-9]{10}"; //
	//....................validation end................

	$('.selectpicker').selectpicker();

	$scope.Getdata = function (isValid) {
		if (isValid) {
			$('.cssload-container').delay(300).show();
			$http.post("iComissionAdmin/PHP/CheckUser.php", {
				'Email': $scope.Email,
			}).then(function (response) {
				if (response.data == "Success") {
					$("#div_login").slideUp();
					document.getElementById('div_Otp').style.display = "block";

					$scope.OTPMSG($scope.Phone);
					document.getElementById('lbl_error2').innerHTML = "Check your message inbox for otp";
				}
				else {
					document.getElementById('errormsg').innerHTML = "Email id already exists with ProcStart";
					$('.cssload-container').delay(300).fadeOut('slow');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		} else {
			document.getElementById('errormsg').innerHTML = "Please enter all data";
		}
	}

	$scope.SaveUserData = function () {
		$('.cssload-container').delay(300).show();
		$scope.UserRoleId = 5;
		if ($scope.txt_otp != $scope.returnOTP) {
			document.getElementById('lbl_error2').innerHTML = "Incorrect OTP, please check your contact number";
		} else {
			var gender = "";
			$('input:radio').each(function (index) {
				if ($(this).is(':checked')) {
					gender = $(this).val();
				}
			});

			$http.post("PHP/Register_User.php", {
				'Name': $scope.Name,
				'Email': $scope.Email,
				'Phone': $scope.Phone,
				'Designation': $scope.Designation,
				'Password': $scope.Password,
				'gender': gender,
				'RoleType': $scope.UserRoleId
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {
					 document.getElementById('div_success').style.display = "block";
					 $("#div_Otp").slideUp();
					localStorage.setItem("success", "Yes");
					$location.path("Login");
				}
				$('.cssload-container').delay(300).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	}

	$scope.OTPMSG = function (Contact) {

		$http.post("PHP/SendOTPMessage.php", {
			'txt_contact': Contact,

		}).then(function (response) {
			//$('#loadingGif1').remove();
			$scope.returnOTP = response.data;
			alert("Your OTP is: " + response.data);
			//document.getElementById("txt_otp").value = response.data;
			$('.cssload-container').delay(300).fadeOut();
		}, function (error) {
			alert("Sorry! Data Couldn't be inserted!");
			alert(error);

		});
	}

	$scope.ResendOTP = function () {
		$('.cssload-container').delay(300).show();

		document.getElementById('lbl_error2').innerHTML = "OTP was send successfully, please check your inbox";

		$scope.OTPMSG($scope.Phone);
	}
});

iComissionapp.controller('RegisterOtherController', function ($scope, $http, $location) {

	//$scope.CDate = new Date();

	$scope.GetRoles = function () {

		$http.post("PHP/Get_UserRoles.php").then(function (response) {
			$scope.UserRole = response.data;
			$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		$scope.latitude = "";
		$scope.langitude = "";
	}

	$scope.Getdata = function (isValid) {
		if (isValid) {
			if ($("#select_role").val() != "Select Role") {
				$('.cssload-container').delay(300).show();
				$http.post("iComissionAdmin/PHP/CheckUser.php", {
					'Email': $scope.CAEmail,
				}).then(function (response) {
					if (response.data == "Success") {
						$("#div_login1").slideUp();
						document.getElementById('div_Otp1').style.display = "block";

						$scope.OTPMSG($scope.CAPhone);
						document.getElementById('lbl_error3').innerHTML = "Check your message inbox for otp";
					}
					else {
						document.getElementById('errormsg1').innerHTML = "Email id already exists with ProcStart";
						$('.cssload-container').delay(300).fadeOut('slow');
					}
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				document.getElementById('errormsg1').innerHTML = "Please select role";
			}
		} else {
			document.getElementById('errormsg1').innerHTML = "Please enter all data";
		}
	}

	$scope.SaveUserData = function () {
		$('.cssload-container').delay(300).show();

		if ($scope.txt_otp1 != $scope.returnOTP) {
			document.getElementById('lbl_error3').innerHTML = "Incorrect OTP, please check your contact number";
		} else {
			var gender = "";
			$('input:radio').each(function (index) {
				if ($(this).is(':checked')) {
					gender = $(this).val();
				}
			});

			$http.post("PHP/Register_User.php", {
				'Name': $scope.CAName,
				'Email': $scope.CAEmail,
				'Phone': $scope.CAPhone,
				'Designation': $scope.Designation,
				'Password': $scope.CPassword,
				'gender': gender,
				'RoleType': $("#select_role").val(),
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {
					 document.getElementById('div_success1').style.display = "block";
					 $("#div_Otp1").slideUp();
					localStorage.setItem("success", "Yes");
					$location.path("Login");
				}
				$('.cssload-container').delay(300).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	}

	$scope.OTPMSG = function (Contact) {

		$http.post("PHP/SendOTPMessage.php", {
			'txt_contact': Contact,

		}).then(function (response) {
			//$('#loadingGif1').remove();
			$scope.returnOTP = response.data;
			alert("Your OTP is: " + response.data);
			//document.getElementById("txt_otp1").value = response.data;
			$('.cssload-container').delay(300).fadeOut('slow');
		}, function (error) {
			alert("Sorry! Data Couldn't be inserted!");
			alert(error);

		});
	}

	$scope.ResendOTP = function () {
		$('.cssload-container').delay(300).show();
		document.getElementById('lbl_error2').innerHTML = "OTP was send successfully, please check your inbox";

		$scope.OTPMSG($scope.CAPhone);
	}
});

iComissionapp.directive('passwordConfirm', ['$parse', function ($parse) {
	return {
		restrict: 'A',
		scope: {
			matchTarget: '=',
		},
		require: 'ngModel',
		link: function link(scope, elem, attrs, ctrl) {
			var validator = function (value) {
				ctrl.$setValidity('match', value === scope.matchTarget);
				return value;
			}

			ctrl.$parsers.unshift(validator);
			ctrl.$formatters.push(validator);

			// This is to force validator when the original password gets changed
			scope.$watch('matchTarget', function (newval, oldval) {
				validator(ctrl.$viewValue);
			});

		}
	};
}]);


/*iComissionapp.controller('LoginController', function ($scope, $http, $location) {

	if (localStorage.getItem("success") == "Yes") {
		swal({
			title: "Registered Successfully!",
			text: "Continue to login on ProcStart",
			type: "success"
		});
		localStorage.removeItem("success")
	}

	$scope.Login = function (isValid) {
		if (isValid) {
			// if (localStorage.getItem("isCaptchachecked") == "Yes") {
			$('.cssload-container').delay(300).show();
			$http.post("PHP/Login.php", {
				'username': $scope.username,
				'password': $scope.password
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {
					localStorage.removeItem("isCaptchachecked");
					localStorage.setItem('UserTypeID', response.data[0].UserTypeID)
					localStorage.setItem('UserRoleName', response.data[0].UserRoleName);
					localStorage.setItem('FirstName', response.data[0].FirstName);
					localStorage.setItem('UserAccountID', response.data[0].UserAccountID);
					localStorage.setItem('ProfileImage', response.data[0].profileimage);

					// var profielpic = document.getElementById("profileimage");

					// if(response.data[0].UserTypeID != "6" || response.data[0].profileimage != undefined){
					// 	profielpic.src = "iComissionAdmin/"+localStorage.getItem('ProfileImage');
					// }
					// else{
					// 	profielpic.src = "iComissionAdmin/php/JobSeeker_Profile/user.PNG";
					// }

					// if (response.data[0].UserAdminID == "Yes") {
					// 	$scope.RoleName = response.data[0].UserRoleName;
					// 	localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
					// 	$("#Admin").attr("href", "iComissionAdmin/Main.htm");
					// 	$("#User").attr("href", "Index.html");
					// 	$("#UserRoleDiv").slideUp();
					// 	document.getElementById('ChooseRoleDiv').style.display = "block";
					// } else 
					if (response.data[0].UserRoleName == "AssignmentSeeker") 
					{
						if (response.data[0].ProfileComplete == "No") {
							localStorage.setItem("ProfileComplete", "No");
						}
						localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
						window.location.href = "Index.html";
					}
					else if (response.data[0].UserRoleName != "User") {

						if (response.data[0].UserTypeID == "7") {
							window.location.href = "Admin/Main.htm";
						}
						else {
							$('.cssload-container').delay(300).fadeOut('slow');
							if (response.data[0].ProfileComplete == "No") {
								localStorage.setItem("ProfileComplete", "No");
							}
							localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
							window.location.href = "iComissionAdmin/Main.htm";
						}

					} else {
						localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
						if (response.data[0].IsJobSeeker == "No") {
							localStorage.setItem("IsRegistered", "No");
							$location.path('JobSeekersProfile');
						}
						else {
							window.location.href = "Index.html";
						}
					}
				} else {
					// document.getElementById('errormsg').innerHTML = "Incorrect username or password"
					var x = document.getElementById("snackbar")
					x.innerHTML = "Incorrect username or password";
					x.className = "show";
					setTimeout(function () {
						x.className = x.className.replace("show", "");
					}, 3000);
					$('.cssload-container').delay(300).fadeOut('slow');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
			// }
			// else {
			// 	var x = document.getElementById("snackbar")
			// 	x.innerHTML = "Please check reCaptcha to verify you are not a robot";
			// 	x.className = "show";
			// 	setTimeout(function () {
			// 		x.className = x.className.replace("show", "");
			// 	}, 3000);
			// }
		} else {
			var x = document.getElementById("snackbar")
			x.innerHTML = "Please enter username and password";
			x.className = "show";
			setTimeout(function () {
				x.className = x.className.replace("show", "");
			}, 3000);
		}
	}
});update on 4/2/2018/ */

iComissionapp.controller('LoginController', function ($scope, $http, $location) 
{

	if (localStorage.getItem("success") == "Yes") {
		swal({
			title: "Registered Successfully!",
			text: "Continue to login on ProcStart",
			type: "success"
		});
		localStorage.removeItem("success")
	}

	$scope.Login = function (isValid) {
		if (isValid) {
			$('.cssload-container').delay(300).show();
			$http.post("PHP/Login.php", {
				'username': $scope.username,
				'password': $scope.password
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {

					localStorage.setItem('UserTypeID', response.data[0].UserTypeID)
					localStorage.setItem('UserRoleName', response.data[0].UserRoleName);
					localStorage.setItem('FirstName', response.data[0].FirstName);
					localStorage.setItem('UserAccountID', response.data[0].UserAccountID);
					localStorage.setItem('ProfileImage', response.data[0].profileimage)

					// var profielpic = document.getElementById("profileimage");

					// if(response.data[0].UserTypeID != "6" || response.data[0].profileimage != undefined){
					// 	profielpic.src = "iComissionAdmin/"+localStorage.getItem('ProfileImage');
					// }
					// else{
					// 	profielpic.src = "iComissionAdmin/php/JobSeeker_Profile/user.PNG";
					// }

					// if (response.data[0].UserAdminID == "Yes") {
					// 	$scope.RoleName = response.data[0].UserRoleName;
					// 	localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
					// 	$("#Admin").attr("href", "iComissionAdmin/Main.htm");
					// 	$("#User").attr("href", "Index.html");
					// 	$("#UserRoleDiv").slideUp();
					// 	document.getElementById('ChooseRoleDiv').style.display = "block";
					// } else 
					if (response.data[0].UserRoleName == "AssignmentSeeker") {
					
						if (response.data[0].ProfileComplete == "No") 
						{
							localStorage.setItem("IsRegistered", "No");
							localStorage.setItem("ProfileComplete", "No");
							$location.path('AssignmentSeekersProfile');
							//window.location.href =
						}
						else 
						{
							window.location.href = "Index.html";
						}
						localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);

					}
					else if (response.data[0].UserRoleName != "User") {

						if (response.data[0].UserTypeID == "7") {
							window.location.href = "Admin/Main.htm";
						}
						else {
							$('.cssload-container').delay(300).fadeOut('slow');
							if (response.data[0].ProfileComplete == "No") {
								localStorage.setItem("ProfileComplete", "No");
							}
							localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
							window.location.href = "iComissionAdmin/Main.htm";
						}

					}
					else {
						localStorage.setItem('EndUserAccountID', response.data[0].UserAccountID);
						if (response.data[0].IsJobSeeker == "No") {
							localStorage.setItem("IsRegistered", "No");
							$location.path('JobSeekersProfile');
						}
						else {
							window.location.href = "Index.html";
						}
					}
				} else {
					document.getElementById('errormsg').innerHTML = "Incorrect username or password"
					$('.cssload-container').delay(300).fadeOut('slow');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		} else {
			document.getElementById('errormsg').innerHTML = "Please enter username and password";
		}
	}
});

iComissionapp.controller('IndexController', function ($scope, $http, $location, $log, $rootScope, $compile) 
{

	//....................validation start...............
	$scope.onlytext = '^[a-zA-Z._ -,]+$';
	$scope.onlynumber = '^[0-9]+$';
	//....................validation end................

	$scope.Keywords = '';
	$scope.KeywordsAd = '';
	$scope.Type = "";

	$scope.GetSearchedJobs = function () 
	{

		var allStates = "";
		$http.get('iComissionAdmin/PHP/Get_skills.php', {
			cache: true
		}).then(function (response) {
			console.log(response.data);
			$scope.items = response.data;
			
			var allStatesc = response.data;

		});

		$http.post("iComissionAdmin/PHP/Get_JobLocation.php").then(function (response) {
			$scope.JobLocationList = response.data.JobLocation;
			$scope.JobIndustryList = response.data.JobIndustry;

		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		if (localStorage.getItem("searchtype") == "Default") 
		{
			// $scope.JobLocation = localStorage.getItem("joblocation");
			// document.getElementById("Experience").value = localStorage.getItem("Experience");
			// document.getElementById("Salary").value = localStorage.getItem("Salary");
			// $scope.Keywords = localStorage.getItem("keywords");
			if(localStorage.getItem("joblocation")!='null')
			{
				$('.selectpicker').selectpicker();
				
							$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
								'joblocation': localStorage.getItem("joblocation"),
								'Experience': localStorage.getItem("Experience"),
								'Salary': localStorage.getItem("Salary"),
								'keywords': localStorage.getItem("keywords"),
								'searchtype': localStorage.getItem("searchtype")
							}).then(function (response) {
								console.log(response.data);
								if (response.data != "error") {
									$scope.All_JobList = response.data;
									$scope.All_JobList_Map = response.data;
									$scope.length = response.data.length;
									$scope.loadJobMap();
									$('.selectpicker').selectpicker('deselectAll');
								}
								else 
								{
									
									if(localStorage.getItem("UserRoleName")==null)
									{
										swal({
											title: "",
											text: "Oppss..No job availabe.Please  Register as job seeker  to get alert of recommended jobs   in your area",
											type: "info",
											
										});
										document.getElementById("Serach_joblocation").value='';
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
									else if(localStorage.getItem("UserRoleName")=="User")		
									{
										swal({
											title: "",
											text: "Oppss..No jobs availabe.",
											type: "info",
											
										});
										document.getElementById("Serach_joblocation").value='';
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
									else
									{
										swal({
											title: "",
											text: "Oppss..No jobs availabe.",
											type: "info",
											
										});
										document.getElementById("Serach_joblocation").value='';
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
								}
								$('.cssload-container').delay(300).fadeOut('slow');
							}, function (error) {
								console.log("Sorry! Data Couldn't be inserted!");
								console.log(error);
							});
			}
			else
			{
				$('.selectpicker').selectpicker();
				
							$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
								'joblocation': localStorage.getItem("GeoLocation"),
								'Experience': localStorage.getItem("Experience"),
								'Salary': localStorage.getItem("Salary"),
								'keywords': localStorage.getItem("keywords"),
								'searchtype': localStorage.getItem("searchtype")
							}).then(function (response) {
								console.log(response.data);
								if (response.data != "error") {
									$scope.All_JobList = response.data;
									$scope.All_JobList_Map = response.data;
									$scope.length = response.data.length;
									//$scope.loadMap();
									$scope.loadJobMap();
									$('.selectpicker').selectpicker('deselectAll');
								}
								else 
								{
									
									if(localStorage.getItem("UserRoleName")==null)
									{
										swal({
											title: "",
											text: "Oppss..No job availabe.Please  Register as job seeker  to get alert of recommended jobs in your area",
											type: "info",
											
										});
										document.getElementById("Serach_joblocation").value='';
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
									else if(localStorage.getItem("UserRoleName")=="User")		
									{
										swal({
											title: "",
											text: "Oppss..No jobs availabe.",
											type: "info",
											
										});
										document.getElementById("Serach_joblocation").value='';
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
									else
									{
										swal({
											title: "",
											text: "Oppss..No jobs availabe.",
											type: "info",
											
										});
										document.getElementById("Serach_joblocation").value='';
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
								}
								$('.cssload-container').delay(300).fadeOut('slow');
							}, function (error) {
								console.log("Sorry! Data Couldn't be inserted!");
								console.log(error);
							});
			}
			/*Comment-2
					$('.selectpicker').selectpicker();

					$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
						'joblocation': localStorage.getItem("joblocation"),
						'Experience': localStorage.getItem("Experience"),
						'Salary': localStorage.getItem("Salary"),
						'keywords': localStorage.getItem("keywords"),
						'searchtype': localStorage.getItem("searchtype")
					}).then(function (response) {
						console.log(response.data);
						if (response.data != "error") {
							$scope.All_JobList = response.data;
							$scope.All_JobList_Map = response.data;
							$scope.length = response.data.length;
							$scope.loadMap();
							$('.selectpicker').selectpicker('deselectAll');
						}
						else {
							$scope.All_JobList = "";
							$("#job_view").hide();
						}
						$('.cssload-container').delay(300).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
			*/

		}
		else if (localStorage.getItem("searchtype") == "Advanced") {
			$("#DefaultSearch").slideUp('fast');
			document.getElementById('AdvanceSearch').style.display = "block";

			// $scope.JobLocatioAd = localStorage.getItem("joblocationAd");
			// document.getElementById("ExperienceAd").value = localStorage.getItem("ExperienceAd");
			// document.getElementById("SalaryAd").value = localStorage.getItem("SalaryAd");
			// document.getElementById("jobindustry").value = localStorage.getItem("jobindustryAd");
			// $scope.KeywordsAd = localStorage.getItem("KeywordsAd");
			$('.selectpicker').selectpicker();

			$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
				'joblocation': localStorage.getItem("joblocationAd"),
				'jobindustry': localStorage.getItem("jobindustryAd"),
				'Experience': localStorage.getItem("ExperienceAd"),
				'Salary': localStorage.getItem("SalaryAd"),
				'keywords': localStorage.getItem("KeywordsAd"),
				'searchtype': localStorage.getItem("searchtype")
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {
					$scope.All_JobList = response.data;
					$('.selectpicker').selectpicker('deselectAll');
				}
				else {
					$scope.All_JobList = "";
				}
				$('.cssload-container').delay(300).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	}
	var marker;
	var markers = [];
	$scope.loadMap = function () {
		var mapOptions = {
			zoom: 10,
			mapTypeControlOptions: {
				mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
					'styled_map']
			},
		}
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		var JobsData = [];

		for (var i = 0; i < $scope.length; i++) {
			JobsData[i] = [$scope.All_JobList_Map[i].Lat, $scope.All_JobList_Map[i].Lng, $scope.All_JobList_Map[i].CompanyName, $scope.All_JobList_Map[i].JobTitle, $scope.All_JobList_Map[i].CompanyLogo, $scope.All_JobList_Map[i].MinSal, $scope.All_JobList_Map[i].MaxSal, $scope.All_JobList_Map[i].JobPostsID];
		}

		var styledMapType = new google.maps.StyledMapType(
			[
				{
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#2f2a2c"
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#bdbdbd"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#fba86f"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dadada"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#2f2a2c"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#bbdefb"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				}
			],
			{ name: 'Styled Map' });

		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');

		google.maps.event.trigger(map, 'resize');

		var bounds = new google.maps.LatLngBounds();


		var marker, i;
		var infowindow = new google.maps.InfoWindow();


		google.maps.event.addListener(map, 'click', function () {
			infowindow.close();
		});


		for (i = 0; i < JobsData.length; i++) {

			var p = JobsData[i];
			var latlng = new google.maps.LatLng(p[0], p[1]);
			bounds.extend(latlng);

			marker = new google.maps.Marker({
				position: latlng,
				map: map,
				CompanyName: p[2],
				JobTitle: p[3],
				CompanyLogo: p[4],
				MinSal: p[5],
				MaxSal: p[6],
				JobPostsID: p[7],
				animation: google.maps.Animation.DROP,
				icon: 'images/pin.png',
			});

			google.maps.event.addListener(marker, 'click', (function (marker, i) {
				return function () {
					$scope.JobPostsID = this.JobPostsID;
					var div = document.createElement('DIV');

					div.innerHTML = '<div class="col-sm-12" style="width:250px; padding: 5px !important">' +
						'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
						'<div class="post-media">' +
						'<a href>' +
						'<img src="iComissionAdmin/php/' + this.CompanyLogo + '" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
						'</a>' +
						'</div>' +
						'</div>' +

						'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
						'<h5 style="margin: 5px 0 !important;">' +
						'<a title="">' + this.CompanyName + '</a>' +
						'</h5>' +
						'<small>' +
						'<span>Website :' +
						'<a href>' + this.JobTitle + '</a>' +
						'</span>' +
						'</small>' +
						'<br/><small>' +
						'<span class="text-danger" style="color: #ff6700 !important"><b>Salary: $' + this.MinSal + ' - $' + this.MaxSal + '</b>' +
						'<a href class="text-danger pull-right" ng-click="getJobID(' + this.JobPostsID + ')" style="color: #2f2a2c !important;padding-right: 5px;"><b>View Jobs</b></a>' +
						'</span>' +
						'</small>' +
						'</div>' +
						'</div>';

					$compile(div)($scope);

					infowindow.setContent(div);
					// infowindow.setContent(this.title);
					infowindow.open(map, marker);
				}
			})(marker, i));

			google.maps.event.addListener(infowindow, 'domready', function () {

				// Reference to the DIV that wraps the bottom of infowindow
				var iwOuter = $('.gm-style-iw');

				/* Since this div is in a position prior to .gm-div style-iw.
				 * We use jQuery and create a iwBackground variable,
				 * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
				*/
				var iwBackground = iwOuter.prev();

				// Removes background shadow DIV
				iwBackground.children(':nth-child(2)').css({ 'display': 'none' });

				// Removes white background DIV
				iwBackground.children(':nth-child(4)').css({ 'display': 'none' });

				// Moves the infowindow 115px to the right.
				iwOuter.parent().parent().css({ left: '65px' });

				// Moves the shadow of the arrow 76px to the left margin.
				iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s + 'left: 76px !important;' });

				// Moves the arrow 76px to the left margin.
				iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s + 'left: 76px !important;' });

				// Changes the desired tail shadow color.
				iwBackground.children(':nth-child(3)').find('div').children().css({ 'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index': '1' });

				// Reference to the div that groups the close button elements.
				var iwCloseBtn = iwOuter.next();

				// Apply the desired effect to the close button
				iwCloseBtn.css({ opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9' });

				// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
				if ($('.iw-content').height() < 140) {
					$('.iw-bottom-gradient').css({ display: 'none' });
				}

				// The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
				iwCloseBtn.mouseout(function () {
					$(this).css({ opacity: '1' });
				});
			});


			markers.push(marker);
		}
		map.fitBounds(bounds);
	}

	$scope.getJobID = function (id) {
		$('.cssload-container').delay(300).show();
		localStorage.setItem('JobID', id);
		$location.path("\JobDetails");
	}

	$scope.myClick = function (id) {
		google.maps.event.trigger(markers[id], 'click');
	}

	$scope.GetJobs = function (ids) {

		document.getElementById('loadercstm').style.display = "block";
		var $pCont = $("#panel-content");
		$pCont.stop().animate({ width: 550 }, 700);
		$http.post("iComissionAdmin/PHP/Get_JobList_Map.php", {
			'JobPostsId': $scope.JobPostsID
		}).then(function (response) {
			console.log(response.data);
			$scope.All_JobList_Company = response.data;

			// document.getElementById('CompanyJob').style.display = "block";
			document.getElementById('loadercstm').style.display = "none";

		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

	}

	$scope.minlist = function () {
		if ($("#mapdiv").is(":visible")) {
			$("#jobdiv").hide();
			$("#mapdiv").removeClass("col-md-6 col-sm-12 col-xs-12").addClass("col-md-12 col-sm-12 col-xs-12");
			$('#btnmin').hide();
			$('#btnmin1').hide();
			$('#btnmax').show();
		}
		else {
			$("#jobdivv").removeClass("col-md-12 col-sm-12 col-xs-12").addClass("col-md-6 col-sm-12 col-xs-12");
			$("#mapdiv").show();
			$('#btnmin').show();
			$('#btnmin1').show();
			$('#btnmax').hide();
		}
		$scope.loadMap();
	}

	$scope.maxlist = function () {
		$("#jobdiv").show();
		$('#btnmin').show();
		$('#btnmin1').show();
		$('#btnmax').hide();
		$("#mapdiv").removeClass("col-md-12 col-sm-12 col-xs-12").addClass("col-md-6 col-sm-12 col-xs-12");
		$scope.loadMap();
	}

	$scope.minmap = function () {
		$("#mapdiv").hide();
		$('#btnmin1').hide();
		$('#btnmax1').show();
		$("#jobdivv").removeClass("col-md-6 col-sm-12 col-xs-12").addClass("col-md-12 col-sm-12 col-xs-12");
		$scope.loadMap();
	}

	$scope.close = function () {
		document.getElementById('loadercstm').style.display = "block";
		var $pCont = $("#panel-content");
		$pCont.stop().animate({ width: 0 }, 700);
	}

	$scope.MapView = function () {
		$("#job_view").slideUp('slow');
		document.getElementById("map_canvas").style.display = "block";
		$scope.loadMap();
	}
	$scope.ListView = function () {
		$("#map_canvas").slideUp('slow');
		document.getElementById("job_view").style.display = "block";
	}

	// $scope.serch_job = function () {
	// 	if ($scope.Keywords != "" && $("#Serach_joblocation").val() != "" && document.getElementById("Experience").value != "Exp in Year" && document.getElementById("Salary").value != "Salary in Lakh") {
	// 		$('.cssload-container').delay(300).show();
	// 		if ($("#Serach_joblocation").val() != null) {
	// 			localStorage.setItem("joblocation", $("#Serach_joblocation").val());
	// 		}
	// 		else {
	// 			localStorage.setItem("joblocation", $("#Serach_joblocation").val());
	// 		}
	// 		localStorage.setItem("Experience", document.getElementById("Experience").value);
	// 		localStorage.setItem("Salary", document.getElementById("Salary").value);
	// 		localStorage.setItem("searchtype", "Default");
	// 		$scope.GetSearchedJobs();
	// 	}
	// 	else {
	// 		$("#DefaultSearch .input-group, .input-groupp").css('border', '1px solid #8a1f11');
	// 		$(".SearchJob").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
	// 	}
	// }

	// $scope.Advanceserch_job = function () {
	// 	if ($scope.KeywordsAd != "" && ($("#jobindustry").val() != "" || $.trim($("#jobindustry").val()) != "Industry") && $("#joblocation").val() != "" && document.getElementById("ExperienceAd").value != "Exp in Year" && document.getElementById("SalaryAd").value != "Salary in Lakh") {
	// 		$('.cssload-container').delay(300).show();
	// 		if ($("#joblocation").val() != null) {
	// 			localStorage.setItem("joblocationAd", $("#joblocation").val());
	// 		}
	// 		else {
	// 			localStorage.setItem("joblocationAd", $("#joblocation").val());
	// 		}
	// 		if ($("#jobindustry").val() != null) {
	// 			localStorage.setItem("jobindustryAd", $.trim($("#jobindustry").val()));
	// 		}
	// 		else {
	// 			localStorage.setItem("jobindustryAd", $("#jobindustry").val());
	// 		}
	// 		localStorage.setItem("ExperienceAd", document.getElementById("ExperienceAd").value);
	// 		localStorage.setItem("SalaryAd", document.getElementById("SalaryAd").value);
	// 		localStorage.setItem("KeywordsAd", $scope.KeywordsAd);
	// 		localStorage.setItem("searchtype", "Advanced");
	// 		$scope.GetSearchedJobs();
	// 	}
	// 	else {
	// 		$("#AdvanceSearch .cstm, #AdvanceSearch .bootstrap-select").css('border', '1px solid #8a1f11');
	// 		$(".SearchJob").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
	// 	}
	// }

	$scope.AdvanceSearch = function () {
		$("#DefaultSearch .input-group, .input-groupp #DefaultSearch .bootstrap-select").css('border', 'none');
		$("#DefaultSearch").slideUp('fast');
		document.getElementById('AdvanceSearch').style.display = "block";

	}

	$scope.DefaultSearch = function () {
		$("#AdvanceSearch .cstm, #AdvanceSearch .bootstrap-select").css('border', 'none');
		$("#AdvanceSearch").slideUp('fast');
		document.getElementById('DefaultSearch').style.display = "block";
	}

	$scope.getJobID = function (id) {
		$('.cssload-container').delay(300).show();
		localStorage.setItem('JobID', id);
		$location.path("\JobDetails");
	}

	$scope.applytojob = function (id) {
		if (localStorage.getItem('UserAccountID') != null) {
			if (localStorage.getItem("IsRegistered") != "No") {
				$('.cssload-container').delay(300).show();
				$scope.jobApplytDateTime = new Date();
				$scope.JobSeekerID = localStorage.getItem('UserAccountID');
				//alert(id );
				$http.post("iComissionAdmin/PHP/Save_JobSeeker_ApplytoJob.php", {
					'JobID': id,
					'JobSeekerID': $scope.JobSeekerID,
					'ApplyDate': $scope.jobApplytDateTime,

				}).then(function (response) {
					console.log(response.data);

					if (response.data.data == false) {
						swal({
							title: "Already Applied!",
							text: "You have already applied for this job post",
							type: "info"
						});
					}
					else {
						swal({
							title: "Applied Successfully!",
							text: "You have successfully applied for this job post",
							type: "success"
						});
					}
					$('.cssload-container').delay(300).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				$location.path('JobSeekersProfile');
			}
		}
		else {
			$location.path('Login');
		}
	}

	$scope.showJob = function()
	{
		//document.getElementById("Filtervale").value = "job";
	
		$scope.Type = "Jobs";
		
		$("#FeaturedProjects").hide();
			$http.post("iComissionAdmin/PHP/Get_JobList.php", {
				'jobPostedBy': 'null',
				'ShowData': 'All'
			}).then(function (response) {
				console.log(response.data);
				$scope.All_JobList = response.data;
				$("#FeaturedJobs").show();
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	}
	$scope.showProject = function()
	{
		//document.getElementById("Filtervale").value = "Assignment";
		
			$scope.Type = "Assignments";
		
			$("#FeaturedJobs").hide();
			
			$http.post("iComissionAdmin/PHP/Get_ProjectList.php", {
				'ProjectPostedBy': 'null',
				'ShowData': 'All',
				'UserId': localStorage.getItem('EndUserAccountID'),
			}).then(function (response) {
				console.log(response.data);
				$scope.All_ProjectList = "";
				$scope.All_ProjectList = response.data;
				$("#FeaturedProjects").show();
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	}
	$scope.LoadData = function (type) 
	{
		
		if(type == "No"){
		$rootScope.loadcities();
		}

		var allStates = "";
		$http.get('iComissionAdmin/PHP/Get_skills.php', {
			cache: true
		}).then(function (response) {
			console.log(response.data);
			$scope.items = response.data;
			
			var allStatesc = response.data;

		});

		var allStates = "";
		$http.get('iComissionAdmin/PHP/Get_Assignments.php', {
			cache: true
		}).then(function (response) {
			console.log(response.data);
			$scope.items1 = response.data;
			
			var allStatescd = response.data;

		});


		if(type == "Yes"){
			$('.cssload-container').delay(300).show();
		}
		else{
			$("#overl").show();
		}

		$('.selectpicker').selectpicker();
		$scope.Type = "Jobs";

		
			
			$http.post("iComissionAdmin/PHP/Get_JobLocation.php").then(function (response) {
				$scope.JobLocationList = response.data.JobLocation;
				$scope.JobIndustryList = response.data.JobIndustry;
	
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		
			$http.post("iComissionAdmin/PHP/Get_ProjectLocation.php").then(function (response) 
			{
				$scope.ProjectTypeList = response.data.ProjectType;
				$scope.ProjectLocationList = response.data.ProjectLocation;
	
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	
			
			$http.post("iComissionAdmin/PHP/Get_ProjectLocation.php").then(function (response) 
			{
				$scope.ProjectTypeList1 = response.data.ProjectType;
				$scope.ProjectLocationList = response.data.ProjectLocation;
	
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	
			$http.post("iComissionAdmin/PHP/Get_JobLocation.php").then(function (response) {
				$scope.JobLocationList = response.data.JobLocation;
				$scope.JobIndustryList = response.data.JobIndustry;
	
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		
			$scope.currentPage = 0;
			$scope.pageSize = 5;
			$scope.data = [];
			$scope.q = '';

			$scope.getData = function () 
    {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
      return $filter('filter')($scope.data, $scope.q)
     /* 
       // manual filter
       // if u used this, remove the filter from html, remove above line and replace data with getData()
       
        var arr = [];
        if($scope.q == '') {
            arr = $scope.data;
        } else {
            for(var ea in $scope.data) {
                if($scope.data[ea].indexOf($scope.q) > -1) {
                    arr.push( $scope.data[ea] );
                }
            }
        }
        return arr;
       */
    }
    
    $scope.numberOfPages=function()
    {
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }


		if (localStorage.getItem('UserRoleName') == "User") 
		{
			document.getElementById("Job-Assignment").style.display="none";
			document.getElementById("Job").style.display="block";

			$scope.Type = "Jobs";
			$("#FeaturedProjects").remove();
			document.getElementById("FilterButton").style.display="none";
			$http.post("iComissionAdmin/PHP/Get_JobList.php", {
				'jobPostedBy': 'null',
				'ShowData': 'All'

			}).then(function (response) {
				console.log(response.data);
				$scope.All_JobList = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
		else if (localStorage.getItem('UserRoleName') == "AssignmentSeeker" || localStorage.getItem('UserRoleName') == "SME" || localStorage.getItem('UserRoleName') == "Vendor" || localStorage.getItem('UserRoleName') == "Consultant") 
		{
			document.getElementById("Job-Assignment").style.display="none";
			document.getElementById("Assignment").style.display="block";

			$scope.Type = "Assignments";
			$('#carousel-example-generic').carousel(1);
			$("#FeaturedJobs").remove();
			document.getElementById("FilterButton").style.display="none";
			
			$http.post("iComissionAdmin/PHP/Get_ProjectList.php", {
				'ProjectPostedBy': 'null',
				'ShowData': 'All',
				'UserId': localStorage.getItem('EndUserAccountID'),
			}).then(function (response) {
				console.log(response.data);
				$scope.All_ProjectList = "";
				$scope.All_ProjectList = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
		else 
		{
			
			/*$scope.Type = "Jobs";
			$http.post("iComissionAdmin/PHP/Get_JobList.php", {
				'jobPostedBy': 'null',
				'ShowData': 'All'
			}).then(function (response) {
				console.log(response.data);
				$scope.All_JobList = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});*/

		
			
			
				$scope.Type = "Assignments";
				$('#carousel-example-generic').carousel(1);
				$("#FeaturedJobs").hide();
				$http.post("iComissionAdmin/PHP/Get_ProjectList.php", {
					'ProjectPostedBy': 'null',
					'ShowData': 'All',
					'UserId': localStorage.getItem('EndUserAccountID'),
				}).then(function (response) {
					console.log(response.data);
					$scope.All_ProjectList = "";
					$scope.All_ProjectList = response.data;
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			
			
		}


		if (localStorage.getItem("searchtype") == "Advanced") {
			$("#DefaultSearch").slideUp('fast');
			document.getElementById('AdvanceSearch').style.display = "block";
		}
		if(type == "Yes"){
		  	$('.cssload-container').delay(300).fadeOut('slow');
		}
		else{
			$("#overl").hide();
		}
		//make_blank();
	}

	
		var invoke_make_blank = true;
	function make_blank()
	{
		if (invoke_make_blank)
		{
			introJs().start();
			invoke_make_blank = false;
		}
	}

	$rootScope.loadcities = function(){
		var options = {
            types: ['(cities)']
        };

        var input = document.getElementById('Serach_joblocation');
        // var autocomplete = new google.maps.places.Autocomplete(input, options);

        var places = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(places, 'place_changed', function () {
            var place = places.getPlace();
			var address = place.formatted_address;
			
            var address = "", city = "", state = "", zip = "", country = "", formattedAddress = "";

            for (var i = 0; i < place.address_components.length; i++) {
                var addr = place.address_components[i];
                // check if this entry in address_components has a type of country
                if (addr.types[0] == 'country')
                    country = addr.long_name;
                else if (addr.types[0] == 'street_address') // address 1
                    address = address + addr.long_name;
                else if (addr.types[0] == 'establishment')
                    address = address + addr.long_name;
                else if (addr.types[0] == 'route')  // address 2
                    address = address + addr.long_name;
                else if (addr.types[0] == 'postal_code')       // Zip
                    zip = addr.short_name;
                else if (addr.types[0] == ['administrative_area_level_1'])       // State
                    state = addr.long_name;
                else if (addr.types[0] == ['locality'])       // City
                    city = addr.long_name;
			}
			if(city == null || city == ""){
				city = country;
			}
            var location = place.geometry.location;

            lat = location.lat();
			lng = location.lng();

			localStorage.setItem("selectedcity",city);
			localStorage.setItem("selectedlat",lat);
			localStorage.setItem("selectedlng",lng);
			localStorage.setItem("selectedfromplace","Yes");
		});
	}

	$rootScope.searchdata = function () 
	{

		var address = document.getElementById('Serach_joblocation').value;
		if (address != "") 
		{
			if (localStorage.getItem("selectedfromplace")) {

				$http.post("iComissionAdmin/PHP/Get_JobProjectData.php", {
					'Location': localStorage.getItem("selectedcity")
				}).then(function (response) {
					console.log(response.data);
					if (response.data != "error") 
					{
						if(localStorage.getItem('UserRoleName') == "User")
						{
							$scope.All_JobList = response.data;
							$scope.All_JobList_Map = response.data.Jobdata;
							//$scope.All_ProjectList_Map = response.data.Projectdata;
							$scope.Joblength = response.data.Jobdata.length;
							//$scope.Projectlength = response.data.Projectdata.length;
							$scope.loadMap("No");
						}
						else if(localStorage.getItem('UserRoleName') == "AssignmentSeeker")
						{
							$scope.All_JobList = response.data;
							//$scope.All_JobList_Map = response.data.Jobdata;
							$scope.All_ProjectList_Map = response.data.Projectdata;
							//$scope.Joblength = response.data.Jobdata.length;
							$scope.Projectlength = response.data.Projectdata.length;
							$scope.loadMap("No");
						}
						else
						{
							$scope.All_JobList = response.data;
							$scope.All_JobList_Map = response.data.Jobdata;
							$scope.All_ProjectList_Map = response.data.Projectdata;
							$scope.Joblength = response.data.Jobdata.length;
							$scope.Projectlength = response.data.Projectdata.length;
							$scope.loadMap("No");
						}
						
						// localStorage.removeItem("selectedcity");
						// localStorage.removeItem("selectedlat");
						// localStorage.removeItem("selectedlng");
						//localStorage.removeItem("selectedfromplace");
					}
					else 
					{
						$scope.loadblankmap(localStorage.getItem("selectedlat"), localStorage.getItem("selectedlng"));
						localStorage.removeItem("selectedfromplace");
					}
					$('.cssload-container').delay(300).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else 
			{
				var x = document.getElementById("snackbar")
				x.innerHTML = "Please select location from placeholder";
				x.className = "show";
				setTimeout(function () {
					x.className = x.className.replace("show", "");
				}, 3000);
			}
		}
		else 
		{
			var x = document.getElementById("snackbar")
			x.innerHTML = "Please select location";
			x.className = "show";
			setTimeout(function () {
				x.className = x.className.replace("show", "");
			}, 3000);
		}
	}
	
	$rootScope.GetJobProjecfrmCurrntlocation = function (type) 
	{

		//if (navigator.geolocation) 
		//{
           navigator.geolocation.getCurrentPosition(function (p) {
			var lat = p.coords.latitude;
			var lng = p.coords.longitude;
			var latlng = new google.maps.LatLng(lat, lng);
			alert(latlng);
			var geocoder = geocoder = new google.maps.Geocoder();
			geocoder.geocode({ 'latLng': latlng }, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					if (results[0]) {
						//alert("Location: " + results[1].formatted_address);
						var address = "", city = "", state = "", zip = "", country = "", formattedAddress = "";
	
						for (var i = 0; i < results[0].address_components.length; i++) {
							var addr = results[0].address_components[i];
							// check if this entry in address_components has a type of country
							if (addr.types[0] == 'country')
								country = addr.long_name;
							else if (addr.types[0] == 'street_address') // address 1
								address = address + addr.long_name;
							else if (addr.types[0] == 'establishment')
								address = address + addr.long_name;
							else if (addr.types[0] == 'route')  // address 2
								address = address + addr.long_name;
							else if (addr.types[0] == 'postal_code')       // Zip
								zip = addr.short_name;
							else if (addr.types[0] == ['administrative_area_level_1'])       // State
								state = addr.long_name;
							else if (addr.types[0] == ['locality'])       // City
								city = addr.long_name;
						}
						//alert(city+country);
						localStorage.setItem('GeoLocation',city+', '+state+', '+country);
	
						$http.post("iComissionAdmin/PHP/Get_JobProjectData.php", {
							'Location': city
						}).then(function (response) {
							console.log(response.data);
							if (response.data != "error") 
							{
								if (localStorage.getItem('UserRoleName') == "User") 
								{
									$scope.All_JobList = response.data;
									$scope.All_JobList_Map = response.data.Jobdata;
								
									$scope.Joblength = response.data.Jobdata.length;
								
									$scope.loadMap(type);
								}
								else if (localStorage.getItem('UserRoleName') == "AssignmentSeeker") 
								{
									$scope.All_JobList = response.data;
									
									$scope.All_ProjectList_Map = response.data.Projectdata;
								
									$scope.Projectlength = response.data.Projectdata.length;
									$scope.loadMap(type);
								}
								else
								{
									$scope.All_JobList = response.data;
									$scope.All_JobList_Map = response.data.Jobdata;
									$scope.All_ProjectList_Map = response.data.Projectdata;
									$scope.Joblength = response.data.Jobdata.length;
									$scope.Projectlength = response.data.Projectdata.length;
									$scope.loadMap(type);
								}
								
							}
							else 
							{
								$scope.loadblankmap(lat, lng);
								// $scope.All_JobList = "";
								// $("#job_view").hide();
							}
							$('.cssload-container').delay(300).fadeOut('slow');
						}, function (error) {
							console.log("Sorry! Data Couldn't be inserted!");
							console.log(error);
						});
					}
				}
			});

           });
		//} 
		//else 
		//{
          // alert('Geo Location feature is not supported in this browser.');
       // }

       
    }

	

    $scope.loadblankmap = function (lat, lng) {
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var infoWindow = new google.maps.InfoWindow();
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fba86f"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#bbdefb"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ],
            { name: 'Styled Map' });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

      /*  var x = document.getElementById("snackbar")
        x.innerHTML = "No Jobs or assignments found";
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
		}, 3000);*/
		
		if(localStorage.getItem("UserRoleName")==null)
		{
			swal({
				title: "",
				text: "Oppss..No job/Assignment availabe.Please  Register as job seeker or assignemnt seeker to get alert of recommended jobs and assignments  in your area",
				type: "info",
				
			});
			document.getElementById("Serach_joblocation").value='';
		}
		else if(localStorage.getItem("UserRoleName")=="User")		
		{
			swal({
				title: "",
				text: "Oppss..No jobs availabe.",
				type: "info",
				
			});
			document.getElementById("Serach_joblocation").value='';
		}
		else if(localStorage.getItem("UserRoleName")=="AssignmentSeeker")		
		{
			swal({
				title: "",
				text: "Oppss..No Assignment availabe.",
				type: "info",
				
			});
			document.getElementById("Serach_joblocation").value='';
		}
		else
		{
			swal({
				title: "",
				text: "Oppss..No job/Assignment availabe.",
				type: "info",
				
			});
			document.getElementById("Serach_joblocation").value='';
		}
		//window.location.href = "Index.html";
    }

    var marker;
    var markers = [];
    var marker1;
    var markers1 = [];
    $scope.loadMap = function (type) {
        var mapOptions = {
            zoom: 10,
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
            },
        }
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        var JobsData = [];

        for (var i = 0; i < $scope.Joblength; i++) {
            JobsData[i] = [$scope.All_JobList_Map[i].lat, $scope.All_JobList_Map[i].lng, $scope.All_JobList_Map[i].CompanyName, $scope.All_JobList_Map[i].JobTitle, $scope.All_JobList_Map[i].MinSal, $scope.All_JobList_Map[i].MaxSal, $scope.All_JobList_Map[i].JobPostID, $scope.All_JobList_Map[i].JobPostedBy, $scope.All_JobList_Map[i].CompanyURL, $scope.All_JobList_Map[i].MinExp, $scope.All_JobList_Map[i].MaxExp];
        }

        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fba86f"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#bbdefb"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ],
            { name: 'Styled Map' });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        // google.maps.event.trigger(map, 'resize');

        var bounds = new google.maps.LatLngBounds();

        var marker, i;
        var infowindow = new google.maps.InfoWindow();


        google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
        });		
			var markerIconj = {
				url: 'images/pin_j.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 65),
				labelOrigin: new google.maps.Point(20, 15)
			}
			for (i = 0; i < JobsData.length; i++) {
	
				var p = JobsData[i];
				var latlng = new google.maps.LatLng(p[0], p[1]);
				bounds.extend(latlng);
				
				marker = new google.maps.Marker({
					position: latlng,
					map: map,
					CompanyName: p[2],
					JobTitle: p[3],
					MinSal: p[4],
					MaxSal: p[5],
					JobPostID: p[6],
					JobPostedBy: p[7],
					CompanyURL: p[8],
					MinExp: p[9],
					MaxExp: p[10],
					animation: google.maps.Animation.BOUNCE,
					icon: markerIconj,
				});
	
				google.maps.event.addListener(marker, 'click', (function (marker, i) {
					return function () {
						$scope.JobPostsID = this.JobPostID;
						var div = document.createElement('DIV');
	
						div.innerHTML = '<div class="col-sm-12" style="width:auto; padding: 5px !important">' +
						'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
						'<div class="post-media">' +
						'<a href>' +
						'<img src="iComissionAdmin/php/CompanyLogo/5a1fd1727c629.png" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
						'</a>' +
						'</div>' +
						'</div>' +
						'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
						// '<h5 style="margin: 5px 0 !important;">' +
						'<div class="text-wrapp">' + this.JobTitle + '</div>' +
						// '</h5>' +
						'<small>' +
						'<span style="color: #ff6700 !important; font-size: 14px;" class="text-danger"><b>Salary: </b>' +
						'<a href style="color: #ff6700 !important;"><i class="fa fa-usd"></i><b> ' + this.MinSal + ' to ' + this.MaxSal + '</b></a>' +
						'</span>' +
						'</small>' +
						'<br/><small>' +
						'<span class="text-danger" style="color: #2f2a2c !important; font-size: 10px"><b>Experience: ' + this.MinExp + ' - ' + this.MaxExp + ' Years</b>' +
						'<br><button class="btn btn-primary pull-right cstmbtncls" ng-click="getJobID(' + this.JobPostID + ')" style="padding-right: 5px; font-size: 12px">View</button>' +
						'</span>' +
						'</small>' +
						'</div>' +
						'</div>';
	
						$compile(div)($scope);
	
						infowindow.setContent(div);
						// infowindow.setContent(this.title);
						infowindow.open(map, marker);
					}
				})(marker, i));
	
				markers = [];
				markers.push(marker);
			}
			var markerCluster1 = new MarkerClusterer(map, markers,
				{imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'}
			);
		
			var ProjectsData = [];
			
			var markerIcona = {
				url: 'images/pin_a.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 65),
				labelOrigin: new google.maps.Point(20, 15)
			}
	
			for (var i = 0; i < $scope.Projectlength; i++) {
				ProjectsData[i] = [$scope.All_ProjectList_Map[i].lat, $scope.All_ProjectList_Map[i].lng, $scope.All_ProjectList_Map[i].CompanyName, $scope.All_ProjectList_Map[i].ProjectName, $scope.All_ProjectList_Map[i].ProjectBudget, $scope.All_ProjectList_Map[i].ProjectPostID, $scope.All_ProjectList_Map[i].ProjectPostBy, $scope.All_ProjectList_Map[i].CompanyURL, $scope.All_ProjectList_Map[i].ProjectStartDate];
			}
			for (i = 0; i < ProjectsData.length; i++) {
				var p = ProjectsData[i];
				var latlng = new google.maps.LatLng(p[0], p[1]);
				bounds.extend(latlng);
	
				marker1 = new google.maps.Marker({
					position: latlng,
					map: map,
					CompanyName: p[2],
					ProjectName: p[3],
					ProjectBudget: p[4],
					ProjectPostID: p[5],
					ProjectPostBy: p[6],
					CompanyURL: p[7],
					ProjectStartDate: p[8],
					animation: google.maps.Animation.BOUNCE,
					icon: markerIcona,
				});
	
				google.maps.event.addListener(marker1, 'click', (function (marker1, i) {
					return function () {
						var div = document.createElement('DIV');
	
						div.innerHTML = '<div class="col-sm-12" style="width: auto; padding: 5px !important">' +
						'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
						'<div class="post-media">' +
						'<a href>' +
						'<img src="iComissionAdmin/php/CompanyLogo/5a1fd1727c629.png" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
						'</a>' +
						'</div>' +
						'</div>' +
						'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
						// '<h5 style="margin: 5px 0 !important;">' +
						// '<a href style="text-overflow: ellipsis;">' + this.ProjectName + '</a>' +
						// '</h5>' +
						'<div class="text-wrapp">' + this.ProjectName + '</div>' +
						'<small>' +
						'<span style="color: #ff6700 !important; font-size: 12px;"><b>Budget: </b>' +
						'<a href style="color: #ff6700 !important;"><i class="fa fa-usd"></i> <b>' + this.ProjectBudget +'</b></a>'+
						'</span>' +
						'</small>' +
						'<br/><small>' +
						'<span class="text-danger" style="color: #2f2a2c !important; font-size: 10px"><b>Date: ' + this.ProjectStartDate +
						'<br><button class="btn btn-primary pull-right cstmbtncls" ng-click="getProjectID(' + this.ProjectPostID + ')" style="padding-right: 5px; font-size: 12px">View</button>' +
						'</span>' +
						'</small>' +
						'</div>' +
						'</div>';
	
						$compile(div)($scope);
	
						infowindow.setContent(div);
						// infowindow.setContent(this.title);
						infowindow.open(map, marker1);
					}
				})(marker1, i));
				markers1 = [];
				markers1.push(marker1);
			}
			
			var markerCluster1 = new MarkerClusterer(map, markers1,
				{imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'}
			);		        		
		map.fitBounds(bounds);

		zoomChangeBoundsListener =
			google.maps.event.addListenerOnce(map, 'bounds_changed', function (event) {
				if (this.getZoom()) {   // or set a minimum
					this.setZoom(5);  // set zoom here
				}
			});

		setTimeout(function () { google.maps.event.removeListener(zoomChangeBoundsListener) }, 2000);

		$scope.LoadData(type);
	}

	$scope.loadJobMap = function (type) {
        var mapOptions = {
            zoom: 10,
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
            },
        }
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        var JobsData = [];

        for (var i = 0; i < $scope.Joblength; i++) {
            JobsData[i] = [$scope.All_JobList_Map[i].lat, $scope.All_JobList_Map[i].lng, $scope.All_JobList_Map[i].CompanyName, $scope.All_JobList_Map[i].JobTitle, $scope.All_JobList_Map[i].MinSal, $scope.All_JobList_Map[i].MaxSal, $scope.All_JobList_Map[i].JobPostID, $scope.All_JobList_Map[i].JobPostedBy, $scope.All_JobList_Map[i].CompanyURL, $scope.All_JobList_Map[i].MinExp, $scope.All_JobList_Map[i].MaxExp];
        }

        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fba86f"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#bbdefb"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ],
            { name: 'Styled Map' });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        // google.maps.event.trigger(map, 'resize');

        var bounds = new google.maps.LatLngBounds();

        var marker, i;
        var infowindow = new google.maps.InfoWindow();


        google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
        });		
			var markerIconj = {
				url: 'images/pin_j.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 65),
				labelOrigin: new google.maps.Point(20, 15)
			}
			for (i = 0; i < JobsData.length; i++) {
	
				var p = JobsData[i];
				var latlng = new google.maps.LatLng(p[0], p[1]);
				bounds.extend(latlng);
				
				marker = new google.maps.Marker({
					position: latlng,
					map: map,
					CompanyName: p[2],
					JobTitle: p[3],
					MinSal: p[4],
					MaxSal: p[5],
					JobPostID: p[6],
					JobPostedBy: p[7],
					CompanyURL: p[8],
					MinExp: p[9],
					MaxExp: p[10],
					animation: google.maps.Animation.BOUNCE,
					icon: markerIconj,
				});
	
				google.maps.event.addListener(marker, 'click', (function (marker, i) {
					return function () {
						$scope.JobPostsID = this.JobPostID;
						var div = document.createElement('DIV');
	
						div.innerHTML = '<div class="col-sm-12" style="width:auto; padding: 5px !important">' +
						'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
						'<div class="post-media">' +
						'<a href>' +
						'<img src="iComissionAdmin/php/CompanyLogo/5a1fd1727c629.png" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
						'</a>' +
						'</div>' +
						'</div>' +
						'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
						// '<h5 style="margin: 5px 0 !important;">' +
						'<div class="text-wrapp">' + this.JobTitle + '</div>' +
						// '</h5>' +
						'<small>' +
						'<span style="color: #ff6700 !important; font-size: 14px;" class="text-danger"><b>Salary: </b>' +
						'<a href style="color: #ff6700 !important;"><i class="fa fa-usd"></i><b> ' + this.MinSal + ' to ' + this.MaxSal + '</b></a>' +
						'</span>' +
						'</small>' +
						'<br/><small>' +
						'<span class="text-danger" style="color: #2f2a2c !important; font-size: 10px"><b>Experience: ' + this.MinExp + ' - ' + this.MaxExp + ' Years</b>' +
						'<br><button class="btn btn-primary pull-right cstmbtncls" ng-click="getJobID(' + this.JobPostID + ')" style="padding-right: 5px; font-size: 12px">View</button>' +
						'</span>' +
						'</small>' +
						'</div>' +
						'</div>';
	
						$compile(div)($scope);
	
						infowindow.setContent(div);
						// infowindow.setContent(this.title);
						infowindow.open(map, marker);
					}
				})(marker, i));
	
				markers = [];
				markers.push(marker);
			}
			var markerCluster1 = new MarkerClusterer(map, markers,
				{imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'}
			);
		
			var ProjectsData = [];
			
			var markerIcona = {
				url: 'images/pin_a.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 65),
				labelOrigin: new google.maps.Point(20, 15)
			}
	
			// for (var i = 0; i < $scope.Projectlength; i++) {
			// 	ProjectsData[i] = [$scope.All_ProjectList_Map[i].lat, $scope.All_ProjectList_Map[i].lng, $scope.All_ProjectList_Map[i].CompanyName, $scope.All_ProjectList_Map[i].ProjectName, $scope.All_ProjectList_Map[i].ProjectBudget, $scope.All_ProjectList_Map[i].ProjectPostID, $scope.All_ProjectList_Map[i].ProjectPostBy, $scope.All_ProjectList_Map[i].CompanyURL, $scope.All_ProjectList_Map[i].ProjectStartDate];
			// }
			// for (i = 0; i < ProjectsData.length; i++) {
			// 	var p = ProjectsData[i];
			// 	var latlng = new google.maps.LatLng(p[0], p[1]);
			// 	bounds.extend(latlng);
	
			// 	marker1 = new google.maps.Marker({
			// 		position: latlng,
			// 		map: map,
			// 		CompanyName: p[2],
			// 		ProjectName: p[3],
			// 		ProjectBudget: p[4],
			// 		ProjectPostID: p[5],
			// 		ProjectPostBy: p[6],
			// 		CompanyURL: p[7],
			// 		ProjectStartDate: p[8],
			// 		animation: google.maps.Animation.BOUNCE,
			// 		icon: markerIcona,
			// 	});
	
			// 	google.maps.event.addListener(marker1, 'click', (function (marker1, i) {
			// 		return function () {
			// 			var div = document.createElement('DIV');
	
			// 			div.innerHTML = '<div class="col-sm-12" style="width: auto; padding: 5px !important">' +
			// 			'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
			// 			'<div class="post-media">' +
			// 			'<a href>' +
			// 			'<img src="iComissionAdmin/php/CompanyLogo/5a1fd1727c629.png" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
			// 			'</a>' +
			// 			'</div>' +
			// 			'</div>' +
			// 			'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
			// 			// '<h5 style="margin: 5px 0 !important;">' +
			// 			// '<a href style="text-overflow: ellipsis;">' + this.ProjectName + '</a>' +
			// 			// '</h5>' +
			// 			'<div class="text-wrapp">' + this.ProjectName + '</div>' +
			// 			'<small>' +
			// 			'<span style="color: #ff6700 !important; font-size: 12px;"><b>Budget: </b>' +
			// 			'<a href style="color: #ff6700 !important;"><i class="fa fa-usd"></i> <b>' + this.ProjectBudget +'</b></a>'+
			// 			'</span>' +
			// 			'</small>' +
			// 			'<br/><small>' +
			// 			'<span class="text-danger" style="color: #2f2a2c !important; font-size: 10px"><b>Date: ' + this.ProjectStartDate +
			// 			'<br><button class="btn btn-primary pull-right cstmbtncls" ng-click="getProjectID(' + this.ProjectPostID + ')" style="padding-right: 5px; font-size: 12px">View</button>' +
			// 			'</span>' +
			// 			'</small>' +
			// 			'</div>' +
			// 			'</div>';
	
			// 			$compile(div)($scope);
	
			// 			infowindow.setContent(div);
			// 			// infowindow.setContent(this.title);
			// 			infowindow.open(map, marker1);
			// 		}
			// 	})(marker1, i));
			// 	markers1 = [];
			// 	markers1.push(marker1);
			// }
			
			// var markerCluster1 = new MarkerClusterer(map, markers1,
			// 	{imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'}
			// );		        		
		map.fitBounds(bounds);

		zoomChangeBoundsListener =
			google.maps.event.addListenerOnce(map, 'bounds_changed', function (event) {
				if (this.getZoom()) {   // or set a minimum
					this.setZoom(5);  // set zoom here
				}
			});

		setTimeout(function () { google.maps.event.removeListener(zoomChangeBoundsListener) }, 2000);

		$scope.LoadData(type);
	}
	
	$scope.loadProjectMap = function (type) {
        var mapOptions = {
            zoom: 10,
            mapTypeControlOptions: {
                mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
            },
        }
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        var JobsData = [];

        for (var i = 0; i < $scope.Joblength; i++) {
            JobsData[i] = [$scope.All_JobList_Map[i].lat, $scope.All_JobList_Map[i].lng, $scope.All_JobList_Map[i].CompanyName, $scope.All_JobList_Map[i].JobTitle, $scope.All_JobList_Map[i].MinSal, $scope.All_JobList_Map[i].MaxSal, $scope.All_JobList_Map[i].JobPostID, $scope.All_JobList_Map[i].JobPostedBy, $scope.All_JobList_Map[i].CompanyURL, $scope.All_JobList_Map[i].MinExp, $scope.All_JobList_Map[i].MaxExp];
        }

        var styledMapType = new google.maps.StyledMapType(
            [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fba86f"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#2f2a2c"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#bbdefb"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ],
            { name: 'Styled Map' });

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        // google.maps.event.trigger(map, 'resize');

        var bounds = new google.maps.LatLngBounds();

        var marker, i;
        var infowindow = new google.maps.InfoWindow();


        google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
        });		
			var markerIconj = {
				url: 'images/pin_j.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 65),
				labelOrigin: new google.maps.Point(20, 15)
			}
			// for (i = 0; i < JobsData.length; i++) {
	
			// 	var p = JobsData[i];
			// 	var latlng = new google.maps.LatLng(p[0], p[1]);
			// 	bounds.extend(latlng);
				
			// 	marker = new google.maps.Marker({
			// 		position: latlng,
			// 		map: map,
			// 		CompanyName: p[2],
			// 		JobTitle: p[3],
			// 		MinSal: p[4],
			// 		MaxSal: p[5],
			// 		JobPostID: p[6],
			// 		JobPostedBy: p[7],
			// 		CompanyURL: p[8],
			// 		MinExp: p[9],
			// 		MaxExp: p[10],
			// 		animation: google.maps.Animation.BOUNCE,
			// 		icon: markerIconj,
			// 	});
	
			// 	google.maps.event.addListener(marker, 'click', (function (marker, i) {
			// 		return function () {
			// 			$scope.JobPostsID = this.JobPostID;
			// 			var div = document.createElement('DIV');
	
			// 			div.innerHTML = '<div class="col-sm-12" style="width:auto; padding: 5px !important">' +
			// 			'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
			// 			'<div class="post-media">' +
			// 			'<a href>' +
			// 			'<img src="iComissionAdmin/php/CompanyLogo/5a1fd1727c629.png" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
			// 			'</a>' +
			// 			'</div>' +
			// 			'</div>' +
			// 			'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
			// 			// '<h5 style="margin: 5px 0 !important;">' +
			// 			'<div class="text-wrapp">' + this.JobTitle + '</div>' +
			// 			// '</h5>' +
			// 			'<small>' +
			// 			'<span style="color: #ff6700 !important; font-size: 14px;" class="text-danger"><b>Salary: </b>' +
			// 			'<a href style="color: #ff6700 !important;"><i class="fa fa-usd"></i><b> ' + this.MinSal + ' to ' + this.MaxSal + '</b></a>' +
			// 			'</span>' +
			// 			'</small>' +
			// 			'<br/><small>' +
			// 			'<span class="text-danger" style="color: #2f2a2c !important; font-size: 10px"><b>Experience: ' + this.MinExp + ' - ' + this.MaxExp + ' Years</b>' +
			// 			'<br><button class="btn btn-primary pull-right cstmbtncls" ng-click="getJobID(' + this.JobPostID + ')" style="padding-right: 5px; font-size: 12px">View</button>' +
			// 			'</span>' +
			// 			'</small>' +
			// 			'</div>' +
			// 			'</div>';
	
			// 			$compile(div)($scope);
	
			// 			infowindow.setContent(div);
			// 			// infowindow.setContent(this.title);
			// 			infowindow.open(map, marker);
			// 		}
			// 	})(marker, i));
	
			// 	markers = [];
			// 	markers.push(marker);
			// }
			// var markerCluster1 = new MarkerClusterer(map, markers,
			// 	{imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'}
			// );
		
			var ProjectsData = [];
			
			var markerIcona = {
				url: 'images/pin_a.png',
				scaledSize: new google.maps.Size(40, 40),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32, 65),
				labelOrigin: new google.maps.Point(20, 15)
			}
	
			for (var i = 0; i < $scope.Projectlength; i++) {
				ProjectsData[i] = [$scope.All_ProjectList_Map[i].lat, $scope.All_ProjectList_Map[i].lng, $scope.All_ProjectList_Map[i].CompanyName, $scope.All_ProjectList_Map[i].ProjectName, $scope.All_ProjectList_Map[i].ProjectBudget, $scope.All_ProjectList_Map[i].ProjectPostID, $scope.All_ProjectList_Map[i].ProjectPostBy, $scope.All_ProjectList_Map[i].CompanyURL, $scope.All_ProjectList_Map[i].ProjectStartDate];
			}
			for (i = 0; i < ProjectsData.length; i++) {
				var p = ProjectsData[i];
				var latlng = new google.maps.LatLng(p[0], p[1]);
				bounds.extend(latlng);
	
				marker1 = new google.maps.Marker({
					position: latlng,
					map: map,
					CompanyName: p[2],
					ProjectName: p[3],
					ProjectBudget: p[4],
					ProjectPostID: p[5],
					ProjectPostBy: p[6],
					CompanyURL: p[7],
					ProjectStartDate: p[8],
					animation: google.maps.Animation.BOUNCE,
					icon: markerIcona,
				});
	
				google.maps.event.addListener(marker1, 'click', (function (marker1, i) {
					return function () {
						var div = document.createElement('DIV');
	
						div.innerHTML = '<div class="col-sm-12" style="width: auto; padding: 5px !important">' +
						'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
						'<div class="post-media">' +
						'<a href>' +
						'<img src="iComissionAdmin/php/CompanyLogo/5a1fd1727c629.png" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
						'</a>' +
						'</div>' +
						'</div>' +
						'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
						// '<h5 style="margin: 5px 0 !important;">' +
						// '<a href style="text-overflow: ellipsis;">' + this.ProjectName + '</a>' +
						// '</h5>' +
						'<div class="text-wrapp">' + this.ProjectName + '</div>' +
						'<small>' +
						'<span style="color: #ff6700 !important; font-size: 12px;"><b>Budget: </b>' +
						'<a href style="color: #ff6700 !important;"><i class="fa fa-usd"></i> <b>' + this.ProjectBudget +'</b></a>'+
						'</span>' +
						'</small>' +
						'<br/><small>' +
						'<span class="text-danger" style="color: #2f2a2c !important; font-size: 10px"><b>Date: ' + this.ProjectStartDate +
						'<br><button class="btn btn-primary pull-right cstmbtncls" ng-click="getProjectID(' + this.ProjectPostID + ')" style="padding-right: 5px; font-size: 12px">View</button>' +
						'</span>' +
						'</small>' +
						'</div>' +
						'</div>';
	
						$compile(div)($scope);
	
						infowindow.setContent(div);
						// infowindow.setContent(this.title);
						infowindow.open(map, marker1);
					}
				})(marker1, i));
				markers1 = [];
				markers1.push(marker1);
			}
			
			var markerCluster1 = new MarkerClusterer(map, markers1,
				{imagePath: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclusterer/images/m'}
			);		        		
		map.fitBounds(bounds);

		zoomChangeBoundsListener =
			google.maps.event.addListenerOnce(map, 'bounds_changed', function (event) {
				if (this.getZoom()) {   // or set a minimum
					this.setZoom(5);  // set zoom here
				}
			});

		setTimeout(function () { google.maps.event.removeListener(zoomChangeBoundsListener) }, 2000);

		$scope.LoadData(type);
	}
	


	

	/* An InfoBox is like an info window, but it displays
	* under the marker, opens quicker, and has flexible styling.
	* @param {GLatLng} latlng Point to place bar at
	* @param {Map} map The map on which to display this InfoBox.
	* @param {Object} opts Passes configuration options - content,
	* offsetVertical, offsetHorizontal, className, height, width
	*/

	function InfoBox(opts) {
		google.maps.OverlayView.call(this);
		this.latlng_ = opts.latlng;
		this.map_ = opts.map;
		this.content = opts.content;
		this.offsetVertical_ = -195;
		this.offsetHorizontal_ = 5;
		this.height_ = 165;
		this.width_ = 266;
		var me = this;
		this.boundsChangedListener_ =
			google.maps.event.addListener(this.map_, "bounds_changed", function () {
				return me.panMap.apply(me);
			});
		// Once the properties of this OverlayView are initialized, set its map so
		// that we can display it. This will trigger calls to panes_changed and
		// draw.
		this.setMap(this.map_);
	}
	/* InfoBox extends GOverlay class from the Google Maps API
	*/
	InfoBox.prototype = new google.maps.OverlayView();
	/* Creates the DIV representing this InfoBox
	*/
	InfoBox.prototype.remove = function () {
		if (this.div_) {
			this.div_.parentNode.removeChild(this.div_);
			this.div_ = null;
		}
	};
	/* Redraw the Bar based on the current projection and zoom level
	*/
	InfoBox.prototype.draw = function () {
		// Creates the element if it doesn't exist already.
		this.createElement();
		if (!this.div_) return;
		// Calculate the DIV coordinates of two opposite corners of our bounds to
		// get the size and position of our Bar
		var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
		if (!pixPosition) return;
		// Now position our DIV based on the DIV coordinates of our bounds
		this.div_.style.width = this.width_ + "px";
		this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
		this.div_.style.height = this.height_ + "px";
		this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
		this.div_.style.display = 'block';
	};
	/* Creates the DIV representing this InfoBox in the floatPane. If the panes
	* object, retrieved by calling getPanes, is null, remove the element from the
	* DOM. If the div exists, but its parent is not the floatPane, move the div
	* to the new pane.
	* Called from within draw. Alternatively, this can be called specifically on
	* a panes_changed event.
	*/
	InfoBox.prototype.createElement = function () {
		var panes = this.getPanes();
		var div = this.div_;
		if (!div) {
			// This does not handle changing panes. You can set the map to be null and
			// then reset the map to move the div.
			div = this.div_ = document.createElement("div");
				div.className = "infobox"
			var contentDiv = document.createElement("div");
				contentDiv.className = "content"
				contentDiv.innerHTML = this.content;
			var closeBox = document.createElement("div");
				closeBox.className = "closecstm";
				closeBox.innerHTML = "x";
			div.appendChild(closeBox);

			function removeInfoBox(ib) {
				return function () {
					ib.setMap(null);
				};
			}
			google.maps.event.addDomListener(closeBox, 'click', removeInfoBox(this));
			div.appendChild(contentDiv);
			div.style.display = 'none';
			panes.floatPane.appendChild(div);
			this.panMap();
		} else if (div.parentNode != panes.floatPane) {
			// The panes have changed. Move the div.
			div.parentNode.removeChild(div);
			panes.floatPane.appendChild(div);
		} else {
			// The panes have not changed, so no need to create or move the div.
		}
	}
	/* Pan the map to fit the InfoBox.
	*/
	InfoBox.prototype.panMap = function () {
		// if we go beyond map, pan map
		var map = this.map_;
		var bounds = map.getBounds();
		if (!bounds) return;
		// The position of the infowindow
		var position = this.latlng_;
		// The dimension of the infowindow
		var iwWidth = this.width_;
		var iwHeight = this.height_;
		// The offset position of the infowindow
		var iwOffsetX = this.offsetHorizontal_;
		var iwOffsetY = this.offsetVertical_;
		// Padding on the infowindow
		var padX = 40;
		var padY = 40;
		// The degrees per pixel
		var mapDiv = map.getDiv();
		var mapWidth = mapDiv.offsetWidth;
		var mapHeight = mapDiv.offsetHeight;
		var boundsSpan = bounds.toSpan();
		var longSpan = boundsSpan.lng();
		var latSpan = boundsSpan.lat();
		var degPixelX = longSpan / mapWidth;
		var degPixelY = latSpan / mapHeight;
		// The bounds of the map
		var mapWestLng = bounds.getSouthWest().lng();
		var mapEastLng = bounds.getNorthEast().lng();
		var mapNorthLat = bounds.getNorthEast().lat();
		var mapSouthLat = bounds.getSouthWest().lat();
		// The bounds of the infowindow
		var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
		var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
		var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
		var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;
		// calculate center shift
		var shiftLng =
			(iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
			(iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
		var shiftLat =
			(iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
			(iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);
		// The center of the map
		var center = map.getCenter();
		// The new map center
		var centerX = center.lng() - shiftLng;
		var centerY = center.lat() - shiftLat;
		// center the map to the new shifted center
		map.setCenter(new google.maps.LatLng(centerY, centerX));
		// Remove the listener after panning is complete.
		google.maps.event.removeListener(this.boundsChangedListener_);
		this.boundsChangedListener_ = null;
	};






	$scope.openmodal = function (ProjectId) {
		$scope.biddamount = "";
		$scope.biddesr = "";
		document.getElementById("errormsgg").innerHTML = "";
		localStorage.setItem("ApplyProjectId",ProjectId);
		$('#ProjectApply').modal('show');
	}

	$scope.AdvanceSearch = function () {
		$("#DefaultSearch .input-group, .input-groupp, #DefaultSearch .bootstrap-select").css('border', 'none');
		$("#DefaultSearch").slideUp('fast');
		document.getElementById('AdvanceSearch').style.display = "block";
	}

	$scope.BacktoDefaultSearch = function () {
		$("#AdvanceSearch .cstm, #AdvanceSearch .bootstrap-select").css('border', 'none');
		$("#AdvanceSearch").slideUp('fast');
		document.getElementById('DefaultSearch').style.display = "block";
	}

	//call when click on job title in job list
	$scope.getJobID = function (id) {
		$('.cssload-container').delay(300).show();
		localStorage.setItem('JobID', id);
		$location.path("\JobDetails");
	}

	//call when click on applyjob button
	$scope.applytojob = function (id) {
		if (localStorage.getItem('UserAccountID') != null) {
			if (localStorage.getItem("IsRegistered") != "No") {
				$('.cssload-container').delay(300).show();
				$scope.jobApplytDateTime = new Date();
				$scope.JobSeekerID = localStorage.getItem('UserAccountID');
				//alert(id );
				$http.post("iComissionAdmin/PHP/Save_JobSeeker_ApplytoJob.php", {
					'JobID': id,
					'JobSeekerID': $scope.JobSeekerID,
					'ApplyDate': $scope.jobApplytDateTime,

				}).then(function (response) {
					console.log(response.data.EmailId);
					if (response.data.data == false) {
						swal({
							title: "Already Applied!",
							text: "You have already applied for this job post",
							type: "info"
						});
					}
					else {
						swal({
							title: "Applied Successfully!",
							text: "You have successfully applied for this job post",
							type: "success"
						});
					}
					$('.cssload-container').delay(300).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				$location.path('JobSeekersProfile');
			}
		}
		else {
			$location.path('Login');
		}
	}

	//call when click on project title in project list
	$scope.getProjectID = function (id) {
		
		$('.cssload-container').delay(300).show();
		localStorage.setItem('ProjectID', id);
		$location.path("\ProjectDetails");
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
				//alert(id );
				$http.post("iComissionAdmin/PHP/Save_ProjectSeeker_ApplytoJob.php", {
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

	//call when click on search button
	$scope.serch_job = function () 
	{
		alert("serch_job");
		//alert($("#Serach_joblocation").val());
		localStorage.setItem("mapRenderProps","1");

		/*change--1*/
			if($("#Serach_joblocation").val() != "")
			{
				localStorage.setItem("joblocation", $("#Serach_joblocation").val());
				localStorage.setItem("Experience", document.getElementById("Experience").value);
				localStorage.setItem("Salary", document.getElementById("Salary").value);
				localStorage.setItem("keywords", $scope.Keywords);
				localStorage.setItem("searchtype", "Default");
				$scope.GetSearchedJobs();
				//$location.path("\JobSearch");
			}
			else
			{
				localStorage.setItem("joblocation",'null');
				localStorage.setItem("Experience", document.getElementById("Experience").value);
				localStorage.setItem("Salary", document.getElementById("Salary").value);
				localStorage.setItem("keywords", $scope.Keywords);
				localStorage.setItem("searchtype", "Default");
				$scope.GetSearchedJobs();
				//$location.path("\JobSearch");
			}
			
		/*change--1*/

		/* commnet--1 
			if ($scope.Keywords != "" && $("#Serach_joblocation").val() != "" && document.getElementById("Experience").value != "Exp in Year" && document.getElementById("Salary").value != "Salary in Lakh") 
			{
				$('.cssload-container').delay(300).show();
				if ($("#Serach_joblocation").val() != null) {
					localStorage.setItem("joblocation", $("#Serach_joblocation").val());
				}
				else {
					localStorage.setItem("joblocation", $("#Serach_joblocation").val());
				}
				localStorage.setItem("Experience", document.getElementById("Experience").value);
				localStorage.setItem("Salary", document.getElementById("Salary").value);
				localStorage.setItem("keywords", $scope.Keywords);
				localStorage.setItem("searchtype", "Default");

				$location.path("\JobSearch");
			}
			else {
				// $("#DefaultSearch .input-group, #DefaultSearch .input-groupp").css('border', '1px solid #8a1f11');
				// $(".SearchJob").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);

				
					var x = document.getElementById("snackbar")
					x.innerHTML = "Please enter all data";
					x.className = "show";
					setTimeout(function () {
						x.className = x.className.replace("show", "");
					}, 3000);
				
			}
		comment--1*/
	}

	//call when click on advance search button
	$scope.Advanceserch_job = function () {
		if ($scope.KeywordsAd != "" && ($("#jobindustry").val() != "" || $.trim($("#jobindustry").val()) != "Industry") && $("#joblocation").val() != "" && document.getElementById("ExperienceAd").value != "Exp in Year" && document.getElementById("SalaryAd").value != "Salary in Lakh") {
			$('.cssload-container').delay(300).show();
			if ($("#joblocation").val() != null) {
				localStorage.setItem("joblocationAd", $("#joblocation").val());
			}
			else {
				localStorage.setItem("joblocationAd", $("#joblocation").val());
			}
			if ($("#jobindustry").val() != null) {
				localStorage.setItem("jobindustryAd", $.trim($("#jobindustry").val()));
			}
			else {
				localStorage.setItem("jobindustryAd", $("#jobindustry").val());
			}

			localStorage.setItem("ExperienceAd", document.getElementById("ExperienceAd").value);
			localStorage.setItem("SalaryAd", document.getElementById("SalaryAd").value);
			localStorage.setItem("KeywordsAd", $scope.KeywordsAd);
			localStorage.setItem("searchtype", "Advanced");

			$location.path("\JobSearch");
		}
		else {
			$("#AdvanceSearch .cstm, #AdvanceSearch .bootstrap-select").css('border', '1px solid #8a1f11');
			$(".SearchJob").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
		}
	}

	//call when click on create alert button
	$scope.create_JobAlert = function (isValid) {

		if (isValid) {
			if ($("#alertpreference").val() != "Select alert Preference") {
				$http.post("iComissionAdmin/PHP/Save_JobSeeker_Alert.php", {
					'UserID': localStorage.getItem('UserAccountID'),
					'JobalertName': $scope.JobalertName,
					'skills': $scope.skills,
					'location': $scope.location,
					'MinExp': $scope.MinExp,
					'MaxExp': $scope.MaxExp,
					'salary': $scope.salary,
					'industry': $scope.industry,
					'preference': $("#alertpreference").val(),
				}).then(function (response) {
					if (response.data != "error") {
						$("#CreateJobAlert").slideUp('fast');
						document.getElementById('div_success').style.display = "block";
					}
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				document.getElementById("errormsg").innerHTML = "Please select alert preference";
			}
		}
		else {
			document.getElementById("errormsg").innerHTML = "Please enter all data";
		}
	}


	/* Searching assignment */
		$scope.search_Project = function () 
		{
			localStorage.setItem("mapRenderProps","2");
			if($("#Serach_joblocation").val() != "")
			{
				var budget = $.trim($("#Budget").val());
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

				localStorage.setItem("ProjKeywords", $scope.Keywords);
				localStorage.setItem("Projlocation", $.trim($("#Serach_joblocation").val()));
				localStorage.setItem("ProjectType", $.trim($("#ProjectType").val()));
				localStorage.setItem("ProjMinBudget", MinBudget);
				localStorage.setItem("ProjMaxBudget", MaxBudget);

				//$location.path("\ProjectSearch");
				$scope.GetSearchedProject();
				
			}
			else
			{
				var budget = $.trim($("#Budget").val());
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

				localStorage.setItem("ProjKeywords", $scope.Keywords);
				localStorage.setItem("Projlocation", 'null');
				localStorage.setItem("ProjectType", $.trim($("#ProjectType").val()));
				localStorage.setItem("ProjMinBudget", MinBudget);
				localStorage.setItem("ProjMaxBudget", MaxBudget);
				//$location.path("\ProjectSearch");
				$scope.GetSearchedProject();
			}

			/*
				if ($scope.Keywords != "" && $.trim($("#Budget").val()) != "Bidding Amount" && ($("#ProjectType").val() != "" || $.trim($("#ProjectType").val()) != "Assignment Type") && ($("#Serach_joblocation").val() != "")) 
				{
					var budget = $.trim($("#Budget").val());
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

					localStorage.setItem("ProjKeywords", $scope.Keywords);
					localStorage.setItem("Projlocation", $.trim($("#Serach_joblocation").val()));
					localStorage.setItem("ProjectType", $.trim($("#ProjectType").val()));
					localStorage.setItem("ProjMinBudget", MinBudget);
					localStorage.setItem("ProjMaxBudget", MaxBudget);

					$location.path("\ProjectSearch");
				}
				else 
				{
					// $("#projectSearch .input-group, #projectSearch .input-groupp").css('border', '1px solid #8a1f11');
					// $(".SearchProj").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
					var x = document.getElementById("snackbar")
					x.innerHTML = "Please enter all data";
					x.className = "show";
					setTimeout(function () {
						x.className = x.className.replace("show", "");
					}, 3000);
				}
			*/
		}
		$scope.GetSearchedProject = function () 
		{
			
					var allStates = "";
					$http.get('iComissionAdmin/PHP/Get_Assignments.php', {
						cache: true
					}).then(function (response) {
						console.log(response.data);
						$scope.items1 = response.data;
						
						var allStatescd = response.data;
			
					});
			
					$http.post("iComissionAdmin/PHP/Get_ProjectLocation.php").then(function (response) {
						$scope.ProjectTypeList = response.data.ProjectType;
						$scope.ProjectLocationList = response.data.ProjectLocation;
			
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
			
					if(localStorage.getItem("Projlocation")!='null')
					{
						$('.selectpicker').selectpicker();
						
								$http.post("iComissionAdmin/PHP/Get_SearchProject.php", {
									"ProjectName": localStorage.getItem("ProjKeywords"),
									"ProjectLocation": localStorage.getItem("Projlocation"),
									"ProjectType": localStorage.getItem("ProjectType"),
									"MinBudget": localStorage.getItem("ProjMinBudget"),
									"MaxBudget": localStorage.getItem("ProjMaxBudget"),
								}).then(function (response) {
						
									console.log(response.data);
									if (response.data != "error") {
										$scope.ProjectList = response.data;
										$scope.loadProjectMap();
										$('.selectpicker').selectpicker('deselectAll');;
									}
									else 
									{
										if(localStorage.getItem("UserRoleName")==null)
										{
											swal({
												title: "",
												text: "Oppss..No Assignment availabe.Please  Register as  Assignment seeker  to get alert of recommended  assignments  in your area",
												type: "info",
												
											});
											document.getElementById("Serach_joblocation").value='';
											$scope.ProjectList = "";
											$("#Assignment_View").hide();
										}
										else if(localStorage.getItem("UserRoleName")=="AssignmentSeeker")		
										{
											swal({
												title: "",
												text: "Oppss..No Assignments availabe.",
												type: "info",
												
											});
											document.getElementById("Serach_joblocation").value='';
											$scope.ProjectList = "";
											$("#Assignment_View").hide();
										}
										else
										{
											swal({
												title: "",
												text: "Oppss..No Assignment availabe.",
												type: "info",
												
											});
											document.getElementById("Serach_joblocation").value='';
											$scope.ProjectList = "";
											$("#Assignment_View").hide();
										}
									}
									$('.cssload-container').delay(300).fadeOut('slow');
								}, function (error) {
									console.log("Sorry! Data Couldn't be inserted!");
									console.log(error);
								});
					}
					else
					{
						$('.selectpicker').selectpicker();
						
								$http.post("iComissionAdmin/PHP/Get_SearchProject.php", {
									"ProjectName": localStorage.getItem("ProjKeywords"),
									"ProjectLocation": localStorage.getItem("GeoLocation"),
									"ProjectType": localStorage.getItem("ProjectType"),
									"MinBudget": localStorage.getItem("ProjMinBudget"),
									"MaxBudget": localStorage.getItem("ProjMaxBudget"),
								}).then(function (response) {
						
									console.log(response.data);
									if (response.data != "error") {
										$scope.ProjectList = response.data;
										$scope.loadProjectMap();
										$('.selectpicker').selectpicker('deselectAll');;
									}
									else 
									{
										if(localStorage.getItem("UserRoleName")==null)
										{
											swal({
												title: "",
												text: "Oppss..No Assignment availabe.Please  Register as  Assignment seeker  to get alert of recommended assignments  in your area",
												type: "info",
												
											});
											document.getElementById("Serach_joblocation").value='';
											$scope.ProjectList = "";
											$("#Assignment_View").hide();
										}
										else if(localStorage.getItem("UserRoleName")=="AssignmentSeeker")		
										{
											swal({
												title: "",
												text: "Oppss..No Assignments availabe.",
												type: "info",
												
											});
											document.getElementById("Serach_joblocation").value='';
											$scope.ProjectList = "";
											$("#Assignment_View").hide();
										}
										else
										{
											swal({
												title: "",
												text: "Oppss..No Assignment availabe.",
												type: "info",
												
											});
											document.getElementById("Serach_joblocation").value='';
											$scope.ProjectList = "";
											$("#Assignment_View").hide();
										}
									}
									$('.cssload-container').delay(300).fadeOut('slow');
								}, function (error) {
									console.log("Sorry! Data Couldn't be inserted!");
									console.log(error);
								});
					}
					/*
						$('.selectpicker').selectpicker();
			
						$http.post("iComissionAdmin/PHP/Get_SearchProject.php", {
							"ProjectName": localStorage.getItem("ProjKeywords"),
							"ProjectLocation": localStorage.getItem("Projlocation"),
							"ProjectType": localStorage.getItem("ProjectType"),
							"MinBudget": localStorage.getItem("ProjMinBudget"),
							"MaxBudget": localStorage.getItem("ProjMaxBudget"),
						}).then(function (response) {
			
							console.log(response.data);
							if (response.data != "error") {
								$scope.ProjectList = response.data;
								$('.selectpicker').selectpicker('deselectAll');;
							}
							else {
								$scope.ProjectList = "";
							}
							$('.cssload-container').delay(300).fadeOut('slow');
						}, function (error) {
							console.log("Sorry! Data Couldn't be inserted!");
							console.log(error);
						});
					*/
		}
	/* Searching assignment */
});

iComissionapp.controller('JobSearchController', function ($scope, $http, $location, $compile) 
{
	
		$scope.GetSearchedJobs = function () 
		{
	
			var allStates = "";
			$http.get('iComissionAdmin/PHP/Get_skills.php', {
				cache: true
			}).then(function (response) {
				console.log(response.data);
				$scope.items = response.data;
				
				var allStatesc = response.data;
	
			});
	
			$http.post("iComissionAdmin/PHP/Get_JobLocation.php").then(function (response) {
				$scope.JobLocationList = response.data.JobLocation;
				$scope.JobIndustryList = response.data.JobIndustry;
	
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	
			if (localStorage.getItem("searchtype") == "Default") 
			{
				// $scope.JobLocation = localStorage.getItem("joblocation");
				// document.getElementById("Experience").value = localStorage.getItem("Experience");
				// document.getElementById("Salary").value = localStorage.getItem("Salary");
				// $scope.Keywords = localStorage.getItem("keywords");
				if(localStorage.getItem("joblocation")!='null')
				{
					$('.selectpicker').selectpicker();
					
								$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
									'joblocation': localStorage.getItem("joblocation"),
									'Experience': localStorage.getItem("Experience"),
									'Salary': localStorage.getItem("Salary"),
									'keywords': localStorage.getItem("keywords"),
									'searchtype': localStorage.getItem("searchtype")
								}).then(function (response) {
									console.log(response.data);
									if (response.data != "error") {
										$scope.All_JobList = response.data;
										$scope.All_JobList_Map = response.data;
										$scope.length = response.data.length;
										$scope.loadMap();
										$('.selectpicker').selectpicker('deselectAll');
									}
									else 
									{
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
									$('.cssload-container').delay(300).fadeOut('slow');
								}, function (error) {
									console.log("Sorry! Data Couldn't be inserted!");
									console.log(error);
								});
				}
				else
				{
					$('.selectpicker').selectpicker();
					
								$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
									'joblocation': localStorage.getItem("GeoLocation"),
									'Experience': localStorage.getItem("Experience"),
									'Salary': localStorage.getItem("Salary"),
									'keywords': localStorage.getItem("keywords"),
									'searchtype': localStorage.getItem("searchtype")
								}).then(function (response) {
									console.log(response.data);
									if (response.data != "error") {
										$scope.All_JobList = response.data;
										$scope.All_JobList_Map = response.data;
										$scope.length = response.data.length;
										$scope.loadMap();
										$('.selectpicker').selectpicker('deselectAll');
									}
									else {
										$scope.All_JobList = "";
										$("#job_view").hide();
									}
									$('.cssload-container').delay(300).fadeOut('slow');
								}, function (error) {
									console.log("Sorry! Data Couldn't be inserted!");
									console.log(error);
								});
				}
				/*Comment-2
						$('.selectpicker').selectpicker();
	
						$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
							'joblocation': localStorage.getItem("joblocation"),
							'Experience': localStorage.getItem("Experience"),
							'Salary': localStorage.getItem("Salary"),
							'keywords': localStorage.getItem("keywords"),
							'searchtype': localStorage.getItem("searchtype")
						}).then(function (response) {
							console.log(response.data);
							if (response.data != "error") {
								$scope.All_JobList = response.data;
								$scope.All_JobList_Map = response.data;
								$scope.length = response.data.length;
								$scope.loadMap();
								$('.selectpicker').selectpicker('deselectAll');
							}
							else {
								$scope.All_JobList = "";
								$("#job_view").hide();
							}
							$('.cssload-container').delay(300).fadeOut('slow');
						}, function (error) {
							console.log("Sorry! Data Couldn't be inserted!");
							console.log(error);
						});
				*/
	
			}
			else if (localStorage.getItem("searchtype") == "Advanced") {
				$("#DefaultSearch").slideUp('fast');
				document.getElementById('AdvanceSearch').style.display = "block";
	
				// $scope.JobLocatioAd = localStorage.getItem("joblocationAd");
				// document.getElementById("ExperienceAd").value = localStorage.getItem("ExperienceAd");
				// document.getElementById("SalaryAd").value = localStorage.getItem("SalaryAd");
				// document.getElementById("jobindustry").value = localStorage.getItem("jobindustryAd");
				// $scope.KeywordsAd = localStorage.getItem("KeywordsAd");
				$('.selectpicker').selectpicker();
	
				$http.post("iComissionAdmin/PHP/Get_SearchJob.php", {
					'joblocation': localStorage.getItem("joblocationAd"),
					'jobindustry': localStorage.getItem("jobindustryAd"),
					'Experience': localStorage.getItem("ExperienceAd"),
					'Salary': localStorage.getItem("SalaryAd"),
					'keywords': localStorage.getItem("KeywordsAd"),
					'searchtype': localStorage.getItem("searchtype")
				}).then(function (response) {
					console.log(response.data);
					if (response.data != "error") {
						$scope.All_JobList = response.data;
						$('.selectpicker').selectpicker('deselectAll');
					}
					else {
						$scope.All_JobList = "";
					}
					$('.cssload-container').delay(300).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		}
		var marker;
		var markers = [];
		$scope.loadMap = function () {
			var mapOptions = {
				zoom: 10,
				mapTypeControlOptions: {
					mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
						'styled_map']
				},
			}
			var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
			var JobsData = [];
	
			for (var i = 0; i < $scope.length; i++) {
				JobsData[i] = [$scope.All_JobList_Map[i].Lat, $scope.All_JobList_Map[i].Lng, $scope.All_JobList_Map[i].CompanyName, $scope.All_JobList_Map[i].JobTitle, $scope.All_JobList_Map[i].CompanyLogo, $scope.All_JobList_Map[i].MinSal, $scope.All_JobList_Map[i].MaxSal, $scope.All_JobList_Map[i].JobPostsID];
			}
	
			var styledMapType = new google.maps.StyledMapType(
				[
					{
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f5f5f5"
							}
						]
					},
					{
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#2f2a2c"
							}
						]
					},
					{
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"color": "#f5f5f5"
							}
						]
					},
					{
						"featureType": "administrative.land_parcel",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#bdbdbd"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#eeeeee"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#757575"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#e5e5e5"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#9e9e9e"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#fba86f"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#757575"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#dadada"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#2f2a2c"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#9e9e9e"
							}
						]
					},
					{
						"featureType": "transit.line",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#e5e5e5"
							}
						]
					},
					{
						"featureType": "transit.station",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#eeeeee"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#bbdefb"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#9e9e9e"
							}
						]
					}
				],
				{ name: 'Styled Map' });
	
			map.mapTypes.set('styled_map', styledMapType);
			map.setMapTypeId('styled_map');
	
			google.maps.event.trigger(map, 'resize');
	
			var bounds = new google.maps.LatLngBounds();
	
	
			var marker, i;
			var infowindow = new google.maps.InfoWindow();
	
	
			google.maps.event.addListener(map, 'click', function () {
				infowindow.close();
			});
	
	
			for (i = 0; i < JobsData.length; i++) {
	
				var p = JobsData[i];
				var latlng = new google.maps.LatLng(p[0], p[1]);
				bounds.extend(latlng);
	
				marker = new google.maps.Marker({
					position: latlng,
					map: map,
					CompanyName: p[2],
					JobTitle: p[3],
					CompanyLogo: p[4],
					MinSal: p[5],
					MaxSal: p[6],
					JobPostsID: p[7],
					animation: google.maps.Animation.DROP,
					icon: 'images/pin.png',
				});
	
				google.maps.event.addListener(marker, 'click', (function (marker, i) {
					return function () {
						$scope.JobPostsID = this.JobPostsID;
						var div = document.createElement('DIV');
	
						div.innerHTML = '<div class="col-sm-12" style="width:250px; padding: 5px !important">' +
							'<div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0px !important">' +
							'<div class="post-media">' +
							'<a href>' +
							'<img src="iComissionAdmin/php/' + this.CompanyLogo + '" alt="" class="img-responsive img-thumbnail" style="width: 60px;height: 60px;">' +
							'</a>' +
							'</div>' +
							'</div>' +
	
							'<div class="col-md-9 col-sm-9 col-xs-9" style="padding-left: 10px !important;padding-right: 0px;">' +
							'<h5 style="margin: 5px 0 !important;">' +
							'<a title="">' + this.CompanyName + '</a>' +
							'</h5>' +
							'<small>' +
							'<span>Website :' +
							'<a href>' + this.JobTitle + '</a>' +
							'</span>' +
							'</small>' +
							'<br/><small>' +
							'<span class="text-danger" style="color: #ff6700 !important"><b>Salary: $' + this.MinSal + ' - $' + this.MaxSal + '</b>' +
							'<a href class="text-danger pull-right" ng-click="getJobID(' + this.JobPostsID + ')" style="color: #2f2a2c !important;padding-right: 5px;"><b>View Jobs</b></a>' +
							'</span>' +
							'</small>' +
							'</div>' +
							'</div>';
	
						$compile(div)($scope);
	
						infowindow.setContent(div);
						// infowindow.setContent(this.title);
						infowindow.open(map, marker);
					}
				})(marker, i));
	
				google.maps.event.addListener(infowindow, 'domready', function () {
	
					// Reference to the DIV that wraps the bottom of infowindow
					var iwOuter = $('.gm-style-iw');
	
					/* Since this div is in a position prior to .gm-div style-iw.
					 * We use jQuery and create a iwBackground variable,
					 * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
					*/
					var iwBackground = iwOuter.prev();
	
					// Removes background shadow DIV
					iwBackground.children(':nth-child(2)').css({ 'display': 'none' });
	
					// Removes white background DIV
					iwBackground.children(':nth-child(4)').css({ 'display': 'none' });
	
					// Moves the infowindow 115px to the right.
					iwOuter.parent().parent().css({ left: '65px' });
	
					// Moves the shadow of the arrow 76px to the left margin.
					iwBackground.children(':nth-child(1)').attr('style', function (i, s) { return s + 'left: 76px !important;' });
	
					// Moves the arrow 76px to the left margin.
					iwBackground.children(':nth-child(3)').attr('style', function (i, s) { return s + 'left: 76px !important;' });
	
					// Changes the desired tail shadow color.
					iwBackground.children(':nth-child(3)').find('div').children().css({ 'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index': '1' });
	
					// Reference to the div that groups the close button elements.
					var iwCloseBtn = iwOuter.next();
	
					// Apply the desired effect to the close button
					iwCloseBtn.css({ opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9' });
	
					// If the content of infowindow not exceed the set maximum height, then the gradient is removed.
					if ($('.iw-content').height() < 140) {
						$('.iw-bottom-gradient').css({ display: 'none' });
					}
	
					// The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
					iwCloseBtn.mouseout(function () {
						$(this).css({ opacity: '1' });
					});
				});
	
	
				markers.push(marker);
			}
			map.fitBounds(bounds);
		}
	
		$scope.getJobID = function (id) {
			$('.cssload-container').delay(300).show();
			localStorage.setItem('JobID', id);
			$location.path("\JobDetails");
		}
	
		$scope.myClick = function (id) {
			google.maps.event.trigger(markers[id], 'click');
		}
	
		$scope.GetJobs = function (ids) {
	
			document.getElementById('loadercstm').style.display = "block";
			var $pCont = $("#panel-content");
			$pCont.stop().animate({ width: 550 }, 700);
			$http.post("iComissionAdmin/PHP/Get_JobList_Map.php", {
				'JobPostsId': $scope.JobPostsID
			}).then(function (response) {
				console.log(response.data);
				$scope.All_JobList_Company = response.data;
	
				// document.getElementById('CompanyJob').style.display = "block";
				document.getElementById('loadercstm').style.display = "none";
	
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	
		}
	
		$scope.minlist = function () {
			if ($("#mapdiv").is(":visible")) {
				$("#jobdiv").hide();
				$("#mapdiv").removeClass("col-md-6 col-sm-12 col-xs-12").addClass("col-md-12 col-sm-12 col-xs-12");
				$('#btnmin').hide();
				$('#btnmin1').hide();
				$('#btnmax').show();
			}
			else {
				$("#jobdivv").removeClass("col-md-12 col-sm-12 col-xs-12").addClass("col-md-6 col-sm-12 col-xs-12");
				$("#mapdiv").show();
				$('#btnmin').show();
				$('#btnmin1').show();
				$('#btnmax').hide();
			}
			$scope.loadMap();
		}
	
		$scope.maxlist = function () {
			$("#jobdiv").show();
			$('#btnmin').show();
			$('#btnmin1').show();
			$('#btnmax').hide();
			$("#mapdiv").removeClass("col-md-12 col-sm-12 col-xs-12").addClass("col-md-6 col-sm-12 col-xs-12");
			$scope.loadMap();
		}
	
		$scope.minmap = function () {
			$("#mapdiv").hide();
			$('#btnmin1').hide();
			$('#btnmax1').show();
			$("#jobdivv").removeClass("col-md-6 col-sm-12 col-xs-12").addClass("col-md-12 col-sm-12 col-xs-12");
			$scope.loadMap();
		}
	
		$scope.close = function () {
			document.getElementById('loadercstm').style.display = "block";
			var $pCont = $("#panel-content");
			$pCont.stop().animate({ width: 0 }, 700);
		}
	
		$scope.MapView = function () {
			$("#job_view").slideUp('slow');
			document.getElementById("map_canvas").style.display = "block";
			$scope.loadMap();
		}
		$scope.ListView = function () {
			$("#map_canvas").slideUp('slow');
			document.getElementById("job_view").style.display = "block";
		}
	
		$scope.serch_job = function () {
			if ($scope.Keywords != "" && $("#Serach_joblocation").val() != "" && document.getElementById("Experience").value != "Exp in Year" && document.getElementById("Salary").value != "Salary in Lakh") {
				$('.cssload-container').delay(300).show();
				if ($("#Serach_joblocation").val() != null) {
					localStorage.setItem("joblocation", $("#Serach_joblocation").val());
				}
				else {
					localStorage.setItem("joblocation", $("#Serach_joblocation").val());
				}
				localStorage.setItem("Experience", document.getElementById("Experience").value);
				localStorage.setItem("Salary", document.getElementById("Salary").value);
				localStorage.setItem("searchtype", "Default");
				$scope.GetSearchedJobs();
			}
			else {
				$("#DefaultSearch .input-group, .input-groupp").css('border', '1px solid #8a1f11');
				$(".SearchJob").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
			}
		}
	
		$scope.Advanceserch_job = function () {
			if ($scope.KeywordsAd != "" && ($("#jobindustry").val() != "" || $.trim($("#jobindustry").val()) != "Industry") && $("#joblocation").val() != "" && document.getElementById("ExperienceAd").value != "Exp in Year" && document.getElementById("SalaryAd").value != "Salary in Lakh") {
				$('.cssload-container').delay(300).show();
				if ($("#joblocation").val() != null) {
					localStorage.setItem("joblocationAd", $("#joblocation").val());
				}
				else {
					localStorage.setItem("joblocationAd", $("#joblocation").val());
				}
				if ($("#jobindustry").val() != null) {
					localStorage.setItem("jobindustryAd", $.trim($("#jobindustry").val()));
				}
				else {
					localStorage.setItem("jobindustryAd", $("#jobindustry").val());
				}
				localStorage.setItem("ExperienceAd", document.getElementById("ExperienceAd").value);
				localStorage.setItem("SalaryAd", document.getElementById("SalaryAd").value);
				localStorage.setItem("KeywordsAd", $scope.KeywordsAd);
				localStorage.setItem("searchtype", "Advanced");
				$scope.GetSearchedJobs();
			}
			else {
				$("#AdvanceSearch .cstm, #AdvanceSearch .bootstrap-select").css('border', '1px solid #8a1f11');
				$(".SearchJob").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
			}
		}
	
		$scope.AdvanceSearch = function () {
			$("#DefaultSearch .input-group, .input-groupp #DefaultSearch .bootstrap-select").css('border', 'none');
			$("#DefaultSearch").slideUp('fast');
			document.getElementById('AdvanceSearch').style.display = "block";
	
		}
	
		$scope.DefaultSearch = function () {
			$("#AdvanceSearch .cstm, #AdvanceSearch .bootstrap-select").css('border', 'none');
			$("#AdvanceSearch").slideUp('fast');
			document.getElementById('DefaultSearch').style.display = "block";
		}
	
		$scope.getJobID = function (id) {
			$('.cssload-container').delay(300).show();
			localStorage.setItem('JobID', id);
			$location.path("\JobDetails");
		}
	
		$scope.applytojob = function (id) {
			if (localStorage.getItem('UserAccountID') != null) {
				if (localStorage.getItem("IsRegistered") != "No") {
					$('.cssload-container').delay(300).show();
					$scope.jobApplytDateTime = new Date();
					$scope.JobSeekerID = localStorage.getItem('UserAccountID');
					//alert(id );
					$http.post("iComissionAdmin/PHP/Save_JobSeeker_ApplytoJob.php", {
						'JobID': id,
						'JobSeekerID': $scope.JobSeekerID,
						'ApplyDate': $scope.jobApplytDateTime,
	
					}).then(function (response) {
						console.log(response.data);
	
						if (response.data.data == false) {
							swal({
								title: "Already Applied!",
								text: "You have already applied for this job post",
								type: "info"
							});
						}
						else {
							swal({
								title: "Applied Successfully!",
								text: "You have successfully applied for this job post",
								type: "success"
							});
						}
						$('.cssload-container').delay(300).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}
				else {
					$location.path('JobSeekersProfile');
				}
			}
			else {
				$location.path('Login');
			}
		}
});



iComissionapp.controller('ProjectSearchController', function ($scope, $http, $location) {

	$scope.GetSearchedProject = function () {
		
				var allStates = "";
				$http.get('iComissionAdmin/PHP/Get_Assignments.php', {
					cache: true
				}).then(function (response) {
					console.log(response.data);
					$scope.items1 = response.data;
					
					var allStatescd = response.data;
		
				});
		
				$http.post("iComissionAdmin/PHP/Get_ProjectLocation.php").then(function (response) {
					$scope.ProjectTypeList = response.data.ProjectType;
					$scope.ProjectLocationList = response.data.ProjectLocation;
		
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
		
				if(localStorage.getItem("Projlocation")!='null')
				{
					$('.selectpicker').selectpicker();
					
							$http.post("iComissionAdmin/PHP/Get_SearchProject.php", {
								"ProjectName": localStorage.getItem("ProjKeywords"),
								"ProjectLocation": localStorage.getItem("Projlocation"),
								"ProjectType": localStorage.getItem("ProjectType"),
								"MinBudget": localStorage.getItem("ProjMinBudget"),
								"MaxBudget": localStorage.getItem("ProjMaxBudget"),
							}).then(function (response) {
					
								console.log(response.data);
								if (response.data != "error") {
									$scope.ProjectList = response.data;
									$('.selectpicker').selectpicker('deselectAll');;
								}
								else {
									$scope.ProjectList = "";
								}
								$('.cssload-container').delay(300).fadeOut('slow');
							}, function (error) {
								console.log("Sorry! Data Couldn't be inserted!");
								console.log(error);
							});
				}
				else
				{
					$('.selectpicker').selectpicker();
					
							$http.post("iComissionAdmin/PHP/Get_SearchProject.php", {
								"ProjectName": localStorage.getItem("ProjKeywords"),
								"ProjectLocation": localStorage.getItem("GeoLocation"),
								"ProjectType": localStorage.getItem("ProjectType"),
								"MinBudget": localStorage.getItem("ProjMinBudget"),
								"MaxBudget": localStorage.getItem("ProjMaxBudget"),
							}).then(function (response) {
					
								console.log(response.data);
								if (response.data != "error") {
									$scope.ProjectList = response.data;
									$('.selectpicker').selectpicker('deselectAll');;
								}
								else {
									$scope.ProjectList = "";
								}
								$('.cssload-container').delay(300).fadeOut('slow');
							}, function (error) {
								console.log("Sorry! Data Couldn't be inserted!");
								console.log(error);
							});
				}
				/*
					$('.selectpicker').selectpicker();
		
					$http.post("iComissionAdmin/PHP/Get_SearchProject.php", {
						"ProjectName": localStorage.getItem("ProjKeywords"),
						"ProjectLocation": localStorage.getItem("Projlocation"),
						"ProjectType": localStorage.getItem("ProjectType"),
						"MinBudget": localStorage.getItem("ProjMinBudget"),
						"MaxBudget": localStorage.getItem("ProjMaxBudget"),
					}).then(function (response) {
		
						console.log(response.data);
						if (response.data != "error") {
							$scope.ProjectList = response.data;
							$('.selectpicker').selectpicker('deselectAll');;
						}
						else {
							$scope.ProjectList = "";
						}
						$('.cssload-container').delay(300).fadeOut('slow');
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				*/
			}

	$scope.search_Project = function () {

		if ($scope.Keywords != "" && $.trim($("#Budget").val()) != "Bidding Amount" && ($("#ProjectType").val() != "" || $.trim($("#ProjectType").val()) != "Assignment Type") && ($("#Serach_Projlocation").val() != "" || $.trim($("#Serach_Projlocation").val()) != "Locations")) {
			var budget = $.trim($("#Budget").val());
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

			localStorage.setItem("ProjKeywords", $scope.Keywords);
			localStorage.setItem("Projlocation", $.trim($("#Serach_Projlocation").val()));
			localStorage.setItem("ProjectType", $.trim($("#ProjectType").val()));
			localStorage.setItem("ProjMinBudget", MinBudget);
			localStorage.setItem("ProjMaxBudget", MaxBudget);

			$scope.GetSearchedProject();
		}
		else {
			$("#DefaultSearch .input-group, .input-groupp").css('border', '1px solid #8a1f11');
			$(".SearchProj").effect("shake", { direction: "up", times: 4, distance: 5 }, 1000);
		}
	}

	$scope.getProjectID = function (id) {
		$('.cssload-container').delay(300).show();
		localStorage.setItem('ProjectID', id);
		$location.path("\ProjectDetails");
	}

	$scope.openmodal = function (ProjectId) {
		$scope.biddamount = "";
		$scope.biddesr = "";
		document.getElementById("errormsgg").innerHTML = "";
		localStorage.setItem("ApplyProjectId", ProjectId);
		$('#ProjectApply').modal('show');
	}

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
					//alert(id );
					$http.post("iComissionAdmin/PHP/Save_ProjectSeeker_ApplytoJob.php", {
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

//save Jobseekers Profile info 
iComissionapp.controller('JobSeekersProfileController', function ($scope, $route, $http, $route, $templateCache) 
{

	$scope.Check = function () {

		$scope.myImage = '';
		$scope.myCroppedImage = '';

		var handleFileSelect = function (evt) {
			var file = evt.currentTarget.files[0];
			var cropfilenm = evt.currentTarget.files[0].name;
			//alert(filename);
			$scope.cropfilenm = cropfilenm.substr((cropfilenm.lastIndexOf('.') + 1));
			var reader = new FileReader();
			reader.onload = function (evt) {
				$scope.$apply(function ($scope) {
					$scope.myImage = evt.target.result;
				});
			};
			reader.readAsDataURL(file);
			$(".cropArea").show();
		};


		angular.element(document.querySelector('#profileImg')).on('change', handleFileSelect);


		if (localStorage.getItem("IsRegistered") == "No") {
			swal({
				title: "Complete profile!",
				text: "Complete your profile to continue on ProcStart",
				type: "info"
			});
		}
		var id = localStorage.getItem('EndUserAccountID');
		$http.post("iComissionAdmin/PHP/Get_JobSeekerInfoFromUserInfo.php", {
			'JobSeekerID': id
		}).then(function (response) {
			console.log(response.data);
			$scope.name = response.data[0].FirstName;
			$('#Contact').val(response.data[0].ContactNo)
			$scope.emailid = response.data[0].UserName;
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});


		$http.post("iComissionAdmin/PHP/Get_SkillSet.php").then(function (response) {
			$scope.skills = response.data;
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		// var currentPageTemplate = $route.current.templateUrl;
		// $templateCache.remove(currentPageTemplate);
		// $route.reload();

		$('.cssload-container').delay(300).fadeOut('slow');
	}

	$scope.skip = function () {
		window.location.href = "Index.html";
	}

	$scope.SavejobseekerProfileinfo = function () {

		$('.cssload-container').delay(300).show();

		$scope.Expcount = document.getElementById("hidden_newexp").value;

		$scope.TotalExp_Year = [];
		$scope.TotalExp_Month = [];
		$scope.Salary = [];
		$scope.jobtitle = [];
		$scope.JobDescripion = [];
		$scope.companyname = [];
		$scope.Industry = [];
		$scope.Department = [];
		$scope.JobFromDate = [];
		$scope.JobToDate = [];

		for (var i = 0; i < $scope.Expcount; i++) {
			$scope.TotalExp_Year[i] = document.getElementById("expinyr_" + i).value.replace(/\s+/g, '');
			$scope.TotalExp_Month[i] = document.getElementById("expinmonth_" + i).value.replace(/\s+/g, '');
			$scope.Salary[i] = document.getElementById("Salary_" + i).value.replace(/\s+/g, '');
			$scope.jobtitle[i] = document.getElementById("jobtitle_" + i).value.replace(/\s+/g, '');
			$scope.JobDescripion[i] = document.getElementById("JobDescripion_" + i).value.replace(/\s+/g, '');
			$scope.companyname[i] = document.getElementById("companyname_" + i).value.replace(/\s+/g, '');
			$scope.Industry[i] = document.getElementById("Industry_" + i).value;
			$scope.Department[i] = document.getElementById("Department_" + i).value;
			$scope.JobFromDate[i] = document.getElementById("monthfrom_" + i).value.replace(/\s+/g, '') + "-" + document.getElementById("yearFrom_" + i).value.replace(/\s+/g, '');
			$scope.JobToDate[i] = document.getElementById("monthto_" + i).value.replace(/\s+/g, '') + "-" + document.getElementById("yearto_" + i).value.replace(/\s+/g, '');

		}

		console.log($scope.TotalExp_Year + $scope.TotalExp_Month);
		console.log($scope.Salary);
		console.log($scope.jobtitle);
		console.log($scope.JobDescripion);
		console.log($scope.companyname);
		console.log($scope.Industry);
		console.log($scope.Department);
		console.log($scope.JobFromDate);
		console.log($scope.JobToDate);



		$scope.skillcount = document.getElementById("hidden_newskill").value;
		$scope.skill = [];
		$scope.skillexp = [];
		for (var i = 0; i < $scope.skillcount; i++) {
			$scope.skill[i] = document.getElementById("skill_" + i).value.replace(/\s+/g, '');
			$scope.skillexp[i] = document.getElementById("skillexp_" + i).value.replace(/\s+/g, '');
		}

		console.log($scope.skill);

		//var count = 0;
		var FileData;
		var fileext;

		$scope.JobSeekerType = $('input[name="radioB4"]:checked').val();

		//get resume file
		var filename = document.getElementById("file_media").files[0].name;
		//alert(filename);
		fileext = filename.substr((filename.lastIndexOf('.') + 1));

		//alert(fileext);
		var file = document.getElementById("file_media").files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			var filedata = reader.result;

			FileData = filedata.substr(filedata.indexOf(',') + 1);
			getprofilepic();
		};
		reader.onerror = function (error) {
			//alert('Error: ', error);
		};
		var FileDataProfile;
		var fileext1 = $scope.cropfilenm;

		function getprofilepic() {
			// alert($scope.myCroppedImage);
			FileDataProfile = $scope.myCroppedImage
			FileDataProfile = FileDataProfile.substr(FileDataProfile.indexOf(',') + 1);
			// alert(FileDataProfile);
			//get resume file
			// var filename1 = document.getElementById("profileImg").files[0].name;
			// //alert(filename);
			// fileext1 = filename1.substr((filename1.lastIndexOf('.') + 1));

			// //alert(fileext);
			// var file1 = document.getElementById("profileImg").files[0];
			// var reader1 = new FileReader();
			// // reader1.readAsDataURL(file1);
			// reader1.onload = function () {
			// 	var filedata1 = $scope.myCroppedImage;
			// 	alert(filedata1);
			// 	FileDataProfile = filedata1.substr(filedata1.indexOf(',') + 1);
			// 	saveProfileInfo();
			// };
			// reader1.onerror = function (error) {
			// 	//alert('Error: ', error);
			// };
			saveProfileInfo();
		}

		function saveProfileInfo() {

			if ($scope.JobSeekerType == 'Experienced') {
				$http.post("iComissionAdmin/PHP/Save_JobSeeker_ExperiencedProfileInfo.php", {
					'FirstName': $scope.name,
					'DOB': $scope.dob,
					'Address': $scope.fulladdr,
					'Location': $scope.location,
					'Gender': 'NA',
					'Contact': $('#Contact').val(),
					'Passportno': $scope.Passportno,
					'Email': $scope.emailid,
					'HighestQualification': document.getElementById("HighestQualification").value.replace(/\s+/g, ''),
					'InstituteName': $scope.InstituteName,
					'PassoutYear': document.getElementById("PassoutYr").value.replace(/\s+/g, ''),
					'CourseType': $('input[name="radioB1"]:checked').val(),
					'CPI': $scope.CPI,
					'JobSeekerType': $scope.JobSeekerType,
					'TotalExp_Year': $scope.TotalExp_Year,
					'TotalExp_Month': $scope.TotalExp_Month,
					'Salary': $scope.Salary,
					'jobtitle': $scope.jobtitle,
					'JobDescripion': $scope.JobDescripion,
					'companyname': $scope.companyname,
					'Industry': $scope.Industry,
					'Department': $scope.Department,
					'JobFromDate': $scope.JobFromDate,
					'JobToDate': $scope.JobToDate,
					'Skill': $scope.skill.toString().replace(/\s+/g, ''),
					'SkillExp': $scope.skillexp.toString().replace(/\s+/g, ''),
					'ResumeFile': FileData,
					'ResumeFileExt': fileext,
					'ProfileImage': FileDataProfile,
					'ProfileImageExt': fileext1,
					'JobSeekerID': localStorage.getItem('EndUserAccountID')

				}).then(function (response) {
					console.log(response.data);

					swal({
						title: "Saved Successfully!",
						text: "Your Jobseeker profile is created successfully",
						type: "success"
					},
						function () {
							document.getElementById('Main').click();
						});

					localStorage.setItem("IsRegistered", "Yes");
					$('.cssload-container').delay(300).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			} else {
				$http.post("iComissionAdmin/PHP/Save_JobSeeker_FreshersProfileInfo.php", {
					'FirstName': $scope.name,
					'DOB': $scope.dob,
					'Address': $scope.fulladdr,
					'Location': $scope.location,
					'Gender': 'NA',
					'Contact': $('#Contact').val(),
					'Passportno': $scope.Passportno,
					'Email': $scope.emailid,
					'HighestQualification': document.getElementById("HighestQualification").value.replace(/\s+/g, ''),
					'InstituteName': $scope.InstituteName,
					'PassoutYear': document.getElementById("PassoutYr").value.replace(/\s+/g, ''),
					'CourseType': $('input[name="radioB1"]:checked').val(),
					'CPI': $scope.CPI,
					'JobSeekerType': $scope.JobSeekerType,
					'Skill': $scope.skill.toString().replace(/\s+/g, ''),
					'SkillExp': $scope.skillexp.toString().replace(/\s+/g, ''),
					'ResumeFile': FileData,
					'ResumeFileExt': fileext,
					'ProfileImage': FileDataProfile,
					'ProfileImageExt': fileext1,
					'JobSeekerID': localStorage.getItem('EndUserAccountID')
				}).then(function (response) {
					console.log(response.data);
					swal({
						title: "Saved Successfully!",
						text: "Your Jobseeker profile is created successfully",
						type: "success"
					},
						function () {
							document.getElementById('Main').click();
						});

					localStorage.setItem("IsRegistered", "Yes");
					$('.cssload-container').delay(300).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		}
	}
});

iComissionapp.controller('JobDetailsController', function ($scope, $http, $location) 
{

	$scope.GetJobDetails = function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$scope.JobId = localStorage.getItem('JobID');

		$http.post("iComissionAdmin/PHP/Get_JobDetails.php", {
			'JobId': $scope.JobId,

		}).then(function (response) {
			console.log(response.data);
			if (response.data != "error") {
				$scope.jobdetails = response.data;
				localStorage.setItem("JobTitle", response.data[0].JobTitle);
				localStorage.setItem("Skillset", response.data[0].Skillset);

				var htmll = response.data[0].JobDescription;
				$("#jobdesc").append(htmll);

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
					'</small>' +
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

			}

			$http.post("iComissionAdmin/PHP/Get_RelevantJobList.php", {
				'Keyword': localStorage.getItem("JobTitle"),
				'Skillset': localStorage.getItem('Skillset'),
			}).then(function (response) {
				console.log(response.data);
				if (response.data != "error") {
					$scope.All_JobList = response.data;
				}
				else {
					$scope.All_JobList = "";
					$("#SidePnl").remove();
				}
				$('.cssload-container').delay(300).fadeOut('slow');
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});

		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	//call when click on job title in job list
	$scope.getJobID = function (id) {
		$('.cssload-container').delay(300).show();
		localStorage.setItem('JobID', id);
		$scope.GetJobDetails();
	}

	//call when click on applyjob button
	$scope.applytojob = function (id) {

		if (localStorage.getItem('UserAccountID') != null) {
			if (localStorage.getItem("IsRegistered") != "No") {
				$('.cssload-container').delay(300).show();
				$scope.jobApplytDateTime = new Date();
				$scope.JobSeekerID = localStorage.getItem('UserAccountID');
				//alert(id );
				$http.post("iComissionAdmin/PHP/Save_JobSeeker_ApplytoJob.php", {
					'JobID': id,
					'JobSeekerID': $scope.JobSeekerID,
					'ApplyDate': $scope.jobApplytDateTime,

				}).then(function (response) {
					console.log(response.data);
					if (response.data.data == false) {
						swal({
							title: "Already Applied!",
							text: "You have already applied for this job post",
							type: "info"
						});
					}
					else {
						swal({
							title: "Applied Successfully!",
							text: "You have successfully applied for this job post",
							type: "success"
						});
					}
					$('.cssload-container').delay(300).fadeOut('slow');
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				$location.path('JobSeekersProfile');
			}
		}
		else {
			$location.path('Login');
		}
	}
});

iComissionapp.controller('ProjectDetailsController', function ($scope, $http, $location) {

	$scope.GetProjectDetails = function () {

		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$scope.ProjectId = localStorage.getItem('ProjectID');

		$http.post("iComissionAdmin/PHP/Get_ProjectDetails.php", {
			'ProjectID': $scope.ProjectId,

		}).then(function (response) {
			console.log(response.data);
			$scope.Projectdetails = response.data;
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
				'</small>' +
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

			$http.post("iComissionAdmin/PHP/Get_RelevantProjectList.php", {
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

		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	//call when click on project title in project list
	$scope.getProjectID = function (id) {
		$('.cssload-container').delay(300).show();
		localStorage.setItem('ProjectID', id);
		$scope.GetProjectDetails();
	}

	$scope.openmodal = function (ProjectId) {
		$scope.biddamount = "";
		$scope.biddesr = "";
		document.getElementById("errormsgg").innerHTML = "";
		localStorage.setItem("ApplyProjectId", ProjectId);
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
					//alert(id );
					$http.post("iComissionAdmin/PHP/Save_ProjectSeeker_ApplytoJob.php", {
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

				});
			});
			map.fitBounds(bounds);
		});
	}

	$scope.GetOtherFileData = function (isValid) {

		if (isValid) {
			if ($('#CLogo').val() != "" && $("#CCertificate").val() != "") {
				if ($scope.latitude != "" && $scope.langitude != "") {
					$('.cssload-container').delay(300).show();

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

		$http.post("iComissionAdmin/PHP/Register_OtherUser.php", {
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
			'Complete': '100',
		}).then(function (response) {
			console.log(response);
			if (response.data != "error") {
				$('.cssload-container').delay(300).fadeOut('slow');
				// localStorage.setItem("Completed","Yes");
				$location.path("/");
			}
			$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}
});

//save Assignment Seekers  Profile info 
iComissionapp.controller('AssignmentSeekersProfileController', function ($scope, $route, $http, $route, $templateCache) 
{
											//this is for wizard ruuning purpose
	$scope.WiazrdID="AssignmentSeekersProfile";


	//get assignment Bidding Type e.g personal/company
	$scope.assignmentBiddingType="Person"; //default
		
	$scope.getValue= function()
	{
				
					if(document.getElementById('checkbox').checked) 
					{
						$scope.assignmentBiddingType="Person";
						//document.getElementById("Show_CompanyDiv").style.display="none";
						alert("person");
					} else {
						$scope.assignmentBiddingType="Company";
						//document.getElementById("Show_CompanyDiv").style.display="block";
						alert("company");
					}
				
	}

		
	$scope.Check = function () 
	{
		if (localStorage.getItem("IsRegistered") == "No") 
		{
			swal({
				title: "Complete profile!",
				text: "Complete your profile to continue on ProcStart",
				type: "info"
			});
		}

		var id = localStorage.getItem('EndUserAccountID');
		$http.post("iComissionAdmin/PHP/Get_JobSeekerInfoFromUserInfo.php", {
			'JobSeekerID': id
		}).then(function (response) {
			console.log(response.data);
			$scope.name = response.data[0].FirstName;
			$('#Contact').val(response.data[0].ContactNo)
			$scope.emailid = response.data[0].UserName;
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		// var currentPageTemplate = $route.current.templateUrl;
		// $templateCache.remove(currentPageTemplate);
		// $route.reload();

		$('.cssload-container').delay(300).fadeOut('slow');
	}

	$scope.skip = function () {
		window.location.href = "Index.html";
	}
	$scope.skip_companyDetails = function () 
	{
		alert("skip");
		//window.location.href = "Index.html";
	}

	//....................validation start...............
		$scope.onlytext = '^[a-zA-Z._ -]+$';
		$scope.onlynumber = '^[0-9]+$';
		$scope.Mobilenumber = "[0-9]{10}"; //
	//....................validation end................

	//$scope.CDate = new Date();

	// For office location//
		$scope.getmap = function () {

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

					});
				});
				map.fitBounds(bounds);
			});
		}
	// For office location//
	

	$scope.SaveAssignmentSeekerProfileinfo = function () 
	{
		//alert("in as profile")
	
	
		$('.cssload-container').delay(300).show();

		/* Work Exp Information */
				$scope.AssignmentSeekerType = $('input[name="radioB4"]:checked').val();//Exp/freshers
				$scope.Expcount = document.getElementById("hidden_newexp").value;

				$scope.TotalExp_Year = [];
				$scope.TotalExp_Month = [];
				$scope.Salary = [];
				$scope.jobtitle = [];
				$scope.JobDescripion = [];
				$scope.companyname = [];
				$scope.Industry = [];
				$scope.Department = [];
				$scope.JobFromDate = [];
				$scope.JobToDate = [];

				for (var i = 0; i < $scope.Expcount; i++) {
					$scope.TotalExp_Year[i] = document.getElementById("expinyr_" + i).value.replace(/\s+/g, '');
					$scope.TotalExp_Month[i] = document.getElementById("expinmonth_" + i).value.replace(/\s+/g, '');
					$scope.Salary[i] = document.getElementById("Salary_" + i).value.replace(/\s+/g, '');
					$scope.jobtitle[i] = document.getElementById("jobtitle_" + i).value.replace(/\s+/g, '');
					$scope.JobDescripion[i] = document.getElementById("JobDescripion_" + i).value.replace(/\s+/g, '');
					$scope.companyname[i] = document.getElementById("companyname_" + i).value.replace(/\s+/g, '');
					$scope.Industry[i] = document.getElementById("Industry_" + i).value.replace(/\s+/g, '');
					$scope.Department[i] = document.getElementById("Department_" + i).value.replace(/\s+/g, '');
					$scope.JobFromDate[i] = document.getElementById("monthfrom_" + i).value.replace(/\s+/g, '') + "-" + document.getElementById("yearFrom_" + i).value.replace(/\s+/g, '');
					$scope.JobToDate[i] = document.getElementById("monthto_" + i).value.replace(/\s+/g, '') + "-" + document.getElementById("yearto_" + i).value.replace(/\s+/g, '');

				}

				console.log($scope.TotalExp_Year + $scope.TotalExp_Month);
				console.log($scope.Salary);
				console.log($scope.jobtitle);
				console.log($scope.JobDescripion);
				console.log($scope.companyname);
				console.log($scope.Industry);
				console.log($scope.Department);
				console.log($scope.JobFromDate);
				console.log($scope.JobToDate);
		/* Work Exp Information */



		/*Skill Information */
			$scope.skillcount = document.getElementById("hidden_newskill").value;
			$scope.skill = [];
			$scope.skillexp = [];
			for (var i = 0; i < $scope.skillcount; i++) {
				$scope.skill[i] = document.getElementById("skill_" + i).value.replace(/\s+/g, '');
				$scope.skillexp[i] = document.getElementById("skillexp_" + i).value.replace(/\s+/g, '');
			}
			console.log($scope.skill);
		/*Skill Information */
		
		//company Logo
			if ($('#CLogo').val() != "" && $("#CCertificate").val() != "") 
			{
				//alert("1");
				//if ($scope.latitude != "" && $scope.langitude != "") 
				//{
				//	alert("2");
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
				//}
				//else 
				//{
				//	document.getElementById("errormsg").innerHTML = "Please select company location on google map";
				//}
			}
			else 
			{
				document.getElementById("errormsg").innerHTML = "Please select company logo, Incorporation certificate";
			}
		//company Logo


		//Company Certificate//
			$scope.GetFile = function () 
			{
				//alert("3")
				var filename1 = document.getElementById("CCertificate").files[0].name;
				$scope.fileext1 = filename1.substr((filename1.lastIndexOf('.') + 1));
				var file1 = document.getElementById("CCertificate").files[0];
				var reader1 = new FileReader();
				reader1.readAsDataURL(file1);
				reader1.onload = function () {
					var filedata1 = reader1.result;
					$scope.FileData1 = filedata1.substr(filedata1.indexOf(',') + 1);
					getprofilepic();
				};
				reader1.onerror = function (error) {
					//alert('Error: ', error);
				};
			}
		//Company Certificate//

		//Profile Pic of assignment seeker//
			/*
				var FileData;
				var fileext;

				

				//get resume file
				var filename = document.getElementById("file_media").files[0].name;
				//alert(filename);
				fileext = filename.substr((filename.lastIndexOf('.') + 1));

				//alert(fileext);
				var file = document.getElementById("file_media").files[0];
				var reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function () {
					var filedata = reader.result;

					FileData = filedata.substr(filedata.indexOf(',') + 1);
					getprofilepic();
				};
				reader.onerror = function (error) {
					//alert('Error: ', error);
				};
			*/

			function getprofilepic() 
			{
				//alert("4")
					//get resume file
					var filename2 = document.getElementById("profileImg").files[0].name;
					//alert(filename);
					fileext2 = filename2.substr((filename2.lastIndexOf('.') + 1));

					//alert(fileext);
					var file2 = document.getElementById("profileImg").files[0];
					var reader2 = new FileReader();
					reader2.readAsDataURL(file2);
					reader2.onload = function () {
						var filedata2 = reader2.result;

						FileDataProfile = filedata2.substr(filedata2.indexOf(',') + 1);
						saveProfileInfo();
					};
					reader2.onerror = function (error) {
						//alert('Error: ', error);
					};
			}
		//Profile Pic of assignment seeker//


		function saveProfileInfo() 
		{

			if ($scope.AssignmentSeekerType == 'Experienced') 
			{
				//alert("6");
				$http.post("iComissionAdmin/PHP/Save_AssignmentSeeker_ExperiencedProfileInfo.php", {
					'FirstName': $scope.name,
					'DOB': $scope.dob,
					'Address': $scope.fulladdr,
					'Location': $scope.location,
					'Gender': 'NA',
					'Contact': $('#Contact').val(),
					'Passportno': $scope.Passportno,
					'Email': $scope.emailid,
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
					'AssignmentSeekerType': $scope.AssignmentSeekerType,
					'TotalExp_Year': $scope.TotalExp_Year,
					'TotalExp_Month': $scope.TotalExp_Month,
					'Salary': $scope.Salary,
					'jobtitle': $scope.jobtitle,
					'JobDescripion': $scope.JobDescripion,
					'ExpCompanyname': $scope.companyname,
					'ExpIndustry': $scope.Industry,
					'Department': $scope.Department,
					'JobFromDate': $scope.JobFromDate,
					'JobToDate': $scope.JobToDate,
					'Skill': $scope.skill.toString().replace(/\s+/g, ''),
					'SkillExp': $scope.skillexp.toString().replace(/\s+/g, ''),
					'ProfileImage': FileDataProfile,
					'ProfileImageExt': fileext2,
					'AssignmentBiddingType':$scope.assignmentBiddingType,
					'AssignmentSeekerID': localStorage.getItem('EndUserAccountID')

				}).then(function (response) {
					console.log(response.data);

					swal({
						title: "Saved Successfully!",
						text: "Your profile is created successfully",
						type: "success"
					},
						function () {
							document.getElementById('Main').click();
						});

					localStorage.setItem("IsRegistered", "Yes");
					window.location.href = "Index.html";
					$('.cssload-container').delay(300).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			} 
			else 
			{
				//alert("5")
				$http.post("iComissionAdmin/PHP/Save_AssignmentSeeker_FreshersProfileInfo.php", {
					'FirstName': $scope.name,
					'DOB': $scope.dob,
					'Address': $scope.fulladdr,
					'Location': $scope.location,
					'Gender': 'NA',
					'Contact': $('#Contact').val(),
					'Passportno': $scope.Passportno,
					'Email': $scope.emailid,
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
					'AssignmentSeekerType': $scope.AssignmentSeekerType,
					'Skill': $scope.skill.toString().replace(/\s+/g, ''),
					'SkillExp': $scope.skillexp.toString().replace(/\s+/g, ''),					
					'ProfileImage': FileDataProfile,
					'ProfileImageExt': fileext2,
					'AssignmentBiddingType':$scope.assignmentBiddingType,
					'AssignmentSeekerID': localStorage.getItem('EndUserAccountID')
				}).then(function (response) {
					console.log(response.data);
					swal({
						title: "Saved Successfully!",
						text: "Your profile is created successfully",
						type: "success"
					},
						function () {
							document.getElementById('Main').click();
						});

					localStorage.setItem("IsRegistered", "Yes");
					window.location.href = "Index.html";
					$('.cssload-container').delay(300).fadeOut('slow');

				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		}
	

	}

	/* company 
				//....................validation start...............
		$scope.onlytext = '^[a-zA-Z._ -]+$';
		$scope.onlynumber = '^[0-9]+$';
		$scope.Mobilenumber = "[0-9]{10}"; //
		//....................validation end................

		//$scope.CDate = new Date();

		$scope.getmap = function () {

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

					});
				});
				map.fitBounds(bounds);
			});
		}

		$scope.GetOtherFileData = function (isValid) 
		{

			if (isValid) 
			{
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

		$scope.SaveOtherData = function () 
		{

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
	company*/


});

iComissionapp.controller('ForumController', function ($scope, $http, $location) {
	//Get_SkillSet
	$scope.loadSkillSet = function ($query) {

		return $http.get('iComissionAdmin/PHP/Get_SkillSet.php', {
			cache: true
		}).then(function (response) {
			console.log(response.data);
			$scope.skill = response.data;
			var countries = $scope.skill;
			//console.log(countries);
			return countries.filter(function (country) {
				return country.SkillSetName.toLowerCase().indexOf($query.toLowerCase()) != -1;
			});
		});
	}

	$scope.skillSet = [];
	var profielpic = document.getElementById("profileimage");
	$scope.UserID = localStorage.getItem('EndUserAccountID');
	$scope.UserName = localStorage.getItem('FirstName');

	$scope.tagkey;
	$scope.getForumQuestion = function () {
		$http.post("iComissionAdmin/PHP/Get_ForumQuestion.php", { 'QuestionID': 'null' }).then(function (response) {
			console.log(response.data);
			if(response.data=="error")
			{
				
				$scope.NoOfQue = 0;
			
			}
			else
			{
				$scope.NoOfQue = response.data.length;
				$scope.QuestionList = response.data;
			}
			
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	$scope.getLikeCount = function (id) {
		$scope.count = 0;
		$scope.count = $scope.count + 1;
		$http.post("iComissionAdmin/PHP/Save_ForumQuestionLikeCount.php", {
			'QuestionID': id,
			'LikeCount': $scope.count
		}).then(function (response) {
			console.log(response.data);
			$scope.QuestionList = response.data;
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

		//alert($scope.count);
	}

	$scope.getAnswerList = function (id) {
		localStorage.setItem("ForumQuestionID", id);
		$scope.count = 0;
		$scope.count = $scope.count + 1;

		$http.post("iComissionAdmin/PHP/Save_ForumQuestionViewCount.php", {
			'QuestionID': id,
			'ViewCount': $scope.count
		}).then(function (response) {
			console.log(response.data);
			$scope.QuestionList = response.data;
			$location.path('Answer');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});

	}

	$scope.ShowQustionDiv = function () {
		$scope.IsLoggedIn = "";
		if (localStorage.getItem('EndUserAccountID') != null) {
			$scope.IsLoggedIn = "Yes";

			$("#main_content_div").slideToggle();
			$("#ask_question_div").slideToggle();
			// document.getElementById("ask_question_div").style.display="block";

		}
		else {
			$scope.IsLoggedIn = "No";
			$location.path('Login');
		}


	}

	$scope.postQuestion = function () {

		//console.log(profielpic+$scope.UserID+$scope.UserName);




		console.log($scope.skillSet);
		$scope.skillSetName = [];
		for (var i = 0; i < $scope.skillSet.length; i++) {
			$scope.skillSetName[i] = $scope.skillSet[i].SkillSetName;
		}
		console.log($scope.skillSetName);

		$scope.QuestionPostDateTime = new Date();
		$http.post("iComissionAdmin/PHP/Save_ForumQuestion.php", {
			'QuestionPostedBy': $scope.UserID,
			'QuestionTitle': $scope.Title,
			'QuestionDescription': $('#Questiondesc').summernote('code'),
			'Keywords': $scope.skillSetName.toString(),
			'QuestionPostDateTime': $scope.QuestionPostDateTime,
		}).then(function (response) {
			console.log(response.data);
			if (response.data.data == true) {
				$scope.getForumQuestion();
				document.getElementById("main_content_div").style.display = "block";
				document.getElementById("ask_question_div").style.display = "none";
			}
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	$scope.serachQuestion = function () {
		$http.post("iComissionAdmin/PHP/Get_SearchQuestion.php", {
			'SearchKey': $scope.tagkey

		}).then(function (response) {
			console.log(response.data);
			if(response.data=="error")
			{
				
				$scope.NoOfQue = 0;
				$scope.QuestionList ="";
			}
			else
			{
				$scope.NoOfQue = response.data.length;
				$scope.QuestionList = response.data;
			}
			
			//$scope.tagkey="";

		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	$scope.clearSerachtags = function () {
		$scope.tagkey = "";
		$scope.getForumQuestion();
	}

	$scope.frequentSearch = function () {
		$http.post("iComissionAdmin/PHP/Get_SearchfrequentQuestion.php").then(function (response) {
			console.log(response.data);
			if(response.data=="error")
			{
				
				$scope.NoOfQue = 0;
				$scope.QuestionList ="";
			}
			else
			{
				$scope.NoOfQue = response.data.length;
				$scope.QuestionList = response.data;
				$scope.tagkey = "";
			}
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}
	$scope.topDiscussion = function () {
		$http.post("iComissionAdmin/PHP/Get_SeachTopDiscussion.php").then(function (response) {
			console.log(response.data);
			if(response.data=="error")
			{
				
				$scope.NoOfQue = 0;
				$scope.QuestionList ="";
			
			}
			else
			{
				$scope.NoOfQue = response.data.length;
				$scope.QuestionList = response.data;
				//$scope.tagkey="";
			}
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}
	$scope.unansweredQues = function () {
		$http.post("iComissionAdmin/PHP/Get_SearchUnAnsweredQue.php").then(function (response) {
			console.log(response.data);
			if(response.data=="error")
			{
				
				$scope.NoOfQue = 0;
				$scope.QuestionList ="";
			}
			else
			{
				$scope.NoOfQue = response.data.length;
				$scope.QuestionList = response.data;
				//$scope.tagkey="";
			}
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	//'jobdescription': $('#jobdesc').summernote('code'),
});

iComissionapp.controller('ForumAnswerController', function ($scope, $http, $location) {

	$scope.QuestionID = localStorage.getItem("ForumQuestionID");
	var profielpic = document.getElementById("profileimage");
	$scope.UserID = localStorage.getItem('EndUserAccountID');
	$scope.UserName = localStorage.getItem('FirstName');

	$scope.commentText;

	$scope.getForumQuestion = function () {
		$http.post("iComissionAdmin/PHP/Get_ForumQuestion.php", { 'QuestionID': $scope.QuestionID }).then(function (response) {
			console.log(response.data);
			$scope.QuestionList = response.data;
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	$scope.getForumAnswer = function () {
		$http.post("iComissionAdmin/PHP/Get_ForumQuestionAnswer.php", { 'QuestionID': $scope.QuestionID }).then(function (response) {
			console.log(response.data);
			$scope.AnswerList = response.data;
			/*for(var i=0;i<response.data.length;i++)
			{
				var k = Object.keys(response.data[i]).length;
				var p = k-6;
				for(var j=0;j<p;j++)
				{
					console.log(response.data[i][j]);
				}
				
			}*/
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	$scope.postAnswer = function () 
	{
		/*var p = $('#Answerdesc').summernote('code').replace(/<\/?[^>]+(>|$)/g, "");
		
		alert(p);*/
		if (localStorage.getItem('EndUserAccountID') != null) {

			$scope.PostDateTime = new Date();
			$http.post("iComissionAdmin/PHP/Save_ForumQuestionAnswer.php", {
				'QuestionID': $scope.QuestionID,
				'AnswerPostedBy': $scope.UserID,
				'AnswerDescription': $('#Answerdesc').summernote('code'),
				'PostDateTime': $scope.PostDateTime,
			}).then(function (response) {
				console.log(response.data);
				if (response.data.data == true) {
					$scope.count = 0;
					$scope.count = $scope.count + 1;
					$http.post("iComissionAdmin/PHP/Save_ForumQuestionAnswerCount.php", {
						'QuestionID': $scope.QuestionID,
						'AnswerCount': $scope.count
					}).then(function (response) {
						console.log(response.data);
						if (response.data.data == true) {
							$scope.getForumQuestion();
							$scope.getForumAnswer();
						}
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});




				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});

		}
		else {
			$scope.IsLoggedIn = "No";
			$location.path('Login');
		}
	}
	$scope.postComment = function (Ans_id, Que_id) {
		$scope.QueID = Que_id;
		$scope.AnswerID = Ans_id;

		/*$scope.commentText = [];
		alert($scope.commentText);*/
		if (localStorage.getItem('EndUserAccountID') != null) {
			$scope.PostDateTime = new Date();
			$http.post("iComissionAdmin/PHP/Save_ForumAnswerComment.php", {
				'QuestionID': $scope.QueID,
				'AnswerID': $scope.AnswerID,
				'CommentPostedBy': $scope.UserID,
				'comment': "$scope.commentText",
				'PostDateTime': $scope.PostDateTime,
			}).then(function (response) {
				console.log(response.data);
				if (response.data.data == true) {
					//$('#Answerdesc').summernote('code')="";
					$scope.getForumAnswer();

				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});

		}
		else {
			$scope.IsLoggedIn = "No";
			$location.path('Login');
		}
	}

});


// function initialize() {
//     var markers = []; // makers array

//     var myOptions = { // map settings
//         zoom: 8,
//         center: new google.maps.LatLng(-33.397, 150.644),
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         sensor: 'true'
//     }
//     var map = new google.maps.Map(document.getElementById("canvas-map"), myOptions);

//     var data = [ // map data
//       {
//         'id':1,
//         'content':'Hello my name is marker, I\'m from Google',
//         'position': {
//           'lat':-33,
//           'lng':150
//          }
//       },
//       {
//         'id':2,
//         'content':'I am the content of this infobox. Wow, what a text.<br><br><a href="#">The good thing is: Tags are also possible</a>',
//         'position': {
//           'lat':-34,
//           'lng':150
//          }
//       },
//     ]

//     for (var i = 0; i < data.length; i++) {
//       var current = data[i];

//       var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(current.position.lat, current.position.lng),
//         map: map,
//         content: current.content
//       });

//       markers.push(marker);

//       google.maps.event.addListener(markers[i], "click", function (e) {
//         var infoBox = new InfoBox({
//             latlng: this.getPosition(),
//             map: map,
//             content: this.content
//         });
//       });
//     }
// }

// jQuery(document).ready(function(){
//     initialize();
// });