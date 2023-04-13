// build the  json inside javascript file
// ex: var json_obj = [{"FirstName":"Gertrude",
//                      "LastName":"Higgins",
// }]


// Problem 1:
// create JSON for employees

const employeesList = [
    {
        firstName: 'Sam',
        department: 'Tech',
        designation: 'Manager',
        salary: 40000,
        raiseEligible: true
        },
        {
        firstName: 'Mary',
        department: 'Finance',
        designation: 'Trainee',
        salary: 18500,
        raiseEligible: true
        },
        {
        firstName: 'Bill',
        department: 'HR',
        designation: 'Executive',
        salary: 21200,
        raiseEligible: false
        }
        ];


// Problem 2:
// create JSON for company

const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employeesList
    };

    const anna = {
        firstName: 'Anna',
        department: 'Tech',
        designation: 'Executive',
        salary: 25600,
        raiseEligible: false
        };

        if (company.employeesList) {
            company.employeesList.push(anna);
          } else {
            company.employeesList = [anna];
          }
        console.log(company);
    
// Problem 3: (see lines 44-57)
// add anna

// Problem 4:
// calculate total salary

let totalSalary = 0;
for (let i = 0; i < company.employeesList.length; i++) {
totalSalary += company.employeesList[i].salary;
}
console.log(totalSalary);

// Problem 5:
// give raise of 10% or set eligibility to false

function raise(employeesList) {
    for (let i = 0; i < employeesList.length; i++) {
    if (employeesList[i].raiseEligible) {
    employeesList[i].salary *= 1.1;
    employeesList[i].raiseEligible = false;
    }
    }
    }
    
    raise(company.employeesList);
    console.log(company);

//Problem 6:
// update company JSON for people working from home

const workFromHome = ['Anna', 'Sam'];
for (let i = 0; i < company.employeesList.length; i++) {
if (workFromHome.includes(company.employeesList[i].firstName)) {
company.employeesList[i].wfh = true;
} else {
company.employeesList[i].wfh = false;
}
}

console.log(company);






