

// var openf1 = fso.OpenTextFile("1.txt");
// var str1 = openf1.ReadLine();
// var str2 = openf1.ReadAll();

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}



function update(){
    var choice = document.getElementsByName('genre');
    var genre_name;
    if (choice[0].checked){
        genre_name = choice[0].value;
        // alert("choice is ok " + genre_name)
    }
    else if (choice[1].checked){
        genre_name = choice[1].value;
    }
    else if (choice[2].checked){
        genre_name = choice[2].value;
    }
    else if (choice[3].checked){
        genre_name = choice[3].value;
    }
    else if (choice[4].checked){
        genre_name = choice[4].value;
    }
    else if (choice[5].checked){
        genre_name = choice[5].value;
    }
    else if (choice[6].checked){
        genre_name = choice[6].value;
    }
    else if (choice[7].checked){
        genre_name = choice[7].value;
    }
    else if (choice[8].checked){
        genre_name = choice[8].value;
    }
    else if (choice[9].checked){
        genre_name = choice[9].value;
    }
    else if (choice[10].checked){
        genre_name = choice[10].value;
    }

    // var i;
    // var mydata = JSON.parse(keyword_video);
    //var to_show = mydata[genre]
    // for (i = 0; i < to_show.length; i++ ){
    //     text += "<tr><tb>"
    //     text += "<a href=\"https://www.youtube.com/watch?v=" + to_show[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"http://i.ytimg.com/vi/" + toshow[i] + "/mqdefault.jpg\"></a>"
    //     text += "</tb></tr><br>"
    // }

    //usage:
    readTextFile("stats.json", function(text){
        var data = JSON.parse(text);
        console.log(data);
        //document.getElementById("test").innerHTML = data.puzzle;
        puzzle = data.puzzle
        var to_show = "";
        for (i = 0; i < puzzle.length; i++ ){
            to_show += "<tr><tb>"
            to_show += "<a href=\"https://www.youtube.com/watch?v=" + puzzle[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + puzzle[i] + "/0.jpg\"></a>"
            to_show += "</tb></tr><br>"
        }
        document.getElementById("show").innerHTML = to_show;
    });
    //to_show = data.genre_name.toLowerCase() "https://img.youtube.com/vi/" + video_id + "/" + str(0) +".jpg"
    


    // document.getElementById("len").innerHTML = to_show.length;
    // //document.getElementById("genre_name").innerHTML = keyword_video;
    // document.getElementById("show").innerHTML = genre_name;
    // document.getElementById("test").innerHTML = text;


    // var rawFile = new XMLHttpRequest();
    // rawFile.open("GET", "stats.json", false);
    // rawFile.onreadystatechange = function ()
    // {
    //     if(rawFile.readyState === 4)
    //     {
    //         if(rawFile.status === 200 || rawFile.status == 0)
    //         {
    //             callback(xobj.responseText);


    //             var data = rawFile.responseText;
    //             var text = "\"" + data + "\"";
    //             var obj = JSON.parse(text);

    //             //to_show = obj[genre_name]
    //             document.getElementById("len").innerHTML = text;
    //             document.getElementById("test").innerHTML = typeof(obj);

                
    //         }
    //     }
    // }
    // rawFile.send(null);


}