var products = [
  {
    id: 1,
    img: "../images/item/1.png",
    name: "جمبري كاري",
    price: 5.5,
    cart: false,
    quantity: 1,
    total: 0,
    class: "sea",
    Describe: "قطع جمبري مع صوص الكاجو والكاري كريمة",
  },

  {
    id: 2,
    img: "../images/item/2.png",
    name: "جمبري زبدة",
    price: 5.5,
    cart: false,
    quantity: 1,
    total: 0,
    class: "sea",
    Describe: "قطع جمبري مع زبدة وصوص الكاجو، كريمة",
  },
  {
    id: 3,
    img: "../images/item/3.png",
    name: "دجاج مسلا",
    price: 3.75,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe: "دجاج مطبوخ بصلصة الطماطم والتوابل الهندية المميزة",
  },
  {
    id: 4,
    img: "../images/item/4.png",
    name: "دجاج بزبدة",
    price: 3.75,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe: "دجاج مع الكريمة بالزبدة مطبوخ بالتوابل الهندية",
  },
  {
    id: 5,
    img: "../images/item/5.png",
    name: "دجاج تشيلي",
    price: 4.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe: "دجاج بالفلفل الحار مقلي مع تتبيلة البهارات الهندية والزنجبيل",
  },
  {
    id: 6,
    img: "../images/item/6.png",
    name: "دجاج بالكاري",
    price: 4.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe: "قطع جمبري مع صوص الكاجو والكاري، كريمة",
  },
  {
    id: 7,
    img: "../images/item/7.png",
    name: "دجاج دوبيازا",
    price: 4.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe:
      "دجاج بالبصل والجبنة والفلفل الحلو مع الكريمة مطبوخ بالتوابل الهندية",
  },
  {
    id: 8,
    img: "../images/item/8.png",
    name: "تيكا ماسلا",
    price: 4.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe: "دجاج مطبوخ بصلصة الطماطم والتوابل الهندية المميزة",
  },
  {
    id: 9,
    img: "../images/item/9.png",
    name: "دجاج جوز هند",
    price: 3.75,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe:
      "دجاج بالبصل والجبنة والفلفل الحلو مع الكريمة مطبوخ بالتوابل الهندية",
  },
  {
    id: 10,
    img: "../images/item/10.png",
    name: "برياني جمبري",
    price: 5.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "chicken",
    Describe: "أرز برياني هندي مع قطع جمبري مقلية",
  },
  {
    id: 11,
    img: "../images/item/11.png",
    name: "برياني خضار",
    price: 2.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز برياني هندي مع الخضار المشكل",
  },
  {
    id: 12,
    img: "../images/item/12.png",
    name: "برياني لحم",
    price: 4.5,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز برياني هندي مع قطع اللحم",
  },
  {
    id: 13,
    img: "../images/item/13.png",
    name: "برياني دجاج",
    price: 3.5,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز برياني هندي مع قطع الدجاج",
  },
  {
    id: 14,
    img: "../images/item/14.png",
    name: "ارز برياني",
    price: 1.25,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز برياني هندي مع قطع الدجاج",
  },
  {
    id: 15,
    img: "../images/item/15.png",
    name: "ارز سادة",
    price: 0.75,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز بسمتي بدون اضافات",
  },
  {
    id: 16,
    img: "../images/item/16.png",
    name: "برياني بيض",
    price: 2.25,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز بسمتي مع البيض المسلوق",
  },
  {
    id: 17,
    img: "../images/item/17.png",
    name: "ارز كشمير بلاو",
    price: 3.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز بسمتي،بازيلا مع كوكتيل فواكه",
  },
  {
    id: 18,
    img: "../images/item/18.png",
    name: "ارز بالاناناس",
    price: 2.25,
    cart: false,
    quantity: 1,
    total: 0,
    class: "rice",
    Describe: "أرز بسمتي بالزبدة مع قطع الأناناس",
  },
  {
    id: 19,
    img: "../images/item/19.png",
    name: "سندويشة سموكي تندوري",
    price: 1.5,
    cart: false,
    quantity: 1,
    total: 0,
    class: "sandwich",
    Describe: "دجاج مطبوخ بالكريمة والخلطة الهندية بخبزة باراتا ",
  },
  {
    id: 20,
    img: "../images/item/20.png",
    name: "سندويشة شاورما هندية",
    price: 1.0,
    cart: false,
    quantity: 1,
    total: 0,
    class: "sandwich",
    Describe: "شاورما على الطريقة الهندية",
  },
];

var categorys = [
  { title: "All", data: "*" },
  { title: "Rice", data: "rice" },
  { title: "Sea", data: "sea" },
  { title: "Chicken", data: "chicken" },
  { title: "Sandwich", data: "sandwich" },
];

var firstcustomername = document.getElementById("Customer_first_name");

var Second_customer_name = document.getElementById("Second_customer_name");

var Customer_number_1 = document.getElementById("Customer_number_1");

var Customer_number_2 = document.getElementById("Customer_number_2");

var Area_name = document.getElementById("Area_name");

var Street_name = document.getElementById("Street_name");

var Floor_number = document.getElementById("Floor_number");

var Apartment_number = document.getElementById("Apartment_number");

var Notes = document.getElementById("order_comments");

var notify = document.getElementById("notify_amount");

var con2 = []; //POSITION AT TABLE

var con = 0;

var order = [];

function buy() {
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {
        order.push(
          "%0a" + "الكمية : " + products[index3].quantity + " ",
          products[index3].name + " ",
          "السعر : " + products[index3].price + " "

          // "total : " + products[index3].total + "%0a",
        );
        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }

  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      var url =
        "https://wa.me/+962797012519?text=" +
        " اسم العميل الأول : " +
        firstcustomername.value +
        "%0a" +
        "اسم عائلة العميل: " +
        Second_customer_name.value +
        "%0a" +
        "رقم رئيسي: " +
        Customer_number_1.value +
        "%0a" +
        "رقم احتياطي: " +
        Customer_number_2.value +
        "%0a" +
        "اسم المنطقة: " +
        Area_name.value +
        "%0a" +
        "اسم الشارع: " +
        Street_name.value +
        "%0a" +
        "رقم البناء: " +
        building_number.value +
        "%0a" +
        "رقم الطابق: " +
        Floor_number.value +
        "%0a" +
        "رقم الشقة: " +
        Apartment_number.value +
        "%0a" +
        "ملخص الطلب: " +
        order +
        "%0a" +
        "اجمالي: " +
        total() +
        " jd %0a" +
        "ملاحظات : " +
        Notes.value +
        "%0a";
    }
  }
  window.open(url, "_blank").focus();
}

function total() {
  let total = 0;
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      total += products[index].total;
    }
  }
  return total;
}

function clean() {
  for (let index = 0; index < products.length; index++) {
    products[index].total = 0;
    products[index].quantity = 1;
    products[index].cart = false;
    con2 = [];
    updateCart();
  }
}

function add(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id != id || products[index].cart == true) {
    } else {
      products[index].cart = true;
      con2.push(products[index].id);
      document.getElementById("tableProducts").innerHTML += `
      <td class="product-remove">
      <button class="btn btn-danger" onclick="remove(${
        products[index].id
      })">X</button>
    </td>

    <td class="product-thumbnail">
      <a href="">
        <img  style="width: 230px;" id="cartimg" src="${
          products[index].img
        }" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
      </a>						
    </td>

    <td class="product-name" data-title="Product">
      <a>${products[index].name}</a>	
    </td>

    <td class="product-price" data-title="Price">
      <span class="woocommerce-Price-amount amount">${
        products[index].price
      } jd</span>	
    </td>
    <td class="product-quantity" data-title="Quantity">
      <div class="quantity">
      <button class="btn btn-primary" onclick="reduceAmount(${
        products[index].id
      })">-</button>
       <input style="width: 2rem;" id="input${products[index].id}" value="${
        products[index].quantity
      }" disabled>
       <button class="btn btn-primary" onclick="addAmount(${
         products[index].id
       })" >+</button>
      </div>
    </td>
    <td class="product-subtotal" data-title="Total">
      <span class="woocommerce-Price-amount amount">${
        products[index].price * products[index].quantity
      } jd</span>		
    </td>
    
     
     
     `;
      con++;
      products[index].total = products[index].price * products[index].quantity;
      notify.innerText = con2.length;
    }
  }

  document.getElementById("total").innerHTML = `
   
   
   <td> ${total()} jd</td>
   
 
 
   `;
}

function remove(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      products[index].cart = false;
      products[index].total = 0;
      products[index].quantity = 1;
      total();
      for (let index2 = 0; index2 < con2.length; index2++) {
        if (products[index].id == con2[index2]) {
          con2.splice(index2, 1);
        } else {
        }
      }
      notify.innerText = con2.length;

      updateCart();
    } else {
      updateCart();
    }
  }
}

function updateCart() {
  con = 0;
  var totalTable = 0;
  document.getElementById("tableProducts").innerHTML = "";
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {
        document.getElementById("tableProducts").innerHTML += `


        <td class="product-remove">
       <button class="btn btn-danger" onclick="remove(${
         products[index3].id
       })">X</button>
										</td>

										<td class="product-thumbnail">
											<a href="">
												<img  style="width: 230px;" id="cartimg" src="${
                          products[index3].img
                        }" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="" />
											</a>						
										</td>

										<td class="product-name" data-title="Product">
											<a>${products[index3].name}</a>	
										</td>

										<td class="product-price" data-title="Price">
											<span class="woocommerce-Price-amount amount">${
                        products[index3].price
                      } jd</span>	
										</td>
										<td class="product-quantity" data-title="Quantity">
											<div class="quantity">
                      <button class="btn btn-primary" onclick="reduceAmount(${
                        products[index3].id
                      })">-</button>
                       <input style="width: 2rem;" id="input${
                         products[index3].id
                       }" value="${products[index3].quantity}" disabled>
                       <button class="btn btn-primary" onclick="addAmount(${
                         products[index3].id
                       })" >+</button>
											</div>
										</td>
										<td class="product-subtotal" data-title="Total">
											<span class="woocommerce-Price-amount amount">${
                        products[index3].price * products[index3].quantity
                      } jd</span>		
										</td>
        
          
            
           `;
        products[index3].total =
          products[index3].price * products[index3].quantity;
        notify.innerText = con2.length;
      } else {
      }
    }

    con = con + 1;
  }
  if (total() == 0) {
    document.getElementById("total").innerHTML = "";
  } else {
    document.getElementById("total").innerHTML = `
    
    <td>${total(totalTable)} jd</td>
     
    `;
  }
}

function reduceAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 1) {
        products[index].quantity = products[index].quantity - 1;
        notify.innerText = con2.length;

        updateCart();
      } else {
      }
    } else {
    }
  }
}

function addAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 0) {
        products[index].quantity = products[index].quantity + 1;

        updateCart();
      } else {
      }
    } else {
    }
  }
}

function changeCategory(data) {
  products = products.filter((product) => product.class == data);
}

function renderItems() {
  for (let index = 0; index < products.length; index++) {
    document.getElementById("all").innerHTML += `
    
  
  <div class="col-md-6 col-lg-5 col-xl-6 menu-holder fixed left-40">
                    <a class="menu-thumb">
                      <img src="${products[index].img}" alt="">
                    </a>
                    <div class="menu-item">
                      <h5 class="color-fff">
                        <a${products[index].name}</a>
                        <span class="dots"></span>
                        <span class="price">
                        ${products[index].price} jd
                        </span>
                      </h5>
                      <ul>
                        <li>
                        ${products[index].Describe}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button type="button" id="addbtn" onclick="add('${products[index].id}')">Add</button>
                  </div> 
  `;
  }
}

function renderCategory() {
  for (let index = 0; index < categorys.length; index++) {
    document.getElementById("category").innerHTML += `
      <li class="" onclick = "changeCategory('${categorys[index].data}')">
          <img src="images/appetizer-square.png" alt="">
          <span>${categorys[index].title}</span>
        </a>
      </li>
    `;
  }
}

renderCategory();
renderItems();
