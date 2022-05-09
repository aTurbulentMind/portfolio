<body>
    
<h1>Who r U?</h1>

        
        <img src="/blogPic/sizeMatters/onethree.png" alt="">

        
    <!--   <p>
                Save your sight. You can listen instead.
        </p>
        <audio controls>
        <source src="/sound/stillAliveMufuka.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>
--> 

<p>
     It does though. It has to fit correctly. Any way you can, no matter how you look at it.  When it doesn’t it kind of throws things off. It just feels wrong. Or will be a big turn-off. People won't want to come back. They may in fact turn away instantly. Like it offended them. Then you spent all that effort for nothing. Well, you can learn a lesson from it. Even if that lesson takes longer than you planned. And sometimes we just have to learn the hard way. Rem, em, vh, vw, px or percent are common measurements in web development.
    </p>
    <img src="/blogPic/sizeMatters/onefour.png" alt="">
    <p>
  I like to use percent where I can because it is a percent of its given space on the screen. It has been great for most of the things I do. These are no all-encompassing measures. They are not a one size fits all situation. Example: I usually use max-width: 20%; or 3rem;. I spent probably an embarrassing seven hours trying to figure out why the SVG I set looked so bad in firefox. After messing with enough and learning a bunch of extra info I removed the max- from max-width: and boom! Fixes itself.  
    </p>
    <img src="/blogPic/sizeMatters/onefive.png" alt="">
    <p>
Rage celebrate. I am so happy that  I figured it out. All that time was spent on this. The rush of endorphins is better than any drug. I can feel the wave seep through my veins. Is it a rush or a chill? I still can't explain it. One side is so relieved that I made it through. The opposite wants to jump up from my seat, fist raised getting awkwardly stuck in the air as if from some buddy movie out of the 80s. That high like state is one of the reasons I write code. That sense of completion is ultra-satisfying. This is why I want to work on projects to complete. So much breaks near that checkered flag. If you want those sponsors you have to complete what you start. You have to learn how to fix issues. If I don’t, how will I deal with any problems with an actual client? 

    </p>
    
    <p>
I did learn the different measures and why we use each of them thinking maybe that was the issue. And I think that is a part of web dev. The wall you will hit, you have to get over it. That is what builds integrity. It may sound like a broken record. But really. If we just throw up our hands anytime we face a problem how will we take another step. So concentrated on how we can't do x, y, or z. Blinded to what we have done and how much we can learn. If we did not try we would not progress the culture and abilities of each language. This is what imposter syndrome feels like. As if we are not speaking a language that most get anxious just thinking of.
    </p>
    
    <p>
I am going to share some screenshots below from w3schools.com. Even though it was not the answer to my issue, it is pretty cool stuff to know.
    </p>

    <img src="/blogPic/sizeMatters/oneseven.png" alt="">
    <img src="/blogPic/sizeMatters/onesix.png" alt="">
    
    <p>

        With a solid checkmark added to the Debt$Net goal list, it was time to move to the next task. The grid system I made for a few lists just did not look good. There was a bunch of information broken between different grids. I wanted to use that css style because that is what I commonly reach for. The bigger that grid is, the weirder it seems like it can be. Now break the page into multiple grids and they may have huge issues. Like what I dealt with. One grid would overlap. I would try to rig it together with some margin to separate objects at different amounts. Janky.
    </p>
    <img src="/blogPic/sizeMatters/onetwo.png" alt="">
    <p>
        Using what I learned about how svelte works with buttons and on-click functions, I felt comfortable investigating an accordion-style list. My desired outcome: smaller screen space, no overlap which was only an issue with Firefox, and maybe add a loading screen. It looks better and lets me use a bit higher functioning stuff than CSS. The accordion dynamically routes information from JavaScript pages. You can click here to check out the YouTube video for it. Yeah, watching videos is cool. But changing and modifying it and learning how it works, seems to be where I begin to understand a concept. 
    </p>
    <img src="/blogPic/sizeMatters/one.png" alt="">
    <p>
        Break stuff and keep moving. You might learn a thing or two. Or you might fall in love with a corner concept you never would have looked at. A new refresh of why you love what you do. That can benefit your whole life. Give that hope an extra help. It is that resurgence of why. That reason to keep going. I love to check boxes off or hit a wall. It is all part of life. If it was easy, would it be worth it? I know from playing video games that if it does not show any sign of being trouble, I probably won't play it. I don't want all of my life to be as difficult as it is. I kind of need it to be though. Why would I learn and try if not to get out of the place I feel so confined.
    </p>
    <p><span>"Wars don’t end overnight, it's all the battles that make it. Fight for yourself like you are going to war."</span></p>
    <p>
        You can break free also. Just find out why you want to. Ask yourself how you can take the small step today toward it. Take another step the next day. Make tiny goals so that you can feel that win on your way to victory. Wars don’t end overnight, it's all the battles that make it. Fight for yourself like you are going to war. Because you are a little bit. You are at war with the you that thinks you can't. Kill that version of you if you have to. Lock it in a cage of smiles and process it in small amounts. You are worth the time and effort. You are worthy. You deserve to be happy.
    </p>
    
    <p>
        As for life away from the screen, it's been all moving. Unpacking boxes when I get off until it's time to cook or sleep. The cat forced cuddles through the new  Batman film with sparkly vampire Batman. It was a setup for the Court of Owls. That was a cool series. I love all the comic references. It is probably going to be about the same this week. May have all the boxes emptied. All hope.
</p>


</body>

<style lang="scss"> 
    
    @import '../src/routes/_components.scss';

    img{
        max-width: 80vw;
        margin: 0 15%;
    }

    .port {
        max-width: 100vw;
        margin: 0 40%;
    }

    audio{
        margin: -9% 30% 0 30%;
        box-shadow: 0 0 10px rgba(180, 10, 232, 0.5);
        border-radius: 50%;
    }

    p{
        margin: 9% 18%;

        span{
            font-weight: bold;
            text-decoration: underline purple 2px;
            text-transform: italic;
        }
    }

      @media (max-width: 768px) {
      p{
          margin: 9% 7%;
      }
      img{
        max-width: 80vw;
        margin: 5%;
        }
      .port {
        max-width: 80vw;
        margin: 4% 10%;
        }
      }
</style>