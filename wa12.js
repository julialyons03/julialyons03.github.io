// build the  json inside javascript file
// ex: var json_obj = [{"FirstName":"Gertrude",
//                      "LastName":"Higgins",
// }]


// Problem 1:
// create JSON for employees

const sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
    };
    
    const mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
    };
    
    const bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
    };
    
    console.log(sam);
    console.log(mary);
    console.log(bill);
    
    // Problem 2
    // create JSON for company

    const employeeList = [sam, mary, bill];
    
    const techStars = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employeeList,
    };
    
    console.log(techStars);
    
    // Problem 3
    // add anna

    const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
    };
    
    techStars.employees.push(anna);
    
    console.log(techStars);
    
    // Problem 4:
    // calculate total salary

    let totalSalary = 0;
    for (let i = 0; i < techStars.employees.length; i++) {
    totalSalary += techStars.employees[i].salary;
    }
    
    console.log(totalSalary);
    
    // Problem 5
    // give raise of 10% or set eligibility to false

    function raise(employee) {
    if (employee.raiseEligible) {
    employee.salary *= 1.1;
    employee.raiseEligible = false;
    }
    }
    
    techStars.employees.forEach(raise);
    console.log(techStars);
    
    // Problem 6
    // update company JSON for people working from home
    
    const workFromHome = ["Anna", "Sam"];
    
    techStars.employees.forEach((employee) => {
    employee.wfh = workFromHome.includes(employee.firstName);
    });
    
    console.log(techStars);
    JSON.stringify;