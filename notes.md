# notes for class 9

1. SIGN UP FOR GITHUB

- create an account
- what are repositories
- how to create repository
- how to upload and save files in a repository
- how to deploy it on server(run code on github)
- download a repository

2. LEARN VSC

- file menu
- live share
- javascript
- create an account
- sign in for git hub
- how to upload
- how to customize
- using diffrent coding sites
- desktop
-
-

3. KEEP A DEDICATED FOLDER FOR CODING ON LOCAL MACHINE

4. EXTERNSIONS DOWNLOADED ON VSC

- live server
- live share audio extension pack
- bluoco dark and light theme
- prettier

5. CHECK OUTPUT

- click on bottom right corner----- GO LIVE ----- to start server
- server literally serves your code in a fancy manner as in it displays the output of the given program
- it opens a new tab with the address: http://127.0.0.1:5500
- 5500 is your port number
- while running, the same button is changed into ----- stop port: 5500 ----
- to closse it click on it an dthe putput will stop being displayed

6. HOMEWORK
   ---- play trex game again and again and write down all observations
   ---- play trex game again and again and write down all observations
   ---- play trex game again and again and write down all observations
   ---- play trex game again and again and write down all observations

---- play trex game again and again and write down all observations
---- complete projects till 14
---- revise classes till 14
---- revise concepts LOOPS, FUNCTIONS, IF-ELSE, VARIABLES

# Trex ANALYSIS AND DESIGN

1. What is the title of the game?
   --- T-Rex Game

2. What is the goal of the game?
   --- The goal of the game is to avoid the cacti by jumping over them.

3. What is the storyline of the game?
   --- A T-Rex is running across a field where there are cacti in the way so it has to jump over them.

4. What are different elements constituting the game?
   --- T-Rex Cactus Score High score Replay button Clouds Ground Game Over message

5. Describe individual behavior of each element in the game.

# T-Rex: Can jump or duck by using the arrow keys or space bar. Has an animation while running and changes when it touches a cactus. Can’t touch the cactus.

# Cactus: -- The cacti is created beyong the right boundary of canvas -- the cacti moves from righ to left.( -ve velocityX) -- there is almost equal distance between each cacti object. -- T-Rex has to jump over them. -- Each cacti is different from the others, -- there are 6 different cacti Images -- each cacti object is placed on the ground -- the cacti speed increases as the score increases. -- INFINTE amount of cacti objects in the game -- different sizes -- different spaces -- random images on cacti -- no pattern for cactus images

# Clouds: -- Moves from right to left and is just decoration -- x velocity is negative. -- Generated randomly according to vertical position. -- When the game ends, clouds stop moving. -- Only one image is used for all the clouds. -- INFINTE amount of clouds objects in the game -- stops moving when player dies

# Score: The score is in the top right and is steadily increasing as long as the T-Rex is alive.

# High score: Displayed as “HI,” the high score is the highest score on the game that the player got.

# Replay button: 1. After the T-Rex touches a cactus this button is displayed. Click the replay button to reset the game. score returns to 0 once pressed gamestate returns to play. the clouds and cacti which where paused upon ending the game are removed. after old cacti and clouds are removed, new ones are genarated normally. highscore stays even if the gamestate is play -- if user refreshes page, the game will treat user like a new player and will not display high score -- trex anim reverts to normal -- ground velocity returns to normal

# Ground: T-Rex runs on the ground and can only jump when touching it. Moves from right to left and increases in speed as the score increases. Ground and cacti are moving at the same speed.

# Game Over message: Displayed when the T-Rex touches a cactus.

6. What are the elements of skill?
   --- Timing the jumps

7. What are the elements of chance?
   --- When you aren’t very good at the game but get lucky when trying to jump over the cactus.

8. How does the game create balance between elements of skill and chance?
   --- The goal is not very difficult but not very easy which allows players that are skilled, or players that are lucky to play the game.

## Write down all your observation about structure(apperance and position) and behaviour(how dose it move, etc) for each character according to the 2 GAMESTATES: PLAY and END ?

1. TREX
   -----PLAY----

   Can jump or duck by using the arrow keys or space bar. Has an animation while running and changes when it touches a cactus. Can’t touch the cactus.

   ---END----
   the trex dosent move it's body other than is legs but when he jumps his whole body is still
   when the trex hits a cacti then the trex stops along with the score and the cactus are destroyed and trex goes back to the start

2. GROUND
   -----PLAY----
   The ground is a straight line with little bumps which the cacti sit on and the trex runs on the groung img is infinite which means it never ends or gets destroyed by anything
   ---END----
   the ground stops moving and stays still.

3. CACTUS

-- each cacti object is placed on the ground
-- INFINTE amount of cacti objects in the game
-- random images on cacti


  -----PLAY----

-- The cacti are created beyond the right boundary of canvas
-- the cacti move from righ to left with -ve velocityX
-- there is almost equal distance between each cacti object.
-- Each cacti is different from the others,
-- there are 6 different cacti Images
-- the cacti speed increases as the score increases.


  ---END----
-- the catci present will stop and not move at all
-- they will be destroyed only if we refresh the page or restart by clicking on restart button
-- the stopped cacti will be destroyed and not used again.

4. CLOUD
   -----PLAY----
   the cloud move from right to left and when the game stops the cloud stop and stay where they are and when the game resarts the clouds start again moving from right to left in diffrent posisions taking around about 10 seconds to cross the screen before a new cloud apears
   -----END----
   



5. SCORE
   -----PLAY----

-----END----

6. HIGH ACORE
   -----PLAY----

-----END----

7. GAME OVER MESSAGE
   -----PLAY----

-----END----

8. RESTART BUTTON
   -----PLAY----

-----END----

What is the title of the game? T-Rex Game

What is the goal of the game? The goal of the game is to avoid the cacti by jumping over them.

What is the storyline of the game? A T-Rex is running across a field where there are cacti in the way so it has to jump over them.

What are different elements constituting the game? T-Rex Cactus Score High score Replay button Clouds Ground Game Over message Describe individual behavior of each element in the game. T-Rex: Can jump or duck by using the arrow keys or space bar. Has an animation while running and changes when it touches a cactus. Can’t touch the cactus. Cactus: The cactus keeps coming in from the right side and the T-Rex has to jump over them. Each cactus is different from the others, there are 6 different cacti the cactus are placed on the ground, speed of them moving increases as score increases. Score: The score is in the top right and is steadily increasing as long as the T-Rex is alive. High score: Displayed as “HI,” the high score is the highest score on the game that the player got. Replay button: After the T-Rex touches a cactus this button is displayed. Click the replay button to reset the game. Clouds: Moves from right to left and is just decoration x velocity is negative. Generated randomly according to vertical position. When the game ends, clouds stop moving. Only one image is used for all the clouds. Ground: T-Rex runs on the ground and can only jump when touching it. Moves from right to left and increases in speed as the score increases. Ground and cacti are moving at the same speed. Game Over message: Displayed when the T-Rex touches a cactus.

What are the elements of skill? Timing the jumps

What are the elements of chance? When you aren’t very good at the game but get lucky when trying to jump over the cactus.

How does the game create balance between elements of skill and chance? The goal is not very difficult but not very easy which allows players that are skilled, or players that are lucky to play the game.

How does the game provide feedback to the player? Through the score, high score, game over message, and play again button.
