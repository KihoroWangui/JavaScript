//web console used for logging various information invloved with a web page
// console.error() method
console.error("error occured");
// console.warn() method
console.warn("This is a warning.");
// console.clear() method. In firefox no message will be returned
console.clear();
// console.time() and console.timeEnd() method  to know time spent
console.time("abc");
let fun = function () {
  console.log("fun is running");
};
let fun2 = function () {
  console.log("fun2 is running..");
};
fun(); // calling fun();
fun2(); // calling fun2();
console.timeEnd("abc");
// console.table() method to generate a table inside a console
console.table({ a: 1, b: 2 });
// console.count() method
for (let i = 0; i < 5; i++) {
  console.count(i);
}
// console.group() and console.groupEnd() method
console.group("simple");
console.warn("warning!");
console.error("error here");
console.log("vivi vini vici");
console.groupEnd("simple");
console.log("new section");
// Custom Console log example
const spacing = "10px";
const styles = `padding: ${spacing}; background-color: white; color: green; font-style: 
       italic; border: 1px solid black; font-size: 2em;`;
console.log("%channah", styles);
