//Arry of products
const product = [
    {
        id: 0,
        image: 'images/smallbag.png',
        title: 'Small Travelling Bag',
        price: 2000,
    },
    {
        id: 1,
        image: 'images/havana-hat.jpg',
        title: 'Havana Hat',
        price: 300,
    },
    {
        id: 2,
        image: 'images/tshirt-men.jpg',
        title: 'Travel T-shirt for Men',
        price: 2500,
    },
    {
        id: 3,
        image: 'images/tshirt-women.jpg',
        title: 'Travel T-shirt for Women',
        price: 2500,
    },
    {
        id: 4,
        image: 'images/travel-shoes.jpg',
        title: 'Travel shoes - Unisex',
        price: 5500,
    },
    {
        id: 5,
        image: 'images/women-skech.jpg',
        title: 'Skechers for Women',
        price: 4500,
    },
    {
        id: 6,
        image: 'images/camping-gears.jpg',
        title: 'Camping gears - Full set',
        price: 20000,
    },
    {
        id: 7,
        image: 'images/cookware-items.jpg',
        title: 'Cookware items - Full set',
        price: 17000,
    }

];

const cat = [...new Set(product.map((item) => { return item }))]
var i = 0;
document.getElementById('products').innerHTML = cat.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <input class="quantity" type="number" min="1" value="1">
                <h2>LKR ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart_items = [];

function addtocart(item) {
    cart_items.forEach(el => {
        if (item == el.id) {
            removeItem(item);
        }
    });
    cart_items.push({ ...cat[item] });
    displayItems();
}

function removeItem(item) {
    cart_items.splice(item, 1);
    displayItems();
}

function displayItems() {
    enableCheckoutBtn();

    var j = 0;
    var total = 0;

    if (cart_items.length == 0) {
        document.getElementById("cartItems").innerHTML = "Cart is empty!";
        document.getElementById("total").innerHTML = "LKR 0.00";
    }
    else {
        document.getElementById("cartItems").innerHTML = cart_items.map((items) => {
            var { id, image, title, price } = items;
            var quantity = document.getElementsByClassName("quantity")[(id)].value;
            total = total + (price * quantity);
            document.getElementById("total").innerHTML = "LKR " + total + ".00";
            chkTotal.innerHTML = "LKR " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='r-img' src=${image}>
                    </div>
                    <p> x${quantity}</p>
                    <p style='font-size: 14px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price * quantity}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='removeItem(" + (j++) + ")'></i>" +
                '</div>'
            );
        }).join('');
    }
}


//checkout modal
var modal = document.getElementById("modalCheckout");
var btn = document.getElementById("btnCheckout");
var chkTotal = document.getElementById("chkTotal");

btn.disabled = true;

function enableCheckoutBtn() {
    if (cart_items.length == 0) {
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
    }
}

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    if (validateOnChkBtn()) {
        modal.style.display = "block";
        document.getElementById("fname").value = fullname;
        document.getElementById("email").value = mail;
    }  
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validate() {
    var flag = true;
    var zip = document.getElementById("zip").value;
    var ccnum = document.getElementById("ccnum").value;
    var expyear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;
    showCorrectInputs();
    if (zip.length != 5) {
        alert("Invalid Zip Code!");
        document.getElementById("zip").style.border = "2px solid crimson";
        flag = false;
    } 
    if (ccnum.length != 19) {
        alert("Invalid Credit Card Number!");
        document.getElementById("ccnum").style.border = "2px solid crimson";
        flag = false;
    } 
    if (expyear.length != 4) {
        alert("Invalid Expire Year!");
        document.getElementById("expyear").style.border = "2px solid crimson";
        flag = false;
    } 
    if (cvv.length != 3) {
        alert("Invalid CVV!");
        document.getElementById("cvv").style.border = "2px solid crimson";
        flag = false;
    }
    return flag;
}
var fullname;
var mail;

function validateOnChkBtn() {
    fullname = document.getElementById("fullname").value;
    mail = document.getElementById("mail").value;

    if (fullname.length == 0 || mail.length == 0) {
        alert("Please fill Full Name & Email!");
        return false;
    }
    return true;
}

function showCorrectInputs() {
    document.getElementById("fname").style.border = "2px solid lightgreen";
    document.getElementById("email").style.border = "2px solid lightgreen";
    document.getElementById("adr").style.border = "2px solid lightgreen";
    document.getElementById("city").style.border = "2px solid lightgreen";
    document.getElementById("province").style.border = "2px solid lightgreen";
    document.getElementById("zip").style.border = "2px solid lightgreen";
    document.getElementById("cname").style.border = "2px solid lightgreen";
    document.getElementById("ccnum").style.border = "2px solid lightgreen";
    document.getElementById("expmonth").style.border = "2px solid lightgreen";
    document.getElementById("expyear").style.border = "2px solid lightgreen";
    document.getElementById("cvv").style.border = "2px solid lightgreen";
}