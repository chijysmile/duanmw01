# 个人作品集网站部署指南

## 当前状态
- ✅ 网站已构建完成（`D:\Hermeswork\mysite1\portfolio\dist`）
- ✅ 已通过 Netlify 匿名部署（临时链接：https://charming-babka-295f01.netlify.app）
- ⚠️ 临时链接需要密码保护（密码：`My-Drop-Site`），60 分钟后过期
- ❌ 所有部署服务（Netlify/Vercel/Surge/GitHub Pages）都需要登录认证才能长期保留

---

## 方案一：Claims Netlify 站点（推荐，最快）

### 步骤：
1. **打开 Claim 链接**：
   ```
   https://vercel.com/claim-deployment?code=67ddb1e6-e30a-4fd4-b47a-15f4a6a6a3f4
   ```
   注意：这是 Vercel 的链接，Netlify 的 claim 链接格式不同，见下方。

2. **访问 Netlify Drop**：
   ```
   https://app.netlify.com/drop/charming-babka-295f01
   ```

3. **登录后**，你的站点就会被保留，不再需要密码。

4. **可选**：在 Netlify 控制台关闭密码保护：
   - 进入项目 → Settings → Access control → Password protection → 关闭

---

## 方案二：手动部署到 Netlify（完全免费，长期有效）

### 步骤：
1. 注册 Netlify 账号（免费）：https://www.netlify.com/signup/

2. 将代码推送到 GitHub：
   ```bash
   cd D:\Hermeswork\mysite1\portfolio
   git remote add origin https://github.com/你的用户名/portfolio.git
   git push -u origin master
   ```

3. 在 Netlify 控制台连接 GitHub 仓库：
   - https://app.netlify.com/sites/new
   - 选择 "Git repository" → 授权 GitHub → 选择 portfolio 仓库 → Deploy

4. 网站会自动部署，获得永久域名如：`https://duanmowen-portfolio.netlify.app`

---

## 方案三：使用 Surge（最简单）

### 步骤：
1. 安装 Surge：
   ```bash
   npm install -g surge
   ```

2. 创建 Surge 账号：
   ```bash
   surge
   ```
   输入邮箱和密码完成注册

3. 部署：
   ```bash
   cd D:\Hermeswork\mysite1\portfolio
   surge ./dist portfolio-dmw.surge.sh
   ```

4. 获得永久域名：`https://portfolio-dmw.surge.sh`

---

## 方案四：GitHub Pages（需要 gh CLI）

### 前提：安装 GitHub CLI
```bash
winget install GitHub.cli
# 或手动下载：https://cli.github.com/
```

### 步骤：
1. 创建 GitHub 仓库：https://github.com/new → 命名 `portfolio` → 创建

2. 推送代码：
   ```bash
   cd D:\Hermeswork\mysite1\portfolio
   git remote add origin https://github.com/chijysmile/portfolio.git
   git push -u origin master
   ```

3. 启用 GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source: `master` branch → Save

4. 网站地址：`https://chijysmile.github.io/portfolio`

---

## 本地测试（无需部署）

如果你想先本地预览效果：
```bash
cd D:\Hermeswork\mysite1\portfolio
npm run dev
# 打开 http://localhost:5173
```

---

## 推荐方案

**最快**：方案一（直接打开 Netlify Drop 链接登录）
**最稳定**：方案二或方案四（配合 GitHub，自动部署）
