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

var con2 = []; //POSITION AT TABLE

var con = 0;

var order = [];

function buy() {
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    var indicator = document.getElementById("indicator");
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {
        order.push(
          "%0a" + "الكمية : " + products[index3].quantity + " ",
          products[index3].name + " ",
          "السعر : " + products[index3].price + " ",
          (indicator = order.length)
          // "total : " + products[index3].total + "%0a",
        );
        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }

  var productsFirebase = [];
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      var url =
        "https://wa.me/+962790906363?text=" +
        "اسم العميل : " +
        customername.value +
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
      <tbody>
          <tr class="woocommerce-cart-form__cart-item cart_item">
            <td class="product-remove">
              <button class="remove" onclick="remove(${products[index].id})">
                <span class="lnr lnr-cross-circle"></span>
              </button>
            </td>

            <td class="product-thumbnail">
              <a href="">
                <img src="${products[index].img}" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="">
              </a>
            </td>

            <td class="product-name" data-title="Product">
              <a href="shop-single.html">${products[index].name}</a>
            </td>

            <td class="product-price" data-title="Price">
              <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>${products[index].price}</span>
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
               ${products[index].price * products[index].quantity} jd
            </td>
          </tr>

          <tr>
            <td class="product-remove none">&nbsp;</td>
            <td colspan="3" class="actions">
              
            </td>
            <td colspan="2" class="cart-subtotal">
              <label>Subtotal:</label>
              <span class="woocommerce-Price-amount amount">
                ${total()}
              </span>
            </td>
          </tr>
        </tbody>
    `;
      con++;
      products[index].total = products[index].price * products[index].quantity;
    }
  }

  document.getElementById("total").innerHTML = `
   <tr>
   <th scope="row"></th>
   <td></td>
   <td></td>
   <td></td>
   <td>
       <h4>Total:</h4>
   </td>
   <td> ${total()} jd</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
 
    </td>
    <td>
      <button onclick="buy()"class="btn btn-success">Buy</button>
    </td>
     </tr>
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
        <tbody>
        <tr class="woocommerce-cart-form__cart-item cart_item">
          <td class="product-remove">
            <button class="remove" onclick="remove(${products[index].id})">
              <span class="lnr lnr-cross-circle"></span>
            </button>
          </td>

          <td class="product-thumbnail">
            <a href="">
              <img src="${products[index].img}" class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image" alt="">
            </a>
          </td>

          <td class="product-name" data-title="Product">
            <a href="shop-single.html">${products[index].name}</a>
          </td>

          <td class="product-price" data-title="Price">
            <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>${products[index].price}</span>
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
             ${products[index].price * products[index].quantity} jd
          </td>
        </tr>

        <tr>
          <td class="product-remove none">&nbsp;</td>
          <td colspan="3" class="actions">
            
          </td>
          <td colspan="2" class="cart-subtotal">
            <label>Subtotal:</label>
            <span class="woocommerce-Price-amount amount">
              ${total()}
            </span>
          </td>
        </tr>
         <div id="total">
		asd
				</div>
      </tbody>

     
            
           `;
        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }
  if (total() == 0) {
    document.getElementById("total").innerHTML = "";
  } else {
    document.getElementById("total").innerHTML = `
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
        <h4>Total:</h4>
    </td>
    <td>${total(totalTable)} jd</td>
     </tr>
     <tr>
     <th scope="row"></th>
     <td></td>
     <td></td>
     <td></td>
     <td>

     </td>
     <td>
       <button onclick="buy()" class="btn btn-success">Buy</button>
     </td>
      </tr>
    `;
  }
}

function reduceAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 1) {
        products[index].quantity = products[index].quantity - 1;
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

(() => {
  for (let index = 0; index < products.length; index++) {
    document.getElementById("row1").innerHTML += `
    <div class="col-md-2 menu-holder left">
    <a href="shop-single.html" class="menu-thumb">
      <img src="${products[index].img}" style="width: 100px;"  alt="">
    </a>
    <div class="menu-item">
      <h5 id="nam" class="bold-color">
        <a>${products[index].name}</a>
        <p class="card-text"> ${products[index].price} jd</p>
      </h5>

      <button id="addbtn" onclick="add('${products[index].id}')">Add</button>
    </div>
  </div> `;
  }
})();
