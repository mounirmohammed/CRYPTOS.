//jshint esversion: 6
let tab = 'abcdefghijklmnopqrstuvwxyz0123456789';
let taba = 'abcdefghijklmnopqrstuvwxyz';
let n = 26;


function textProcess(msg) {
  let tempMsg = [];
  msg = msg.toLowerCase();
  for (var i = 0; i < msg.length; i++) {
    if (taba.includes(msg[i]) == 1) tempMsg = tempMsg + msg[i];

  }
  return tempMsg;
}

function modInverse(a, b) {
  a %= b;
  for (var x = 1; x < b; x++) {
    if ((a * x) % b == 1) {
      return x;
    }
  }
}

////////////////////////////////////////////analyse frequentielle
if (document.getElementById('bb') != null) {
  var button = document.getElementById('bb');
  button.addEventListener('click', function ocu() {
    var msg = document.getElementById("message").value;
    msg = textProcess(msg);
    for (var j = 0; j < 36; j++) {
      var char = tab[j];
      var n = 0;
      for (var i = 0; i < msg.length; i++) {
        if (msg[i] == char) n++;
      }
      document.getElementById(tab[j].toString()).value = n;
    }

  });

}

/////////////////////////////////////////////////////cesar
///////////////////////Chiffrer

if (document.getElementById('buttonCesar') != null) {
  var button = document.getElementById('buttonCesar');
  button.addEventListener('click', function cesar() {
    if (document.getElementById('keyCesar') == null) alert("Ajouter un Décalage");
    else {
      const key = parseInt(document.getElementById("keyCesar").value);
      let msg = document.getElementById("messageCesar").value;
      msg = textProcess(msg);
      var res = [];
      for (var i = 0; i < msg.length; i++) {
        var re = msg[i];
        var pos = taba.indexOf(re);
        pos = (pos + key) % n;
        res = res + taba[pos];
      }
      document.getElementById('resultatCesar').value = res;
    }
  });
}
//////////////////////dechiffrer
if (document.getElementById('buttonCesar1') != null) {
  var button = document.getElementById('buttonCesar1');
  button.addEventListener('click', function cesar() {
    if (document.getElementById('keyCesar') == null) alert("Ajouter un Décalage");
    else {
      const key = parseInt(document.getElementById("keyCesar").value);
      let msg = document.getElementById("messageCesar").value;
      msg = textProcess(msg);
      var res = [];
      for (var i = 0; i < msg.length; i++) {
        var re = msg[i];
        var pos = taba.indexOf(re);
        pos = (pos - key) % n;
        if (pos < 0) pos = pos + 26;
        res = res + taba[pos];
      }
      document.getElementById('resultatCesar').value = res;
    }
  });
}





//////////////////////////////////////////////////////affine
///////////////////////Chiffrer
if (document.getElementById('buttonAffine') != null) {
  var button = document.getElementById('buttonAffine');
  button.addEventListener('click', function cesar() {
    if (document.getElementById('aKeyAffine') == null && document.getElementById('bKeyAffine') == null) alert("Ajouter une clef");
    else {

      const akey = parseInt(document.getElementById("aKeyAffine").value);
      const bkey = parseInt(document.getElementById("bKeyAffine").value);
      let msg = document.getElementById("messageAffine").value;
      msg = textProcess(msg);
      var res = [];
      for (var i = 0; i < msg.length; i++) {
        var re = msg[i];
        var pos = taba.indexOf(re);
        pos = (akey * pos + bkey) % n;
        res = res + taba[pos];
      }
      document.getElementById('resultatAffine').value = res;
    }
  });
}
//////////////////////dechiffrer
if (document.getElementById('buttonAffine1') != null) {
  var button = document.getElementById('buttonAffine1');
  button.addEventListener('click', function cesar() {
    if (document.getElementById('aKeyAffine') == null && document.getElementById('bKeyAffine') == null) alert("Ajouter une clef");
    else {

      const akey = parseInt(document.getElementById("aKeyAffine").value);
      const bkey = parseInt(document.getElementById("bKeyAffine").value);
      let msg = document.getElementById("messageAffine").value;
      msg = textProcess(msg);
      var res = [];
      for (var i = 0; i < msg.length; i++) {
        var re = msg[i];
        var pos = taba.indexOf(re);
        akey1 = modInverse(akey, 26);
        pos = (akey1 * (pos - bkey)) % n;
        if (pos < 0) pos = pos + 26;
        res = res + taba[pos];
      }
      document.getElementById('resultatAffine').value = res;
    }
  });
}


////////////////////////////////////////////////////////vignere
///////////////////////Chiffrer
if (document.getElementById('buttonVignere') != null) {
  var button = document.getElementById('buttonVignere');
  button.addEventListener('click', function encrypt() {
    if (document.getElementById('keyVignere') == null) alert("Ajouter une clef");
    else {

      const key = document.getElementById("keyVignere").value;
      let msg = document.getElementById("messageVignere").value;
      var res = [];
      let extendedKey = key.repeat((msg.length / key.length) + 1);
      for (var i = 0; i < msg.length; i++) {
        var re1 = msg[i];
        var re2 = extendedKey[i];

        var pos1 = taba.indexOf(re1);
        var pos2 = taba.indexOf(re2);

        var pos = (pos1 + pos2) % n;
        res = res + taba[pos];
      }
      document.getElementById('resultatVignere').value = res;
    }
  });
}
//////////////////////dechiffrer
if (document.getElementById('buttonVignere1') != null) {
  var button = document.getElementById('buttonVignere1');
  button.addEventListener('click', function encrypt() {
    if (document.getElementById('keyVignere') == null) alert("Ajouter une clef");
    else {

      const key = document.getElementById("keyVignere").value;
      let msg = document.getElementById("messageVignere").value;
      var res = [];
      let extendedKey = key.repeat((msg.length / key.length) + 1);
      for (var i = 0; i < msg.length; i++) {
        var re1 = msg[i];
        var re2 = extendedKey[i];

        var pos1 = taba.indexOf(re1);
        var pos2 = taba.indexOf(re2);

        var pos = (pos1 - pos2) % n;
        if (pos < 0) pos = pos + 26;
        res = res + taba[pos];
      }
      document.getElementById('resultatVignere').value = res;
    }
  });
}



/////////////////////////////////////////////////////////////Hill
///////////////////////Chiffrer
if (document.getElementById('buttonHill') != null) {
  var button = document.getElementById('buttonHill');
  button.addEventListener('click', function encrypt() {
    if (document.getElementById('aKeyHill') == null && document.getElementById('bKeyHill') && document.getElementById('cKeyHill') && document.getElementById('dKeyHill') == null) alert("Ajouter une clef");
    else {
      const akey = parseInt(document.getElementById("aKeyHill").value);
      const bkey = parseInt(document.getElementById("bKeyHill").value);
      const ckey = parseInt(document.getElementById("cKeyHill").value);
      const dkey = parseInt(document.getElementById("dKeyHill").value);
      let msg = document.getElementById("messageHill").value;
      msg = textProcess(msg);
      var res = [];
      for (var i = 0; i < msg.length; i = i + 2) {
        var re1 = msg[i];
        var re2 = msg[i + 1];

        var pos1 = taba.indexOf(re1);
        var pos2 = taba.indexOf(re2);

        var pos11 = (akey * pos1 + bkey * pos2) % n;
        var pos22 = (ckey * pos1 + dkey * pos2) % n;

        res = res + taba[pos11] + taba[pos22];
      }
      document.getElementById('resultatHill').value = res;
    }
  });
}
//////////////////////dechiffrer
