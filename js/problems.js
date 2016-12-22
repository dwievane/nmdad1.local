;(function() {
  function ProblemsApp(id, parentContainer) {
    this.API_URL = 
    //"https://datatank.stad.gent/4/mobiliteit/verkeersmeldingenactueel.json"
    "../../data/problems.json"
    ;
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
            //var id = 0;
            var tempStr = '';

            //waarom infinite loop?
            for(i=0; i<4; i++){

            var result = data.result[i];
            var type = result.type;
            var transport = result.transport;
            var payload = result.payload;
            var message = payload.message;
            var sourcepayload = result.sourcePayload;
            var subtype = sourcepayload.subtype;
            var street = sourcepayload.street;
            var reliability = sourcepayload.reliability
            //console.log(result);
            
            
            tempStr += '<div class="row row_problems">';
            tempStr += '<h4>' + subtype + '</h4>';
            tempStr += '<div class="col-xs-6">straat: ' + street + '</div>';
            tempStr += '<div class="col-xs-6 text-right">score ' + reliability + ' / 6' + '</div>';
            tempStr += '<div class"col-xs-12"><p>Boodschap: ' + message + '</p></div>';
            tempStr += '</div>';//end row
            }//end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('Error 1');
            }
        }
        xhr.onerror = function() {
        console.log('Error 2');
        }
        xhr.send();
        };

    this.updateUI = function() {

    };

    this.toString = function() {
    return `ProblemsApp with id: ${this.id}`;
    };

    };

    var ww1 = new ProblemsApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());

})();
