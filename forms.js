// Made by tools/import_excel.py from the team's Excel files - do not edit by hand.
// Languages in this file: en, mr. Missing text falls back to English.
export const FORMS = {
 "youth": {
  "key": "youth",
  "opening": {
   "en": "Young people are told every day that they are the future of the nation. Now it’s our turn to be their voice of change. \n\nWe want to understand how you see your future. There are no right or wrong answers and this is completely anonymous. We are listening. #TumBolo",
   "mr": "तरुणांना दररोज सांगितले जाते की ते देशाचे भविष्य आहेत. आता त्यांच्या बदलाचा आवाज बनण्याची वेळ आमची आहे.\n\nतुम्ही तुमचे भविष्य कसे पाहता हे आम्हाला समजून घ्यायचे आहे. यात कोणतीही उत्तरे बरोबर किंवा चुकीची नाहीत आणि हे पूर्णपणे निनावी आहे. आम्ही ऐकत आहोत. #TumBolo #तुम्हीसांगा"
  },
  "closing": {
   "en": "Thank you for taking the time to answer these questions. Log onto tumbolo.shikshagraha.org  to see what other youth like you think about their future.",
   "mr": "या प्रश्नांची उत्तरे देण्यासाठी वेळ दिल्याबद्दल धन्यवाद. तुमच्यासारखे इतर तरुण त्यांच्या भविष्याबद्दल काय विचार करतात हे जाणून घेण्यासाठी https://tumbolo.shikshagraha.org/ ला भेट द्या."
  },
  "sections": [
   {
    "id": "demographic-details",
    "title": {
     "en": "Demographic Details",
     "mr": "वैयक्तिक माहिती"
    }
   },
   {
    "id": "future-aspirations",
    "title": {
     "en": "Future & Aspirations",
     "mr": "भविष्य आणि आकांक्षा"
    }
   },
   {
    "id": "readiness-skills",
    "title": {
     "en": "Readiness & Skills",
     "mr": "तयारी आणि कौशल्ये"
    }
   },
   {
    "id": "enabling-environment",
    "title": {
     "en": "Enabling Environment",
     "mr": "पोषक वातावरण"
    }
   }
  ],
  "items": [
   {
    "id": "Q0_1",
    "no": "0.1",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Can you please tell me your age?",
     "mr": "कृपया तुमचे वय सांगा."
    },
    "options": [
     {
      "v": "O1",
      "en": "12-15 years",
      "mr": "१२-१५ वर्षे"
     },
     {
      "v": "O2",
      "en": "16-21 years",
      "mr": "१६-२१ वर्षे"
     },
     {
      "v": "O3",
      "en": "22-25 years",
      "mr": "२२-२५ वर्षे"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_2",
    "no": "0.2",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What is your gender?",
     "mr": "तुमचे लिंग काय आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Male",
      "mr": "पुरुष"
     },
     {
      "v": "O2",
      "en": "Female",
      "mr": "स्त्री"
     },
     {
      "v": "O3",
      "en": "Other",
      "mr": "इतर"
     },
     {
      "v": "O4",
      "en": "Prefer not to say",
      "mr": "सांगू इच्छित नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_3",
    "no": "0.3",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Which state do you stay in?",
     "mr": "तुम्ही कोणत्या राज्यात राहता?"
    },
    "source": "state",
    "required": true
   },
   {
    "id": "Q0_4",
    "no": "0.4",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Which district do you stay in?",
     "mr": "तुम्ही कोणत्या जिल्ह्यात राहता?"
    },
    "source": "district",
    "required": true
   },
   {
    "id": "Q0_5",
    "no": "0.5",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Please select the option that best describes what you are currently doing.",
     "mr": "तुम्ही सध्या काय करत आहात याचे योग्य वर्णन करणारा पर्याय निवडा."
    },
    "options": [
     {
      "v": "O1",
      "en": "In school, grade 6-10",
      "mr": "शाळेत (इयत्ता ६ वी ते १० वी)"
     },
     {
      "v": "O2",
      "en": "In school, grade 11-12",
      "mr": "शाळेत / ज्युनियर कॉलेजमध्ये (इयत्ता ११ वी ते १२ वी)"
     },
     {
      "v": "O3",
      "en": "ITI",
      "mr": "आयटीआय (ITI)"
     },
     {
      "v": "O4",
      "en": "Polytechnic",
      "mr": "पॉलिटेक्निक (Polytechnic)"
     },
     {
      "v": "O5",
      "en": "Vocational programmes",
      "mr": "व्यावसायिक अभ्यासक्रम (Vocational programmes)"
     },
     {
      "v": "O6",
      "en": "Pursuing Undergraduate",
      "mr": "पदवीचे शिक्षण घेत आहे (Undergraduate)"
     },
     {
      "v": "O7",
      "en": "Pursuing Postgraduate",
      "mr": "पदव्युत्तर शिक्षण घेत आहे (Postgraduate)"
     },
     {
      "v": "O8",
      "en": "Working",
      "mr": "नोकरी / काम करत आहे"
     },
     {
      "v": "O9",
      "en": "Looking for employment",
      "mr": "कामाच्या शोधात आहे"
     },
     {
      "v": "O10",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_5a",
    "no": "0.5a",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What course or stream are you in?",
     "mr": "तुम्ही कोणत्या शाखेत शिकत आहात?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Science",
      "mr": "विज्ञान (Science)"
     },
     {
      "v": "O2",
      "en": "Commerce",
      "mr": "वाणिज्य (Commerce)"
     },
     {
      "v": "O3",
      "en": "Arts/Humanities",
      "mr": "कला / मानव्यविद्या (Arts/Humanities)"
     },
     {
      "v": "O4",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true,
    "showIf": {
     "q": "Q0_5",
     "in": [
      "O2"
     ]
    }
   },
   {
    "id": "Q0_5b",
    "no": "0.5b",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What course or stream are you in?",
     "mr": "तुम्ही कोणत्या शाखेत किंवा ट्रेडमध्ये आहात?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Electrical or electronics",
      "mr": "इलेक्ट्रिकल किंवा इलेक्ट्रॉनिक्स"
     },
     {
      "v": "O2",
      "en": "Mechanical or manufacturing",
      "mr": "मेकॅनिकल किंवा मॅन्युफॅक्चरिंग"
     },
     {
      "v": "O3",
      "en": "Automobile or transport",
      "mr": "ऑटोमोबाईल किंवा ट्रान्सपोर्ट"
     },
     {
      "v": "O4",
      "en": "Civil or construction",
      "mr": "सिव्हिल किंवा कन्स्ट्रक्शन"
     },
     {
      "v": "O5",
      "en": "Computer or IT",
      "mr": "कॉम्प्युटर किंवा आयटी"
     },
     {
      "v": "O6",
      "en": "Healthcare",
      "mr": "आरोग्य सेवा (Healthcare)"
     },
     {
      "v": "O7",
      "en": "Beauty",
      "mr": "ब्युटी आणि वेलनेस (Beauty & Wellness)"
     },
     {
      "v": "O8",
      "en": "Hospitality",
      "mr": "हॉस्पिटॅलिटी (हॉटेल मॅनेजमेंट / Hospitality)"
     },
     {
      "v": "O9",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true,
    "showIf": {
     "q": "Q0_5",
     "in": [
      "O3",
      "O4",
      "O5"
     ]
    }
   },
   {
    "id": "Q0_5c",
    "no": "0.5c",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What course or stream are you in?",
     "mr": "तुम्ही कोणता अभ्यासक्रम किंवा पदवी घेत आहात?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Arts (BA or MA)",
      "mr": "कला (BA किंवा MA)"
     },
     {
      "v": "O2",
      "en": "Science (B.Sc or M.Sc)",
      "mr": "विज्ञान (B.Sc किंवा M.Sc)"
     },
     {
      "v": "O3",
      "en": "Commerce (B.Com or M.Com)",
      "mr": "वाणिज्य (B.Com किंवा M.Com)"
     },
     {
      "v": "O4",
      "en": "Technology (B.Tech or M.Tech)",
      "mr": "इंजिनिअरिंग / टेक्नॉलॉजी (B.E. किंवा B.Tech / M.Tech)"
     },
     {
      "v": "O5",
      "en": "Business Administration (BBA or MBA)",
      "mr": "बिझनेस ॲडमिनिस्ट्रेशन (BBA किंवा MBA)"
     },
     {
      "v": "O6",
      "en": "Computer Applications (BCA or MCA)",
      "mr": "कॉम्प्युटर ॲप्लिकेशन्स (BCA किंवा MCA)"
     },
     {
      "v": "O7",
      "en": "Bachelor / Master of Medicine",
      "mr": "वैद्यकीय (Medicine / MBBS)"
     },
     {
      "v": "O8",
      "en": "Law (LLB or LLM)",
      "mr": "कायदा / विधी (LLB किंवा LLM)"
     },
     {
      "v": "O9",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true,
    "showIf": {
     "q": "Q0_5",
     "in": [
      "O6",
      "O7"
     ]
    }
   },
   {
    "id": "Q0_5d",
    "no": "0.5d",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Where are you currently employed?",
     "mr": "तुम्ही सध्या कोणत्या क्षेत्रात कार्यरत आहात?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Agriculture",
      "mr": "शेती / कृषी (Agriculture)"
     },
     {
      "v": "O2",
      "en": "Banking & Financial services",
      "mr": "बँकिंग आणि वित्तीय सेवा"
     },
     {
      "v": "O3",
      "en": "IT",
      "mr": "माहिती तंत्रज्ञान (IT)"
     },
     {
      "v": "O4",
      "en": "Entrepreneur / Business",
      "mr": "व्यवसाय / उद्योग (Business)"
     },
     {
      "v": "O5",
      "en": "Social Sector",
      "mr": "सामाजिक क्षेत्र (Social Sector / NGO)"
     },
     {
      "v": "O6",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true,
    "showIf": {
     "q": "Q0_5",
     "in": [
      "O8"
     ]
    }
   },
   {
    "id": "Q0_6",
    "no": "0.6",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Where did you or are you currently studying?",
     "mr": "तुम्ही सध्या कुठे शिकत आहात किंवा पूर्वी कुठे शिकलात?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Government school",
      "mr": "सरकारी शाळा"
     },
     {
      "v": "O2",
      "en": "Private school",
      "mr": "खाजगी शाळा"
     },
     {
      "v": "O3",
      "en": "Government-aided school",
      "mr": "शासकीय अनुदानित शाळा"
     },
     {
      "v": "O4",
      "en": "NIOS",
      "mr": "मुक्त शाळा (NIOS)"
     },
     {
      "v": "O5",
      "en": "Homeschool",
      "mr": "घरीच शिक्षण (Homeschool)"
     },
     {
      "v": "O6",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_7",
    "no": "0.7",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "How much does your family generally earn in a month?",
     "mr": "तुमच्या कुटुंबाचे साधारण मासिक उत्पन्न किती आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Less than ₹25,000 per month",
      "mr": "दरमहा ₹२५,००० पेक्षा कमी"
     },
     {
      "v": "O2",
      "en": "Between ₹25,000 – ₹66,000 per month",
      "mr": "दरमहा ₹२५,००० ते ₹६६,००० दरम्यान"
     },
     {
      "v": "O3",
      "en": "Between ₹67,000 – ₹83,000 per month",
      "mr": "दरमहा ₹६७,००० ते ₹८३,००० दरम्यान"
     },
     {
      "v": "O4",
      "en": "Above ₹83,000 per month",
      "mr": "दरमहा ₹८३,००० पेक्षा जास्त"
     },
     {
      "v": "O5",
      "en": "Not sure",
      "mr": "नक्की माहित नाही"
     },
     {
      "v": "O6",
      "en": "Prefer not to say",
      "mr": "सांगू इच्छित नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_8",
    "no": "0.8",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Do you have any disabilities? Knowing this will help us understand your experiences better.",
     "mr": "तुम्हाला काही दिव्यांगत्व (अपंगत्व) आहे का? हे जाणून घेतल्याने तुमचे अनुभव आम्हाला अधिक चांगल्या प्रकारे समजून घेण्यास मदत होईल."
    },
    "options": [
     {
      "v": "O1",
      "en": "Yes",
      "mr": "होय"
     },
     {
      "v": "O2",
      "en": "No",
      "mr": "नाही"
     },
     {
      "v": "O3",
      "en": "Prefer not to say",
      "mr": "सांगू इच्छित नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_8a",
    "no": "0.8a",
    "section": "demographic-details",
    "type": "multi",
    "label": {
     "en": "If you are comfortable sharing, could you share what kind of disability it is?",
     "mr": "जर तुम्हाला सांगण्यास हरकत नसेल, तर ते कोणत्या प्रकारचे दिव्यांगत्व आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Physical Disability",
      "mr": "शारीरिक दिव्यांगत्व (Physical Disability)"
     },
     {
      "v": "O2",
      "en": "Intellectual Disability",
      "mr": "बौद्धिक दिव्यांगत्व (Intellectual Disability)"
     },
     {
      "v": "O3",
      "en": "Mental Behaviour",
      "mr": "मानसिक आरोग्य / वर्तनात्मक (Mental / Behavioural)"
     },
     {
      "v": "O4",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true,
    "showIf": {
     "q": "Q0_8",
     "in": [
      "O1"
     ]
    }
   },
   {
    "id": "Q1A",
    "no": "1A",
    "section": "future-aspirations",
    "type": "short",
    "label": {
     "en": "What do you want to be when you're older?",
     "mr": "मोठे झाल्यावर तुम्हाला काय बनायचे आहे?"
    },
    "lead": {
     "en": "Thank you for telling me about your background. Now, we'd love to know more on your thoughts about the future.",
     "mr": "तुमच्याबद्दल माहिती दिल्याबद्दल धन्यवाद. आता आम्हाला भविष्याबद्दलचे तुमचे विचार जाणून घ्यायला आवडेल."
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q1B",
    "no": "1B",
    "section": "future-aspirations",
    "type": "short",
    "label": {
     "en": "And what kind of a lifestyle would you like to have?",
     "mr": "आणि तुम्हाला कशा प्रकारची जीवनशैली जगायला आवडेल?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q1C",
    "no": "1C",
    "section": "future-aspirations",
    "type": "number",
    "label": {
     "en": "What would be your ideal monthly income?",
     "mr": "तुमचे अपेक्षित मासिक उत्पन्न किती असेल?"
    },
    "required": true,
    "min": 0,
    "max": 100000000
   },
   {
    "id": "Q2",
    "no": "2",
    "section": "future-aspirations",
    "type": "choice",
    "label": {
     "en": "How confident are you feeling about achieving what you just shared?",
     "mr": "तुम्ही आत्ता जे सांगितले ते साध्य करण्याबाबत तुम्हाला किती आत्मविश्वास वाटतो?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Very confident",
      "mr": "पूर्ण आत्मविश्वास आहे"
     },
     {
      "v": "O2",
      "en": "Somewhat confident",
      "mr": "थोडाफार आत्मविश्वास आहे"
     },
     {
      "v": "O3",
      "en": "Unsure",
      "mr": "खात्री नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q3",
    "no": "3",
    "section": "readiness-skills",
    "type": "short",
    "label": {
     "en": "Which are 3 most important skills you think you would need to learn to achieve the future you want?",
     "mr": "तुम्हाला हवे असलेले भविष्य मिळवण्यासाठी तुम्हाला कोणती ३ महत्त्वाची कौशल्ये शिकावी लागतील असे वाटते?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q4",
    "no": "4",
    "section": "readiness-skills",
    "type": "choice",
    "label": {
     "en": "To what extent are you getting the chance to learn the skills you shared above?",
     "mr": "तुम्ही वर नमूद केलेली कौशल्ये शिकण्याची संधी तुम्हाला कितपत मिळत आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "I am not getting any chance to learn these skills",
      "mr": "मला ही कौशल्ये शिकण्याची कोणतीही संधी मिळत नाहीये"
     },
     {
      "v": "O2",
      "en": "I am getting only a few opportunities to learn these skills",
      "mr": "मला ही कौशल्ये शिकण्याच्या मोजक्याच संधी मिळत आहेत"
     },
     {
      "v": "O3",
      "en": "I am getting good opportunities to learn these skills",
      "mr": "मला ही कौशल्ये शिकण्याच्या चांगल्या संधी मिळत आहेत"
     },
     {
      "v": "O4",
      "en": "I have multiple opportunities and I feel well supported in learning these skills",
      "mr": "मला भरपूर संधी मिळत आहेत आणि ही कौशल्ये शिकण्यासाठी उत्तम पाठबळ मिळत आहे"
     }
    ],
    "required": true
   },
   {
    "id": "Q5",
    "no": "5",
    "section": "enabling-environment",
    "type": "short",
    "label": {
     "en": "How are you getting to learn these skills? Please share some examples.",
     "mr": "तुम्हाला ही कौशल्ये कशी शिकायला मिळत आहेत? कृपया काही उदाहरणे द्या."
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q6",
    "no": "6",
    "section": "enabling-environment",
    "type": "short",
    "label": {
     "en": "What are some challenges or difficulties that you might face in achieving the future that you shared about?",
     "mr": "तुम्ही सांगितलेले भविष्य साध्य करताना तुम्हाला कोणत्या अडचणी किंवा आव्हानांचा सामना करावा लागू शकतो?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q7",
    "no": "7",
    "section": "enabling-environment",
    "type": "short",
    "label": {
     "en": "If you could change one thing about your school experience what would it be?",
     "mr": "जर तुम्हाला तुमच्या शाळेच्या अनुभवात एखादी गोष्ट बदलण्याची संधी मिळाली, तर ती कोणती असेल?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q8",
    "no": "8",
    "section": "enabling-environment",
    "type": "short",
    "label": {
     "en": "As a final thought we would love to know, what's one thing you would like to do to help make education better for young people like you?",
     "mr": "शेवटचा विचार म्हणून - तुमच्यासारख्या तरुणांसाठी शिक्षण अधिक चांगले बनवण्यासाठी तुम्ही स्वतः काय करू इच्छिता?"
    },
    "required": false,
    "probe": true
   }
  ]
 },
 "parent": {
  "key": "parent",
  "opening": {
   "en": "Every day, our children are told they are the future of the nation. As parents, you see their hopes, worries, and dreams up close. Now it's your turn to be heard.\n\nWe want to understand how you see your child's future and what they will need to thrive. There are no right or wrong answers, and this survey is completely anonymous. We are listening.  #TumBolo",
   "mr": "दररोज आपल्या मुलांना सांगितले जाते की ती देशाचे भविष्य आहेत. पालक म्हणून त्यांच्या आशा, चिंता आणि स्वप्ने तुम्ही अगदी जवळून पाहता. आता तुमचे म्हणणे मांडण्याची वेळ आली आहे.\n\nतुम्ही तुमच्या मुलाच्या भविष्याकडे कसे पाहता आणि त्यांच्या प्रगतीसाठी त्यांना कशाची गरज भासेल, हे आम्हाला समजून घ्यायचे आहे. यात कोणतीही उत्तरे बरोबर किंवा चुकीची नाहीत आणि हे सर्वेक्षण पूर्णपणे निनावी आहे. आम्ही ऐकत आहोत. #TumBolo #तुम्हीसांगा"
  },
  "closing": {
   "en": "Thank you for taking the time to answer these questions. Log onto tumbolo.shikshagraha.org to see what other parents like you think about the future of the youth.",
   "mr": "या प्रश्नांची उत्तरे देण्यासाठी वेळ दिल्याबद्दल धन्यवाद. तुमच्यासारखे इतर पालक मुलांच्या भविष्याबद्दल काय विचार करतात हे जाणून घेण्यासाठी https://tumbolo.shikshagraha.org/ ला भेट द्या."
  },
  "sections": [
   {
    "id": "demographic-details",
    "title": {
     "en": "Demographic details",
     "mr": "वैयक्तिक माहिती"
    }
   },
   {
    "id": "student-learning-outcomes-and-well-being-as-perceived-by-parents",
    "title": {
     "en": "Student learning outcomes and well‑being (as perceived by parents)",
     "mr": "शिकण्याची प्रगती आणि समाधान"
    }
   },
   {
    "id": "future-orientation-college-and-career-readiness-education-continuity",
    "title": {
     "en": "Future orientation: college and career readiness (education continuity)",
     "mr": "भविष्याची दिशा"
    }
   },
   {
    "id": "parents-expectations",
    "title": {
     "en": "Parents’ expectations",
     "mr": "पालकांच्या अपेक्षा"
    }
   },
   {
    "id": "parent-role-construction-efficacy-capacity",
    "title": {
     "en": "Parent role construction, efficacy, capacity",
     "mr": "पालकांची भूमिका"
    }
   }
  ],
  "items": [
   {
    "id": "Q1",
    "no": "1",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What is your relationship to the child?",
     "mr": "पाल्याशी तुमचे नाते काय आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Mother",
      "mr": "आई"
     },
     {
      "v": "O2",
      "en": "Father",
      "mr": "वडील"
     },
     {
      "v": "O3",
      "en": "Grandparent",
      "mr": "आजी / आजोबा"
     },
     {
      "v": "O4",
      "en": "Other relative",
      "mr": "इतर नातेवाईक"
     },
     {
      "v": "O5",
      "en": "Other guardian",
      "mr": "इतर पालक / संरक्षक"
     }
    ],
    "required": true
   },
   {
    "id": "Q2",
    "no": "2",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Which school or college does your child study in?",
     "mr": "तुमचे मूल कोणत्या प्रकारच्या शाळा किंवा कॉलेजमध्ये शिकते?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Government",
      "mr": "सरकारी"
     },
     {
      "v": "O2",
      "en": "Government-aided",
      "mr": "शासकीय अनुदानित"
     },
     {
      "v": "O3",
      "en": "Private",
      "mr": "खाजगी"
     }
    ],
    "required": true
   },
   {
    "id": "Q3",
    "no": "3",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Which state does your child stay in?",
     "mr": "तुमचे मूल कोणत्या राज्यात राहते?"
    },
    "source": "state",
    "required": true
   },
   {
    "id": "Q4",
    "no": "4",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Which district does your child stay in?",
     "mr": "तुमचे मूल कोणत्या जिल्ह्यात राहते?"
    },
    "source": "district",
    "required": true
   },
   {
    "id": "Q5",
    "no": "5",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What is your child's gender?",
     "mr": "तुमच्या मुलाचे/मुलीचे लिंग काय आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Boy",
      "mr": "मुलगा"
     },
     {
      "v": "O2",
      "en": "Girl",
      "mr": "मुलगी"
     },
     {
      "v": "O3",
      "en": "Other",
      "mr": "इतर"
     },
     {
      "v": "O4",
      "en": "Prefer not to say",
      "mr": "सांगू इच्छित नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q6",
    "no": "6",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "In which class does your child study?",
     "mr": "तुमचे मूल कोणत्या वर्गात शिकते?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Primary (Classes 1-5)",
      "mr": "प्राथमिक (इयत्ता १ ली ते ५ वी)"
     },
     {
      "v": "O2",
      "en": "Middle (Classes 6-8)",
      "mr": "उच्च प्राथमिक (इयत्ता ६ वी ते ८ वी)"
     },
     {
      "v": "O3",
      "en": "Secondary (classes 9-10)",
      "mr": "माध्यमिक (इयत्ता ९ वी ते १० वी)"
     },
     {
      "v": "O4",
      "en": "Higher secondary (classes 11-12)",
      "mr": "उच्च माध्यमिक / ज्युनियर कॉलेज (इयत्ता ११ वी ते १२ वी)"
     },
     {
      "v": "O5",
      "en": "College or university",
      "mr": "कॉलेज किंवा विद्यापीठ"
     }
    ],
    "required": true
   },
   {
    "id": "Q7",
    "no": "7",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Does your child have any disability?  Knowing this will help us understand your experiences better.",
     "mr": "तुमच्या मुलाला काही दिव्यांगत्व (अपंगत्व) आहे का? हे जाणून घेतल्याने तुमचे अनुभव आम्हाला अधिक चांगल्या प्रकारे समजून घेण्यास मदत होईल."
    },
    "options": [
     {
      "v": "O1",
      "en": "Yes",
      "mr": "होय"
     },
     {
      "v": "O2",
      "en": "No",
      "mr": "नाही"
     },
     {
      "v": "O3",
      "en": "Prefer not to say",
      "mr": "सांगू इच्छित नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q8A",
    "no": "8A",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "Did you get an opportunity to go to school or college?",
     "mr": "तुम्हाला स्वतःला शाळा किंवा कॉलेजमध्ये जाण्याची संधी मिळाली होती का?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Yes",
      "mr": "होय"
     },
     {
      "v": "O2",
      "en": "No",
      "mr": "नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q8B",
    "no": "8B",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Till where did you study?",
     "mr": "तुमचे शिक्षण कुठपर्यंत झाले आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Primary (up to Class 5)",
      "mr": "प्राथमिक (इयत्ता ५ वी पर्यंत)"
     },
     {
      "v": "O2",
      "en": "Middle (Class 6 to 8)",
      "mr": "उच्च प्राथमिक (इयत्ता ६ वी ते ८ वी)"
     },
     {
      "v": "O3",
      "en": "Secondary (Class 9 to 10)",
      "mr": "माध्यमिक (इयत्ता ९ वी ते १० वी)"
     },
     {
      "v": "O4",
      "en": "Higher secondary (Class 11 to 12)",
      "mr": "उच्च माध्यमिक / ज्युनियर कॉलेज (इयत्ता ११ वी ते १२ वी)"
     },
     {
      "v": "O5",
      "en": "Diploma or ITI",
      "mr": "डिप्लोमा किंवा आयटीआय"
     },
     {
      "v": "O6",
      "en": "Undergraduate (Bachelor's degree)",
      "mr": "पदवी (Bachelor's degree)"
     },
     {
      "v": "O7",
      "en": "Postgraduate or higher",
      "mr": "पदव्युत्तर किंवा त्याहून अधिक"
     },
     {
      "v": "O8",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true,
    "showIf": {
     "q": "Q8A",
     "in": [
      "O1"
     ]
    }
   },
   {
    "id": "Q9A",
    "no": "9A",
    "section": "student-learning-outcomes-and-well-being-as-perceived-by-parents",
    "type": "choice",
    "label": {
     "en": "How satisfied are you with how your child is doing in studies?",
     "mr": "तुमचा मुलगा/मुलगी सध्या जसा अभ्यास करत आहे, त्याबद्दल तुम्ही किती समाधानी आहात?"
    },
    "lead": {
     "en": "Thank you for sharing these details about you and your child. Now, we'd love to hear your thoughts about your child's future.",
     "mr": "तुमच्याबद्दल आणि पाल्याबद्दल माहिती दिल्याबद्दल धन्यवाद. आता आम्हाला तुमच्या मुलाच्या भविष्याबद्दलचे तुमचे विचार जाणून घ्यायला आवडतील."
    },
    "options": [
     {
      "v": "O1",
      "en": "Very satisfied",
      "mr": "खूप समाधानी"
     },
     {
      "v": "O2",
      "en": "Somewhat Satisfied",
      "mr": "काही प्रमाणात समाधानी"
     },
     {
      "v": "O3",
      "en": "Somewhat unsatisfied",
      "mr": "काही प्रमाणात असमाधानी"
     },
     {
      "v": "O4",
      "en": "Unsatisfied",
      "mr": "असमाधानी"
     },
     {
      "v": "O5",
      "en": "Not sure",
      "mr": "खात्री नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q9B",
    "no": "9B",
    "section": "student-learning-outcomes-and-well-being-as-perceived-by-parents",
    "type": "short",
    "label": {
     "en": "Please share why you think so.",
     "mr": "तुम्हाला असे का वाटते ते कृपया सांगा."
    },
    "required": false,
    "probe": true,
    "showIf": {
     "q": "Q9A",
     "in": [
      "O1",
      "O2",
      "O3",
      "O4"
     ]
    }
   },
   {
    "id": "Q10",
    "no": "10",
    "section": "future-orientation-college-and-career-readiness-education-continuity",
    "type": "short",
    "label": {
     "en": "What do you wish for your child to do when they grow up?",
     "mr": "तुमच्या मुलाने मोठे झाल्यावर काय करावे अशी तुमची इच्छा आहे?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q11",
    "no": "11",
    "section": "parents-expectations",
    "type": "short",
    "label": {
     "en": "And towards that, what changes would you like to see in schools or colleges to better prepare children for their future?",
     "mr": "आणि त्यासाठी, मुलांना त्यांच्या भविष्यासाठी अधिक चांगल्या प्रकारे तयार करण्यासाठी शाळा किंवा कॉलेजमध्ये कोणते बदल व्हावेत असे तुम्हाला वाटते?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q12",
    "no": "12",
    "section": "parent-role-construction-efficacy-capacity",
    "type": "short",
    "label": {
     "en": "What all do you do to support your child's future?",
     "mr": "मुलाच्या भविष्यासाठी तुम्ही स्वतः काय काय करता?"
    },
    "required": false,
    "probe": true
   },
   {
    "id": "Q13",
    "no": "13",
    "section": "parents-expectations",
    "type": "short",
    "label": {
     "en": "As a final thought, what do you think would help your child most to have a successful future?",
     "mr": "शेवटचा विचार म्हणून - तुमच्या मुलाचे भविष्य यशस्वी होण्यासाठी कोणत्या गोष्टीची सर्वात जास्त मदत होईल असे तुम्हाला वाटते?"
    },
    "required": false,
    "probe": true
   }
  ]
 },
 "public": {
  "key": "public",
  "opening": {
   "en": "Young people are told every day that they are the future of the nation. But that future is shaped by all of us. Now it's your turn to share your view.\n\nWe want to understand what you think young people need to thrive in the years ahead. There are no right or wrong answers, and this survey is completely anonymous. We are listening. #TumBolo",
   "mr": "तरुणांना दररोज सांगितले जाते की ते देशाचे भविष्य आहेत. पण ते भविष्य आपण सर्वजण मिळून घडवतो. आता तुमचे मत मांडण्याची तुमची वेळ आली आहे.\n\nयेत्या काळात तरुणांची प्रगती होण्यासाठी त्यांना कशाची गरज आहे, याबद्दल तुमचे मत काय आहे हे आम्हाला जाणून घ्यायचे आहे. यात कोणतीही उत्तरे बरोबर किंवा चुकीची नाहीत आणि हे सर्वेक्षण पूर्णपणे निनावी आहे. आम्ही ऐकत आहोत. #TumBolo #तुम्हीसांगा"
  },
  "closing": {
   "en": "Thank you for taking the time to answer these questions. Log onto tumbolo.shikshagraha.org to see what other people like you think about the future of the youth.",
   "mr": "या प्रश्नांची उत्तरे देण्यासाठी वेळ दिल्याबद्दल धन्यवाद. देशातील इतर नागरिक आणि तरुण भविष्याबद्दल काय विचार करतात हे जाणून घेण्यासाठी https://tumbolo.shikshagraha.org/ ला भेट द्या."
  },
  "sections": [
   {
    "id": "demographic-details",
    "title": {
     "en": "Demographic Details",
     "mr": "वैयक्तिक माहिती"
    }
   },
   {
    "id": "future-aspirations",
    "title": {
     "en": "Future & Aspirations",
     "mr": "भविष्य आणि आकांक्षा"
    }
   },
   {
    "id": "readiness-and-skills",
    "title": {
     "en": "Readiness and Skills",
     "mr": "तयारी आणि कौशल्ये"
    }
   },
   {
    "id": "enabling-environment",
    "title": {
     "en": "Enabling Environment",
     "mr": "पोषक वातावरण"
    }
   }
  ],
  "items": [
   {
    "id": "Q0_1",
    "no": "0.1",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "How old are you?",
     "mr": "तुमचे वय किती आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "26-29",
      "mr": "२६-२९"
     },
     {
      "v": "O2",
      "en": "30-34",
      "mr": "३०-३४"
     },
     {
      "v": "O3",
      "en": "35-39",
      "mr": "३५-३९"
     },
     {
      "v": "O4",
      "en": "40-44",
      "mr": "४०-४४"
     },
     {
      "v": "O5",
      "en": "45-49",
      "mr": "४५-४९"
     },
     {
      "v": "O6",
      "en": "50-54",
      "mr": "५०-५४"
     },
     {
      "v": "O7",
      "en": "55-59",
      "mr": "५५-५९"
     },
     {
      "v": "O8",
      "en": "60 and above",
      "mr": "६० आणि त्याहून अधिक"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_2",
    "no": "0.2",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What is your gender?",
     "mr": "तुमचे लिंग काय आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Male",
      "mr": "पुरुष"
     },
     {
      "v": "O2",
      "en": "Female",
      "mr": "स्त्री"
     },
     {
      "v": "O3",
      "en": "Other",
      "mr": "इतर"
     },
     {
      "v": "O4",
      "en": "Prefer not to say",
      "mr": "सांगू इच्छित नाही"
     }
    ],
    "required": true
   },
   {
    "id": "Q0_3",
    "no": "0.3",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Which state do you stay in?",
     "mr": "तुम्ही कोणत्या राज्यात राहता?"
    },
    "source": "state",
    "required": true
   },
   {
    "id": "Q0_4",
    "no": "0.4",
    "section": "demographic-details",
    "type": "dropdown",
    "label": {
     "en": "Which district do you stay in?",
     "mr": "तुम्ही कोणत्या जिल्ह्यात राहता?"
    },
    "source": "district",
    "required": true
   },
   {
    "id": "Q0_5",
    "no": "0.5",
    "section": "demographic-details",
    "type": "choice",
    "label": {
     "en": "What do you currently do - your work or occupation?",
     "mr": "तुम्ही सध्या काय करता - तुमचे काम किंवा व्यवसाय काय आहे?"
    },
    "options": [
     {
      "v": "O1",
      "en": "Agriculture",
      "mr": "शेती / कृषी"
     },
     {
      "v": "O2",
      "en": "Banking & Financial services",
      "mr": "बँकिंग आणि वित्तीय सेवा"
     },
     {
      "v": "O3",
      "en": "IT",
      "mr": "माहिती तंत्रज्ञान (IT)"
     },
     {
      "v": "O4",
      "en": "Entrepreneur / Business",
      "mr": "व्यवसाय / उद्योग"
     },
     {
      "v": "O5",
      "en": "Social Sector",
      "mr": "सामाजिक क्षेत्र (Social Sector / NGO)"
     },
     {
      "v": "O6",
      "en": "Other",
      "mr": "इतर"
     }
    ],
    "required": true
   },
   {
    "id": "Q1",
    "no": "1",
    "section": "future-aspirations",
    "type": "short",
    "label": {
     "en": "I'd like to hear what you think. How is life different for young people today compared to when you were younger?",
     "mr": "आम्हाला तुमचे विचार जाणून घ्यायला आवडतील. तुम्ही तरुण असतानाचे आयुष्य आणि आजच्या तरुणांचे आयुष्य यात काय फरक आहे असे तुम्हाला वाटते?"
    },
    "required": true,
    "probe": true
   },
   {
    "id": "Q2",
    "no": "2",
    "section": "readiness-and-skills",
    "type": "short",
    "label": {
     "en": "Which are the top 3 skills you think young people need to learn to thrive in the future?",
     "mr": "भविष्यात यशस्वी होण्यासाठी तरुणांनी कोणती ३ महत्त्वाची कौशल्ये शिकणे आवश्यक आहे असे तुम्हाला वाटते?"
    },
    "required": true,
    "probe": true
   },
   {
    "id": "Q3",
    "no": "3",
    "section": "future-aspirations",
    "type": "short",
    "label": {
     "en": "What is your one biggest hope for young people around you?",
     "mr": "तुमच्या आजूबाजूच्या तरुणांकडून तुमची सर्वात मोठी आशा काय आहे?"
    },
    "lead": {
     "en": "Thank you for sharing your thoughts!",
     "mr": "तुमचे विचार मांडल्याबद्दल धन्यवाद!"
    },
    "required": true,
    "probe": true
   },
   {
    "id": "Q4",
    "no": "4",
    "section": "future-aspirations",
    "type": "short",
    "label": {
     "en": "What is your one biggest worry for young people around you?",
     "mr": "तुमच्या आजूबाजूच्या तरुणांबद्दल तुमची सर्वात मोठी काळजी किंवा चिंता काय आहे?"
    },
    "required": true,
    "probe": true
   },
   {
    "id": "Q5",
    "no": "5",
    "section": "enabling-environment",
    "type": "short",
    "label": {
     "en": "What do you think you can do to help young people have a successful future?",
     "mr": "तरुणांचे भविष्य यशस्वी करण्यासाठी तुम्ही काय करू शकता असे तुम्हाला वाटते?"
    },
    "lead": {
     "en": "Thanks for sharing this!",
     "mr": "माहिती दिल्याबद्दल धन्यवाद!"
    },
    "required": false,
    "probe": true
   }
  ]
 }
};
