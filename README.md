# Keirra Tatum Portfolio — File Guide

## Folder Structure

```
keirra-portfolio/
│
├── index.html              ← Visual shell — rarely needs editing
├── data.js                 ← ALL content lives here — edit this to update anything
├── README.md               ← This file
│
├── music/                  ← Drop MP3 files here
│   ├── on-the-hotline.mp3
│   └── lifestyle.mp3
│
├── photo/
│   └── keirra.jpg          ← Your profile photo
│
├── icons_ai/               ← AI tool logos
│   ├── claude.png
│   ├── gemini.png
│   ├── gumloop.png
│   ├── ava.png
│   └── gelan.png
│
├── icons_processed/        ← Floating portfolio item icons (one per project)
│   ├── Salesforce_Case_Tracking.png
│   ├── Engagement_Committee.png
│   └── ... (one per project)
│
└── evidence/               ← All screenshot evidence, organized by item
    ├── 01_Salesforce_Case_Tracking/
    │   ├── 01_Salesforce_Case_Tracking_01.jpg
    │   └── ...
    ├── 02_Engagement_Committee/
    └── ... (one folder per project)
```

---

## How to Update Common Things

### Add a new song
1. Drop the MP3 into the `music/` folder
2. Open `data.js`
3. Find the `SONGS` array at the top
4. Add a new line: `{id:'audio3', file:'music/your-file.mp3', name:'Song Display Name'}`
5. Commit — done

### Update a project description
1. Open `data.js`
2. Find the project by its `id` field
3. Edit the `situation`, `action`, `result`, `s3`, `s4`, or `why` fields
4. Commit — done

### Change a project status
1. Open `data.js`
2. Find the project
3. Change `status:'inprogress'` to `status:'complete'` (or vice versa)
4. Commit — done

### Add evidence images
1. Put the image in the correct `evidence/XX_Folder/` subfolder
2. Open `data.js`
3. Find the matching entry in the `EVIDENCE` object
4. Add a new line: `{file:'evidence/XX_Folder/filename.jpg', label:'What this shows'}`
5. Commit — done

### Add a new portfolio item
1. Add a new object to the `PROJECTS` array in `data.js` (copy an existing one as a template)
2. Add it to the `TIMELINE` array
3. Add its evidence to the `EVIDENCE` object
4. Add its icon image to `icons_processed/`
5. Commit — Netlify rebuilds in ~30 seconds

---

## Evidence Images — Getting Them from Gumloop

Use this prompt in Gumloop to export all evidence as a ZIP:

> You are the Keirra Tatum Brag Sheet Portfolio Agent.
> Export all files from the evidence/ folder as a single ZIP file, 
> preserving the full folder structure exactly as it exists 
> (evidence/01_Salesforce_Case_Tracking/, evidence/02_Engagement_Committee/, etc.).
> Do not rename any files. Output a download link for the ZIP.

Download the ZIP, unzip it, and drag the entire `evidence/` folder into your GitHub repo via GitHub.com (drag-and-drop into the repo works for up to ~100 files at once). Netlify will rebuild automatically.

---

## Netlify Deployment

- Site: keirra-portfolio.netlify.app
- Auto-deploys every time you push to GitHub
- Build time: ~30 seconds
- No build command needed — static HTML only
