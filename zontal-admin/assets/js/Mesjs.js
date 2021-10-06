
 class Linkedselect {

     constructor($select) {
         this.$select = $select;
         this.onchange = this.onchange.bind(this);
         this.$select.addEventListener('change', this.onchange);
     }


     onchange(e){
         var choixphase = document.getElementById("choixphaseT");

         choixphase.innerHTML ="";

     // On recupere les données en AJAX
     // on injete les donées dans le prochain select

      var request = new XMLHttpRequest();

     request.open('GET', this.$select.dataset.source.replace('$id', e.target.value) ,true);

         request.onload = function() {

             // request.onreadystatechange = function () {

             if ((request.readyState == 4) && (request.status == 200)) {

                 var data = (request.responseText.split(";"));

                 if (request.responseText == "")
                 {

                     choixphase.innerHTML = '<option value="0">Rien a selectionner</option>'
                 }
                 else
                 {

                 console.log(data);

                     var item, option;

                     for (var i=0 ; i<data.length ; i++) {

                         item = data[i].split(" "); // value = text

                        //option = document.createElement;

                         //choixphase.value = item[0];

                         //choixphase.innerHTML = item[0];

                         choixphase.innerHTML = '<option value="' +item[0] +'">' +item[1] +'</option>'

                     }
             }
             }
             else {
                 alert('arrive pas à charger la liste');
             }
         };

         request.onerror= function()
         {
             alert('Impossible de charger la liste');
         };

         request.send();
     }


     }

    var $selects = document.querySelectorAll(".linked-select");

     $selects.forEach( function($select){

     new Linkedselect($select);
 });

