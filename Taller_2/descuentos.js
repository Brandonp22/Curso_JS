const coupons = [
    {
        name: "CODE10",
        discount: 10,
    },
    {
        name: "CODE20",
        discount: 20,
    },
    {
        name: "CODE30",
        discount: 30,
    }
];

function discountPrice(price, discount){
    return price * (discount/100); //Se divide en 100 para pasar el descuento a porcentaje
}

function finalPrice(price, discount, coupon){
    return (price*((100-discount)/100))- coupon//Hago una resta de 100 - el descuento para 
                                               //invertir el porcentaje y dejar el porcentaje 
                                               //restante del precio inicial
}

function discontCoupon(price, couponValue){
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {        
        return false;
    } else {
        const couponDiscountValid = userCoupon.discount;
        const precioConDescuento = discountPrice(price, couponDiscountValid);
        return precioConDescuento;
    }
}


//Aquí interactuamos con el html
function calculateDiscount(){
    const inputDiscount = document.getElementById("InputDiscount");
    const valueDiscount = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const userCouponValue = inputCoupon.value;

    console.log(userCouponValue);
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    // Descuento
    const discount = discountPrice(valuePrice, valueDiscount);
    const discountRes = document.getElementById("dResult");
    discountRes.innerHTML = discount.toFixed(2) + "$";

    //Cupon

    let coupon = 0;

    if(userCouponValue === ""){
        const discountCouponRes = document.getElementById("dcResult");
        discountCouponRes.innerHTML = "0";
    }else {
        const discontCouponIsValid =  discontCoupon(valuePrice, userCouponValue);
        if(discontCouponIsValid === false){
            const discountCouponRes = document.getElementById("dcResult");
            discountCouponRes.innerHTML = "El cupón " + userCouponValue + " no es válido";
        }else{
            const discountCouponRes = document.getElementById("dcResult");
            discountCouponRes.innerHTML = discontCouponIsValid.toFixed(2) + "$";
            coupon = discontCouponIsValid;
        }
    } 
    
    //Precio Final
    const price = finalPrice(valuePrice, valueDiscount, coupon);
    const priceRes = document.getElementById("pfResult");
    priceRes.innerHTML = price.toFixed(2) + "$";
}