Database running at ="mongodb://localhost:27017/covidfoodexpress"
The app server backend is running at = port 3001
The app react frontend is runnin at = port 3000


These routes need to hit from frontend for successfull operations


Sign up = http://localhost:3001/api/signup
    POST
    mandatory fields = name, password, email

Sign in = http://localhost:3001/api/signin
    POST
    mandatory fields = password, email
    a token is generated on successfull signin, stores the token in user browser cookies and does all tasks based on authentication of this token.

Sign out = http://localhost:3001/api/signout
    GET
    clears user browser cookies on successfull signout

Get user = http://localhost:3001/api/user/:userId
    GET
    gett user by id, in place of userId variable put user id

Update user = http://localhost:3001/api/user/:userId
    PUT
    Route for updating user details

Create product = http://localhost:3001/api/product/create/:userId
    POST
    create product provided the user is admin (TODO: - phto is not accessible)

Get a product = http://localhost:3001/api/product/:productId
    GET
    get a product by using its id (TODO: - phto is not accessible)

Get a product photo = http://localhost:3001/api/product/photo/:productId
    GET
    get the photo of a particular product (TODO: - phto is not accessible)

Update a product = http://localhost:3001/api/product/:productId/:userId
    PUT
    update a product provided the user is admin

Delete a product = http://localhost:3001/api/product/:productId/:userId
    DELETE

Get all the products = http://localhost:3001/api/products
    GET
    get all the products from the DB 

Adding products to cart = http://localhost:3001/api/cart/:userId
    POST
    adding items to cart for ordering

Get all the products from cart = http://localhost:3001/api/cart/:userId/products
    GET
    get all the products from the cart

Deleting products from cart = http://localhost:3001/api/cart/:userId/:cartproductId
    DELETE
    deleting items from cart for ordering  TODO: not working (Access denied)

Create order = http://localhost:3001/api/order/create/:userId
    POST
    create order for a signed in user.

User purchase list (rendering orders of a user) = http://localhost:3001/api/orders/user/:userId
    GET
    to get all the orders of a user
    












