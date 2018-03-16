function auto_safelink() {
    auto_safeconvert()
}

function auto_safeconvert() {
    var variable_0 = window["location"]["hostname"];
    "" == protected_links || protected_links["match"](variable_0) ? "" == protected_links && (protected_links = variable_0) : protected_links += ", " + variable_0;
    var variable_1 = "",
        variable_2 = new Array,
        variable_3 = 0;
    variable_1 = document["getElementsByTagName"]("a"), a_to_va = variable_1["length"], variable_2 = a_to_fa(), variable_3 = variable_2["length"];
    for (var variable_4 = !1, variable_5 = 0, variable_6 = "", variable_7 = 0; a_to_va > variable_7; variable_7++) {
        for (variable_4 = !1, variable_5 = 0; 0 == variable_4 && variable_3 > variable_5;) {
            variable_6 = variable_1[variable_7]["href"], !variable_6["match"](variable_2[variable_5]) && variable_6 && variable_6["match"]("http") || (variable_4 = !0), variable_5++
        };
        if (0 == variable_4) {
            var variable_8 = Base64["encode"](variable_6);
            variable_1[variable_7]["href"] = urlweb + "/garpit.php?site=" + variable_8 + "&c=0&user=" + User_ID, variable_1[variable_7]["rel"] = "nofollow", a_to_vb++, a_to_vc += variable_7 + ":::" + variable_1[variable_7]["href"] + "\n"
        }
    };
    var variable_9 = document["getElementById"]("anonyminized"),
        variable_10 = document["getElementById"]("found_links");
    variable_9 && (variable_9["innerHTML"] += a_to_vb), variable_10 && (variable_10["innerHTML"] += a_to_va)
}

function a_to_fa() {
    var variable_0 = new Array;
    return protected_links = protected_links["replace"](" ", ""), variable_0 = protected_links["split"](",")
}
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(variable_0) {
            var variable_1, variable_2, variable_3, variable_4, variable_5, variable_6, variable_7, variable_8 = "",
                variable_9 = 0;
            for (variable_0 = Base64._utf8_encode(variable_0); variable_9 < variable_0["length"];) {
                variable_1 = variable_0["charCodeAt"](variable_9++), variable_2 = variable_0["charCodeAt"](variable_9++), variable_3 = variable_0["charCodeAt"](variable_9++), variable_4 = variable_1 >> 2, variable_5 = (3 & variable_1) << 4 | variable_2 >> 4, variable_6 = (15 & variable_2) << 2 | variable_3 >> 6, variable_7 = 63 & variable_3, isNaN(variable_2) ? variable_6 = variable_7 = 64 : isNaN(variable_3) && (variable_7 = 64), variable_8 = variable_8 + this["_keyStr"]["charAt"](variable_4) + this["_keyStr"]["charAt"](variable_5) + this["_keyStr"]["charAt"](variable_6) + this["_keyStr"]["charAt"](variable_7)
            };
            return variable_8
        },
        decode: function(variable_0) {
            var variable_1, variable_2, variable_3, variable_4, variable_5, variable_6, variable_7, variable_8 = "",
                variable_9 = 0;
            for (variable_0 = variable_0["replace"](/[^A-Za-z0-9\+\/\=]/g, ""); variable_9 < variable_0["length"];) {
                variable_4 = this["_keyStr"]["indexOf"](variable_0["charAt"](variable_9++)), variable_5 = this["_keyStr"]["indexOf"](variable_0["charAt"](variable_9++)), variable_6 = this["_keyStr"]["indexOf"](variable_0["charAt"](variable_9++)), variable_7 = this["_keyStr"]["indexOf"](variable_0["charAt"](variable_9++)), variable_1 = variable_4 << 2 | variable_5 >> 4, variable_2 = (15 & variable_5) << 4 | variable_6 >> 2, variable_3 = (3 & variable_6) << 6 | variable_7, variable_8 += String["fromCharCode"](variable_1), 64 != variable_6 && (variable_8 += String["fromCharCode"](variable_2)), 64 != variable_7 && (variable_8 += String["fromCharCode"](variable_3))
            };
            return variable_8 = Base64._utf8_decode(variable_8)
        },
        _utf8_encode: function(variable_0) {
            variable_0 = variable_0["replace"](/\r\n/g, "\n");
            for (var variable_1 = "", variable_2 = 0; variable_2 < variable_0["length"]; variable_2++) {
                var variable_3 = variable_0["charCodeAt"](variable_2);
                128 > variable_3 ? variable_1 += String["fromCharCode"](variable_3) : variable_3 > 127 && 2048 > variable_3 ? (variable_1 += String["fromCharCode"](variable_3 >> 6 | 192), variable_1 += String["fromCharCode"](63 & variable_3 | 128)) : (variable_1 += String["fromCharCode"](variable_3 >> 12 | 224), variable_1 += String["fromCharCode"](variable_3 >> 6 & 63 | 128), variable_1 += String["fromCharCode"](63 & variable_3 | 128))
            };
            return variable_1
        },
        _utf8_decode: function(variable_0) {
            for (var variable_1 = "", variable_2 = 0, variable_3 = c1 = c2 = 0; variable_2 < variable_0["length"];) {
                variable_3 = variable_0["charCodeAt"](variable_2), 128 > variable_3 ? (variable_1 += String["fromCharCode"](variable_3), variable_2++) : variable_3 > 191 && 224 > variable_3 ? (c2 = variable_0["charCodeAt"](variable_2 + 1), variable_1 += String["fromCharCode"]((31 & variable_3) << 6 | 63 & c2), variable_2 += 2) : (c2 = variable_0["charCodeAt"](variable_2 + 1), c3 = variable_0["charCodeAt"](variable_2 + 2), variable_1 += String["fromCharCode"]((15 & variable_3) << 12 | (63 & c2) << 6 | 63 & c3), variable_2 += 3)
            };
            return variable_1
        }
    },
    encode = document["getElementById"]("encode"),
    decode = document["getElementById"]("decode"),
    output = document["getElementById"]("output"),
    input = document["getElementById"]("input"),
    User_ID = "",
    protected_links = "",
    a_to_va = 0,
    a_to_vb = 0,
    a_to_vc = ""
