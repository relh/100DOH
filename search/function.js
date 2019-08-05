

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
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.boardgame
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[1].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.diy
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[2].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.drink
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[3].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.food
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[4].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.furniture
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[5].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.gardening
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[6].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.housework
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[7].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.packing
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[8].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.puzzle
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[9].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.repair
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }
    else if (choice[10].checked){
        readTextFile("stats.json", function(text){
            var data = JSON.parse(text);
            console.log(data);
            //document.getElementById("test").innerHTML = data.puzzle;
            genre = data.study
            var to_show = "";
            for (i = 0; i < genre.length; i++ ){
    
                to_show += "<tb>"
                to_show += "<a href=\"https://www.youtube.com/watch?v=" + genre[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + genre[i] + "/0.jpg\"></a>"
                to_show += "</tb>"
            }
            document.getElementById("show").innerHTML = to_show;
        });
    }

    // readTextFile("stats.json", function(text){
    //     var data = JSON.parse(text);
    //     console.log(data);
    //     //document.getElementById("test").innerHTML = data.puzzle;
    //     puzzle = data.puzzle
    //     var to_show = "";
    //     for (i = 0; i < puzzle.length; i++ ){

    //         to_show += "<tb>"
    //         to_show += "<a href=\"https://www.youtube.com/watch?v=" + puzzle[i] + "\"><img border=\"none\" width=\"192\" height=\"108\" style=\"padding: 6px\" src=\"https://img.youtube.com/vi/" + puzzle[i] + "/0.jpg\"></a>"
    //         to_show += "</tb>"
    //     }
    //     document.getElementById("show").innerHTML = to_show;
    // });
    

}