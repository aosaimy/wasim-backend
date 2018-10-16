"use strict"
module.exports = {
    "users": require("./users"), // the JSON file to reterive users from
    "port": 7878, // the port of this server
    "mode": "dev", // mode: dev or prod
    "uploadDir": "./uploads/", // folder where uploads temp are saved
    "wasim": "/wasim/", // folder where all project and there conllu located
    "wasim_client_url": "http://localhost:8100", // optional: wasim client
    "saltforhash": "anySaltValue", // any salt value for auth
    "udpipe": { // UDPipe server config
        "url": "http://localhost",
        "port": 1441
    },
    "ma": { // configuration to morphological analyser plugin
        "require": "./madamira_conllu",
        "url": "http://localhost",
        "port": 8223
    },
    "defaultProjectConfig": { // the default config , customization of this config is done project-based
        "remote_repo": "",
        "language": "arabic",
        "tagset": "",
        "useUD": false,
        "rowlength": 1,
        "isRtl": true,
        "sync": true,
        "undoSize": 5,
        "isConlluHidden": false,
        "askMemMA": true,
        "askMA": true,
        "askGuider": true,
        "excludeFiles": "",
        "keyboardShortcuts": {
            "validate": {
                "action": "validate"
            },
            "nav:word_next": {
                "code": "ArrowLeft",
                "action": "nav",
                "params": [
                    "word_next"
                ]
            },
            "nav:word_prev": {
                "code": "ArrowRight",
                "action": "nav",
                "params": [
                    "word_prev"
                ]
            },
            "log,": {
                "code": "KeyC",
                "action": "log",
            },
            "nav:word_down": {
                "code": "ArrowDown",
                "action": "nav",
                "params": [
                    "word_down"
                ]
            },
            "nav:word_up": {
                "code": "ArrowUp",
                "action": "nav",
                "params": [
                    "word_up"
                ]
            },
            "": {
                "code": "Escape",
                "action": ""
            },
            "find": {
                "code": "KeyF",
                "metaKey": true,
                "action": "find"
            },
            "find_next": {
                "code": "KeyG",
                "metaKey": true,
                "action": "find_next"
            },
            "find_prev": {
                "code": "KeyG",
                "metaKey": true,
                "shiftKey": true,
                "action": "find_prev"
            },
            "search": {
                "code": "KeyF",
                "metaKey": true,
                "shiftKey": true,
                "action": "search"
            },
            "tag_morphofeatures": {
                "code": "Space",
                "action": "tag_morphofeatures"
            },
            "addNote": {
                "code": "Slash",
                "metaKey": true,
                "action": "addNote"
            },
            "tag_ma": {
                "code": "Enter",
                "action": "tag_ma"
            },
            "sad": {
                "code": "Enter",
                "ctrlKey": true,
                "action": "sad"
            },
            "tag_ma_previous": {
                "code": "KeyP",
                "metaKey": true,
                "action": "tag_ma_previous"
            },
            "showCommands": {
                "code": "KeyP",
                "metaKey": true,
                "shiftKey": true,
                "action": "showCommands"
            },
            "edit_memMa": {
                "code": "Slash",
                "action": "edit_memMa"
            },
            "segment": {
                "code": "Enter",
                "shiftKey": true,
                "action": "segment"
            },
            "new_sentence": {
                "code": "Enter",
                "metaKey": true,
                "action": "new_sentence"
            },
            "copy": {
                "code": "KeyC",
                "metaKey": true,
                "action": "copy"
            },
            "copyParent": {
                "code": "KeyC",
                "shiftKey": true,
                "metaKey": true,
                "action": "copyParent"
            },
            "paste": {
                "code": "KeyV",
                "metaKey": true,
                "action": "paste"
            },
            "pasteMorphInfo": {
                "code": "KeyV",
                "metaKey": true,
                "altKey": true,
                "action": "pasteMorphInfo"
            },
            "saveFile": {
                "code": "KeyS",
                "action": "saveFile",
                "metaKey": true
            },
            "syncConllU": {
                "code": "KeyS",
                "action": "syncConllU",
                "metaKey": true,
                "shiftKey": true
            },
            "undo": {
                "code": "KeyZ",
                "action": "undo",
                "metaKey": true
            },
            "redo": {
                "code": "KeyZ",
                "action": "redo",
                "metaKey": true,
                "shiftKey": true
            },
            "validateConllu": {
                "code": "KeyV",
                "action": "validateConllu",
                "metaKey": true,
                "shiftKey": true,
                "altKey": true
            },
            "diac:a": {
                "code": "KeyQ",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "َ"
                ]
            },
            "diac:F": {
                "code": "KeyW",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ً"
                ]
            },
            "diac:u": {
                "code": "KeyE",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ُ"
                ]
            },
            "diac:N": {
                "code": "KeyR",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ٌ"
                ]
            },
            "diac:i": {
                "code": "KeyA",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ِ"
                ]
            },
            "diac:K": {
                "code": "KeyS",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ٍ"
                ]
            },
            "diac:o": {
                "code": "KeyX",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ْ"
                ]
            },
            "diac:~": {
                "code": "Backquote",
                "shiftKey": true,
                "action": "diac",
                "params": [
                    "ّ"
                ]
            },
            "clone": {
                "code": "Equal",
                "shiftKey": true,
                "action": "clone"
            },
            "mark_misc:UNCLEAR": {
                "code:": "Slash",
                "action": "mark_misc",
                "shiftKey": true,
                "params": [
                    "UNCLEAR"
                ]
            },
            "showOtherUTags": {
                "code": "Digit0",
                "action": "showOtherUTags"
            },
            "assignXTag:1": {
                "code": "Digit1",
                "action": "assignXTag",
                "params": [
                    1
                ]
            },
            "assignXTag:2": {
                "code": "Digit2",
                "action": "assignXTag",
                "params": [
                    2
                ]
            },
            "assignXTag:3": {
                "code": "Digit3",
                "action": "assignXTag",
                "params": [
                    3
                ]
            },
            "assignXTag:4": {
                "code": "Digit4",
                "action": "assignXTag",
                "params": [
                    4
                ]
            },
            "assignXTag:5": {
                "code": "Digit5",
                "action": "assignXTag",
                "params": [
                    5
                ]
            },
            "assignXTag:6": {
                "code": "Digit6",
                "action": "assignXTag",
                "params": [
                    6
                ]
            },
            "assignXTag:7": {
                "code": "Digit7",
                "action": "assignXTag",
                "params": [
                    7
                ]
            },
            "assignXTag:8": {
                "code": "Digit8",
                "action": "assignXTag",
                "params": [
                    8
                ]
            },
            "assignXTag:9": {
                "code": "Digit9",
                "action": "assignXTag",
                "params": [
                    9
                ]
            },
            "assignAnalysis:1": {
                "code": "F1",
                "action": "assignAnalysis",
                "params": [
                    1
                ]
            },
            "assignAnalysis:2": {
                "code": "F2",
                "action": "assignAnalysis",
                "params": [
                    2
                ]
            },
            "assignAnalysis:3": {
                "code": "F3",
                "action": "assignAnalysis",
                "params": [
                    3
                ]
            },
            "assignAnalysis:4": {
                "code": "F4",
                "action": "assignAnalysis",
                "params": [
                    4
                ]
            },
            "assignAnalysis:5": {
                "code": "F5",
                "action": "assignAnalysis",
                "params": [
                    5
                ]
            },
            "assignAnalysis:6": {
                "code": "F6",
                "action": "assignAnalysis",
                "params": [
                    6
                ]
            },
            "assignAnalysis:7": {
                "code": "F7",
                "action": "assignAnalysis",
                "params": [
                    7
                ]
            },
            "assignAnalysis:8": {
                "code": "F8",
                "action": "assignAnalysis",
                "params": [
                    8
                ]
            },
            "assignAnalysis:9": {
                "code": "F9",
                "action": "assignAnalysis",
                "params": [
                    9
                ]
            },
            "delete": {
                "code": "Minus",
                "shiftKey": false,
                "action": "delete"
            }
        },
        "MF.vs.POS_upostag": true,
        "MF.vs.POS": {
            "Gender": [
                "NOUN",
                "ADJ",
                "VERB",
                "PROPN",
                "",
                "PRON",
                "NUM"
            ],
            "Number": [
                "NOUN",
                "ADJ",
                "VERB",
                "PROPN",
                "",
                "PRON"
            ],
            "Case": [
                "NOUN",
                "ADJ",
                "",
                "PROPN",
                "",
                "PRON"
            ],
            "Definite": [
                "NOUN",
                "ADJ",
                "",
                "",
                "",
                ""
            ],
            "Mood": [
                "",
                "",
                "VERB",
                "",
                "",
                ""
            ],
            // "Tense": [
            //     "",
            //     "",
            //     "VERB",
            //     "",
            //     "",
            //     ""
            // ],
            "Aspect": [
                "",
                "",
                "VERB",
                "",
                "",
                ""
            ],
            "Voice": [
                "",
                "ADJ",
                "VERB",
                "",
                "",
                ""
            ],
            "Person": [
                "",
                "",
                "VERB",
                "",
                "",
                "PRON"
            ]
        },
        "mf": {
            "Gender": [{
                    "tag": "Masc",
                    "desc": "ذكر"
                },
                {
                    "tag": "Fem",
                    "desc": "أنثى"
                },
                {
                    "tag": "Neut",
                    "desc": "محايد"
                }
            ],
            "Number": [{
                    "tag": "Sing",
                    "desc": "مفرد"
                },
                {
                    "tag": "Plur",
                    "desc": "جمع"
                },
                {
                    "tag": "Dual",
                    "desc": "مثنى"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
            ],
            "Case": [{
                    "tag": "Nom",
                    "desc": "مرفوع"
                },
                {
                    "tag": "Acc",
                    "desc": "منصوب"
                },
                {
                    "tag": "Gen",
                    "desc": "مجرور"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
            ],
            "Definite": [{
                    "tag": "Def",
                    "desc": "معرفة"
                },
                {
                    "tag": "Ind",
                    "desc": "نكرة"
                },
                {
                    "tag": "Cons",
                    "desc": "مضاف"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
                // {"tag":"Com","desc":""}
            ],
            "Mood": [{
                    "tag": "Ind",
                    "desc": "مرفوع"
                },
                {
                    "tag": "Sub",
                    "desc": "منصوب"
                },
                {
                    "tag": "Jus",
                    "desc": "مجزوم"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
            ],
            // "Tense": [
            //     {"tag":"Past","desc":"ماضي"},
            //     {"tag":"Pres","desc":"حاضر"},
            //     {"tag":"Fut","desc":"مستقبل"}
            // ],
            "Aspect": [{
                    "tag": "Perf",
                    "desc": "ماض"
                },
                {
                    "tag": "Imp",
                    "desc": "مضارع"
                },
                {
                    "tag": "Impv",
                    "desc": "أمر"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
            ],
            "Voice": [{
                    "tag": "Act",
                    "desc": "معلوم"
                },
                {
                    "tag": "Pass",
                    "desc": "مجهول"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
            ],
            "Person": [{
                    "tag": "1",
                    "desc": "متكلم"
                },
                {
                    "tag": "2",
                    "desc": "مخاطب"
                },
                {
                    "tag": "3",
                    "desc": "غائب"
                },
                {
                    "tag": "Unsp",
                    "desc": "غير محدد"
                }
            ]
        },
        "onFeatSelect": {
            "VERB": {
                "Aspect=Perf": ["Mood=Unsp"],
                "Aspect=Impv": ["Mood=Unsp", "Voice=Unsp", "Person=2"]
            }
        },
        "alltags": [{
                "tag": "N",
                "desc": "اسم",
                "count": 25136,
                "fn": 1,
                "mapToConllU": "NOUN",
                "mapFrom": [
                    "noun",
                    "noun_quant"
                ]
            },
            {
                "tag": "PRON",
                "desc": "ضمير",
                "count": 24685,
                "fn": 2,
                "mapToConllU": "PRON",
                "mapFrom": [
                    "pron_exclam",
                    "1p_dobj",
                    "1p_poss",
                    "1p_pron",
                    "1s_dobj",
                    "1s_poss",
                    "1s_pron",
                    "2d_dobj",
                    "2d_poss",
                    "2d_pron",
                    "2p_dobj",
                    "2p_poss",
                    "2p_pron",
                    "2fp_dobj",
                    "2fp_poss",
                    "2fp_pron",
                    "2fs_dobj",
                    "2fs_poss",
                    "2fs_pron",
                    "2mp_dobj",
                    "2mp_poss",
                    "2mp_pron",
                    "2ms_dobj",
                    "2ms_poss",
                    "2ms_pron",
                    "3d_dobj",
                    "3d_poss",
                    "3d_pron",
                    "3p_dobj",
                    "3p_poss",
                    "3p_pron",
                    "3fp_dobj",
                    "3fp_poss",
                    "3fp_pron",
                    "3fs_dobj",
                    "3fs_poss",
                    "3fs_pron",
                    "3mp_dobj",
                    "3mp_poss",
                    "3mp_pron",
                    "3ms_dobj",
                    "3ms_poss",
                    "3ms_pron"
                ]
            },
            {
                "tag": "V",
                "desc": "فعل",
                "count": 19356,
                "fn": 3,
                "mapToConllU": "VERB",
                "mapFrom": [
                    "verb"
                ]
            },
            {
                "tag": "P",
                "desc": "جر",
                "count": 13006,
                "fn": 4,
                "mapToConllU": "ADP",
                "mapFrom": [
                    "prep"
                ]
            },
            {
                "tag": "CONJ",
                "desc": "عطف",
                "count": 9450,
                "fn": 5,
                "mapToConllU": "CCONJ",
                "mapFrom": []
            },
            {
                "tag": "DET",
                "desc": "تعريف",
                "count": 8377,
                "fn": 6,
                "mapToConllU": "DET",
                "mapFrom": []
            },
            {
                "tag": "PN",
                "desc": "اسم علم",
                "count": 3911,
                "fn": 7,
                "mapToConllU": "PROPN",
                "mapFrom": [
                    "noun_prop"
                ]
            },
            {
                "tag": "REL",
                "desc": "موصول",
                "count": 3575,
                "fn": 8,
                "mapToConllU": "PRON",
                "mapFrom": [
                    "rel"
                ]
            },
            {
                "tag": "REM",
                "desc": "استئنافية",
                "count": 2925,
                "fn": 9,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "NEG",
                "desc": "نفي",
                "count": 2688,
                "mapToConllU": "PART",
                "mapFrom": [
                    "neg"
                ]
            },
            {
                "tag": "ACC",
                "desc": "نصب",
                "count": 2283,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "ADJ",
                "desc": "صفة",
                "count": 1961,
                "mapToConllU": "ADJ",
                "mapFrom": [
                    "adj"
                ]
            },
            {
                "tag": "EMPH",
                "desc": "توكيد",
                "count": 1244,
                "mapToConllU": "PART",
                "mapFrom": [
                    "emph"
                ]
            },
            {
                "tag": "T",
                "desc": "ظرف زمان",
                "count": 1166,
                "mapToConllU": "ADV",
                "mapFrom": [
                    "adv"
                ]
            },
            {
                "tag": "DEM",
                "desc": "إشارة",
                "count": 1059,
                "mapToConllU": "PRON",
                "mapFrom": []
            },
            {
                "tag": "COND",
                "desc": "شرط",
                "count": 1049,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "INTG",
                "desc": "استفهام",
                "count": 946,
                "mapToConllU": "PART",
                "mapFrom": [
                    "adv_interrog",
                    "part_interrog",
                    "interrog"
                ]
            },
            {
                "tag": "SUB",
                "desc": "مصدري",
                "count": 684,
                "mapToConllU": "SCONJ",
                "mapFrom": [
                    "sub"
                ]
            },
            {
                "tag": "LOC",
                "desc": "ظرف مكان",
                "count": 669,
                "mapToConllU": "ADV",
                "mapFrom": []
            },
            {
                "tag": "RES",
                "desc": "حصر",
                "count": 558,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "CERT",
                "desc": "تحقيق",
                "count": 414,
                "mapToConllU": "PART",
                "mapFrom": [
                    "part_verb"
                ]
            },
            {
                "tag": "VOC",
                "desc": "نداء",
                "count": 376,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "RSLT",
                "desc": "جواب الشرط",
                "count": 350,
                "mapToConllU": "PART",
                "mapFrom": [
                    "rc"
                ]
            },
            {
                "tag": "PRO",
                "desc": "نهي",
                "count": 332,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "PRP",
                "desc": "تعليل",
                "count": 319,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "CIRC",
                "desc": "حال",
                "count": 293,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "SUP",
                "desc": "زائد",
                "count": 235,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "PREV",
                "desc": "كاف",
                "count": 162,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "FUT",
                "desc": "استقبال",
                "count": 161,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "RET",
                "desc": "اضراب",
                "count": 122,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "EXP",
                "desc": "استثناء",
                "count": 104,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "INC",
                "desc": "ابتداء",
                "count": 90,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "CAUS",
                "desc": "سببية",
                "count": 88,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "IMPV",
                "desc": "أمر",
                "count": 78,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "EXL",
                "desc": "تفصيل",
                "count": 66,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "AMD",
                "desc": "استدراك",
                "count": 65,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "INT",
                "desc": "تفسير",
                "count": 47,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "ANS",
                "desc": "جواب",
                "count": 40,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "EXH",
                "desc": "تحضيض",
                "count": 40,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "SUR",
                "desc": "فجاءة",
                "count": 35,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "AVR",
                "desc": "ردع",
                "count": 33,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "INL",
                "desc": "مقطعة",
                "count": 30,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "EQ",
                "desc": "تسوية",
                "count": 6,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "COM",
                "desc": "واو المعية",
                "count": 3,
                "mapToConllU": "PART",
                "mapFrom": []
            },
            {
                "tag": "IMPN",
                "desc": "اسم فعل أمر",
                "count": 2,
                "mapToConllU": "ADJ",
                "mapFrom": []
            },
            {
                "tag": "NUM",
                "desc": "رقم",
                "count": 0,
                "mapToConllU": "NUM",
                "mapFrom": []
            },
            {
                "tag": "PUNC",
                "desc": "ترقيم",
                "count": 1000,
                "mapToConllU": "PUNCT",
                "mapFrom": [
                    "punc"
                ]
            },
            {
                "tag": "ERR",
                "desc": "خطأ",
                "count": 0,
                "mapToConllU": "X",
                "mapFrom": [
                    "part",
                    "verb_pseudo",
                    "abbrev",
                    "interj"
                ]
            }
        ],
        "sentenceTags": [{
                "tag": "R",
                "desc": "سلسلة الرواة",
                "fn": 1
            },
            {
                "tag": "H",
                "desc": "كلام النبي ﷺ",
                "fn": 2
            },
            {
                "tag": "S",
                "desc": "كلام الصحابي",
                "fn": 3
            },
            {
                "tag": "T",
                "desc": "تخريج الحديث",
                "fn": 4
            },
            {
                "tag": "E",
                "desc": "شرح الحديث",
                "fn": 5
            }
        ],
        "allutags": [{
                "tag": "ADJ",
                "desc": "صفة"
            },
            {
                "tag": "ADP",
                "desc": "حرف جر"
            },
            {
                "tag": "ADV",
                "desc": "ظرف"
            },
            {
                "tag": "CCONJ",
                "desc": "عطف"
            },
            {
                "tag": "DET",
                "desc": "تعريف"
            },
            {
                "tag": "NOUN",
                "desc": "اسم"
            },
            {
                "tag": "NUM",
                "desc": "رقم"
            },
            {
                "tag": "PART",
                "desc": "حرف"
            },
            {
                "tag": "PRON",
                "desc": "ضمير"
            },
            {
                "tag": "PROPN",
                "desc": "اسم علم"
            },
            {
                "tag": "PUNCT",
                "desc": "ترقيم"
            },
            {
                "tag": "SCONJ",
                "desc": "مصدري"
            },
            {
                "tag": "VERB",
                "desc": "فعل"
            },
            {
                "tag": "X",
                "desc": "آخرى"
            }
        ]
    }
}