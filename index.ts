// -------- ฟังก์ชันแบบ 1 argument -----------------------
function single(name){
  return 'Mrs.'+name;
}
//เปลี่ยนเป็น arrow function
const single2 = (name)=>{
  return 'Mrs.'+name;
}
// มี statement เดียวตัด {} และ return
const single3 = (name)=>'Mrs.'+name;

// มี argument เดียว ตัด () ส่วน parameter ได้
const single4 = name =>'Mrs.'+name;

//ทดสอบใช้งาน
const result4 = single('Lisa');
const result5 = single2('Lisa');
const result6 = single3('Lisa');
const result7 = single4('Lisa');

// console.log('result4',result4);
// console.log('result5',result5);
// console.log('result6',result6);
// console.log('result7',result7);


//------  ฟังก์ชันแบบธรรมดา 2 arguments ----------------------
function showDetail(name, surname){
  return `name: ${name}, lastname: ${surname}`;
};

// arrow function แบบมีได้หลาย statement เพราะมี {}
const showDetail2 = (name,surname)=>{
  return `name: ${name}, lastname: ${surname}`;
};

// ถ้าคิดว่ามี แค่ statement เดียว ตัด {} และ return ออกได้, Complier จะมองว่าเป็น return
const showDetail3 = (name,surname)=>`name: ${name}, lastname: ${surname}`;

//ทดสอบใช้งาน
const result1 = showDetail('Lisa','Mei');
const result2 = showDetail2('Lisa','Mei');
const result3 = showDetail3('Lisa','Mei');
// console.log('result1',result1);
// console.log('result2',result2);
// console.log('result3',result3);

// โจทย์ เปลี่ยน function ให้เป็น arrow function (สั้นๆได้ยิ่งดี)
function space(context){
  return '&nbsp'+context+'$nbsp';
}

const space2 = context=> '&nbsp'+context+'$nbsp';
console.log(space2(' text '))

// โจทย์ เปลี่ยน function ให้เป็น arrow function แล้วเก็บใส่ variable ตัวหนึ่ง

function converts(data1,data2){
  return data1+data2;
};

const converts2 = (data1,data2)=> data1+data2;
console.log(converts2('no',''))

// โจทย์ 3
function tellMe(x1,x2){
  if(x1){
    return 0;
  }
  return null;
};

const tellMe2 = (x1,x2) => x1 ? 0 : null;

const isEven = num => num%2==0; 
console.log(isEven(10));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(5));