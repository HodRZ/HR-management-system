`use strict`
const contentDiv = document.getElementById('contentDiv')

function Employee(fName, department, level, img) {
    this.id = department[0] + level[0] + (Math.floor(Math.random() * 1000));
    this.fName = fName;
    this.department = department.toLowerCase();
    this.level = level.toLowerCase();
    this.img = img;
    this.salary = this.calcSalary()
}
Employee.prototype.netSalary = function () {
    return (this.salary - (this.salary * 0.075))
}
Employee.prototype.calcSalary = function () {
    if (this.level === 'junior') {
        return (Math.floor(Math.random() * (1000 - 500 + 1)) + 500)
    } else if (this.level === 'mid-senior') {
        return (Math.floor(Math.random() * (1500 - 1000 + 1)) + 500)
    } else return (Math.floor(Math.random() * (2000 - 1500 + 1)) + 500)
}



const ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior', 'img')
const lana = new Employee('Lana Ali', 'Finance', 'Senior', 'img')
const tamara = new Employee('Tamara Ayoub', 'Marketing', 'Senior', 'img')
const safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior', 'img')
const omar = new Employee('Omar Zaid', 'Development', 'Senior', 'img')
const rana = new Employee('Rana Saleh', 'Development', 'Junior', 'img')
const hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'img')

const employeesList = [ghazi, lana, tamara, safi, omar, rana, hadi]



function addCell(arr) {
    let cell = ''
    for (let name of arr) {
        cell += `<tr>
        <td>${name.fName}</td>
        <td>${name.salary}</td>
        <td>${name.netSalary()}</td>
        </tr>`
    }
    return cell
}

contentDiv.innerHTML = `<h3 class="contentItem1">Employees</h3>
<p class="contentItem2">
    Always check user ID before updating content
</p>
<table class="contentItem3">
    <tr>
        <th>Employee</th>
        <th>Salary</th>
        <th>Net Salary</th>
    </tr>
    ${addCell(employeesList)}
</table>`