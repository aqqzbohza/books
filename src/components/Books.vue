<template>
  <div class="hello" >
    <div class="bd-example is-paddingless">
      <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">

            <img src="../assets/book.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navMenuColordark-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuColordark-example" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              หมวดหนังสือ
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                การ์ตูน
              </a>
              <a class="navbar-item">
                นวนิยาย
              </a>
              <a class="navbar-item">
                ประวัตศาตร์
              </a>
              <a class="navbar-item">
                อื่นๆ
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
              </p>
              <p class="control">
                <a class="button is-link" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                  <span class="icon">
                    <svg class="svg-inline--fa fa-download fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg><!-- <i class="fas fa-download"></i> -->
                  </span>
                  <span>Login with Facebook</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>   <!-- ส่วนของเมนู -->     <!-- ส่วนของเมนู -->   </div>

    <div class="" style="background-image: url(../assets/BG.jpg)">

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      showstock: ''
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData: function () {
      let that = this
      firebase.database().ref('/stock/').once('value').then(function (snapshot) {
        that.showstock = snapshot.val()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-image: image('');
}
</style>
