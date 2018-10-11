const oneKegGraph = document.querySelector(".oneKegGraph");
const beerThingyTop = document.querySelector(".beerThingyTop");
const beerCont = document.querySelector(".beerCont");
const beerLiquid = document.querySelector(".beerLiquid");
const rectBeer = document.querySelector(".rectBeer");
const beerNameTap = document.querySelector(".beerNameTap");
let template = document.querySelector(".beerTemp").content;

document.addEventListener("DOMContentLoaded", init);
//const data = FooBar.getData();
// const newData = JSON.parse(FooBar.getData());

function init() {
  //little man animation

  setInterval(update, 5000); //   <------
}

update();

function update() {
  const data = JSON.parse(FooBar.getData());

  console.log(data);
  handleBartenders(data);
  handleQueue(data.queue);
  bartenders(data.bartenders);
  stateBartenders(data.bartenders);
  taskBartenders(data.bartenders);

  createTapGraphContainers(data.taps);

  showBeersSold(data);
  showBeerImage(data);
}

function handleQueue(queue) {
  document.querySelector(" #queue h2").textContent = queue.length;
  document.querySelector("#queue #qv").style.width = 30 * queue.length + "px";
}

function handleBartenders(taps) {
  //console.log(taps);
}

//get  jonas

function bartenders(bartenders) {
  // get bartenders names
  const all = document.querySelectorAll(".bartender");
  all.forEach((div, index) => {
    div.querySelector("h1").textContent = bartenders[index].name;
    div.querySelector(".state").textContent = bartenders[index].status;
    if (bartenders[index].servingCustomer >= 1) {
      div.querySelector(".serving").textContent =
        bartenders[index].servingCustomer;
    } else {
      div.querySelector(".serving").textContent = "none";
    }
  });
}

function stateBartenders(bartenders) {
  //document.querySelector(".stateJ").textContent = bartenders[1].status;
}

function taskBartenders(bartenders) {
  const all = document.querySelectorAll(".bartender");
  all.forEach((div, index) => {
    //console.log(bartenders[index].statusDetail);
    if (bartenders[index].statusDetail === "pourBeer") {
      div.querySelector("img").src = "svg/pour-beer_icon.png";
    } else if (bartenders[index].statusDetail === "startServing") {
      div.querySelector("img").src = "svg/bartender-white.png";
    } else if (bartenders[index].statusDetail === "releaseTap") {
      div.querySelector("img").src = "svg/relese-tab_icon.png";
    } else if (bartenders[index].statusDetail === "waiting") {
      div.querySelector("img").src = "svg/waiting.png";
    } else if (bartenders[index].statusDetail === "receivePayment") {
      div.querySelector("img").src = "svg/recive_money.png";
    } else if (bartenders[index].statusDetail === "reserveTap") {
      div.querySelector("img").src = "svg/reserve-tab_icon.svg";
    }
  });
}

function createTapGraphContainers(taps) {
  let kegGraphs = document.querySelector(".kegGraphs");
  kegGraphs.innerHTML = "";
  taps.forEach(tap => {
    //tap.level
    let clone = template.cloneNode(true);
    let newHeight = (tap.level * 200) / tap.capacity + "px";
    let newY = 200 - (tap.level * 200) / tap.capacity + "px";

    clone.querySelector("h1").textContent = tap.beer;
    clone.querySelector(".beerCont").style.height = "200px";
    clone.querySelector(".beerLiquid").style.height = newHeight;
    clone.querySelector(".beerLiquid").style.top = newY;

    /*  if (tap.beer == "El Hefe") {
      rightImage = "images/elhefe.png";
    } else if (tap.beer == "Row 26") {
      rightImage = "images/row26.png";
    } else if (tap.beer == "Sleighride") {
      rightImage = "images/sleighride.png";
    } else if (tap.beer == "Hollaback Lager") {
      rightImage = "images/hollaback.png";
    } else if (tap.beer == "Ruined Childhood") {
      rightImage = "images/ruinedchildhood.png";
    } else if (tap.beer == "Hoppily Ever After") {
      rightImage = "images/hoppilyeverafter.png";
    } else if (tap.beer == "Fairy Tale Ale") {
      rightImage = "images/fairytaleale.png";
    } else if (tap.beer == "Mowintime") {
      rightImage = "images/mowintime.png";
    } else if (tap.beer == "GitHop") {
      rightImage = "images/githop.png";
    } else {
      rightImage = "images/steampunk.png";
    }

    clone.querySelector(".beerImage").src = rightImage; */

    clone.querySelector(
      ".thingyTop"
    ).innerHTML = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 28">
    <defs>
        <style>
            .cls-1 {
                fill: #999;
            }
        </style>
    </defs>
    <title>tap-upper</title>
    <g id="upperPartTap">
        <rect class="cls-1" y="14" width="59" height="14" rx="2.4175" ry="2.4175" />
        <rect class="cls-1" x="25" y="6" width="10" height="8" />
        <rect class="cls-1" x="12" width="35" height="6" rx="1.5882" ry="1.5882" />
    </g>
</svg>`;

    //console.log(newHeight);
    kegGraphs.appendChild(clone);
  });
}

// BEER GLASSES SOLD

function showBeersSold(data) {
  let elHeve = document.querySelector("#elHeveDiv");
  let gitHop = document.querySelector("#gitHopDiv");
  let mowinTime = document.querySelector("#mowinTimeDiv");
  let fairytaleAle = document.querySelector("#fairytaleAleDiv");
  let row26 = document.querySelector("#row26Div");
  let happilyEverAfter = document.querySelector("#happilyEverAfterDiv");
  let ruinedChildhood = document.querySelector("#ruinedChildhoodDiv");

  elHeve.style.width = ((2500 - data.taps[0].level) / 50) * 20 + "px";
  gitHop.style.width = ((2500 - data.taps[1].level) / 50) * 20 + "px";
  mowinTime.style.width = ((2500 - data.taps[2].level) / 50) * 20 + "px";
  fairytaleAle.style.width = ((2500 - data.taps[3].level) / 50) * 20 + "px";
  row26.style.width = ((2500 - data.taps[4].level) / 50) * 20 + "px";
  happilyEverAfter.style.width = ((2500 - data.taps[5].level) / 50) * 20 + "px";
  ruinedChildhood.style.width = ((2500 - data.taps[6].level) / 50) * 20 + "px";

  let p1 = document.querySelector("#p1");
  let p2 = document.querySelector("#p2");
  let p3 = document.querySelector("#p3");
  let p4 = document.querySelector("#p4");
  let p5 = document.querySelector("#p5");
  let p6 = document.querySelector("#p6");
  let p7 = document.querySelector("#p7");

  p1.textContent = (2500 - data.taps[0].level) / 50;
  p2.textContent = (2500 - data.taps[1].level) / 50;
  p3.textContent = (2500 - data.taps[2].level) / 50;
  p4.textContent = (2500 - data.taps[3].level) / 50;
  p5.textContent = (2500 - data.taps[4].level) / 50;
  p6.textContent = (2500 - data.taps[5].level) / 50;
  p7.textContent = (2500 - data.taps[6].level) / 50;
}

function showBeerImage(data) {
  let first = document.querySelector("#first");
  let second = document.querySelector("#second");
  let third = document.querySelector("#third");
  let fourth = document.querySelector("#fourth");
  let fifth = document.querySelector("#fifth");
  let sixth = document.querySelector("#sixth");
  let seventh = document.querySelector("#seventh");

  if (data.taps[0].beer == "El Hefe") {
    first.src = "images/elhefe.png";
  } else if (data.taps[0].beer == "Row 26") {
    first.src = "images/row26.png";
  } else if (data.taps[0].beer == "Sleighride") {
    first.src = "images/sleighride.png";
  } else if (data.taps[0].beer == "Hollaback Lager") {
    first.src = "images/hollaback.png";
  } else if (data.taps[0].beer == "Ruined Childhood") {
    first.src = "images/ruinedchildhood.png";
  } else if (data.taps[0].beer == "Hoppily Ever After") {
    first.src = "images/hoppilyeverafter.png";
  } else if (data.taps[0].beer == "Fairy Tale Ale") {
    first.src = "images/fairytaleale.png";
  } else if (data.taps[0].beer == "Mowintime") {
    first.src = "images/mowintime.png";
  } else if (data.taps[0].beer == "GitHop") {
    first.src = "images/githop.png";
  } else {
    first.src = "images/steampunk.png";
  }

  if (data.taps[1].beer == "El Hefe") {
    second.src = "images/elhefe.png";
  } else if (data.taps[1].beer == "Row 26") {
    second.src = "images/row26.png";
  } else if (data.taps[1].beer == "Sleighride") {
    second.src = "images/sleighride.png";
  } else if (data.taps[1].beer == "Hollaback Lager") {
    second.src = "images/hollaback.png";
  } else if (data.taps[1].beer == "Ruined Childhood") {
    second.src = "images/ruinedchildhood.png";
  } else if (data.taps[1].beer == "Hoppily Ever After") {
    second.src = "images/hoppilyeverafter.png";
  } else if (data.taps[1].beer == "Fairy Tale Ale") {
    second.src = "images/fairytaleale.png";
  } else if (data.taps[1].beer == "Mowintime") {
    second.src = "images/mowintime.png";
  } else if (data.taps[1].beer == "GitHop") {
    second.src = "images/githop.png";
  } else {
    second.src = "images/steampunk.png";
  }

  if (data.taps[2].beer == "El Hefe") {
    third.src = "images/elhefe.png";
  } else if (data.taps[2].beer == "Row 26") {
    third.src = "images/row26.png";
  } else if (data.taps[2].beer == "Sleighride") {
    third.src = "images/sleighride.png";
  } else if (data.taps[2].beer == "Hollaback Lager") {
    third.src = "images/hollaback.png";
  } else if (data.taps[2].beer == "Ruined Childhood") {
    third.src = "images/ruinedchildhood.png";
  } else if (data.taps[2].beer == "Hoppily Ever After") {
    third.src = "images/hoppilyeverafter.png";
  } else if (data.taps[2].beer == "Fairy Tale Ale") {
    third.src = "images/fairytaleale.png";
  } else if (data.taps[2].beer == "Mowintime") {
    third.src = "images/mowintime.png";
  } else if (data.taps[2].beer == "GitHop") {
    third.src = "images/githop.png";
  } else {
    third.src = "images/steampunk.png";
  }

  if (data.taps[3].beer == "El Hefe") {
    fourth.src = "images/elhefe.png";
  } else if (data.taps[3].beer == "Row 26") {
    fourth.src = "images/row26.png";
  } else if (data.taps[3].beer == "Sleighride") {
    fourth.src = "images/sleighride.png";
  } else if (data.taps[3].beer == "Hollaback Lager") {
    fourth.src = "images/hollaback.png";
  } else if (data.taps[3].beer == "Ruined Childhood") {
    fourth.src = "images/ruinedchildhood.png";
  } else if (data.taps[3].beer == "Hoppily Ever After") {
    fourth.src = "images/hoppilyeverafter.png";
  } else if (data.taps[3].beer == "Fairy Tale Ale") {
    fourth.src = "images/fairytaleale.png";
  } else if (data.taps[3].beer == "Mowintime") {
    fourth.src = "images/mowintime.png";
  } else if (data.taps[3].beer == "GitHop") {
    fourth.src = "images/githop.png";
  } else {
    fourth.src = "images/steampunk.png";
  }

  if (data.taps[4].beer == "El Hefe") {
    fifth.src = "images/elhefe.png";
  } else if (data.taps[4].beer == "Row 26") {
    fifth.src = "images/row26.png";
  } else if (data.taps[4].beer == "Sleighride") {
    fifth.src = "images/sleighride.png";
  } else if (data.taps[4].beer == "Hollaback Lager") {
    fifth.src = "images/hollaback.png";
  } else if (data.taps[4].beer == "Ruined Childhood") {
    fifth.src = "images/ruinedchildhood.png";
  } else if (data.taps[4].beer == "Hoppily Ever After") {
    fifth.src = "images/hoppilyeverafter.png";
  } else if (data.taps[4].beer == "Fairy Tale Ale") {
    fifth.src = "images/fairytaleale.png";
  } else if (data.taps[4].beer == "Mowintime") {
    fifth.src = "images/mowintime.png";
  } else if (data.taps[4].beer == "GitHop") {
    fifth.src = "images/githop.png";
  } else {
    fifth.src = "images/steampunk.png";
  }

  if (data.taps[5].beer == "El Hefe") {
    sixth.src = "images/elhefe.png";
  } else if (data.taps[5].beer == "Row 26") {
    sixth.src = "images/row26.png";
  } else if (data.taps[5].beer == "Sleighride") {
    sixth.src = "images/sleighride.png";
  } else if (data.taps[5].beer == "Hollaback Lager") {
    sixth.src = "images/hollaback.png";
  } else if (data.taps[5].beer == "Ruined Childhood") {
    sixth.src = "images/ruinedchildhood.png";
  } else if (data.taps[5].beer == "Hoppily Ever After") {
    sixth.src = "images/hoppilyeverafter.png";
  } else if (data.taps[5].beer == "Fairy Tale Ale") {
    sixth.src = "images/fairytaleale.png";
  } else if (data.taps[5].beer == "Mowintime") {
    sixth.src = "images/mowintime.png";
  } else if (data.taps[5].beer == "GitHop") {
    sixth.src = "images/githop.png";
  } else {
    sixth.src = "images/steampunk.png";
  }

  if (data.taps[6].beer == "El Hefe") {
    seventh.src = "images/elhefe.png";
  } else if (data.taps[6].beer == "Row 26") {
    seventh.src = "images/row26.png";
  } else if (data.taps[6].beer == "Sleighride") {
    seventh.src = "images/sleighride.png";
  } else if (data.taps[6].beer == "Hollaback Lager") {
    seventh.src = "images/hollaback.png";
  } else if (data.taps[6].beer == "Ruined Childhood") {
    seventh.src = "images/ruinedchildhood.png";
  } else if (data.taps[6].beer == "Hoppily Ever After") {
    seventh.src = "images/hoppilyeverafter.png";
  } else if (data.taps[6].beer == "Fairy Tale Ale") {
    seventh.src = "images/fairytaleale.png";
  } else if (data.taps[6].beer == "Mowintime") {
    seventh.src = "images/mowintime.png";
  } else if (data.taps[6].beer == "GitHop") {
    seventh.src = "images/githop.png";
  } else {
    seventh.src = "images/steampunk.png";
  }
}
