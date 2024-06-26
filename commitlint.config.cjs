// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'type-enum': ({ type }) => {
          const allowedTypes = [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test'
          ]
          return [
            allowedTypes.includes(type),
            `提交类型错误: 不允许的类型 '${type}'。允许的类型: ${allowedTypes.join(', ')}`
          ]
        }
      }
    }
  ],

  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ]
    // subject 大小写不做校验
    // 'type-case': [2, 'always', 'lower-case'],
    // 'type-empty': [2, 'never'],
    // 'subject-empty': [2, 'never'],
    // 'subject-case': [2, 'always', 'sentence-case']
  }
  // 忽略  commitlint msg 中 问题项无法自定义
  //  parserPreset: 'conventional-changelog-conventionalcommits',
  // prompt: {
  //   settings: {},
  //   messages: {
  //     skip: '跳过',
  //     max: '最大字数: %d',
  //     min: '最小字数: %d',
  //     emptyWarning: '请提供一个提交消息',
  //     upperLimitWarning: '提交消息超过了最大字数限制',
  //     lowerLimitWarning: '提交消息少于最小字数限制',
  //     typeEnum:
  //       '提交消息的类型必须是以下类型之一：feat, fix, docs, style, refactor, perf, test, chore, revert, build'
  //   },
  //   questions: {
  //     type: {
  //       description: '选择你要提交的更改类型：',
  //       enum: {
  //         feat: {
  //           description: '一个新功能',
  //           title: '特性',
  //           emoji: '✨'
  //         },
  //         fix: {
  //           description: '一个错误修复',
  //           title: '错误修复',
  //           emoji: '🐛'
  //         },
  //         docs: {
  //           description: '只有文档的更改',
  //           title: '文档',
  //           emoji: '📚'
  //         },
  //         style: {
  //           description: '不影响代码含义的更改（空白、格式、缺少分号等）',
  //           title: '样式',
  //           emoji: '💎'
  //         },
  //         refactor: {
  //           description: '既不是错误修复也不是功能添加的代码更改',
  //           title: '重构',
  //           emoji: '📦'
  //         },
  //         perf: {
  //           description: '提升性能的代码更改 🚀',
  //           title: '性能优化',
  //           emoji: '🚀'
  //         },
  //         test: {
  //           description: '添加缺失的测试或更正现有测试',
  //           title: '测试',
  //           emoji: '🚨'
  //         },
  //         build: {
  //           description: '影响构建系统或外部依赖的更改（例如：gulp、broccoli、npm）',
  //           title: '构建',
  //           emoji: '🛠'
  //         },
  //         ci: {
  //           description:
  //             '对我们的CI配置文件和脚本的更改（例如：Travis、Circle、BrowserStack、SauceLabs）',
  //           title: '持续集成',
  //           emoji: '⚙️'
  //         },
  //         chore: {
  //           description: '不修改src或测试文件的其他更改',
  //           title: '杂务',
  //           emoji: '♻️'
  //         },
  //         revert: {
  //           description: '还原之前的提交',
  //           title: '回退',
  //           emoji: '🗑'
  //         }
  //       }
  //     },

  //     scope: {
  //       description: '输入更改的范围 (可选):',
  //       enum: {
  //         components: {
  //           description: '组件',
  //           title: '组件'
  //         }
  //       }
  //     },
  //     subject: {
  //       description: '简短描述更改:\n'
  //     },
  //     confirmCommit: {
  //       description: '你确定要提交上述内容吗? (yes/no)\n'
  //     },
  //     skipQuestions: ['body', 'breaking', 'footer'] // 跳过 footer
  //   }
  // }
}
