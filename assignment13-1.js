const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById
("spin-btn");

const finalValue = document.getElementById
("final-value");
//object that stores values of min and max angle for a value
const rotationValues = [
    {minDegree: 0, maxDegree: 30, value: 2},
    {minDegree: 31, maxDegree: 90, value: 1},
    {minDegree: 91, maxDegree: 150, value: 6},
    {minDegree: 151, maxDegree: 210, value: 5},
    {minDegree: 211, maxDegree: 270, value: 4},
    {minDegree: 271, maxDegree: 330, value: 3},
    {minDegree: 331, maxDegree: 360, value: 2},
];

//size of each piece

const data = [16,16,16,16,16,16];

//background color of each piece

var pieColors = [
    "#8b35bc",
    "#b163da",
    "#8b35bc",
    "#b163da",
    "#8b35bc",
    "b163da",
];

//create  chart

let myChart = new Chart (wheel, {
    //plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    //Chart type pie
    type: "pie",
    data: {
        //labels (values which are to be displayed on chart)
        labels: [1,2,3,4,5,6],
        //settings fpr pie chart
        datasets:[
            {
                backgroundColor: pieColors,
                data: data,
            },
        ]
    },
    options:{
        //responsive chart
        responsive: true, 
        animation: {duration: 0 },
        plugins: {
            //hide tooltip and legend
            tooltip: false,
            legend: {
                display: false,
            },
            // display labels inside pie chart
            dataLabels:{
                color: white,
                formatter: (_,context) => context.chart.data.labels[context,dataIndex],
                font: {size: 24},
            },
        },
    },
});

//display value based on the randomAngle
const valueGenerator = (angleValue) => {
    for(let i of rotationValues){
        //if the angleValue is between min and max then display
        if(angleValue >= i.minDegree && angleValue <= i.maxDegree){
            finalValue.innerHTML = <p>Value: ${i.value}</p>;
            spinBtn.disabled = false;
            break;
        }
    }
};

//spinner count
let count=0;
let resultValue=101;
spingBtn.addEventListener("click",() => {
    spingBtn.disabled = true;
    finalValue.innerHTML = <p>Good Luck!</p>;
   
    let randomDegree = Math.floor(math.random()*
    (355 - 0 + 1) + 0);

    let rotationInterval = window.setInterval(()=>{

    myChart.options.rotation = myChart.options.rotation + resultValue;
    myChart.update();

    if(myChart.options.rotation >= 360){
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree){
        valueGenerator(randomDegree);
        clearInterval(rotationInterval);
        count = 0;
        resultValue = 101;
    }

    }, 10);
});