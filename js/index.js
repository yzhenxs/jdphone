// 等到页面加载完毕后执行js代码
window.addEventListener('load', function () {
  //调整搜索渐变功能函数
  //调用搜索渐变功能函数
  // searchGradient();
  //调用倒计时功能函数
  // downTime();
  //调用轮播图功能的函数
  // slide();
  // 使用构造函数的方式就需要new 创建构造函数的实例对象 才能调用里面的原型对象的方法
  var jdEffect = new JdEffect();
  //调用对象里面的搜索效果  来自于父元素的原型对象继承下来的函数
  jdEffect.searchGradient();
  //调用对象里面的倒计时效果
  jdEffect.downTime();
  //调用对象里面的轮播图效果
  jdEffect.slide();
})



//京东头部效果对象
var header = document.querySelector('#header');
window.addEventListener('scroll', scroll);
scroll();
function scroll() {
  //获取在滚动条事件里面获取滚动的距离
  var scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  // 获取轮播图的高度来计算
  var slideHeight = document.querySelector('#slide').offsetHeight;
  //计算当前滚动里面的透明值   距离/轮播图高度
  var opacity = scrollTop / slideHeight;
  //当透明度大于1,背景颜色为rgba(222, 24, 27,1);
  //当透明度小于1,就设置为当前计算的透明度
  if (opacity > 1) {
    header.style.backgroundColor = 'rgba(222, 24, 27,1)';
  } else {
    header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
  }
}


//京东倒计时功能效果
// 1. 获取未来的时间  new Date()参数 
//今天中午12点的时间 月份是从0-11 月份减少1月  按照年月日时分秒每个数字用逗号隔开
// getTime方法是获取一个时间的毫秒数 从1970 1.1. 0:00:00  - 今天中午12的时间差的毫秒数
//首先是先获取未来的时间
var futureTime = Math.floor(new Date(2018, 8, 26, 12, 00, 00).getTime() / 1000);//除以1000是获得秒数,之前的是毫秒数
//2.现在获取当前事件的秒数
var nowTime = Math.floor(new Date().getTime() / 1000);
//3.获取未来时间-当前时间的秒数的事件差,倒计时的总时间就有了
var time = futureTime - nowTime;
var spans = document.querySelectorAll('.down-time span');
// 定义一个定时器,让时间每隔一秒减去一秒
setInterval(setTime, 1000);
setTime();
function setTime() {
  time--;
  if (time <= 0) {
    //写死的一个时间  真正开发使用重新请求后台的时间
    time = 7200;
  }
  // 5. 求出当前秒数的小时 分钟 秒数  
  // 小时 因为1小时是3600秒 总秒数/3600就是小时数
  var hour = Math.floor(time / 3600);
  //分钟 因为1分钟60 可能超过了1小时去掉小时部分 总时间%3600  用秒数/60
  var minute = Math.floor(time % 3600 / 60);
  //秒数 总时间 % 60 只要除不尽60 都是秒数部分
  var second = Math.floor(time % 60);
  // 6. 把计算好的时分秒放到span里面 把小时的部分/10 就是 十位
  spans[0].innerHTML = Math.floor(hour / 10);
  //小时部分的个位 小时 取模10 
  spans[1].innerHTML = Math.floor(hour % 10);
  spans[3].innerHTML = Math.floor(minute / 10);
  spans[4].innerHTML = Math.floor(minute % 10);
  spans[6].innerHTML = Math.floor(second / 10);
  spans[7].innerHTML = Math.floor(second % 10);
}


// 轮播图区域功能函数
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  autoplay: {
    delay: 1000,//轮播图的延迟
    stopOnLastSlide: false,// 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
    disableOnInteraction: false //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
  },

  loop: true, // 循环模式选项

  // 如果需要分页器(小圆点容器)
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})



























