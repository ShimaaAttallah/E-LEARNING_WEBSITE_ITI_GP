# Project Title

E-learning Website

# Table of contents

- [Project Description](#project-description)
- [Project Overview](#project-overview)
- [Problem to be solved](#problem-to-be-solved)
- [Functional requirements](#functional-requirements)
- [Non Functional requirements](#non-functional-requirements)
- [Getting Started](#getting-started)
- [Users and Roles](#users-and-roles)
- [Deployment](#Deployment-of-the-project)
- [Authors](#authors)

## Project Description

E-learning is a standardized form of learning delivered through the internet to provide learners access anytime and anywhere. It's an ITI graduation project, a 3-months intensive training program, Full-stack Development using Python Track.

## Project Overview

The proposed website was made for E-learning. It will be used by instructors with all their roles.
Also, by the student that will interact with the courses. The website's main objective is to facilitate elearning students.
The courses information will be available to the students to be more familiar with the department.
The instructor can add courses, upload videos, and grade the assignments.
Moreover, the student can view courses, enroll in any course, watch videos , upload assignments, and can add reviews for courses.

## Problem to be solved

The project aims to facilitate elearning students. It provides convenient access to the needed information for students and makes it easier for the staff to upload and deliver it for them. So, the website saves time and distance and improve the interaction between the staff and the students
Undoubtedly, the Corona pandemic has affected the entire world in all aspects, including the educational process.
Schools and universities have been closed for long periods, so we had to provide a better, simpler, and safer alternative.
Of course, the best solution to deal with this situation was E-learning

## Functional requirements

- Signup and Login
- Discover all courses
- sending an E-mail
- View all reviews for a course
- Add a new category
- Add/edit/delete course materials
- Add new videos to the course
- Enroll in any course
- Watch the course's videos
- Upload assignment
- Add new review for a course

## Non Functional requirements

- Good performance
- Security
- Reliability
- Maintainability
- Usability

## Getting Started

### Steps

1. Clone This Project (Make Sure You Have Git Installed):

`git clone git@github.com:ShimaaAttallah/E-LEARNING_WEBSITE_ITI_GP.git` 2. Enter the Backend directory :

- Open 'cmd':
  `code .`

  `cd E-learning`

3. Install requirments :
   `pip install -r requirments.txt`

4. Open postgres or any database manager you want ex: mysql, sqlite (Django Default) and create your own database

5. Set the database type in `settings.py` to postgres and set the database name

   - In case you logged in postgres as root, you don't have to specify your username and password to the database in `settings.py`
   - In case you logged in as a user, you have to specify your username and password to the database

6. Set Database (Make Sure you are in directory same as manage.py):

`python manage.py makemigrations`

`python manage.py migrate`

7. Create SuperUser to access admin page:

`python manage.py createsuperuser`

8. Run the server:

`python manage.py runserver`

9. Enter the Frontend directory :

- Open 'cmd':
  `code .`

  `cd E-learning`

10. Install React dependencies :

`npm install`
or if you face issue with 'npm install':

`npm install`

11. Run React app :

`npm start`

### Installation

#### In Django

` pip install djangorestframework`

` pip install djoser`

` pip install django-cors-headers`

` pip install django-braces`

#### In React

` npm install react-bootstrap bootstrap@5.1.3`

` npm install react-scroll`

## Users and Roles

#### Users

- Any user will be able to register and determine if he is an instructor by checking on (is_staff) or leaving it empty if he is a student
- Then he will be redirected to the login page so he will be able to make the best use of the available features provided to him
- Discover all courses
- He will be able to contact us by sending an E-mail and we will do our best to help him

#### Instructor

- Can add a new category
- Can add a new course
- Can update existing course
- Can delete existing course
- Can add new videos to the course
- Can asks for an assignment he will be able to see student's solutions and add grades to them

#### Students

- Can view courses
- Can enroll in any course
- Watch the course's videos
- Can upload assignment
- Can add review for a course

## Deployment of the project

`https://eleaining-ammaryasser554zz-gmailcom.vercel.app/home`

## Authors

- ITI Students & Teammates, we are a Full Stack Web Development students at ITI - Python Back-end Track

### Contact Us

#### Shimaa Attallah

[Github](https://github.com/muhab404)

[Linked in](https://www.linkedin.com/in/shimaaattallah/)

#### Alaa Abouzied

[Github](https://github.com/alaa-abouzied)

#### Ammar Werdani

[Github](https://github.com/werdani)

#### Ayman Tarek

[Github](https://github.com/Ayman-aloub)

#### Baraa Fayezz

[Github](https://github.com/BaraaFayezz)
