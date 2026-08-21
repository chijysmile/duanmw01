# 段默文个人作品集 - 手动部署指南

## 📁 项目结构说明

```
portfolio/
├── src/              ← 源代码（修改后用 npm run build 重新构建）
├── dist/             ← 构建产物（这才是需要上传的）
├── .github/          ← GitHub Actions 配置（可选，用于自动部署）
├── package.json      ← 依赖配置
└── vite.config.js    ← 构建配置
```

---

## ✅ 需要上传到 GitHub 的文件

**方案一：直接上传 dist 文件夹（推荐新手）**

在 GitHub 仓库页面，将以下文件拖入上传：

```
dist/
├── index.html           (795 bytes)
├── favicon.svg          (9522 bytes)
├── icons.svg            (9522 bytes)
└── assets/
    ├── index-CInTwu-S.css   (14080 bytes)
    └── index-Ck-YeI1f.js    (202303 bytes)
```

总大小约 **240KB**，上传速度快。

> ⚠️ 注意：当前仓库名是 `mysite`，GitHub Pages 部署地址会是 `https://chijysmile.github.io/mysite/`

---

## ❌ 不需要上传的文件

```
src/              ← 源代码，GitHub Pages 不需要
node_modules/     ← 依赖包，很大且不需要
.git/             ← Git 版本控制，不需要
.github/          ← GitHub Actions 配置（除非你启用自动部署）
package.json      ← 构建工具配置，静态页面不需要
vite.config.js    ← 同上
```

---

## 🚀 部署步骤

### 第一步：上传文件到 GitHub

1. 打开 https://github.com/chijysmile/mysite
2. 点击 **Add file** → **Upload files**
3. 把 `dist/` 里所有文件拖进去（或直接上传 dist 文件夹）
4. 填写提交信息，如：`Initial deployment`
5. 点击 **Commit changes**

### 第二步：启用 GitHub Pages

1. 进入仓库页面：**Settings** → **Pages**（左侧菜单）
2. **Source**: 选择 `main`（或你推送的分支）
3. **Folder**: 选择 `/ (root)`
4. 点击 **Save**

### 第三步：等待部署完成

- 大约需要 1-3 分钟
- 访问地址：`https://chijysmile.github.io/mysite/`
- 如果显示 404，稍等片刻再刷新

---

## 🔄 后续更新网站

每次修改代码后，执行以下步骤：

```bash
# 1. 进入项目目录
cd D:/Hermeswork/mysite1/portfolio

# 2. 修改 src/ 下的代码...

# 3. 重新构建（生成新的 dist 文件夹）
npm run build

# 4. 把 dist/ 里的新文件覆盖上传到 GitHub
# （删除旧的，上传新的）
```

或者直接推送代码到 GitHub，让我帮你用 GitHub Actions 自动部署。

---

## ⚙️ GitHub Actions 自动部署（可选）

如果你想省去手动上传的步骤，可以启用 GitHub Actions：

1. 确保 `.github/workflows/deploy.yml` 已存在于仓库中
2. 推送所有源码到 GitHub：
   ```bash
   git add .
   git commit -m "Add portfolio source"
   git push origin main
   ```
3. 进入 **Settings → Pages**，Source 选择 **GitHub Actions**
4. 之后每次 push 都会自动构建部署

---

## 🔧 常见问题

**Q: 网站打开显示 404？**
A: 等待 1-2 分钟让 GitHub Pages 生效，或检查 Pages 设置是否保存成功。

**Q: 想换域名？**
A: Settings → Pages → Custom domain，输入你的域名并配置 DNS。

**Q: 视频背景加载失败？**
A: 当前视频来自外部 CDN，如果网络受限可以换成本地视频文件或静态背景。

**Q: 部署后样式乱了？**
A: 检查 vite.config.js 中的 base 路径是否正确。
