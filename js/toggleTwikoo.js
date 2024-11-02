document.addEventListener('DOMContentLoaded', function () {
    // 确保仅在 `/link` 页面上运行此脚本
    if (!window.location.pathname.endsWith('/link/') && !window.location.pathname.endsWith('/link')) return;
  
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const twikooContainer = document.getElementById('twikoo-container');
  
    function hideCommentBox() {
      const twikooFrame = document.getElementById('twikoo');
      if (twikooFrame) {
        twikooFrame.style.display = 'none'; // 隐藏评论输入框
      }
    }
  
    function showCommentBox() {
      const twikooFrame = document.getElementById('twikoo');
      if (twikooFrame) {
        twikooFrame.style.display = 'block'; // 显示评论输入框
      }
    }
  
    // 初始隐藏评论框
    hideCommentBox();
  
    // 监听复选框状态的改变
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        // 检查所有复选框是否已被选中
        if (Array.from(checkboxes).every(cb => cb.checked)) {
          showCommentBox();
        } else {
          hideCommentBox();
        }
      });
    });
  
    // 初始化 Twikoo
    twikoo.init({
      envId: 'https://t.moyuql.top', // 替换为你的 Twikoo 环境 ID
      el: '#twikoo'
    });
  });
  