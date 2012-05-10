#About

This is a Dhancha [Hindi Language], which means skeleton, of a project utilizing brunch.io with twitter bootstrap. You may add your own library like backbone-aura if required.

#Getting started
Make sure to have Brunch.io installed.

Create your project using following command

    brunch new <your-project-name> -s git://github.com/pkmishra/dhancha.git
    
Or you may also copy the complete directory.

To build the project use following command in project directory

brunch build -minify

# Notes
>Though you may use Bootstrap less but as of now less_brunch has some bug due to which it tries to compile all the less files instead of bootstrap.less. I will fix it later on. However for the time being css is used.