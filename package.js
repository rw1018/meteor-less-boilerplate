Package.describe({
  name: 'less-boilerplate',
  version: '1.0.0',
  summary: 'A less boilerplate package for Meteor',
  git: '',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('less');
  api.addFiles([
    'base/normalize.import.less',
    'variables.import.less',


    'components/typography.import.less',
    'components/grid.import.less',
    'components/responsive-utilities.import.less',


    'templates/accounts-ui.import.less',

    'styles.less',

  ]);
});

Package.onTest(function(api) {

});
