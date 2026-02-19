    const excerpts = [
   `I foresee that man will resign himself each day to new abominations, that soon only soldiers and bandits will be left.`,

 "His novel had no sense to it and nobody ever found his labyrinth." ,

`I imagined it untouched and perfect on the secret summit of some mountain; I imagined it drowned under rice paddies or beneath the sea; I imagined it infinite, made not only of eight-sided pavilions and of twisting paths but also of rivers, provinces and kingdoms ... I thought of a maze of mazes, of a sinuous, ever growing maze which would take in both past and future and would somehow involve the stars.`, 

`My irrevocable decision could wait. `,

`I calculated that my pursuer, Richard Madden, could not arrive in less than an hour.`,

`Eagerly, but without understanding, I read the words which a man of my own blood had written with a small brush: I leave to various future times, but not to all, my garden of forking paths.` ,

`Fang, let us say, has a secret. A stranger knocks at his door. Fang makes up his mind to kill him.`,

`Naturally there are various possible outcomes.`,

`Fang can kill the intruder, the intruder can kill Fang, both can be saved, both can die and so on and so on.`,

`In Ts'ui Pen's work, all the possible solutions occur, each one being the point of departure for other bifurcations.`,

`Sometimes the pathways of this labyrinth converge. For example, you come to this house; but in other possible pasts you are my enemy; in others my friend.`,

`All were Albert and myself, secretive, busy and multiform in other dimensions of time. I lifted my eyes and the short nightmare disappeared.`,

`The future exists now, I replied. But I am your friend. Can I take another look at the letter?`,

`I have been condemned to hang. Abominably, I have yet triumphed! The secret name of the city to be attacked got through to Berlin. Yesterday it was bombed.`,

`I read the news in the same English newspapers which were trying to solve the riddle of the murder of the learned Sinologist Stephen Albert by the unknown Yu Tsun.`,

`The Chief, however, had already solved this mystery. He knew that my problem was to shout, with my feeble voice, above the tumult of war, the name of the city called Albert, and that I had no other course open to me than to kill someone of that name. He does not know, for no one can, of my infinite penitence and sickness of the heart. `,

`' A malicious and outlandish statement. In point of fact, Captain Richard Madden had been attacked by the Prussian spy Hans Rabener, alias Viktor Runeberg, who drew an automatic pistol when Madden appeared with orders for the spy's arrest. Madden, in self defense, had inflicted wounds of which the spy later died. - Note by the manuscript editor.`,

    ];

    function randomizeText() {
      const randomIndex = Math.floor(Math.random() * excerpts.length);
      document.getElementById("excerpt").textContent = excerpts[randomIndex];
    }

    // show one on page load
    randomizeText();