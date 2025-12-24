# HOOLT - A Guided Journey

A lean, intentional vision board creation process focused on getting user feedback.

## ✨ What This Is

**HOOLT** is not a vision board creator. It's a guided process to help people create their own vision board with intention.

## 🎯 Philosophy

- Keep it lean
- Focus on the process, not the tool
- Direct users to create their board externally
- Capture feedback via TypeForm
- No AI generation (keeps costs at $0)
- No backend needed

## 📁 Files

- `index.html` - Clean guided experience
- `styles.css` - Nature-inspired aesthetic (blues, purples)
- `script.js` - Breathing exercise, timer, validation, summary generation

## 🎨 Design Features

**Branding:**
- HOOLT logo with letter-spaced typography
- "A Guided Journey" tagline
- Clear "not a creator" positioning

**Color Palette:**
- Sky blue to purple gradient background
- Purple accents (#8b7aa8)
- Soft, ethereal aesthetic

**Experience:**
- 7 guided steps + summary
- Progress bar at top
- Breathing exercise with 3-second cycles
- 30-second intuitive timer
- Personalized summary with keywords
- AI prompt generator

## 🚀 Steps in the Journey

1. **Welcome** - Clear positioning
2. **Breathe** - Guided breathing (breathe in 3s, out 3s, 2 cycles)
3. **Soundtrack** - Choose their vibe (no input needed)
4. **Future Self** - 3 key features
5. **Intuitive** - 30-second timer, 3 thoughts
6. **Grand Goals** - 3 big goals
7. **Mind/Body/Soul** - Specific nurturing plans
8. **Symbols** - Optional signs from universe
9. **Summary** - Keywords + AI prompt + TypeForm link

## 🔧 How to Use

### Option 1: Open Directly
1. Double-click `index.html`
2. Opens in browser
3. Works immediately

### Option 2: Local Server
```bash
python -m http.server 8000
# Open: http://localhost:3000
```

## 🌐 Deployment

### Netlify Drop (Easiest)
1. Go to https://app.netlify.com/drop
2. Drag the folder
3. Get instant URL
4. Share on social

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Deploy
4. Get URL

### GitHub Pages
1. Create repo
2. Upload files
3. Enable Pages in settings
4. Get URL

## ✏️ Customization

### Change HOOLT Name
Find `.logo` in `styles.css` and HTML to change branding

### Update TypeForm Link
In `index.html` find:
```html
<a href="https://form.typeform.com/to/T1o4S2cu" target="_blank">
```
Replace with your TypeForm URL

### Change Colors
In `styles.css`:
- Background gradient: Line 7
- Purple accent: Search for `#8b7aa8`
- Progress bar: Line 19

### Adjust Breathing Timing
In `script.js`, `runBreathCycle()` function:
- Change `3000` to adjust seconds (currently 3s)
- Change `breathingCycle >= 2` to adjust number of cycles

### Modify Timer Duration
In `script.js`, line 4:
- Change `timeLeft = 30` to desired seconds

## 📊 What to Track

Since this is for validation:
1. **Completion rate** - How many reach summary?
2. **TypeForm responses** - Quality of feedback
3. **Time spent** - Are they rushing or reflecting?
4. **Drop-off points** - Which step loses people?

Add Google Analytics for tracking:
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🎯 Launch Strategy

1. **Deploy** to Netlify/Vercel
2. **Create video** explaining HOOLT process
3. **Post on Instagram/LinkedIn** with link
4. **Monitor TypeForm** responses
5. **Follow up** with users via email (collect in TypeForm)

## 💡 TypeForm Questions to Ask

Suggested questions for your TypeForm:
1. How would you rate this experience? (1-10)
2. What did you find most valuable?
3. What would you improve?
4. Would you recommend this to a friend?
5. Would you use an app that automates this? (Yes/No)
6. If yes, would you pay for it? How much?
7. Can we email you with updates? (Email capture)

## 🔥 Success Metrics

**Good validation:**
- 40%+ completion rate (start to TypeForm)
- Average rating 8+ on TypeForm
- 50%+ say they'd use an app version
- 30%+ say they'd pay for it

**Pivot signals:**
- <20% completion rate
- Feedback says "too long" or "confusing"
- Nobody wants app version

## 📱 Mobile Optimized

Fully responsive:
- Single column on mobile
- Large touch targets
- Readable text
- Smooth scrolling

## 🐛 Troubleshooting

**Breathing not working?**
- Check console for errors
- JavaScript must be enabled

**Timer not starting?**
- Clear browser cache
- Check JavaScript is enabled

**Summary not generating?**
- Make sure all required fields filled
- Check browser console for errors

## 💰 Cost

**Total: $0**
- No backend
- No AI API calls
- No database
- Just static HTML/CSS/JS

Perfect for validation!

## 🎯 Next Steps After Validation

If this validates well:
1. Build full app with AI integration
2. Add image upload + Claude analysis
3. Create mobile app
4. Add progress tracking
5. Enable board editing/updates

---

**Keep it lean. Get feedback. Iterate.** ✨
