import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("Overseer", "Underworld Overseer", "img/projects/Overseer.jpg", `
    <div class="paragraph">
        <strong>Underworld Overseer</strong> is a game I started working on during my internship at Myron Games. After my internship ended, I stayed until the end of the project, right before QA testing.<br /> While working on this project, I added several features to the game. I updated the existing AI to allow for a new creature to do its job.I also added a new spell to the game and worked on a few of the traps.<br /> During my stay at Myron, I also started working on some internal Blender add-ons to allow for a smoother workflow.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4?si=I2cB3KJxa3lGquO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Find the game on steam at <a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">Underworld Overseer</a>.
    </div>

    <div class="paragraph">
        The unit i made while at Myron is the Bone Fairy. The Bone Fairy goes around and collects corpses for the player, once they have a corpse they will bring this corpse to a cemetery. This allows the player to easily resurrect them and get more value out of their necromancy spell.<br />
        This was a really interesting experience since it allowed me to delve into existing AI systems and update them for this new functionality.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/BoneFairy.png" alt="Bone Fairy"/>
    </div>
    `, "#730a0a"),
    new ProjectData("Research Project", "Code-Injected Aimbot in Doom", "img/projects/Aimbot_Gif_Doom.gif", `
    <div class="paragraph">
        <strong>Code-Injected Aimbot in Doom</strong> is a research paper I made in school. The goal was to research a topic that interested me. I have always had an interest in how code injection works, and thought it had a lot of applications for older games. Here I compared the speed of development for an aimbot with code injection for both a game where I have the source code, <strong>DOOM</strong>, and a game where I don't have the source code, <strong>Call of Duty: World at War</strong>. I also compared the runtime performance between code injection and image recognition.
    </div>

    <div class="paragraph center">
    <div class="notice">
        Source code is available on <a href="https://github.com/AaronFrans/DLL-Injection" target="_blank">GitHub</a><br />
        The Paper is available <a class="download-link" href="d/Exploring_a_Code-Injected_Aimbot_in_Doom-Aaron_Frans.pdf" target="_blank">Here</a>
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Aimbot_Gif_Doom.gif" alt="A simple aimbot with code injection in the game Doom" />
    <img class="pc-screenshot" src="img/projects/Aimbot_Gif_CoDWaW.gif" alt="A simple aimbot with code injection in the game Call of Duty World at War" />
    </div>
    `, "#331f1e"),
    new ProjectData("SnakeNN", "Snake Neural Network", "img/projects/Snake-NN-Timelapse.gif", `
    <div class="paragraph">
     <strong>Snake Neural Network</strong> is a neural network trained to play the game snake. This project was an assignment where the goal was to delve deeper into some subject, that revolves around AI in games. Since I have always had some interest in neural networks, I used this opportunity to delve into how they work and how to apply it to a simple game, in this case snake.
    </div>
    <div class="paragraph center">
    <img class="pc-screenshot " src="img/projects/Snake-NN-Timelapse.gif" alt="Snake Neural Network Training" />
    </div>
    <div class="paragraph center">
    <div class="notice">
        Source code available at <a href="https://github.com/AaronFrans/SnakeNN" target="_blank">Github</a>
    </div>
    </div>
    `, "#23bd69"),
    new ProjectData("API Pokédex", "Pokédex with API", "img/projects/Pokedex_API_Video.gif", `
    <div class="paragraph center">
        <div class="notice error">
           <strong>This project was purely educational; all rights belong to Nintendo and the Pokémon Company!</strong>
        </div>
    </div>  
    <div class="paragraph">
        This <strong>Pokédex</strong> is made with the free to use Pokémon API from <a href="https://pokeapi.co/">pokeapi</a>. The goal of this project was to make a small app that uses an api, and lists all items from that api, then you can click one of the items to get a more detailed view of the selected item. <br />
        This project was made with C# .NET
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Details_Page.png" alt="The Details screen made with the poke   ex api" />
        <img class="pc-screenshot" src="img/projects/List_Page.png" alt="The List screen made with the pokedex api" />
    </div>
    `, "#046115"),
    new ProjectData("Zombie Survival", "Zombie Survival AI", "img/projects/ZombieGame.gif", `
    <div class="paragraph">
        <strong>Zombie Survival AI</strong> is a project where the goal was to make an AI able to survive against waves of zombies while only able to get info from a cone in front of the AI. I used a primitive blackboard to store the info while using a simple spiral pattern to explore the world.
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/AaronFrans/ZombieGame" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/ZombieGame.gif" alt="The AI moving on its own." />
    </div>`, "#797d7a"),
    new ProjectData("Mario Overlord", "Mario64 Remake", "img/projects/Mario.png", `
    <div class="paragraph center">
        <div class="notice error">
           <strong>This project was purely educational; all rights belong to Nintendo!</strong>
        </div>
    </div>  
    <div class="paragraph">
        <strong>Mario64 Remake</strong> is a remake of Mario64 in a DirectX- and PhysX-based engine, where the goal was to make your own render pipeline from scratch, as well as learn how the PhysX-based physics are handled. I also made some simple AI for the Goomba and implemented a character controller for Mario. I also made various shaders using HLSL, such as billboard shaders, an underwater shader, and shaders based on the vertex color of the object.
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/AaronFrans/SM64Remake" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Mario.png" alt="Screenshot of Mario Jumping" />
        <img class="pc-screenshot" src="img/projects/Mario3.PNG" alt="Screenshot of Mario in front of a waterfall with a coin and the castle to the right of him" />
    </div>`, "#e48246")
];