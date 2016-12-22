;(function() {

  function ParkingApp(id, parentContainer) {
    this.API_URL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';
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
            var tempStr = '';
            var id = 0;
            for(i=0; i < data.length; i++){
            var name = data[i].name;
            var address = data[i].address;
            var parkingStatus = data[i].parkingStatus;

            tempStr += '<div class="row row_parking">';
            tempStr += '<div class="col-xs-4">' + name + '</div>';
            tempStr += '<div class="col-xs-4">' + address + '</div>';
            tempStr += '<div class="col-xs-4">' + parkingStatus.availableCapacity + ' / ' + parkingStatus.totalCapacity + '</div>';
            tempStr += '</div>';//end row
            
            }//end for loop

            that.parentContainer.innerHTML = tempStr;
            } else {
            console.log('Error');
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
    return `ParkingApp with id: ${this.id}`;
    };

};

    var ww1 = new ParkingApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());          

})();