const insertSentences = async () => {
  console.log("insert");

  const sentences2 = [
    {
      nyanja: "Muli bwanji masiku ano?",
      english: "How are you these days?",
    },
    {
      nyanja: "Ndili bwino kwambiri, zikomo kwambili.",
      english: "I am very fine, thank you very much.",
    },
    {
      nyanja: "Dzina lanu ndindani ndipo mumachokera kuti?",
      english: "What is your name and where are you from?",
    },
    {
      nyanja: "Dzina langa ndi John, ndipo ndimachokera ku Lusaka.",
      english: "My name is John, and I am from Lusaka.",
    },
    {
      nyanja: "Mumagwira ntchito yanji ndipo mumakonda kuchita chiyani?",
      english: "What job do you do and what do you like to do?",
    },
    {
      nyanja: "Ndine mphunzitsi ndipo ndimakonda kuphunzira zatsopano.",
      english: "I am a teacher and I like to learn new things.",
    },
    {
      nyanja: "Mumasangalala kwambiri ndi ntchito yanu?",
      english: "Do you enjoy your job very much?",
    },
    {
      nyanja: "Inde, ndimakonda kwambiri ntchito yanga chifukwa imandipatsa chimwemwe.",
      english: "Yes, I enjoy my job very much because it gives me joy.",
    },
    {
      nyanja: "Kodi muli ndi banja kapena muli okha?",
      english: "Do you have a family or are you alone?",
    },
    {
      nyanja: "Ndili ndi banja langa lomwe limakhala ndi mkazi wanga ndi ana awiri.",
      english: "I have a family which includes my wife and two children.",
    },
    {
      nyanja: "Ana anu ndi okalamba bwanji ndipo akuphunzira kuti?",
      english: "How old are your children and where do they study?",
    },
    {
      nyanja: "Mwana wanga wamkazi ali ndi zaka zisanu ndipo mwana wamwamuna ali ndi zaka zitatu.",
      english: "My daughter is five years old and my son is three years old.",
    },
    {
      nyanja: "Kodi mumakonda kuchita chiyani nthawi yopuma?",
      english: "What do you like to do during your free time?",
    },
    {
      nyanja: "Ndimakonda kuwerenga mabuku komanso kusewera masewera a mpira.",
      english: "I like to read books and play football.",
    },
    {
      nyanja: "Kodi mumapita ku church nthawi zonse?",
      english: "Do you go to church regularly?",
    },
    {
      nyanja: "Inde, ndimakonda kupita ku church lero lililonse la sabata.",
      english: "Yes, I like to go to church every Sunday.",
    },
    {
      nyanja: "Kodi mumakonda kuphika kapena mumakonda kudya zakudya zamakono?",
      english: "Do you like to cook or do you prefer eating modern foods?",
    },
    {
      nyanja: "Ndimakonda kuphika chakudya chamakolo komanso zakudya zamakono.",
      english: "I like to cook traditional food as well as modern foods.",
    },
    {
      nyanja: "Mumaphika chakudya chamtundu wanji kwambiri panyumba panu?",
      english: "What type of food do you cook most often at home?",
    },
    {
      nyanja: "Ndimaphika nsima ndi ndiwo zambiri monga chambo ndi nkhuku.",
      english: "I cook nshima with various relishes like fish and chicken.",
    },
    {
      nyanja: "Kodi mumakhala kuti ndipo nyumba yanu ndi yayikulu bwanji?",
      english: "Where do you live and how big is your house?",
    },
    {
      nyanja: "Ndakhala ku Lilongwe ndipo nyumba yanga ndi yayikulu yokwanira banja langa.",
      english: "I live in Lilongwe and my house is big enough for my family.",
    },
    {
      nyanja: "Kodi mumakhala ndi ana angati panyumba panu nthawi zonse?",
      english: "How many children are usually at your home?",
    },
    {
      nyanja: "Panyumba panga pali ana awiri komanso mphunzitsi amene akuwaphunzitsa.",
      english: "There are two children and a teacher who teaches them at home.",
    },
    {
      nyanja: "Mukakhala pa tchuthi, mumakonda kupita kuti?",
      english: "When you are on holiday, where do you like to go?",
    },
    {
      nyanja: "Ndimakonda kupita ku Lake Malawi kuti ndikapumule.",
      english: "I like to go to Lake Malawi to relax.",
    },
    {
      nyanja: "Kodi mukufuna kuchita chiyani m'mawa lino?",
      english: "What do you want to do this morning?",
    },
    {
      nyanja: "Ndikufuna kukacheza ndi abwenzi anga komanso kupita ku munda.",
      english: "I want to visit my friends and also go to the garden.",
    },
    {
      nyanja: "Kodi muli ndi ziweto zilizonse kunyumba kwanu?",
      english: "Do you have any pets at your home?",
    },
    {
      nyanja: "Inde, ndili ndi galu ndi nkhumba zomwe zimandisangalatsa kwambiri.",
      english: "Yes, I have a dog and a pig which bring me a lot of joy.",
    },
    {
      nyanja: "Mumadya chakudya cham'mawa ndi chiyani tsiku lililonse?",
      english: "What do you eat for breakfast every day?",
    },
    {
      nyanja: "Ndimadya nsima ya m'mawa yokhala ndi mkaka komanso ma toast.",
      english: "I eat morning porridge with milk and toast.",
    },
    {
      nyanja: "Kodi mukumverera bwanji lero, muli osangalala kapena ayi?",
      english: "How are you feeling today, are you happy or not?",
    },
    {
      nyanja: "Ndikumverera bwino kwambiri chifukwa choti lero ndi tsiku labwino.",
      english: "I am feeling very good because today is a beautiful day.",
    },
    {
      nyanja: "Kodi mukudziwa bwino bwanji za mbiri ya dziko lathu?",
      english: "How well do you know about our country's history?",
    },
    {
      nyanja: "Ndikudziwa zambiri zokhudza mbiri ya dziko lathu chifukwa ndinapunzira ku sukulu.",
      english: "I know a lot about our country's history because I studied it in school.",
    },
    {
      nyanja: "Mukachoka kuntchito, mumakonda kuchita chiyani?",
      english: "When you come back from work, what do you like to do?",
    },
    {
      nyanja: "Ndimakonda kumvera nyimbo komanso kuonera TV ndi banja langa.",
      english: "I like to listen to music and watch TV with my family.",
    },
    {
      nyanja: "Mukakhala ndi nkhawa, mumatani kuti mumverere bwino?",
      english: "When you are worried, what do you do to feel better?",
    },
    {
      nyanja: "Ndimapemphera komanso kumacheza ndi abwenzi kuti ndimve bwino.",
      english: "I pray and talk to friends to feel better.",
    },
    {
      nyanja: "Mukafuna kumva bwino, mumamvetsa chiyani?",
      english: "When you want to feel good, what do you listen to?",
    },
    {
      nyanja: "Ndimamvetsa nyimbo za m'dera lathu ndi nyimbo za m'mabwalo apadziko lonse.",
      english: "I listen to local songs and international music.",
    },
  ];
  const sentences = [
    {
      nyanja: "Muli bwanji?",
      english: "How are you?",
    },
    {
      nyanja: "Ndili bwino, zikomo.",
      english: "I am fine, thank you.",
    },
    {
      nyanja: "Dzina lanu ndani?",
      english: "What is your name?",
    },
    {
      nyanja: "Dzina langa ndi...",
      english: "My name is...",
    },
    {
      nyanja: "Mukuchita chiyani?",
      english: "What are you doing?",
    },
    {
      nyanja: "Ndikuphika chakudya.",
      english: "I am cooking food.",
    },
    {
      nyanja: "Mukupita kuti?",
      english: "Where are you going?",
    },
    {
      nyanja: "Ndikupita kusukulu.",
      english: "I am going to school.",
    },
    {
      nyanja: "Chakudya chabwino!",
      english: "Good food!",
    },
    {
      nyanja: "Muli ndi ana angati?",
      english: "How many children do you have?",
    },
    {
      nyanja: "Ndili ndi ana awiri.",
      english: "I have two children.",
    },
    {
      nyanja: "Mukufuna chiyani?",
      english: "What do you want?",
    },
    {
      nyanja: "Ndikufuna madzi.",
      english: "I want water.",
    },
    {
      nyanja: "Chimbudzi chili kuti?",
      english: "Where is the bathroom?",
    },
    {
      nyanja: "Pitani kumanzere.",
      english: "Go to the left.",
    },
    {
      nyanja: "Ndi nthawi yanji?",
      english: "What time is it?",
    },
    {
      nyanja: "Ndi nthawi ya chakudya.",
      english: "It's mealtime.",
    },
    {
      nyanja: "Mwasangalala lero?",
      english: "Did you have fun today?",
    },
    {
      nyanja: "Inde, ndasangalala.",
      english: "Yes, I had fun.",
    },
    {
      nyanja: "Tiwonana mawa.",
      english: "See you tomorrow.",
    },
  ];

  sentences.forEach(async (sentence, index) => {
    const docId = (index + 1).toString();
    const sentenceRef = doc(collection(db, "Level1"), docId);
    await setDoc(sentenceRef, sentence);
  });
};

const subscribeToMessages = (userId, setMessages, level) => {
  const messagesCollection = collection(db, "messages");
  const q = query(
    messagesCollection,
    where("userId", "==", userId),
    where("level", "==", level)
  );

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const messagesList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(messagesList);
      setIsStart(messagesList.length === 0);
    },
    handleSnapshotError
  );

  return unsubscribe;
};
