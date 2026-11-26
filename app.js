const copy = {
  ar: {
    skip:'انتقل للمحتوى', navPlants:'النباتات', navGuide:'دليل البداية', navFaq:'أسئلة شائعة',
    heroEyebrow:'دليل أخضر على قدّ بيتك', heroTitle:'بيتك مش محتاج جنينة.<br><em>نبتة واحدة</em> تكفي.',
    heroDescription:'مش عارف تبدأ منين؟ خلّيها علينا. نبتة تساعدك تختار صاحب أخضر يناسب ضوء شقتك ووقتك — من غير مصطلحات معقدة ولا جدول ريّ صارم.',
    heroCta:'اختار نبتتك', heroSecondary:'اقرأ دليل البداية', heroNote:'على مهلك… مفيش إبهام أخضر مطلوب.', artCaption:'رفيق أخضر، خطوة بخطوة',
    introStrip:'اختيار النبتة الصح يبدأ من بيتك — مش من قواعد كتير.', introLocation:'دليل منزلي من مصر',
    plantsEyebrow:'خضرة على مقاس يومك', plantsTitle:'مين يناسب <em>ركنك؟</em>', plantsIntro:'اختار الإضاءة ووقت العناية المتاح عندك. هنقرّب لك الاختيارات — والباقي هتتعلمه واحدة واحدة.',
    lightLabel:'نور البيت', allLight:'كل الإضاءات', lowLight:'نور هادي', indirectLight:'نور غير مباشر', brightLight:'قرب شباك منوّر',
    timeLabel:'وقتك للعناية', allCare:'أي وقت', littleTime:'وقتي محدود', moreTime:'أقدر أتابعها', resultsCaption:'اختيارات سهلة للبداية', reset:'إعادة التصفية',
    noResults:'مفيش اختيار مطابق دلوقتي. جرّب تغيّر الفلتر.', plantDisclaimer:'ملاحظة: احتياج النبات بيتغير حسب حرارة البيت وحجم الأصيص. افحص التربة بإصبعك بدل جدول ريّ ثابت.',
    tipLabel:'نصيحة صغيرة', lightNames:{low:'نور هادي',indirect:'نور غير مباشر',bright:'قرب شباك منوّر'}, careNames:{easy:'عناية خفيفة',moderate:'متابعة منتظمة'},
    guideEyebrow:'بداية من غير ضغط', guideTitle:'أول نبتة؟<br><em>خدها واحدة واحدة.</em>', guideIntro:'مش مطلوب منك تبقى خبير. شوية ملاحظات بسيطة تساعدك تفهم نبتتك وتسيبها تكبر على راحتها.',
    stepOneTitle:'بصّ على النور', stepOneBody:'راقب المكان خلال اليوم. الضوء الساطع غير المباشر — جنب شباك منوّر من غير شمس حارقة على الورق — يناسب نباتات كتير.',
    stepTwoTitle:'اختار أصيصًا بيصرّف', stepTwoBody:'فتحة التصريف تساعد الماء الزائد يخرج. خليك مع أصيص مناسب لحجم الجذور، مش أكبر بكتير من اللازم.',
    stepThreeTitle:'اسأل التربة قبل الريّ', stepThreeBody:'المواعيد مش واحدة لكل النباتات والبيوت. المس أول كام سنتيمتر من التربة، واسقِ لما يناسب نوع نبتتك، وسيب الماء الزائد يتصفّى.',
    stepFourTitle:'تابع بهدوء', stepFourBody:'غيّر مكان النبتة بالتدريج، وراقب شكل أوراقها. تعديل بسيط كل مرة أسهل من تغييرات كتير مرة واحدة.',
    faqEyebrow:'أسئلة على الطريق', faqTitle:'كل بداية فيها <em>سؤال.</em>', faqIntro:'إجابات صغيرة تطمّنك قبل ما تجيب أول نبتة.',
    faqOneQ:'أعرف منين إن المكان منوّر كفاية؟', faqOneA:'اقعد في المكان وقت النهار: لو النور مريح للقراءة من غير ما تكون الشمس ضاربة مباشرة على المكان، غالبًا عندك ضوء غير مباشر. ظل إيدك الواضح علامة بسيطة، مش اختبارًا دقيقًا.',
    faqTwoQ:'أسقي النبتة كل كام يوم؟', faqTwoA:'مفيش رقم ثابت ينفع لكل النباتات والبيوت. نوع النبتة، حجم الأصيص، والحرارة كلهم بيأثروا. افحص التربة واتبع احتياج نوعك بدل ما تسقي على جدول.',
    faqThreeQ:'ينفع أحط النبتة في شمس مباشرة؟', faqThreeA:'حسب نوعها. نباتات كتير منزلية تفضّل ضوءًا قويًا غير مباشر، والشمس القوية وخصوصًا خلف الزجاج ممكن تحرق بعض الأوراق. اعرف احتياج نبتتك وابدأ بالتدرّج.',
    faqFourQ:'إيه أسهل نبتة أبدأ بيها؟', faqFourA:'لو الإضاءة ضعيفة ووقتك قليل، الزاميا أو جلد النمر اختيارات مرنة نسبيًا. لكن مفيش نبتة تستغنى تمامًا عن الضوء المناسب والتصريف الجيد.',
    closingNote:'كل نبتة بتعلّمك حاجة. ابدأ بواحدة، والباقي ييجي مع الوقت.', footerLine:'دليل بسيط لحياة فيها خضرة أكتر.', footerEdition:'القاهرة، مصر · دليل منزلي',
    languageAria:'Switch to English', count:n=>`${arabicNumber(n)} ${n===1?'نبتة':n===2?'نبتتين':'نباتات'}`
  },
  en: {
    skip:'Skip to content', navPlants:'Plants', navGuide:'First steps', navFaq:'FAQs',
    heroEyebrow:'A greener guide, made for your home', heroTitle:'No garden needed.<br><em>One plant</em> is plenty.',
    heroDescription:'Not sure where to start? We can help. Nabta helps you find a leafy companion for your apartment’s light and your available time—with no jargon or rigid watering calendar.',
    heroCta:'Find your plant', heroSecondary:'Read the beginner guide', heroNote:'Take it slowly. A green thumb is not required.', artCaption:'A leafy friend, one step at a time',
    introStrip:'The right plant starts with your home—not a long list of rules.', introLocation:'A home-growing guide from Egypt',
    plantsEyebrow:'Greenery for your kind of day', plantsTitle:'What suits <em>your corner?</em>', plantsIntro:'Choose your light and the time you have for care. We’ll narrow the options down; you can learn the rest as you grow.',
    lightLabel:'Light at home', allLight:'Any light', lowLight:'Low light', indirectLight:'Indirect light', brightLight:'Near a bright window',
    timeLabel:'Time for care', allCare:'Any amount', littleTime:'Not much time', moreTime:'I can check in', resultsCaption:'Easy plants to get started', reset:'Reset filters',
    noResults:'No plants match those filters yet. Try another combination.', plantDisclaimer:'Note: a plant’s needs change with room temperature and pot size. Check the soil with a finger instead of following a fixed watering schedule.',
    tipLabel:'A little tip', lightNames:{low:'Low light',indirect:'Indirect light',bright:'Near a bright window'}, careNames:{easy:'Easy care',moderate:'Regular check-ins'},
    guideEyebrow:'A calm start', guideTitle:'Your first plant?<br><em>One step at a time.</em>', guideIntro:'You don’t need to be an expert. A few simple observations can help you understand your plant and let it grow at its own pace.',
    stepOneTitle:'Notice the light', stepOneBody:'Watch the spot through the day. Many houseplants do well in bright, indirect light—a bright place near a window, without harsh sun landing on their leaves.',
    stepTwoTitle:'Choose a pot that drains', stepTwoBody:'A drainage hole lets excess water escape. Choose a pot that fits the roots instead of one that is much larger than they need.',
    stepThreeTitle:'Check the soil before watering', stepThreeBody:'There is no single schedule for every plant or home. Feel the top few centimetres of soil, water according to your plant, and let excess water drain away.',
    stepFourTitle:'Keep an easy eye on it', stepFourBody:'Move your plant gradually and notice its leaves. One small adjustment at a time is easier than changing everything at once.',
    faqEyebrow:'A few questions along the way', faqTitle:'Every beginning has a <em>question.</em>', faqIntro:'A few reassuring answers before you bring home your first plant.',
    faqOneQ:'How can I tell if a spot is bright enough?', faqOneA:'Spend a little time there during the day. If it feels bright enough to read without direct sun falling on the spot, it may be indirect light. A defined hand shadow is a simple clue, not a precise measurement.',
    faqTwoQ:'How often should I water?', faqTwoA:'There is no fixed number that works for every plant and home. Plant type, pot size and temperature all matter. Check the soil and follow your plant’s needs instead of a calendar.',
    faqThreeQ:'Can I put my plant in direct sun?', faqThreeA:'It depends on the plant. Many houseplants prefer bright, indirect light, and strong sun—especially through glass—may scorch some leaves. Check your plant’s needs and make changes gradually.',
    faqFourQ:'What is the easiest plant to start with?', faqFourA:'For a lower-light spot and a busy routine, a ZZ plant or snake plant can be fairly forgiving. Every plant still needs suitable light and good drainage.',
    closingNote:'Every plant teaches you something. Start with one; the rest can come with time.', footerLine:'A simple guide to a little more green.', footerEdition:'Cairo, Egypt · A home-growing guide',
    languageAria:'التبديل إلى العربية', count:n=>`${n} ${n===1?'plant':'plants'}`
  }
};

const plants = [
  { id:'zz', latin:'Zamioculcas zamiifolia', ar:{name:'زاميا',badge:'نبات صبور',description:'خضرة لامعة وطباع هادية. مناسبة لو روتينك مش ثابت.',water:'اسقها بعد ما تنشف التربة كلها تقريبًا.',detail:'ما تسيبش ماء راكد في الصحن. النبتة تتحمل قلة الري أحسن من زيادة الماء.'}, en:{name:'ZZ plant',badge:'Patient by nature',description:'Glossy green leaves and an easygoing nature for an uneven routine.',water:'Let the soil dry almost completely before watering.',detail:'Do not leave standing water in the saucer. It handles a dry spell better than overwatering.'}, lights:['low','indirect'],care:'easy',art:'zz',badgeTone:'' },
  { id:'snake', latin:'Dracaena trifasciata', ar:{name:'جلد النمر',badge:'قوية التحمل',description:'شكل معماري جميل، وتستحمل تفاوت مواعيد العناية.',water:'سيب التربة تنشف تقريبًا بالكامل قبل الري.',detail:'اختر أصيصًا بفتحة تصريف، وابعدها عن الشمس المباشرة القوية.'}, en:{name:'Snake plant',badge:'Hardy favorite',description:'Sculptural leaves that can cope with a less predictable routine.',water:'Let the soil dry almost completely before watering.',detail:'Choose a pot with a drainage hole and keep it out of harsh direct sun.'}, lights:['low','indirect'],care:'easy',art:'snake',badgeTone:'clay' },
  { id:'pothos', latin:'Epipremnum aureum', ar:{name:'بوتس',badge:'تتدلّى بحب',description:'متسلّقة لطيفة للمبتدئين، وتحب الركن المضيء بعيدًا عن الشمس.',water:'اسقها لما ينشف أول ٢–٣ سم من التربة.',detail:'قصّ الأطراف الطويلة لو حبيت شكلًا أكثف؛ ويمكن تجذير القصاصة في الماء.'}, en:{name:'Golden pothos',badge:'Lovely trailing habit',description:'A friendly trailing plant for a bright spot away from direct sun.',water:'Water when the top 2–3 cm of soil feels dry.',detail:'Trim long stems for a fuller shape; cuttings can be rooted in water.'}, lights:['indirect','bright'],care:'easy',art:'pothos',badgeTone:'' },
  { id:'spider', latin:'Chlorophytum comosum', ar:{name:'نبات العنكبوت',badge:'شكل خفيف',description:'أوراق مقوّسة وخضرة مرحة لمكان فيه ضوء غير مباشر.',water:'خلّي أول طبقة من التربة تنشف بين الريّات.',detail:'الأطراف البنية قد تعني هواءً جافًا أو أملاحًا زائدة؛ راقب النبات وعدّل بلطف.'}, en:{name:'Spider plant',badge:'Light and lively',description:'Arching, cheerful leaves for a place with indirect light.',water:'Let the top layer of soil dry between waterings.',detail:'Brown tips can have several causes, including dry air or mineral build-up; observe before making gentle changes.'}, lights:['indirect','bright'],care:'easy',art:'spider',badgeTone:'clay' },
  { id:'monstera', latin:'Monstera deliciosa', ar:{name:'مونستيرا',badge:'ركن واسع',description:'أوراق كبيرة بطابع استوائي؛ تكبر مع مكان مضيء ومساحة حواليها.',water:'اسقها لما ينشف سطح التربة، وصرف الماء الزائد.',detail:'امسح الأوراق من التراب أحيانًا؛ ده يساعدها تستفيد من الضوء المتاح.'}, en:{name:'Monstera',badge:'Give it room',description:'Large, tropical-looking leaves that appreciate a bright spot and room to grow.',water:'Water when the top of the soil dries and let extra water drain.',detail:'Wipe dust off the leaves now and then so they can make the most of available light.'}, lights:['indirect','bright'],care:'moderate',art:'monstera',badgeTone:'' },
  { id:'peperomia', latin:'Peperomia obtusifolia', ar:{name:'بيبيروميا',badge:'حجم صغير',description:'نبتة مدمجة بأوراق ممتلئة، مناسبة لرف أو مكتب صغير.',water:'اترك التربة تنشف جزئيًا قبل ما تسقيها تاني.',detail:'تجنّب إن الأصيص يفضل مبلولًا؛ الأوراق الممتلئة تخزن بعض الماء.'}, en:{name:'Baby rubber plant',badge:'Small-space pick',description:'A compact plant with fleshy leaves for a shelf or small desk.',water:'Let the soil dry partly before watering again.',detail:'Avoid keeping the pot soggy; the fleshy leaves hold some water.'}, lights:['indirect','bright'],care:'easy',art:'peperomia',badgeTone:'clay' }
];

const cardTemplates = {
  zz: `<span class="leaf leaf-one"></span><span class="leaf leaf-two"></span><span class="leaf leaf-three"></span><span class="leaf leaf-four"></span><span class="leaf leaf-five"></span><span class="mini-pot"></span>`,
  snake: `<span class="snake-leaf snake-one"></span><span class="snake-leaf snake-two"></span><span class="snake-leaf snake-three"></span><span class="mini-pot"></span>`,
  pothos: `<span class="vine vine-one"></span><span class="vine vine-two"></span><span class="hanging-leaf hanging-one"></span><span class="hanging-leaf hanging-two"></span><span class="hanging-leaf hanging-three"></span><span class="mini-pot"></span>`,
  spider: `<span class="spider-leaf spider-one"></span><span class="spider-leaf spider-two"></span><span class="spider-leaf spider-three"></span><span class="spider-leaf spider-four"></span><span class="mini-pot"></span>`,
  monstera: `<span class="monstera-leaf monster-one"></span><span class="monstera-leaf monster-two"></span><span class="monstera-leaf monster-three"></span><span class="mini-pot"></span>`,
  peperomia: `<span class="peperomia-leaf pep-one"></span><span class="peperomia-leaf pep-two"></span><span class="peperomia-leaf pep-three"></span><span class="peperomia-leaf pep-four"></span><span class="mini-pot"></span>`
};

const state = { language: readSavedLanguage(), light:'all', care:'all' };
const html = document.documentElement;
const text = (key) => copy[state.language][key];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function readSavedLanguage() {
  try { const saved = localStorage.getItem('nabta-language'); return saved === 'en' ? 'en' : 'ar'; }
  catch { return 'ar'; }
}
function arabicNumber(number) { return String(number).replace(/[0-9]/g, (digit) => '٠١٢٣٤٥٦٧٨٩'[Number(digit)]); }
function setStaticCopy() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = text(node.dataset.i18n);
    if (typeof value === 'string') node.innerHTML = value;
  });
  html.lang = state.language;
  html.dir = state.language === 'ar' ? 'rtl' : 'ltr';
  document.body.lang = state.language;
  document.querySelector('#language-label').textContent = state.language === 'ar' ? 'English' : 'العربية';
  document.querySelector('#language-toggle').setAttribute('aria-label', text('languageAria'));
  const english = state.language === 'en';
  document.querySelector('.brand').setAttribute('aria-label', english ? 'Nabta — home' : 'نبتة — الرئيسية');
  document.querySelector('.main-nav').setAttribute('aria-label', english ? 'Main navigation' : 'التنقل الرئيسي');
  document.querySelector('.hero-art').setAttribute('aria-label', english ? 'Illustration of a leafy green plant in a terracotta pot' : 'رسمة نبتة خضراء في أصيص طوبي');
  document.querySelector('.intro-strip').setAttribute('aria-label', english ? 'About Nabta' : 'عن نبتة');
  document.querySelector('.filter-panel').setAttribute('aria-label', english ? 'Filter plants' : 'تصفية النباتات');
  const filterGroups = document.querySelectorAll('.filter-group[role="group"]');
  filterGroups[0].setAttribute('aria-label', english ? 'Filter by light' : 'فلترة حسب الإضاءة');
  filterGroups[1].setAttribute('aria-label', english ? 'Filter by care time' : 'فلترة حسب وقت العناية');
  document.querySelector('.closing-note').setAttribute('aria-label', english ? 'A final reminder' : 'تذكير أخير');
  document.querySelector('.back-to-top').setAttribute('aria-label', english ? 'Back to top' : 'العودة إلى أعلى الصفحة');
  document.title = state.language === 'ar' ? 'نبتة | دليل النباتات المنزلية للمبتدئين في مصر' : 'Nabta | A Beginner’s Guide to Houseplants in Egypt';
  document.querySelector('meta[name="description"]').content = state.language === 'ar'
    ? 'اختار نبتة تناسب ضوء بيتك ووقتك. دليل عربي بسيط لسكان الشقق في مصر، مع نباتات سهلة العناية وخطوات بداية واضحة.'
    : 'Find a houseplant for your light and your routine. A friendly beginner’s guide to apartment plants, simple care and first steps in Egypt.';
}
function plantCard(plant, index) {
  const language = state.language;
  const item = plant[language];
  const labels = copy[language].lightNames;
  const careLabel = copy[language].careNames[plant.care];
  const badgeClass = plant.badgeTone === 'clay' ? 'plant-badge badge-clay' : 'plant-badge';
  const number = String(index + 1).padStart(2, '0');
  return `<article class="plant-card ${index % 3 === 0 ? 'plant-card-featured' : ''}">
    <div class="card-topline"><span class="plant-number">${number} / ${plant.care === 'easy' ? 'EASY' : 'GROW'}</span><span class="${badgeClass}">${escapeHtml(item.badge)}</span></div>
    <div class="plant-illustration illustration-${plant.art}" aria-hidden="true">${cardTemplates[plant.art]}</div>
    <div class="card-content"><p class="plant-family">${escapeHtml(plant.latin)}</p><h3>${escapeHtml(item.name)}</h3><p class="plant-description">${escapeHtml(item.description)}</p>
    <div class="plant-tags"><span>${labels[plant.lights[0]]}</span><span>${careLabel}</span></div>
    <p class="watering-tip"><span aria-hidden="true">◉</span> ${escapeHtml(item.water)}</p>
    <details class="plant-details"><summary>${copy[language].tipLabel}</summary><p>${escapeHtml(item.detail)}</p></details></div>
  </article>`;
}
function renderPlants() {
  const filtered = plants.filter((plant) => (state.light === 'all' || plant.lights.includes(state.light)) && (state.care === 'all' || plant.care === state.care));
  document.querySelector('#plant-grid').innerHTML = filtered.map(plantCard).join('');
  document.querySelector('#no-results').hidden = filtered.length > 0;
  document.querySelector('#results-count').textContent = copy[state.language].count(filtered.length);
}
function updateFilterButtons() {
  document.querySelectorAll('[data-filter-group]').forEach((button) => {
    const selected = state[button.dataset.filterGroup] === button.dataset.value;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
function setLanguage(language) {
  state.language = language;
  try { localStorage.setItem('nabta-language', language); } catch { /* Language switching still works without storage. */ }
  setStaticCopy();
  renderPlants();
}

document.querySelector('#language-toggle').addEventListener('click', () => setLanguage(state.language === 'ar' ? 'en' : 'ar'));
document.querySelectorAll('[data-filter-group]').forEach((button) => button.addEventListener('click', () => {
  state[button.dataset.filterGroup] = button.dataset.value;
  updateFilterButtons();
  renderPlants();
}));
document.querySelector('#reset-filters').addEventListener('click', () => {
  state.light = 'all'; state.care = 'all'; updateFilterButtons(); renderPlants();
});
setStaticCopy();
renderPlants();
