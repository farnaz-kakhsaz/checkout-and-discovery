# Checkout & Discovery:

> **Note:** You can check out the demo here: [checkout-and-discovery.vercel.app](https://checkout-and-discovery.vercel.app/)

## **This is the list of things that I did:**

1. Got a list of products (PLP or product list page) to show them on the home page.
2. Created details page (PDP or product details page)
3. Created the cart page to show the list of added products to the cart.
4. Ability to add the product to the cart from the details page.
5. Ability to add the product to the cart from the home page.
6. Created cart modal on the home page.
7. Created pagination for the list of products.
8. The added products will remain in the cart even after closing the application.

### **Additional:**

1. It is possible to change the page number (on the home page) with the URL.
2. You can get the product (if you have its id) with the URL on the details page.
3. Attention to details on the home page and modal cart (cards, hover effects, icons, etc.)
4. Ability to remove products from both modal cart and cart page.
5. All searches are with API call
6. Calculate discount (on cards info icon) and total amount on cart modal and cart page.
7. Make the app into PWA (progressive web application)
8. Deploy app: [checkout-and-discovery.vercel.app](https://checkout-and-discovery.vercel.app/)

> Funny tips: With adding this URL **https://cors-anywhere.herokuapp.com** in front of any URL API call there is no need for any additional extension. You need to first request temporary access to the demo server from here:
> https://cors-anywhere.herokuapp.com/corsdemo.
> But be cautious, this is only for development purposes and has limited requests.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
