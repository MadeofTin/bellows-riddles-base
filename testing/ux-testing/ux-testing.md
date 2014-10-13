# UX Test Bed

It is basically a minimal Bootstrap implementation. I wanted to test how small I could make a useful Word Selector so I thought I might as well #really# see how it works.


### Answer Bank

This is actually very unsecure because I loaded in the JSON file from my Google Storage with zero authentication. I just made it public and copied the link.

At some point if we use this more it would be nice to have a template project that authorizingly gets the JSON data from the Google Server. Not a big deal now, but it might be once we publish live. Don't want that one person finding the live link to all the riddles.......

- [ ] Build Template Project that pulls our json from Google Cloud Storage Buckets Securely. Probably could just put in some hardcoded oath2.0 key in the credentials system in [Google Developers Console](https://console.developers.google.com/project/bellows-adv/apiui/credential)