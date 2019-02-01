## Build Instructions.

1. Install the app dependencies. Make sure you are in the application root folder and type the following command:

    ```
    npm install
    ```

2. Build the app. Make sure you are in the application root folder and type the following command:

    ```
    npm run build
    ```

    Webpack automatically outputs the results (bundle.js) in the staticresources folder corresponding to your application.

3. Type the following command to push your changes to your scratch org:

    ```
    sfdx force:source:push
    ```