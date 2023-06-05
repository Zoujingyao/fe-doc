const now = Date.now();
setTimeout(() => {
  console.log('time10: ', Date.now() - now);  // 20
}, 10);
setTimeout(() => {
  console.log('time30: ', Date.now() - now);  // 30+
}, 30);
while (true) {
  if (Date.now() - now >= 20) break;
}
console.log(Date.now() - now); // 20
