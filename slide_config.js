var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Drupal Media',
    subtitle: '',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/palantir-dot.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Inconsolata'
    ],
    timeLimit: '45:00',
    eventName: 'Midwest Drupal Developer Summit 2012',
    sessionURL: 'http://midwest-developer-summit.com/node/136',
    sessionShortURL: 'http://goo.gl/Mwl9w'
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Dave Reid',
    company: 'Senior Engineer, Palantir.net',
    links: {
      drupal: 'https://drupal.org/user/53892',
      irc: 'davereid',
      //gplus: 'http://plus.google.com/1234567890',
      twitter: 'davereid',
      www: 'http://www.davereid.net'
      //github: 'https://github.com/davereid'
    }
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

