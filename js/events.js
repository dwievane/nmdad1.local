;(function() {

  function ToerismeApp(id, parentContainer) {
    this.API_URL = 'https://datatank.stad.gent/4/toerisme/visitgentevents.json';
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
            var id = 1;
            var tempStr = '';
            for(i=0; i<20; i++) {
              var title = data[i].title;
              var contact = data[i].contact[0];
              //var website = contact.website[0];
              //var weburl = website.url;
              var images = data[i].images[0];
              var language = data[i].language;
              var website = '';
              if(contact.website){
                website = contact.website[0].url;
                //console.log(website);
              }
              if(language == 'nl'){
                    tempStr += '<div class="row row_events">';
                    tempStr += '<a href="http://' + website  +'" target="_blank";>';
                    tempStr += '<div class="col-xs-6"><div class="div_image" style="background: url(' + images +') no-repeat center ;background-size:cover;"></div></div>';
                    tempStr += '<div class="col-xs-6"><h4>' + title + '</h4>';
                    tempStr += '<p>Adres: ' + contact.street + ' nr '  + contact.number + '<br> Stad: ' + contact.city +'</p>';
                    tempStr += '</div>'; /* einde adres */ 
                    tempStr += '</a>';
                    tempStr += '<a class="link_heart" id="myDIV'+[i]+'" alt="Add to favorites" title="Add to favorites"  onclick="myFunction('+[i]+')" ><span class="glyphicon glyphicon-heart-empty"></span></a>';
                    tempStr += '</div>';/* einde row */     
            }else{};
            } 
            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('xhr.status');
            }
        }
        xhr.onerror = function() {
        console.log('Error');
        }
        xhr.send();
        };
    this.updateUI = function() {
    };
    this.toString = function() {
    return `ToerismeApp with id: ${this.id}`;
    };
    };
    var ww1 = new ToerismeApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());   
})();
function myFunction(id){
document.getElementById("myDIV"+id).classList.toggle("link_heart-select");
}
