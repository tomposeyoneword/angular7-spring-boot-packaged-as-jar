# Angular7/Spring Boot Skeleton

The Angular project was generated with:
* [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0
* npm version 6.4.1
* node version v9.6.1

The Spring project was generated with:
* Spring Boot v2.1.2.RELEASE

Styling uses {less} css
* [Less](http://lesscss.org/)

## Development server

Start the Spring Boot *payfone-service-provider* application
* If using Eclipse, right click `Application.java` and select Run As -> Java Application
* This application is currently configured to run on port 8080
* This application is intended to to be used as an integration into Lynx. (A Java/Spring integration app helps us avoid cross-site scripting issues with Lynx)
<br/><br/>

Run `npm start` for a dev server. (Note the use of *npm* vs *ng*)
* Navigate to `http://localhost:4200/`
* The application will automatically reload if you change any of the source files
* The application automatically routes to the *payfone-service-provider* on port 8080 for back-end service calls. (See the `proxy.conf.json` file [referenced by package.json])



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`

## Build an executable/deployable jar

**The sequence of builds is important** 
 
1) Build the *payfone-web-ui* application (Note the `angular.json` file and the element `"outputPath": "dist"`.  Angular artifacts must be placed at the root of the `dist` folder in order to be properly recognized within the Spring boot jar.)
* Run `npm run-script build`
* The build artifacts will be stored in the `/payfone-web-ui/dist/` directory. <br/>

2) Build the *payfone-service-provider* using maven.
* Run `maven install` on the *payfone-service-provider* project in the same directory as the pom.xml file
* The executable jar will be stored in the `/payfone-service-provider/target` and is named *payfone-application.jar*

## Run an executable jar

Run `java -jar payfone-application.jar`
* Navigate to `http://localhost:8080/`
* Angular is now accessible via the payfone-application on port 8080 (and is no longer available on port 4200)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
