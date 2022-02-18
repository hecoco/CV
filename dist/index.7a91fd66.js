let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `/*我是超超啊
我正在写
简历*/
body{
    color:red;
}`;
let n = -1;
console.log(string.length);
let step = () => {
    setTimeout(() => {
        n += 1;
        if (n < string.length) {
            //判断是否 是回车
            if (string[n] === '\n') demo.innerHTML += '<br/>';
            else {
                demo.innerHTML += string[n];
                style.innerHTML += string[n];
            }
            step();
        }
    }, 0);
};
step();
let step2 = () => {
    style.innerHTML = ``;
};
step2();