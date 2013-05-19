---
layout: post
title: Google IO 2013 Retrospective
category: articles
date: 2013-05-19  1:46:00
---

This past week I attended my fourth consecutive [Google I/O] developers conference in San Francisco. It's been interesting to watch Google change and this event change over the last four years. Once an underdog, Google is turning into a powerhouse of innovation.

If I had to choose three take-a-ways to share that stood out of interest to me personally, they would be the following:

1. Google today is as much a platform company as a product company
2. Web Components will revolutionize how we build web applications
3. The realtime web will be enabled by higher level abstractions

## Product vs Platform

In previous years Google was begging developers to build apps for Android and spent a lot of time highlighting developer ecosystem successes. Third-party collaborative efforts dominated the keynotes, for example Angry Birds on Chrome, Google TV partnerships with major device manufacturers, new phones and tablets from Samsung, Asus, etc. 

This year however, Google gave some lip service to the wanting to enable the developer community to build great apps and services on their platforms but spent very little time in the keynotes demonstrating many examples of such. Instead the keynote was dominated by product feature announcements like Google+ photos, Google's new music subscription and Google+'s new stream layout. Google is still obviously committed their platforms and third-party developers, but it was interesting to see this shift, pandering more to consumers with product announcements and a bit less to enabling developers.

Feel free to watch the **long** 3:25 keynote [here](http://www.youtube.com/watch?feature=player_embedded&v=9pmPa_KxsAM) and decide for yourself!

## Web Components

Truely encapsulated DOM, JavaScript and CSS space without iframes and the ability to bind together and nest multiple components. This is going to completely change how web applications are built in the future. When will all of this goodness be available to actually use you may ask? Well, thanks to [Polymer], a near complete polyfill for the Web Components stack of APIs, that's promised to work in the latest version of all modern browsers, the future may very well be now! Or sooner as it may be. 

Anyway, Web Components! Check it out. Watch this [web components overview] and this [Polymer session] to learn more. 

## The Realtime Web

One of my greatest passions these days is the realtime web. I'm fascinated by the untapped potential of the web as a true platform for synchronous activities and communication. There were several related sessions at I/O with topics including WebRTC and the newish [Google Drive Realtime API]. 

[WebRTC] makes me all giddy, realtime audio, video and data communication natively supported in the browser through JavaScript and HTML5. However, I'm still very sad ([like Larry Page](http://www.youtube.com/watch?feature=player_embedded&v=9pmPa_KxsAM#t=10663s)) that [Microsoft is going their own way and not committing to WebRTC](http://gigaom.com/2013/01/17/microsoft-cu-webrtc-prototype/). I'd rather see us end up with a "good" ubiquitous standard, sooner rather than later, than loosing the forest for the trees and arguing over what's "best". The WebRTC session hasn't been posted yet but may be by the time you are reading this so check it out if you're interested [here with the rest of the I/O session videos](https://developers.google.com/live/).

The [Google Drive Realtime API] is really interesting because it, like [Firebase], provides a very powerful high-level encapsulations, handing all of the complex communication, data synchronization, eventing and scaling while providing the web developer with a relatively simple client-side Javascript API. This is very similar to what they provided first in the Hangouts API. The session on the [Google Drive Realtime API](https://developers.google.com/drive/realtime/) was solid, describing some of the internals of the Operational Transform (OT) implementation and the fact that they are still just doing long-polling GETs with CORS without websockets even for modern browsers. Lastly I was happy to hear that it was developed by a local team in Boulder. 

I was so excited that I spent the flight home rereading through the ShareJS JavaScript OT implementation source and boning up on all of the work that [@dominictarr] has been doing with CRDT (Commutative Replicated Data Types) related things [1](https://github.com/dominictarr/crdt), [2](https://github.com/dominictarr/r-array), [3](https://github.com/dominictarr/scuttlebutt), etc.

## Conclusion

In conclusion, I'd like to celebrate my return to blogging :) Which means that I will be documenting more and more proof that you are indeed smarter than I am. Cheers!

  [Google I/O]: https://developers.google.com/events/io/
  [WebRTC]: http://www.webrtc.org
  [Google Drive Realtime API]: https://developers.google.com/drive/realtime/)
  [Firebase]: https://www.firebase.com/
  [ShareJS]: https://github.com/josephg/ShareJS
  [web components overview]: https://developers.google.com/live/shows/554680121/
  [Polymer session]: https://developers.google.com/live/shows/518070400/
  [Polymer]: http://www.polymer-project.org/
  

