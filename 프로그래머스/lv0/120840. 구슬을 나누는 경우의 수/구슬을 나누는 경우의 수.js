function solution(balls, share) {
    let res = factorial(balls)/(factorial(balls-share)*factorial(share));
    return Math.round(res);
}
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
   }

	
  return result;
}