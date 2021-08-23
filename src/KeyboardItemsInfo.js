const keyboardItemsInfo = [
	{
		value: ["`", "~", "ё"],
		id: "tilda",
		type: 1,
		size: 1,
		isActive: false,
		code: 192
	},
	{
		value: ["!", "1" ],
		id: "1",
		type: 1,
		size: 1,
		isActive: false,
		code: 49
	},
	{
		value: ["@", "2", "\""],
		id: "2",
		type: 1,
		size: 1,
		isActive: false,
		code: 50
	},
	{
		value: ["#", "3", "№"],
		id: "3",
		type: 1,
		size: 1,
		isActive: false,
		code: 51
	},
	{
		value: ["$", "4", ";"],
		id: "4",
		type: 1,
		size: 1,
		isActive: false,
		code: 52
	},
	{
		value: ["%", "5" ],
		id: "5",
		type: 1,
		size: 1,
		isActive: false,
		code: 53
	},
	{
		value: ["^", "6", ":"],
		id: "6",
		type: 1,
		size: 1,
		isActive: false,
		code: 54
	},
	{
		value: ["&", "7", "?"],
		id: "7",
		type: 1,
		size: 1,
		isActive: false,
		code: 55
	},
	{
		value: ["*", "8"],
		id: "8",
		type: 1,
		size: 1,
		isActive: false,
		code: 56
	},
	{
		value: ["(", "9"],
		id: "9",
		type: 1,
		size: 1,
		isActive: false,
		code: 57
	},
	{
		value: [ ")", "0"],
		id: "0",
		type: 1,
		size: 1,
		isActive: false,
		code: 48
	},
	{
		value: ["_", "-"],
		id: "minus",
		type: 1,
		size: 1,
		isActive: false,
		code: 189
	},
	{
		value: ["Backspace"],
		id: "plus",
		type: 4,
		size: 7,
		isActive: false,
		code: 8
	},
	{
		value: ["Tab"],
		id: "plus",
		type: 4,
		size: 3,
		isActive: false,
		code: 9
	},
	{
		value: ["Q", "Й"],
		id: "q",
		type: 2,
		size: 1,
		isActive: false,
		code: 81
	},
	{
		value: ["W", "Ц"],
		id: "w",
		type: 2,
		size: 1,
		isActive: false,
		code: 87
	},
	{
		value: ["E", "у"],
		id: "e",
		type: 2,
		size: 1,
		isActive: false,
		code: 69
	},
	{
		value: ["R", "К"],
		id: "r",
		type: 2,
		size: 1,
		isActive: false,
		code: 82
	},
	{
		value: ["T", "Е"],
		id: "t",
		type: 2,
		size: 1,
		isActive: false,
		code: 84
	},
	{
		value: ["Y", "Н"],
		id: "y",
		type: 2,
		size: 1,
		isActive: false,
		code: 89
	},
	{
		value: ["U", "Г"],
		id: "u",
		type: 2,
		size: 1,
		isActive: false,
		code: 85
	},
	{
		value: ["I", "Ш"],
		id: "i",
		type: 2,
		size: 1,
		isActive: false,
		code: 73
	},
	{
		value: ["O", "Щ"],
		id: "o",
		type: 2,
		size: 1,
		isActive: false,
		code: 79
	},
	{
		value: ["P", "З"],
		id: "p",
		type: 2,
		size: 1,
		isActive: false,
		code: 80
	},
	{
		value: ["{", "х", "["],
		id: "[",
		type: 2,
		size: 1,
		isActive: false,
		code: 219
	},
	{
		value: ["}", "ъ", "]"],
		id: "]",
		type: 2,
		size: 1,
		isActive: false,
		code: 221
	},
	{
		value: ["\\", "|", "\\", "/"],
		id: "|",
		type: 2,
		size: 1,
		isActive: false,
		code: 220
	},
	{
		value: ["CapsLock"],
		id: "CapsLock",
		type: 4,
		size: 4,
		isActive: false,
		code: 20
	},
	{
		value: ["A", "Ф"],
		id: "a",
		type: 2,
		size: 1,
		isActive: false,
		code: 65
	},
	{
		value: ["S", "Ы"],
		id: "s",
		type: 2,
		size: 1,
		isActive: false,
		code: 83
	},
	{
		value: ["D", "В"],
		id: "d",
		type: 2,
		size: 1,
		isActive: false,
		code: 68
	},
	{
		value: ["F", "А"],
		id: "f",
		type: 2,
		size: 1,
		isActive: false,
		code: 70
	},
	{
		value: ["G", "П"],
		id: "g",
		type: 2,
		size: 1,
		isActive: false,
		code: 71
	},
	{
		value: ["H", "Р"],
		id: "h",
		type: 2,
		size: 1,
		isActive: false,
		code: 72
	},
	{
		value: ["J", "О"],
		id: "j",
		type: 2,
		size: 1,
		isActive: false,
		code: 74
	},
	{
		value: ["K", "Л"],
		id: "k",
		type: 2,
		size: 1,
		isActive: false,
		code: 75
	},
	{
		value: ["L", "Д"],
		id: "L",
		type: 2,
		size: 1,
		isActive: false,
		code: 76
	},
	{
		value: [":", "Ж", ";"],
		id: ":",
		type: 2,
		size: 1,
		isActive: false,
		code: 186
	},
	{
		value: ["\"", "Э", "'"],
		id: "p",
		type: 2,
		size: 1,
		isActive: false,
		code: 222
	},
	{
		value: ["Enter"],
		id: "Enter",
		type: 4,
		size: 5,
		isActive: false,
		code: 13
	},
	{
		value: ["Shift"],
		id: "Shift",
		type: 4,
		size: 6,
		isActive: false,
		code: 16
	},
	{
		value: ["Z", "Я"],
		id: "z",
		type: 2,
		size: 1,
		isActive: false,
		code: 90
	},
	{
		value: ["X", "Ч"],
		id: "x",
		type: 2,
		size: 1,
		isActive: false,
		code: 88
	},
	{
		value: ["С", "c"],
		id: "c",
		type: 2,
		size: 1,
		isActive: false,
		code: 67
	},
	{
		value: ["V", "М"],
		id: "v",
		type: 2,
		size: 1,
		isActive: false,
		code: 86
	},
	{
		value: ["B", "И"],
		id: "b",
		type: 2,
		size: 1,
		isActive: false,
		code: 66
	},
	{
		value: ["N", "Т"],
		id: "n",
		type: 2,
		size: 1,
		isActive: false,
		code: 78
	},
	{
		value: ["M", "Ь"],
		id: "m",
		type: 2,
		size: 1,
		isActive: false,
		code: 77
	},
	{
		value: ["<", "Б", ","],
		id: "<",
		type: 2,
		size: 1,
		isActive: false,
		code: 188
	},
	{
		value: [">", "Ю", "."],
		id: ">",
		type: 2,
		size: 1,
		isActive: false,
		code: 190
	},
	{
		value: ["?", ".", "/", ","],
		id: "76",
		type: 2,
		size: 1,
		isActive: false,
		code: 191
	},
	{
		value: ["Shift"],
		id: "Shift",
		type: 4,
		size: 6,
		isActive: false,
		code: 16
	},
	{
		value: ["Ctrl"],
		id: "Ctrl",
		type: 4,
		size: 6,
		isActive: false,
		code: 17
	},
	{
		value: ["Win"],
		id: "Win",
		type: 4,
		size: 1,
		isActive: false,
		code: 91
	},
	{
		value: ["Alt"],
		id: "Alt",
		type: 4,
		size: 1,
		isActive: false,
		code: 18
	},
	{
		value: ["Space"],
		id: "Space",
		type: 4,
		size: 8,
		isActive: false,
		code: 32
	},
	{
		value: ["Alt"],
		id: "Alt",
		type: 4,
		size: 4,
		isActive: false,
		code: 18
	},
	{
		value: ["Ctrl"],
		id: "Ctrl",
		type: 4,
		size: 6,
		isActive: false,
		code: 17
	}
];

export default keyboardItemsInfo;