# LCC Sample App


## Installation Instructions

Make sure you have the latest version of the Salesforce DX CLI before proceeding. Update info [here](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm).

1. Authenticate with your hub org (if not already done)
    ```
    sfdx force:auth:web:login -d -a *your_hub_org*
    ```

1. Clone the lcc-samples repository:
    ```
    git clone [[THIS REPO]]
    cd [[THIS REPO]]
    ```

1. Create a scratch org and provide it with an alias (for example: lcc):
    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a lcc --setdefaultusername
    ```

1. Push the app to your scratch org:
    ```
    sfdx force:source:push
    ```

1. Assign the lcc permission set to the default user:
    ```
    sfdx force:user:permset:assign -n lcc
    ```

1. Open the scratch org:
    ```
    sfdx force:org:open
    ```

1. In App Launcher, select the **LCC Samples** app.

## Deployment
This repository can also be deployed with mdapi.  Follow the steps here:
https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_deploy.htm

## Use in Lightning Communities

All of these samples are built to work in both Lightning Communities and Lightning Experience.  Once you have pushed the samples to a scratch org, you can create a community and use the Community Builder to add the custom Lightning Container Component samples to the page.

1. In order to keep your SFDX repository up to date with your scratch org, pull the source back down to your repository: 

    ```
    sfdx force:source:pull
    ```
    
Some of these examples require specific Content Security Policy changes made using the Security tab in Community Builder.  Please check out [this blog post](https://developer.salesforce.com/blogs/2018/10/introducing-new-content-security-policy-options-for-lightning-communities.html) and [this help document](https://developer.salesforce.com/docs/atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_csp.htm) for more information.


## Building JavaScript Apps

The Lightning Container Component library is available as a JavaScript module that you can install as a dependency in your JavaScript application using npm. JavaScript modules are not yet supported consistently across all browsers. Therefore, applications using modules require a build process using a tool like webpack or rollup.

The JavaScript applications that use the Lightning Container Component as a module are located in the ```js-apps``` folder. Each application has a README.md describing the build process for that application.

1. Once built, type the following command to push your changes to your scratch org:

    ```
    sfdx force:source:push
    ```

NOTE: You can also use the Lightning Container Component library in plain old JavaScript (ECMAScript 5) without using modules and without a build process. Check out our D3 example to see how.
