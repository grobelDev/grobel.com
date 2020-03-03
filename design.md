## What Does the Website Do?

Grobel is a way to organize links with context.

This information is tied to USERS.

USERS have associated DAY PAGES where POSTS are organized chronologically in a feed format.

POSTS are generated from saving a link with context, typically from a USERS screenshot. Each POST should have some associated image for context.

POSTS have two identifiers, a URL ID and a POST ID. This is so it is possible to retreive a history of context from a particular URL ID. There may be options for setting the specificity for URL ID (whether it's domain level or url level).

### USERS

USERS will default to a chronological page view, but will also have the ability to create more specific pages (based on tags or whatever).

### POSTS

Like Twitter, each POSTS will have the ability to COMMENT, RETWEET, LIKE, and SHARE.

## Routing

### Splash Page

- https://grobel.com  
  General splash page. Should have account creation and a blurb describing the product.

#### User Pages

- https://grobel.com/:user  
  Displays a user's chronological DAY PAGES with their associated POSTS in a feed format.
- https://grobel.com/:user/time/:timeId  
  Displays a specific DAY PAGE's POSTS.

#### Status Pages

Trying to emulate Twitter routing.

- https://grobel.com/:user/status/:urlId/:postId  
  Returns a POST.
- https://grobel.com/:user/status/:urlId/:postId/photo/1  
  Returns the image associated with a post. Additional photos will be routed by incrementing the last value.
- https://grobel.com/:user/status/:urlId/history  
  Returns the history for a particular url.

---

## Stack

- React  
  The front-end.
- Chrome Extension  
   To store screenshots.
- Authentication  
  Firebase Authentication
- Cloud Firestore  
  To store user data.
- Firebase Cloud Storage  
  To store images.

---

- Google Cloud Run  
  To host and serve the websites at low cost.
- Google Cloud Build  
  For CI/CD.

---

## Display Guidelines

Emulate apple.com's usage of cards.

## Links/References

- Authentication: https://cloud.google.com/run/docs/authenticating/end-users

- Back-End implementation: https://firebase.google.com/
- Potential implementation of payments (90% chance that it'll be free though):  
  https://www.youtube.com/watch?v=JeyxolsJ3aE

---

More tenative stuff below.

## Guidelines

Users have a USER PAGE.
Posts with the same/similar urls have a POST HISTORY PAGE.

USER PAGES default to the current day’s DAY PAGE (or most recent day with content).
The USER PAGE is subdivided into DAY PAGES if there is content there.

DATABASE CONSTRUCTION:

FEATURES:
Filtering based on keywords.
Allow text to accompany POSTS?
