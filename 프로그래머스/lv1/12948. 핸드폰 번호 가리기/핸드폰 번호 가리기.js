function solution(phone_number) {
    var numLen = phone_number.split("").length;
    let last4=phone_number.split("").reverse().slice(0,4).reverse()
    return "*".repeat(numLen-4)+last4.join('');
}