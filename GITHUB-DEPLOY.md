# 手动部署到 GitHub 完整教程

## 第一步：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 填写：
   - Repository name: `portfolio` （或你喜欢的名字）
   - Description: `段默文个人作品集`
   - 选择 **Public**（公开，GitHub Pages 才可用）
   - **不要**勾选 Initialize this repository with a README
3. 点击 **Create repository**
4. 复制仓库地址，格式类似：
   ```
   https://github.com/你的用户名/portfolio.git
   ```

---

## 第二步：关联并推送代码

打开终端，执行以下命令：

```bash
# 进入项目目录
cd D:/Hermeswork/mysite1/portfolio

# 关联远程仓库（把 <你的用户名> 替换成实际用户名）
git remote add origin https://github.com/你的用户名/portfolio.git

# 推送代码到 GitHub
git push -u origin master
```

---

## 第三步：启用 GitHub Pages

1. 打开你的 GitHub 仓库页面
2. 点击 **Settings**（设置）标签
3. 左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单选择 **GitHub Actions**
5. 点击 **Save**（保存）

或者选择更简单的方案：
- **Source** 选择 **Deploy from a branch**
- **Branch** 选择 `master`，文件夹选 `/ (root)`
- 点击 **Save**

---

## 第四步：等待部署完成

- 部署成功后，仓库页面会显示一个链接
- 地址格式：`https://你的用户名.github.io/portfolio/`
- 通常需要 1-3 分钟

---

## 修改网站

以后修改网站只需：

```bash
# 1. 编辑代码（用任何编辑器打开 src/ 文件夹）
notepad "D:/Hermeswork/mysite1/portfolio/src/App.jsx"

# 2. 构建
npm run build

# 3. 提交并推送
git add .
git commit -m "更新内容描述"
git push origin master
```

推送后 GitHub Actions 会自动重新构建和部署，无需手动操作。

---

## 常见问题

**Q: 网站显示 404？**
A: 等待 1-2 分钟让 GitHub Pages 生效，或检查 Settings → Pages 是否有错误提示

**Q: 想换域名？**
A: Settings → Pages → Custom domain，输入你的域名并配置 DNS

**Q: 想回退到之前的版本？**
A: `git revert HEAD` 然后 `git push origin master`
