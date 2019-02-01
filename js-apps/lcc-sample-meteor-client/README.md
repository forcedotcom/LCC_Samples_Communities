## How To Use Meteor with LCC

Meteor is generally used as both a client and server.  We only want to upload the client to Salesforce, and then connect to the meteor server hosted elsewhere.

To build the meteor client we will use this public git repository.
https://github.com/frozeman/meteor-build-client

You can also use an alternative client bundler, for example: https://github.com/Urigo/meteor-client-bundler

## Instructions

1. Install the meteor client bundler.

```
npm install -g meteor-build-client
```

2. Set YOUR_METEOR_SERVER to the remote host with your meteor server.

```
sed -e 's/YOUR_METEOR_SERVER/[[[ENTER_YOUR_METEOR_SERVER_HERE]]]/g' -i '' public/meteor_client.js 
```

3. Build.

```
meteor-build-client ../../force-app/main/default/staticresources/lcc_sample_meteor_client -p "./" -u "YOUR_METEOR_SERVER"
```

4. Remove inline scripts, Salesforces CSP does not allow inline scripting. If you use a different bundler which supports this, you could handle this as part of the build step.

```
sed -E -e 's|>__meteor_runtime.*</script>| src=".\/meteor_client.js"></script>|g' -i '' ../../force-app/main/default/staticresources/lcc_sample_meteor_client/index.html
```

5. Run your server, which should be available on YOUR_METEOR_SERVER.

```
meteor
```

6. Type the following command to push your changes to your scratch org:

```
sfdx force:source:push
```

7. Add YOUR_METEOR_SERVER to CSP Trusted Sites in Salesforce setup.  This allows connections to your meteor server.

## Warning

Meteor updates regularly, these instructions may be incomplete or no longer up to date.  Generally, you can solve problems at step 2 by modifying the __meteor_runtime_config__ to be up to date with your meteor server.

If you find an issue, please submit a pull request and we will review it.



