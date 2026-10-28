// Languages and screen text. Languages and their order follow the team's language list (28 Oct 2026).
// speech = language used by 🔊 and 🎤; font = Google font for the script; tag = #TumBolo in that language
// (Marathi from the team's file; Hindi, Kannada, Telugu, Odia, Tamil, Punjabi are drafts for native review).
// Screen text below is in English, Hindi and Marathi; any other language shows English until its text is added.
// Question text comes from forms.js (made from the team's Excel files by tools/import_excel.py).
export const LANGS = [
  { code: "en", name: "English", speech: "en-IN", tag: "#TumBolo" },
  { code: "hi", name: "हिंदी", speech: "hi-IN", tag: "#तुमबोलो", font: "Noto Sans Devanagari" },
  { code: "kn", name: "ಕನ್ನಡ", speech: "kn-IN", tag: "#ನೀವುಹೇಳಿ", font: "Noto Sans Kannada" },
  { code: "te", name: "తెలుగు", speech: "te-IN", tag: "#మీరుచెప్పండి", font: "Noto Sans Telugu" },
  { code: "or", name: "ଓଡ଼ିଆ", speech: "or-IN", tag: "#ତୁମେକୁହ", font: "Noto Sans Oriya" },
  { code: "ta", name: "தமிழ்", speech: "ta-IN", tag: "#நீங்கசொல்லுங்க", font: "Noto Sans Tamil" },
  { code: "pa", name: "ਪੰਜਾਬੀ", speech: "pa-IN", tag: "#ਤੁਸੀਂਬੋਲੋ", font: "Noto Sans Gurmukhi" },
  { code: "mr", name: "मराठी", speech: "mr-IN", tag: "#तुम्हीसांगा", font: "Noto Sans Devanagari" },
];

import { fill } from "./translations.js?v=20261028-1856";

const T3 = (en, hi, mr) => ({ en, hi, mr });

export const UI = {
  startTitle: T3("How do you see the future of young people?", "आप युवाओं के भविष्य को कैसे देखते हैं?", "तुम्ही तरुणांच्या भविष्याकडे कसे पाहता?"),
  startLead: T3("A short form with simple questions. Type your answers, or tap 🎤 to speak them. Tap 🔊 to hear any question.",
                "आसान सवालों वाला एक छोटा फ़ॉर्म। जवाब लिखें, या 🎤 दबाकर बोलें। कोई भी सवाल सुनने के लिए 🔊 दबाएँ।",
                "सोप्या प्रश्नांचा छोटा फॉर्म. उत्तरे लिहा, किंवा 🎤 दाबून बोला. कोणताही प्रश्न ऐकण्यासाठी 🔊 दाबा."),
  stepLang: T3("1. Choose a language", "1. भाषा चुनें", "१. भाषा निवडा"),
  stepForm: T3("2. Choose the form that fits you", "2. वह फ़ॉर्म चुनें जो आप पर लागू होता है", "२. तुम्हाला लागू होणारा फॉर्म निवडा"),
  stepStart: T3("3. Before you start", "3. शुरू करने से पहले", "३. सुरू करण्यापूर्वी"),
  pickYouth: T3("I am 12–25 years old", "मेरी उम्र 12–25 साल है", "माझे वय १२–२५ वर्षे आहे"),
  pickParent: T3("I am a parent or guardian of a child in school or college", "मैं स्कूल या कॉलेज जाने वाले बच्चे का माता-पिता या अभिभावक हूँ", "मी शाळेत किंवा कॉलेजमध्ये शिकणाऱ्या मुलाचा/मुलीचा पालक आहे"),
  titleYouth: T3("Youth", "युवा", "तरुण"),
  titleParent: T3("Parent or guardian", "माता-पिता या अभिभावक", "पालक"),
  titlePublic: T3("General public", "आम जनता", "सर्वसामान्य नागरिक"),
  pickPublic: T3("I am an adult (26 or older)", "मैं वयस्क हूँ (26 या उससे ज़्यादा)", "मी प्रौढ आहे (२६ किंवा जास्त)"),
  privacy: T3("Your answers are anonymous. Please do not write your name, phone number or address anywhere in the form.",
              "आपके जवाब गुमनाम रहेंगे। कृपया फ़ॉर्म में कहीं भी अपना नाम, फ़ोन नंबर या पता न लिखें।",
              "तुमची उत्तरे निनावी राहतील. कृपया फॉर्ममध्ये कुठेही तुमचे नाव, फोन नंबर किंवा पत्ता लिहू नका."),
  consent: T3("I agree to share my answers for this study.", "मैं इस अध्ययन के लिए अपने जवाब देने के लिए सहमत हूँ।", "या अभ्यासासाठी माझी उत्तरे देण्यास मी सहमत आहे."),
  start: T3("Start", "शुरू करें", "सुरू करा"),
  consentFirst: T3("Please tick the box to agree before you start.", "शुरू करने से पहले कृपया सहमति वाले बॉक्स पर टिक करें।", "सुरू करण्यापूर्वी कृपया संमतीच्या चौकटीत खूण करा."),
  crashText: T3("Something went wrong on this screen. Your answers are saved on this device.", "इस स्क्रीन पर कुछ गड़बड़ हो गई। आपके जवाब इस डिवाइस पर सेव हैं।", "या स्क्रीनवर काहीतरी चूक झाली. तुमची उत्तरे या डिव्हाइसवर जतन आहेत."),
  reload: T3("Reload", "फिर से खोलें", "पुन्हा उघडा"),
  pickFormFirst: T3("Choose a form above to start.", "शुरू करने के लिए ऊपर से एक फ़ॉर्म चुनें।", "सुरू करण्यासाठी वरून एक फॉर्म निवडा."),
  next: T3("Next", "आगे", "पुढे"),
  back: T3("Back", "पीछे", "मागे"),
  submit: T3("Submit", "जमा करें", "सबमिट करा"),
  listen: T3("Listen", "सुनें", "ऐका"),
  qOf: T3("Question {i} of {n}", "सवाल {i} / {n}", "प्रश्न {i} / {n}"),
  required: T3("Required", "ज़रूरी", "आवश्यक"),
  requiredError: T3("Please answer this question.", "कृपया इस सवाल का जवाब दें।", "कृपया या प्रश्नाचे उत्तर द्या."),
  numberError: T3("Please enter a number between {min} and {max}.", "कृपया {min} से {max} के बीच कोई संख्या लिखें।", "कृपया {min} ते {max} मधील संख्या लिहा."),
  choose: T3("Choose", "चुनें", "निवडा"),
  chooseMany: T3("You can choose more than one.", "आप एक से ज़्यादा चुन सकते हैं।", "तुम्ही एकापेक्षा जास्त निवडू शकता."),
  yourAnswer: T3("Type your answer here", "अपना जवाब यहाँ लिखें", "तुमचे उत्तर इथे लिहा"),
  probeEmpty: T3("You left this blank. Your answer really helps us.", "आपने यह खाली छोड़ा है। आपका जवाब हमारे लिए बहुत काम का है।", "तुम्ही हे रिकामे सोडले आहे. तुमचे उत्तर आमच्यासाठी खूप महत्त्वाचे आहे."),
  probeShort: T3("Thank you. Could you tell us a little more?", "धन्यवाद। क्या आप थोड़ा और बता सकते हैं?", "धन्यवाद. थोडे अधिक सांगाल का?"),
  probeVague: T3("Thank you, that's a start. Could you be more specific?", "धन्यवाद, यह अच्छी शुरुआत है। क्या आप थोड़ा और साफ़ बता सकते हैं?", "धन्यवाद, ही चांगली सुरुवात आहे. थोडे अधिक नेमके सांगाल का?"),
  probeUnclear: T3("We could not understand this answer.", "हम यह जवाब समझ नहीं पाए।", "आम्हाला हे उत्तर समजले नाही."),
  probeRephrase: T3("Thank you! Could you say a little more? Let us ask it another way:", "धन्यवाद! क्या आप थोड़ा और बता सकते हैं? हम इसे दूसरे तरीके से पूछते हैं:", "धन्यवाद! थोडे अधिक सांगाल का? हाच प्रश्न वेगळ्या शब्दांत:"),
  probeSkipNote: T3("If you prefer not to add more, press Next again.", "अगर आप और नहीं लिखना चाहते, तो फिर से \"आगे\" दबाएँ।", "अधिक लिहायचे नसेल, तर पुन्हा \"पुढे\" दाबा."),
  moreHere: T3("Write a bit more here", "यहाँ थोड़ा और लिखें", "इथे थोडे अधिक लिहा"),
  micStart: T3("Speak your answer", "बोलकर जवाब दें", "बोलून उत्तर द्या"),
  micStop: T3("Listening… tap the mic to stop", "सुन रहे हैं… रोकने के लिए माइक दबाएँ", "ऐकत आहोत… थांबवण्यासाठी माइक दाबा"),
  micAgain: T3("Tap the mic again to add more. You can also edit the text.", "और जोड़ने के लिए माइक फिर से दबाएँ। आप लिखा हुआ बदल भी सकते हैं।", "आणखी जोडण्यासाठी माइक पुन्हा दाबा. लिहिलेला मजकूर तुम्ही बदलूही शकता."),
  micDenied: T3("The microphone is blocked. Allow it in your browser settings, or type your answer.", "माइक बंद है। ब्राउज़र की सेटिंग में इसकी अनुमति दें, या जवाब लिखें।", "माइक बंद आहे. ब्राउझरच्या सेटिंगमध्ये परवानगी द्या, किंवा उत्तर लिहा."),
  micNoNet: T3("Speaking needs internet. Please type, or try again.", "बोलकर जवाब देने के लिए इंटरनेट चाहिए। कृपया लिखें, या फिर से कोशिश करें।", "बोलून उत्तर देण्यासाठी इंटरनेट लागते. कृपया लिहा, किंवा पुन्हा प्रयत्न करा."),
  micNoMic: T3("No microphone found. Please type your answer.", "माइक नहीं मिला। कृपया जवाब लिखें।", "माइक सापडला नाही. कृपया उत्तर लिहा."),
  micNothing: T3("We did not hear anything. Tap the mic and speak, or type.", "हमें कुछ सुनाई नहीं दिया। माइक दबाकर बोलें, या लिखें।", "आम्हाला काहीच ऐकू आले नाही. माइक दाबून बोला, किंवा लिहा."),
  noVoice: T3("This device has no voice for this language, so it cannot read aloud.", "इस डिवाइस में इस भाषा की आवाज़ नहीं है, इसलिए पढ़कर नहीं सुना सकते।", "या डिव्हाइसमध्ये या भाषेचा आवाज नाही, त्यामुळे वाचून दाखवता येत नाही."),
  supportTitle: T3("If you are going through a hard time", "अगर आप किसी मुश्किल दौर से गुज़र रहे हैं", "तुम्ही कठीण काळातून जात असाल तर"),
  supportText: T3("You are not alone. Tele-MANAS is a free, confidential 24×7 helpline from the Government of India. Call 14416 or 1-800-891-4416.",
                  "आप अकेले नहीं हैं। टेली-मानस भारत सरकार की मुफ़्त और गोपनीय 24×7 हेल्पलाइन है। 14416 या 1-800-891-4416 पर कॉल करें।",
                  "तुम्ही एकटे नाही. टेली-मानस ही भारत सरकारची मोफत आणि गोपनीय २४×७ हेल्पलाइन आहे. 14416 किंवा 1-800-891-4416 वर कॉल करा."),
  thanksTitle: T3("Thank you for sharing your voice!", "अपनी बात रखने के लिए धन्यवाद!", "तुमचे म्हणणे मांडल्याबद्दल धन्यवाद!"),
  thanksText: T3("Your answers have been saved.", "आपके जवाब सेव हो गए हैं।", "तुमची उत्तरे जतन झाली आहेत."),
  thanksSent: T3("They have been sent.", "जवाब भेज दिए गए हैं।", "उत्तरे पाठवली गेली आहेत."),
  thanksQueued: T3("They will be sent automatically when this device is online.", "इंटरनेट मिलते ही जवाब अपने-आप भेज दिए जाएँगे।", "इंटरनेट मिळताच उत्तरे आपोआप पाठवली जातील."),
  refCode: T3("Reference code", "संदर्भ कोड", "संदर्भ कोड"),
  another: T3("Fill another response", "एक और जवाब भरें", "आणखी एक प्रतिसाद भरा"),
  home: T3("Home", "मुख्य पेज", "मुख्य पान"),
  resume: T3("You have an unfinished form on this device.", "इस डिवाइस पर आपका एक अधूरा फ़ॉर्म है।", "या डिव्हाइसवर तुमचा एक अपूर्ण फॉर्म आहे."),
  resumeYes: T3("Continue it", "उसे पूरा करें", "तो पूर्ण करा"),
  resumeNo: T3("Start fresh", "नया शुरू करें", "नव्याने सुरू करा"),
  notTranslated: T3("Some questions are not yet available in this language, so they are shown in English.",
                    "कुछ सवाल अभी इस भाषा में उपलब्ध नहीं हैं, इसलिए वे अंग्रेज़ी में दिखाए गए हैं।",
                    "काही प्रश्न अजून या भाषेत उपलब्ध नाहीत, त्यामुळे ते इंग्रजीत दाखवले आहेत."),
  autoSave: T3("Your answers are saved as you go. If you stop, open this link again on the same phone or computer to continue.",
               "आपके जवाब साथ-साथ सेव होते रहते हैं। बीच में रुकें तो उसी फ़ोन या कंप्यूटर पर यह लिंक फिर से खोलकर आगे भरें।",
               "तुमची उत्तरे भरता भरता जतन होतात. मध्येच थांबलात तर त्याच फोन किंवा कॉम्प्युटरवर ही लिंक पुन्हा उघडून पुढे भरा."),
  resumeWhen: T3("Last saved: {when}", "आख़िरी बार सेव: {when}", "शेवटचे जतन: {when}"),
  stateFirst: T3("Please choose the state first (previous question).", "कृपया पहले राज्य चुनें (पिछला सवाल)।", "कृपया आधी राज्य निवडा (मागील प्रश्न)."),
  notListed: T3("Not in the list", "सूची में नहीं है", "यादीत नाही"),
  visit: T3("Visit {site}", "{site} पर जाएँ", "{site} ला भेट द्या"),
};

// Languages without hand-written screen text get it from translations.js (lang/*.json).
for (const [k, e] of Object.entries(UI)) fill(e, "ui." + k);

export function t(entry, lang, vars) {
  if (!entry) return "";
  let s = entry[lang] || entry.en || "";
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);   // not replaceAll: older phones
  return s;
}
