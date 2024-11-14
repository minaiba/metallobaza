const tal = [
    {
    img:'./img/ok.img.svg',
    name: 'Постоянное наличие',
    poragraf: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
    {
    img:'./img/ok.img.svg',
    name: 'Постоянное наличие',
    poragraf: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
    {
    img:'./img/ok.img.svg',
    name: 'Постоянное наличие',
    poragraf: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
    {
    img:'./img/ok.img.svg',
    name: 'Постоянное наличие',
    poragraf: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
    {
    img:'./img/ok.img.svg',
    name: 'Постоянное наличие',
    poragraf: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
    {
    img:'./img/ok.img.svg',
    name: 'Постоянное наличие',
    poragraf: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
];




const met = document.querySelector('#met')

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


const min = [
    {
    img1:'./img/Product.svg',
    name1: 'Металлочерепица Classic',
    brand: "Бренд",
    height: "Высота волны, мм",
    metre: "Высота ступеньки, мм",
    grand: "Grande Line",
    number: "23.5",
    num: "20",
    pub: 'от 433 ₽/м²',
    color: "Цвет",
    input: "Т",
    width: "олщина",
    face: 'Поверхность',
    button: "Рассчитать стоимость",
    buttonn: 'Подробнее о товаре',

    },

];


const line = document.querySelector('#line')

min.forEach((item) => {
    const minList = document.createElement('div');
    minList.innerHTML = `
  <div class='border-[1px]  w-[440px] ml-[140px] mt-[30px] px-[80px] py-[40px]'>
    <img src="${item.img1}" alt="">
    <h1>${item.name1}</h1>
    <div>
      <div>
        <h2>${item.brand}</h2>
        <h2>${item.height}</h2>
        <h2>${item.metre}</h2>
      </div>
      <div>
        <h2>${item.grand}</h2>
        <h2>${item.number}</h2>
        <h2>${item.num}</h2>
      </div>
    </div>
    <h2>${item.pub}</h2>
    <h2>${item.color}</h2>
    <select name="${item.input}" class="w-[253px] h-[35px] border-[#EFEFEF] border-[2px]  ">
      <option value="" class="font-bold Weight-[500px] text-[16px]"></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <h2></h2>
    <select name="" class="w-[253px] h-[35px] border-[#EFEFEF] border-[2px]  ">
      <option value="" class="font-bold Weight-[500px] text-[16px]"></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <h2></h2>
    <select name="" class="w-[253px] h-[35px] border-[#EFEFEF] border-[2px]  ">
      <option value="" class="font-bold Weight-[500px] text-[16px]"></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <button></button>
    <button></button>

  </div>
    `;
    met.appendChild(talList)
});