// Answer checks that decide when to ask a follow-up. Pure functions (no page code) so they can be tested with node.

// Answers that say nothing on their own (English, Hindi, Hinglish).
const NON_ANSWERS = new Set([
  "yes", "yess", "yes yes", "yeah", "ya", "yep", "no", "nope", "ok", "okay", "k", "fine", "same", "as above", "nothing", "none", "nil", "na", "n a",
  "dont know", "do not know", "i dont know", "idk", "no idea", "not sure", "maybe", "good", "nice", "correct", "right", "all right", "alright",
  "haan", "han", "ha", "haa", "ji", "ji haan", "nahi", "nahin", "nai", "pata nahi", "pata nhi", "malum nahi", "maloom nahi", "kuch nahi", "kuchh nahin",
  "theek", "thik", "theek hai", "thik hai", "sahi", "achha", "accha",
  "हाँ", "हां", "जी", "जी हाँ", "नहीं", "ना", "पता नहीं", "मालूम नहीं", "कुछ नहीं", "ठीक", "ठीक है", "सही", "अच्छा",
  "हो", "होय", "नाही", "माहीत नाही", "माहिती नाही", "काही नाही", "काहीच नाही", "ठीक आहे", "बरं", "बरोबर", "चांगले", "चांगलं", "हो हो",
  // Kannada, Telugu, Odia, Tamil, Punjabi: yes / no / ok / don't know / nothing
  "ಹೌದು", "ಇಲ್ಲ", "ಸರಿ", "ಗೊತ್ತಿಲ್ಲ", "ಗೊತ್ತಿಲ್ಲಾ", "ಏನೂ ಇಲ್ಲ", "ಏನು ಇಲ್ಲ",
  "అవును", "లేదు", "సరే", "తెలియదు", "నాకు తెలియదు", "ఏమీ లేదు", "ఏమి లేదు",
  "ହଁ", "ନା", "ନାହିଁ", "ଠିକ୍", "ଠିକ୍ ଅଛି", "ଜାଣିନାହିଁ", "ଜାଣେନା", "ଜାଣି ନାହିଁ", "କିଛି ନାହିଁ",
  "ஆமாம்", "ஆம்", "இல்லை", "சரி", "தெரியாது", "எனக்கு தெரியாது", "ஒன்றுமில்லை", "ஒன்றும் இல்லை",
  "ਹਾਂ", "ਨਹੀਂ", "ਠੀਕ", "ਠੀਕ ਹੈ", "ਪਤਾ ਨਹੀਂ", "ਕੁਝ ਨਹੀਂ", "ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ",
]);

// Short answers that are a real answer for questions that allow them (allowNoOne / allowChoice).
const NO_ONE = [/\bno ?one\b/, /\bnobody\b/, /\bnot anyone\b/, /\bmyself\b/, /\bkisi se nahi/, /\bkoi nahi/, /किसी से नहीं/, /कोई नहीं/, /खुद से/, /\bnothing this week\b/, /इस हफ़्ते कुछ नहीं/,
  /कोणालाच नाही/, /कोणालाही नाही/, /कोणी नाही/, /कोणीच नाही/, /स्वतःच/, /या आठवड्यात काही नाही/];
const CHILD_CHOICE = [/whatever (my|the) child/, /child chooses/, /(his|her|their) choice/, /jo (bachcha|baccha|bacha) (chahe|chune)/, /जो बच्चा/, /बच्चा खुद चुने/, /उसकी मर्ज़ी/, /मूल स्वतः ठरवेल/, /त्याला हवे ते/, /तिला हवे ते/, /मुलाला हवे ते/, /त्याची इच्छा/, /तिची इच्छा/];

// Words that carry no content on their own.
const STOP = new Set(("a an the and or but to of in on at for with my me i we our you your it is am are be will would should can could " +
  "want wish hope like some very more much also just so that this there their them they he she his her as by from do " +
  "give provide get make have take need try become being keep all every " +
  "dena karna chahiye hona dena देना करना चाहिए होना " +
  "aur ya ki ka ke ko se mein me main hum mai hai hain ho tha thi bhi to toh ek koi apna apni apne " +
  "और या की का के को से में मैं हम है हैं हो था थी भी तो एक कोई अपना अपनी अपने वह ये यह " +
  "आणि किंवा मी आम्ही माझा माझी माझे आहे आहेत ला ने चा ची चे च्या मध्ये तर पण हे ते ती तो एक काही आपला आपली आपले करणे पाहिजे असावे").split(" "));

// Words that suggest a person may be at risk. If seen, the form shows a support line (Tele-MANAS) and flags the response.
const DISTRESS = [/suicid/, /kill (my ?self|myself)/, /end (my|this) life/, /want to die/, /self ?harm/, /no reason to live/,
  /aatmhatya/, /atmhatya/, /khudkushi/, /marna chahta/, /marna chahti/, /jeena nahi chahta/, /jeena nahi chahti/,
  /आत्महत्या/, /ख़ुदकुशी/, /खुदकुशी/, /मरना चाहता/, /मरना चाहती/, /जीना नहीं चाहता/, /जीना नहीं चाहती/,
  /मरायचे आहे/, /मरायचं आहे/, /जगायचे नाही/, /जगायचं नाही/, /जीव द्यायचा/,
  // Kannada, Telugu, Odia, Tamil, Punjabi: suicide / want to die / do not want to live (drafts for native review)
  /ಆತ್ಮಹತ್ಯೆ/, /ಸಾಯಬೇಕು/, /ಸಾಯಲು ಬಯಸ/, /ಸಾಯಬೇಕೆನಿಸ/, /ಬದುಕಲು ಇಷ್ಟವಿಲ್ಲ/, /ಬದುಕುವ ಆಸೆ ಇಲ್ಲ/,
  /ఆత్మహత్య/, /చనిపోవాల/, /చచ్చిపోవాల/, /బతకాలని లేదు/, /బ్రతకాలని లేదు/,
  /ଆତ୍ମହତ୍ୟା/, /ମରିବାକୁ ଚାହ/, /ମରିଯିବାକୁ ଚାହ/, /ବଞ୍ଚିବାକୁ ଇଚ୍ଛା ନାହିଁ/, /ବଞ୍ଚିବାକୁ ମନ ନାହିଁ/,
  /தற்கொலை/, /சாக வேண்டும்/, /சாகணும்/, /சாக விரும்/, /உயிரை மாய்/, /வாழ விருப்பமில்லை/, /வாழ பிடிக்கவில்லை/,
  /ਖੁਦਕੁਸ਼ੀ/, /ਖ਼ੁਦਕੁਸ਼ੀ/, /ਆਤਮਹੱਤਿਆ/, /ਮਰਨਾ ਚਾਹੁੰਦ/, /ਜੀਣਾ ਨਹੀਂ ਚਾਹੁੰਦ/, /ਜਿਉਣਾ ਨਹੀਂ ਚਾਹੁੰਦ/];

export function normalize(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[’'`]/g, "")
    .replace(/[^\p{L}\p{M}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function words(text) {
  const n = normalize(text);
  return n ? n.split(" ") : [];
}

/**
 * Decide whether a short answer needs a follow-up.
 * Returns null when the answer is fine, otherwise the reason:
 *   "empty" | "unclear" | "nonanswer" | "short" | "vague"
 */
export function assess(text, probe = {}) {
  const n = normalize(text);
  if (!n) return String(text ?? "").trim() ? "unclear" : "empty";
  if (!/\p{L}/u.test(n) || /^(.)\1*$/u.test(n.replace(/\s/g, ""))) return "unclear";
  if (probe.allowNoOne && NO_ONE.some(r => r.test(n))) return null;
  if (probe.allowChoice && CHILD_CHOICE.some(r => r.test(n))) return null;
  if (NON_ANSWERS.has(n)) return "nonanswer";
  const w = n.split(" ");
  const vague = new Set((probe.vague || []).map(normalize));
  const meaningful = w.filter(x => !STOP.has(x));
  const content = meaningful.filter(x => !vague.has(x));
  // Only general words such as "good", "peaceful", "hard work".
  if (vague.size && meaningful.length && !content.length) return "vague";
  // Too short — unless it still has two real content words (e.g. "Nurse in AIIMS").
  // strict: any answer under minWords is short (questions that need a longer answer).
  if (w.length < (probe.minWords ?? 3) && (probe.strict || content.length < 2)) return "short";
  return null;
}

export function isDistress(text) {
  const n = normalize(text);
  return !!n && DISTRESS.some(r => r.test(n));
}
