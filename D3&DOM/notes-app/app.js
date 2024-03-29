
//Remove All Notes
d3.select(".remove")
  .on("click", () =>{
    d3.selectAll(".note")
      .remove();
  });

//I'm feeling Lucky 
d3.select(".lucky")
  .on("click", () =>{
    d3.selectAll(".note")
      .style("font-size", function(){
        return Math.random() *100 +"px";
      });
  });

let input = d3.select('input');
let preview = d3.select('.preview');
//preview

input.on('input', () =>{
  let note = d3.event.target.value;
  //console.log(note);
  setPreview(note);
});

function setPreview(val){
  preview.text(val)
    .classed("hide", val === "");
}

d3.select("#new-note")
    .on('submit', () => {
      d3.event.preventDefault();      
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
      setPreview("");
    });