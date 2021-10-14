window.onload = function () {

    document.getElementById("lookingFor").addEventListener("click", function (event) {
        event.preventDefault();
        const value = document.getElementById("word").value;
        if (value === "")
          return;


        const wordUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
        console.log(wordUrl);

        fetch(wordUrl)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
  console.log(json.word);
                let results = "";
                let results2 = "";

                document.getElementById("dictionaryHeading").innerHTML = "<h2 id =dictContent2>Information on the word " + json[0].word + '</h2>';
                    results += '<div id="dictContent" class="row"><ul id = "dictList">';
                    results += '<li><h4><em>Definition: </em></h4>';
                    results += '<p>' + json[0].meanings[0].definitions[0].definition + '</p></li>';
                    results += '<li><h4><em>Example: </em></h4>'
                    results += '<p>' + json[0].meanings[0].definitions[0].example + '</p></li>';
                    results += '</ul></div>';
                document.getElementById("originHeading").innerHTML = "<h2 id =dictContent2>Origins and Synonyms of the word " + json[0].word + '</h2>';
                    results2 += '<div id="dictContent" class="row"><ul id = "dictList">';
                    results2 += '<li><h4><em>Origin: </em></h4>'
                    results2 += '<p>' + json[0].origin + '</p></li>';
                    results2 += '<li><h4><em>Synonyms: </em></h4>';
                    results2 += '<ul><li>';
                     if(json[0].meanings[0].definitions[0].synonyms[0] == null){
                      results2 += 'No synonyms';
                    } else {
                      results2 += json[0].meanings[0].definitions[0].synonyms[0];
                    }
                    results2 += '</li><li>';
                    if(json[0].meanings[0].definitions[0].synonyms[1] == null){
                     results2 += 'No synonyms';
                     } else {
                       results2 += json[0].meanings[0].definitions[0].synonyms[1];
                     }
                     results2 += '</li><li>';
                     if(json[0].meanings[0].definitions[0].synonyms[2] == null){
                      results2 += 'No synonyms';
                    } else {
                      results2 += json[0].meanings[0].definitions[0].synonyms[2];
                    }
                    results2 += '</li></ul></li>';

                    results2 += '</ul></div>';





                document.getElementById("dictionaryResults").innerHTML = results;
                document.getElementById("originResults").innerHTML = results2;
            });
    });
}
