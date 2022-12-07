
//Main Page//

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#mainbutton').onclick = function() {
      document.querySelector('#myNavigator').pushPage('home.html', {data: {title: 'Swine Raising Expert System'}});
    };
 
  } else if (page.id === 'homepage') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});


//Home Page//
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'homepage') {
    page.querySelector('#push-manual').onclick = function() {
      document.querySelector('#myNavigator').pushPage('information_guide.html', {data: {title: 'Information Guide'}});
    };
 
  } else if (page.id === 'infopage') { 
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  if (page.id === 'homepage') {
    page.querySelector('#push-diagnosis').onclick = function() {
      document.querySelector('#myNavigator').pushPage('problem_identifier.html', {data: {title: 'Problem Identifier'}});
    };
 
  } else if (page.id === 'problem_ident') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  if (page.id === 'homepage') {
    page.querySelector('#push-decision').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page4.html', {data: {title: 'Decision Support System'}});
    };
 
  } else if (page.id === 'page4') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

//Information Guide//

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'infopage') {
    page.querySelector('#manual_b').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page5.html', {data: {title: 'Manual'}});
    };
 
  } else if (page.id === 'page5') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  
    if (page.id === 'infopage') {
    page.querySelector('#about_b').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page6.html', {data: {title: 'How To Use'}});
    };
 
  } else if (page.id === 'page6') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }


});

//ILLNESS 

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page5') {
    page.querySelector('#illness_b').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page7.html', {data: {title: 'ILLNESS'}});
    };
 
  } else if (page.id === 'page7') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

//Problem Identifiery
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'problem_ident') {
    page.querySelector('#p_identifier_cat_01').onclick = function() {
      document.querySelector('#myNavigator').pushPage('pcat_01.html', {data: {title: 'SICKNESS PROBLEM'}});
    };
 
  } else if (page.id === 'pcat_01') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});



//fast click//
$(document).ready(function() {
    FastClick.attach(document.body);
});


//Remove transition//
$(document).bind("mobileinit", function () { $.mobile.defaultPageTransition = 'none'; });
