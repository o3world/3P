> *All questions in this document will be replaced with answers.*


***
## Style Guide
### Colors
$color_primary: #??????;
### Fonts
***
## Routes
#### Home
https://triplepundit.com/
#### Prime Stories
https://triplepundit.com/stories/
#### Prime Story
https://triplepundit.com/stories/ID/harness-the-power-of-trees
#### Editors
https://triplepundit.com/editors/
#### Editor
https://triplepundit.com/editors/ID/john-howell

***
## Site Map

- Home
- Stories
    - Story
    - Feed?
    - Media?
- Stands
    - BTS Archive
- Events
    - Webinars
    - Conferences
- Editors
    - Editor
    
***
## Header
### Logo
The logo is dependent on the context. Clicking it will always take the user Home.

- Homepage - tall 
- Narrow - small
- Interior pages

#### Questions

- What is the logo in the header of the interior pages?

### Search form
### Newsletter signup form
### Hamburger Menu
***
## Homepage
### Hero
This is the first of six curated `post` type stories that are at the top of the homepage. No special API request, as it will be the first post in the `posts` response object.

#### Elements
- big hero image
- date
- share link icon
- title
- summary
- author
- "more" arrow

#### Questions
- Is there a max-height of the hero image? If so, is there also a max-width?
### Prime Stories
`post` type pieces 2-6 come below the Hero and are situated on wide screens in two rows with the first (#2) being wide and the second (#3) being tall. The remaining three will be on the second row, each taking 1/3 of the space. These rows span the full width of the content area. So what we basically have for layout of all prime stories on wide viewports is:  
1/1 (hero)  
2/3 1/3  
1/3 1/3 1/3  

Any of these places can be a special series or sponsored content. These will all be displayed in the order returned in the API.

A thumbnail image is not required.

The entire card is clickable and will change the route and display the detail of the post in its own "page." 

When hovering over any part of the card, the title and author headshot moves up slightly to reveal a narrow arrow which builds in from the left edge below the title, indicating to the user that they can click to read more.

#### Elements
- Background image (both wide and tall).
- category
- date - relative to now
- special series tag
- title
- author headshot
- author name
- "more" arrow

#### Questions
- Will the cards maintain aspect ratio? If not, what will we do with the background images when the size of the cards is very different?
- Do the cards have a max-height or min-height?
- When there isn't sufficient room for rows of three, will we go to two ([1/1][1/1][1/3 1/3][1/3 1/3]) and then eventually, when only enough horizontal room for a single card, go to a slider?
- What is the minimum width of a 1/3 card?
- Is the time in the upper right corner of the cards always relative to "now," or will they be a different format at some point? The current page seems to stick with the relative time.
- Why are the "Special Series" and "Sponsored" cards treated differently? Is this intentional?
### The Feed
These are 3BL FMRs. Inclusion and order will be handled by the API.

Entire card is clickable.
#### Elements
- date
- title
- optional background image
#### Questions
- Are the heights and widths of these fixed?
- Does the number of cards depend on viewport width?
- Is there always only one row?
- Will the user be directed to the content on 3blmedia.com in a separate window/tab, or open up on this site?
### 300x250 Ad Space
#### Questions
- Can there be more than one of these? Can there be none?
- Is this space always to the right of The Feed tiles?
### Brands Taking Stands
The only dynamic content in this space are the newsletter title and date. The rest of the copy and the background image are static.
#### Questions
- How does this change in size with viewport width?
### Listen/Watch
#### Questions 
- How does this change in size with viewport width?
### 728x90 Ad Space
#### Questions
- Will there always be an ad here?
### 3BL Association
1/2 width regardless of viewport width. 1/1 on narrow viewports.

All content is static.
### 3BL Forum
1/2 width regardless of viewport width. 1/1 on narrow viewports.

All content is static.
### Editorial Team
Three editor profiles. Full width area.

All content is static.

#### Questions
- Where does the "Bio" link go?
- Where does the "Team" link go?
- What happens when a user clicks on the social media icons?
- Does the content here change with various viewport widths? Are the two on the right always stacked, or will we go with 1/3 1/3 1/3 on wider viewports? 
- Do the two on the right always lack a bio summary?
- Could there be more or less than three editors featured on the homepage?
### Newsletter Signup Form
#### Questions
- What should happen when a user adds their email address and clicks "Subscribe"? 
- Are we doing client-side validation on the email address?
*****
## Footer
### Navigation
### Social Links
### Copyright
### 3BL Links
#### Questions
- Are there hover effects?
- Is there a max-width or should the content stretch to fit the full viewport width?