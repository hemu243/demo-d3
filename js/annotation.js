type = d3.annotationCalloutCircle

// Annotations for Line Chart
line_annotations = [
{
    type: d3.annotationLabel,
    note: {
        title: "Average Movie Rating",
        label: "Most of movies at this level",
        wrap: 190
    },
    data: {
        "rating": "6.8",
        "percent": "3.6%",
    },
    subject: {
        radius: 50,
        radiusPadding:5,
    },
}]

line_makeAnnotations = d3.annotation()
    .type(type)
    .annotations(line_annotations)

d3.select("#linechart_svg")
    .append("g")
    .attr("class", "annotation-group")
    .attr("id", "linechart_annotation")
    .call(line_makeAnnotations)
