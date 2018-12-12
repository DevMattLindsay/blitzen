// TODO do the encapsulation thing up here

var Theme = function() {

  var enableNavbarButtonAnimation = function() {
    // Bootstrap does not add class to container if collapsed
    // adding class so we can style header based on collapse
    $('.navbar-toggle, .navbar-collapse-toggle').on('click', function() {
      $('.navbar').toggleClass('navbar-is-open');
    });
  };

  var enableSearchPullout = function() {
    $('.navbar-icon-search').on('click', function() {
      $('.menu-container').toggleClass('menu-container-pullout');
      $('.navbar-search-input').focus();
    });
    $('.navbar-search-icon-close').on('click', function() {
      $('.menu-container').removeClass('menu-container-pullout');
    });
  }

  this.enableNavbarButtonAnimation = enableNavbarButtonAnimation;
  this.enableSearchPullout = enableSearchPullout;

};


$(document).ready(function() {
  var theme = new Theme();
  theme.enableNavbarButtonAnimation();
  theme.enableSearchPullout();
});
