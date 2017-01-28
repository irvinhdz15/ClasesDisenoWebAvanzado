//archivo de angular (modo estricto)
(function(){
  'use strict';

  angular
  .module("myApp",[])
  .controller("movieCtrl",movieCtrl);
function movieCtrl() {
  var movie = this;
//  movie.nombre=[{'nombre':'Luis','edad':'19'}];}
movie.collection=[
  {
    'img':'http://www.imdb.com/title/tt1636826/mediaviewer/rm3052712192',
    'name':'proyectoX',
    'cast':'jorge',
    'year':'2010',
    'category':'adolescentes'
  },
  {
    'img':'https://www.google.com.mx/search?q=ia+media+imdb&biw=1024&bih=589&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7xMi-puDRAhWriVQKHbS_DfEQ_AUICCgB#tbm=isch&q=ia+media+imdb+hang+over&imgrc=6EGlw9kbhV8QxM%3A',
    'name':'Hang Over',
    'cast':['jorge1','jorge2','jorge3'],
    'year':'2005',
    'category':'adolescentes'
  },
  {
    'img':'https://www.google.com.mx/search?q=ia+media+imdb&biw=1024&bih=589&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7xMi-puDRAhWriVQKHbS_DfEQ_AUICCgB#tbm=isch&q=ia+media+imdb+hang+over&imgrc=6EGlw9kbhV8QxM%3A',
    'name':'Hang Over',
    'cast':['jorge4','jorge5','jorge6'],
    'year':'2005',
    'category':'adolescentes'
  }

];

}


})();
