// 四个列表的初始定位
function initPosition(startTranslateYHeight) {
    firstImagesList.style.transform = `translateY(${startTranslateYHeight+136*3}px)`;
    secondsImagesList.style.transform = `translateY(${startTranslateYHeight+136*2}px)`;
    thirdImagesList.style.transform = `translateY(${startTranslateYHeight+136*1}px)`;
    fourthImagesList.style.transform = `translateY(${startTranslateYHeight}px)`;
}

// 添加过渡效果
function addTranstion() {
    firstImagesList.classList.add('transtion');
    secondsImagesList.classList.add('transtion');
    thirdImagesList.classList.add('transtion');
    fourthImagesList.classList.add('transtion');
}

// 删除过渡效果
function removeTranstion(imagesList) {
    firstImagesList.classList.remove('transtion');
    secondsImagesList.classList.remove('transtion');
    thirdImagesList.classList.remove('transtion');
    fourthImagesList.classList.remove('transtion');
}

// 摇晃动画
function startShake() {
    document.getElementsByClassName('machine')[0].classList.add('shake');
}
// 停止摇晃动画
function stopShake() {
    document.getElementsByClassName('machine')[0].classList.remove('shake');
}

function result() {

}

function print() {

}

function open() {
    const box1 = document.getElementById("box1-content");
    box1.classList.remove("display-none");
}

// startTranslateYHeight 列表的初始化时translateY的距离
// imageHeight列表的每一项的高度
// 列表数组的长度

var isshow = false;

function start(imagesArrLength) {
    isStart = !isStart;
    // 开始游戏
    if (isStart) {
        // 列表加过渡效果
        addTranstion();
        startShake();

        // 滚动的随机结果
        let radom1 = Math.floor(Math.random() * imagesArrLength);
        let radom2 = Math.floor(Math.random() * imagesArrLength);
        let radom3 = Math.floor(Math.random() * imagesArrLength);
        let radom4 = Math.floor(Math.random() * imagesArrLength); //第四个

        firstImagesList.style.transform = `translateY(${-imageHeight * radom1}px)`;

        // 列表2延迟0.5s后滚动
        timeout1 = setTimeout(() => {
            secondsImagesList.style.transform = `translateY(${-imageHeight * radom2}px)`;
        }, 500)

        // 列表3延迟1s后滚动
        timeout2 = setTimeout(() => {
            thirdImagesList.style.transform = `translateY(${-imageHeight * radom3}px)`;
        }, 1000)
        timeout5 = setTimeout(() => {
                fourthImagesList.style.transform = `translateY(${-imageHeight * radom4}px)`; //第四个
            }, 1200)
            // 延迟2.6秒后停止抖动
        timeout3 = setTimeout(() => {
            stopShake();
        }, 2800)
        timeout5 = setTimeout(() => {
                stopShake();
            }, 2800)
            // 游戏结束后打印结果 
        var result = initImagesArr[radom1] + initImagesArr[radom2] + initImagesArr[radom3] + initImagesArr[radom4];

        timeout4 = setTimeout(() => {
                console.log(result);
                alert(result);
            }, 3000)
            //alert (result)


        // 重置游戏
    } else {
        // 取消上一次未执行完的方法
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        stopShake();
        // 重置时因为列表会重新移动到初始位置，所以要清除掉过渡效果
        removeTranstion();
        // 各个列表回到最初的位置
        initPosition(startTranslateYHeight);
    }
}

// 初始的选项列表

let initImagesArr = ["以", "物", "思", "理"];
let imagesArr = ["以", "物", "思", "理"];
// 加长整个选项列表,虚假滚动
new Array(20).fill('').forEach(() => {
    imagesArr = imagesArr.concat(...initImagesArr);
})

// 获取第一个列表的dom
const firstImagesList = document.getElementsByClassName('images')[0];
const secondsImagesList = document.getElementsByClassName('images')[1];
const thirdImagesList = document.getElementsByClassName('images')[2];
const fourthImagesList = document.getElementsByClassName('images')[3];
// 构造列表li添加到ul标签中去
imagesArr.forEach(item => {
    const li = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    li.innerHTML = item;
    li2.innerHTML = item;
    li3.innerHTML = item;
    li4.innerHTML = item;
    firstImagesList.appendChild(li);
    secondsImagesList.appendChild(li2);
    thirdImagesList.appendChild(li3);
    fourthImagesList.appendChild(li4);
});


// 列表单独一项的高度
const imageHeight = 136;

// 获取一列的高度
const listHeight = firstImagesList.scrollHeight;

// 初始化列表tranlateY的高度
const startTranslateYHeight = -listHeight + imageHeight;

// 游戏是否已经开始
let isStart = false;

// 三个setTimeout的返回表示符，前两个是第二列第三列列表开始滚动的延时方法，timeout3是机器停止摇晃动画的延时方法
let timeout1 = null;
let timeout2 = null;
let timeout3 = null;
let timeout5 = null; // 第四个屏幕
// 页面刚进来时列表位置初始化
initPosition(startTranslateYHeight);