function roll4() {
  let die = document.getElementById("d4");
  die.classList.add("shake");

  setTimeout(function() {
    die.classList.remove("shake");
    let value = Math.floor(Math.random()*4);
    document.getElementById("d4").innerHTML = value+1;
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
    document.getElementById("d6").innerHTML = value+1;
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
    document.getElementById("d8").innerHTML = value+1;
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
    document.getElementById("d10").innerHTML = value+1;
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
    document.getElementById("d12").innerHTML = value+1;
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
    document.getElementById("d20").innerHTML = value+1;
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