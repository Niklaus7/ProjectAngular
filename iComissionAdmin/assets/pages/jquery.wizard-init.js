/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Form wizard page
*/
/*
!function($) {
    "use strict";

    var FormWizard = function() {};

    //used for create interview schedule
    FormWizard.prototype.createBasic = function($form_container) {
        $form_container.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            onStepChanging: function (event, currentIndex, newIndex) {
                //alert("new");
               // angular.element(document.getElementById('JobviewController')).scope().selectedcandidatelist();

                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
            },
            onFinishing: function (event, currentIndex) { 
                //NOTE: Here you can do form validation and return true or false based on your validation logic
                console.log("Form has been validated!");
                return true; 
            }, 
            onFinished: function (event, currentIndex) {
                angular.element(document.getElementById('JobviewController')).scope().SendInterviewScheduleToSelectedCandidate();
                
               //NOTE: Submit the form, if all validation passed.
                //console.log("Form can be submitted using submit method. E.g. $('#basic-form').submit()"); 
                //$("#basic-form").submit();

            }
        });
        return $form_container;
    },

    //creates form with validation ...used for jobpost
    FormWizard.prototype.createValidatorForm = function($form_container) {
        $form_container.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            }
        });
        $form_container.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            onStepChanging: function (event, currentIndex, newIndex) {
                

                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
            },
            onFinishing: function (event, currentIndex) {
                $form_container.validate().settings.ignore = ":disabled";
                return $form_container.valid();
            },
            onFinished: function (event, currentIndex) {
                //alert("Submitted!");
                angular.element(document.getElementById('JobpostController')).scope().Savejobpost();
            }
        });

        return $form_container;
    },

    //creates vertical form ...used for job seeker profile info save
    FormWizard.prototype.createVertical = function($form_container) {
        $form_container.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            }
        });
        $form_container.steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            stepsOrientation: "vertical",
            onStepChanging: function (event, currentIndex, newIndex) {
                

                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
            },
            onFinishing: function (event, currentIndex) { 
                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
                //NOTE: Here you can do form validation and return true or false based on your validation logic
                console.log("Form has been validated!");
                return true; 
            }, 
            onFinished: function (event, currentIndex) {
               //NOTE: Submit the form, if all validation passed.
               
               angular.element(document.getElementById('JobSeekersProfileController')).scope().SavejobseekerProfileinfo();
               

            }
        });
        return $form_container;
    },

    FormWizard.prototype.init = function() {
        //initialzing various forms

        //basic form
        this.createBasic($("#basic-form"));

        //form with validation
        this.createValidatorForm($("#wizard-validation-form"));

        //vertical form
        this.createVertical($("#wizard-vertical"));
    },
    //init
    $.FormWizard = new FormWizard, $.FormWizard.Constructor = FormWizard
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.FormWizard.init()
}(window.jQuery);
*/

/**
* Theme: Ubold Admin Template
* Author: Coderthemes
* Form wizard page
*/

!function($) {
    "use strict";

    var FormWizard = function() {};

    //used for create interview schedule
    FormWizard.prototype.createBasic = function($form_container) {
        $form_container.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            onStepChanging: function (event, currentIndex, newIndex) {
                //alert("new");
               // angular.element(document.getElementById('JobviewController')).scope().selectedcandidatelist();

                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
            },
            onFinishing: function (event, currentIndex) { 
                //NOTE: Here you can do form validation and return true or false based on your validation logic
                console.log("Form has been validated!");
                return true; 
            }, 
            onFinished: function (event, currentIndex) {
                angular.element(document.getElementById('JobviewController')).scope().SendInterviewScheduleToSelectedCandidate();
                
               //NOTE: Submit the form, if all validation passed.
                //console.log("Form can be submitted using submit method. E.g. $('#basic-form').submit()"); 
                //$("#basic-form").submit();

            }
        });
        return $form_container;
    },

    //creates form with validation ...used for jobpost
    FormWizard.prototype.createValidatorForm = function($form_container) {
        $form_container.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            }
        });
        $form_container.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            onStepChanging: function (event, currentIndex, newIndex) {
                

                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
            },
            onFinishing: function (event, currentIndex) {
                $form_container.validate().settings.ignore = ":disabled";
                return $form_container.valid();
            },
            onFinished: function (event, currentIndex) 
            {
                //alert("Submitted!");
                var temp = angular.element(document.getElementById('ProjectPostController')).scope().WiazrdID;
                if(temp =="ProjectPost")
                {
                   // alert("in project post");
                    angular.element(document.getElementById('ProjectPostController')).scope().postProject();

                }
                else
                {
                    //alert("in job post");
                    angular.element(document.getElementById('JobpostController')).scope().Savejobpost();
                    
                }
            }
        });

        return $form_container;
    },

    //creates vertical form ...used for job seeker profile info save
    FormWizard.prototype.createVertical = function($form_container) {
        $form_container.validate({
            errorPlacement: function errorPlacement(error, element) {
                element.after(error);
            }
        });
        $form_container.steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "fade",
            stepsOrientation: "vertical",
            onStepChanging: function (event, currentIndex, newIndex) 
            {
                
                
                    $form_container.validate().settings.ignore = ":disabled,:hidden";
                    return $form_container.valid();
                
                
            },
            onFinishing: function (event, currentIndex) { 
                $form_container.validate().settings.ignore = ":disabled,:hidden";
                return $form_container.valid();
                //NOTE: Here you can do form validation and return true or false based on your validation logic
                console.log("Form has been validated!");
                return true; 
            }, 
            onFinished: function (event, currentIndex) {
               //NOTE: Submit the form, if all validation passed.
                 
                
                var temp = angular.element(document.getElementById('AssignmentSeekersProfileController')).scope().WiazrdID;
                if(temp =="AssignmentSeekersProfile")
                {
                    //alert("in as");
                    angular.element(document.getElementById('AssignmentSeekersProfileController')).scope().SaveAssignmentSeekerProfileinfo();

                }
                else
                {
                    //alert("in js");
                    angular.element(document.getElementById('JobSeekersProfileController')).scope().SavejobseekerProfileinfo();

                }

            }
        });
        return $form_container;
    },

    FormWizard.prototype.init = function() {
        //initialzing various forms

        //basic form
        this.createBasic($("#basic-form"));

        //form with validation
        this.createValidatorForm($("#wizard-validation-form"));

        //vertical form
        this.createVertical($("#wizard-vertical"));
    },
    //init
    $.FormWizard = new FormWizard, $.FormWizard.Constructor = FormWizard
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.FormWizard.init()
}(window.jQuery);