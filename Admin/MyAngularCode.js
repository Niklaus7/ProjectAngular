// create the module and name it scotchApp
var iComissionapp = angular.module('iComissionapp', ['ngRoute', 'ngTagsInput', 'ngMaterial']);

// configure our routes
iComissionapp.config(function ($routeProvider) {
	$routeProvider

		.when('/Dashboard', {
			templateUrl: 'dashboard.htm',
			controller: 'dashboardcontroller',
			resolve: {
				"check": function () {
					$('#preloader').delay(350).show();
				}
			}
		})

		.when('/approvejobs', {
			templateUrl: 'ApproveJobs.htm',
			controller: 'ApproveJobController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/approveassignment', {
			templateUrl: 'ApproveProjects.htm',
			controller: 'ApproveProjectController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/skillset', {
			templateUrl: 'skillset.htm',
			controller: 'SkillsetController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		.when('/Pricing', {
			templateUrl: 'pricing.htm',
			controller: 'pricingController',
			resolve: {
                "check": function () {
                    $('#preloader').delay(350).show();
                }
            }
		})

		/* Plan Congiguration functionality*/
			//Create Plan
			.when('/CreatePlan', {
				templateUrl: 'CreatePlan.htm',
				controller: 'CreatePlanController',
				/*resolve: {
					"check": function () {
						$('#preloader').delay(350).show();
					}
				}*/
			})

			//MyPlan
			.when('/MyPlan', {
				templateUrl: 'MyPlan.htm',
				controller: 'MyPlanController',
				/*resolve: {
					"check": function () {
						$('#preloader').delay(350).show();
					}
				}*/
			})

			//ConfigurePlan
			.when('/ConfigurePlan', {
				templateUrl: 'ConfigurePlan.htm',
				controller: 'ConfigurePlanController',
				/*resolve: {
					"check": function () {
						$('#preloader').delay(350).show();
					}
				}*/
			})

			//Edit Plan
			.when('/EditPlan', {
				templateUrl: 'EditPlan.htm',
				controller: 'EditPlanController',
				/*resolve: {
					"check": function () {
						$('#preloader').delay(350).show();
					}
				}*/
			})


		.otherwise({

			redirectTo: $routeProvider
		});

});


/**********************************			MainController			******************************************************* */

iComissionapp.controller('MainController', function ($scope, $http, $location) {
	// alert();
	// $location.path("approvejobs");
	$scope.LogOut = function () {
		localStorage.clear();
		window.location.href = "../Index.html";
	}
	$('#preloader').delay(350).fadeOut('slow');
	$location.path("Dashboard");
	// var usertypeId = localStorage.getItem('UserTypeID');
	
	// $http.post("PHP/Profile_Complete.php", {
	// 	'userTypeid': localStorage.getItem('UserAccountID')
	// }).then(function (response) {
	// 	if(response.data[0].ProfileComplete == "100"){
	// 		document.getElementById("progres_status").style.width = "100%";
	// 	}
	// }, function (error) {
	// 	console.log("Sorry! Data Couldn't be inserted!");
	// 	console.log(error);
	// });

	// if (localStorage.getItem('UserTypeID') === null) {
	// 	window.location.href = "../Index.html";
	// } else {
	// 	$http.post("PHP/Get_UserTypebyId.php", {
	// 		'userTypeid': usertypeId
	// 	}).then(function (response) {
			
	// 		$scope.UserRoleName = response.data[0].UserRoleName;
	// 		localStorage.setItem("RoleName", $scope.UserRoleName);
			
	// 		if (response.data != "error") {
	// 			if (response.data[0].UserRoleName == "Client") {
	// 				$location.path("clientdashboard");
	// 			} else if (response.data[0].UserRoleName == "Consultant") {
	// 				$location.path("Consultantdashboard");
	// 			} else if (response.data[0].UserRoleName == "Vendor") {
	// 				$location.path("Vendordashboard");
	// 			} else if (response.data[0].UserRoleName == "SME") {
	// 				$location.path("SMEdashboard");
	// 			}
	// 			else{
					
	// 				$location.path("clientdashboard");
	// 			}
	// 		}
	// 	}, function (error) {
	// 		console.log("Sorry! Data Couldn't be inserted!");
	// 		console.log(error);
	// 	});
	// }
});

iComissionapp.controller('dashboardcontroller', function ($scope, $compile, $http, $location) {

	$scope.GetJobData = function () {
		$('#preloader').delay(350).show();


		$http.post("PHP/Get_jobchartdata.php").then(function (response) {
			console.log(response.data);
			$scope.jobchartdata = response.data;
			$scope.datalength = response.data.length;
			
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});


		$http.post("PHP/Get_projectchartdata.php").then(function (response) {
			console.log(response.data);
			$scope.projectchartdata = response.data;
			$scope.projectdatalength = response.data.length;
			
			$.Dashboard1.init();
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});


		var Dashboard1 = function() {
			this.$realData = []
		};
		var $stckedData = [];
		var $areaDotData = [];
		//creates Stacked chart
		Dashboard1.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
			Morris.Bar({
				element: element,
				data: data,
				xkey: xkey,
				ykeys: ykeys,
				stacked: true,
				labels: labels,
				hideHover: 'auto',
				resize: true, //defaulted to true
				gridLineColor: '#eeeeee',
				barColors: lineColors
			});
		},
	
		//creates area chart with dotted
		Dashboard1.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
			Morris.Area({
				element: element,
				pointSize: 0,
				lineWidth: 0,
				data: data,
				xkey: xkey,
				ykeys: ykeys,
				labels: labels,
				hideHover: 'auto',
				pointFillColors: Pfillcolor,
				pointStrokeColors: Pstockcolor,
				resize: true,
				gridLineColor: '#eef0f2',
				lineColors: lineColors
			});
	
	   },
	   
		Dashboard1.prototype.init = function() {
	
			for(i=0;i<$scope.datalength;i++){
				$stckedData[i] = 
				{ y: $scope.jobchartdata[i].month, a: parseInt($scope.jobchartdata[i].inactivetotal), b: parseInt($scope.jobchartdata[i].activetotal), c: parseInt($scope.jobchartdata[i].total) }
					
				
			}

			console.log($stckedData);
			
			this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b', 'c'], ['Inactive Jobs', 'Active Jobs', 'Total Jobs'], ['#5fbeaa', '#5d9cec', '#ebeff2']);
	
			for(i=0;i<$scope.projectdatalength;i++){
				$areaDotData[i] = 
				{ y: $scope.projectchartdata[i].month, a: parseInt($scope.projectchartdata[i].inactivetotal), b: parseInt($scope.projectchartdata[i].activetotal), c: parseInt($scope.projectchartdata[i].total) }
					
				
			}
			
			this.createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b', 'c'], ['Desktops ', 'Tablets ', 'Mobiles '],['#ffffff'],['#999999'], ['#566676', '#5fbeaa', '#5d9cec']);
	
		},
		//init
		$.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
		


		$http.post("PHP/Get_count.php").then(function (response) {
			console.log(response.data);
			$scope.Jobscount = response.data[0].jobscount;
			$scope.inactivejobcount = response.data[0].inactivejobcount;
			$scope.activejobcount = response.data[0].activejobcount;
			$scope.jobseekercount = response.data[0].jobseekercount;

			$scope.jobspercentage = ($scope.activejobcount/$scope.Jobscount)*100;

			$scope.projectsscount = response.data[0].projectsscount;
			$scope.inactiveprojectcount = response.data[0].inactiveprojectcount;
			$scope.activeprojectcount = response.data[0].activeprojectcount;
			$scope.projectseekercount = response.data[0].projectseekercount;

			$scope.projectspercentage = ($scope.activeprojectcount/$scope.projectsscount)*100;

		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});


		$scope.UserRole = localStorage.getItem('RoleName');
		$scope.UserID = localStorage.getItem('UserAccountID');
		var table = $('#Job_Datatable');
			$http.post("PHP/Get_JobList.php", {
				'jobPostedBy': $scope.UserID,
				'ShowData': 'Limited'

			}).then(function (response) {
				console.log(response.data);
				if(response.data != "error"){
					$scope.AllData = response.data;
					var data = $scope.AllData;
					BindData();
				}
				else{
					$('#Job_Datatable').dataTable();
				}
				// $compile(table)($scope);
				$('#preloader').delay(350).fadeOut('slow');

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	}

	function BindData() {

		var data = $scope.AllData;
		var datatablevar;

		if ($.fn.dataTable.isDataTable('#Job_Datatable')) {
			datatablevar = $('#Job_Datatable').DataTable();

			$('#Job_Datatable').DataTable().clear();
			$('#Job_Datatable').DataTable().destroy();


			if (data == 'error' || data == null) {
				$('#Job_Datatable').DataTable({
					"bLengthChange": false,
					"bFilter": false
				}).draw();
			}
			else {

				DrawTable();
			}
		}
		else {

			$('#Job_Datatable').DataTable().clear();
			$('#Job_Datatable').DataTable().destroy();
			DrawTable();

		}
		var table = $('#Job_Datatable');
		$compile(table)($scope);

	}


	function DrawTable() {
		
		var data = $scope.AllData;

		var table = $('#Job_Datatable');

		var datatablevar = table.DataTable({
			data: data,
			dom: 'lfrtip',
			columns: [

				{
					"data": "JobTitle",
					"render": function (data, type, row) {
						return '<img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">';
					}
				},
				{
					"data": "CompanyName"
				},
				{
					"data": "JobTitle"
				},
				{
					"data": "JobPostDate"
				},
				{
					"data": "JobPostID",
					"render": function (data) {
						return '<a style="margin-right:5px" class="demo-delete-row btn btn-danger btn-sm btn-icon"><i class="fa fa-eye"></i></a><a href class="demo-delete-row btn btn-danger btn-sm btn-icon" ng-click="approvejob('+ data +')"><i class="fa fa-check"></i></a>';
					}
				},
			]
		}).draw();

	}

	$scope.approvejob = function (JobId) {
		
		swal({
			title: 'Are you sure?',
			text: "Job post will be available on portal!",
			type: 'info',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Approve it!'
		  }).then((result) => {
			if (result.value) {

				$http.post("PHP/Approve_Job.php", {
					'JobId': JobId,
					'Status': 'Inactive'
				}).then(function (response) {
					console.log(response.data);
					// window.location.href = "Main.htm";
					$scope.GetJobData();
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		  })
	}
	
	$scope.viewalljobs = function(){
		localStorage.setItem("veiwjob","Inactive");
		$location.path("approvejobs");

	}

	$scope.GetProjectData = function () {
		$('#preloader').delay(350).show();
		$scope.UserRole = localStorage.getItem('RoleName');
		$scope.UserID = localStorage.getItem('UserAccountID');

			$http.post("PHP/Get_ProjectList.php", {
				'ProjectPostedBy': $scope.UserID,
				'ShowData': 'Limited'

			}).then(function (response) {
				console.log(response.data);
				
				if(response.data != "error"){
					$scope.AllData = response.data;
					var data = $scope.AllData;
					BindData1();
				}
				else{
					$('#Project_Datatable').dataTable();
				}

				// $compile(table)($scope);
				$('#preloader').delay(350).fadeOut('slow');

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	}


	function BindData1() {

		var data = $scope.AllData;
		var datatablevar;

		if ($.fn.dataTable.isDataTable('#Project_Datatable')) {
			datatablevar = $('#Project_Datatable').DataTable();

			$('#Project_Datatable').DataTable().clear();
			$('#Project_Datatable').DataTable().destroy();


			if (data == 'error' || data == null) {
				$('#Project_Datatable').DataTable({
					"bLengthChange": false,
					"bFilter": false
				}).draw();
			}
			else {

				DrawTable1();
			}
		}
		else {

			$('#Project_Datatable').DataTable().clear();
			$('#Project_Datatable').DataTable().destroy();
			DrawTable1();

		}
		var table = $('#Project_Datatable');
		$compile(table)($scope);

	}


	function DrawTable1() {

		var data = $scope.AllData;

		var table = $('#Project_Datatable');

		var datatablevar = table.DataTable({
			data: data,
			dom: 'lfrtip',
			columns: [

				{
					"data": "ProjectName",
					"render": function (data, type, row) {
						return '<img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">';
					}
				},
				{
					"data": "CompanyName"
				},
				{
					"data": "ProjectName"
				},
				{
					"data": "ProjectDateTime"
				},
				{
					"data": "ProjectPostID",
					"render": function (data) {
						return '<a style="margin-right:5px" class="demo-delete-row btn btn-danger btn-sm btn-icon"><i class="fa fa-eye"></i></a><a href class="demo-delete-row btn btn-danger btn-sm btn-icon" ng-click="approveproject('+ data +')"><i class="fa fa-check"></i></a>';
					}
				}
			]
		}).draw();
	}

	$scope.approveproject = function (ProjectPostID) {
			
		swal({
			title: 'Are you sure?',
			text: "Job post will be available on portal!",
			type: 'info',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Approve it!'
		  }).then((result) => {
			if (result.value) {

				$http.post("PHP/Approve_Assignment.php", {
					'ProjectPostID': ProjectPostID,
					'Status': 'Inactive'
				}).then(function (response) {
					console.log(response.data);
					// window.location.href = "Main.htm";
					$scope.GetProjectData();
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		  })
	}

	$scope.viewallprojects = function(){
		localStorage.setItem("veiwproject","Inactive");
		$location.path("approveassignment");

	}
});

iComissionapp.controller('ApproveJobController', function ($scope, $compile, $http, $location) {
	
	$scope.GetJobData = function () {

		var type = "";
		if(localStorage.getItem("veiwjob") == "Inactive")
		{
			type = "AllInactive";
			localStorage.removeItem("veiwjob");
		}
		else{
			type = "All";
		}

		$('#preloader').delay(350).show();
		$scope.UserRole = localStorage.getItem('RoleName');
		$scope.UserID = localStorage.getItem('UserAccountID');
		var table = $('#Job_Datatable');
			$http.post("PHP/Get_JobList.php", {
				'jobPostedBy': $scope.UserID,
				'ShowData': type

			}).then(function (response) {
				//console.log(response.data);
				if(response.data != "error"){
					$scope.AllData = response.data;
					var data = $scope.AllData;
					
					BindData();
				}
				else{
					$('#Job_Datatable').dataTable();
				}
				
				// $compile(table)($scope);
				$('#preloader').delay(350).fadeOut('slow');

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	}

	function BindData() {

		var data = $scope.AllData;
		var datatablevar;

		if ($.fn.dataTable.isDataTable('#Job_Datatable')) {
			datatablevar = $('#Job_Datatable').DataTable();

			$('#Job_Datatable').DataTable().clear();
			$('#Job_Datatable').DataTable().destroy();


			if (data == 'error' || data == null) {
				$('#Job_Datatable').DataTable({
					"bLengthChange": false,
					"bFilter": false
				}).draw();
			}
			else {

				DrawTable();
			}
		}
		else {

			$('#Job_Datatable').DataTable().clear();
			$('#Job_Datatable').DataTable().destroy();
			DrawTable();

		}
		var table = $('#Job_Datatable');
		$compile(table)($scope);

	}


	function DrawTable() {
		
		var data = $scope.AllData;

		var table = $('#Job_Datatable');

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
					"data": "JobAprrovedstatus",
					"render": function (data) {
						if (data == "Yes") {
							return '<span class="label label-info">Active</span>';
						} else {
							return '<span class="label label-danger">Inactive</span>';
						}
					}
				},
				{
					"data": "JobPostID",
					"render": function (data, type, row) {
						var JobAprrovedstatus = row.JobAprrovedstatus;
						if(JobAprrovedstatus == "Yes")
						{
							return '<a href class="table-action-btn btn-info" title="View Job" ng-click="viewjob(' + data + ')"><i class="ion-eye"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="Approve Job" ng-click="viewdescription(' + data + ')"><i class="ion-checkmark"></i></a>';
						}
						else{
							return '<a href class="table-action-btn btn-info" title="View Job" ng-click="viewjob(' + data + ')"><i class="ion-eye"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="Remove Job" ng-click="viewdescription1(' + data + ')"><i class="ion-checkmark"></i></a>';
						}
						
						
					}
				},
			]
		}).draw();

	}

	//call when click on jobdescription
	$scope.viewdescription = function (JobId) {
		
		swal({
			title: 'Are you sure?',
			text: "Job post will be disable from portal!",
			type: 'info',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Approve it!'
		  }).then((result) => {
			if (result.value) {

				$http.post("PHP/Approve_Job.php", {
					'JobId': JobId,
					'Status': 'Active'
				}).then(function (response) {
					console.log(response.data);
					// window.location.href = "Main.htm";
					$scope.GetJobData();
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		  })
	}

	$scope.viewdescription1 = function (JobId) {
		
		swal({
			title: 'Are you sure?',
			text: "Job post will be available on portal!",
			type: 'info',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Approve it!'
		  }).then((result) => {
			if (result.value) {

				$http.post("PHP/Approve_Job.php", {
					'JobId': JobId,
					'Status': 'Inactive'
				}).then(function (response) {
					console.log(response.data);
					// window.location.href = "Main.htm";
					$scope.GetJobData();
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		  })
	}

	$scope.info = function () {
		$.Notification.autoHideNotify('info', 'top center', 'No records found !','No assignment seeker have applied for this assignment.');
	}

	$scope.viewjob = function (id) {

		$scope.JobId = id;

		localStorage.setItem('JobId', $scope.JobId);
			
		// $location.path('viewjob');
	}
});

iComissionapp.controller('ApproveProjectController', function ($scope, $compile, $http, $location) {

	$scope.GetProjectData = function () {

		var type = "";
		if(localStorage.getItem("veiwproject") == "Inactive")
		{
			type = "AllInactive";
			localStorage.removeItem("veiwjob");
		}
		else{
			type = "All";
		}

		$('#preloader').delay(350).show();
		$scope.UserRole = localStorage.getItem('RoleName');
		$scope.UserID = localStorage.getItem('UserAccountID');

		
			$http.post("PHP/Get_ProjectList.php", {
				'ProjectPostedBy': $scope.UserID,
				'ShowData': type

			}).then(function (response) {
				console.log(response.data);
				if(response.data!="error"){
					$scope.AllData = response.data;
					var data = $scope.AllData;
					//BindData();
				}
				else{
					$('#Project_Datatable').dataTable();
				}

				// $compile(table)($scope);
				$('#preloader').delay(350).fadeOut('slow');

			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
	}


	function BindData() {

		var data = $scope.AllData;
		var datatablevar;

		if ($.fn.dataTable.isDataTable('#Project_Datatable')) {
			datatablevar = $('#Project_Datatable').DataTable();

			$('#Project_Datatable').DataTable().clear();
			$('#Project_Datatable').DataTable().destroy();


			if (data == 'error' || data == null) {
				$('#Project_Datatable').DataTable({
					"bLengthChange": false,
					"bFilter": false
				}).draw();
			}
			else {

				DrawTable();
			}
		}
		else {

			$('#Project_Datatable').DataTable().clear();
			$('#Project_Datatable').DataTable().destroy();
			DrawTable();

		}
		var table = $('#Project_Datatable');
		$compile(table)($scope);

	}


	function DrawTable() {

		var data = $scope.AllData;

		var table = $('#Project_Datatable');

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
					"data": "AssignmentAprrovedstatus",
					"render": function (data) {
						if (data == "Yes") {
							return '<span class="label label-info">Active</span>';
						} else {
							return '<span class="label label-danger">Inactive</span>';
						}
					}
				},
				{
					"data": "ProjectPostID",
					"render": function (data, type, row) {
						var AssignmentAprrovedstatus = row.AssignmentAprrovedstatus;
						if(AssignmentAprrovedstatus == "Yes"){
							return '<a href="#viewclientproject" class="table-action-btn btn-info" title="View Details" ng-click="viewproject(' + data + ')"><i class="ion-eye"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="Approve Assignment" ng-click="viewdescription(' + data + ')"><i class="ion-checkmark"></i></a>&nbsp;&nbsp;';
						}
						else{
							return '<a href="#viewclientproject" class="table-action-btn btn-info" title="View Details" ng-click="viewproject(' + data + ')"><i class="ion-eye"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="Remove Assignment" ng-click="viewdescription1(' + data + ')"><i class="ion-checkmark"></i></a>&nbsp;&nbsp;'
						}
					}
				}
			]
		}).draw();

	}

		//call when click on jobdescription
		$scope.viewdescription = function (ProjectPostID) {
		
			swal({
				title: 'Are you sure?',
				text: "Job post will be disable from portal!",
				type: 'info',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Approve it!'
			  }).then((result) => {
				if (result.value) {
	
					$http.post("PHP/Approve_Assignment.php", {
						'ProjectPostID': ProjectPostID,
						'Status': 'Active'
					}).then(function (response) {
						console.log(response.data);
						// window.location.href = "Main.htm";
						$scope.GetProjectData();
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}
			  })
		}
	
		$scope.viewdescription1 = function (ProjectPostID) {
			
			swal({
				title: 'Are you sure?',
				text: "Job post will be available on portal!",
				type: 'info',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Approve it!'
			  }).then((result) => {
				if (result.value) {
	
					$http.post("PHP/Approve_Assignment.php", {
						'ProjectPostID': ProjectPostID,
						'Status': 'Inactive'
					}).then(function (response) {
						console.log(response.data);
						// window.location.href = "Main.htm";
						$scope.GetProjectData();
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}
			  })
		}

	$scope.info = function () {
		$.Notification.autoHideNotify('info', 'top center', 'No records found !','No assignment seeker have applied for this assignment.');
	}

	$scope.viewproject = function () {
		$('#preloader').delay(350).show();
		// $location.path('viewvendorproject');
	}
});

iComissionapp.controller('SkillsetController', function ($scope, $compile, $http, $location) {
	

	$scope.GetSkillsData = function(){
		$http.post("../iComissionAdmin/PHP/Get_SkillSet.php").then(function (response) {
			console.log(response.data);
			$scope.AllData = response.data
			BindData();
			$('#preloader').delay(350).fadeOut('slow');
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	function BindData() {

		var data = $scope.AllData;
		var datatablevar;

		if ($.fn.dataTable.isDataTable('#skillsdata')) {
			datatablevar = $('#skillsdata').DataTable();

			$('#skillsdata').DataTable().clear();
			$('#skillsdata').DataTable().destroy();


			if (data == 'error' || data == null) {
				$('#skillsdata').DataTable({
					"bLengthChange": false,
					"bFilter": false
				}).draw();
			}
			else {

				DrawTable();
			}
		}
		else {

			$('#skillsdata').DataTable().clear();
			$('#skillsdata').DataTable().destroy();
			DrawTable();

		}
		var table = $('#skillsdata');
		$compile(table)($scope);

	}


	function DrawTable() {
		
		var data = $scope.AllData;

		var table = $('#skillsdata');

		var datatablevar = table.DataTable({
			data: data,
			dom: 'lfrtip',
			columns: [
				
				{
					"data": "SkillSetName"
				},
				{
					"data": "SkillSetID",
					"render": function (data) {
						return '<a href class="table-action-btn btn-info" title="Edit skill" ng-click="editskill(' + data + ')"><i class="ion-edit"></i></a>&nbsp;&nbsp;<a href class="table-action-btn btn-info" title="Delete skill" ng-click="deleteskill(' + data + ')"><i class="ion-trash-b"></i></a>';
					}
				},
			]
		}).draw();

	}

	$scope.AddSkills = function(isValid){
		if (isValid) {
			var btnval = document.getElementById("savebtn").innerHTML;
			if (btnval == "Update") {
				$http.post("PHP/Skill_operations.php", {
					'Skillid': localStorage.getItem("skillid"),
					'Skillname': $scope.SName,
					'type': "Update"
				}).then(function (response) {
					console.log(response.data);
					swal({
						title: "Updated Successfully!",
						text: "Skill updated successfully",
						type: "success"
					});
					$scope.SName = "";
					document.getElementById("savebtn").innerHTML = "Save";
					$scope.GetSkillsData();
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
			else {
				$http.post("PHP/Skill_operations.php", {
					'Skillname': $scope.SName,
					'type': "Save"
				}).then(function (response) {
					console.log(response.data);
					swal({
						title: "Added Successfully!",
						text: "Skill added successfully",
						type: "success"
					});
					$scope.SName = "";
					$scope.GetSkillsData();
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			}
		}
		else {
			document.getElementById("errormsg").innerHTML = "Please enter skill name";
		}
	}

	$scope.editskill = function(id){
		localStorage.setItem("skillid",id);
		$http.post("PHP/Skill_operations.php", {
			'id': id,
			'type': "Edit"
		}).then(function (response) {
			console.log(response.data);
			$scope.SName = response.data[0].SkillSetName;
			document.getElementById("savebtn").innerHTML = "Update";
		}, function (error) {
			console.log("Sorry! Data Couldn't be inserted!");
			console.log(error);
		});
	}

	$scope.deleteskill = function(id){
		swal({
			title: 'Are you sure?',
			text: "Skill we be deleted from system!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {

				$http.post("PHP/Skill_operations.php", {
					'id': id,
					'type': 'Delete'
				}).then(function (response) {
					console.log(response.data);
					$scope.GetSkillsData();
					  swal(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				  )
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
				
			}
		})
	}
});

iComissionapp.controller('pricingController', function ($scope, $compile, $http, $location) {
	$('#preloader').delay(350).fadeOut('slow');
});



/************************************  Membership Plan ***************************************************************/
	
	iComissionapp.controller('CreatePlanController', function ($scope, $http, $location)
	{
		$scope.UserID = localStorage.getItem('UserAccountID');
		
		$scope.myPlan;
		
		$scope.getSelectedValue =function()
		{
			document.getElementById("div_Intro").style.display="none";
			document.getElementById("div_Basic").style.display="none";
			document.getElementById("div_Plus").style.display="none";
			document.getElementById("div_Professional").style.display="none";
			document.getElementById("div_Premier").style.display="none";
			document.getElementById('div_' + $scope.myPlan).style.display = "block";
			
			
		}
				/*check box value inital*/ 
				
				$scope.checkbox1 = 0;
				$scope.checkbox2 = 0;
				$scope.checkbox3 = 0;
				$scope.checkbox4 = 0;
				$scope.checkbox5 = 0;
				$scope.checkbox6 = 0;
				$scope.checkbox7 = 0;
				$scope.checkbox8 = 0;
				$scope.checkbox9 = 0;
				$scope.checkbox10 = 0;
				$scope.checkbox11 = 0;
				$scope.checkbox12 = 0;
				$scope.checkbox13 = 0;
				$scope.checkbox14 = 0;
				$scope.checkbox15 = 0;
				$scope.checkbox16 = 0;
				$scope.checkbox17 = 0;
				$scope.checkbox18 = 0;
				$scope.checkbox19 = 0;
				$scope.checkbox20 = 0;
				$scope.checkbox21 = 0;
				$scope.checkbox22 = 0;
				$scope.checkbox23 = 0;
				$scope.checkbox24 = 0;
				$scope.checkbox25 = 0;
				$scope.checkbox26 = 0;
				$scope.checkbox27 = 0;
				$scope.checkbox28 = 0;
				$scope.checkbox29 = 0;
				$scope.checkbox30 = 0;
				$scope.checkbox31 = 0;
				$scope.checkbox32 = 0;
				
				$scope.noOfBids_I=0;
				$scope.noOfBids_B=0;
				$scope.noOfBids_P=0;
				$scope.noOfBids_Pro=0;
				$scope.noOfBids_Pre=0;


				$scope.noOFSkills_I=0;
				$scope.noOFSkills_B=0;
				$scope.noOFSkills_P=0;
				$scope.noOFSkills_Pro=0;
				$scope.noOFSkills_Pre=0;

				$scope.empFollowings_B=0;
				$scope.empFollowings_P=0;
				$scope.empFollowings_Pro=0;

				$scope.extInvoice_P=0;
				$scope.extInvoice_Pro=0;
				
				

		$scope.createIntoPlan = function()
		{
			
			//alert($scope.checkbox6)
			
			$http.post("PHP/Save_IntroPlan.php", {
				'PlanName':'Intro',
				'NoOFBids':$scope.noOfBids_I,
				'NoOfSkills':$scope.noOFSkills_I,
				'CreatorID': $scope.UserID,
				'UnlockRewards':$scope.checkbox1,
				'UnlimitedProjectBookmarks':$scope.checkbox2,
				'CustomCoverPhoto':$scope.checkbox3
				
			}).then(function (response) {
				console.log(response.data);
				//alert(console.data);
				if(response.data.data==true)
				{
					$location.path("MyPlan")
				}
				else if (response.data=="error")
				{
					swal({
						title: "Already Created Plan!",
						text: "",
						type: "info"
					});
					$location.path('MyPlan');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

		$scope.createBasicPlan = function()
		{
				//alert($scope.noOfBids_B+$scope.noOFSkills_B+$scope.empFollowings_B);
				$http.post("PHP/Save_BasicPlan.php", {
					'PlanName':'Basic',
					'NoOFBids':$scope.noOfBids_B,
					'NoOfSkills':$scope.noOFSkills_B,
					'EmpFollw':$scope.empFollowings_B,
					'CreatorID': $scope.UserID,
					'UnlockRewards':$scope.checkbox4,
					'UnlimitedProjectBookmarks':$scope.checkbox5,
					'CustomCoverPhoto':$scope.checkbox6
					
				}).then(function (response) {
					console.log(response.data);
					//alert(console.data);
					if(response.data.data==true)
					{
						$location.path("MyPlan")
					}
					else if (response.data=="error")
					{
						swal({
							title: "Already Created Plan!",
							text: "",
							type: "info"
						});
						$location.path('MyPlan');
					}
				}, function (error) {
					console.log("Sorry! Data Couldn't be inserted!");
					console.log(error);
				});
			
		}

		
		$scope.createPlusPlan=function()
		{
			
			$scope.extInvoice_P;
			//alert($scope.noOfBids_P+$scope.noOFSkills_P+$scope.empFollowings_P);
			$http.post("PHP/Save_PlusPlan.php", {
				'PlanName':'Plus',
				'NoOFBids':$scope.noOfBids_P,
				'NoOfSkills':$scope.noOFSkills_P,
				'EmpFollw':$scope.empFollowings_P,
				'ExtInvoice':$scope.extInvoice_P,
				'CreatorID': $scope.UserID,
				'UnlockRewards':$scope.checkbox7,
				'UnlimitedProjectBookmarks':$scope.checkbox8,
				'CustomCoverPhoto':$scope.checkbox9,
				'DailyWithdrawals':$scope.checkbox10,
				'PreferredAssignmentSeekerEligible':$scope.checkbox13,
				'FreeProjectExtensions':$scope.checkbox11,
				'HighValueProjectBidding':$scope.checkbox12
				
			}).then(function (response) {
				console.log(response.data);
				//alert(console.data);
				if(response.data.data==true)
				{
					$location.path("MyPlan")
				}
				else if (response.data=="error")
				{
					swal({
						title: "Already Created Plan!",
						text: "",
						type: "info"
					});
					$location.path('MyPlan');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
			
		}
		$scope.createProPlan = function()
		{
			$scope.extInvoice_Pro;	
			$http.post("PHP/Save_ProPlan.php", {
				'PlanName':'Professional',
				'NoOFBids':$scope.noOfBids_Pro,
				'NoOfSkills':$scope.noOFSkills_Pro,
				'EmpFollw':$scope.empFollowings_Pro,
				'ExtInvoice':$scope.extInvoice_Pro,
				'CreatorID': $scope.UserID,
				'UnlockRewards':$scope.checkbox14,
				'UnlimitedProjectBookmarks':$scope.checkbox15,
				'CustomCoverPhoto':$scope.checkbox16,
				'DailyWithdrawals':$scope.checkbox17,
				'PreferredAssignmentSeekerEligible':$scope.checkbox20,
				'FreeProjectExtensions':$scope.checkbox18,
				'HighValueProjectBidding':$scope.checkbox19,
				'FreeSealedProjects':$scope.checkbox21
				
			}).then(function (response) {
				console.log(response.data);
				//alert(console.data);
				if(response.data.data==true)
				{
					$location.path("MyPlan")
				}
				else if (response.data=="error")
				{
					swal({
						title: "Already Created Plan!",
						text: "",
						type: "info"
					});
					$location.path('MyPlan');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
		$scope.createPrePlan = function()
		{
				
			$http.post("PHP/Save_PrePlan.php", {
				'PlanName':'Premier',
				'NoOFBids':$scope.noOfBids_Pre,
				'NoOfSkills':$scope.noOFSkills_Pre,
				'CreatorID': $scope.UserID,
				'UnlockRewards':$scope.checkbox22,
				'UnlimitedProjectBookmarks':$scope.checkbox23,
				'CustomCoverPhoto':$scope.checkbox24,
				'DailyWithdrawals':$scope.checkbox25,
				'PreferredAssignmentSeekerEligible':$scope.checkbox28,
				'FreeProjectExtensions':$scope.checkbox26,
				'HighValueProjectBidding':$scope.checkbox27,
				'FreeSealedProjects':$scope.checkbox29,
				'FreeNDAProjects':$scope.checkbox30,
				'UnlimitedEmployerFollowings':$scope.checkbox32,
				'UnlimitedExternalInvoicing':$scope.checkbox31
				
			}).then(function (response) {
				console.log(response.data);
				//alert(console.data);
				if(response.data.data==true)
				{
					$location.path("MyPlan")
				}
				else if (response.data=="error")
				{
					swal({
						title: "Already Created Plan!",
						text: "",
						type: "info"
					});
					$location.path('MyPlan');
					$('.cssload-container').delay(300).fadeOut('slow');
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

	});

	iComissionapp.controller('MyPlanController', function ($scope, $http, $location)
	{
		document.getElementById("myplanlist").style.display="block";
		document.getElementById("plandesc").style.display="none";	
		

		$scope.UserID = localStorage.getItem('UserAccountID');

		$scope.displayplanlist = function()
		{
			document.getElementById("myplanlist").style.display="block";
			document.getElementById("plandesc").style.display="none";
			
		}
		
		$scope.getMyPlanList =function()
		{
			document.getElementById("myplanlist").style.display="block";
			document.getElementById("plandesc").style.display="none";
			$http.post("PHP/Get_MyPlan.php", {
				'CreatorID': $scope.UserID
				
			}).then(function (response) {
				console.log(response.data);
				$scope.myPlanList = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
		
		$scope.getPlanID = function(name,id)
		{

			localStorage.setItem('Config-UserPlanID',id);
			localStorage.setItem("Config-PlanName",name);
			$location.path("ConfigurePlan");
		}
		
		$scope.viewPlan = function(id)
		{
			document.getElementById("myplanlist").style.display="none";
			document.getElementById("plandesc").style.display="block";
			$http.post("PHP/Get_MyPlanDetails.php", {
				'CreatorID': $scope.UserID,
				'UserPlanID':id	
			}).then(function (response) {
				console.log(response.data);
				$scope.myPlanDetails = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
		$scope.deletePlanID = function(id)
		{

			$http.post("PHP/Delete_DeleteMyPlan.php", {
				'CreatorID': $scope.UserID,
				'UserPlanID':id
			}).then(function (response) {
				console.log(response.data);
				if(response.data.data==true)
				{
					$scope.getMyPlanList();
				}
				//$scope.myPlanList = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}

		$scope.editPlan = function(name,id)
		{
			localStorage.setItem('Edit-UserPlanID',id);
			localStorage.setItem("Edit-PlanName",name);
			$location.path("EditPlan");

			
		}

		
		
	});


	iComissionapp.controller('ConfigurePlanController', function ($scope, $http, $location)
	{
		$scope.UserID = localStorage.getItem('UserAccountID');
		$scope.PlanName = localStorage.getItem("Config-PlanName");	
		$scope.UserPlanID = localStorage.getItem('Config-UserPlanID');

		$scope.configurePlan  = function()
		{
			$http.post("PHP/Save_ConfigureMyPlan.php", {
				'CreatorID': $scope.UserID,
				'UserPlanID':$scope.UserPlanID,
				'AnnualSubs':$scope.AnnualSubs,
				'MonthSubs':$scope.MonthSubs,
				'Desc':$scope.desc
			}).then(function (response) {
				console.log(response.data);
				if(response.data.data==false)
				{
					
					swal({
						title: "Already Configured!",
						text: "You have already configured Plan",
						type: "info"
					});
					$location.path('MyPlan');
				}
				else
				{	
					swal({
						title: "Configured Plan Suceessfully!",
						text: "",
						type: "info"
					});
					$location.path('MyPlan');
				}
				//$scope.myPlanList = response.data;
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
		}
	});
		
	iComissionapp.controller('EditPlanController', function ($scope, $http, $location)
	{
		$scope.UserID = localStorage.getItem('UserAccountID');
		$scope.PlanName = localStorage.getItem("Edit-PlanName");	
		$scope.UserPlanID = localStorage.getItem('Edit-UserPlanID');

			
			
		$scope.getSelectedValue =function()
		{
			//alert($scope.PlanName);
			/*document.getElementById("div_Intro").style.display="none";
			document.getElementById("div_Basic").style.display="none";
			document.getElementById("div_Plus").style.display="none";
			document.getElementById("div_Professional").style.display="none";
			document.getElementById("div_Premier").style.display="none";*/
			document.getElementById('div_'+$scope.PlanName).style.display = "block";
			
			
		}
				
			
			
		
			$scope.checkbox1 = 0;
			$scope.checkbox2 = 0;
			$scope.checkbox3 = 0;
			$scope.checkbox4 = 0;
			$scope.checkbox5 = 0;
			$scope.checkbox6 = 0;
			$scope.checkbox7 = 0;
			$scope.checkbox8 = 0;
			$scope.checkbox9 = 0;
			$scope.checkbox10 = 0;
			$scope.checkbox11 = 0;
			$scope.checkbox12 = 0;
			$scope.checkbox13 = 0;
			$scope.checkbox14 = 0;
			$scope.checkbox15 = 0;
			$scope.checkbox16 = 0;
			$scope.checkbox17 = 0;
			$scope.checkbox18 = 0;
			$scope.checkbox19 = 0;
			$scope.checkbox20 = 0;
			$scope.checkbox21 = 0;
			$scope.checkbox22 = 0;
			$scope.checkbox23 = 0;
			$scope.checkbox24 = 0;
			$scope.checkbox25 = 0;
			$scope.checkbox26 = 0;
			$scope.checkbox27 = 0;
			$scope.checkbox28 = 0;
			$scope.checkbox29 = 0;
			$scope.checkbox30 = 0;
			$scope.checkbox31 = 0;
			$scope.checkbox32 = 0;

			/*$scope.AnnualSubs=0;
			$scope.MonthSubs=0;
			$scope.desc="";*/
			//$scope.checkbox1=false;

			$http.post("PHP/Get_MyPlanDetails.php", {
				'CreatorID': $scope.UserID,
				'UserPlanID':$scope.UserPlanID	
			}).then(function (response) {
				console.log(response.data);
				for(var i=0;i<response.data.length;i++)
				{
					//"PlanconfigurationDestails" in response.data[i]? console.log('key exists') : console.log('unknown key')
					
					if(response.data[i].PlanDesc.PlanName=='Intro')
					{
						//alert("in intro");
						$scope.Planname = response.data[i].PlanDesc.PlanName
						$scope.noOfBids_I = response.data[i].NoOfBids;
						$scope.noOFSkills_I = response.data[i].NoOfSkills,
						$scope.checkbox1 = response.data[i].PlanFeatures.UnlockRewards;
						$scope.checkbox2 = response.data[i].PlanFeatures.UnlimitedProjectBookmarks;
						$scope.checkbox3 = response.data[i].PlanFeatures.CustomCoverPhoto;
						//alert($scope.checkbox3);
						if("PlanconfigurationDestails" in response.data[i])
						{
							$scope.AnnualSubs=response.data[i].PlanconfigurationDestails.AnnualSubs;
							$scope.MonthSubs=response.data[i].PlanconfigurationDestails.MonthSubs;
							$scope.desc=response.data[i].PlanconfigurationDestails.Description;
						}
						else
						{
							$scope.AnnualSubs=0;
							$scope.MonthSubs=0;
							$scope.desc="";
						}
						
					}
					else if(response.data[i].PlanDesc.PlanName=='Basic')
					{
						
						
						$scope.Planname = response.data[i].PlanDesc.PlanName
						$scope.noOfBids_B = response.data[i].NoOfBids;
						$scope.noOFSkills_B = response.data[i].NoOfSkills,
						$scope.empFollowings_B = response.data[i].NoOfEmpFollw,
						$scope.checkbox4 = response.data[i].PlanFeatures.UnlockRewards;
						$scope.checkbox5 = response.data[i].PlanFeatures.UnlimitedProjectBookmarks;
						$scope.checkbox6 = response.data[i].PlanFeatures.CustomCoverPhoto;
						
						if("PlanconfigurationDestails" in response.data[i])
						{
							$scope.AnnualSubs=response.data[i].PlanconfigurationDestails.AnnualSubs;
							$scope.MonthSubs=response.data[i].PlanconfigurationDestails.MonthSubs;
							$scope.desc=response.data[i].PlanconfigurationDestails.Description;
						}
						else
						{
							$scope.AnnualSubs=0;
							$scope.MonthSubs=0;
							$scope.desc="";
						}
						
					}
					else if(response.data[i].PlanDesc.PlanName=='Plus')
					{
						
						
						$scope.Planname = response.data[i].PlanDesc.PlanName
						$scope.noOfBids_P = response.data[i].NoOfBids;
						$scope.noOFSkills_P = response.data[i].NoOfSkills,
						$scope.empFollowings_P = response.data[i].NoOfEmpFollw,
						$scope.extInvoice_P = response.data[i].NoOfExtInvoice,
						$scope.checkbox7 = response.data[i].PlanFeatures.UnlockRewards;
						$scope.checkbox8 = response.data[i].PlanFeatures.UnlimitedProjectBookmarks;
						$scope.checkbox9 = response.data[i].PlanFeatures.CustomCoverPhoto;
						$scope.checkbox10 = response.data[i].PlanFeatures.DailyWithdrawals;
						$scope.checkbox11 = response.data[i].PlanFeatures.FreeProjectExtensions;
						$scope.checkbox12 = response.data[i].PlanFeatures.HighValueProjectBidding;
						$scope.checkbox13 = response.data[i].PlanFeatures.PreferredAssignmentSeekerEligible;
						
						if("PlanconfigurationDestails" in response.data[i])
						{
							$scope.AnnualSubs=response.data[i].PlanconfigurationDestails.AnnualSubs;
							$scope.MonthSubs=response.data[i].PlanconfigurationDestails.MonthSubs;
							$scope.desc=response.data[i].PlanconfigurationDestails.Description;
						}
						else
						{
							$scope.AnnualSubs=0;
							$scope.MonthSubs=0;
							$scope.desc="";
						}
						
					}
					else if(response.data[i].PlanDesc.PlanName=='Professional')
					{
						
						
						$scope.Planname = response.data[i].PlanDesc.PlanName
						$scope.noOfBids_Pro = response.data[i].NoOfBids;
						$scope.noOFSkills_Pro = response.data[i].NoOfSkills,
						$scope.empFollowings_Pro = response.data[i].NoOfEmpFollw,
						$scope.extInvoice_Pro = response.data[i].NoOfExtInvoice,
						$scope.checkbox14 = response.data[i].PlanFeatures.UnlockRewards;
						$scope.checkbox15= response.data[i].PlanFeatures.UnlimitedProjectBookmarks;
						$scope.checkbox16 = response.data[i].PlanFeatures.CustomCoverPhoto;
						$scope.checkbox17 = response.data[i].PlanFeatures.DailyWithdrawals;
						$scope.checkbox18 = response.data[i].PlanFeatures.FreeProjectExtensions;
						$scope.checkbox19 = response.data[i].PlanFeatures.HighValueProjectBidding;
						$scope.checkbox20 = response.data[i].PlanFeatures.PreferredAssignmentSeekerEligible;
						$scope.checkbox21 = response.data[i].PlanFeatures.FreeSealedProjects;

						if("PlanconfigurationDestails" in response.data[i])
						{
							$scope.AnnualSubs=response.data[i].PlanconfigurationDestails.AnnualSubs;
							$scope.MonthSubs=response.data[i].PlanconfigurationDestails.MonthSubs;
							$scope.desc=response.data[i].PlanconfigurationDestails.Description;
						}
						else
						{
							$scope.AnnualSubs=0;
							$scope.MonthSubs=0;
							$scope.desc="";
						}
						
					}
					else if(response.data[i].PlanDesc.PlanName=='Premier')
					{
						
						
						$scope.Planname = response.data[i].PlanDesc.PlanName
						$scope.noOfBids_Pre = response.data[i].NoOfBids;
						$scope.noOFSkills_Pre = response.data[i].NoOfSkills,
						$scope.checkbox22 = response.data[i].PlanFeatures.UnlockRewards;
						$scope.checkbox23 = response.data[i].PlanFeatures.UnlimitedProjectBookmarks;
						$scope.checkbox24 = response.data[i].PlanFeatures.CustomCoverPhoto;
						$scope.checkbox25 = response.data[i].PlanFeatures.DailyWithdrawals;
						$scope.checkbox26 = response.data[i].PlanFeatures.FreeProjectExtensions;
						$scope.checkbox27 = response.data[i].PlanFeatures.HighValueProjectBidding;
						$scope.checkbox28 = response.data[i].PlanFeatures.PreferredAssignmentSeekerEligible;
						$scope.checkbox29 = response.data[i].PlanFeatures.FreeSealedProjects;
						$scope.checkbox30 = response.data[i].PlanFeatures.FreeNDAProjects;
						$scope.checkbox31 = response.data[i].PlanFeatures.UnlimitedExternalInvoicing;
						$scope.checkbox32 = response.data[i].PlanFeatures.UnlimitedEmployerFollowings;
						if("PlanconfigurationDestails" in response.data[i])
						{
							$scope.AnnualSubs=response.data[i].PlanconfigurationDestails.AnnualSubs;
							$scope.MonthSubs=response.data[i].PlanconfigurationDestails.MonthSubs;
							$scope.desc=response.data[i].PlanconfigurationDestails.Description;
						}
						else
						{
							$scope.AnnualSubs=0;
							$scope.MonthSubs=0;
							$scope.desc="";
						}
						
					}
					
					
				}
			}, function (error) {
				console.log("Sorry! Data Couldn't be inserted!");
				console.log(error);
			});
			
			
			
				$scope.createIntoPlan = function()
				{
					
					$http.post("PHP/Update_IntroPlan.php", {
						'NoOFBids':$scope.noOfBids_I,
						'NoOfSkills':$scope.noOFSkills_I,
						'CreatorID': $scope.UserID,
						'UnlockRewards':$scope.checkbox1,
						'UnlimitedProjectBookmarks':$scope.checkbox2,
						'CustomCoverPhoto':$scope.checkbox3,
						'UserPlanID':$scope.UserPlanID,
						'AnnualSubs':$scope.AnnualSubs,
						'MonthSubs':$scope.MonthSubs,
						'Desc':$scope.desc
						
					}).then(function (response) {
						console.log(response.data);
						//alert(console.data);
						if(response.data.data==true)
						{
							swal({
								title: "Updated Plan Successfully..!",
								text: "",
								type: "info"
							});
							$location.path("MyPlan")
						}
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
					
					
				}
			
				$scope.createBasicPlan = function()
				{
						//alert($scope.noOfBids_B+$scope.noOFSkills_B+$scope.empFollowings_B);
						$http.post("PHP/Update_BasicPlan.php", {
							'NoOFBids':$scope.noOfBids_B,
							'NoOfSkills':$scope.noOFSkills_B,
							'EmpFollw':$scope.empFollowings_B,
							'CreatorID': $scope.UserID,
							'UnlockRewards':$scope.checkbox4,
							'UnlimitedProjectBookmarks':$scope.checkbox5,
							'CustomCoverPhoto':$scope.checkbox6,
							'UserPlanID':$scope.UserPlanID,
							'AnnualSubs':$scope.AnnualSubs,
							'MonthSubs':$scope.MonthSubs,
							'Desc':$scope.desc
							
						}).then(function (response) {
							console.log(response.data);
							//alert(console.data);
							if(response.data.data==true)
							{
								swal({
									title: "Updated Plan Successfully..!",
									text: "",
									type: "info"
								});
								$location.path("MyPlan")
							}
						}, function (error) {
							console.log("Sorry! Data Couldn't be inserted!");
							console.log(error);
						});
					
				}
			
				
				$scope.createPlusPlan=function()
				{
					
					$scope.extInvoice_P;
					//alert($scope.noOfBids_P+$scope.noOFSkills_P+$scope.empFollowings_P);
					$http.post("PHP/Update_PlusPlan.php", {
						'NoOFBids':$scope.noOfBids_P,
						'NoOfSkills':$scope.noOFSkills_P,
						'EmpFollw':$scope.empFollowings_P,
						'ExtInvoice':$scope.extInvoice_P,
						'CreatorID': $scope.UserID,
						'UnlockRewards':$scope.checkbox7,
						'UnlimitedProjectBookmarks':$scope.checkbox8,
						'CustomCoverPhoto':$scope.checkbox9,
						'DailyWithdrawals':$scope.checkbox10,
						'PreferredAssignmentSeekerEligible':$scope.checkbox13,
						'FreeProjectExtensions':$scope.checkbox11,
						'HighValueProjectBidding':$scope.checkbox12,
						'UserPlanID':$scope.UserPlanID,
						'AnnualSubs':$scope.AnnualSubs,
						'MonthSubs':$scope.MonthSubs,
						'Desc':$scope.desc
						
					}).then(function (response) {
						console.log(response.data);
						//alert(console.data);
						if(response.data.data==true)
						{
							swal({
								title: "Updated Plan Successfully..!",
								text: "",
								type: "info"
							});
							$location.path("MyPlan")
						}
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
					
				}

				$scope.createProPlan = function()
				{
					$scope.extInvoice_Pro;	
					$http.post("PHP/Update_ProPlan.php", {
						'NoOFBids':$scope.noOfBids_Pro,
						'NoOfSkills':$scope.noOFSkills_Pro,
						'EmpFollw':$scope.empFollowings_Pro,
						'ExtInvoice':$scope.extInvoice_Pro,
						'CreatorID': $scope.UserID,
						'UnlockRewards':$scope.checkbox14,
						'UnlimitedProjectBookmarks':$scope.checkbox15,
						'CustomCoverPhoto':$scope.checkbox16,
						'DailyWithdrawals':$scope.checkbox17,
						'PreferredAssignmentSeekerEligible':$scope.checkbox20,
						'FreeProjectExtensions':$scope.checkbox18,
						'HighValueProjectBidding':$scope.checkbox19,
						'FreeSealedProjects':$scope.checkbox21,
						'UserPlanID':$scope.UserPlanID,
						'AnnualSubs':$scope.AnnualSubs,
						'MonthSubs':$scope.MonthSubs,
						'Desc':$scope.desc
						
					}).then(function (response) {
						console.log(response.data);
						//alert(console.data);
						if(response.data.data==true)
						{
							swal({
								title: "Updated Plan Successfully..!",
								text: "",
								type: "info"
							});
							$location.path("MyPlan")
						}
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}

				$scope.createPrePlan = function()
				{
						
					$http.post("PHP/Update_PrePlan.php", {
						'NoOFBids':$scope.noOfBids_Pre,
						'NoOfSkills':$scope.noOFSkills_Pre,
						'CreatorID': $scope.UserID,
						'UnlockRewards':$scope.checkbox22,
						'UnlimitedProjectBookmarks':$scope.checkbox23,
						'CustomCoverPhoto':$scope.checkbox24,
						'DailyWithdrawals':$scope.checkbox25,
						'PreferredAssignmentSeekerEligible':$scope.checkbox28,
						'FreeProjectExtensions':$scope.checkbox26,
						'HighValueProjectBidding':$scope.checkbox27,
						'FreeSealedProjects':$scope.checkbox29,
						'FreeNDAProjects':$scope.checkbox30,
						'UnlimitedEmployerFollowings':$scope.checkbox32,
						'UnlimitedExternalInvoicing':$scope.checkbox31,
						'UserPlanID':$scope.UserPlanID,
						'AnnualSubs':$scope.AnnualSubs,
						'MonthSubs':$scope.MonthSubs,
						'Desc':$scope.desc
						
					}).then(function (response) {
						console.log(response.data);
						//alert(console.data);
						if(response.data.data==true)
						{
							swal({
								title: "Updated Plan Successfully..!",
								text: "",
								type: "info"
							});
							$location.path("MyPlan")
						}
					}, function (error) {
						console.log("Sorry! Data Couldn't be inserted!");
						console.log(error);
					});
				}
			
		

		
	});

/************************************ Membership Plan ***************************************************************/