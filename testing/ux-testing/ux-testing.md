# UX Test Bed

It is basically a minimal Bootstrap implementation. I wanted to test how small I could make a useful Word Selector so I thought I might as well #really# see how it works.


### Answer Bank

This is actually very unsecure because I loaded in the JSON file from my Google Storage with zero authentication. I just made it public and copied the link.

At some point if we use this more it would be nice to have a template project that authorizingly gets the JSON data from the Google Server. Not a big deal now, but it might be once we publish live. Don't want that one person finding the live link to all the riddles.......

- [ ] Build Template Project that pulls our json from Google Cloud Storage Buckets Securely. Probably could just put in some hardcoded oath2.0 key in the credentials system in [Google Developers Console](https://console.developers.google.com/project/bellows-adv/apiui/credential)


## Testing on a mobile device.

If you have a server somewhere use

```
python -m SimpleHTTPServer 0.0.0.0:<port>
```

Then point your phone to it and you can test it on the actual phone size.

Or you can use the SimpleAuthServer.py I put in the home directory. Also run it in the home directory to get the relative links to the images.

```
python SimpleAuthServer.py 9001 tinmen:bel00w
```

### Dev Server

Which I did and is currently running at

http://104.200.20.204:9001/testing/ux-testing/answerbank/

Username: tinmen
Password: bel00w
