module.exports = {
    base: '/myblog/',
    title: 'myblog',
    description: 'Vuepress blog demo',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/ZippoLee12138',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
        ['/', '首页'],
        ['/blog/FirstBlog.md', '我的第一篇博客']
      ]
    }
  }