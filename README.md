# JOBI MVP 

wip 

### inspiration

https://learngraphql.com/basics/executing-graphql-queries

### situation

1.- Create an Custom schema that wraps the linked-in jobs response. 

You need to know how to create an graphQL schema

https://learngraphql.com/
http://graphql.org/learn/schema/
 
It is possible to use graphql-tools (https://github.com/apollographql/graphql-tools)
  
2.- Consume linkedin API.
  
- Need Authentication oauth 2.0. The user has to authenticate to allow the APP consume 
linkedin data
- The first approach is to use Auth0 (which includes already Linkedin) to grant access to 
linked in. There is a boilerplate project https://github.com/auth0-blog/fireteller 
with an implementation of aut0 and firebase. look if is useful

### next steps

- Look if fireteller uses Auth0 in a way that we can use
- if so, replicate code to connect to linkedin using it. 
- use REST api to access linkedin jobs
- wrap the answer using the graphQL

-