'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "71b0d0c413206b36791c5850e5e9c4fe",
".git/config": "22d4ff0dad354f8a6fe0c413b1a3c2fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4a18d718101432cd1be608262fbe4f77",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e61efa4d42ab54e21273b0f76b2bd72e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19f1951635c7b0ba122892c09a3bfcf8",
".git/logs/refs/heads/master": "19f1951635c7b0ba122892c09a3bfcf8",
".git/logs/refs/remotes/origin/HEAD": "beea23872e75d5a83c11f7b98ad91ac6",
".git/logs/refs/remotes/origin/master": "6f865196f5e1c18b9dbc44b38b4ae472",
".git/objects/02/7a0137858879eee7337c5ef2f135647e680983": "24d265156103ba6bb726429e469e5bd0",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/457ee4d4f6b0ce0516d3325d1ef88f208a24ea": "a485b3787f5180cac9516c4e5fcd730d",
".git/objects/07/ba0fb3e22972dcd4fac7ced4a2bc7152bfba91": "ab72b4c5f922b18d646c08711636737d",
".git/objects/0b/80f2c54a081687bd9fc8751d2dd29274f8d3bb": "29099a55248e48304455dd019bb66594",
".git/objects/16/81bb863b44b8a87b1380db6f3226977c9423d2": "d7c8683f14b46a97c08aef91075f29a7",
".git/objects/19/5448be88fca5fc340944c7d65e21048941ebc6": "25a5894da3c79bea0ec6648f346ff755",
".git/objects/1a/abb1b92969a0e34e43f45f70adfce9a91fc743": "4a403776ea032a3f6d2b552af522ee87",
".git/objects/1e/9540ee55d45e8144e36b1772e1be3868a56465": "e8ef3ad457f43cc5d1643319d810eaa0",
".git/objects/1e/b43e237106097847b943c9b13cd4bba6e6a47a": "7a60038201d6b89c9035c6ffe1c02a94",
".git/objects/21/c0073fd1f1d76a2fd1d119bcb138fab730c742": "0fff27d3e0b657663b61ac5cd9e83b47",
".git/objects/22/ae19ffe91ad05fe45a8c1779fa858895cc1b3e": "30e8d735650a780124d044203f470c41",
".git/objects/24/073911ff17ba27840ef5680c79747dc8f000e4": "5c7d0154b6cb1430ce2e583e6d8d6c11",
".git/objects/29/bd1ba51b3c4c617b753374411aaef7b2597b89": "b9474534c0646a29113de5ab69d5ccd6",
".git/objects/2c/5f3970f6a990772c47498fedc107451e20b9d2": "006d0dcd1b2edf31be2ecbbecd159579",
".git/objects/2e/e6d6e2ea8d67edfa1b799ebee6e673c853e6d0": "885d078865f2e9a22776103c04008859",
".git/objects/30/a0cd4b09d164b60d640452e39a9a97d689ef8d": "585cdf59c86db70bf269c6db86cbeab6",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/976b9ac8fb1751e2b5fc419a3894fd27e53e34": "6b917cb50fc6388c4980fd0b4d4e1167",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/50c13c0f0abee9df003cac6dbef52ee7f15d50": "c5e102b8e616600e00e728fc7596bb3b",
".git/objects/38/a24de21b0297affad4517fac8fc27e4c050b47": "80ee28df1287320f1dc172c66e9a405c",
".git/objects/3a/d399e095a75851698c5099f85ffa6d00e1f8c9": "a3f8d1580ec03db502f21f6ea9a409d7",
".git/objects/3b/db84819cd2d6298877faf68bba2fc500dcf348": "5d5d9f33bd252c9c6e9d322efb136ddb",
".git/objects/3f/665e72b2bdefc1307d8d14386468d2e96aaba6": "a0c2994266abee97bf592006b51901ef",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/24c05b4f62d3bf8101ef99ecb7c032c020610a": "e0397596da1d170c625ad386a7e7060a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/c5eff774590f9589ff3842777629a93be543a9": "03e00103b0491d4298d709c9d3ca05b9",
".git/objects/55/b01c8a40c12b35e061335b0a80ff802c63d748": "b3cf945b648d04b802d71221c4e1a7cc",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/95d2b5071335e35b8e196b86f65c863ac38c80": "e811ebe09a9d04b486d96c02c2800e8a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/73/642c3799913a79e1faf0d94368fb54f0979699": "65b5ad8c1fb9aa498acc3a73036c9ab1",
".git/objects/76/7c993a4dcb670387326ff9947dc79adc82f6c0": "61c3422d1e08adef1e6f96d3d1adf23f",
".git/objects/76/d982c90d66615bcc9861c1abd2e2cbe409174f": "e444911ce049d6df18a16e7523d928b0",
".git/objects/7a/fe804b01fc93e0ff1e596b3df9995a34e04e59": "ec2982b9213a47de59082530b9229024",
".git/objects/81/1eb8b58685087425e94551598e508d0739c340": "d8e5a0e0e30bb3d1297254876c47be6c",
".git/objects/84/16fa6fcad3be729d156e86202d5a4af2bb644c": "82981762d9f825f81558c45392a154cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/54bf34d8ef290714c8ca167099f06bce88e2b1": "49fda2d6137e3c0676967aaea349bbe8",
".git/objects/91/0cc7f1f0a78dde7947c5da4369ac4d3de3d3ef": "5465d76927cdaeef58549948430c2bb1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/3d2c404931b46a5663ba8a237a844fc43c9a5d": "83dc14d047bf3bdad6757f742233007d",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/a723b692032be4cb07583e26fc3cea29c524e4": "7db9ae19b099b0fb8ceefccafe9a9845",
".git/objects/9d/340e5a6fb7d5b2632e0a59dd7f94fa3214cdc7": "8584445e042d12c2ef3150fa85d7238a",
".git/objects/a3/27e02b16a3cf325c8eb413f1d955f4d2071ca8": "8fc7050e466fa47180c869e4dbf64e6a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/d5ad8eb26b657e326d8169f54a9b96f0d45a6e": "f43fc940794ab41749d45dc882f684d4",
".git/objects/a7/cb6f5d6c73d6226291c94d51b294f1b4b32983": "1603ba1f39de647a9dd7ff1149245b04",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d052a020c0e96b72918e36ceb1e341bd270eab": "fd957985b5c62723d484401140d98926",
".git/objects/b8/01bec3de75276e57d15ff2c12c3a407c13c873": "a63a8616779e520af686151b8b7c1cdc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/6e45fcf96118af2521003e6c8fb1138d8a8ecd": "fa4caa19888bc8c97a86a5a0abbcf768",
".git/objects/c3/5bf7618c498e240ac32f11735afb9b4b932e5b": "46ae4c305ea7de617fbab119d26d37e1",
".git/objects/c5/4cc77428b1821130a0ed55297f5e4501b0075a": "5b0034398687dd0b1fe21c08a169e29b",
".git/objects/c5/d23daa709231b635a87e86326108fb0059e005": "9a3d9b1198a4e1fca5d1bb5dfbd0f278",
".git/objects/c7/32063c8042541cf6d04601925dd02e89ce2575": "eb0944d05bea419b03dc03e27d986c60",
".git/objects/cb/25ce6151115ff783bc80ed0a2cf6033fa264fd": "c8a16b2db370ad45560fd6712f550fb7",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cf/cba904efbe45435b458107566c0dc88197b474": "543c69a930953952953875c8072440b8",
".git/objects/d0/238ac89a6a54ea4f063d702a86fe1b61217590": "aa9d47392eae3993fd292aedf0eedc8e",
".git/objects/d0/f252700c3a314d01fe9ba103641b7561e5958f": "b0d2a858ada1c3f68a9ed7d58bb2b811",
".git/objects/d4/28788884ba70184eaaec0992582fe66f4688f5": "0d63885d463abd453f6a1e4635c69d8a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0d306d59fa1334614e22a25310d0d3dca309b5": "7e9e35982e923321c23c0095bd71ad50",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/7e54915888ebd2a7b89eaff2991fe9e70d0375": "2aa12db648ce4a673e543e98f65f06c9",
".git/objects/e0/477705d154220ecb5b9a93a6bcb1f0f73819b9": "dff0f4d586ca9c7cc2596630e3150ef5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/ae6db50ddedf748238ac6e28256fba8a91ea0a": "306b5b97649deaa55d85071e78c43868",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/879f918b5f2640d7a762ddf6491a193aef2fd0": "8013b5df0321d49fd97ba1affe8d5fe2",
".git/objects/f8/4d9dae5bfbf946b5e1e587ed194f4bfbf78fd2": "9c9ab345e16ffbe5f78befe5615c07e5",
".git/objects/fc/1fabc183ed66a52c287bb327f1c362c3a8be92": "53db5ebbac337d1d8b07d4fca0954899",
".git/objects/fe/02d53cfb21bdf8b67969fc06e00a8ad73a2ec4": "ef4257c58c2d23c6cfc418cf10f0048d",
".git/objects/ff/c2c24e10ec361ad87600b329aab209db2b1d32": "2816b9df4ac7422942707a503d403d6e",
".git/objects/ff/c97179623069e4845d6d20c7cd351156104c9a": "a3767c0dd1fa841337797300dcfeb433",
".git/refs/heads/master": "ae393075c30088b31584df1c7424cc2b",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "ae393075c30088b31584df1c7424cc2b",
"assets/AssetManifest.bin": "91b7692161309b795c5bfea22ec70acd",
"assets/AssetManifest.bin.json": "c69a227e26600a7e92a26d7a1701131e",
"assets/AssetManifest.json": "c9f3e6034d95a4f958b8027656325973",
"assets/FontManifest.json": "a93e3262d5d042525b24adc77599435a",
"assets/fonts/baloo.ttf": "84cab1f385ac5f76267aca40fa81353e",
"assets/fonts/jose.ttf": "9e85e7de127ce629d3d112f122041886",
"assets/fonts/jose1.ttf": "2f6282e67340eaaaa5330bf14f5813d6",
"assets/fonts/jose2.ttf": "51ed854c6cd881c8566ed8d8cb7213c1",
"assets/fonts/jose3.ttf": "2f6282e67340eaaaa5330bf14f5813d6",
"assets/fonts/jose4.ttf": "2f6282e67340eaaaa5330bf14f5813d6",
"assets/fonts/lobst.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/fonts/lobster.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/satify.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/image/1.png": "e8fe3d6c2a0bfe335cf5858d4d22bf0c",
"assets/image/A.jpeg": "6ff72c3ec000e80eeda7e572e03c665b",
"assets/image/A.png": "b0aeff08c510cc631c8baa7f3e67ebdd",
"assets/image/ad.png": "fbe3f1b7c62e58525dac55fe860098f7",
"assets/image/b.jpeg": "210e653113f03260bd89955d11610b0e",
"assets/image/b.webp": "67f529c76d3ed98bbe9c64f69c4b4e72",
"assets/image/ba.png": "3e05f44ee4872ddf933fe8b255a06827",
"assets/image/C.jpeg": "02c7dbd3f562239eac3f9d1ce9d107f7",
"assets/image/d.png": "fe1f9666040ddb73d3450240af1e5f30",
"assets/image/f.jpeg": "dc83a38799cfd11032c9afeed3eb8841",
"assets/image/F.png": "34207180eff542f6597ba62855616db2",
"assets/image/f2.png": "8bdc70360d1040dedb37817b11821a1f",
"assets/image/fl.png": "98e7d7f8c8b85bdc4da69913a9cbd048",
"assets/image/g.jpg": "0c4d73a726377a2a6d4fcd236efb4740",
"assets/image/g1.jpeg": "e7cc1277fbcc242d6f3bf81200581514",
"assets/image/g2.jpg": "0888a89509adf86e64eaa4b355eb9145",
"assets/image/g2.png": "2dbd66701035e010d1047c3a211616eb",
"assets/image/google.png": "0b239b8c0e972a5156e13f84aeead9ea",
"assets/image/i.png": "17513ab7ea35ba6b8ae49faa6754f4b1",
"assets/image/im.png": "1f6f56ff345c69f6001a9de6d7ede862",
"assets/image/ima.png": "979baeae68774a84d3bfdb5fbcf1fca3",
"assets/image/images.jpeg": "6ebc13637bbae7a0e688c3c0c485c3f3",
"assets/image/insta.jpeg": "5451cfdb9ae6045bcd26f625a75d1a6e",
"assets/image/j.png": "52d134312c4c0cca5c4674ac0ca85e4e",
"assets/image/L.jpeg": "66f79bb71242a794577fc4f6bf4b86ae",
"assets/image/l.json": "bb24e0a13ae5e18b5293b4713db50837",
"assets/image/n.jpeg": "cffb259623593bf9cea7f8fef4069a38",
"assets/image/p.png": "7644b03706ae36cc51dcf922088e994f",
"assets/image/p2.jpeg": "2d2068b34cb8e8aae4cb9bd4e1a8c76a",
"assets/image/p3.jpeg": "328a86efa22a0b394cf9117fa855d341",
"assets/image/Q.png": "e9d8b16e8c2f59ac9ebfb5956ef7b722",
"assets/image/R.json": "f6a03a97b60427121c932f91859da610",
"assets/image/r.png": "f4b3199460e28458fdeda68d6ad84c79",
"assets/image/s.png": "f2bc4990f340d86b047735f45c4b88b2",
"assets/image/sandwich.jpg": "78f1cbd55cf24ef15cca4965083eae86",
"assets/image/sb.png": "461c602fc5c7a6bfe9f2ea0c5e66bf87",
"assets/image/star.json": "e94f358f6d62bb9cda63ba7a8f7471bd",
"assets/image/w.png": "475383844f077feb22cd9ef09fb3789e",
"assets/image/Y.png": "a18fe6889acb15cd17d06baaf4b25f0c",
"assets/image/yt.png": "6dc7a341f8129e8b2219abe361f06be0",
"assets/NOTICES": "a6963a410f7f3cfdcc2525404d86584a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7e988ae5c22db967ad4d821423c5cf68",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d7dc5b553fa27b313a22478fae4fe91",
"/": "6d7dc5b553fa27b313a22478fae4fe91",
"main.dart.js": "f498c4521e4fba04c1e4100647a9c2eb",
"manifest.json": "8f480d3b5a17c568263d27c996f4ac82",
"version.json": "6ee8c46d92c7c8ba709327bf7c5847e5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
