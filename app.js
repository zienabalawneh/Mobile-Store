
let phoneArr = [];
let tableEl = document.getElementById('tableInfo');
function mobile(name, type) {

    this.name = name;
    this.type = type;
    this.price = getRandom(100, 500);
    this.condition = getCondition(this.price);
    phoneArr.push(this);

}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getCondition(p) {
    let temp;
    if (p > 200) {
        temp = 'New';

    } else {
        temp = 'Used';

    }

    return temp;
}




let theadEl = document.createElement('thead');
let trEl1 = document.createElement('tr');
let arrTh = ['User', 'Type', 'Price', 'Condition'];

for (let i = 0; i < arrTh.length; i++) {
    let thEl = document.createElement('th');
    trEl1.appendChild(thEl);
    thEl.textContent = arrTh[i];
}


theadEl.appendChild(trEl1);
tableEl.appendChild(theadEl);

theadEl.hidden = true;

mobile.prototype.renderTable = function () {


    theadEl.hidden = false;

    let tbodyEl = document.createElement('tbody');

    let trEl2 = document.createElement('tr');



    let arrTd = [this.name, this.type, this.price, this.condition];

    for (let i = 0; i < arrTd.length; i++) {

        let tdEl = document.createElement('td');
        trEl2.appendChild(tdEl);
        tdEl.textContent = arrTd[i];
    }

    tbodyEl.appendChild(trEl2);



    tableEl.appendChild(tbodyEl)



}

let form = document.getElementById('form');
form.addEventListener('submit', submmitr);

function submmitr(e) {

    e.preventDefault();


    let name = e.target.name.value;
    let typeMob = e.target.mobileType.value;

    // console.log(name,type);

    let newObj = new mobile(name, typeMob);

    setInfo();

    newObj.renderTable();


}






function setInfo() {
    let str = JSON.stringify(phoneArr);
    localStorage.setItem('mobile', str);

}

// let butRemove=document.getElementById('remove');
// butRemove.addEventListener('click',removeAllInfo);
// function removeAllInfo(){

// tableEl.remove();
// localStorage.removeItem('mobile');

// }



function getInfo() {

    let data = localStorage.getItem('mobile');

   
 let perseObj = JSON.parse(data);
    if (perseObj) {

        for (let i = 0; i < perseObj.length; i++) {
            new mobile(perseObj[i].name, perseObj[i].type);

        }

    }



}

getInfo();


for (let i =0;  i<phoneArr.length;i++) {
    phoneArr[i].renderTable();
    
}



