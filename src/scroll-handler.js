/* 全局变量 */
let currentScrollY = 0;
let landingVisible = false;
const landing = document.getElementById('landing-overlay');

/* 监听滚动 */
window.addEventListener('scroll', () => {
  currentScrollY = window.scrollY;
  
  if (currentScrollY > 50 && !landingVisible) {
    // 向上滚动 - 显示首页（下拉式）
    showLanding();
  } else if (currentScrollY <= 0 && landingVisible) {
    // 已在顶部 - 隐藏首页
    hideLanding();
  }
});

/* 显示首页 - 下拉式 */
function showLanding() {
  if (landingVisible) return;
  landingVisible = true;
  landing.classList.add('visible');
}

/* 隐藏首页 */
function hideLanding() {
  if (!landingVisible) return;
  landingVisible = false;
  landing.classList.remove('visible');
}
