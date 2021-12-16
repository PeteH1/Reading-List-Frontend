<h1 align="center">Reading List Project</h1>
<h2 align="center">Front end</h2>

The back-end repo can be found [here](https://github.com/PeteH1/Reading-List-Backend).

### Introduction
The aim of this project was to create a CRUD application with the utilisation of supporting tools, 
methodologies and technologies that cover all the core modules that I've learned over the last several weeks.
<br>I decided to go with the theme of a reading list, with information on the books stored in a MySQL database, 
an API to manage requests to and from the database, and a front end for user interaction.

#### The tools used for the project were:
 - A Jira board for project management
 - Git & GitHub for version control
 - MySQL relational database for persisting data
 - Java SE & Spring Boot for creating a RESTful API to link the database to the front-end
 - JUnit, Mockito and MockMVC for automated testing
 - Standard HTML, CSS and JS front-end, with Bootstrap used for additional styling
 
### Project management & planning
To start the project I made a [Jira scrum board](https://petehutchison.atlassian.net/jira/software/projects/RLP/boards/3) to lay out all the tasks & user stories that needed to be fulfilled to complete the project.
<br>Below is an example of my Jira backlog. I separated the project into 3 epics, and attached a priority and story point estimate to each user story, as well as MoSCoW prioritisation. Almost all the user stories I added were included in the week's sprint, with only a Selenium implementation left out, as there wasn't time to cover this before the beginning of the project.
<br> I also made use of smart commits in order to clearly see which pieces of work were relevant to which user story.

![jira-backlog-1](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Screenshots/Jira-backlog-1.PNG)

### Database
The main database for the project was a MySQL relational database. There was also an H2 database used for testing the Spring API.
<br>The ERD below shows the single table that held the data on the books in the reading list.

![book-ERD](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Documentation/Book-ERD.PNG)

This next screenshot shows some of the books that have been stored using the front-end features.

![table-screenshot](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Screenshots/MySQL-database.PNG)

### Back-end & testing
As mentioned above, the back-end was written in Java using Spring Boot.
<br>I tried to adhere to TDD for this project, and so wrote integration tests using JUNIT and MockMVC before writing the main functionality for the API.
This is a simple UML diagram of the classes in the src/main/java folder, showing the relationships. More UML diagrams are included in the documentation folder in this repo.

![main2-uml](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Documentation/main2.png)

<br>Mockito was also used for unit testing of the BookService class. As this is a fairly simple project, unit testing was less necessary as most of the methods tested contained minimal logic. However I wanted to include some unit tests as an example of how to use Mockito to test methods in a Spring Boot application.

The screenshots below show all the tests passing, and there was 91% coverage of the src/main/java folder.

![tests](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Screenshots/tests.PNG)
![test-coverage](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Screenshots/Test-coverage.PNG)

### Front-end
My front was built using the standard technologies mentiones in the intro. 
<br> The page has one form to add or edit books in the database, and another to filter the results displayed in the reading list.
<br> When adding a book, users can include an ISBN, which is used to try and retrieve a cover image from the Internet Archive's [Open Library API](https://openlibrary.org/dev/docs/api/covers).
<br>Books already in the database can be edited using the edit buttons on each book. This populates the add/edit form with the book's current details, and once any changes have been made, clicking "submit edit" saves them via a PUT request.
<br>The results can be filtered using the filter form. Titles and genres do not need to match exactly - results are returned for all books where the name/genre contains the string in the input box.
<br>Finally, books can be deleted using the delete buttons on each book. To prevent accidental deletion of a book, a confirmation box appears after the delete button is clicked, to check that the book should be deleted.

![front-end-partial](https://github.com/PeteH1/Reading-List-Frontend/blob/f6-Readme/Screenshots/front-end-partial.png)

### Potential Improvements
 - Front-end testing with Selenium could be used in future projects.
 - A filter-by-author could easily be added if more filters were needed.
 - While the aesthetics for this front-end aren't important (e.g. the animated background was added just as a demonstration), it might be worth dedicating more time to creating a nicer colour scheme and styling on new front-end projects.
 - Use of modals could've improved the appearance of editing or deleting a book, but this wasn't strictly necessary here.
