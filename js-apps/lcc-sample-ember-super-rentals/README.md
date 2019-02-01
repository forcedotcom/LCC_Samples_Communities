# Ember.js Super Rentals with LCC

This is based on the [Super Rentals tutorial](https://guides.emberjs.com/release/tutorial/ember-cli/) provided by Ember.

## Build Instructions

Follow the instructions in SUPER_RENTALS_README.md

## Build Notes

You can use [ember auto import](https://github.com/ef4/ember-auto-import) to import the LCC module.

You can Edit the build output directory in ember.cli

Set `locationType: 'none'` in config/environment.js so index.html can be served from LCC domain.

You must Add "./" prepend url in ember-cli-build.js to use generic relative URL paths.

You must Build using `ember build --prod`. Otherwise the prepend url is ignored.

This app uses many external images and fonts, these must be added to Setup -> CSP Trusted Sites.

You must add https://maps.googleapis.com/maps/api/js?v=3.22 as a script-src to your Community CSP policy if you wish to use google maps.

You must also build with valid google maps API keys to use google maps.