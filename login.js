     function login_page() {
        let uname = document.form1.uname.value;
        let pass = document.form1.pass.value;
          if (uname == "") {
            document.getElementById("uname").innerHTML = "Enter username";
            document.getElementById("u_name").innerHTML = "<style>#u_name{border:2px solid red;}</style>"
            return false;
        }
          if (pass == "") {
            document.getElementById("passwd").innerHTML = "<style>#passwd{border:2px solid red;}</style>";
            document.getElementById("pwd").innerHTML = "Enter password";
            return false;
            }

        }
