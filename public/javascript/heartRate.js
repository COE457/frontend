function h() {
  let svg = Snap("#heartRate");
  Snap.load("../images/heart.svg", f => {
    svg.append(f.select("#usable"));
    svg.select("#bps").attr({text: "75.0"});
  });
  
}
