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

  const sentencesLevel3 = [
    {
      nyanja: "Mumakumbukira mwambo wachikumbutso chaka chatha?",
      english: "Do you remember the memorial ceremony last year?",
    },
    {
      nyanja: "Ndimakonda kumva mbiri yaku Africa yakale.",
      english: "I love learning about ancient African history.",
    },
    {
      nyanja: "Pambuyo pa ntchito, ndimakonda kuyenda pansi.",
      english: "After work, I enjoy taking a walk.",
    },
    {
      nyanja: "Mumamva bwanji mukawona mafilimu ankhondo?",
      english: "How do you feel when you watch war movies?",
    },
    {
      nyanja: "Tikupita ku msonkhano wopanga chisankho lero.",
      english: "We are attending a decision-making conference today.",
    },
    {
      nyanja: "Kodi mumakonda kupanga zokongoletsa kunyumba kwanu?",
      english: "Do you enjoy making decorations for your home?",
    },
    {
      nyanja: "Anthu ambiri amayendera kupezeka kwatsopano kumeneko.",
      english: "Many people visit for the new attraction there.",
    },
    {
      nyanja: "Mukufuna kupeza chidziwitso chokhudza malo otchuka?",
      english: "Do you want to learn about famous landmarks?",
    },
    {
      nyanja: "Kuphunzira zilankhulo zambiri kumatsegula mwayi watsopano.",
      english: "Learning multiple languages opens up new opportunities.",
    },
    {
      nyanja: "Mukufuna kugula lamba wachikopa kapena wa nsalu?",
      english: "Do you want to buy a leather or fabric belt?",
    },
    {
      nyanja: "Ndikufuna kutenga phunziro la kuluka lija.",
      english: "I want to take that weaving class.",
    },
    {
      nyanja: "Kodi mwakumanapo ndi zovuta zophunzira zauzimu?",
      english: "Have you ever encountered spiritual learning challenges?",
    },
    {
      nyanja: "Mumakonda kuwerenga mabuku a zachipembedzo kapena azachuma?",
      english: "Do you prefer reading religious or economic books?",
    },
    {
      nyanja: "Ndimafuna kudziwa mmene mumakhalira m’misonkhano yaikulu.",
      english: "I am curious about how you handle large gatherings.",
    },
    {
      nyanja: "Mukufuna kuyenda pamsewu watsopano umene wamangidwa?",
      english: "Do you want to walk on the newly constructed road?",
    },
    {
      nyanja: "Kugwira ntchito ku nkhokweyo kuli ndi phindu lalikulu.",
      english: "Working at the warehouse has great benefits.",
    },
    {
      nyanja: "Kodi mwawonerapo zisudzo zopeka zakuthambo?",
      english: "Have you ever watched fictional space dramas?",
    },
    {
      nyanja: "Mumakonda kumvetsera nyimbo za fado kuchokera ku Portugal?",
      english: "Do you enjoy listening to fado music from Portugal?",
    },
    {
      nyanja: "Tikukonzekera ulendo wopita ku msika wapadziko lonse.",
      english: "We are planning a trip to the international market.",
    },
    {
      nyanja: "Kodi mukukumbukira tsiku limene mudagula chovala chanu choyamba?",
      english: "Do you remember the day you bought your first garment?",
    },
    {
      nyanja: "Kusunga ndalama kumathandiza kwambiri kuti mukhale otetezeka.",
      english: "Saving money significantly helps in securing your future.",
    },
    {
      nyanja: "Mukufuna kukumana ndi oyimira bungwe la dziko?",
      english: "Do you want to meet representatives from the national agency?",
    },
    {
      nyanja: "Kodi mumakonda kupeza zowonjezera zabwino pa chakudya chanu?",
      english: "Do you like finding good supplements for your diet?",
    },
    {
      nyanja: "Ndimakonda kuonera masewera olimbitsa thupi komanso masewera amphamvu.",
      english: "I enjoy watching gymnastics and powerlifting competitions.",
    },
    {
      nyanja: "Kodi mwasankha ndiye ya nsomba kapena nyama?",
      english: "Have you chosen the fish or meat dish?",
    },
    {
      nyanja: "Kusunga zikalata zofunika kumateteza tsogolo lanu.",
      english: "Preserving important documents secures your future.",
    },
    {
      nyanja: "Mukufuna kukonzekera maphunziro a kulingalira mozama?",
      english: "Do you want to prepare for critical thinking workshops?",
    },
    {
      nyanja: "Kodi mumakonda kukonza zovala zanu nokha?",
      english: "Do you enjoy tailoring your own clothes?",
    },
    {
      nyanja: "Ndimakonda kuphunzira za mitundu yambiri ya nyama za m’nyanja.",
      english: "I love learning about various marine animals.",
    },
    {
      nyanja: "Mukufuna kuyenda pamalo otchuka a m'mbiri yakale?",
      english: "Do you want to visit famous historical sites?",
    },
    {
      nyanja: "Kusamalira munda wanu kumabweretsa chisangalalo chambiri.",
      english: "Taking care of your garden brings a lot of joy.",
    },
    {
      nyanja: "Kodi mwapezapo mwayi wokambirana ndi akatswiri a sayansi?",
      english: "Have you ever had the chance to talk with science experts?",
    },
    {
      nyanja: "Mukufuna kukonza nyumba yanu mwadongosolo?",
      english: "Do you want to organize your house methodically?",
    },
    {
      nyanja: "Kuthandiza anthu osauka kumapereka chisangalalo chenicheni.",
      english: "Helping the poor gives true joy.",
    },
    {
      nyanja: "Kodi mumakonda kucheza ndi banja lanu pa nthawi yopuma?",
      english: "Do you enjoy spending leisure time with your family?",
    },
    {
      nyanja: "Ndimakonda kukonza phwando laling'ono la usiku.",
      english: "I enjoy organizing a small evening party.",
    },
    {
      nyanja: "Mukufuna kugula zodzikongoletsera zapamwamba?",
      english: "Do you want to buy luxurious accessories?",
    },
    {
      nyanja: "Kodi mwagula kale matikiti a chionetsero chotsatira?",
      english: "Have you already bought tickets for the next show?",
    },
    {
      nyanja: "Kuphunzira zinthu zatsopano kumapangitsa maganizo kukhala athanzi.",
      english: "Learning new things keeps the mind healthy.",
    },
    {
      nyanja: "Mukufuna kukhala ndi maphunziro apamwamba ku yunivesite?",
      english: "Do you want to pursue higher education at a university?",
    },
    {
      nyanja: "Kodi mwagula zinthu zanu zonse zokonzekera tchuthi?",
      english: "Have you bought all your items for the holiday preparation?",
    },
    {
      nyanja: "Ndimakonda kuwerenga mabuku amadzulo ndi nyali yofewa.",
      english: "I like reading books in the evening with a soft light.",
    },
    {
      nyanja: "Mukufuna kuyesa kukonzekera maphunziro azachuma?",
      english: "Do you want to try planning a financial course?",
    },
    {
      nyanja: "Kodi mumakonda kumwa tiyi kapena khofi m'mawa?",
      english: "Do you prefer drinking tea or coffee in the morning?",
    },
    {
      nyanja: "Kusunga mbiri ya banja lanu kumakupatsani kulingalira bwino.",
      english: "Keeping your family's history gives you better perspective.",
    },
    {
      nyanja: "Mukufuna kukhala ndi moyo wathanzi komanso wosangalala?",
      english: "Do you want to live a healthy and happy life?",
    },
    {
      nyanja: "Kodi mumakonda kukumana ndi anzanu pa malo odyera?",
      english: "Do you enjoy meeting your friends at restaurants?",
    },
    {
      nyanja: "Ndimakonda kumvetsera ma podcast amadzulo kwambiri.",
      english: "I love listening to podcasts late at night.",
    },
    {
      nyanja: "Mukufuna kupita ku chionetsero cha mafilimu achikondi?",
      english: "Do you want to attend a romantic film screening?",
    },
    {
      nyanja: "Kodi mukufuna kuphunzira kusoka ndi makina kapena pamanja?",
      english: "Do you want to learn sewing by machine or by hand?",
    },
    {
      nyanja: "Kuthandiza anthu ena kumabweretsa chikhutiro chamkati.",
      english: "Helping others brings inner satisfaction.",
    },
    {
      nyanja: "Mukufuna kuphunzira za zachilengedwe ndi kulima?",
      english: "Do you want to learn about nature and farming?",
    },  {
      nyanja: "Kodi mumakonda kugwira ntchito m'madambo kapena m'mapiri?",
      english: "Do you enjoy working in wetlands or mountains?",
    },
    {
      nyanja: "Ndimakonda kuonera mafilimu a zongopeka za sayansi ndi zamatsenga.",
      english: "I enjoy watching science fiction and fantasy movies.",
    },
    {
      nyanja: "Mukufuna kuphunzira za mbiri ya mafumu akale?",
      english: "Do you want to learn about the history of ancient kings?",
    },
    {
      nyanja: "Kodi mwakonza kale maphunziro anu a chilimwe?",
      english: "Have you already planned your summer studies?",
    },
    {
      nyanja: "Kuthamanga m'mawa kumapangitsa kuti ndiyambe tsiku langa bwino.",
      english: "Running in the morning helps me start my day well.",
    },
    {
      nyanja: "Mukufuna kuyesa chakudya chatsopano chomwe chikupezeka mu tawuni?",
      english: "Do you want to try the new food available in town?",
    },
    {
      nyanja: "Ndimakonda kucheza ndi anzanga m'mapaki komanso m'mabwalo osewera.",
      english: "I love hanging out with my friends in parks and playgrounds.",
    },
    {
      nyanja: "Kodi mumakonda kuchita masewera a mpira kapena a tennis?",
      english: "Do you prefer playing football or tennis?",
    },
    {
      nyanja: "Kuphunzira zaluso ndi zaluso kumakupangitsani kukhala wanzeru.",
      english: "Learning arts and crafts makes you creative.",
    },
    {
      nyanja: "Mukufuna kuchezera malo ochititsa chidwi komanso osiyanasiyana?",
      english: "Do you want to visit interesting and diverse places?",
    },
    {
      nyanja: "Kodi mwakonza kale zikwama zanu zapaulendo wanu wotsatira?",
      english: "Have you packed your bags for your next trip?",
    },
    {
      nyanja: "Ndimakonda kuonera mafilimu a zopambana m'mabungwe apamwamba.",
      english: "I enjoy watching award-winning films at prestigious festivals.",
    },
    {
      nyanja: "Mukufuna kutenga nawo gawo pamwambo wachikhalidwe chathu?",
      english: "Do you want to participate in our cultural festival?",
    },
    {
      nyanja: "Kodi mumakonda kutchera mbewu zosiyanasiyana m'munda wanu?",
      english: "Do you enjoy planting various crops in your garden?",
    },
    {
      nyanja: "Kuphunzira za mbiri yakale kumakupangitsani kumvetsetsa bwino lero.",
      english: "Learning about history helps you understand the present better.",
    },
    {
      nyanja: "Mukufuna kugwira ntchito monga wophunzitsa pa intaneti?",
      english: "Do you want to work as an online tutor?",
    },
    {
      nyanja: "Kodi mwakumanapo ndi zochitika zapadera zachilengedwe?",
      english: "Have you ever experienced special natural events?",
    },
    {
      nyanja: "Ndimakonda kuphika ndi kuphika zakudya zosiyanasiyana padziko lonse.",
      english: "I enjoy cooking and baking different international cuisines.",
    },
    {
      nyanja: "Mukufuna kukhala ndi maphunziro a sayansi za chilengedwe?",
      english: "Do you want to take environmental science courses?",
    },
    {
      nyanja: "Kodi mumakonda kumvetsera nyimbo zamalonda kapena zamakolo?",
      english: "Do you prefer listening to commercial or traditional music?",
    },
    {
      nyanja: "Kuphunzira zaluso zatsopano kumakulitsa luso lanu lanzeru.",
      english: "Learning new skills enhances your intellectual abilities.",
    },
    {
      nyanja: "Mukufuna kucheza ndi anzanu m'mapaki akulu ndi osangalatsa?",
      english: "Do you want to hang out with your friends in large, fun parks?",
    },
    {
      nyanja: "Kodi mwakonza kale zovala zanu za chikondwerero cha sabata?",
      english: "Have you prepared your outfits for the week's celebration?",
    },
    {
      nyanja: "Ndimakonda kuonera masewera a olimbitsa thupi pa TV.",
      english: "I enjoy watching gymnastics on TV.",
    },
    {
      nyanja: "Mukufuna kuphunzira momwe mungapangire zinthu zokongoletsa?",
      english: "Do you want to learn how to make decorative items?",
    },
    {
      nyanja: "Kodi mumakonda kuwerenga mabuku a nthano kapena zoona?",
      english: "Do you prefer reading fiction or non-fiction books?",
    },
    {
      nyanja: "Kuphunzira zakudya zathanzi kumathandiza kuti mukhale ndi thanzi labwino.",
      english: "Learning about healthy foods helps you maintain good health.",
    },
    {
      nyanja: "Mukufuna kugula zipangizo zatsopano zapakhomo?",
      english: "Do you want to buy new household appliances?",
    },
    {
      nyanja: "Kodi mwakhalapo m'gulu la anthu odziwa kupanga zinthu zanzeru?",
      english: "Have you ever been part of a creative community?",
    },
    {
      nyanja: "Ndimakonda kuphunzira za mbiri yakale yamakampani a mafakitale.",
      english: "I enjoy learning about the history of industrial companies.",
    },
    {
      nyanja: "Mukufuna kuyesa kusoka zovala zanu nokha?",
      english: "Do you want to try sewing your own clothes?",
    },
    {
      nyanja: "Kodi mumakonda kuonera masewera amphamvu kapena apamwamba?",
      english: "Do you prefer watching power sports or elite sports?",
    },
    {
      nyanja: "Kuphunzira za ntchito zamakono kumakulitsa luso lanu lothandiza.",
      english: "Learning about modern jobs enhances your practical skills.",
    },
    {
      nyanja: "Mukufuna kukhala ndi maphunziro owonjezera azachuma?",
      english: "Do you want to take additional financial courses?",
    },
    {
      nyanja: "Kodi mwakumanapo ndi mavuto ochita zinthu mwanzeru?",
      english: "Have you ever faced challenges in doing things wisely?",
    },
    {
      nyanja: "Ndimakonda kumvetsera ma podcast okhudza sayansi ndi zamatsenga.",
      english: "I enjoy listening to science and magic podcasts.",
    },
    {
      nyanja: "Mukufuna kuphunzira za mbiri yakale yadziko lanu?",
      english: "Do you want to learn about your country's history?",
    },
    {
      nyanja: "Kodi mumakonda kuyenda m'mapaki ndi kumva chilengedwe?",
      english: "Do you enjoy walking in parks and feeling nature?",
    },
    {
      nyanja: "Kuphunzira zaluso kumakupangitsani kukhala wanzeru kwambiri.",
      english: "Learning arts makes you very creative.",
    },
  ]
  sentencesLevel3.forEach(async (sentence, index) => {
    const docId = (index + 1).toString();
    const sentenceRef = doc(collection(db, "Level3"), docId);
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






// import levenshtein from 'fast-levenshtein';
// import { PorterStemmer } from 'natural';
import synonyms from './synonims';
const removePunctuation = (text) => {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
};

const tokenize = (text) => {
  return removePunctuation(text)
    .toLowerCase()
    .trim()
    .split(/\s+/);
};


const stem = (word) => {
  return PorterStemmer.stem(word);
};

const gradeResponse = (correctAnswer, userResponse) => {
  if (correctAnswer == null || userResponse == null) {
    console.log("fluke", correctAnswer, userResponse);
    return 55;
  }

  const correctTokens = tokenize(correctAnswer).map(stem);
  const userTokens = tokenize(userResponse).map(stem);

  // Exact match scenario
  if (correctTokens.join(" ") === userTokens.join(" ")) {
    return 100;
  }

  // Calculate partial match score
  let matchCount = 0;
  userTokens.forEach((token) => {
    if (correctTokens.includes(token)) {
      matchCount++;
    } else {
      // Check for synonyms
      for (let [key, value] of Object.entries(synonyms)) {
        if (value.includes(token) && correctTokens.includes(key)) {
          matchCount++;
          break;
        }
      }
    }
  });

  // Calculate Levenshtein distance for partial matches
  let levenshteinSum = 0;
  userTokens.forEach((token) => {
    let minDistance = Infinity;
    correctTokens.forEach((correctToken) => {
      const distance = levenshtein.get(token, correctToken);
      if (distance < minDistance) {
        minDistance = distance;
      }
    });
    levenshteinSum += minDistance;
  });

  const maxPossibleScore = correctTokens.length * 100;
  const levenshteinScore = Math.max(0, maxPossibleScore - levenshteinSum);

  // Combine partial match and Levenshtein scores
  const partialMatchScore = (matchCount / correctTokens.length) * 100;
  const combinedScore = (partialMatchScore + levenshteinScore) / 2;

  return combinedScore;
};

export default gradeResponse;
