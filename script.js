// do this
setTimeout(function () {
     // console.log('10 seconds passed.');

     elements = document.getElementsByClassName('icon-group');
     Array.prototype.forEach.call(elements, function(element) {
          element.classList.add('icon-group-loop');
          element.classList.remove('icon-group');
     });

     reverseElements = document.getElementsByClassName('icon-group-reverse')
     Array.prototype.forEach.call(reverseElements, function(element) {
          element.classList.add('icon-group-reverse-loop');
          element.classList.remove('icon-group-reverse');
     });

}, 10000);
