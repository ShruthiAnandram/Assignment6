    /*eslint-env browser*/

    // INITIALIZATION
      function init() {
            "use strict";
          
            // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
            var width = 800;
            var height = 700;
          
            // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
            window.resizeTo(width, height);
          
            // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
            window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
          
            
            // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
            var cancel = window.document.getElementById("cancel");
            cancel.addEventListener("click", function() {
                window.close();
            });
            
          
            // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
            var submit = window.document.getElementById("submit");
            submit.addEventListener("click", function (e) {
            e.preventDefault();
                
                
            // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
            // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
                var id = window.document.getElementById("id").value;
                var name = window.document.getElementById("name").value;
                var extn = window.document.getElementById("extension").value;
                var email = window.document.getElementById("email").value;
                var dept = window.document.getElementById("department").value;
                
                // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
                var output = window.opener.document.getElementById("loginDetails");
                
                // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
                output.innerHTML = "<br><br>id: " + id + "<br>name: " + name + "<br>extn: " + extn + "<br>email: " + email + "<br>dept: " + dept;
                
                // CLOSE THE POPUP
                window.close();
                
                // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
            });
        }

        // HANDLE THE LOAD EVENT OF THE WINDOW
        window.addEventListener("load", init);