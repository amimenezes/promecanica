var marksCanvas = document.getElementById("marksChart");

var marksData = {
  labels: ["Cap.Técnica (Kcal/h)x1000", "Vazão de óleo (lpm)x10", "cm B", "cm C", "cm D", "Ventilador monofásico trifásico e 12V (hp x 100)"],
  datasets: [{
    label: "PRO 4 600",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [2.5, 4,  6,  11.4, 35.9, (1/6)*100]
  }, {
    label: "PRO 5 600",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [5,   9,  6,  12.7, 35.9, (1/4)*100]
  }, {
    label: "PRO 6 1000",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [15,  20, 10, 15.3, 48.2, (1/4)*100]
  }, {
    label: "PRO 8 1000",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [25,  35, 10, 21.9, 62.8, (1/2)*100]
  }]
};

var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  options: {
    responsive: false,
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 62.8
        }
    }
}
});