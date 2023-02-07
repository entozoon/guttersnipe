# Guttersnipe

A simple AF CMS, with few dependancies.

## What is this for?

So you specify a JSON schema, which it uses for a dynamic admin.
Thsi is gonna let you CRUD posts, stored then as JSON and saved, like, posted to the git repo, right?

Purely a CMS. No notion of how you'd then use the data, just straight up posts CRUDable and schema-able however you need.

## Where have I landed on this?

- NPM package to run local CMS within your site
- Schema Editor
- JSON Editor
- Injectable stuff depending on schema
- Git push JSON from UI
- Image upload (to local assets) and reference

## Future

Move CMS to cloud functions or just a github logged in thing. NetlifyCMS manages it somehow

## TODO

- `_headers` (in parent dir) needs instruction/injection. Like, added to users' site, with a specific origin ideally
