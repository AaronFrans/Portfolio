<template>
  <div style="margin-bottom: 80px">
    <h1>Hi There!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Aaron Frans</strong>, a Junior Game Developer.<br />
        I'm interested in multiple facets around games, but most prominently I
        am interested in both gameplay programming as well as developing various
        tools that help with the development process of games.
      </div>

      <div style="margin-top: 20px">
        I've worked on
        <router-link to="/">various projects</router-link> that revolve around
        both AI in games as well as tools for games.
      </div>

      <div style="margin-top: 40px">
        I'm <strong>currently looking for a job</strong> as a Game developer
        with a preference for both tool development and gameplay programming.
        You can reach me at
        <a href="mailto:aaronfrans@hotmail.com">aaronfrans@hotmail.com</a> or
        <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img :src="`/img/avatar.png`" alt="Avatar of Aaron Frans" />
    </div>

    <div style="clear: both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
