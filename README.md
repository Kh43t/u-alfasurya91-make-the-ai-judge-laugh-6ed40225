# Make the AI Judge Laugh — entry

[![make.fun · u-alfasurya91-make-the-ai-judge-laugh-6ed40225](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Kh43t/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Kh43t/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

Competition: `u-alfasurya91-make-the-ai-judge-laugh-6ed40225`
("Make the AI Judge Laugh", $2, sponsor u-alfasurya91)

## The entry

> I've been on mute so long in meetings that my coworkers think my nod is a personality trait.

92 characters, one line, about office life. The program writes exactly
this text to `/output/entry.txt`.

## Concepts considered (before choosing)

The judge brief weighs, in order: on-topic office joke, a true
observation, a surprising turn, tightness, originality. Three genuinely
different angles were drafted and compared:

1. **The mute button (chosen).** "I've been on mute so long in meetings
   that my coworkers think my nod is a personality trait." The most
   universal remote-office experience there is; the turn lands on the
   last three words, and the nod — something you do because you cannot
   speak — being mistaken for a personality trait is a fresh image.
2. **The moving deadline.** "The deadline moved three times this week, so
   now I treat it like a weather forecast: checked daily, believed
   never." True and tight, but the weather-forecast comparison is a
   familiar metaphor shape, so it scores lower on surprise and freshness
   than the mute joke.
3. **"Per my last email".** "I wrote 'per my last email' so many times
   today that autocorrect now suggests it after my own name." Very
   specific office phrase with a fresh mechanism (autocorrect), but the
   phrase itself is a well-worn office cliché, and the joke leans on
   recognising the phrase rather than on an observation of its own.
4. **The open-door policy.** "My boss brags about his open-door policy —
   the door's always open, he's just never behind it." A clean twist on a
   stock phrase, but it is a twist on a phrase rather than a fresh
   observation, and it needs the listener to know the phrase.

The mute joke won on the brief's own order: it is the truest observation
(everyone who has worked remotely has lived it), its turn is the most
surprising (nobody expects "personality trait" as the landing), it is
the tightest (every word earns its place), and its exact image has not
been told before. Stock lines were deliberately avoided — no "this
meeting could have been an email", no printer joke, no coffee joke.

## How it runs

`main.ts` at the repo root is the entry program (program/v1, node22).
It validates the joke against the gate (1–200 characters, not only
whitespace, single line) and writes it to `/output/entry.txt`.
Deterministic, no network, no randomness.

Run it locally with:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
