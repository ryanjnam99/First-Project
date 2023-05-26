var backgroundinfo = document.querySelector(".about");

var string = "Ryan Nam, age 23, is a full-stack developer who graduated from Whitman College with a bachelor's in psychology. As of now, his current whereabouts is located in Clyde Hill, Washington. It is apparent that his sudden change in career stems from his obsession to decipher problems as both a technician and an artist. Hobbies seem to include keeping tabs with all Seattle-based sports teams. Intriguing but emotionally draining.";
var str = string.split("");
var el = document.getElementById('str');


function press() {
    backgroundinfo.scrollIntoView(true);
    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 90);
    })();
}
var stringTwo = "A Weather forecast that adjusts its temperature by Celcius and Fahrenheit.";
var strTwo = stringTwo.split("");
var elTwo = document.getElementById('strTwo');

function press6() {
    (function animate() {
        strTwo.length > 0 ? elTwo.innerHTML += strTwo.shift() : clearTimeout(running);
        var running = setTimeout(animate, 90);
    })()
}

var stringThree = "Of course every career field has it's highs and lows, but what coding rewards you is the emotional and mental satisfaction that allows you to appreciate and marvel at your own labor. -Nam Tzu, The Art of Code";
var strThree = stringThree.split("");
var elThree = document.getElementById('strThree');

function press7() {
    (function animate() {
        strThree.length > 0 ? elThree.innerHTML += strThree.shift() : clearTimeout(running);
        var running = setTimeout(animate, 90);
    })()
}

var myproject = document.querySelector(".project");
function press2() {
    myproject.scrollIntoView(true);
}

var myskills = document.querySelector(".skill");
function press3() {
    myskills.scrollIntoView(true);
}

function press5() {
    window.open("https://mail.yahoo.com/d/folders/1");
}

function navigation2() {
    window.open("https://github.com/ryanjnam99");
}

function press4() {
    window.open("https://github.com/ryanjnam99/DojoWeather");
}

function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}

am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
    {
        country: "CSS",
        litres: 388.5
    },
    {
        country: "HTML",
        litres: 719.5
    },
    {
        country: "JS",
        litres: 330.9
    },

];

chart.innerRadius = am4core.percent(40);
chart.depth = 50;

chart.legend = new am4charts.Legend();

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.depthValue = "litres";
series.dataFields.category = "country";
series.slices.template.cornerRadius = 5;
series.colors.step = 10;

var myHomepage = document.querySelector(".name-container");
function press8() {
    myHomepage.scrollIntoView(true);
}

var myReason = document.querySelector(".Explain");
function press9() {
    myReason.scrollIntoView(true);
}




