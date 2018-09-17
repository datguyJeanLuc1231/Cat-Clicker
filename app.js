let cats = [{
        "name": "Tom",
        "pic": "img/cat.jpg",
        "clicks": 0
    },
    {
        "name": "Sylvester",
        "pic": "img/cat2.jpg",
        "clicks": 0
    }
];

function makeCatPics() {
    let toAdd = "";
    $.each(cats, (catIndex, cat) => {
        toAdd += "<div class='cat col-xs-6'><div class='container'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='clickable'/><div id='" + catIndex.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div></div>";
    });
    $("#main").append("<div class='row'><div class='container'>" + toAdd + "</div></div>");
}

$(document).ready(function () {
    makeCatPics();
    $(".clickable").click(function (obj) {
        let elem = obj.target.parentElement.childNodes[2];
        cats[elem.id].clicks++;
        $("#" + elem.id).text(cats[elem.id].clicks);
    });
});