# marisacameron.com — GitHub Pages Site

A clean, academic portfolio site built with plain HTML, CSS, and a small JS nav helper.

---

## Files

| File | Description |
|---|---|
| `index.html` | Home page |
| `bio.html` | Bio page |
| `research.html` | Research page |
| `teaching.html` | Teaching page |
| `teaching-evaluations.html` | Teaching evaluations page |
| `cv.html` | CV page |
| `style.css` | All styles |
| `nav.js` | Shared navigation injected on every page |

---

## Quick-start: Deploy to GitHub Pages

### 1. Create a GitHub repository

- Go to [github.com/new](https://github.com/new)
- Name it `marisacameron.com` (or any name you like)
- Set it to **Public**
- Don't initialize with a README (you already have one)

### 2. Push these files

```bash
cd /path/to/this/folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/marisacameron.com.git
git push -u origin main
```

### 3. Enable GitHub Pages

- Go to your repo on GitHub → **Settings** → **Pages**
- Under *Source*, select **Deploy from a branch**
- Branch: `main` / folder: `/ (root)`
- Click **Save**

GitHub will give you a URL like `https://yourusername.github.io/marisacameron.com`

### 4. Connect your custom domain (marisacameron.com)

**In GitHub:**
- Settings → Pages → Custom domain → enter `marisacameron.com` → Save
- Check *Enforce HTTPS* once it appears

**In your domain registrar (wherever you bought marisacameron.com):**

Add these DNS records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

DNS changes can take up to 48 hours to propagate.

---

## Adding your photos

1. Copy your headshot into this folder and name it `photo.jpg`
2. Copy your bio photos and name them `bio-1.jpg`, `bio-2.jpg`, `bio-3.jpg`
3. Push the changes: `git add . && git commit -m "Add photos" && git push`

## Updating your CV

1. Replace `cv.pdf` with your updated PDF (keep the same filename)
2. Push: `git add cv.pdf && git commit -m "Update CV" && git push`

## Updating content

All content is plain HTML — open the relevant `.html` file in any text editor,
make your changes, save, and push.
