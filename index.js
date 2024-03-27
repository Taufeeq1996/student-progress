const mainSection = document.querySelector('.all-students');

const btn = document.getElementById('btn');

let newDiv;
let popDiv;
let newInput;
let newHeading;
let addBtn = document.createElement('button');
let label1;
let label2;
let label3;
let label4;
let label5;
let checkBox1;
let checkBox2;
let checkBox3;
let checkBox4;
let checkBox5;


btn.addEventListener('click', () => {
    popDiv = document.createElement('div');
    newInput = document.createElement('input');
    popDiv.appendChild(newInput);
    popDiv.appendChild(addBtn);
    mainSection.appendChild(popDiv);
}) 

addBtn.addEventListener('click', () => {
    label1 = document.createElement('label');
    label1.innerHTML = 'Email';
    label1.setAttribute('for','s1-email');
    checkBox1 = document.createElement('input');
    checkBox1.setAttribute('type','checkbox');
    checkBox1.setAttribute('name','email');
    checkBox1.setAttribute('id','s1-email');
    console.log(checkBox1.checked);
    label3 = document.createElement('label');
    label3.innerHTML = 'slack';
    label3.setAttribute('for','s1-slack');
    checkBox3 = document.createElement('input');
    checkBox3.setAttribute('type','checkbox');
    checkBox3.setAttribute('name','slack');
    checkBox3.setAttribute('id','s1-slack');
    label4 = document.createElement('label');
    label4.innerHTML = 'Kixie Call';
    label4.setAttribute('for','s1-kixie-call');
    checkBox4 = document.createElement('input');
    checkBox4.setAttribute('type','checkbox');
    checkBox4.setAttribute('name','Kixie Call');
    checkBox4.setAttribute('id','s1-kixie-call');
    label5 = document.createElement('label');
    label5.innerHTML = 'Kixie message';
    label5.setAttribute('for','s1-kixie-message');
    checkBox5 = document.createElement('input');
    checkBox5.setAttribute('type','checkbox');
    checkBox5.setAttribute('name','kixie-message');
    checkBox5.setAttribute('id','s1-kixie-message');
    label2 = document.createElement('label');
    label2.innerHTML = 'iplum';
    label2.setAttribute('for','s1-iplum');
    checkBox2 = document.createElement('input');
    checkBox2.setAttribute('type','checkbox');
    checkBox2.setAttribute('name','iplum');
    checkBox2.setAttribute('id','s1-iplum');
    newHeading = document.createElement('h2');
    newHeading.innerHTML = newInput.value;
    newDiv = document.createElement('div');
    newDiv.appendChild(newHeading);
    newDiv.appendChild(label1);
    newDiv.appendChild(checkBox1);
    newDiv.appendChild(label2);
    newDiv.appendChild(checkBox2);
    newDiv.appendChild(label3);
    newDiv.appendChild(checkBox3);
    newDiv.appendChild(label4);
    newDiv.appendChild(checkBox4);
    newDiv.appendChild(label5);
    newDiv.appendChild(checkBox5);
    mainSection.appendChild(newDiv);
    popDiv.style.display = 'none';
    getCheckBoxState();

})

console.log(checkBox1.checked);



function saveCheckBoxState(){
    // let isChecked = checkBox1.checked;
    localStorage.setItem('name',newHeading);
}

function getCheckBoxState(){
    let name = localStorage.getItem('name');
    newDiv.appendChild();

    // if(name){
    //     checkBox1.checked = true;
    // }else{
    //     checkBox1.checked = false;
    // }
}

// getCheckBoxState();

