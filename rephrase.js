// Follow-up for short answers: when a text answer is empty or only 4 words or fewer, the question is asked again in
// other words (same meaning, inviting a longer answer). Keyed by form and Q number from the Excel.
// English and Marathi (drafts for review); other languages show English until added here.
// Questions not listed (the "3 skills" questions) accept short answers: a follow-up only if empty or "ok", "don't know".
export const REPHRASE = {
  youth: {
    "1A": { en: "Could you describe what you would like to become, and what kind of work you see yourself doing?",
            mr: "तुम्हाला मोठेपणी काय बनायला आवडेल आणि कोणत्या प्रकारचे काम करताना तुम्ही स्वतःला पाहता, ते थोडे सविस्तर सांगाल का?" },
    "1B": { en: "Could you describe the kind of life you would like to live? For example, where you would live, who with, and how you would spend your days.",
            mr: "तुम्हाला कसे आयुष्य जगायला आवडेल, ते थोडे सविस्तर सांगाल का? उदा. कुठे राहायला, कोणासोबत आणि दिवस कसा घालवायला आवडेल." },
    "5":  { en: "Where, or from whom, are you learning these skills? Please give one or two examples.",
            mr: "ही कौशल्ये तुम्ही कुठे किंवा कोणाकडून शिकत आहात? कृपया एक-दोन उदाहरणे सांगा." },
    "6":  { en: "What difficulties do you think could come in the way of reaching that future? Please explain a little.",
            mr: "ते भविष्य गाठताना तुमच्या वाटेत कोणत्या अडचणी येऊ शकतात असे तुम्हाला वाटते? थोडे सविस्तर सांगा." },
    "7":  { en: "What is one thing about your school experience that you would change, and why?",
            mr: "तुमच्या शाळेच्या अनुभवातील कोणती एक गोष्ट तुम्ही बदलाल, आणि का?" },
    "8":  { en: "What is one thing you yourself would like to do to make education better for young people like you? Please describe it a little.",
            mr: "तुमच्यासारख्या तरुणांसाठी शिक्षण अधिक चांगले करण्यासाठी तुम्ही स्वतः कोणती एक गोष्ट करू इच्छिता? थोडे सविस्तर सांगा." },
  },
  parent: {
    "9B": { en: "What makes you feel this way about how your child is doing in studies? Please share a little more.",
            mr: "तुमचे मूल अभ्यासात जसे करत आहे, त्याबद्दल तुम्हाला असे का वाटते? थोडे अधिक सांगा." },
    "10": { en: "What would you like your child to become or do in the future? Please describe a little.",
            mr: "तुमच्या मुलाने भविष्यात काय बनावे किंवा काय करावे असे तुम्हाला वाटते? थोडे सविस्तर सांगा." },
    "11": { en: "What changes in schools or colleges would help children get ready for their future? Please give an example.",
            mr: "मुलांना भविष्यासाठी तयार करण्यासाठी शाळा किंवा कॉलेजमध्ये कोणते बदल उपयोगी ठरतील? कृपया एखादे उदाहरण द्या." },
    "12": { en: "What are the things you do, at home or outside, to support your child's future? Please share some examples.",
            mr: "तुमच्या मुलाच्या भविष्यासाठी तुम्ही घरी किंवा बाहेर कोणत्या गोष्टी करता? कृपया काही उदाहरणे सांगा." },
    "13": { en: "In your view, what would help your child the most to have a successful future, and why?",
            mr: "तुमच्या मते, तुमच्या मुलाचे भविष्य यशस्वी होण्यासाठी सर्वात जास्त कशाची मदत होईल, आणि का?" },
  },
  public: {
    "1":  { en: "In what ways is life for young people today different from when you were young? Please share an example.",
            mr: "तुम्ही तरुण असताना आणि आजच्या तरुणांच्या आयुष्यात कोणत्या बाबतीत फरक आहे? कृपया एखादे उदाहरण द्या." },
    "3":  { en: "What is the one thing you hope for most for the young people around you? Please tell us a little more.",
            mr: "तुमच्या आजूबाजूच्या तरुणांबद्दल तुमची सर्वात मोठी आशा कोणती? थोडे अधिक सांगा." },
    "4":  { en: "What worries you the most about the young people around you, and why?",
            mr: "तुमच्या आजूबाजूच्या तरुणांबद्दल तुम्हाला सर्वात जास्त कशाची काळजी वाटते, आणि का?" },
    "5":  { en: "What is one thing you could do to help young people have a successful future? Please describe it a little.",
            mr: "तरुणांचे भविष्य यशस्वी व्हावे यासाठी तुम्ही कोणती एक गोष्ट करू शकता? थोडे सविस्तर सांगा." },
  },
};
