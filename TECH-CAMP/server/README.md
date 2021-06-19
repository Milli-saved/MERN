# Database
 =>> user
    => Firstname
    => lastname
    => email
    => password
 =>> book
    => name
    => cover photo
    => creator
    => contributions
    => content

## It needs to be based on the resource.

=>> User
    ==> /api/v1/users ---- GET == get all the users.
    ==> /api/v1/users ---- POST == create users.
    ==> /api/v1/users/:id -- PUT/PATCH == update the user.
    ==> /api/v1/users/:id -- DELETE == delete's a user.
=>> books
    ==> /api/v1/books ---- GET == get all the users.
    ==> /api/v1/books ---- POST == create users.
    ==> /api/v1/books/:id -- PUT/PATCH == update the user.
    ==> /api/v1/books/:id -- DELETE == delete's a user.

## routes
 => 