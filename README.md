preschoolAPI
======
<dl>
  <dt>Backend API</dt>
  <dd>API for frontend group project edU. "Educate develop understand."</dd>
  <dd>https://github.com/trozboril/preSchoolReadinessApp</dd>
</dl>

1. createdb preschoolDB
2. knex migrate:latest --env development
3. knex seed:run

Tables
------
| Tables        | url           | 
| ------------- |:-------------:|
| admins     | Needs all | 
| schools      | centered      | 
| teachers | are neat      | 
| classes | are neat      |
| guardians | are neat      |
| students | are neat      | 
| activites | are neat      | 



Views / Routes
------
Detail of views to tie backend routes to.

Login
---
check user and role to allow login.  Also allow for registeration.

| functionality        | Done?          | 
| ------------- |:-------------:|
| auth/login     |  | 
| auth/register     |       | 


Admin
---
Needs everything

| functionality        | Done?          | 
| ------------- |:-------------:|
| add teacher     |  | 
| add class      |       | 
| add student |       | 
| add parent |       |


classes
---
needs data from students, teachers, and activities tables

| functionality        | Done?           | 
| ------------- |:-------------:|
| auth/login     |  | 
| auth/register     |   | 


guardians
---
needs data from students and activities tables

| functionality        | Done?           | 
| ------------- |:-------------:|
| view student info     |  | 
| view student activities      |       | 

teacher
---
needs data from students, classes, and activities tables

| functionality        | Done?          | 
| ------------- |:-------------:|
| add student info     |  | 
| add student activities      |    | 



