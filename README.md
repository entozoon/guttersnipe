# Guttersnipe

A simple AF CMS, with few dependancies.

## What is this for? (stream of consciousness)

So you specify a JSON schema, which it uses for a dynamic admin (non-React at the moment, although I feel like that might be a mistake).
Thsi is gonna let you CRUD posts, stored then as JSON and saved, like, posted to the git repo, right?

Purely a CMS. No notion of how you'd then use the data, just straight up posts CRUDable and schema-able however you need.

So yeah, you could use it as a sortable React app like energydrunk.com or blog posts .. right? right.
..right?

### How is the CMS gonna push the JSONz?

Good question, heading! The CMS runs as a node server, which I guess could be lambda'd. I mean, I've done it before but it's quite a ballache. The pro is ability to publish from, well, only significantly a phone tbh. Otherwise I can just boot up the project locally.

Gotta think carefully here, though, because at a certain point.. I might as well not build a CMS. Also, if it's not gonna be especially customisable then that sucks too. Like maybe a simple plugin system -
Run a given custom script for say, pulling imdb info. But.. even with that, mightn't it have to be server-side? Nah, can't be because I did it on video vault.

Yeah, how the heck does netlifycms push stuff? I feel like I figured that out before. Shieldmaiden? what was that project.. ah, it was a script on michaelcook.tech (when it was a droplot) that git pulled. still had to push though!

Is it worth running online?

## OR, OKAY

Just a straight up JSON editor?
Like with, 'inject IMDB ID' buttons. 'Create blog template'.
Hmm.. schema sounds smart though.

## What do I really want?

- To not have to 'run' it
- To not have to commit and push

Could/should the data for all projects be in one place? Then maybe running isn't so bad except for images.

## Where have I landed on this?

- NPM package to run local CMS within your site
- Schema Editor
- JSON Editor
- Injectable stuff depending on schema
- Git push JSON from UI
- Image upload (to local assets) and reference
- Theoretically move CMS to cloud functions but beyond scope
