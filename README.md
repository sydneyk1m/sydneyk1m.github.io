# sydney.kim
www.sydney.kim is a website. what else is there to say?

## pichordle
pichordle is a simple html/css-based wordle clone that implements an automatic timer. the timer starts when you type your first letter and ends when the last letter of your correct answer flips to green (or if you flop, whenever your flop answer flops to gray/yellow).
this project was inspired by a regularly occuring event in my life: the monthly wordle race. pichordle is a portmanteau of pichonkun and wordle. pichonkun is a gender-neutral water droplet. if you don't know then please stop asking me.
the data management and strategy team at my company tracks a daily wordle race, compounding podium points throughout the month for an ultimately crowned winner. 

planned features:
- if you are a member of the team, you can access a stored record of your podium finish history, view archival records of your guesses for any day, (including whether or not those guesses were optimal), and other metrics that will hopefully help you beat tyler. this means i'll probably have to fork over some money for db functionality which i don't want to do.
- pause timer functionality for cheaters.
- the unofficial api endpoint that i pull the answer from actually is future-forward for an unspecified amount of time. i may change the answer pool to pull every week or something rather than weekly. [in progress]
- popup functionality like real wordle. but this one will be more pichonkun-y.
- make the timer a moveable element. gonna have to move on from pure html/css for that

known issues:
- right now the 'practice word' functionality is broken. when you enter your first word it freaks out. leaving it up as a button so i'm motivated to fix it.
- mobile keyboard functionality

## Clear Sans disclaimer
Clear Sans is freely available for private and commercial use and distribution under the Apache 2.0 License. While the font is open source, the design files used by Monotype are not available. Clear Sans was created and designed by Daniel Ratighan at Monotype under the direction of the User Experience team at Intel's Open Source Technology Center. The WOFF files used in some parts of this project were downloaded from Intel's archived repository at https://github.com/intel/clear-sans.

