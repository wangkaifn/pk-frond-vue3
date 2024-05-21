'use strict'

module.exports = {
  types: [
    { value: 'feat', name: 'feat:     ✨ 新功能' },
    { value: 'fix', name: 'fix:      🐛 修复' },
    { value: 'docs', name: 'docs:     📚 文档' },
    { value: 'style', name: 'style:    💎 样式' },
    { value: 'refactor', name: 'refactor: 📦 重构' },
    { value: 'perf', name: 'perf:     🚀 性能优化' },
    { value: 'test', name: 'test:     🚨 测试' },
    { value: 'build', name: 'build:    🛠 构建' },
    { value: 'ci', name: 'ci:       ⚙️ 持续集成' },
    { value: 'chore', name: 'chore:    ♻️ 杂务' },
    { value: 'revert', name: 'revert:   🗑 回退' }
  ],
  scopes: [
    { name: 'api', description: '🔌  API相关更改', emoji: '🔌' },
    { name: 'auth', description: '🔑  认证和授权相关更改' },
    { name: 'build', description: '🏗  构建系统相关更改' },
    { name: 'config', description: '⚙️  配置文件相关更改' },
    { name: 'db', description: '🗄  数据库相关更改' },
    { name: 'docs', description: '📚  文档相关更改' },
    { name: 'ui', description: '🖌  用户界面相关更改' },
    { name: 'ux', description: '🧩  用户体验相关更改' }
  ],
  messages: {
    type: '选择你要提交的更改类型:',
    scope: '输入更改的范围 (可选):',
    // customScope: '请输入自定义的范围:',
    subject: '简短描述更改:',
    // body: '详细描述更改 (可选):',
    // breaking: '列出所有重大更改 (可选):',
    confirmCommit: '你确定要提交上述内容吗? (yes/no)'
  },
  skipQuestions: ['customScope', 'body', 'footer', 'breaking'], // 跳过 footer
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100
}
