    const excerpts = [
  `An Irishman in the service of England, a man suspected of equivocal feelings if not of actual treachery, how could he fail to welcome and seize upon this extraordinary piece of luck: the discovery, capture and perhaps the deaths of two agents of Imperial Germany?`,

`Vaguely I thought that a pistol shot can be heard for a great distance.`,

`The advice about turning always to the left reminded me that such was the common formula for finding the central courtyard of certain labyrinths. I know something about labyrinths.`,

`Not for nothing am I the greatgrandson of Ts'ui Pen. He was Governor of Yunnan and gave up temporal power to write a novel with more characters than there are in the Hung Lou Meng, and to create a maze in which all men would lose themselves. `,

`He spent thirteen years on these oddly assorted tasks before he was assassinated by a stranger.`,


`I imagined it untouched and perfect on the secret summit of some mountain; I imagined it drowned under rice paddies or beneath the sea; I imagined it infinite, made not only of eight-sided pavilions and of twisting paths but also of rivers, provinces and kingdoms ... I thought of a maze of mazes, of a sinuous, ever growing maze which would take in both past and future and would somehow involve the stars. `,

`Something stirred in my memory and I said, with incomprehensible assurance: "The garden of my ancestor, Ts'ui Pen." `,

`They had never been printed. A phonograph record was spinning near a bronze phoenix. I remember also a rose-glazed jar and yet another, older by many centuries, of that blue color which our potters copied from the Persians . . .`,

`Stephen Albert was watching me with a smile on his face. He was, as I have said, remarkably tall. His face was deeply lined and he had gray eyes and a gray beard. `,

`Later, he told me he had been a missionary in Tientsin before he "had aspired to become a Sinologist."`, 

`"A strange destiny," said Stephen Albert, "that of Ts'ui Pen - Governor of his native province, learned in astronomy, in astrology and tireless in the interpretation of the canonical books, a chess player, a famous poet and a calligrapher. `,

`Yet he abandoned all to make a book and a labyrinth. He gave up all the pleasures of oppression, justice, of a well-stocked bed, of banquets, and even of erudition, and shut himself up in the Pavilion of the Limpid Sun for thirteen years. At his death, his heirs found only a mess of manuscripts. `,

`The family, as you doubtless know, wished to consign them to the fire, but the executor of the estate - a Taoist or a Buddhist monk - insisted on their publication." `,

`"Those of the blood of Ts'ui Pen," I replied, "still curse the memory of that monk.`, 

`Such a publication was madness.`,

`The book is a shapeless mass of contradictory rough drafts.`, 

`I examined it once upon a time: the hero dies in the third chapter, while in the fourth he is alive.`, 

`As for that other enterprise of Ts'ui Pen ... his Labyrinth . . ."`,

`I, a barbarous Englishman, have been given the key to this transparent mystery.`, 

`After more than a hundred years most of the details are irrecoverable, lost beyond all recall, but it isn't hard to image what must have happened.`,

`At one time, Ts'ui Pen must have said; 'I am going into seclusion to write a book,' and at another, 'I am retiring to construct a maze.`,

`' Everyone assumed these were separate activities.`, 

`No one realized that the book and the labyrinth were one and the same.`,

`"Ts'ui Pen died. In all the vast lands which once belonged to your family, no one could find the labyrinth. The novel's confusion suggested that it was the labyrinth.`, 

`Two circumstances showed me the direct solution to the problem.`,

`First, the curious legend that Ts'ui Pen had proposed to create an infinite maze, second, a fragment of a letter which I discovered." `,

`"Naturally, my attention was caught by the sentence, 'I leave to various future times, but not to all, my garden of forking paths: I had no sooner read this, than I understood.`,

`The Garden of Forking Paths was the chaotic novel itself.`,

`The phrase 'to various future times, but not to all' suggested the image of bifurcating in time, not in space.`, 

`Rereading the whole work confirmed this theory.`,

`In all fiction, when a man is faced with alternatives he chooses one at the expense of the others.`, 

`In the almost unfathomable Ts'ui Pen, he chooses - simultaneously - all of them. He thus creates various futures, various times which start others that will in their turn branch out and bifurcate in other times.`,

`This is the cause of the contradictions in the novel.`, 

`I remember the final words, repeated at the end of each version like a secret command: "Thus the heroes fought, with tranquil heart and bloody sword. They were resigned to killing and to dying."`,

`I proposed various solutions, all of them inadequate. We discussed them.`,

`"I do not think that your illustrious ancestor toyed idly with variations. I do not find it believable that he would waste thirteen years laboring over a never ending experiment in rhetoric. In your country the novel is an inferior genre; in Ts'ui Pen's period, it was a despised one. Ts'ui Pen was a fine novelist but he was also a man of letters who, doubtless, considered himself more than a mere novelist.”`, 

`The testimony of his contemporaries attests to this, and certainly the known facts of his life confirm his leanings toward the metaphysical and the mystical. Philosophical conjectures take up the greater part of his novel.`,

`I know that of all problems, none disquieted him more, and none concerned him more than the profound one of time.`,

`Now then, this is the only problem that does not figure in the pages of The Garden. He does not even use the word which means time. How can these voluntary omissions be explained?"`,

`"The Garden of Forking Paths is an enormous guessing game, or parable, in which the subject is time. The rules of the game forbid the use of the word itself. To eliminate a word completely, to refer to it by means of inept phrases and obvious paraphrases, is perhaps the best way of drawing attention to it.`,

`This, then, is the tortuous method of approach preferred by the oblique Ts'ui Pen in every meandering of his interminable novel.`,

`I have gone over hundreds of manuscripts, I have corrected errors introduced by careless copyists, I have worked out the plan from this chaos, I have restored, or believe I have restored, the original.`, 

`I have translated the whole work. I can state categorically that not once has the word time been used in the whole book.`,

`"The explanation is obvious. The Garden of Forking Paths is a picture, incomplete yet not false, of the universe such as Ts'ui Pen conceived it to be. Differing from Newton and Schopenhauer, your ancestor did not think of time as absolute and uniform.`,

`He believed in an infinite series of times, in a dizzily growing, ever spreading network of diverging, converging and parallel times. This web of time - the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries - embraces every possibility.`,

`We do not exist in most of them. In some you exist and not I, while in others I do, and you do not, and in yet others both of us exist.`,

`In this one, in which chance has favored me, you have come to my gate. In another, you, crossing the garden, have found me dead. In yet another, I say these very same words, but am an error, a phantom."`,

];

function randomizeText() {
  const randomIndex = Math.floor(Math.random() * excerpts.length);
  document.getElementById("excerpt").textContent = excerpts[randomIndex];
}

randomizeText(); 