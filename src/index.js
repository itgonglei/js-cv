let content = document.querySelector("#content");
let style = document.querySelector("#style");
let string = `/**你好，我叫石头
接下来我演示一下我的前端功底
  首先我要准备一个div **/
  #div {
    border:1px solid red; 
    width: 200px;
    height: 200px;
 }
/**准备好了div,我们把这个div变成一个太极图
 * 注意看好
 * 首先,把div 变成一个圆
 * */
#div{
    border-radius: 50%;
    box-shadow:0 0 3px rgba(0, 0, 0, 0.5) ;
    border:none;
}
/**
 * 太极分阴阳 
 * 一黑和一白
 * */
 #div{
    background:linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/**
 * 太极生两仪,两仪生万物.
 * 万物寻道理,皆在此图中.
 * */
 #div::before {
   width:100px;
   height:100px;
   top:0;
   left:50%;
   transform: translateX(-50%);
   border-radius: 50%;
   background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div::after {
    width: 100px;
    height: 100px;
    top: 100px;
    transform: translateX(50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
  }
`
let string2 = "";
let n = 0;
fn = () => {
    console.log()
    setTimeout(() => {
        if (n >= string.length) {
            return false;
        }
        if (string[n] === '\n') {
            string2 += `<br>`
        } else if (string[n] === " ") {
            string2 += `&nbsp`
        } else {
            string2 += string[n]
        }
        n++
        style.innerHTML = string.substring(0, n)
        content.innerHTML = string2
        window.scrollTo(0, 99999);
        content.scrollTo(0,99999);
        fn()

    }, 10);

}

fn()