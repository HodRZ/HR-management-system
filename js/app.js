`use strict`

// DOM stuff

const contentDiv = document.getElementById('contentDiv')

function createCard() {
    const card = document.createElement('div')
    card.classList.add('card')
    return card
}

function avatar() {
    const img = document.createElement('img')
    img.classList.add('employeeImg')
    img.setAttribute('alt', 'avatar')
    return img
}
function createList() {
    const list = document.createElement('ul')
    list.classList.add('info')
    return list
}

function createLi() {
    return document.createElement('li')
}

function employeeName() {
    const heading = document.createElement('h3')
    heading.classList.add('emoloyeeName')
    return heading
}

function fillInfo() {
    const info = []
    for (let i = 0; i < 3; i++) {
        let content = createLi()
        info.push(content)
    } return info
}

// filter stuff
const bttnFilter = document.getElementById('filter')
const bttnReset = document.getElementById('reset')
function newList() {
    const list = document.createElement('ul')
    return list
}
function newDiv() {
    const div = document.createElement('div')
    div.classList.add('content', 'newContent')
    return div
}
function newH2(title) {
    const h2 = document.createElement('h2')
    h2.innerText = (title)
    h2.setAttribute('display', 'block')
    return h2
}

// Constructor Stuff
const employeesList = []

function Employee(fName, department, level, img) {
    this.id = department[0] + level[0] + (Math.floor(Math.random() * 1000));
    this.fName = fName;
    this.department = department.toLowerCase();
    this.level = level.toLowerCase();
    this.img = img;
    this.salary = this.calcSalary()
    employeesList.push(this)
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


const ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior', './assets/Ghazi.png')
const lana = new Employee('Lana Ali', 'Finance', 'Senior', './assets/Lana.png')
const tamara = new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assets/Tamara.png')
const safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior', './assets/Safi.png')
const omar = new Employee('Omar Zaid', 'Development', 'Senior', './assets/Omar.png')
const rana = new Employee('Rana Saleh', 'Development', 'Junior', './assets/Rana.png')
const hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', './assets/Hadi.png')



// Dynamic Filling stuff
const addEmployees = function (arr, place) {
    arr.forEach(item => {
        const card = createCard();
        card.classList.add(item.department)
        const name = employeeName()
        const list = createList();
        const img = avatar();
        name.innerText = item.fName
        img.setAttribute('src', item.img)
        const info = fillInfo()
        info[0].innerText = (`Department : ${item.department}`)
        info[1].innerText = (`Salary : ${item.salary}`)
        info[2].innerText = (`Level : ${item.level}`)
        list.append(...info)
        card.append(img, name, list)
        place.append(card)
    })
}

addEmployees(employeesList, contentDiv)


// filter funcs
//googled the method to convert the HTMLCollection to an Array
const finance = [].slice.call(document.getElementsByClassName('finance'))
const admin = [].slice.call(document.getElementsByClassName('administration'))
const dev = [].slice.call(document.getElementsByClassName('development'))
const marketing = [].slice.call(document.getElementsByClassName('marketing'))

const departments = [finance, admin, marketing, dev]

bttnFilter.addEventListener('click', function () {
    contentDiv.classList.add('hidden')
    const newDivs = []
    for (let i = 0; i < 4; i++) {
        newDivs.push(newDiv())
    }
    newDivs[0].append(newH2('Marketing'), ...marketing)
    newDivs[1].append(newH2('Adminstration'), ...admin)
    newDivs[2].append(newH2('Development'), ...dev)
    newDivs[3].append(newH2('Finance'), ...finance)
    // console.log(newDivs[2])
    contentDiv.insertAdjacentElement("beforebegin", newDivs[0])
    contentDiv.insertAdjacentElement("beforebegin", newDivs[1])
    contentDiv.insertAdjacentElement("beforebegin", newDivs[2])
    contentDiv.insertAdjacentElement("beforebegin", newDivs[3])
    // console.log(newDivs)
})

// a not-perfect work-around for filtering
bttnReset.addEventListener('click', function () {
    window.location.reload()
})




