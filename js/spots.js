;(function() {

  function SpotsApp(id, parentContainer) {
    this.API_URL = 'http://datatank.stad.gent/4/toerisme/visitgentspots.json';
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
        var that = this;

        var xhr = new XMLHttpRequest();
        xhr.open('get', this.API_URL, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
        if(xhr.status == 200) {
            var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
            var dubbele_id = [];
 
            var tempStr = '';
            for(i=0; i<20; i++) {
              var title = data[i].title;
              //var summary = data[i].summary;
              //var description = data[i].description;
              //var openinghours_short = data[i].openinghours_short;
              var contact = data[i].contact[0];
              //var prices = data[i].prices;
              var images = data[i].images[0];
              var language = data[i].language;
              if(contact.website){
                website = contact.website[0].url;
                //console.log(website);
              }
              var id = data[i].id;
              
            if(language == 'nl'){
                if(dubbele_id.indexOf(id) ==-1){
                    dubbele_id.push(id);
                    tempStr += '<div class="row row_spots">';
                    tempStr += '<a href="http://' + website  +'">';
                    tempStr += '<div class="col-xs-6"><div class="div_image" style="background: url(' + images +') no-repeat center ;background-size:cover;"></div></div>';
                    tempStr += '<div class="col-xs-6"><h4>' + title + '</h4>';
                    tempStr += '<p> Adres: ' + contact.street + ' nr '  + contact.number + '<br> Stad: ' + contact.city + '</p>';
                    tempStr += '</div>'; /* einde adres */ 
                    tempStr += '</a>';
                    tempStr += '<a class="link_heart" id="myDIV'+[i]+'" alt="Add to favorites" title="Add to favorites"  onclick="myFunction('+[i]+')" ><span class="glyphicon glyphicon-heart-empty"></span></a>';
                    tempStr += '</div>';/* einde row */
                } // end if dubbele_id
            } // end if language
            } // end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('Error');
            }


        }

        xhr.onerror = function() {
        console.log(xhr.status);
        }
        xhr.send();
        };

    this.updateUI = function() {

    };

    this.toString = function() {
    return `SpotsApp with id: ${this.id}`;
    };

    };

    var ww1 = new SpotsApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());

})();

function myFunction(id){
document.getElementById("myDIV"+id).classList.toggle("link_heart-select");
}