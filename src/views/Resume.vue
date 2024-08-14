<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm a passionate Belgian developer who has explored various facets of game
      development. Without a doubt, it is <strong>the domain of AI</strong> that
      truly interests me. Among the many aspects of AI development, I find
      particular joy in crafting
      <strong>behaviors and pathfinding algorithms</strong>. These areas allow
      me to delve deeper into the intricacies of creating intelligent systems
      that enhance the gaming experience. Another aspect of programming I enjoy
      is the
      <strong
        >development of various tools, both in engine and outside of it</strong
      >.
      <br />
      <br />I'm <strong>currently looking for a job</strong> as a Game developer
      with a preference for either tool development and gameplay programming.
      Feel free <router-link to="/contact">contact me</router-link>.
      <br />

      <div style="margin-top: 20px; margin-bottom: 20px">
        <a class="download-link" href="d/Aaron_Frans-Resume.pdf" target="_blank"
          ><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a
        >
        <div style="clear: both"></div>
      </div>
    </div>
    <div class="photo">
      <img :src="`/img/resume-photo.png`" alt="Photo of Aaron" />
    </div>

    <div style="clear: both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Internship Junior Game Developer</h3>
      <h4>Myron Games | Feb 2024 - July 2024</h4>
      <ul>
        <li>
          <strong
            >Work in an existing code base to implement new features</strong
          >
        </li>
        <li><strong>Work in team and check in for daily stand-ups</strong></li>
        <li><strong>Learn to debug and optimize a game in unity</strong></li>
      </ul>

      <h3>Internship Full-Stack Developer for Websites</h3>
      <h4>Innovatus BE | Feb 2021 - Jun 2021</h4>
      <ul>
        <li>
          <strong
            >Make the Front- and backend of the angular jobs admin site</strong
          >
        </li>
        <li>
          <strong>Work in team and check in for weekly scrum meetings</strong>
        </li>
      </ul>

      <h3>Maintenance of school</h3>
      <h4>Sint-Maarten Campus | Jul 2018 - Jun 2023</h4>
      <ul>
        <li><strong>During Summer holidays help clean the school</strong></li>
        <li>
          <strong>Work in a team of 8 people to complete a large task</strong>
        </li>
      </ul>

      <h2>Educational History</h2>

      <h3>Howest</h3>
      <h4>Digital Arts & Entertainment | Okt 2021 - Jun 2024</h4>
      <ul>
        <li>Learned to Program with C++.</li>
        <li>
          Learned to work with various engines Learned the videogame pipeline
        </li>
      </ul>

      <h3>Hogent</h3>
      <h4>Degree in Programming | Okt 2019 - Jun 2021</h4>
      <ul>
        <li>
          <strong>
            Learned full-stack development for android web and windows
            applications.
          </strong>
        </li>
        <li>
          <strong>Learned about programming ethics and time management.</strong>
        </li>
      </ul>

      <h3>Howest</h3>
      <h4>Digital Arts & Entertainment | Okt 2018 - Jun 2019</h4>
      <ul>
        <li>
          <strong> Learned to Program with C++.</strong>
        </li>
        <li>
          <strong>
            Learned to think critically about problems and how to solve them
          </strong>
        </li>
      </ul>

      <h3>Sint-Maarten Campus</h3>
      <h4>Social & Technical Sciences | Sep 2012 - Jun 2018</h4>
      <ul>
        <li>
          <strong>
            Learned about various sciences such as: Biology, Chemistry, ...
          </strong>
        </li>
        <li>
          <strong> Learned how to communicate with people.</strong>
        </li>
      </ul>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Technical</h3>
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="C++" :rate="4" />
        <SkillRate name="Unity" :rate="4" />
        <SkillRate name="Software Development" :rate="3" />
        <SkillRate name="Database Management" :rate="3" />
        <SkillRate name="Website Development" :rate="2" />
      </div>

      <div class="skill-set">
        <h3>Non-Technical</h3>
        <SkillRate name="Communication" :rate="3" />
        <SkillRate name="Work Ethic" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="English" :rate="4" />
        <SkillRate name="Dutch" :rate="4" />
      </div>
      <div style="clear: both" />
      <h2>Special Diplomas</h2>
      <div>Finished the Oracle Database course. (2020)</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default defineComponent({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
