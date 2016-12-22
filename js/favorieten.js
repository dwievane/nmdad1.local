;(function() {
  function FavApp(id, parentContainer) {
    this.API_URL = "../../data/favorieten.json"
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
            var tempStr = '';
            for(i=0; i<data.length; i ++){
            var title = data[i].title;
            var image = data[i].image;
            
            tempStr += '<div class="row">';
            tempStr += '<div id="myDIV' + [i] + '">';
            
            tempStr += '<div class="col-xs-6"><div class="div_image" style="background: url(' + image +') no-repeat center ;background-size:cover;"></div></div>';
            tempStr += '<div class="col-xs-6">' + title + '</div>';
            tempStr += '<div class="col-xs-12">'
            tempStr += '<button onclick="changeClass'+[i]+'()">Delete</button>';
            tempStr += '</div>'
            tempStr += '</div>';//end myDIV
            tempStr += '</div>';//end row
            }
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
    return `favApp with id: ${this.id}`;
    };

    };

    var ww1 = new FavApp(1, document.querySelector('.sidebar'));
    ww1.loadData();
    console.log(ww1.toString());

})();



function changeClass0()
    {
        // Code examples from above
        document.getElementById("myDIV0").remove();

    }
function changeClass1()
    {
        // Code examples from above
        document.getElementById("myDIV1").remove();
    }
function changeClass2()
    {
        // Code examples from above
        document.getElementById("myDIV2").remove();
    }
function changeClass3()
    {
        // Code examples from above
        document.getElementById("myDIV3").remove();
    }