let d4 = ["4_1.png",
"4_2.png",
"4_3.png",
"4_4.png"];

let d6 = ["6_1.png",
"6_2.png",
"6_3.png",
"6_4.png",
"6_5.png",
"6_6.png"];

let d8 = ["8_1.png",
"8_2.png",
"8_3.png",
"8_4.png",
"8_5.png",
"8_6.png",
"8_7.png",
"8_8.png"];

let d10 = ["10_1.png",
"10_2.png",
"10_3.png",
"10_4.png",
"10_5.png",
"10_6.png",
"10_7.png",
"10_8.png",
"10_9.png",
"10_10.png"];

let d12 = ["12_1.png",
"12_2.png",
"12_3.png",
"12_4.png",
"12_5.png",
"12_6.png",
"12_7.png",
"12_8.png",
"12_9.png",
"12_10.png",
"12_10.png",
"12_11.png",
"12_12.png"];

let d20 = ["20_1.png",
"20_2.png",
"20_3.png",
"20_4.png",
"20_4.png",
"20_5.png",
"20_6.png",
"20_7.png",
"20_8.png",
"20_9.png",
"20_10.png",
"20_11.png",
"20_12.png",
"20_13.png",
"20_14.png",
"20_15.png",
"20_16.png",
"20_17.png",
"20_18.png",
"20_19.png",
"20_20.png"];

function roll4() {
  let die = document.getElementById("d4");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*4);
    document.getElementById("d4").setAttribute("src", d4[value]);
  },
  1000  
  );
}

function roll6() {
  let die = document.getElementById("d6");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*6);
    document.getElementById("d6").setAttribute("src", d6[value]);
  },
  1000  
  );
}
function roll8() {
  let die = document.getElementById("d8");
  die.classList.add("shake");
  
  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*8);
    document.getElementById("d8").setAttribute("src", d8[value]);
  },
  1000  
  );
}
  function roll10() {
  let die = document.getElementById("d10");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*10);
    document.getElementById("d10").setAttribute("src", d10[value]);
  },
  1000  
  );
}
  function roll12() {
  let die = document.getElementById("d12");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*12);
    document.getElementById("d12").setAttribute("src", d12[value]);
  },
  1000  
  );
}
  function roll20() {
  let die = document.getElementById("d20");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*20);
    document.getElementById("d20").setAttribute("src", d20[value]);
  },
  1000  
  );
}
  function roll100() {
  let die = document.getElementById("d100");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*100);
    document.getElementById("d100").innerHTML = value+1;
  },
  1000  
  );
}