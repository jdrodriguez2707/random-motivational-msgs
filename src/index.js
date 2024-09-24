#!/usr/bin/env node

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m", // Scarlet
  },
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m",
  },
};

const messages = [
  `${colors.fg.green}${colors.reverse}Your only competitor is the one you see in the mirror${colors.reset}`,
  `${colors.fg.red}${colors.reverse}You got to lose to know how to win${colors.reset}`,
  `${colors.fg.blue}${colors.reverse}Code like a boss${colors.reset}`,
  `${colors.fg.magenta}${colors.reverse}Embrace the bugs, they make you stronger${colors.reset}`,
  `${colors.fg.cyan}${colors.reverse}Keep calm and code on${colors.reset}`,
  `${colors.fg.yellow}${colors.reverse}Success is not final, failure is not fatal: It is the courage to continue that counts${colors.reset}`,
  `${colors.fg.white}${colors.reverse}The best error message is the one that never shows up${colors.reset}`,
  `${colors.fg.red}${colors.reverse}Stay curious, keep learning${colors.reset}`,
  `${colors.fg.blue}${colors.reverse}Don't be afraid to refactor${colors.reset}`,
  `${colors.fg.magenta}${colors.reverse}The only way to do great work is to love what you do${colors.reset}`,
  `${colors.fg.cyan}${colors.reverse}Think twice, code once${colors.reset}`,
  `${colors.fg.yellow}${colors.reverse}The biggest room in the world is the room for improvement${colors.reset}`,
  `${colors.fg.green}${colors.reverse}Believe you can and you're halfway there${colors.reset}`,
  `${colors.fg.red}${colors.reverse}Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful${colors.reset}`,
  `${colors.fg.blue}${colors.reverse}Hardships often prepare ordinary people for an extraordinary destiny${colors.reset}`,
  `${colors.fg.crimson}${colors.reverse}Your limitation it's only your imagination${colors.reset}`,
  `${colors.fg.white}${colors.reverse}The harder you work for something, the greater you'll feel when you achieve it${colors.reset}`,
  `${colors.fg.yellow}${colors.reverse}Success is not in what you have, but who you are${colors.reset}`,
  `${colors.fg.green}${colors.reverse}Your time is limited, don't waste it living someone else's life${colors.reset}`,
  `${colors.fg.red}${colors.reverse}Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle${colors.reset}`,
  `${colors.fg.blue}${colors.reverse}Success is not the absence of failure; it's the persistence through failure${colors.reset}`,
  `${colors.fg.magenta}${colors.reverse}Your future is created by what you do today, not tomorrow${colors.reset}`,
  `${colors.fg.cyan}${colors.reverse}Success is not just about making money. It's about making a difference${colors.reset}`,
  `${colors.fg.crimson}${colors.reverse}Every day is a new beginning. Take a deep breath, smile, and start again${colors.reset}`,
];

export function motivationalMessage() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}
