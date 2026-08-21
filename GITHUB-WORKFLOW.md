# 修改部署工作流

## 快速开始（每次修改后执行）

```bash
# 1. 进入项目目录
cd D:\Hermeswork\mysite1\portfolio

# 2. 修改源码（用任意编辑器打开 src/ 文件夹）
# 例如修改 src/App.jsx 里的文字、项目等

# 3. 重新构建
npm run build

# 4. 提交更改
git add .
git commit -m "更新内容"

# 5. 推送到 GitHub
git push origin master

# 6. GitHub Pages 会自动更新（通常 1-2 分钟）
```

---

## 完整流程说明

### 第一步：首次设置（只做一次）

```bash
# 1. 在 GitHub 创建新仓库（仓库名 portfolio）
# https://github.com/new → 名称填 portfolio → Create

# 2. 关联远程仓库
git remote add origin https://github.com/chijysmile/portfolio.git

# 3. 推送代码
git push -u origin master

# 4. 启用 GitHub Pages
# 仓库 Settings → Pages → Source: master branch → Save
```

### 第二步：每次修改（重复这套流程）

```
修改代码 → 构建 → 提交 → 推送 → 自动更新
```

**实际例子**（假设你要改联系方式）：

```bash
# 1. 打开文件编辑
notepad "D:\Hermeswork\mysite1\portfolio\src\App.jsx"
# 找到联系方式部分，修改后保存

# 2. 构建（每次改完代码都要执行）
npm run build

# 3. 提交并推送
git add .
git commit -m "更新联系方式"
git push origin master
```

等待 1-2 分钟，GitHub Pages 会自动更新。

---

## 常用命令速查

| 操作 | 命令 |
|------|------|
| 本地预览 | `npm run dev` |
| 构建生产版本 | `npm run build` |
| 查看 git 状态 | `git status` |
| 暂存所有修改 | `git add .` |
| 提交修改 | `git commit -m "说明"` |
| 推送到 GitHub | `git push origin master` |
| 撤销未提交的修改 | `git checkout -- src/App.jsx` |
| 回退到上一个版本 | `git revert HEAD` |

---

## 不需要手动构建的方式（进阶）

### 方式 A：用 GitHub Actions 自动部署

在 `portfolio/.github/workflows/deploy.yml` 创建：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

之后只需 `git push`，GitHub 会自动构建并部署。

### 方式 B：Netlify 自动部署（更简单）

1. 把代码推送到 GitHub
2. Netlify 连接仓库 → 自动监听 push → 自动构建部署
3. 不需要任何手动操作

---

## 常见问题

**Q: 改了代码但网站没变？**
A: 检查是否执行了 `npm run build`，然后 `git push`。GitHub Pages 只会更新 dist 文件夹里的内容。

**Q: 想回退到之前的版本？**
A: 
```bash
git log --oneline  # 查看历史提交
git revert <commit-hash>  # 回退到某个版本
git push origin master
```

**Q: 改了内容不想保留？**
A: 直接撤销修改：
```bash
git checkout -- src/App.jsx  # 撤销单个文件
git reset --hard HEAD        # 撤销所有未提交的修改（危险！）
```
