let summary = new Summary();
let usMap = new USMap(summary);
let worldMap = new WorldMap();
let yearchart = new YearChart(usMap);
let barChart = null;

// #################  Data for World Countries Mapping
d3.csv("data/world_id_name_mapping.csv", function(error, countries) {
	if (error) throw error;
  var id_name_map = new Object();
  var id_region_map = new Object();
  for(var i=0; i < countries.length; i++){
      let c = countries[i];
      id_name_map[c.id] = c["name"];
      id_region_map[c.id] = "crap";//c["region"];
  }
  worldMap.setCountriesMappings(id_name_map, id_region_map);
});

// #################  Data for US map

// d3.json("data/ustopo.json", function(error, us) {
//   if (error) throw error;
//   usMap.drawMap(us);
// });
//
// d3.csv("data/united_states_gtd.csv", function(error, us) {
//   if (error) throw error;
//   usMap.setEntireData(us);
//   usMap.plotStates(us);
//   yearchart.update(us);
// });

// #################### Data for Bar Charts

// d3.csv("data/gtd_by_countries.csv", function(error, data) {
// 	if (error) throw error;
//   	barChart = new BarChart(data);
//     barChart.updateBarChart("num_attacks");
// });
//
// function changeData() {
//     let metric = document.getElementById('metric').value;
//     barChart.updateBarChart(metric)
// }

// #################### Data for World Map

d3.json("data/world.json", function (error, world) {
    if (error) throw error;
    worldMap.drawMap(world)
  });
