let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let string = `/* 
* 我是超超啊
* 我正在写
* 太极
*/
#div{
    width: 200px;
    height: 200px;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 19%, rgba(255,255,255,1) 19%);
}
#div::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 19%, rgba(0,0,0,1) 19%);
}
@keyframes animation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
#div{
    animation: animation 8s infinite linear;
}
`;
let n = 0;
console.log(string.length);
let step = ()=>{
    setTimeout(()=>{
        if (n < string.length) {
            //判断是否 是回车
            if (string[n] === '\n') demo.innerHTML += '<br/>';
            else if (string[n] === ' ') demo.innerHTML += '&nbsp';
            demo.innerHTML += string[n];
            style.innerHTML += string[n];
            window.scrollTo(0, 9999); //滚动条
            demo.scrollTo(0, 9999); //滚动条
            n += 1;
            step();
        }
    }, 0);
};
step();

//# sourceMappingURL=index.7a91fd66.js.map
