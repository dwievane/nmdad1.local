;(function() {

  function RestoApp(id, parentContainer) {
    this.API_URL = "../../data/resto.json";
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
            
            //console.log(data);
            var id = 0;
            var tempStr = '';
            //max 56, nr 57 is empty
            for(i=0; i < 56; i++){
            var naam = data[i].naam;
            var straat = data[i].straat;
            var nummer = data[i].huisnr;
            var postcode = data[i].postcode;
            var deelgemeente = data[i].deelgemeente;
            var image = data[i].image;
            
            tempStr += '<div class="row row_resto">';
            tempStr += '<div class="col-xs-6"><div class="div_image" style="background: url(' + image +') no-repeat center; background-size:cover;"></div></div>'
            tempStr += '<div class="col-xs-6"><h4>' + naam + '</h4>';
            tempStr += '<p>' + postcode + ' ' + deelgemeente +', ' + straat + ' ' + nummer + '<p></div>';
            tempStr += '<a class="link_heart" id="myDIV'+[i]+'" alt="Add to favorites" title="Add to favorites"  onclick="myFunction('+[i]+')" ><span class="glyphicon glyphicon-heart-empty"></span></a>'
            tempStr += '</div>';//end row

            }//end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log(xhr.status);
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
    return `RestoApp with id: ${this.id}`;
    };

    };

    var ww1 = new RestoApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());

})();

function myFunction(id){
document.getElementById("myDIV"+id).classList.toggle("link_heart-select");
}