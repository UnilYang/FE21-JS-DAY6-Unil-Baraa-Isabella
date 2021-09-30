let empList = JSON.parse(employees)

console.table(empList)
console.log(empList)


for (let val of empList) {
    document.getElementById("result").innerHTML += `ID: ${val.userId}<br>First Name: ${val.firstName}<br>Last Name: ${val.lastName}<br>Email: ${val.emailAddress}<br>Job Title: ${val.jobTitleName}<br>Salary: EUR ${val.salary}
<br><hr>`
}