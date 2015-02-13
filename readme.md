Meteor Less Boilerplate
=======================
This package provides a general structure for organizing less files as a local package in a meteor app.
By separating styles from views, they should be easier to find than the [file structure recommended by Meteor](http://docs.meteor.com/#/full/structuringyourapp) .


Install
-------
1. Create a package directory inside your meteor app, if it doesn't already have one.
  ```
  cd path/to/your/meteor/app
  mkdir packages
  ```
  
2. Clone the meteor-less-boilerplate repository in the packages directory.
  ```
  cd packages
  git clone https://github.com/rw1018/meteor-less-boilerplate.git
  ```

3. Add the package to your app.
  ```
  meteor add less-boilerplate
  ```

Example File Structure
----------------------
```
styles.less                             #contains imports for every less file.

base/                                   #site-wide base styles for dependent files.
- normalize.import.less
- variables.import.less

components/                             #general component styles used throughout the site.
- grid.import.less
- responsive-utilties.import.less
- typography.import.less

templates/                              #template-specific styles.
- accounts-ui.import.less
```

Included in the package
---------------------------
- Normalize - for consistent rendering on different browsers
- Bootstrap Grid
- Bootstrap Responsive Utilities
- Typography boilerplate
- Accounts-UI less file - for customizing meteor login buttons. 
