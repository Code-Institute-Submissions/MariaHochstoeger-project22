# Indian Weddings for Beginners - A Quiz

Visit the live site [here](https://mariahochstoeger.github.io/project2/).

![responsive mock-up](assets/images/readme-images/mockup.png)

This is a quiz about Indian weddings. It lets the user test their knowledge about some of the most common events - usually called "functions" - found in a traditional Indian Hindu wedding. On the website and in this readme, the terms "Hindu wedding" and "Indian wedding" are used interchangeably.

## Table of Contents

1. [Design](#design)
2. [Features](#features)
3. [UX](#ux)
4. [Testing](#testing)
5. [Sources](#sources)
6. [Credits](#credits)

## Design

The site was created with persons in mind who have not had any point of contact with traditional Indian weddings so far. The aim was to evoke feelings of joy and celebration, and a distant association to India, through colors and fonts. Besides that, the design is kept very simple and minimal as to not distract the user from the quiz and reading and answering the questions.

### Wireframes

The wireframes were made in Figma. A mockup of a mobile screen was chosen since the site was built using the mobile-first approach. The wireframes were kept very simple and the focus was on structure rather than design. The wireframes also include a countdown field which was not implemented in the basic version of the game. Also, at this point no personalized message is included when the score is displayed. Both are possible future features.

![Wireframes for mobile](assets/images/readme-images/wireframes_indian_wedding.png) <br>

### Font and Colour Choices
**Fonts:** 'Laila' was chosen as the font for the header and main headings for its playful design with its slight nod to the Indian letters used for Hindi, Devanagari, through its gentle flares and curles at the end of the letter strokes. 'Poppins' makes up the main part of the site due to it being a quite neutral, easy-to-read but still friendly font.

**Colours:** The colour palette was generated using [mycolor.space](https://mycolor.space/?hex=%23FA00A6&sub=1). The reference colours were picked from the inspiration image (taken from [Pexels](https://www.pexels.com/)) which shows a man with his face full of paint powder, which is common during one of the biggest Indian festivals, Holi, also called the Festival of Colors. Although Holi does not have an association with Indian weddings, the color scheme was chosen as these types of colors are often associated with India more broadly. Furthermore, the colors are bright, vivid and fun, which is an association the quiz would like to evoke.

Inspiration image: <br>
<img src="assets/images/readme-images/face-with-holi-colors-compressed.jpg" alt="Face of a man covered in colorful powders" width="300"/> <br>
![Colour palette](assets/images/readme-images/generic-gradient.png)<br>
![Picked green color](assets/images/readme-images/picked-color-hashtag015d45.png)<br>
![Generated squash palette](assets/images/readme-images/squash-palette.png)

**Images:** No images are displayed on the site itself. As described above, an inspiration image was used to generate the colour palette.

## Features

The site has the basic features of a static website as well as some interactive features written in JavaScript.

- **Header**
    - The header is always visible throughout the game. It contains the title of the quiz.
    - It is static, without any interactive elements.<br>
    ![header](assets/images/readme-images/header.png)

- **Main section**
    - The main part of the site contains the interactive and changeable elements of the site. 
    - There is a welcome heading and tagline about the quiz. These elements will disappear as the game progresses but are not interactive.
    - Below, the interactive elements are shown: a username input field, a "Let's start"-button, and a "How to play"-button.<br>
    ![Main part of the page](assets/images/readme-images/body.png)<br>

- **Username input field and validation**
    - The username input field with the placeholder text "Type your name" invites the user to input their chosen username.
    - The username is a required input.
    - Should the user click "Let's start" without having provided a username, or having provided only spaces, an error message appears prompting the user to "Please fill in a username!".<br>
    ![Error message if no username was provided](assets/images/readme-images/error-message.png)<br>

- **Rules**
    - If the user would like to know the rules of the game, they can click the "How to play" button.
    - A modal with the rules opens.
    - The modal can be used by either clicking the little X in the top right corner of the modal, or clicking anywhere on the page outside the modal<br>
    ![Rules of the game](assets/images/readme-images/rules.png)<br>

- **Let's Start**
    - If the user feels comfortable to start playing they can click on the "Let's Start" button.
    - Upon clicking the button, the username input gets validated and - if successful - the game starts.<br>
    ![Username input field and start and rules buttons](assets/images/readme-images/user-input-field.png)<br>

- **Timer**
    - Upon starting the first question, the timer begins counting down from 30 seconds.
    - The timer stops when an answer is selected.
    - If no answer is selected within 30 seconds, the answer buttons get disabled and the countdown shows "Time over".<br>
    ![Timer](assets/images/readme-images/timer.png)<br>
    ![Time over](assets/images/readme-images/timer-over.png)<br>

- **Question field**
    - In the question field, a number appears. Currently, it starts with "1." and goes up to "5."
    - Next to the number, the current question is displayed.<br>
    ![Question field](assets/images/readme-images/question-field.png)<br>

- **Answer buttons and next button**
    - Below the question field, 5 answer buttons are displayed.
    - Each button contains a possible answer.
    - When the question and buttons first appear, the buttons are of the same color. They change color upon hovering over.
    - Once an answer is selected, the correct answer is highlighted green.
    - If an incorrect answer was selected, this incorrectly selected answer is highlighted in red.
    - Simultaneously, upon selecting an answer, all answer buttons get disabled. A new button, the next button, appears below the answer buttons. This button needs to be clicked in order to proceed to the next question.<br>
    ![Unselected answer buttons](assets/images/readme-images/answer-buttons.png)<br>
    ![Selected answer buttons with next button](assets/images/readme-images/selected-answer-buttons-w-next-button.png)<br>

- **Final score**
    - After all questions have been answered, the user's final score is displayed.
    - For personalization, it is displayed next to the user's chosen username.<br>
    ![Final score](assets/images/readme-images/score.png)<br>

- **Play again or Home buttons**
    - Below the final score, two buttons appear: the "Play again" button, and the "Home" button.
    - Clicking the play again button will redirect the user to the first question and the game will start anew.
    - Clicking the home button will redirect the user to the home screen where a new user name can be chosen, or the rules read again.<br>
    ![Play again and home buttons](assets/images/readme-images/playagain-and-homebutton.png)<br>

- **Footer**
    - The footer contains a copyright symbol and the author's, ie my, name.
    - There is a LinkedIn icon. The icon opens in a new tab, making it easy for users to come back to the quiz site.
    - The footer is consistent throughout the pages.
    ![Footer](assets/images/readme-images/footer.png)

### Possible Future Features

- Include a progress bar

    - In order to show the user how many questions are remaining in the game, a progress bar could be introduced.
    - With each question answered, the progress bar would fill up until it was full after answering the last question.
    - This would give the user a better feeling of how much time the game needs, and motivate users to play until the end.

- Display a personalized message depending on the score

    - After answering all questions, the score is displayed
    - Along with the score, there could be a message giving the user more feedback on how they did
    - Low scores would get more words of encouragement, while higher scores would get more words of praise

## UX

### Site Goals

The site wants to motivate users to play the game and by doing so, learn about the main functions of Indian weddings. The site wants to evoke a happy atmosphere and good feelings.
Should the user not get all questions right from the start, the site would like to make sure it does not discourage users from trying again by simply stating the score without judging it good or bad.

### User Stories

**As a site visitor:**

- I want to know what this site offers at a glance.
- I want to see a responsive design which looks good on mobile devices as well as on larger screens.
- I want to be guided through the site by an intuitive design, and not be distracted by unnecessary elements.
- I want to have a positive, joyful experience.
- I want to get feedback on my actions such as inputting a username or answering questions.
- I want to learn about Indian weddings.
- I want to see my final score.
- I want to be able to play again, or let a friend play on the same device after I am finished.

**As the site administrator:**

- I want to be able to adapt the existing questions or add new questions to the game easily.
- I want to be able to add potential future features should I so desire.

## Testing

- I confirmed that this project is responsive and looks good on various common screen sizes by using the devtools devices toolbar.
- I have confirmed that the username input validation works. There is an error message if the field is not filled out correctly.
- I checked that the modal opens upon clicking "How to Play" and can be closed by either clicking the little X, or anywhere on the page outside the modal.
- I ensured that the timer works correctly, starting at 30 seconds for each new question and stoping once an answer is selected.
- I made sure that the answer buttons give a correct colour-coded feedback upon selecting and clicking on an answer: red for incorrect, green for correct.
- I ensured that the "Play again" button takes the user to the start of the quiz, while the "Home" button takes the user to the start page.
- I confirmed that header and footer are easily readable and understandable.

### Fixed Bugs

- JavaScript elements not working because of elements with the same class name (.btn) on different html-pages. Fixed - with the great help of my mentor, Spencer Barriball - by merging the two html-files into one.
- When starting the game anew after having played once already, by clicking the "Play again!" button, the "Home" button was still visible at the newly displayed questions. Fixed by setting display of the home button to none in the respective function, resetState().
- On mobile, when clicking "Next" after answering a question, the screenview stayed at the bottom of the page, where the Next button was. The user would like to see the next question though, ie the top of the screen. Fixed by introducing a command to scroll up into showQuestion().

### Unfixed Bugs

- None.

### Validator Testing

- HTML ([W3C Validator](https://validator.w3.org/))
    - 1 error found: "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed."
    - Solution: introduced h4-element to the section and set it to display = none.

- CSS ([Jigsaw](https://jigsaw.w3.org/css-validator/))
    - No error found.

- JS ([JS Hint](https://jshint.com/))
    - 1 error found: one unnecessary semicolon.
    - Solution: deleted unnecessary semicolon.

- Performance, Accessibility, Best Practices, SEO (Lighthouse Chrome Dev Tools)
    - Accessibility is at a still high 94 due to some color contrasts not being as strong as they could be. After discussing with my group facilitator and mentor, it was decided to keep it as is.<br>
    - ![Lighthouse rating](assets/images/readme-images/performance-lighthouse.png)<br>

### Browser Testing (section adapted from Kay Welfare, results are my own)

**Layout:** Testing layout and appearance of site for consistency throughout browsers.

**Functionality:** Ensuring all links, navigation and form submit functions as expected throughout browsers.

| Browser     | Layout      | Functionality |
| :---------: | :----------:| :-----------: |
| Chrome      | ✔          | ✔             |
| Edge        | ✔          | ✔             |
| Firefox     | ✔          | ✔             |
| Safari*     | ✔          | ✔**           |
| IE          |deprecated by Microsoft, not tested|

The timer seems to start with a slight delay. In order to optimize the timer's start, the respective function was placed far up in the code to prevent as much as possible that other code is executed before it. Since the slight delay only means that on the one hand, the user has a bit more time, and on the other hand, the user's attention gets drawn to the time-pressure more, it was deemed acceptable.

*Only available to me on iPhone. My mentor kindly reviewed the site for me in Safari on desktop.<br>
**On mobile (which I reviewed), modals (error message or rules) can only be closed by clicking on the little X, not by clicking on the screen outside the modal. As there are two options for the same result, and one works completely fine, it was deemed acceptable.

### Manual Testing (section adapted from Kay Welfare, results are my own)

| Feature     | Expect      | Action        | Result |
| :---------: | :----------:| :-----------: | :-----:|
| **Username input field**   | As a user, I can input my chosen username   | Various usernames were put in  | Username inputs were accepted |
| **Let's Start! Button w/o username filled in**  | When clicked, an error message will appear prompting the user to fill in a name  | Clicked Let's Start! without putting in a username | Error message appeared |
| **Let's Start! Button with username filled in** | When clicked, the game will start  | Filled in a username and clicked "Let's start!" | Game starts |
| **How to play Button** | When clicked, a modal will open with the rules | Click How to play | Modal containing the rules of the game opens |
| **Rules modal and error message** | Rules/Error message will close when clicking the little X, or outside of the modal | Clicked X, and outside the modal | The modal closed |
| **Answer buttons** | When clicked, receive feedback on whether answer was correct/incorrect | Clicked various answer buttons | Buttons highlight orange when hovered over. Upon clicking, buttons get disabled and the correct answer is highlighted green. Incorrect answer, if chosen, is highlighted red |
| **Next button** | Take user to next question | Click the button | Next question is displayed. After the last question, final score is displayed. |
| **Play again button** | Take user back to first question and reset the score | Click the button | First question is displayed. After answering all questions, new score is displayed. |
| **Home button** | Take user back to the home page | Click the button | Home page is displayed. User can choose new username |
| **LinkedIn icon in footer** | LinkedIn will open in a new tab | Click the icon | LinkedIn profile of the page's author opens in new tab |

### Testing User Stories (section adapted from Kay Welfare, results are my own)

| Expectation                         | Result                          |
| :---------------------------------: | :------------------------------:|
| I want to know what this site offers at a glance. | As a visitor, I can see the header which tells me the topic of the site, and a message telling me that this is a game |
| I want to see a responsive design which looks good on mobile devices as well as on larger screens. | As a visitor, I have a good view of the site on mobile device without overflow or side-scrolling |
| I want to be guided through the site by an intuitive design, and not be distracted by unnecessary elements. | As a visitor, all options I can choose from, such as inputting a username, or learning the rules of the game, or choosing an answer, are displayed on one page |
| I want to have a positive, joyful experience. | As a visitor, I am greeted by a joy- and colorful design which is consistent throughout the game |
| I want to get feedback on my actions such as inputting a username or answering questions. | As a visitor, I get an error message if I forgot to put in a username. I also get color-coded feedback whether my chosen answer is correct or not |
| I want to learn about Indian weddings. | As a visitor, I can take my time to read through the answers and learn about different functions of Indian weddings |
| I want to see my final score. | As a visitor, I see my final score after answering all questions |
| I want to be able to play again, or let a friend play on the same device after I am finished. | As a visitor, I can choose to play again after finishing the quiz, or choose a new username by going back to the home page |

## Deployment

This site was deployed on GitHub Pages:
- From the repository, first navigate to "Settings" (top of the page) and then "Pages" (left of the newly opened page)
- Under "Source" choose "Deploy from a Branch" in the dropdown menu
- Choose the "main" Branch, and folder "/(root)"
- Click "save"
- The website is subsequently deployed (this may take a few minutes) on GitHub Pages
- To get there, in the "Code" tab of the repository, on the right-hand side under "Environments" click on "github-pages"
- On the newly opened page, on the right-hand side, click on "View deployment"

## Sources

- Love Running walk-through project for basic structures of header and footer
- Favicon: <a target="_blank" href="https://icons8.com/icon/ZFiK6ATniCG5/heart">Heart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
- The mock-up image of the site on different devices was generated using [techsini.com](https://techsini.com/multi-mockup/)
- All images taken from [pexels.com](https://www.pexels.com/)
- Images were compressed using [iloveimg.com](https://www.iloveimg.com/)

## Credits
- Modal: https://www.w3schools.com/howto/howto_css_modals.asp
- Quiz: Tutorial from https://www.youtube.com/watch?v=PBcqGxrr9g8&t=118s 
- How to make the inspiration image in this readme.md file smaller: https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown
- Definition of Mehndi: Oxford Languages
- Definition of Baraat: https://getethnic.com/blogs/baraat/
- Definition of Sangeet: https://events.restless.co.uk/event-calendar/sangeet-night/
- Definition of Haldi: https://www.ruraltreasures.com/blogs/news/the-traditional-significance-of-haldi-ceremony
- Show the top of the screen after clicking next: https://www.w3schools.com/jsref/met_win_scrollto.asp
- Descriptions for JS functions: https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/