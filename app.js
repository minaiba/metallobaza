import { min, tal } from "./met.js";



const met = document.querySelector('#met')
console.log(tal);


tal.forEach((item) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
      <div class=' shadow-2xl w-[440px] ml-[140px] mt-[30px] px-[80px] py-[40px]'>
          <img class="w-[40px]" src="${item.img}">
          <h1 class="my-[20px]">${item.name}</h1>
          <p class-"text-[18px] text-[gray]"> ${item.poragraf}</p>
      </div> 
    `;
    met.appendChild(talList)
});


const line = document.querySelector('#line')

min.forEach((user) => {
    const minList = document.createElement('div');
    minList.innerHTML = `
  <div class='rounded-[20px] shadow-xl px-[30px] py-[30px] w-[440px] ml-[140px] mt-[30px]'>
    <img src="${user.img1}" alt="">
    <h1 class='font-bold w-[10px] text-[20px]'>${user.name1}</h1>
    <div class='flex justify-between'>
      <div>
        <h2 class='mt-[15px]'>${user.brand}</h2>
        <h2>${user.height}</h2>
        <h2>${user.metre}</h2>
      </div>
      <div>
        <h2 class='mt-[15px]'>${user.grand}</h2>
        <h2 class='ml-[55px]'>${user.number}</h2>
        <h2 class='ml-[65px]'>${user.num}</h2>
      </div>
    </div>
    <h2 class='my-[15px] text-[23px]'>${user.pub}</h2>
    <h2 class='mt-[15px]'>${user.color}</h2>
    <select name="${user.input}" class="w-[173px] mt-[5px] h-[40px] border-[#EFEFEF] border-[2px] rounded-[10px]">
      <option value="" class="font-bold Weight-[500px] text-[16px]">${user.value}</option>
      <option value="">${user.value}</option>
      <option value="">${user.value}</option>
    </select>
    <h2 class='mt-[15px]'>${user.width}</h2>
    <select name="${user.input}" class="w-[173px] mt-[5px] h-[40px] border-[#EFEFEF] border-[2px]  rounded-[10px]">
      <option value="" class="font-bold Weight-[500px] text-[16px]">${user.value3}</option>
      <option value="">${user.value3}</option>
      <option value="">${user.value3}</option>
    </select>
    <h2 class='mt-[15px]'>${user.face}</h2>
    <select name="${user.input}" class="w-[173px] mt-[5px] h-[40px] border-[#EFEFEF] border-[2px]  rounded-[10px]">
      <option value="" class="font-bold Weight-[500px] text-[16px]">${user.value2}</option>
      <option value="">${user.value2}</option>
      <option value="">${user.value2}</option>
    </select>
    <div>
    <button class='border-[orange] mt-[30px] border-[1px] rounded-[40px] px-[20px] py-[10px] hover:bg-[orange]'>${user.button}</button>
    <button class='border-[orange] mt-[15px] border-[1px] rounded-[40px] px-[20px] py-[10px] hover:bg-[orange]'>${user.buttonn}</button>
     </div>
  </div>
    `;
    line.appendChild(minList)
});