const emojis = 
    [
        {
          "id": 1,
          "name": "Grinning Face",
          "image": "😀",
          "meaning": "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor."
        },
        {
          "id": 2,
          "name": "Face with Tears of Joy",
          "image": "😂",
          "meaning": "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing."
        },
        {
          "id": 3,
          "name": "Red Heart",
          "image": "❤️",
          "meaning": "A classic red heart emoji, used for expressions of love."
        },
        {
          "id": 4,
          "name": "Thumbs Up",
          "image": "👍",
          "meaning": "A thumbs-up gesture indicating approval. In certain contexts, it can be used to mean “good job” or “nice work”."
        },
        {
          "id": 5,
          "name": "Smiling Face with Heart-Eyes",
          "image": "😍",
          "meaning": "A yellow face with heart-shaped eyes, expressing love or adoration."
        },
        {
          "id": 6,
          "name": "Thinking Face",
          "image": "🤔",
          "meaning": "A yellow face with furrowed eyebrows looking upwards, often used to indicate thinking or pondering a question."
        },
        {
          "id": 7,
          "name": "Crying Face",
          "image": "😢",
          "meaning": "A yellow face with an open mouth, the top of its head blue, as if physically chilly or affected by a specific emotion. Often used to convey crying or sadness."
        },
        {
          "id": 8,
          "name": "Clapping Hands",
          "image": "👏",
          "meaning": "Two hands clapping emoji, commonly used to represent applause."
        },
        {
          "id": 9,
          "name": "Fire",
          "image": "🔥",
          "meaning": "A flame, mostly yellow with a reddish top, as of a candle or campfire. Often used to convey various metaphorical expressions related to fire, including the slang hot ('attractive') and lit ('excellent')."
        },
        {
          "id": 10,
          "name": "Face Blowing a Kiss",
          "image": "😘",
          "meaning": "A yellow face winking with puckered lips blowing a kiss, depicted as a small, red heart. Often conveys sentiments of love and affection."
        },
        {
            "id": 11,
            "name": "Winking Face",
            "image": "😉",
            "meaning": "A yellow face with a slight smile or smirk and one eye closed in a wink, often used to convey a joke, flirtation, or positive intent."
          },
          {
            "id": 12,
            "name": "Star-Struck",
            "image": "🤩",
            "meaning": "A yellow face with a big grin and stars for eyes, often used to convey excitement or admiration."
          },
          {
            "id": 13,
            "name": "Face with Rolling Eyes",
            "image": "🙄",
            "meaning": "A yellow face with an expressionless mouth and rolling eyes, used to convey disbelief, annoyance, impatience, or disdain."
          },
          {
            "id": 14,
            "name": "Face Screaming in Fear",
            "image": "😱",
            "meaning": "A yellow face with wide, white eyes and a gaping mouth, as if screaming, inspired by Edvard Munch’s iconic painting The Scream."
          },
          {
            "id": 15,
            "name": "Face with Medical Mask",
            "image": "😷",
            "meaning": "A yellow face wearing a white surgical mask, often used to represent sickness or health concerns."
          },
          {
            "id": 16,
            "name": "Thinking Face",
            "image": "🤔",
            "meaning": "A yellow face with furrowed eyebrows looking upwards, often used to indicate thinking or pondering a question."
          },
          {
            "id": 17,
            "name": "Folded Hands",
            "image": "🙏",
            "meaning": "Two hands placed firmly together, used to represent prayer, thanks, or a request for silence."
          },
          {
            "id": 18,
            "name": "Rocket",
            "image": "🚀",
            "meaning": "A rocket being propelled into space, often used to indicate success, launch, or an upward trajectory."
          },
          {
            "id": 19,
            "name": "Party Popper",
            "image": "🎉",
            "meaning": "A party popper, as used for celebrating and party occasions, depicted as a conical popper with colorful confetti bursting out."
          },
          {
            "id": 20,
            "name": "Unicorn",
            "image": "🦄",
            "meaning": "The face of a unicorn, a mythical creature often used to represent fantasy, whimsy, and uniqueness."
          },
          {
            "id": 21,
            "name": "Smiling Face with Sunglasses",
            "image": "😎",
            "meaning": "A yellow face with a broad, closed smile wearing black sunglasses, often used to convey coolness or a sense of fun."
          },
          {
            "id": 22,
            "name": "Face with Tongue",
            "image": "😛",
            "meaning": "A yellow face with closed eyes, a broad, open smile, and its tongue sticking out, often used to convey playfulness."
          },
          {
            "id": 23,
            "name": "Sleeping Face",
            "image": "😴",
            "meaning": "A yellow face with closed eyes, an open mouth, and three, blue 'Zzz' floating over its head, representing sleep."
          },
          {
            "id": 24,
            "name": "Face with Raised Eyebrow",
            "image": "🤨",
            "meaning": "A yellow face with one raised eyebrow, often used to convey skepticism or disapproval."
          },
          {
            "id": 25,
            "name": "Face Vomiting",
            "image": "🤮",
            "meaning": "A yellow face with scrunched, X-shaped eyes spewing bright-green vomit, often used to show disgust."
          },
          {
            "id": 26,
            "name": "Exploding Head",
            "image": "🤯",
            "meaning": "A yellow face with an open mouth, the top of its head exploding like a volcano, often used to convey shock or amazement."
          },
          {
            "id": 27,
            "name": "Partying Face",
            "image": "🥳",
            "meaning": "A yellow face with a party hat, a party blower, and confetti, often used to convey celebration and happiness."
          },
          {
            "id": 28,
            "name": "Face with Medical Mask",
            "image": "😷",
            "meaning": "A yellow face wearing a white surgical mask, often used to represent sickness or health concerns."
          },
          {
            "id": 29,
            "name": "Money-Mouth Face",
            "image": "🤑",
            "meaning": "A yellow face with raised eyebrows, dollar signs for eyes, and an open smile sticking out a red tongue styled after a green, dollar banknote, often used to convey wealth or a desire for money."
          },
          {
            "id": 30,
            "name": "Cowboy Hat Face",
            "image": "🤠",
            "meaning": "A yellow face with a broad, closed smile wearing a wide-brimmed, brown leather cowboy hat, often used to convey exuberance, confidence, or adventure."
          },
          {
            "id": 31,
            "name": "Robot Face",
            "image": "🤖",
            "meaning": "The face of a robot, often used to convey topics related to robotics, technology, or artificial intelligence."
          },
          {
            "id": 32,
            "name": "Ghost",
            "image": "👻",
            "meaning": "A white, cartoon ghost making a silly face. Often used to convey something spooky or playful."
          },
          {
            "id": 33,
            "name": "Alien",
            "image": "👽",
            "meaning": "A friendly, cartoon-styled alien face with large eyes and a slight smile. Often used to convey something extraterrestrial or unusual."
          },
          {
            "id": 34,
            "name": "Panda Face",
            "image": "🐼",
            "meaning": "A friendly, cartoon-styled face of a panda. Often used to convey cuteness or something related to pandas."
          },
          {
            "id": 35,
            "name": "Penguin",
            "image": "🐧",
            "meaning": "A cartoon-styled penguin. Often used to convey cuteness or something related to Antarctica or cold weather."
          },
          {
            "id": 36,
            "name": "Monkey Face",
            "image": "🐵",
            "meaning": "A friendly, cartoon-styled face of a monkey. Often used to convey playfulness or mischief."
          },
          {
            "id": 37,
            "name": "See-No-Evil Monkey",
            "image": "🙈",
            "meaning": "The see-no-evil monkey, one of the three wise monkeys. Often used to convey a sense of embarrassment or avoiding something."
          },
          {
            "id": 38,
            "name": "Hear-No-Evil Monkey",
            "image": "🙉",
            "meaning": "The hear-no-evil monkey, one of the three wise monkeys. Often used to convey a sense of ignoring or avoiding hearing something."
          },
          {
            "id": 39,
            "name": "Speak-No-Evil Monkey",
            "image": "🙊",
            "meaning": "The speak-no-evil monkey, one of the three wise monkeys. Often used to convey a sense of keeping a secret or not speaking."
          },
          {
            "id": 40,
            "name": "Robot",
            "image": "🤖",
            "meaning": "A friendly, cartoon-styled robot face. Often used to convey something related to robotics or technology."
          },
          {
            "id": 41,
            "name": "Pile of Poo",
            "image": "💩",
            "meaning": "A cartoon-styled pile of poo with a friendly smile. Often used to convey humor or something unpleasant."
          },
          {
            "id": 42,
            "name": "Clown Face",
            "image": "🤡",
            "meaning": "A friendly, cartoon-styled face of a clown. Often used to convey something funny or creepy."
          },
          {
            "id": 43,
            "name": "Jack-O-Lantern",
            "image": "🎃",
            "meaning": "A carved pumpkin, often associated with Halloween. Often used to convey something spooky or festive."
          },
          {
            "id": 44,
            "name": "Nerd Face",
            "image": "🤓",
            "meaning": "A yellow face with large, nerdy glasses, a buck-tooth smile, and often used to convey intelligence or geekiness."
          },
          {
            "id": 45,
            "name": "Face with Monocle",
            "image": "🧐",
            "meaning": "A yellow face with a small, serious frown and a single eyeglass or monocle, often used to convey scrutiny or sophistication."
          }
      ]
export default emojis;