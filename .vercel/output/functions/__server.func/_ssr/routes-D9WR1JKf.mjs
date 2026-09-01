import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as Maximize, d as ChevronLeft, i as Plus, l as Heart, n as Volume2, o as Pause, s as Minimize, t as VolumeX, u as Clock3 } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9WR1JKf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Nightly unlock treasury — ten passages at midnight. */
var CATALOG_VERSES = [
	{
		id: "matthew-1-23-1000",
		t: "The virgin will conceive and give birth to a son, and they will call him Immanuel — which means God with us.",
		r: "Matthew 1:23",
		audio: "/audio/sweet/matthew-1-23.mp3"
	},
	{
		id: "matthew-1-21-1001",
		t: "She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins.",
		r: "Matthew 1:21",
		audio: "/audio/sweet/matthew-1-21.mp3"
	},
	{
		id: "isaiah-9-6-1002",
		t: "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
		r: "Isaiah 9:6",
		audio: "/audio/sweet/isaiah-9-6.mp3"
	},
	{
		id: "micah-5-2-1003",
		t: "But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times.",
		r: "Micah 5:2",
		audio: "/audio/sweet/micah-5-2.mp3"
	},
	{
		id: "luke-2-8-9-1004",
		t: "And there were shepherds living out in the fields nearby, keeping watch over their flocks at night. An angel of the Lord appeared to them, and the glory of the Lord shone around them.",
		r: "Luke 2:8–9",
		audio: "/audio/sweet/luke-2-8-9.mp3"
	},
	{
		id: "luke-2-14-1005",
		t: "Glory to God in the highest heaven, and on earth peace to those on whom his favor rests.",
		r: "Luke 2:14",
		audio: "/audio/sweet/luke-2-14.mp3"
	},
	{
		id: "luke-2-19-1006",
		t: "Mary treasured up all these things and pondered them in her heart.",
		r: "Luke 2:19",
		audio: "/audio/sweet/luke-2-19.mp3"
	},
	{
		id: "john-1-14a-1007",
		t: "The Word became flesh and made his dwelling among us.",
		r: "John 1:14a",
		audio: "/audio/sweet/john-1-14a.mp3"
	},
	{
		id: "john-1-11-12-1008",
		t: "He came to that which was his own, but his own did not receive him. Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.",
		r: "John 1:11–12",
		audio: "/audio/sweet/john-1-11-12.mp3"
	},
	{
		id: "john-1-5-1009",
		t: "The light shines in the darkness, and the darkness has not overcome it.",
		r: "John 1:5",
		audio: "/audio/sweet/john-1-5.mp3"
	},
	{
		id: "matthew-3-17-1010",
		t: "This is my Son, whom I love; with him I am well pleased.",
		r: "Matthew 3:17",
		fromGod: true,
		audio: "/audio/god/matthew-3-17.mp3"
	},
	{
		id: "john-1-29-1011",
		t: "The next day John saw Jesus coming toward him and said, Look, the Lamb of God, who takes away the sin of the world!",
		r: "John 1:29",
		audio: "/audio/sweet/john-1-29.mp3"
	},
	{
		id: "matthew-4-19-1012",
		t: "Come, follow me, and I will send you out to fish for people.",
		r: "Matthew 4:19",
		fromGod: true,
		audio: "/audio/god/matthew-4-19.mp3"
	},
	{
		id: "mark-1-14-15-1013",
		t: "Jesus went into Galilee, proclaiming the good news of God. The time has come, he said. The kingdom of God has come near. Repent and believe the good news!",
		r: "Mark 1:14–15",
		fromGod: true,
		audio: "/audio/god/mark-1-14-15.mp3"
	},
	{
		id: "matthew-4-4-1014",
		t: "Jesus answered, It is written: Man shall not live on bread alone, but on every word that comes from the mouth of God.",
		r: "Matthew 4:4",
		fromGod: true,
		audio: "/audio/god/matthew-4-4.mp3"
	},
	{
		id: "matthew-4-17-1015",
		t: "From that time on Jesus began to preach, Repent, for the kingdom of heaven has come near.",
		r: "Matthew 4:17",
		fromGod: true,
		audio: "/audio/god/matthew-4-17.mp3"
	},
	{
		id: "john-1-39-1016",
		t: "Come and you will see.",
		r: "John 1:39",
		fromGod: true,
		audio: "/audio/god/john-1-39.mp3"
	},
	{
		id: "john-1-41-1017",
		t: "Andrew first found his brother Simon and said, We have found the Messiah.",
		r: "John 1:41",
		audio: "/audio/sweet/john-1-41.mp3"
	},
	{
		id: "john-1-42-1018",
		t: "You are Simon son of John. You will be called Cephas — which, when translated, is Peter.",
		r: "John 1:42",
		fromGod: true,
		audio: "/audio/god/john-1-42.mp3"
	},
	{
		id: "luke-2-52-1019",
		t: "And Jesus grew in wisdom and stature, and in favor with God and man.",
		r: "Luke 2:52",
		audio: "/audio/sweet/luke-2-52.mp3"
	},
	{
		id: "matthew-5-3-1020",
		t: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
		r: "Matthew 5:3",
		fromGod: true,
		audio: "/audio/god/matthew-5-3.mp3"
	},
	{
		id: "matthew-5-4-1021",
		t: "Blessed are those who mourn, for they will be comforted.",
		r: "Matthew 5:4",
		fromGod: true
	},
	{
		id: "matthew-5-5-1022",
		t: "Blessed are the meek, for they will inherit the earth.",
		r: "Matthew 5:5",
		fromGod: true
	},
	{
		id: "matthew-5-6-1023",
		t: "Blessed are those who hunger and thirst for righteousness, for they will be filled.",
		r: "Matthew 5:6",
		fromGod: true
	},
	{
		id: "matthew-5-7-1024",
		t: "Blessed are the merciful, for they will be shown mercy.",
		r: "Matthew 5:7",
		fromGod: true
	},
	{
		id: "matthew-5-9-1025",
		t: "Blessed are the peacemakers, for they will be called children of God.",
		r: "Matthew 5:9",
		fromGod: true
	},
	{
		id: "matthew-5-10-1026",
		t: "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.",
		r: "Matthew 5:10",
		fromGod: true
	},
	{
		id: "matthew-5-14-1027",
		t: "You are the light of the world. A town built on a hill cannot be hidden.",
		r: "Matthew 5:14",
		fromGod: true
	},
	{
		id: "matthew-5-16-1028",
		t: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
		r: "Matthew 5:16",
		fromGod: true
	},
	{
		id: "matthew-5-44-1029",
		t: "Love your enemies and pray for those who persecute you.",
		r: "Matthew 5:44",
		fromGod: true
	},
	{
		id: "matthew-6-9-10-1030",
		t: "Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven.",
		r: "Matthew 6:9–10",
		fromGod: true
	},
	{
		id: "matthew-6-11-12-1031",
		t: "Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors.",
		r: "Matthew 6:11–12",
		fromGod: true
	},
	{
		id: "matthew-6-13-1032",
		t: "And lead us not into temptation, but deliver us from the evil one.",
		r: "Matthew 6:13",
		fromGod: true
	},
	{
		id: "matthew-6-21-1033",
		t: "For where your treasure is, there your heart will be also.",
		r: "Matthew 6:21",
		fromGod: true
	},
	{
		id: "matthew-6-24-1034",
		t: "No one can serve two masters. You cannot serve both God and money.",
		r: "Matthew 6:24",
		fromGod: true
	},
	{
		id: "matthew-6-26-1035",
		t: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?",
		r: "Matthew 6:26",
		fromGod: true
	},
	{
		id: "matthew-7-12-1036",
		t: "So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.",
		r: "Matthew 7:12",
		fromGod: true
	},
	{
		id: "matthew-7-13-1037",
		t: "Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it.",
		r: "Matthew 7:13",
		fromGod: true
	},
	{
		id: "matthew-7-14-1038",
		t: "But small is the gate and narrow the road that leads to life, and only a few find it.",
		r: "Matthew 7:14",
		fromGod: true
	},
	{
		id: "matthew-7-24-1039",
		t: "Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock.",
		r: "Matthew 7:24",
		fromGod: true
	},
	{
		id: "john-8-58-1040",
		t: "Truly I tell you, before Abraham was born, I am.",
		r: "John 8:58",
		fromGod: true,
		audio: "/audio/god/john-8-58.mp3"
	},
	{
		id: "john-10-11-1041",
		t: "I am the good shepherd. The good shepherd lays down his life for the sheep.",
		r: "John 10:11",
		fromGod: true,
		audio: "/audio/god/john-10-11.mp3"
	},
	{
		id: "john-15-5-1042",
		t: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
		r: "John 15:5",
		fromGod: true,
		audio: "/audio/god/john-15-5.mp3"
	},
	{
		id: "john-10-9-1043",
		t: "I am the gate; whoever enters through me will be saved. They will come in and go out, and find pasture.",
		r: "John 10:9",
		fromGod: true
	},
	{
		id: "john-15-1-1044",
		t: "I am the true vine, and my Father is the gardener.",
		r: "John 15:1",
		fromGod: true
	},
	{
		id: "john-10-30-1045",
		t: "I and the Father are one.",
		r: "John 10:30",
		fromGod: true
	},
	{
		id: "john-14-9-1046",
		t: "Anyone who has seen me has seen the Father.",
		r: "John 14:9",
		fromGod: true
	},
	{
		id: "revelation-22-13-1047",
		t: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.",
		r: "Revelation 22:13",
		fromGod: true,
		audio: "/audio/god/revelation-22-13.mp3"
	},
	{
		id: "revelation-21-5-1048",
		t: "I am making everything new.",
		r: "Revelation 21:5",
		fromGod: true,
		audio: "/audio/god/revelation-21-5.mp3"
	},
	{
		id: "john-14-1-1049",
		t: "Do not let your hearts be troubled. You believe in God; believe also in me.",
		r: "John 14:1",
		fromGod: true
	},
	{
		id: "luke-15-4-1050",
		t: "Suppose one of you has a hundred sheep and loses one of them. Does he not leave the ninety-nine in the open country and go after the lost sheep until he finds it?",
		r: "Luke 15:4",
		fromGod: true
	},
	{
		id: "luke-15-7-1051",
		t: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
		r: "Luke 15:7",
		fromGod: true
	},
	{
		id: "luke-15-20-1052",
		t: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
		r: "Luke 15:20"
	},
	{
		id: "luke-15-24-1053",
		t: "For this son of mine was dead and is alive again; he was lost and is found.",
		r: "Luke 15:24",
		fromGod: true
	},
	{
		id: "matthew-13-44-1054",
		t: "The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.",
		r: "Matthew 13:44",
		fromGod: true
	},
	{
		id: "luke-10-30-33-1055",
		t: "A man was going down from Jerusalem to Jericho, when he was attacked by robbers. But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him.",
		r: "Luke 10:30, 33",
		fromGod: true
	},
	{
		id: "luke-10-37-1056",
		t: "Go and do likewise.",
		r: "Luke 10:37",
		fromGod: true
	},
	{
		id: "matthew-7-9-11-1057",
		t: "Which of you, if your son asks for bread, will give him a stone? If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!",
		r: "Matthew 7:9, 11",
		fromGod: true
	},
	{
		id: "matthew-25-34-1058",
		t: "Come, you who are blessed by my Father; take your inheritance, the kingdom prepared for you since the creation of the world.",
		r: "Matthew 25:34",
		fromGod: true
	},
	{
		id: "matthew-25-40-1059",
		t: "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
		r: "Matthew 25:40",
		fromGod: true
	},
	{
		id: "mark-4-39-1060",
		t: "He got up, rebuked the wind and said to the waves, Peace! Be still! Then the wind died down and it was completely calm.",
		r: "Mark 4:39",
		fromGod: true,
		audio: "/audio/god/mark-4-39.mp3"
	},
	{
		id: "mark-4-41-1061",
		t: "Who is this? Even the wind and the waves obey him!",
		r: "Mark 4:41"
	},
	{
		id: "john-11-43-44-1062",
		t: "Jesus called in a loud voice, Lazarus, come out! The dead man came out.",
		r: "John 11:43–44",
		fromGod: true
	},
	{
		id: "mark-5-34-1063",
		t: "Daughter, your faith has healed you. Go in peace and be freed from your suffering.",
		r: "Mark 5:34",
		fromGod: true
	},
	{
		id: "matthew-14-27-1064",
		t: "Take courage! It is I. Do not be afraid.",
		r: "Matthew 14:27",
		fromGod: true
	},
	{
		id: "matthew-14-31-1065",
		t: "You of little faith, why did you doubt?",
		r: "Matthew 14:31",
		fromGod: true
	},
	{
		id: "matthew-8-3-1066",
		t: "I do choose. Be clean!",
		r: "Matthew 8:3",
		fromGod: true
	},
	{
		id: "matthew-19-26-1067",
		t: "With man this is impossible, but with God all things are possible.",
		r: "Matthew 19:26",
		fromGod: true
	},
	{
		id: "mark-9-23-1068",
		t: "Everything is possible for one who believes.",
		r: "Mark 9:23",
		fromGod: true
	},
	{
		id: "mark-9-24-1069",
		t: "I do believe; help me overcome my unbelief!",
		r: "Mark 9:24"
	},
	{
		id: "isaiah-53-5-1070",
		t: "He was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
		r: "Isaiah 53:5"
	},
	{
		id: "isaiah-53-6-1071",
		t: "We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all.",
		r: "Isaiah 53:6"
	},
	{
		id: "matthew-26-39-1072",
		t: "My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will.",
		r: "Matthew 26:39",
		fromGod: true
	},
	{
		id: "matthew-26-41-1073",
		t: "Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.",
		r: "Matthew 26:41",
		fromGod: true
	},
	{
		id: "luke-22-19-20-1074",
		t: "This is my body given for you; do this in remembrance of me. This cup is the new covenant in my blood, which is poured out for you.",
		r: "Luke 22:19–20",
		fromGod: true
	},
	{
		id: "john-15-13b-1075",
		t: "Greater love has no one than this: to lay down one's life for one's friends.",
		r: "John 15:13b",
		fromGod: true
	},
	{
		id: "luke-23-46-1076",
		t: "Jesus called out with a loud voice, Father, into your hands I commit my spirit. When he had said this, he breathed his last.",
		r: "Luke 23:46",
		fromGod: true
	},
	{
		id: "john-19-30-1077",
		t: "When he had received the drink, Jesus said, It is finished. With that, he bowed his head and gave up his spirit.",
		r: "John 19:30",
		fromGod: true
	},
	{
		id: "luke-23-43-1078",
		t: "Truly I tell you, today you will be with me in paradise.",
		r: "Luke 23:43",
		fromGod: true
	},
	{
		id: "1-peter-2-24-1079",
		t: "He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed.",
		r: "1 Peter 2:24"
	},
	{
		id: "matthew-28-6-1080",
		t: "He is not here; he has risen, just as he said. Come and see the place where he lay.",
		r: "Matthew 28:6"
	},
	{
		id: "luke-24-5-6-1081",
		t: "Why do you look for the living among the dead? He is not here; he has risen!",
		r: "Luke 24:5–6"
	},
	{
		id: "john-20-21-1082",
		t: "Peace be with you! As the Father has sent me, I am sending you.",
		r: "John 20:21",
		fromGod: true
	},
	{
		id: "john-20-29-1083",
		t: "Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.",
		r: "John 20:29",
		fromGod: true
	},
	{
		id: "john-20-17-1084",
		t: "Do not hold on to me, for I have not yet ascended to the Father. Go instead to my brothers and tell them.",
		r: "John 20:17",
		fromGod: true
	},
	{
		id: "luke-24-32-1085",
		t: "Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?",
		r: "Luke 24:32"
	},
	{
		id: "1-corinthians-15-3-4-1086",
		t: "Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures.",
		r: "1 Corinthians 15:3–4"
	},
	{
		id: "1-corinthians-15-55-1087",
		t: "Where, O death, is your victory? Where, O death, is your sting?",
		r: "1 Corinthians 15:55"
	},
	{
		id: "1-corinthians-15-57-1088",
		t: "But thanks be to God! He gives us the victory through our Lord Jesus Christ.",
		r: "1 Corinthians 15:57"
	},
	{
		id: "matthew-28-18-19-1089",
		t: "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations.",
		r: "Matthew 28:18–19",
		fromGod: true
	},
	{
		id: "john-14-26-1090",
		t: "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.",
		r: "John 14:26",
		fromGod: true
	},
	{
		id: "acts-2-1-4-1091",
		t: "When the day of Pentecost came, they were all together in one place. All of them were filled with the Holy Spirit.",
		r: "Acts 2:1, 4"
	},
	{
		id: "acts-4-12-1092",
		t: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
		r: "Acts 4:12"
	},
	{
		id: "acts-2-42-1093",
		t: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
		r: "Acts 2:42"
	},
	{
		id: "acts-2-21-1094",
		t: "Everyone who calls on the name of the Lord will be saved.",
		r: "Acts 2:21"
	},
	{
		id: "acts-2-32-1095",
		t: "God has raised this Jesus to life, and we are all witnesses of it.",
		r: "Acts 2:32"
	},
	{
		id: "acts-2-38-1096",
		t: "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.",
		r: "Acts 2:38"
	},
	{
		id: "acts-2-47-1097",
		t: "The Lord added to their number daily those who were being saved.",
		r: "Acts 2:47"
	},
	{
		id: "acts-5-29-1098",
		t: "We must obey God rather than human beings.",
		r: "Acts 5:29"
	},
	{
		id: "galatians-2-20-1099",
		t: "I have been crucified with Christ and I no longer live, but Christ lives in me.",
		r: "Galatians 2:20"
	},
	{
		id: "romans-3-23-1100",
		t: "For all have sinned and fall short of the glory of God.",
		r: "Romans 3:23"
	},
	{
		id: "romans-6-23-1101",
		t: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
		r: "Romans 6:23"
	},
	{
		id: "romans-5-8-1102",
		t: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
		r: "Romans 5:8"
	},
	{
		id: "romans-8-1-1103",
		t: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
		r: "Romans 8:1"
	},
	{
		id: "romans-8-15-1104",
		t: "The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship.",
		r: "Romans 8:15"
	},
	{
		id: "romans-8-16-1105",
		t: "The Spirit himself testifies with our spirit that we are God's children.",
		r: "Romans 8:16"
	},
	{
		id: "romans-8-18-1106",
		t: "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.",
		r: "Romans 8:18"
	},
	{
		id: "romans-8-26-1107",
		t: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us.",
		r: "Romans 8:26"
	},
	{
		id: "romans-10-9b-1108",
		t: "If you declare with your mouth, Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.",
		r: "Romans 10:9b"
	},
	{
		id: "romans-10-17-1109",
		t: "Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.",
		r: "Romans 10:17"
	},
	{
		id: "ephesians-2-8-9-1110",
		t: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works, so that no one can boast.",
		r: "Ephesians 2:8–9"
	},
	{
		id: "ephesians-2-10-1111",
		t: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
		r: "Ephesians 2:10"
	},
	{
		id: "ephesians-3-20-1112",
		t: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
		r: "Ephesians 3:20"
	},
	{
		id: "ephesians-4-2-1113",
		t: "Be completely humble and gentle; be patient, bearing with one another in love.",
		r: "Ephesians 4:2"
	},
	{
		id: "ephesians-4-29-1114",
		t: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up.",
		r: "Ephesians 4:29"
	},
	{
		id: "ephesians-4-32-1115",
		t: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
		r: "Ephesians 4:32"
	},
	{
		id: "galatians-5-22-23-1116",
		t: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
		r: "Galatians 5:22–23"
	},
	{
		id: "galatians-6-9-1117",
		t: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
		r: "Galatians 6:9"
	},
	{
		id: "colossians-3-23-1118",
		t: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
		r: "Colossians 3:23"
	},
	{
		id: "colossians-3-17-1119",
		t: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus.",
		r: "Colossians 3:17"
	},
	{
		id: "hebrews-11-1-1120",
		t: "Now faith is confidence in what we hope for and assurance about what we do not see.",
		r: "Hebrews 11:1"
	},
	{
		id: "hebrews-11-6-1121",
		t: "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.",
		r: "Hebrews 11:6"
	},
	{
		id: "hebrews-12-1-2-1122",
		t: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.",
		r: "Hebrews 12:1–2"
	},
	{
		id: "hebrews-13-8-1123",
		t: "Jesus Christ is the same yesterday and today and forever.",
		r: "Hebrews 13:8"
	},
	{
		id: "james-1-2-3-1124",
		t: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.",
		r: "James 1:2–3"
	},
	{
		id: "james-1-5-1125",
		t: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
		r: "James 1:5"
	},
	{
		id: "james-1-17-1126",
		t: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
		r: "James 1:17"
	},
	{
		id: "1-john-4-7-1127",
		t: "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God.",
		r: "1 John 4:7"
	},
	{
		id: "1-john-4-8-1128",
		t: "Whoever does not love does not know God, because God is love.",
		r: "1 John 4:8"
	},
	{
		id: "1-john-4-19-1129",
		t: "We love because he first loved us.",
		r: "1 John 4:19"
	},
	{
		id: "psalm-27-1-1130",
		t: "The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?",
		r: "Psalm 27:1"
	},
	{
		id: "psalm-27-14-1131",
		t: "Wait for the Lord; be strong and take heart and wait for the Lord.",
		r: "Psalm 27:14"
	},
	{
		id: "psalm-34-8-1132",
		t: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
		r: "Psalm 34:8"
	},
	{
		id: "psalm-37-4-1133",
		t: "Delight yourself in the Lord, and he will give you the desires of your heart.",
		r: "Psalm 37:4"
	},
	{
		id: "psalm-37-7-1134",
		t: "Be still before the Lord and wait patiently for him.",
		r: "Psalm 37:7"
	},
	{
		id: "psalm-40-1-1135",
		t: "I waited patiently for the Lord; he turned to me and heard my cry.",
		r: "Psalm 40:1"
	},
	{
		id: "psalm-42-1-1136",
		t: "As the deer pants for streams of water, so my soul pants for you, my God.",
		r: "Psalm 42:1"
	},
	{
		id: "psalm-42-11-1137",
		t: "Why, my soul, are you downcast? Put your hope in God, for I will yet praise him, my Savior and my God.",
		r: "Psalm 42:11"
	},
	{
		id: "psalm-51-1-1138",
		t: "Have mercy on me, O God, according to your unfailing love; according to your great compassion blot out my transgressions.",
		r: "Psalm 51:1"
	},
	{
		id: "psalm-51-10b-1139",
		t: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
		r: "Psalm 51:10b"
	},
	{
		id: "psalm-119-105-1140",
		t: "Your word is a lamp for my feet, a light on my path.",
		r: "Psalm 119:105"
	},
	{
		id: "psalm-119-11-1141",
		t: "I have hidden your word in my heart that I might not sin against you.",
		r: "Psalm 119:11"
	},
	{
		id: "psalm-121-7-8-1142",
		t: "The Lord will keep you from all harm — he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
		r: "Psalm 121:7–8"
	},
	{
		id: "psalm-125-1-1143",
		t: "Those who trust in the Lord are like Mount Zion, which cannot be shaken but endures forever.",
		r: "Psalm 125:1"
	},
	{
		id: "psalm-145-8-1144",
		t: "The Lord is gracious and compassionate, slow to anger and rich in love.",
		r: "Psalm 145:8"
	},
	{
		id: "psalm-145-18-1145",
		t: "The Lord is near to all who call on him, to all who call on him in truth.",
		r: "Psalm 145:18"
	},
	{
		id: "psalm-103-2-3-1146",
		t: "Praise the Lord, my soul, and forget not all his benefits — who forgives all your sins and heals all your diseases.",
		r: "Psalm 103:2–3"
	},
	{
		id: "psalm-103-12-1147",
		t: "As far as the east is from the west, so far has he removed our transgressions from us.",
		r: "Psalm 103:12"
	},
	{
		id: "psalm-136-1-1148",
		t: "Give thanks to the Lord, for he is good; his love endures forever.",
		r: "Psalm 136:1"
	},
	{
		id: "psalm-139-23-1149",
		t: "Search me, God, and know my heart; test me and know my anxious thoughts.",
		r: "Psalm 139:23"
	},
	{
		id: "proverbs-9-10-1150",
		t: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
		r: "Proverbs 9:10"
	},
	{
		id: "proverbs-4-23-1151",
		t: "Above all else, guard your heart, for everything you do flows from it.",
		r: "Proverbs 4:23"
	},
	{
		id: "proverbs-3-5-1152",
		t: "Trust in the Lord with all your heart and lean not on your own understanding.",
		r: "Proverbs 3:5"
	},
	{
		id: "proverbs-3-6-1153",
		t: "In all your ways submit to him, and he will make your paths straight.",
		r: "Proverbs 3:6"
	},
	{
		id: "proverbs-15-1-1154",
		t: "A gentle answer turns away wrath, but a harsh word stirs up anger.",
		r: "Proverbs 15:1"
	},
	{
		id: "proverbs-16-18-1155",
		t: "Pride goes before destruction, a haughty spirit before a fall.",
		r: "Proverbs 16:18"
	},
	{
		id: "proverbs-17-17-1156",
		t: "A friend loves at all times, and a brother is born for a time of adversity.",
		r: "Proverbs 17:17"
	},
	{
		id: "proverbs-18-10b-1157",
		t: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
		r: "Proverbs 18:10b"
	},
	{
		id: "proverbs-19-21-1158",
		t: "Many are the plans in a person's heart, but it is the Lord's purpose that prevails.",
		r: "Proverbs 19:21"
	},
	{
		id: "proverbs-31-25-1159",
		t: "She is clothed with strength and dignity; she can laugh at the days to come.",
		r: "Proverbs 31:25"
	},
	{
		id: "isaiah-6-3-1160",
		t: "Holy, holy, holy is the Lord Almighty; the whole earth is full of his glory.",
		r: "Isaiah 6:3"
	},
	{
		id: "isaiah-6-8-1161",
		t: "Then I heard the voice of the Lord saying, Whom shall I send? And who will go for us? And I said, Here am I. Send me!",
		r: "Isaiah 6:8"
	},
	{
		id: "isaiah-1-18-1162",
		t: "Come now, let us settle the matter, says the Lord. Though your sins are like scarlet, they shall be as white as snow.",
		r: "Isaiah 1:18",
		fromGod: true
	},
	{
		id: "isaiah-26-3b-1163",
		t: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
		r: "Isaiah 26:3b"
	},
	{
		id: "isaiah-53-5b-1164",
		t: "But he was pierced for our transgressions — the punishment that brought us peace was on him.",
		r: "Isaiah 53:5b"
	},
	{
		id: "isaiah-43-19-1165",
		t: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.",
		r: "Isaiah 43:19",
		fromGod: true
	},
	{
		id: "isaiah-43-1-1166",
		t: "Fear not, for I have redeemed you; I have summoned you by name; you are mine.",
		r: "Isaiah 43:1",
		fromGod: true
	},
	{
		id: "isaiah-61-1-1167",
		t: "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor.",
		r: "Isaiah 61:1"
	},
	{
		id: "micah-6-8-1168",
		t: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
		r: "Micah 6:8"
	},
	{
		id: "hosea-6-6-1169",
		t: "For I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings.",
		r: "Hosea 6:6",
		fromGod: true
	},
	{
		id: "genesis-1-1-1170",
		t: "In the beginning God created the heavens and the earth.",
		r: "Genesis 1:1"
	},
	{
		id: "genesis-1-3-1171",
		t: "And God said, Let there be light, and there was light.",
		r: "Genesis 1:3",
		fromGod: true,
		audio: "/audio/god/genesis-1-3.mp3"
	},
	{
		id: "genesis-1-31-1172",
		t: "God saw all that he had made, and it was very good.",
		r: "Genesis 1:31"
	},
	{
		id: "genesis-1-27-1173",
		t: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
		r: "Genesis 1:27"
	},
	{
		id: "genesis-2-18-1174",
		t: "The Lord God said, It is not good for the man to be alone. I will make a helper suitable for him.",
		r: "Genesis 2:18",
		fromGod: true
	},
	{
		id: "genesis-12-2-1175",
		t: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.",
		r: "Genesis 12:2",
		fromGod: true
	},
	{
		id: "genesis-15-6-1176",
		t: "Abram believed the Lord, and he credited it to him as righteousness.",
		r: "Genesis 15:6"
	},
	{
		id: "genesis-28-16-1177",
		t: "Surely the Lord is in this place, and I was not aware of it.",
		r: "Genesis 28:16"
	},
	{
		id: "genesis-50-20-1178",
		t: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
		r: "Genesis 50:20"
	},
	{
		id: "exodus-3-14-1179",
		t: "I am who I am. This is what you are to say to the Israelites: I AM has sent me to you.",
		r: "Exodus 3:14",
		fromGod: true,
		audio: "/audio/god/exodus-3-14.mp3"
	},
	{
		id: "exodus-14-14-1180",
		t: "The Lord will fight for you; you need only to be still.",
		r: "Exodus 14:14"
	},
	{
		id: "exodus-20-2-3-1181",
		t: "I am the Lord your God, who brought you out of Egypt, out of the land of slavery. You shall have no other gods before me.",
		r: "Exodus 20:2–3",
		fromGod: true
	},
	{
		id: "exodus-20-4-7-1182",
		t: "You shall not make for yourself an image and bow down to it. You shall not misuse the name of the Lord your God.",
		r: "Exodus 20:4–7",
		fromGod: true
	},
	{
		id: "exodus-20-8-1183",
		t: "Remember the Sabbath day by keeping it holy.",
		r: "Exodus 20:8",
		fromGod: true
	},
	{
		id: "exodus-20-12-1184",
		t: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.",
		r: "Exodus 20:12",
		fromGod: true
	},
	{
		id: "exodus-20-13-17-1185",
		t: "You shall not murder. You shall not commit adultery. You shall not steal. You shall not give false testimony. You shall not covet.",
		r: "Exodus 20:13–17",
		fromGod: true
	},
	{
		id: "exodus-34-6-1186",
		t: "The Lord, the Lord, the compassionate and gracious God, slow to anger, abounding in love and faithfulness.",
		r: "Exodus 34:6"
	},
	{
		id: "deuteronomy-6-4-5-1187",
		t: "Hear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart and with all your soul and with all your strength.",
		r: "Deuteronomy 6:4–5"
	},
	{
		id: "joshua-1-9b-1188",
		t: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
		r: "Joshua 1:9b"
	},
	{
		id: "joshua-24-15-1189",
		t: "As for me and my household, we will serve the Lord.",
		r: "Joshua 24:15"
	},
	{
		id: "revelation-22-12-1190",
		t: "Look, I am coming soon! My reward is with me, and I will give to each person according to what they have done.",
		r: "Revelation 22:12",
		fromGod: true
	},
	{
		id: "revelation-21-4-1191",
		t: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
		r: "Revelation 21:4"
	},
	{
		id: "revelation-21-3-1192",
		t: "And I heard a loud voice from the throne saying, Look! God's dwelling place is now among the people, and he will dwell with them.",
		r: "Revelation 21:3"
	},
	{
		id: "revelation-5-12-1193",
		t: "Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!",
		r: "Revelation 5:12"
	},
	{
		id: "revelation-4-8-1194",
		t: "Holy, holy, holy is the Lord God Almighty, who was, and is, and is to come.",
		r: "Revelation 4:8"
	},
	{
		id: "revelation-12-11-1195",
		t: "They triumphed over him by the blood of the Lamb and by the word of their testimony.",
		r: "Revelation 12:11"
	},
	{
		id: "revelation-3-20a-1196",
		t: "Behold, I stand at the door and knock.",
		r: "Revelation 3:20a",
		fromGod: true
	},
	{
		id: "revelation-21-6-1197",
		t: "To the thirsty I will give water without cost from the spring of the water of life.",
		r: "Revelation 21:6",
		fromGod: true
	},
	{
		id: "revelation-22-17-1198",
		t: "The Spirit and the bride say, Come! And let the one who hears say, Come! Let the one who is thirsty come.",
		r: "Revelation 22:17"
	},
	{
		id: "revelation-22-20-1199",
		t: "He who testifies to these things says, Yes, I am coming soon. Amen. Come, Lord Jesus.",
		r: "Revelation 22:20",
		fromGod: true
	},
	{
		id: "matthew-19-14-1200",
		t: "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.",
		r: "Matthew 19:14",
		fromGod: true
	},
	{
		id: "matthew-16-26-1201",
		t: "What good will it be for someone to gain the whole world, yet forfeit their soul?",
		r: "Matthew 16:26",
		fromGod: true
	},
	{
		id: "matthew-16-24-1202",
		t: "Whoever wants to be my disciple must deny themselves and take up their cross and follow me.",
		r: "Matthew 16:24",
		fromGod: true
	},
	{
		id: "mark-10-45-1203",
		t: "For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
		r: "Mark 10:45",
		fromGod: true
	},
	{
		id: "john-13-34-1204",
		t: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
		r: "John 13:34",
		fromGod: true
	},
	{
		id: "john-13-35-1205",
		t: "By this everyone will know that you are my disciples, if you love one another.",
		r: "John 13:35",
		fromGod: true
	},
	{
		id: "john-15-4-1206",
		t: "Remain in me, as I also remain in you.",
		r: "John 15:4",
		fromGod: true
	},
	{
		id: "john-15-16-1207",
		t: "You did not choose me, but I chose you and appointed you so that you might go and bear fruit.",
		r: "John 15:16",
		fromGod: true
	},
	{
		id: "john-17-24-1208",
		t: "Father, I want those you have given me to be with me where I am, and to see my glory.",
		r: "John 17:24",
		fromGod: true
	},
	{
		id: "john-17-17-1209",
		t: "Sanctify them by the truth; your word is truth.",
		r: "John 17:17",
		fromGod: true
	},
	{
		id: "proverbs-16-3-1210",
		t: "Commit to the Lord whatever you do, and he will establish your plans.",
		r: "Proverbs 16:3"
	},
	{
		id: "psalm-90-17-1211",
		t: "May the favor of the Lord our God rest on us; establish the work of our hands for us — yes, establish the work of our hands.",
		r: "Psalm 90:17"
	},
	{
		id: "psalm-127-1-1212",
		t: "Unless the Lord builds the house, the builders labor in vain.",
		r: "Psalm 127:1"
	},
	{
		id: "philippians-4-13b-1213",
		t: "I can do all this through him who gives me strength.",
		r: "Philippians 4:13b"
	},
	{
		id: "philippians-4-19b-1214",
		t: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
		r: "Philippians 4:19b"
	},
	{
		id: "galatians-6-9a-1215",
		t: "Let us not become weary in doing good.",
		r: "Galatians 6:9a"
	},
	{
		id: "john-10-10b-1216",
		t: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
		r: "John 10:10b",
		fromGod: true
	},
	{
		id: "matthew-6-31-33-1217",
		t: "So do not worry, saying, What shall we eat? or What shall we drink? or What shall we wear? But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
		r: "Matthew 6:31, 33",
		fromGod: true
	},
	{
		id: "psalm-55-22b-1218",
		t: "Cast your cares on the Lord and he will sustain you.",
		r: "Psalm 55:22b"
	},
	{
		id: "proverbs-10-22b-1219",
		t: "The blessing of the Lord brings wealth, without painful toil for it.",
		r: "Proverbs 10:22b"
	},
	{
		id: "luke-4-18-1220",
		t: "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.",
		r: "Luke 4:18",
		fromGod: true,
		audio: "/audio/god/luke-4-18.mp3"
	},
	{
		id: "luke-5-32-1221",
		t: "I have not come to call the righteous, but sinners to repentance.",
		r: "Luke 5:32",
		fromGod: true,
		audio: "/audio/god/luke-5-32.mp3"
	},
	{
		id: "matthew-9-12-1222",
		t: "It is not the healthy who need a doctor, but the sick.",
		r: "Matthew 9:12",
		fromGod: true,
		audio: "/audio/god/matthew-9-12.mp3"
	},
	{
		id: "matthew-11-29-1223",
		t: "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
		r: "Matthew 11:29",
		fromGod: true,
		audio: "/audio/god/matthew-11-29.mp3"
	},
	{
		id: "luke-6-31-1224",
		t: "Do to others as you would have them do to you.",
		r: "Luke 6:31",
		fromGod: true,
		audio: "/audio/god/luke-6-31.mp3"
	},
	{
		id: "matthew-9-36-1225",
		t: "When he saw the crowds, he had compassion on them, because they were harassed and helpless, like sheep without a shepherd.",
		r: "Matthew 9:36",
		audio: "/audio/sweet/matthew-9-36.mp3"
	},
	{
		id: "mark-10-27-1226",
		t: "With man this is impossible, but not with God; all things are possible with God.",
		r: "Mark 10:27",
		fromGod: true,
		audio: "/audio/god/mark-10-27.mp3"
	},
	{
		id: "john-3-17-1227",
		t: "For God did not send his Son into the world to condemn the world, but to save the world through him.",
		r: "John 3:17",
		audio: "/audio/sweet/john-3-17.mp3"
	},
	{
		id: "john-3-3-1228",
		t: "Very truly I tell you, no one can see the kingdom of God unless they are born again.",
		r: "John 3:3",
		fromGod: true,
		audio: "/audio/god/john-3-3.mp3"
	},
	{
		id: "luke-19-10-1229",
		t: "For the Son of Man came to seek and to save the lost.",
		r: "Luke 19:10",
		fromGod: true,
		audio: "/audio/god/luke-19-10.mp3"
	}
];
/**
* Short public-domain sermons laid among the Word.
* Read in the sweet voice — not as the Lord's recording.
*/
var SERMONS = [
	{
		id: "sermon-spurgeon-hold",
		t: "It is not thy hold of Christ that saves thee — it is Christ. It is not thy joy in Christ that saves thee — it is Christ. It is not even thy faith in Christ, though that is the instrument — it is Christ's blood and merits. Therefore look not to thy hope, but to Christ, the source of thy hope. Look not to thy faith, but to Christ, the author and finisher of thy faith.",
		r: "Charles Spurgeon · a short sermon",
		sermon: true,
		audio: "/audio/sermon/sermon-spurgeon-hold.mp3"
	},
	{
		id: "sermon-wesley-grace",
		t: "By grace are ye saved through faith. All the blessings which God hath bestowed upon man are of his mere grace, bounty, or favour — his free, undeserved favour. If then sinful men find favour with God, it is grace upon grace. God commendeth his love toward us, in that, while we were yet sinners, Christ died to save us. Grace is the source, faith the condition, of salvation.",
		r: "John Wesley · Salvation by Faith",
		sermon: true,
		audio: "/audio/sermon/sermon-wesley-grace.mp3"
	},
	{
		id: "sermon-whitefield-come",
		t: "Come, ye weary, heavy-laden sinners. Come to Christ, and he will give you rest. By his obedience and death he has made an atonement for man's transgression, and brought in an everlasting righteousness. He will work in you a new nature, and bruise the serpent's head — destroy his power and dominion over you.",
		r: "George Whitefield · a short sermon",
		sermon: true,
		audio: "/audio/sermon/sermon-whitefield-come.mp3"
	},
	{
		id: "sermon-augustine-late",
		t: "Late have I loved you, O Beauty ever ancient, ever new, late have I loved you! You were within me, but I was outside, and it was there that I searched for you. You were with me, but I was not with you. You called, you shouted, and you broke through my deafness. You flashed, you shone, and you dispelled my blindness. You touched me, and I am set on fire to attain the peace which is yours.",
		r: "St. Augustine · Confessions",
		sermon: true,
		audio: "/audio/sermon/sermon-augustine-late.mp3"
	},
	{
		id: "sermon-luther-faith",
		t: "Faith is a living, daring confidence in God's grace, so sure and certain that a man would stake his life on it a thousand times. This knowledge of and confidence in God's grace makes men glad and bold and happy in dealing with God and with all creatures. And this is what makes it impossible for this faith to be idle.",
		r: "Martin Luther · Preface to Romans",
		sermon: true,
		audio: "/audio/sermon/sermon-luther-faith.mp3"
	},
	{
		id: "sermon-edwards-enjoy",
		t: "The enjoyment of God is the only happiness with which our souls can be satisfied. To go to heaven, fully to enjoy God, is infinitely better than the most pleasant accommodations here. Fathers and mothers, husbands, wives, or children, or the company of earthly friends, are but shadows; but God is the substance. These are but scattered beams, but God is the sun.",
		r: "Jonathan Edwards · The Christian Pilgrim",
		sermon: true,
		audio: "/audio/sermon/sermon-edwards-enjoy.mp3"
	},
	{
		id: "sermon-kempis-trinity",
		t: "What good does it do to speak learnedly about the Trinity if, lacking humility, you displease the Trinity? Indeed it is not learning that makes a man holy and just, but a virtuous life makes him pleasing to God. I would rather feel contrition than know how to define it. If you knew the whole Bible and the sayings of all the philosophers, what would it profit you without the love of God?",
		r: "Thomas à Kempis · The Imitation of Christ",
		sermon: true,
		audio: "/audio/sermon/sermon-kempis-trinity.mp3"
	},
	{
		id: "sermon-chrysostom-hospital",
		t: "The Church is a hospital, and not a courtroom, for souls. She does not condemn on behalf of sins, but grants remission of sins. Nothing is so foreign to the merciful Church as cruelty. Enter, then, with your wounds. The Physician is here, and the medicine is the blood of Christ.",
		r: "St. John Chrysostom · a short sermon",
		sermon: true,
		audio: "/audio/sermon/sermon-chrysostom-hospital.mp3"
	}
];
/** Original collection (99) plus ten new passages given today. */
var START_VERSES = [
	{
		id: "john-3-16-0",
		t: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
		r: "John 3:16",
		audio: "/audio/sweet/john-3-16.mp3"
	},
	{
		id: "john-14-6-1",
		t: "I am the way and the truth and the life. No one comes to the Father except through me.",
		r: "John 14:6",
		fromGod: true,
		audio: "/audio/god/john-14-6.mp3"
	},
	{
		id: "matthew-11-28-2",
		t: "Come to me, all you who are weary and burdened, and I will give you rest.",
		r: "Matthew 11:28",
		fromGod: true,
		audio: "/audio/god/matthew-11-28.mp3"
	},
	{
		id: "john-14-27-3",
		t: "Peace I leave with you; my peace I give you. Do not let your hearts be troubled and do not be afraid.",
		r: "John 14:27",
		fromGod: true,
		audio: "/audio/god/john-14-27.mp3"
	},
	{
		id: "john-8-12-4",
		t: "I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.",
		r: "John 8:12",
		fromGod: true,
		audio: "/audio/god/john-8-12.mp3"
	},
	{
		id: "john-11-25-5",
		t: "I am the resurrection and the life. The one who believes in me will live, even though they die.",
		r: "John 11:25",
		fromGod: true,
		audio: "/audio/god/john-11-25.mp3"
	},
	{
		id: "john-10-10-6",
		t: "I have come that they may have life, and have it to the full.",
		r: "John 10:10",
		fromGod: true,
		audio: "/audio/god/john-10-10.mp3"
	},
	{
		id: "matthew-28-20-7",
		t: "I am with you always, to the very end of the age.",
		r: "Matthew 28:20",
		fromGod: true,
		audio: "/audio/god/matthew-28-20.mp3"
	},
	{
		id: "john-15-13-8",
		t: "Greater love has no one than this: to lay down one's life for one's friends.",
		r: "John 15:13",
		fromGod: true,
		audio: "/audio/god/john-15-13.mp3"
	},
	{
		id: "matthew-7-7-9",
		t: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
		r: "Matthew 7:7",
		fromGod: true,
		audio: "/audio/god/matthew-7-7.mp3"
	},
	{
		id: "matthew-5-8-10",
		t: "Blessed are the pure in heart, for they will see God.",
		r: "Matthew 5:8",
		audio: "/audio/sweet/matthew-5-8.mp3"
	},
	{
		id: "john-16-33-11",
		t: "In this world you will have trouble. But take heart — I have overcome the world.",
		r: "John 16:33",
		fromGod: true,
		audio: "/audio/god/john-16-33.mp3"
	},
	{
		id: "matthew-6-34-12",
		t: "Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
		r: "Matthew 6:34",
		fromGod: true,
		audio: "/audio/god/matthew-6-34.mp3"
	},
	{
		id: "isaiah-41-10-13",
		t: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
		r: "Isaiah 41:10",
		fromGod: true,
		audio: "/audio/god/isaiah-41-10.mp3"
	},
	{
		id: "2-timothy-1-7-14",
		t: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
		r: "2 Timothy 1:7",
		audio: "/audio/sweet/2-timothy-1-7.mp3"
	},
	{
		id: "joshua-1-9-15",
		t: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
		r: "Joshua 1:9",
		audio: "/audio/sweet/joshua-1-9.mp3"
	},
	{
		id: "psalm-23-4-16",
		t: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
		r: "Psalm 23:4",
		audio: "/audio/sweet/psalm-23-4.mp3"
	},
	{
		id: "psalm-46-1-17",
		t: "God is our refuge and strength, an ever-present help in trouble.",
		r: "Psalm 46:1",
		audio: "/audio/sweet/psalm-46-1.mp3"
	},
	{
		id: "psalm-18-2-18",
		t: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
		r: "Psalm 18:2",
		audio: "/audio/sweet/psalm-18-2.mp3"
	},
	{
		id: "psalm-46-10-19",
		t: "Be still, and know that I am God.",
		r: "Psalm 46:10",
		fromGod: true,
		audio: "/audio/god/psalm-46-10.mp3"
	},
	{
		id: "psalm-34-18-20",
		t: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
		r: "Psalm 34:18",
		audio: "/audio/sweet/psalm-34-18.mp3"
	},
	{
		id: "psalm-73-26-21",
		t: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
		r: "Psalm 73:26",
		audio: "/audio/sweet/psalm-73-26.mp3"
	},
	{
		id: "1-peter-5-7-22",
		t: "Cast all your anxiety on him because he cares for you.",
		r: "1 Peter 5:7",
		audio: "/audio/sweet/1-peter-5-7.mp3"
	},
	{
		id: "psalm-55-22-23",
		t: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
		r: "Psalm 55:22",
		audio: "/audio/sweet/psalm-55-22.mp3"
	},
	{
		id: "psalm-147-3-24",
		t: "He heals the brokenhearted and binds up their wounds.",
		r: "Psalm 147:3",
		audio: "/audio/sweet/psalm-147-3.mp3"
	},
	{
		id: "philippians-4-6-7-25",
		t: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
		r: "Philippians 4:6–7",
		audio: "/audio/sweet/philippians-4-6-7.mp3"
	},
	{
		id: "romans-15-13-26",
		t: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
		r: "Romans 15:13",
		audio: "/audio/sweet/romans-15-13.mp3"
	},
	{
		id: "psalm-62-5-6-27",
		t: "Yes, my soul, find rest in God; my hope comes from him. Truly he is my rock and my salvation; he is my fortress, I will not be shaken.",
		r: "Psalm 62:5–6",
		audio: "/audio/sweet/psalm-62-5-6.mp3"
	},
	{
		id: "isaiah-26-3-28",
		t: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
		r: "Isaiah 26:3",
		audio: "/audio/sweet/isaiah-26-3.mp3"
	},
	{
		id: "james-4-8-29",
		t: "Come near to God and he will come near to you.",
		r: "James 4:8",
		audio: "/audio/sweet/james-4-8.mp3"
	},
	{
		id: "psalm-23-1-30",
		t: "The Lord is my shepherd; I shall not want.",
		r: "Psalm 23:1",
		audio: "/audio/sweet/psalm-23-1.mp3"
	},
	{
		id: "ephesians-6-10-11-31",
		t: "Finally, be strong in the Lord and in his mighty power. Put on the full armor of God, so that you can take your stand against the devil's schemes.",
		r: "Ephesians 6:10–11",
		audio: "/audio/sweet/ephesians-6-10-11.mp3"
	},
	{
		id: "ephesians-6-16-32",
		t: "Take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one.",
		r: "Ephesians 6:16",
		audio: "/audio/sweet/ephesians-6-16.mp3"
	},
	{
		id: "james-4-7-33",
		t: "Submit yourselves, then, to God. Resist the devil, and he will flee from you.",
		r: "James 4:7",
		audio: "/audio/sweet/james-4-7.mp3"
	},
	{
		id: "2-corinthians-10-4-34",
		t: "The weapons we fight with are not the weapons of the world. On the contrary, they have divine power to demolish strongholds.",
		r: "2 Corinthians 10:4",
		audio: "/audio/sweet/2-corinthians-10-4.mp3"
	},
	{
		id: "1-corinthians-10-13-35",
		t: "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear.",
		r: "1 Corinthians 10:13",
		audio: "/audio/sweet/1-corinthians-10-13.mp3"
	},
	{
		id: "nehemiah-8-10-36",
		t: "Do not grieve, for the joy of the Lord is your strength.",
		r: "Nehemiah 8:10",
		audio: "/audio/sweet/nehemiah-8-10.mp3"
	},
	{
		id: "1-john-4-4-37",
		t: "Greater is he that is in you, than he that is in the world.",
		r: "1 John 4:4",
		audio: "/audio/sweet/1-john-4-4.mp3"
	},
	{
		id: "philippians-4-19-38",
		t: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
		r: "Philippians 4:19",
		audio: "/audio/sweet/philippians-4-19.mp3"
	},
	{
		id: "matthew-6-33-39",
		t: "Seek first his kingdom and his righteousness, and all these things will be given to you as well.",
		r: "Matthew 6:33",
		fromGod: true,
		audio: "/audio/god/matthew-6-33.mp3"
	},
	{
		id: "psalm-37-25-40",
		t: "I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread.",
		r: "Psalm 37:25",
		audio: "/audio/sweet/psalm-37-25.mp3"
	},
	{
		id: "2-corinthians-9-8-41",
		t: "God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.",
		r: "2 Corinthians 9:8",
		audio: "/audio/sweet/2-corinthians-9-8.mp3"
	},
	{
		id: "luke-12-24-42",
		t: "Consider the ravens: They do not sow or reap, they have no storeroom or barn; yet God feeds them. And how much more valuable you are than birds!",
		r: "Luke 12:24",
		audio: "/audio/sweet/luke-12-24.mp3"
	},
	{
		id: "psalm-34-9-10-43",
		t: "Those who fear the Lord lack nothing. The lions may grow weak and hungry, but those who seek the Lord lack no good thing.",
		r: "Psalm 34:9–10",
		audio: "/audio/sweet/psalm-34-9-10.mp3"
	},
	{
		id: "zephaniah-3-17-44",
		t: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will rejoice over you with singing.",
		r: "Zephaniah 3:17",
		audio: "/audio/sweet/zephaniah-3-17.mp3"
	},
	{
		id: "proverbs-3-5-6-45",
		t: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
		r: "Proverbs 3:5–6",
		audio: "/audio/sweet/proverbs-3-5-6.mp3"
	},
	{
		id: "proverbs-10-22-46",
		t: "The blessing of the Lord brings wealth, without painful toil for it.",
		r: "Proverbs 10:22",
		audio: "/audio/sweet/proverbs-10-22.mp3"
	},
	{
		id: "isaiah-40-31-47",
		t: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
		r: "Isaiah 40:31",
		audio: "/audio/sweet/isaiah-40-31.mp3"
	},
	{
		id: "isaiah-40-29-48",
		t: "He gives strength to the weary and increases the power of the weak.",
		r: "Isaiah 40:29",
		audio: "/audio/sweet/isaiah-40-29.mp3"
	},
	{
		id: "philippians-4-13-49",
		t: "I can do all things through Christ who strengthens me.",
		r: "Philippians 4:13",
		audio: "/audio/sweet/philippians-4-13.mp3"
	},
	{
		id: "romans-8-28-50",
		t: "And we know that in all things God works for the good of those who love him.",
		r: "Romans 8:28",
		audio: "/audio/sweet/romans-8-28.mp3"
	},
	{
		id: "romans-8-31-51",
		t: "If God is for us, who can be against us?",
		r: "Romans 8:31",
		audio: "/audio/sweet/romans-8-31.mp3"
	},
	{
		id: "romans-8-38-39-52",
		t: "Neither death nor life, neither angels nor demons, neither the present nor the future — nothing in all creation will be able to separate us from the love of God that is in Christ Jesus our Lord.",
		r: "Romans 8:38–39",
		audio: "/audio/sweet/romans-8-38-39.mp3"
	},
	{
		id: "2-corinthians-12-9-53",
		t: "My grace is sufficient for you, for my power is made perfect in weakness.",
		r: "2 Corinthians 12:9",
		fromGod: true,
		audio: "/audio/god/2cor-12-9.mp3"
	},
	{
		id: "jeremiah-29-11-54",
		t: "For I know the plans I have for you, declares the Lord — plans to prosper you and not to harm you, plans to give you hope and a future.",
		r: "Jeremiah 29:11",
		fromGod: true,
		audio: "/audio/god/jeremiah-29-11.mp3"
	},
	{
		id: "psalm-28-7-55",
		t: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
		r: "Psalm 28:7",
		audio: "/audio/sweet/psalm-28-7.mp3"
	},
	{
		id: "numbers-6-24-26-56",
		t: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
		r: "Numbers 6:24–26",
		audio: "/audio/sweet/numbers-6-24-26.mp3"
	},
	{
		id: "proverbs-18-10-57",
		t: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
		r: "Proverbs 18:10",
		audio: "/audio/sweet/proverbs-18-10.mp3"
	},
	{
		id: "psalm-30-5-58",
		t: "Weeping may stay for the night, but rejoicing comes in the morning.",
		r: "Psalm 30:5",
		audio: "/audio/sweet/psalm-30-5.mp3"
	},
	{
		id: "psalm-121-1-2-59",
		t: "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
		r: "Psalm 121:1–2",
		audio: "/audio/sweet/psalm-121-1-2.mp3"
	},
	{
		id: "psalm-51-10-60",
		t: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
		r: "Psalm 51:10",
		audio: "/audio/sweet/psalm-51-10.mp3"
	},
	{
		id: "tim-tebow-61",
		t: "Faith is not about everything turning out okay. Faith is about being okay no matter how things turn out.",
		r: "— Tim Tebow",
		q: true,
		audio: "/audio/sweet/tim-tebow-61.mp3"
	},
	{
		id: "tim-tebow-62",
		t: "If you are putting God first, everything else will fall into place.",
		r: "— Tim Tebow",
		q: true,
		audio: "/audio/sweet/tim-tebow-62.mp3"
	},
	{
		id: "tim-tebow-63",
		t: "I want to be remembered as someone who truly gave everything he had for the Lord and for others.",
		r: "— Tim Tebow",
		q: true,
		audio: "/audio/sweet/tim-tebow-63.mp3"
	},
	{
		id: "tim-tebow-64",
		t: "My purpose is to make a difference in people's lives. That is way more important than anything I will ever do on a field.",
		r: "— Tim Tebow",
		q: true,
		audio: "/audio/sweet/tim-tebow-64.mp3"
	},
	{
		id: "tim-tebow-65",
		t: "Hard work beats talent when talent doesn't work hard. But faith beats everything.",
		r: "— Tim Tebow",
		q: true,
		audio: "/audio/sweet/tim-tebow-65.mp3"
	},
	{
		id: "corrie-ten-boom-66",
		t: "There is no pit so deep that God's love is not deeper still.",
		r: "— Corrie ten Boom",
		q: true,
		audio: "/audio/sweet/corrie-ten-boom-66.mp3"
	},
	{
		id: "corrie-ten-boom-67",
		t: "Worry does not empty tomorrow of its sorrow; it empties today of its strength.",
		r: "— Corrie ten Boom",
		q: true,
		audio: "/audio/sweet/corrie-ten-boom-67.mp3"
	},
	{
		id: "corrie-ten-boom-68",
		t: "When a train goes through a tunnel and it gets dark, you don't throw away the ticket and jump off. You sit still and trust the engineer.",
		r: "— Corrie ten Boom",
		q: true,
		audio: "/audio/sweet/corrie-ten-boom-68.mp3"
	},
	{
		id: "nick-vujicic-69",
		t: "If you can't get a miracle, you can still be a miracle for someone else.",
		r: "— Nick Vujicic",
		q: true,
		audio: "/audio/sweet/nick-vujicic-69.mp3"
	},
	{
		id: "nick-vujicic-70",
		t: "If I can trust in God with my life the way it is, you can trust God with yours.",
		r: "— Nick Vujicic",
		q: true,
		audio: "/audio/sweet/nick-vujicic-70.mp3"
	},
	{
		id: "nick-vujicic-71",
		t: "God specializes in turning setbacks into comebacks.",
		r: "— Nick Vujicic",
		q: true,
		audio: "/audio/sweet/nick-vujicic-71.mp3"
	},
	{
		id: "nick-vujicic-72",
		t: "You may not have all you want, but you have everything you need for God's plan right now.",
		r: "— Nick Vujicic",
		q: true,
		audio: "/audio/sweet/nick-vujicic-72.mp3"
	},
	{
		id: "c-s-lewis-73",
		t: "I believe in Christianity as I believe that the sun has risen — not only because I see it, but because by it I see everything else.",
		r: "— C.S. Lewis",
		q: true,
		audio: "/audio/sweet/c-s-lewis-73.mp3"
	},
	{
		id: "c-s-lewis-74",
		t: "God cannot give us happiness and peace apart from Himself, because it is not there. There is no such thing.",
		r: "— C.S. Lewis",
		q: true,
		audio: "/audio/sweet/c-s-lewis-74.mp3"
	},
	{
		id: "c-s-lewis-75",
		t: "Hardships often prepare ordinary people for an extraordinary destiny.",
		r: "— C.S. Lewis",
		q: true,
		audio: "/audio/sweet/c-s-lewis-75.mp3"
	},
	{
		id: "c-s-lewis-76",
		t: "We are not necessarily doubting that God will do the best for us; we are wondering how painful the best will turn out to be.",
		r: "— C.S. Lewis",
		q: true,
		audio: "/audio/sweet/c-s-lewis-76.mp3"
	},
	{
		id: "billy-graham-77",
		t: "God proved His love on the Cross. When Christ hung, and bled, and died — it was God saying to the world: I love you.",
		r: "— Billy Graham",
		q: true,
		audio: "/audio/sweet/billy-graham-77.mp3"
	},
	{
		id: "billy-graham-78",
		t: "When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost.",
		r: "— Billy Graham",
		q: true,
		audio: "/audio/sweet/billy-graham-78.mp3"
	},
	{
		id: "billy-graham-79",
		t: "Do not have your concert first and tune your instrument afterward. Begin the day with God.",
		r: "— Billy Graham",
		q: true,
		audio: "/audio/sweet/billy-graham-79.mp3"
	},
	{
		id: "billy-graham-80",
		t: "Comfort and prosperity have never enriched the world as much as adversity has.",
		r: "— Billy Graham",
		q: true,
		audio: "/audio/sweet/billy-graham-80.mp3"
	},
	{
		id: "charles-spurgeon-81",
		t: "I have learned to kiss the wave that throws me against the Rock of Ages.",
		r: "— Charles Spurgeon",
		q: true,
		audio: "/audio/sweet/charles-spurgeon-81.mp3"
	},
	{
		id: "charles-spurgeon-82",
		t: "A Bible that is falling apart usually belongs to someone who isn't.",
		r: "— Charles Spurgeon",
		q: true,
		audio: "/audio/sweet/charles-spurgeon-82.mp3"
	},
	{
		id: "charles-spurgeon-83",
		t: "By perseverance the snail reached the ark.",
		r: "— Charles Spurgeon",
		q: true,
		audio: "/audio/sweet/charles-spurgeon-83.mp3"
	},
	{
		id: "joyce-meyer-84",
		t: "Courage is fear that has said its prayers and decided to go forward anyway.",
		r: "— Joyce Meyer",
		q: true,
		audio: "/audio/sweet/joyce-meyer-84.mp3"
	},
	{
		id: "joyce-meyer-85",
		t: "You cannot have a positive life and a negative mind.",
		r: "— Joyce Meyer",
		q: true,
		audio: "/audio/sweet/joyce-meyer-85.mp3"
	},
	{
		id: "joyce-meyer-86",
		t: "God never said the road would be easy, but He said He would be with us every step of the way.",
		r: "— Joyce Meyer",
		q: true,
		audio: "/audio/sweet/joyce-meyer-86.mp3"
	},
	{
		id: "max-lucado-87",
		t: "You weren't an accident. You weren't mass produced. You were deliberately planned, specifically gifted, and lovingly positioned on the earth by the Master Craftsman.",
		r: "— Max Lucado",
		q: true,
		audio: "/audio/sweet/max-lucado-87.mp3"
	},
	{
		id: "max-lucado-88",
		t: "God loves you just the way you are, but He refuses to leave you that way.",
		r: "— Max Lucado",
		q: true,
		audio: "/audio/sweet/max-lucado-88.mp3"
	},
	{
		id: "max-lucado-89",
		t: "Our God specializes in turning messes into miracles.",
		r: "— Max Lucado",
		q: true,
		audio: "/audio/sweet/max-lucado-89.mp3"
	},
	{
		id: "st-augustine-90",
		t: "Our heart is restless, O Lord, until it finds its rest in Thee.",
		r: "— St. Augustine",
		q: true,
		audio: "/audio/sweet/st-augustine-90.mp3"
	},
	{
		id: "st-augustine-91",
		t: "Faith is to believe what you do not see; the reward of this faith is to see what you believe.",
		r: "— St. Augustine",
		q: true,
		audio: "/audio/sweet/st-augustine-91.mp3"
	},
	{
		id: "martin-luther-king-jr-92",
		t: "Faith is taking the first step even when you don't see the whole staircase.",
		r: "— Martin Luther King Jr.",
		q: true,
		audio: "/audio/sweet/martin-luther-king-jr-92.mp3"
	},
	{
		id: "martin-luther-king-jr-93",
		t: "We must accept finite disappointment, but never lose infinite hope.",
		r: "— Martin Luther King Jr.",
		q: true,
		audio: "/audio/sweet/martin-luther-king-jr-93.mp3"
	},
	{
		id: "tony-evans-94",
		t: "God's favor is not based on your performance; it is based on your relationship with Him.",
		r: "— Tony Evans",
		q: true,
		audio: "/audio/sweet/tony-evans-94.mp3"
	},
	{
		id: "tony-evans-95",
		t: "When you are in your darkest moment, do not close your eyes. Open your Bible.",
		r: "— Tony Evans",
		q: true,
		audio: "/audio/sweet/tony-evans-95.mp3"
	},
	{
		id: "tony-evans-96",
		t: "You cannot fix yourself. But you can present yourself to the One who can.",
		r: "— Tony Evans",
		q: true,
		audio: "/audio/sweet/tony-evans-96.mp3"
	},
	{
		id: "oswald-chambers-97",
		t: "Faith is not a sense, nor sight, nor reason, but taking God at His Word.",
		r: "— Oswald Chambers",
		q: true,
		audio: "/audio/sweet/oswald-chambers-97.mp3"
	},
	{
		id: "oswald-chambers-98",
		t: "God does not give us overcoming life. He gives us life as we overcome.",
		r: "— Oswald Chambers",
		q: true,
		audio: "/audio/sweet/oswald-chambers-98.mp3"
	},
	{
		id: "john-1-1-99",
		t: "In the beginning was the Word, and the Word was with God, and the Word was God.",
		r: "John 1:1",
		audio: "/audio/sweet/john-1-1.mp3",
		fresh: true
	},
	{
		id: "john-1-14-100",
		t: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.",
		r: "John 1:14",
		audio: "/audio/sweet/john-1-14.mp3",
		fresh: true
	},
	{
		id: "luke-2-11-101",
		t: "Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.",
		r: "Luke 2:11",
		audio: "/audio/sweet/luke-2-11.mp3",
		fresh: true
	},
	{
		id: "mark-1-11-102",
		t: "And a voice came from heaven: You are my Son, whom I love; with you I am well pleased.",
		r: "Mark 1:11",
		fromGod: true,
		audio: "/audio/god/mark-1-11.mp3",
		fresh: true
	},
	{
		id: "john-6-35-103",
		t: "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.",
		r: "John 6:35",
		fromGod: true,
		audio: "/audio/god/john-6-35.mp3",
		fresh: true
	},
	{
		id: "luke-23-34-104",
		t: "Father, forgive them, for they do not know what they are doing.",
		r: "Luke 23:34",
		fromGod: true,
		audio: "/audio/god/luke-23-34.mp3",
		fresh: true
	},
	{
		id: "luke-24-6-105",
		t: "He is not here; he has risen! Remember how he told you, while he was still with you in Galilee.",
		r: "Luke 24:6",
		audio: "/audio/sweet/luke-24-6.mp3",
		fresh: true
	},
	{
		id: "acts-1-8-106",
		t: "You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
		r: "Acts 1:8",
		fromGod: true,
		audio: "/audio/god/acts-1-8.mp3",
		fresh: true
	},
	{
		id: "romans-10-9-107",
		t: "If you declare with your mouth, Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.",
		r: "Romans 10:9",
		audio: "/audio/sweet/romans-10-9.mp3",
		fresh: true
	},
	{
		id: "revelation-3-20-108",
		t: "Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.",
		r: "Revelation 3:20",
		fromGod: true,
		audio: "/audio/god/revelation-3-20.mp3",
		fresh: true
	}
];
var BIBLE_VERSE_COUNT = 31102;
function isScripture(v) {
	return !v.q && !v.sermon;
}
function makeAddedVerse(text, ref, kind) {
	return {
		id: `added-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
		t: text,
		r: ref,
		q: kind === "quote",
		added: true,
		fresh: true
	};
}
/** Needle-drop + hiss + hum. Spoken lines only. */
var TapeAmbience = class {
	ctx = null;
	hiss = null;
	hum = null;
	master = null;
	async ensure() {
		if (!this.ctx) this.ctx = new AudioContext();
		if (this.ctx.state === "suspended") await this.ctx.resume();
		return this.ctx;
	}
	async needleDrop() {
		const ctx = await this.ensure();
		const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * .55), ctx.sampleRate);
		const data = buf.getChannelData(0);
		for (let i = 0; i < data.length; i++) {
			const t = i / data.length;
			const env = t < .15 ? t / .15 : Math.pow(1 - (t - .15) / .85, 2.2);
			data[i] = (Math.random() * 2 - 1) * env * .35;
		}
		const src = ctx.createBufferSource();
		src.buffer = buf;
		const bp = ctx.createBiquadFilter();
		bp.type = "bandpass";
		bp.frequency.value = 1400;
		bp.Q.value = .7;
		const g = ctx.createGain();
		g.gain.value = .22;
		src.connect(bp);
		bp.connect(g);
		g.connect(ctx.destination);
		src.start();
	}
	async startLoop() {
		const ctx = await this.ensure();
		this.stopLoop();
		this.master = ctx.createGain();
		this.master.gain.value = 1e-4;
		this.master.connect(ctx.destination);
		this.master.gain.linearRampToValueAtTime(1, ctx.currentTime + .4);
		const hissLen = ctx.sampleRate * 2;
		const hissBuf = ctx.createBuffer(1, hissLen, ctx.sampleRate);
		const hd = hissBuf.getChannelData(0);
		for (let i = 0; i < hissLen; i++) hd[i] = Math.random() * 2 - 1;
		this.hiss = ctx.createBufferSource();
		this.hiss.buffer = hissBuf;
		this.hiss.loop = true;
		const hp = ctx.createBiquadFilter();
		hp.type = "highpass";
		hp.frequency.value = 800;
		const lp = ctx.createBiquadFilter();
		lp.type = "lowpass";
		lp.frequency.value = 4200;
		const hg = ctx.createGain();
		hg.gain.value = .016;
		this.hiss.connect(hp);
		hp.connect(lp);
		lp.connect(hg);
		hg.connect(this.master);
		this.hiss.start();
		this.hum = ctx.createOscillator();
		this.hum.type = "sine";
		this.hum.frequency.value = 58;
		const humG = ctx.createGain();
		humG.gain.value = .012;
		this.hum.connect(humG);
		humG.connect(this.master);
		this.hum.start();
	}
	stopLoop() {
		try {
			this.hiss?.stop();
		} catch {}
		try {
			this.hum?.stop();
		} catch {}
		this.hiss = null;
		this.hum = null;
		if (this.master && this.ctx) try {
			this.master.gain.linearRampToValueAtTime(1e-4, this.ctx.currentTime + .25);
		} catch {}
		this.master = null;
	}
};
var tape = new TapeAmbience();
var SWEET_HINTS = [
	"samantha",
	"victoria",
	"karen",
	"moira",
	"fiona",
	"tessa",
	"zira",
	"female",
	"siri",
	"google uk english female",
	"microsoft zira",
	"eva",
	"allison"
];
var GOD_HINTS = [
	"daniel",
	"alex",
	"david",
	"fred",
	"google uk english male",
	"microsoft david",
	"male",
	"daniel (english (united kingdom))",
	"rishi",
	"arthur",
	"aaron"
];
function scoreVoice(v, hints, preferLang = "en") {
	const name = v.name.toLowerCase();
	const lang = v.lang.toLowerCase();
	let s = 0;
	if (lang.startsWith(preferLang)) s += 4;
	if (lang.startsWith("en-gb") || lang.startsWith("en-us")) s += 2;
	for (const h of hints) if (name.includes(h)) s += 8;
	if (v.localService) s += 1;
	return s;
}
function pick(voices, hints) {
	if (!voices.length) return null;
	return [...voices].sort((a, b) => scoreVoice(b, hints) - scoreVoice(a, hints))[0] ?? null;
}
function delay(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
var VoiceEngine = class {
	voices = [];
	current = null;
	audio = null;
	token = 0;
	ended = true;
	waiters = [];
	constructor() {
		if (typeof window === "undefined") return;
		this.refresh();
		window.speechSynthesis?.addEventListener?.("voiceschanged", () => this.refresh());
	}
	refresh() {
		this.voices = window.speechSynthesis?.getVoices() ?? [];
		for (const w of this.waiters) w();
		this.waiters = [];
	}
	async waitVoices() {
		this.refresh();
		if (this.voices.length) return;
		await new Promise((resolve) => {
			const t = window.setTimeout(resolve, 800);
			this.waiters.push(() => {
				window.clearTimeout(t);
				resolve();
			});
		});
		this.refresh();
	}
	kindFor(v) {
		if (v.fromGod) return "god";
		if (v.sermon) return "sermon";
		if (v.q) return "quote";
		return "sweet";
	}
	async unlock() {
		await tape.ensure();
		await this.waitVoices();
	}
	stop() {
		this.token += 1;
		this.ended = true;
		tape.stopLoop();
		this.current = null;
		this.killAudio();
		try {
			window.speechSynthesis?.cancel();
		} catch {}
	}
	killAudio() {
		if (!this.audio) return;
		try {
			this.audio.pause();
			this.audio.src = "";
		} catch {}
		this.audio = null;
	}
	async speak(verse, opts = {}) {
		this.stop();
		const mine = this.token;
		this.ended = false;
		await this.waitVoices();
		if (this.token !== mine) return;
		const kind = this.kindFor(verse);
		if (kind === "god") {
			await tape.needleDrop();
			if (this.token !== mine) return;
			await tape.startLoop();
			await delay(420);
			if (this.token !== mine) {
				tape.stopLoop();
				return;
			}
		}
		opts.onStart?.(kind);
		if (verse.audio) {
			const played = await this.playUrl(verse.audio, mine);
			if (this.token === mine) {
				tape.stopLoop();
				if (played) {
					if (!this.ended) opts.onEnd?.();
					return;
				}
			} else return;
		}
		if (this.token !== mine) return;
		await this.speakFallback(verse.t, kind, mine);
		if (this.token === mine) {
			tape.stopLoop();
			if (!this.ended) opts.onEnd?.();
		}
	}
	playUrl(src, mine) {
		this.killAudio();
		return new Promise((resolve) => {
			const el = new Audio(src);
			this.audio = el;
			let settled = false;
			const done = (ok) => {
				if (settled) return;
				settled = true;
				window.clearInterval(watch);
				el.onended = null;
				el.onerror = null;
				if (this.audio === el) this.audio = null;
				resolve(ok);
			};
			const watch = window.setInterval(() => {
				if (this.token !== mine) done(true);
			}, 200);
			el.onended = () => done(true);
			el.onerror = () => done(false);
			el.play().catch(() => done(false));
		});
	}
	speakFallback(text, kind, mine) {
		const minMs = Math.max(1600, Math.min(2e4, text.length * 55));
		if (typeof window === "undefined" || !window.speechSynthesis) return delay(minMs);
		return new Promise((resolve) => {
			const utter = new SpeechSynthesisUtterance(text);
			const sweet = pick(this.voices, SWEET_HINTS);
			const god = pick(this.voices, GOD_HINTS);
			if (kind === "god") {
				utter.voice = god ?? sweet;
				utter.rate = .72;
				utter.pitch = .68;
				utter.volume = 1;
			} else if (kind === "quote" || kind === "sermon") {
				utter.voice = sweet ?? god;
				utter.rate = .88;
				utter.pitch = 1.02;
				utter.volume = .94;
			} else {
				utter.voice = sweet ?? god;
				utter.rate = .84;
				utter.pitch = 1.04;
				utter.volume = .95;
			}
			this.current = utter;
			let settled = false;
			const finish = () => {
				if (settled) return;
				settled = true;
				if (this.current === utter) this.current = null;
				resolve();
			};
			utter.onend = finish;
			utter.onerror = finish;
			try {
				window.speechSynthesis.cancel();
				window.speechSynthesis.speak(utter);
			} catch {
				finish();
			}
			window.setTimeout(() => {
				if (this.token !== mine || this.current === utter) finish();
			}, minMs + 400);
		});
	}
};
var voiceEngine = new VoiceEngine();
function todayKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function parseKey(key) {
	const [y, m, d] = key.split("-").map(Number);
	return new Date(y, m - 1, d);
}
function daysBetween(fromKey, toKey) {
	const a = parseKey(fromKey).getTime();
	const b = parseKey(toKey).getTime();
	return Math.max(0, Math.round((b - a) / 864e5));
}
function msUntilNextMidnight(now = /* @__PURE__ */ new Date()) {
	const next = new Date(now);
	next.setHours(24, 0, 2, 0);
	return next.getTime() - now.getTime();
}
function formatRemain(ms) {
	const s = Math.max(0, Math.floor(ms / 1e3));
	const h = Math.floor(s / 3600);
	const m = Math.floor(s % 3600 / 60);
	const sec = s % 60;
	return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function formatClock(d = /* @__PURE__ */ new Date()) {
	return d.toLocaleTimeString(void 0, {
		hour: "numeric",
		minute: "2-digit"
	});
}
var K = {
	added: "sb_added_verses",
	favs: "sb_favorites",
	unlockDate: "sb_unlock_date",
	unlockNights: "sb_unlock_nights",
	actuals: "sb_timecheck_actuals",
	weekStart: "sb_timecheck_week",
	heard: "sb_has_heard"
};
function read(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function write(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function loadAdded() {
	return read(K.added, []);
}
function saveAdded(v) {
	write(K.added, v);
}
function loadFavs() {
	return read(K.favs, []);
}
function saveFavs(v) {
	write(K.favs, v);
}
function loadUnlock() {
	return {
		date: read(K.unlockDate, null),
		nights: read(K.unlockNights, 0)
	};
}
function saveUnlock(date, nights) {
	write(K.unlockDate, date);
	write(K.unlockNights, nights);
}
function loadActuals() {
	const v = read(K.actuals, [
		null,
		null,
		null,
		null,
		null
	]);
	if (!Array.isArray(v) || v.length !== 5) return [
		null,
		null,
		null,
		null,
		null
	];
	return v;
}
function saveActuals(v) {
	write(K.actuals, v);
}
function loadWeekStart() {
	return read(K.weekStart, null);
}
function saveWeekStart(v) {
	write(K.weekStart, v);
}
var CATCHUP_CAP = 5;
function buildUnlocked(now = /* @__PURE__ */ new Date()) {
	const today = todayKey(now);
	const added = loadAdded();
	const stored = loadUnlock();
	let nights = stored.nights;
	let lastDate = stored.date;
	let justUnlocked = [];
	const firstVisit = !lastDate;
	if (!lastDate || nights < 1) {
		lastDate = today;
		nights = Math.max(1, nights);
		justUnlocked = CATALOG_VERSES.slice(0, 10);
		saveUnlock(lastDate, nights);
	} else if (lastDate < today) {
		const missed = Math.min(daysBetween(lastDate, today), CATCHUP_CAP);
		const from = nights * 10;
		justUnlocked = CATALOG_VERSES.slice(from, from + missed * 10);
		nights += missed;
		lastDate = today;
		saveUnlock(lastDate, nights);
	}
	const fromCatalog = CATALOG_VERSES.slice(0, nights * 10);
	const todayBatch = fromCatalog.slice(Math.max(0, (nights - 1) * 10));
	const olderCatalog = fromCatalog.slice(0, Math.max(0, (nights - 1) * 10));
	const fresh = START_VERSES.filter((v) => v.fresh);
	const restStart = START_VERSES.filter((v) => !v.fresh);
	const verses = firstVisit ? [
		...fresh,
		...todayBatch,
		...SERMONS,
		...restStart,
		...added
	] : [
		...todayBatch,
		...SERMONS,
		...START_VERSES,
		...olderCatalog,
		...added
	];
	const catalogLeft = Math.max(0, CATALOG_VERSES.length - nights * 10);
	return {
		verses,
		nights,
		lastDate,
		justUnlocked,
		catalogLeft,
		firstVisit
	};
}
var DAY_NAMES = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday"
];
function mondayOf(d = /* @__PURE__ */ new Date()) {
	const day = d.getDay();
	const offset = day === 0 ? -6 : 1 - day;
	const mon = new Date(d.getFullYear(), d.getMonth(), d.getDate() + offset);
	mon.setHours(0, 0, 0, 0);
	return mon;
}
function mondayKey(d = /* @__PURE__ */ new Date()) {
	return todayKey(mondayOf(d));
}
function weekDates(monday = mondayOf()) {
	return DAY_NAMES.map((name, i) => {
		const d = new Date(monday);
		d.setDate(monday.getDate() + i);
		return {
			name,
			date: d.toLocaleDateString(void 0, {
				month: "short",
				day: "numeric"
			}),
			iso: todayKey(d)
		};
	});
}
/** 0–4 Mon–Fri; -1 on weekend */
function todayWorkIndex(d = /* @__PURE__ */ new Date()) {
	const js = d.getDay();
	if (js >= 1 && js <= 5) return js - 1;
	return -1;
}
function formatHours(n) {
	return n.toFixed(2);
}
var toastTimer;
var useSanctuary = create((set, get) => ({
	ready: false,
	verses: START_VERSES,
	nights: 0,
	lastUnlock: "",
	catalogLeft: CATALOG_VERSES.length,
	justUnlocked: [],
	firstVisit: true,
	favorites: [],
	added: [],
	actuals: [
		null,
		null,
		null,
		null,
		null
	],
	weekStart: "",
	panel: null,
	toast: null,
	hydrate: () => {
		const unlocked = buildUnlocked();
		const week = mondayKey();
		const storedWeek = loadWeekStart();
		let actuals = loadActuals();
		if (storedWeek !== week) {
			actuals = [
				null,
				null,
				null,
				null,
				null
			];
			saveWeekStart(week);
			saveActuals(actuals);
		}
		set({
			ready: true,
			verses: unlocked.verses,
			nights: unlocked.nights,
			lastUnlock: unlocked.lastDate,
			catalogLeft: unlocked.catalogLeft,
			justUnlocked: unlocked.justUnlocked,
			firstVisit: unlocked.firstVisit,
			favorites: loadFavs(),
			added: unlocked.verses.filter((v) => v.added),
			actuals,
			weekStart: week
		});
	},
	applyMidnightUnlock: () => {
		const prevDate = get().lastUnlock;
		const unlocked = buildUnlocked();
		if (!unlocked.justUnlocked.length) return;
		if (unlocked.lastDate === prevDate) return;
		set({
			verses: unlocked.verses,
			nights: unlocked.nights,
			lastUnlock: unlocked.lastDate,
			catalogLeft: unlocked.catalogLeft,
			justUnlocked: unlocked.justUnlocked,
			firstVisit: false
		});
		get().showToast("Ten new passages have been opened for this day");
	},
	toggleFav: (v) => {
		const favs = get().favorites;
		const next = favs.includes(v.t) ? favs.filter((t) => t !== v.t) : [...favs, v.t];
		saveFavs(next);
		set({ favorites: next });
		get().showToast(next.includes(v.t) ? "Kept in your saved verses" : "Removed from saved");
	},
	addVerse: (text, ref, kind) => {
		const t = text.trim();
		if (!t) {
			get().showToast("Add the verse text first");
			return null;
		}
		const entry = makeAddedVerse(t, ref.trim(), kind);
		const added = [...get().added, entry];
		saveAdded(added);
		set({
			added,
			verses: [...get().verses, entry],
			panel: null
		});
		get().showToast("Added to your display");
		return entry;
	},
	setPanel: (panel) => set({ panel }),
	setActual: (i, val) => {
		const actuals = [...get().actuals];
		actuals[i] = val;
		saveActuals(actuals);
		set({ actuals });
	},
	resetWeek: () => {
		const actuals = [
			null,
			null,
			null,
			null,
			null
		];
		saveActuals(actuals);
		saveWeekStart(mondayKey());
		set({
			actuals,
			weekStart: mondayKey()
		});
		get().showToast("Week cleared");
	},
	showToast: (msg) => {
		if (toastTimer) window.clearTimeout(toastTimer);
		set({ toast: msg });
		toastTimer = window.setTimeout(() => set({ toast: null }), 2400);
	},
	clearJustUnlocked: () => set({ justUnlocked: [] })
}));
function AddPanel({ open, onClose, onSave }) {
	const [text, setText] = (0, import_react.useState)("");
	const [ref, setRef] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("scripture");
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-center justify-center bg-bg/96 px-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-shell flex w-full max-w-[520px] flex-col gap-4 p-7",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.62rem] tracking-[0.3em] text-gold/60 uppercase",
					children: "Add a verse or saying"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "add-text",
					rows: 4,
					value: text,
					onChange: (e) => setText(e.target.value),
					placeholder: "Type the verse or quote here...",
					className: "font-serif w-full resize-none rounded-[8px] border border-gold/22 bg-bg px-4 py-3 text-[1.05rem] text-fg italic outline-none focus:border-gold/50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: ref,
					onChange: (e) => setRef(e.target.value),
					placeholder: "Reference — e.g. Psalm 27:1  or  — a godly saying",
					className: "w-full rounded-[8px] border border-gold/22 bg-bg px-4 py-3 text-[0.78rem] tracking-wide text-fg outline-none focus:border-gold/50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.6rem] tracking-[0.15em] text-gold/45 uppercase",
						children: "Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex overflow-hidden rounded-[8px] border border-gold/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `px-3.5 py-1.5 text-[0.6rem] tracking-[0.12em] uppercase ${kind === "scripture" ? "bg-gold/12 text-gold" : "text-gold/40"}`,
							onClick: () => setKind("scripture"),
							children: "Scripture"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `px-3.5 py-1.5 text-[0.6rem] tracking-[0.12em] uppercase ${kind === "quote" ? "bg-gold/12 text-gold" : "text-gold/40"}`,
							onClick: () => setKind("quote"),
							children: "Quote"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-[8px] border border-gold/15 px-4 py-2 text-[0.6rem] tracking-[0.12em] text-gold/40 uppercase",
						onClick: onClose,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-[8px] border border-gold/35 bg-gold/10 px-4 py-2 text-[0.6rem] tracking-[0.12em] text-gold uppercase hover:bg-gold/18",
						onClick: () => {
							onSave(text, ref, kind);
							setText("");
							setRef("");
							setKind("scripture");
						},
						children: "Save to display"
					})]
				})
			]
		})
	});
}
function FavPanel({ open, verses, onClose, onPick }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 flex items-center justify-center bg-bg/96 px-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-shell flex max-h-[80vh] w-full max-w-[560px] flex-col gap-4 p-7",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.62rem] tracking-[0.3em] text-gold/60 uppercase",
					children: "Saved verses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-[8px] border border-gold/15 px-4 py-2 text-[0.6rem] tracking-[0.12em] text-gold/40 uppercase",
					onClick: onClose,
					children: "Close"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sanctuary-scroll flex flex-col gap-3 overflow-y-auto pr-1",
				children: verses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-[0.7rem] tracking-[0.15em] text-gold/30 uppercase",
					children: "No saved verses yet. Tap the heart on any passage."
				}) : verses.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "rounded-[8px] border border-gold/10 bg-gold/[0.04] px-4 py-3 text-left hover:border-gold/30",
					onClick: () => onPick(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-[0.95rem] leading-relaxed text-fg italic",
						children: v.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-[0.58rem] tracking-[0.2em] text-gold/50 uppercase",
						children: [v.r, v.fromGod ? " · spoken Word" : ""]
					})]
				}, v.id))
			})]
		})
	});
}
function Controls({ paused, muted, fullscreen, timeOpen, savedCount, onPrev, onTogglePause, onMute, onFavs, onAdd, onTime, onFullscreen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-3 right-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "ctrl-btn",
				onClick: onPrev,
				title: "Previous (←)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Prev"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "ctrl-btn",
				onClick: onTogglePause,
				title: "Pause / resume (Space)",
				children: [paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: paused ? "Resume" : "Pause"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `ctrl-btn ${muted ? "" : "active"}`,
				onClick: onMute,
				title: "Voice",
				children: [muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden md:inline",
					children: muted ? "Silent" : "Voice"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "ctrl-btn",
				onClick: onFavs,
				title: "Saved verses",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Saved"
					}),
					savedCount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums opacity-70",
						children: savedCount
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "ctrl-btn",
				onClick: onAdd,
				title: "Add a verse (A)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Add"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `ctrl-btn hours-mobile-only ${timeOpen ? "active" : ""}`,
				onClick: onTime,
				title: "Time keeper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden sm:inline",
					children: "Hours"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "ctrl-btn",
				onClick: onFullscreen,
				title: "Fullscreen (F)",
				children: [fullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden md:inline",
					children: "Full"
				})]
			})
		]
	});
}
function scriptureOf(verses) {
	return verses.filter(isScripture).length;
}
function remainingVerses(have) {
	return Math.max(0, BIBLE_VERSE_COUNT - have);
}
function nightsLeft(have) {
	return Math.ceil(remainingVerses(have) / 10);
}
function formatSpan(nights) {
	const years = nights / 365.25;
	const y = Math.floor(years);
	const months = Math.round((years - y) * 12);
	if (y <= 0) {
		if (nights <= 1) return "tonight";
		if (nights < 45) return `${nights} nights`;
		return `${months} month${months === 1 ? "" : "s"}`;
	}
	if (months === 0) return `${y} year${y === 1 ? "" : "s"}`;
	if (months === 12) return `${y + 1} years`;
	return `${y} year${y === 1 ? "" : "s"}, ${months} month${months === 1 ? "" : "s"}`;
}
function formatInt(n) {
	return n.toLocaleString("en-US");
}
function JourneyStrip({ verses, catalogLeft }) {
	const have = scriptureOf(verses);
	const remain = remainingVerses(have);
	const nights = nightsLeft(have);
	const pct = Math.min(100, have / BIBLE_VERSE_COUNT * 100);
	const [until, setUntil] = (0, import_react.useState)(msUntilNextMidnight());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setUntil(msUntilNextMidnight()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const hrs = Math.floor(until / 36e5);
	const mins = Math.floor(until % 36e5 / 6e4);
	const midnightLabel = hrs >= 1 ? `${hrs}h ${mins}m until midnight` : `${mins}m until midnight`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute bottom-10 left-1/2 z-10 w-[min(28rem,calc(100%-1.5rem))] -translate-x-1/2 md:bottom-7 md:w-[min(28.75rem,calc(100%-8rem))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[10px] border border-gold/10 bg-bg/50 px-3 py-2 backdrop-blur-[2px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex items-center justify-between gap-2 text-[0.52rem] tracking-[0.14em] text-gold/45 uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						formatInt(have),
						" of ",
						formatInt(BIBLE_VERSE_COUNT),
						" verses"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: catalogLeft > 0 ? `Next 10 at midnight · ${midnightLabel}` : `${formatClock()} · treasury growing by your hand` })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px w-full bg-gold/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px bg-gold/55",
						style: { width: `${Math.max(pct, .4)}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-center text-[0.52rem] tracking-[0.12em] text-gold/35 uppercase",
					children: [
						formatInt(remain),
						" remaining · ",
						formatInt(nights),
						" nights · ",
						formatSpan(nights)
					]
				})
			]
		})
	});
}
function CrossMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		width: "120",
		height: "170",
		viewBox: "0 0 120 170",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "52",
			y: "8",
			width: "16",
			height: "154",
			fill: "#c8a96e"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "16",
			y: "52",
			width: "88",
			height: "16",
			fill: "#c8a96e"
		})]
	});
}
function ListenGate({ scriptureNow, quotesNow, sermonsNow, givenToday, firstVisit, onBegin }) {
	const remain = remainingVerses(scriptureNow);
	const nights = nightsLeft(scriptureNow);
	const span = formatSpan(nights);
	const held = Math.max(0, scriptureNow - givenToday);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossMark, { className: "pointer-events-none absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-5 pt-8 pb-4 text-center sm:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-2.5 sm:mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "top-kicker",
								children: "The Word of God"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/25" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-balance text-[1.55rem] leading-snug text-fg italic sm:text-[2.15rem]",
						children: "Hear the Word. Keep the hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-pretty text-[0.82rem] leading-relaxed text-muted sm:mt-5 sm:text-sm",
						children: "A sweet voice reads each passage — soft, never a machine. When the words are the Lord's own, spoken in the first person, you hear them as a recording. Along the way, a short sermon from the old preachers is laid among the verses."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid w-full grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: formatInt(scriptureNow),
								label: "Scripture now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: `+${givenToday}`,
								label: "Given this day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: formatInt(BIBLE_VERSE_COUNT),
								label: "In the whole Bible"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								value: formatInt(nights),
								label: "Nights at ten a day"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-pretty text-[0.72rem] leading-relaxed text-gold/70 sm:mt-6 sm:text-[0.8rem]",
						children: firstVisit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"You already held ",
							formatInt(held),
							" passages of Scripture",
							quotesNow ? ` and ${quotesNow} godly sayings` : "",
							sermonsNow ? `, with ${sermonsNow} short sermons` : "",
							". Ten more were opened this morning — the story of Jesus, from the Word made flesh to the empty tomb. Ten more are given now, as you begin. At",
							" ",
							10,
							" verses a night, the remaining ",
							formatInt(remain),
							" take",
							" ",
							span,
							". Tonight at midnight, ten more will be given. We start now."
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"You hold ",
							formatInt(held),
							" passages of Scripture",
							quotesNow ? ` and ${quotesNow} godly sayings` : "",
							sermonsNow ? `, with ${sermonsNow} short sermons` : "",
							givenToday ? `. ${formatInt(givenToday)} more opened for this day` : "",
							". At ",
							10,
							" verses a night, the remaining ",
							formatInt(remain),
							" take",
							" ",
							span,
							". The next ten arrive at midnight."
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MidnightClock, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onBegin,
					className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-gold/40 bg-gold/10 px-8 text-[0.72rem] tracking-[0.18em] text-gold uppercase transition-colors duration-200 hover:bg-gold/16 sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "Listen"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 pb-2 text-center text-[0.58rem] tracking-[0.14em] text-gold/35 uppercase sm:text-[0.62rem] sm:tracking-[0.16em]",
					children: "Space to pause · arrows to turn · hours at your right hand"
				})]
			})
		]
	});
}
function MidnightClock() {
	const [remain, setRemain] = (0, import_react.useState)(msUntilNextMidnight());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setRemain(msUntilNextMidnight()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 sm:mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "top-kicker",
				children: "Tonight at midnight"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 font-serif text-[1.65rem] leading-none text-divine tabular-nums sm:text-[1.9rem]",
				children: formatRemain(remain)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[0.55rem] tracking-[0.16em] text-gold/40 uppercase",
				children: "until ten more open"
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[10px] border border-gold/12 bg-surface px-2.5 py-2.5 sm:px-3 sm:py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-serif text-lg text-divine tabular-nums sm:text-xl",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[0.52rem] tracking-[0.12em] text-muted uppercase sm:text-[0.58rem] sm:tracking-[0.14em]",
			children: label
		})]
	});
}
function TimeKeeper({ actuals, onChange, onReset, compact }) {
	const dates = weekDates();
	const todayIdx = todayWorkIndex();
	const worked = actuals.reduce((s, n) => s + (n ?? 0), 0);
	const completed = actuals.filter((a) => a !== null).length;
	const remainingHrs = Math.max(0, 55 - worked);
	const remainingDays = 5 - completed;
	const perDay = remainingDays > 0 ? remainingHrs / remainingDays : 0;
	const pct = Math.min(worked / 55, 1);
	const circ = 2 * Math.PI * 52;
	const offset = circ - pct * circ;
	const stroke = worked >= 55 ? "var(--color-info)" : pct < .45 && completed > 0 ? "var(--color-warn)" : "var(--color-ok)";
	let banner = `Default target: ${formatHours(11)} hrs a day`;
	let bannerClass = "text-ok bg-ok/10";
	if (worked >= 55) {
		banner = "Fifty-five hours — the week is complete";
		bannerClass = "text-info bg-info/10";
	} else if (completed > 0) {
		const diff = worked - completed * 11;
		if (diff >= 0) {
			banner = diff < .01 ? "On track" : `On track — ahead by ${formatHours(diff)} hrs`;
			bannerClass = "text-ok bg-ok/10";
		} else {
			banner = `Behind by ${formatHours(Math.abs(diff))} — need ${formatHours(perDay)} / day`;
			bannerClass = "text-warn bg-warn/10";
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: ["flex h-full min-h-dvh flex-col border-gold/15 bg-surface", compact ? "border-t" : "border-l"].join(" "),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-gold/12 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.58rem] tracking-[0.28em] text-gold/60 uppercase",
						children: "Time Keeper"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-lg text-fg",
						children: "Fifty-five hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] text-muted",
						children: "The work of your hands, for those you love"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[132px] w-[132px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "132",
						height: "132",
						viewBox: "0 0 132 132",
						className: "-rotate-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "66",
							cy: "66",
							r: "52",
							fill: "none",
							stroke: "var(--color-ring-track)",
							strokeWidth: "10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							className: "ring-fill",
							cx: "66",
							cy: "66",
							r: "52",
							fill: "none",
							stroke,
							strokeWidth: "10",
							strokeLinecap: "round",
							strokeDasharray: circ,
							strokeDashoffset: offset
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold text-fg tabular-nums",
							children: formatHours(worked)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.58rem] tracking-[0.14em] text-muted uppercase",
							children: ["of ", 55]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-3 rounded-[8px] px-3 py-1.5 text-center text-[0.68rem] ${bannerClass}`,
					children: banner
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 space-y-2 overflow-y-auto px-3 pb-3 sanctuary-scroll",
				children: dates.map((d, i) => {
					const done = actuals[i] !== null;
					const isToday = i === todayIdx;
					const target = done ? actuals[i] : perDay || 11;
					const diff = done ? actuals[i] - 11 : 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: [
							"rounded-[12px] border px-3 py-2.5",
							isToday ? "border-ok/50 bg-surface-2" : "border-gold/12 bg-bg/40",
							done ? "opacity-90" : ""
						].join(" "),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[0.62rem] font-medium tracking-[0.16em] text-muted uppercase",
									children: [d.name, isToday ? " · today" : ""]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.62rem] text-muted/70",
									children: d.date
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.52rem] tracking-[0.12em] text-muted uppercase",
										children: done ? "Actual" : "Target"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-lg text-gold tabular-nums",
										children: formatHours(target)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursInput, {
								value: actuals[i],
								placeholder: formatHours(target),
								label: `Actual hours for ${d.name}`,
								onCommit: (val) => onChange(i, val)
							}),
							done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: ["mt-1.5 text-center text-[0.62rem]", Math.abs(diff) < .01 ? "text-info" : diff > 0 ? "text-ok" : "text-warn"].join(" "),
								children: Math.abs(diff) < .01 ? "Exact" : diff > 0 ? `+${formatHours(diff)} ahead` : `${formatHours(diff)} short`
							}) : null
						]
					}, d.iso);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2 border-t border-gold/12 px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sum, {
						val: formatHours(worked),
						label: "Worked"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sum, {
						val: formatHours(remainingHrs),
						label: "Left"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sum, {
						val: remainingDays ? formatHours(perDay) : "—",
						label: "Need / day"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mx-3 mb-3 min-h-10 rounded-[8px] border border-gold/15 text-[0.62rem] tracking-[0.14em] text-muted uppercase hover:border-warn/40 hover:text-warn",
				onClick: (e) => {
					e.stopPropagation();
					if (window.confirm("Reset all entries for this week?")) onReset();
				},
				children: "Reset week"
			})
		]
	});
}
function HoursInput({ value, placeholder, label, onCommit }) {
	const [raw, setRaw] = (0, import_react.useState)(value == null ? "" : formatHours(value));
	(0, import_react.useEffect)(() => {
		setRaw(value == null ? "" : formatHours(value));
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-1.5 block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "mt-1 h-10 w-full rounded-[8px] border border-gold/18 bg-bg text-center text-sm font-medium text-fg outline-none focus:border-gold/50",
			type: "text",
			inputMode: "decimal",
			placeholder,
			value: raw,
			onChange: (e) => setRaw(e.target.value),
			onBlur: () => {
				if (raw.trim() === "") onCommit(null);
				else {
					const n = parseFloat(raw);
					onCommit(Number.isFinite(n) ? Math.max(0, Math.min(24, n)) : null);
				}
			},
			onClick: (e) => e.stopPropagation(),
			onFocus: (e) => e.currentTarget.select()
		})]
	});
}
function Sum({ val, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-base font-semibold text-fg tabular-nums",
			children: val
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[0.55rem] tracking-[0.12em] text-muted uppercase",
			children: label
		})]
	});
}
function pillLabel(kind) {
	if (kind === "god") return "Spoken Word · a recording";
	if (kind === "sermon") return "A short sermon · sweet voice";
	if (kind === "quote") return "A godly saying · sweet voice";
	return "Sweet voice";
}
function VerseStage({ verse, opacity, index, total, favored, speaking, kind, paused, onFav }) {
	const isGod = Boolean(verse.fromGod);
	const isQuote = Boolean(verse.q);
	const isSermon = Boolean(verse.sermon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 flex-col items-center justify-center px-5 py-16 sm:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossMark, { className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] opacity-[0.04]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "top-kicker whitespace-nowrap",
						children: "The Word of God"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/25" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 w-full max-w-[700px] text-center",
				style: {
					opacity,
					transition: "opacity 1.8s ease-in-out"
				},
				children: [
					isGod ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordingBadge, { active: speaking && kind === "god" }) : null,
					isSermon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SermonBadge, {}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-hairline mx-auto w-9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: ["font-serif my-8 text-pretty text-[clamp(1.2rem,2.4vw,1.85rem)] leading-[1.95] tracking-[0.02em]", isGod ? "text-divine not-italic" : isSermon ? "text-vellum not-italic" : isQuote ? "text-vellum not-italic" : "text-fg italic"].join(" "),
						children: [
							isQuote || isGod || isSermon ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-0.5 text-gold/40 not-italic",
								children: "“"
							}),
							verse.t,
							isQuote || isGod || isSermon ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold/40 not-italic",
								children: "”"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: ["text-[0.67rem] tracking-[0.26em] uppercase", isGod ? "text-divine/80 tracking-[0.18em]" : isSermon ? "text-gold/80 tracking-[0.16em]" : "text-gold/70"].join(" "),
						children: verse.r
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-hairline mx-auto mt-8 w-9" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						title: "Save this passage",
						onClick: (e) => {
							e.stopPropagation();
							onFav();
						},
						className: ["absolute top-1/2 -right-2 hidden -translate-y-1/2 p-2 transition-opacity sm:block", favored ? "text-heart opacity-90" : "text-gold opacity-30 hover:opacity-80"].join(" "),
						"aria-label": favored ? "Remove from saved" : "Save passage",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-5",
							fill: favored ? "currentColor" : "none"
						})
					})
				]
			}),
			paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute bottom-28 left-1/2 z-10 -translate-x-1/2 text-[0.6rem] tracking-[0.2em] text-gold/50 uppercase",
				children: "Paused — click or press Space to resume"
			}) : speaking && kind ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: ["pointer-events-none absolute bottom-28 left-1/2 z-10 -translate-x-1/2 voice-pill", kind === "god" ? "is-god" : ""].join(" "),
				children: pillLabel(kind)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pointer-events-none absolute right-4 bottom-4 text-[0.58rem] tracking-[0.18em] text-gold/30 tabular-nums",
				children: [
					index + 1,
					" / ",
					total
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute bottom-4 left-4 hidden text-[0.55rem] tracking-[0.14em] text-gold/25 uppercase sm:block",
				children: "Space · arrows · F fullscreen"
			})
		]
	});
}
function RecordingBadge({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5 flex items-center justify-center gap-3 text-divine/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `analog-reel ${active ? "spin" : ""}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.58rem] tracking-[0.22em] uppercase",
				children: "A recording of the spoken Word"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[0.52rem] tracking-[0.14em] text-divine/50 uppercase",
				children: "Direct from the Lord"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-4 items-end gap-0.5",
				children: [
					0,
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `vu-bar ${active ? "on" : ""}`,
					style: {
						height: `${8 + i % 3 * 5}px`,
						animationDelay: `${i * .12}s`
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `analog-reel ${active ? "spin" : ""}` })
		]
	});
}
function SermonBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5 text-gold/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.58rem] tracking-[0.22em] uppercase",
			children: "A short sermon"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-[0.52rem] tracking-[0.14em] text-gold/40 uppercase",
			children: "From the old preachers"
		})]
	});
}
var FADE = 1800;
var HOLD_SILENT = 1e4;
var REST_AFTER_SPEECH = 2200;
function SanctuaryApp() {
	const ready = useSanctuary((s) => s.ready);
	const verses = useSanctuary((s) => s.verses);
	const favorites = useSanctuary((s) => s.favorites);
	const panel = useSanctuary((s) => s.panel);
	const toast = useSanctuary((s) => s.toast);
	const actuals = useSanctuary((s) => s.actuals);
	const catalogLeft = useSanctuary((s) => s.catalogLeft);
	const justUnlocked = useSanctuary((s) => s.justUnlocked);
	const firstVisit = useSanctuary((s) => s.firstVisit);
	const hydrate = useSanctuary((s) => s.hydrate);
	const applyMidnightUnlock = useSanctuary((s) => s.applyMidnightUnlock);
	const toggleFav = useSanctuary((s) => s.toggleFav);
	const addVerse = useSanctuary((s) => s.addVerse);
	const setPanel = useSanctuary((s) => s.setPanel);
	const setActual = useSanctuary((s) => s.setActual);
	const resetWeek = useSanctuary((s) => s.resetWeek);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [opacity, setOpacity] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [speaking, setSpeaking] = (0, import_react.useState)(false);
	const [kind, setKind] = (0, import_react.useState)(null);
	const [fullscreen, setFullscreen] = (0, import_react.useState)(false);
	const [pb, setPb] = (0, import_react.useState)(0);
	const [pbMs, setPbMs] = (0, import_react.useState)(HOLD_SILENT);
	const timers = (0, import_react.useRef)([]);
	const indexRef = (0, import_react.useRef)(0);
	const pausedRef = (0, import_react.useRef)(false);
	const mutedRef = (0, import_react.useRef)(false);
	const versesRef = (0, import_react.useRef)(verses);
	const listeningRef = (0, import_react.useRef)(false);
	indexRef.current = index;
	pausedRef.current = paused;
	mutedRef.current = muted;
	versesRef.current = verses;
	listeningRef.current = listening;
	const clearTimers = () => {
		timers.current.forEach((id) => window.clearTimeout(id));
		timers.current = [];
	};
	const later = (fn, ms) => {
		const id = window.setTimeout(fn, ms);
		timers.current.push(id);
		return id;
	};
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	const goTo = (0, import_react.useCallback)((next, opts) => {
		const list = versesRef.current;
		if (!list.length) return;
		const i = (next % list.length + list.length) % list.length;
		clearTimers();
		voiceEngine.stop();
		setSpeaking(false);
		setKind(null);
		setOpacity(0);
		setIndex(i);
		later(() => {
			setOpacity(1);
			const v = versesRef.current[i];
			if (!v) return;
			const shouldSpeak = (opts?.speak ?? true) && listeningRef.current && !mutedRef.current && !pausedRef.current;
			const hold = shouldSpeak ? Math.max(8e3, v.t.length * 90) : HOLD_SILENT;
			setPbMs(hold + FADE);
			setPb(0);
			requestAnimationFrame(() => {
				requestAnimationFrame(() => setPb(100));
			});
			if (shouldSpeak) voiceEngine.speak(v, {
				onStart: (k) => {
					setSpeaking(true);
					setKind(k);
				},
				onEnd: () => {
					setSpeaking(false);
					setKind(null);
					if (pausedRef.current) return;
					later(() => {
						setOpacity(0);
						later(() => goTo(indexRef.current + 1), 1880);
					}, REST_AFTER_SPEECH);
				}
			});
			else later(() => {
				if (pausedRef.current) return;
				setOpacity(0);
				later(() => goTo(indexRef.current + 1), 1880);
			}, HOLD_SILENT);
		}, 280);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const tick = () => {
			const before = useSanctuary.getState().lastUnlock;
			applyMidnightUnlock();
			const after = useSanctuary.getState().lastUnlock;
			const gift = useSanctuary.getState().justUnlocked;
			if (after !== before && gift.length && listeningRef.current) goTo(0);
		};
		const t = window.setTimeout(tick, msUntilNextMidnight());
		const iv = window.setInterval(tick, 2e4);
		return () => {
			window.clearTimeout(t);
			window.clearInterval(iv);
		};
	}, [
		ready,
		applyMidnightUnlock,
		goTo
	]);
	const togglePause = (0, import_react.useCallback)(() => {
		if (pausedRef.current) {
			setPaused(false);
			goTo(indexRef.current, { speak: true });
		} else {
			setPaused(true);
			clearTimers();
			voiceEngine.stop();
			setSpeaking(false);
			setKind(null);
		}
	}, [goTo]);
	const prev = (0, import_react.useCallback)(() => {
		setPaused(false);
		goTo(indexRef.current - 1);
	}, [goTo]);
	const next = (0, import_react.useCallback)(() => {
		setPaused(false);
		goTo(indexRef.current + 1);
	}, [goTo]);
	const begin = (0, import_react.useCallback)(async () => {
		setListening(true);
		listeningRef.current = true;
		await voiceEngine.unlock();
		setPaused(false);
		goTo(0);
	}, [goTo]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (useSanctuary.getState().panel) {
				if (e.key === "Escape") setPanel(null);
				return;
			}
			if (!listeningRef.current) {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					begin();
				}
				return;
			}
			if (e.key === " " || e.key === "Spacebar") {
				e.preventDefault();
				togglePause();
			}
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "f" || e.key === "F") toggleFs();
			if (e.key === "a" || e.key === "A") setPanel("add");
			if (e.key === "m" || e.key === "M") setMuted((m) => !m);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		begin,
		next,
		prev,
		setPanel,
		togglePause
	]);
	(0, import_react.useEffect)(() => {
		const onFs = () => setFullscreen(Boolean(document.fullscreenElement));
		document.addEventListener("fullscreenchange", onFs);
		return () => document.removeEventListener("fullscreenchange", onFs);
	}, []);
	async function toggleFs() {
		try {
			if (document.fullscreenElement) await document.exitFullscreen();
			else await document.documentElement.requestFullscreen();
		} catch {}
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-dvh bg-bg" });
	const scriptureNow = verses.filter((v) => !v.q && !v.sermon).length;
	const quotesNow = verses.filter((v) => v.q).length;
	const sermonsNow = verses.filter((v) => v.sermon).length;
	const morningGift = START_VERSES.filter((v) => v.fresh).length;
	const givenToday = firstVisit ? morningGift + justUnlocked.length : justUnlocked.length;
	if (!listening) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenGate, {
		scriptureNow,
		quotesNow,
		sermonsNow,
		givenToday,
		firstVisit,
		onBegin: () => void begin()
	});
	const verse = verses[index] ?? verses[0];
	const saved = verses.filter((v) => favorites.includes(v.t));
	const timeOpen = panel === "time";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-dvh grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18.75rem]",
				onClick: (e) => {
					if (e.target.closest("button, input, textarea, aside, .panel-shell")) return;
					togglePause();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex min-h-dvh flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, {
							paused,
							muted,
							fullscreen,
							timeOpen,
							savedCount: favorites.length,
							onPrev: () => prev(),
							onTogglePause: () => togglePause(),
							onMute: () => {
								const nextMuted = !muted;
								setMuted(nextMuted);
								if (nextMuted) {
									voiceEngine.stop();
									setSpeaking(false);
								}
							},
							onFavs: () => setPanel("fav"),
							onAdd: () => setPanel("add"),
							onTime: () => setPanel(timeOpen ? null : "time"),
							onFullscreen: () => void toggleFs()
						}),
						verse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerseStage, {
							verse,
							opacity,
							index,
							total: verses.length,
							favored: favorites.includes(verse.t),
							speaking,
							kind,
							paused,
							onFav: () => toggleFav(verse)
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyStrip, {
							verses,
							catalogLeft
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden h-dvh lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeKeeper, {
						actuals,
						onChange: setActual,
						onReset: resetWeek
					})
				})]
			}),
			timeOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-30 bg-bg/80 lg:hidden",
				onClick: () => setPanel(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 right-0 w-full max-w-[22.5rem] overflow-y-auto bg-surface shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeKeeper, {
						compact: true,
						actuals,
						onChange: setActual,
						onReset: resetWeek
					})
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPanel, {
				open: panel === "add",
				onClose: () => setPanel(null),
				onSave: (text, ref, kind) => {
					const v = addVerse(text, ref, kind);
					if (v) {
						const i = useSanctuary.getState().verses.findIndex((x) => x.id === v.id);
						if (i >= 0) goTo(i);
					}
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavPanel, {
				open: panel === "fav",
				verses: saved,
				onClose: () => setPanel(null),
				onPick: (v) => {
					const i = verses.findIndex((x) => x.t === v.t);
					setPanel(null);
					if (i >= 0) goTo(i);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "progress-fill",
				style: {
					width: `${pb}%`,
					transition: pb === 0 ? "none" : `width ${pbMs}ms linear`
				}
			}),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-[8px] border border-gold/25 bg-gold/12 px-4 py-2 text-[0.62rem] tracking-[0.16em] text-gold uppercase",
				children: toast
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanctuaryApp, {});
}
//#endregion
export { Home as component };
