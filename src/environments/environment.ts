// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  firebaseDetails: {
    apiKey: "AIzaSyCvfqvLwxbsd3vjGv9_0TFaYcN4raz1iw0",
    authDomain: "sample-pro-1b70a.firebaseapp.com",
    databaseURL: "https://sample-pro-1b70a.firebaseio.com",
    projectId: "sample-pro-1b70a",
    storageBucket: "sample-pro-1b70a.appspot.com",
    messagingSenderId: "294266875928"
  }
}

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
