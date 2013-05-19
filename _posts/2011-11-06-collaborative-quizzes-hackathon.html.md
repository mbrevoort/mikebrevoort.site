---
layout: post
title: Collaborative Quizzes Hackathon Project
category: articles
tags: [english, html]
date: 2011-11-06 12:00:00
---

<p class="disclaimer">The opinions expressed below are my own and not intended to be representative of my employer, Pearson.</p>

The Pearson Hackathon
---------

<figure class="figure-img pull-right">
  <img class="img-polaroid" src="/img/2011-11-06-collaborative-quizzes-hackathon/Hackathon-Logo.png" alt="">
</figure>

Recently a subset of Pearson Education held our first internal Hackathon simultaneously across three continents with over 55 teams participating in Denver, Oslo and Columbo, Sri Lanka. Culture has always been very important to me, especially at the place I spend the majority of my waking hours, and I was honored to help make this event a realty. As Mahatma Gandhi said “you must be the change you want to see in the world.” Or in this case, you must be the culture you seek. 

In the days leading up to the event, against my better judgement, I recorded several “Countdown to the Hackathon” videos. The first one describes the intent, motivation and tone we were seeking for the event.

<div class="gallery">
	<a href="http://www.youtube.com/watch?v=Ozg4yaev8pk">
		<img src="/img/2011-11-06-collaborative-quizzes-hackathon/hackathon-countdown1.png"/>
	</a>
	<a href="http://www.youtube.com/watch?v=K2CCVwYCpxo">
		<img src="/img/2011-11-06-collaborative-quizzes-hackathon/hackathon-countdown2.png"/>
	</a>
	<a href="http://www.youtube.com/watch?v=Pn_joHsgxaQ">
		<img src="/img/2011-11-06-collaborative-quizzes-hackathon/hackathon-countdown3.png"/>
	</a>
	<a href="http://www.youtube.com/watch?v=FjrSZ4KixdA">
		<img src="/img/2011-11-06-collaborative-quizzes-hackathon/hackathon-countdown4.png"/>
	</a>
</div>
<div style="clear:both"></div>

The hackathon was a raging success; the innovation, camaraderie, and intensity were contagious and energizing. We’re already planning the next one!


Realtime Collaborative Quizzes
-----------------------------------

Lucky for me I teamed up with [Cory Grunkemeyer](https://twitter.com/#!/corygrunk), a talented UX designer. We decided to create a realtime web version of an experiment I discovered in a book I read recently called [Turning Learning Right Side Up](http://www.amazon.com/Turning-Learning-Right-Side-Education/dp/0132346494). Here's the excerpt from the book that describes the foundational idea behind the application we built: 

<figure class="figure-quote">
  <blockquote>Computers have also been used to enable students to learn effectively from each other, as facilitators of learning. This is demonstrated in the following experiment, which involved learning English grammar. Three tables were arranged in a triangle with a desktop computer on each. A student seated at each table could see the faces of the other two but not their screens. The computer placed on the screen of each a sentence that contained a grammatical error—for example, "The boys is hurting each other." The students were asked to touch the error with a light pen and select from a set of choices the correct replacement.</blockquote>
  <blockquote>If all three students did so correctly, the computer would put the next sentence on their screens. If they were not all correct, the computer would let them know this, but not who and how many were wrong. The students had to learn this through discussion and use of references. Only when all three had gotten it right would the computer proceed to the next sentence.</blockquote>
  <blockquote>The three students involved became a team that engaged in collaborative learning in other areas.</blockquote>
  <figcaption>Ackoff, Russell L. (2008). <a href="http://www.amazon.com/Turning-Learning-Right-Side-Education/dp/0132887630" title="Ab(h)ominable (H)aitch"><cite>Turning Learning Right Side Up: Putting Education Back on Track</cite></a> (p. 17) Pearson Prentice Hall. Kindle Edition</figcaption>
</figure>


There were several attributes of this experiment that made us think this could make a valuable learning tool. 

1. The challenge of building a synchronous, collaborative testing tool; it felt a bit beyond the norm as of late that seems to favor asynchronous models of learning online. A synchronous experience would allow a teacher to monitor progress and make decisions in realtime. Perhaps he/she could join the quiz in progress to coach the students, reshuffle the groups on the fly, or modify the quiz itself by selecting alternative upcoming questions. 
2. The combined individual and collaborative activities create a unique opportunity to track and measure performance both individually and corporately. By recording every interaction with during the quiz it would be possible to assert:
    * The difficulty of each question relative to students' demonstrated expertise in a particular area
    * A measure of students' mastery of a subject area based on their record of answering the first blind question correctly and their ability to persuade others to the correct answer or be persuaded away from the correct answer
3. this exercise would work well for multiple choice style assessments which are easy to author and already in abundance. 

Technology
----------

For the group collaboration aspect of the application we knew we really need to streamline the discussion portion of the activity. Text chat alone is inefficient and cumbersome and just wasn't going to cut it, and we thought video, audio and visual cues were very important to enabling group collaboration. 

We initially thought we would try to integrate with Google+ Hangouts; however, another complicating facet of the activity was that a portion of the exercise was required to be blind so we needed a way to temporarily disable the audio and video streams. Soon we stumbled upon [OpenTok](http://www.tokbox.com/opentok/api), a flexible multi-way video chat service with a sweet Javasript API. OpenTok did everything we needed it thought it seems like we barely scratched the surface, and we had all of the audio and video aspects of the project working in under two hours. My only disappointment with OpenTok was that it only seemed to support Flash video which ruled out the iPad for the demo.

The rest of our technology stack consisted of [node.js](http://nodejs.org/), [Socket.io](http://socket.io/) and [jQuery](http://jquery.com/). I had contemplated using [backbone.js](http://documentcloud.github.com/backbone/) and [Capsule](https://github.com/andyet/Capsule) but made a last minute decision to stick with things that I was totally comfortable with. Capsule is a node.js framework by [Henrik Joreteg](http://twitter.com/HenrikJoreteg) that synchronizes model state between multiple clients and the server. I ended up doing something very similar but in a much more ad-hoc, "just make it work" way.

Demo
----

We recorded this video to demonstrate the application and communicate our thoughts and vision around the concept. I'd love to here what you think! Hit me up on Twitter or Google+ with any feedback.

<iframe class="iframe-polaroid" width="720" height="440" src="http://www.youtube.com/embed/-n-lPc5Gc-s" frameborder="0" allowfullscreen></iframe>


