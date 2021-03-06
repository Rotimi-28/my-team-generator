const Manager = require("../lib/Manager");

const employeeCard = employeeArray => {
    return`
    <div class="team-area justify-content-center d-flex flex-wrap">
    ${employeeArray.map((employee)=> {
        let li = ``;
        if (employee.getRole() == "Manager") {
            li = `<li class="list-group-item">Office nunmber: ${employee.getOfficeNumber()}</li>`

        }else if (employee.getRole() == "Engineer") {
            li = `<li class="list-group-item">github: <a href="https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a></li>`
        
        }else {li = `<li class="list-group-item">school: ${employee.getSchool()}</li>`}
        
        
        return `
        <div class="card m-2 border-info employee-card" style="width: 18rem;">
        <div class="card-header text-white bg-info">
           <h2 class="card-title">${employee.getName()}</h2>
           <h3><i class="fas fas-mug-hot mr-2"></i>${employee.getRole()}</h3>
           <div>
              <div class="card-body">
                  <ul class="list-group text-dark">
                      <li class="list-group-item">ID: ${employee.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                      ${li}
                  </ul>

              </div> 
           </div>
        </div>
    </div>
        `
    }).join('')
}
    </div>
    `
}
function templatBuilder(teams) {
    //take[] and add team card

    return`
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<title>My Team</title>
</head>
<body>
    <div class="cotainer-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 bg-dark text-white team-heading">
             <h1 class="text-center display-4">My Team</h1>
            </div>
        </div>
    </div>
 <div class="container">
     <div class="row">
        ${employeeCard(teams)}
     </div>
 </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>
    `
}
 
module.exports = templatBuilder; 