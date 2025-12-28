# 西游·启示录 Q&A Explorer

一个展示「西游记」深度解析问答的现代化Web应用。

## 功能特点

- 📚 326条精选问答，涵盖《西游记》中的权谋、人性、职场逻辑等深度解析
- 🏷️ 智能标签系统，支持按主题筛选（权力博弈、职场逻辑、人性剖析等）
- 🔍 全文搜索功能
- 📖 增强分页功能：
  - 页码按钮快速导航
  - 跳转到指定页面
  - 当前页高亮显示
- 📱 响应式设计，完美支持移动端和桌面端
- 🎨 精美的暗色主题和玻璃态设计

## 技术栈

- React 19 + Vite
- React Markdown（支持Markdown内容渲染）
- 原生CSS（无UI框架依赖）

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## GitHub Pages部署

项目已配置GitHub Actions自动部署，只需：

1. 确保仓库名为 `xiyou_qa`
2. 推送代码到GitHub
3. 在仓库设置中启用GitHub Pages（Source选择"GitHub Actions"）

部署完成后访问：`https://你的用户名.github.io/xiyou_qa/`

## 数据来源

问答数据来源于33个精心整理的QA集合，涵盖《西游记》的深度解析和批判性思考。

## 许可证

MIT
