<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="file" name="imgfile" v-on:change="onFileSelected">
    <button @click="onUpload">upload</button>
  </div>
</template>

<script>
import axios from "axios"; /*Axios is a third party package that makes it easier for us to send ajax requests. Ajax requests. It is still the primary way that JavaScript in a web page makes an in-page request to a server. ... AJAX stands for Asynchronous JavaScript and XML, and is a technology supported by native JavaScript (ECMAScript). */
export default {
  name: 'app',
  data () {
    return {
      msg: "Uploading Files",
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event) {
     this.selectedFile = event.target.files[0]
   },
   onUpload() {
     const fd = new FormData(); /*Form Data is a JavaScript object. We don't need to import or install it.*/
     fd.append("image", this.selectedFile, this.selectedFile.name);/*Can append a new piece of data to the fd object. You can name the new piece of data whatever you would like. In this case, we have named it image. The second parameter is the value selectedFile, in this case, is the file that the user picked, and we then stored in the selectedFile property.The third parameter just grabs the name of the file.*/
     axios.post("http://127.0.0.1:3000", fd)
       .then(res => {
         console.log(res);
       })

   }
       /*Note: Axios returns a promise, and therefore we can use.then*/
       /**/

   /*Can send a file in a binary format or as a part of form data, which is JS object meant to mix normal fields and file and package into one request body and send it to the backend.

   Can use your own backend, but if don't have one, can use a firebase cloud function, which accepts form data, and stores a file on the firebase cloud storage.

   Can also use node.js as your backend
   @3:30*/
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
