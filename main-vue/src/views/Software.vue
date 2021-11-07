<template>
  <div class="software">
    <div class="title-container">
      <h2 id="title">Checkout the software we have available!!</h2>
    </div>

    <div id="body-flex-container">
      <div class="app-card" id="BWU">
        <img class="app-image" src="../assets/recipe.svg">
        <div class="app-text-wrapper">
          <h4 class="app-title">Recepie Storing</h4>
          <p class="app-text">Are your recipes a mess of binders, loose pages, and notebooks? With the power of a Reginald Systems server and our official Recepie Storing and Sorting software this issue can be a thing of the past. <br><br>This application runs on your server, allowing you to upload files to it containing your recipes. Our app will then scan them and automatically sort them for you. All of your precious recipes will be accessible on your mobile device at the touch of a finger. Our app can even recommend recipies that you haven't tried in a while. Need to quickly send your sister a recipe that she is asking for? Just push the share button on the app and we'll take care of the rest.</p>
        </div>
      </div>
      <hr>
      <div class="app-card" id="ASUY">
        <div class="app-text-wrapper">
          <h4 class="app-title">Photo Backup</h4>
          <p class="app-text">Your memories are precious to you, so store them on multiple devices to prevent accidental loss<br><br>We at Reginald Systems aim to be your one-stop place to store your pictures. That is why we have developed this software. The moment you take a photo with your phone or other device it is uploaded to your server automatically. No matter if you accidentally delete the picture after you take it, yourserver wil keep it safe no matter what.</p>
        </div>
        <img class="app-image" src="../assets/pictures.svg">
      </div>
      <hr>
      <div class="app-card" id="TAS">
        <img class="app-image" src="../assets/cloudBackup.png">
        <div class="app-text-wrapper">
          <h4 class="app-title">Server Backup</h4>
          <p class="app-text">Unfortunately, loosing data is not so much a question of if as much as when. ANd when taht happens, we want to protect your data at all costs. That is why we are offering for you to use our servers to back up your data to our cloud. With this service, any files that you put onto your server will be automatically backed up to the cloud, and will ba availible anywhere in the world. Additionally, in the event your server fails, you only need to reactivate your account on a new device and all your files and data will be restored.</p>
        </div>
      </div>
      <hr>
      <div class="app-card" id="TAS">
        <div class="app-text-wrapper">
          <h4 class="app-title">Coming Soon</h4>
          <p class="app-text">Here at Reginald Systems we are constantly working to improve your experience using your server. As part of that we are continuously working to develop new applications to expand the capabilities of your server. Here are a couple of the projects that we are currently working on:</p>
          <ul>
            <li>Game Server Hosting</li>
            <li>Automatic Computer Backups</li>
            <li>Meal Planning Assistant</li>
            <li>Shopping List Generator</li>
            <li>Network Monitor</li>
          </ul>
        </div>
        <img class="app-image" src="../assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Software'
}
</script>
