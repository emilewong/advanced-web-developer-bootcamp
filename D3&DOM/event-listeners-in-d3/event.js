//add event on h1 click

d3.select("h1").on("click", function(){
    console.log("h3 clicked!");
})

//remove event listener to h1
d3.select("h1").on("click", null);

//making the form working
d3.select("#new-note").on("submit", function(){
    //accessing the event object and prevent the default behaviour of the form
    d3.event.preventDefault();
    let input = d3.select("input");
    d3.select("#notes")
        .append("p")
            .classed("note", true)
            .text(input.property("value"));//accessing text value by calling property "value"
    //clear the input field
    input.property("value", "");
})
//remove element
//d3.selectAll("p").remove();