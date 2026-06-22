# root@manav:~$

Interactive terminal portfolio for **Manav Kaushal** — Backend Engineer & AI Systems builder. One file, zero frameworks, no build step.

### Features

- **Boot sequence** — BIOS → kernel → ASCII art → system online
- **Shell** — 17 commands including `whoami`, `ls`, `cat`, `skills`, `exp`, `contact`, `cd`, `pwd`, `history`, `uptime`, `uname`, `sudo`, `clear`, `help`
- **Tab completion** — directory names for `cd`, fuzzy project slugs for `cat`, common-prefix fill for general commands
- **Command history** — arrow up/down, last 20 entries
- **Quick-nav pills** — click to auto-type and execute commands
- **Mobile responsive** — font-size, padding, and layout adapt under 600px

### Aesthetic

Y2K chain-themed terminal window with orange (#ff3c00) frame, silver (#c0c0c0) chain dividers, live digicam timestamp, CRT scanlines + pixel grid overlay, `[ MANAV.EXE ]` title bar, `◈`-prefixed pill tags. Sharp corners throughout. No images, SVGs, or external assets beyond the Google Fonts preconnect.

### Stack

| Layer | Tech |
|-------|------|
| UI | Vanilla HTML + CSS + JS in a single file |
| Font | JetBrains Mono (Google Fonts) |
| Deploy | Vercel (static, `framework: null`) |

No frameworks, no bundlers, no node_modules.

### Run It

```bash
npm install   # noop — zero deps
npx serve .
```

Or just open `index.html` directly in a browser.

### Deploy

```bash
vercel --prod
```

---

[maybemnv@gmail.com](mailto:maybemnv@gmail.com)
