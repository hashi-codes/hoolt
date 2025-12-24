let currentStep = 0;
let timerInterval = null;
let timeLeft = 30;
const totalSteps = 8;
let breathingCycle = 0;

// Update progress bar
function updateProgress() {
    const progress = ((currentStep + 1) / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Step ${currentStep + 1} of ${totalSteps}`;
}

// Validation for buttons
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();

    // Future self validation
    ['future-1', 'future-2', 'future-3'].forEach(id => {
        document.getElementById(id).addEventListener('input', checkFuture);
    });

    // Intuitive validation
    ['intuitive-1', 'intuitive-2', 'intuitive-3'].forEach(id => {
        document.getElementById(id).addEventListener('input', checkIntuitive);
    });

    // Goals validation
    ['goal-1', 'goal-2', 'goal-3'].forEach(id => {
        document.getElementById(id).addEventListener('input', checkGoals);
    });

    // Mind/Body/Soul validation
    ['mind', 'body', 'soul'].forEach(id => {
        document.getElementById(id).addEventListener('input', checkMBS);
    });

    // Initialize disabled states
    document.getElementById('btn-future').disabled = true;
    document.getElementById('btn-intuitive').disabled = true;
    document.getElementById('btn-goals').disabled = true;
    document.getElementById('btn-mbs').disabled = true;
});

function checkFuture() {
    const filled = ['future-1', 'future-2', 'future-3'].every(id => 
        document.getElementById(id).value.trim()
    );
    document.getElementById('btn-future').disabled = !filled;
}

function checkIntuitive() {
    const filled = ['intuitive-1', 'intuitive-2', 'intuitive-3'].every(id => 
        document.getElementById(id).value.trim()
    );
    document.getElementById('btn-intuitive').disabled = !filled;
}

function checkGoals() {
    const filled = ['goal-1', 'goal-2', 'goal-3'].every(id => 
        document.getElementById(id).value.trim()
    );
    document.getElementById('btn-goals').disabled = !filled;
}

function checkMBS() {
    const filled = ['mind', 'body', 'soul'].every(id => 
        document.getElementById(id).value.trim()
    );
    document.getElementById('btn-mbs').disabled = !filled;
}

function nextStep() {
    if (currentStep === 7) {
        // Before showing step 8, generate summary and prompt
        generateSummary();
        generatePrompt();
    }

    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateProgress();
    window.scrollTo(0, 0);
}

function prevStep() {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateProgress();
    window.scrollTo(0, 0);
}

// Breathing Exercise
function startBreathing() {
    const instructionEl = document.getElementById('breath-instruction');
    const btnEl = document.getElementById('breath-btn');
    
    btnEl.style.display = 'none';
    breathingCycle = 0;
    
    runBreathCycle();
}

function runBreathCycle() {
    const instructionEl = document.getElementById('breath-instruction');
    
    if (breathingCycle >= 3) {
        instructionEl.textContent = "Complete ✓";
        instructionEl.classList.remove('inhale', 'exhale');
        setTimeout(() => {
            document.getElementById('btn-breath').style.display = 'block';
        }, 1000);
        return;
    }
    
    // Inhale
    instructionEl.textContent = "Breathe in...";
    instructionEl.classList.add('inhale');
    instructionEl.classList.remove('exhale');
    
    setTimeout(() => {
        // Exhale
        instructionEl.textContent = "Breathe out...";
        instructionEl.classList.add('exhale');
        instructionEl.classList.remove('inhale');
        
        setTimeout(() => {
            breathingCycle++;
            runBreathCycle();
        }, 3000);
    }, 3000);
}

// Timer for intuitive section
function startTimer() {
    document.getElementById('timer-section').style.display = 'none';
    document.getElementById('timer-display').style.display = 'block';
    
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft + 's';
        
        if (timeLeft <= 5) {
            document.getElementById('timer').classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = "Time's up! ✅";
            document.getElementById('timer').classList.remove('warning');
        }
    }, 1000);
}

function generateSummary() {
    const summary = document.getElementById('summary-box');
    
    const data = {
        future: [
            document.getElementById('future-1').value,
            document.getElementById('future-2').value,
            document.getElementById('future-3').value
        ],
        intuitive: [
            document.getElementById('intuitive-1').value,
            document.getElementById('intuitive-2').value,
            document.getElementById('intuitive-3').value
        ],
        goals: [
            document.getElementById('goal-1').value,
            document.getElementById('goal-2').value,
            document.getElementById('goal-3').value
        ],
        mind: document.getElementById('mind').value,
        body: document.getElementById('body').value,
        soul: document.getElementById('soul').value,
        symbols: [
            document.getElementById('symbol-1').value,
            document.getElementById('symbol-2').value,
            document.getElementById('symbol-3').value
        ].filter(s => s.trim())
    };

    let html = '';
    
    html += `<div class="summary-section">
        <div class="summary-title">✨ Future Self - Key Features</div>
        <div class="summary-content"><ul>`;
    data.future.forEach(item => {
        if (item) html += `<li>${item}</li>`;
    });
    html += `</ul></div></div>`;

    html += `<div class="summary-section">
        <div class="summary-title">💭 Intuitive Insights</div>
        <div class="summary-content"><ul>`;
    data.intuitive.forEach(item => {
        if (item) html += `<li>${item}</li>`;
    });
    html += `</ul></div></div>`;

    html += `<div class="summary-section">
        <div class="summary-title">🎯 Grand Goals</div>
        <div class="summary-content"><ul>`;
    data.goals.forEach(item => {
        if (item) html += `<li>${item}</li>`;
    });
    html += `</ul></div></div>`;

    html += `<div class="summary-section">
        <div class="summary-title">🧠 Mind</div>
        <div class="summary-content">${data.mind}</div>
    </div>`;

    html += `<div class="summary-section">
        <div class="summary-title">💪 Body</div>
        <div class="summary-content">${data.body}</div>
    </div>`;

    html += `<div class="summary-section">
        <div class="summary-title">✨ Soul</div>
        <div class="summary-content">${data.soul}</div>
    </div>`;

    if (data.symbols.length > 0) {
        html += `<div class="summary-section">
            <div class="summary-title">🔮 Symbols & Signs</div>
            <div class="summary-content"><ul>`;
        data.symbols.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += `</ul></div></div>`;
    }

    summary.innerHTML = html;
}

function generatePrompt() {
    const formatList = (ids) => {
        return ids.map((id, i) => {
            const val = document.getElementById(id).value.trim();
            return val ? `${i + 1}. ${val}` : '';
        }).filter(x => x).join('\n');
    };

    const symbolsList = ['symbol-1', 'symbol-2', 'symbol-3']
        .map(id => document.getElementById(id).value.trim())
        .filter(x => x)
        .map((val, i) => `${i + 1}. ${val}`)
        .join('\n');

    const prompt = `I'm sharing my 2026 vision board with you. Please analyze it and provide:

1. Three powerful, personalized affirmations for my year ahead
2. The overall mood and energy you sense from this board
3. Three positive traits or strengths reflected in my choices

Be encouraging, specific, and insightful. Help me see the deeper patterns in what I've created.

Context from my reflection process:

✨ Future Self - Key Features:
${formatList(['future-1', 'future-2', 'future-3'])}

💭 Intuitive Insights:
${formatList(['intuitive-1', 'intuitive-2', 'intuitive-3'])}

🎯 Grand Goals:
${formatList(['goal-1', 'goal-2', 'goal-3'])}

🧠 Mind Nurturing:
${document.getElementById('mind').value}

💪 Body Nurturing:
${document.getElementById('body').value}

✨ Soul Nurturing:
${document.getElementById('soul').value}

${symbolsList ? `🔮 Symbols & Signs:\n${symbolsList}` : ''}`;

    document.getElementById('ai-prompt').textContent = prompt;
}

function copyPrompt() {
    const prompt = document.getElementById('ai-prompt').textContent;
    navigator.clipboard.writeText(prompt).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copy Prompt';
            btn.classList.remove('copied');
        }, 2000);
    });
}

function copySummary() {
    // Get all the data
    const future = ['future-1', 'future-2', 'future-3'].map(id => document.getElementById(id).value).filter(v => v);
    const intuitive = ['intuitive-1', 'intuitive-2', 'intuitive-3'].map(id => document.getElementById(id).value).filter(v => v);
    const goals = ['goal-1', 'goal-2', 'goal-3'].map(id => document.getElementById(id).value).filter(v => v);
    const mind = document.getElementById('mind').value;
    const body = document.getElementById('body').value;
    const soul = document.getElementById('soul').value;
    const symbols = ['symbol-1', 'symbol-2', 'symbol-3'].map(id => document.getElementById(id).value).filter(v => v);

    // Format as text
    let summaryText = 'MY 2026 VISION BOARD KEYWORDS\n\n';
    
    summaryText += '✨ FUTURE SELF - KEY FEATURES:\n';
    future.forEach((item, i) => summaryText += `${i + 1}. ${item}\n`);
    
    summaryText += '\n💭 INTUITIVE INSIGHTS:\n';
    intuitive.forEach((item, i) => summaryText += `${i + 1}. ${item}\n`);
    
    summaryText += '\n🎯 GRAND GOALS:\n';
    goals.forEach((item, i) => summaryText += `${i + 1}. ${item}\n`);
    
    summaryText += '\n🧠 MIND NURTURING:\n';
    summaryText += mind + '\n';
    
    summaryText += '\n💪 BODY NURTURING:\n';
    summaryText += body + '\n';
    
    summaryText += '\n✨ SOUL NURTURING:\n';
    summaryText += soul + '\n';
    
    if (symbols.length > 0) {
        summaryText += '\n🔮 SYMBOLS & SIGNS:\n';
        symbols.forEach((item, i) => summaryText += `${i + 1}. ${item}\n`);
    }

    // Copy to clipboard
    navigator.clipboard.writeText(summaryText).then(() => {
        const btn = document.querySelector('.copy-summary-btn');
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}
