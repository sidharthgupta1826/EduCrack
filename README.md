# Competitive Examination Study Material Website

A modern, responsive, and student-focused educational platform built with **React**, **Tailwind CSS**, and **Vite** for competitive examination aspirants preparing for **SSC**, **Railway**, and other **Government Competitive Examinations**.

---

## 🚀 Live Local Server
The development server is running locally at:
👉 **`http://127.0.0.1:5173/`**

---

## 📂 Google Drive Folder Integration (Important)

Every examination category has its own dedicated, functional button that opens its corresponding Google Drive folder in a new tab:

- **Explore All Notes** → Main Competitive Exam Study Material Master Folder
- **SSC GD** → SSC GD Google Drive Folder
- **SSC CGL** → SSC CGL Google Drive Folder
- **SSC CHSL** → SSC CHSL Google Drive Folder
- **SSC MTS** → SSC MTS Google Drive Folder
- **Railway NTPC** → Railway NTPC Google Drive Folder
- **Railway Group D** → Railway Group D Google Drive Folder
- **Other Government Exams** → Other Exams Google Drive Folder

### ⚙️ How to Paste Your Google Drive Folder URLs

All Google Drive folder URLs are centralized in:

📁 **[`src/config/siteConfig.js`](file:///c:/Users/Sidharth/Desktop/booklet/src/config/siteConfig.js)**

```javascript
googleDriveLinks: {
  // Main Master Folder for "Explore All Notes"
  mainStudyMaterialFolder: "https://drive.google.com/drive/folders/YOUR_MAIN_FOLDER_ID?usp=sharing",

  // 1. SSC GD
  sscGdFolder: "https://drive.google.com/drive/folders/YOUR_SSC_GD_FOLDER_ID?usp=sharing",

  // 2. SSC CGL
  sscCglFolder: "https://drive.google.com/drive/folders/YOUR_SSC_CGL_FOLDER_ID?usp=sharing",

  // 3. SSC CHSL
  sscChslFolder: "https://drive.google.com/drive/folders/YOUR_SSC_CHSL_FOLDER_ID?usp=sharing",

  // 4. SSC MTS
  sscMtsFolder: "https://drive.google.com/drive/folders/YOUR_SSC_MTS_FOLDER_ID?usp=sharing",

  // 5. Railway NTPC
  railwayNtpcFolder: "https://drive.google.com/drive/folders/YOUR_RAILWAY_NTPC_FOLDER_ID?usp=sharing",

  // 6. Railway Group D
  railwayGroupDFolder: "https://drive.google.com/drive/folders/YOUR_RAILWAY_GROUP_D_FOLDER_ID?usp=sharing",

  // 7. Other Government Competitive Examinations
  otherExamsFolder: "https://drive.google.com/drive/folders/YOUR_OTHER_EXAMS_FOLDER_ID?usp=sharing",
}
```

> **⚡ Fast Live Testing in Browser:**
> You can also click the ⚙️ **Settings icon** in the top navigation bar to paste all your Google Drive URLs into the visual editor and test each button instantly in real-time.

> **💡 Public Google Drive Viewer Permissions:**
> To ensure students can view and download PDFs **without requiring a Google account login**, set each Google Drive folder's sharing settings to:
> **"Anyone with the link" → "Viewer"**

---

## 📌 Website Sections & Features

1. **Top Bar & Announcement Banner**:
   - Official Gmail contact indicator
   - 2026-2027 Admissions & Study Notes announcement
   - "Access Portal" quick link and Live Settings modal

2. **Navigation Bar**:
   - Sticky navbar with smooth backdrop blur
   - Smooth scrolling to all 6 main sections:
     - Home (`#home`)
     - About Us (`#about`)
     - Study Material (`#study-material`)
     - Exams Covered (`#exams-covered`)
     - Buy Notes (`#buy-notes`)
     - Contact Us (`#contact`)
   - Prominent "Explore All Notes" button (opens master Google Drive folder)
   - Mobile responsive drawer menu

3. **Section 1: Home / Hero Section**:
   - Deep blue educational gradient with subtle geometric grid overlay
   - `"Official Education Website"` badge pill (inspired by reference image 1)
   - Website/Channel name displayed prominently
   - Tagline: *"Your Destination for Competitive Exam Preparation."*
   - Hindi tagline: *"आपकी सफलता की तैयारी, सही स्टडी मटेरियल के साथ।"*
   - Hindi subtitle: *"प्रतियोगी परीक्षाओं की तैयारी के लिए उपयोगी नोट्स और अध्ययन सामग्री।"*
   - Highlight badges: **SSC Exams**, **Railway Exams**, and **General Studies**
   - Direct CTA buttons: **"Explore Study Material"** (scrolls down) & **"Explore All Notes"** (opens master Google Drive folder in a new tab)

4. **Section 2: About Us**:
   - Clear explanation of the educational platform's mission and vision
   - Helping students prepare for government competitive examinations
   - High-yield, structured, and student-friendly study resources
   - Direct callout to access Google Drive folders

5. **Section 3: Study Material (Primary Section)**:
   - Primary banner: **"Explore All Notes"** & **"Access Master Folder"** buttons opening the main Google Drive folder in a new tab
   - Interactive category filter tabs (All, SSC, Railway, Other) + Real-time search bar
   - 7 Examination Cards with dedicated **"View Notes"** buttons:
     1. **SSC GD** (Constable General Duty)
     2. **SSC CGL** (Combined Graduate Level)
     3. **SSC CHSL** (Combined Higher Secondary Level 10+2)
     4. **SSC MTS** (Multi-Tasking Staff & Havaldar)
     5. **Railway NTPC** (Non-Technical Popular Categories)
     6. **Railway Group D** (RRB Level 1 Posts)
     7. **Other Government Competitive Examinations**
   - Each card features an authentic exam image, full title, category badge, eligibility, short description, key highlight bullet points, and a dedicated **"View Notes"** button opening its specific Google Drive folder

6. **Section 4: Exams Covered**:
   - In-depth, category-based layout for SSC, Railway, and Other government exams detailing syllabus, exam patterns, stages (Tier 1/2, CBT 1/2, PET), and key benefits
   - Direct links to corresponding Google Drive folders

7. **Section 5: Buy Notes**:
   - Professional study notes banner explaining access and notes purchasing
   - **"Buy Notes"** button redirecting students directly to your external portal in a new tab

8. **Section 6: Contact Us (Gmail Only)**:
   - Strictly Gmail contact only (no phone numbers, WhatsApp, or contact forms)
   - Stylized Gmail icon, displayed email address, one-click copy button, and a **"Contact via Gmail"** button (`mailto:` link)

9. **Footer**:
   - Channel/platform name, description, quick navigation links, exams list with direct Drive links, Gmail contact, copyright notice, and smooth "Back to Top" button.
