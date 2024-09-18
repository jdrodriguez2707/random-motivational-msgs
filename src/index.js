const messages = [
  "Your only competitor is the one you see in the mirror",
  "You got to lose to know how to win",
  "Code like a boss",
  "Embrace the bugs, they make you stronger",
  "Keep calm and code on",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "The best error message is the one that never shows up",
  "Stay curious, keep learning",
  "Don't be afraid to refactor",
  "The only way to do great work is to love what you do",
  "Think twice, code once",
  "The biggest room in the world is the room for improvement",
  "Believe you can and you're halfway there",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",
  "Hardships often prepare ordinary people for an extraordinary destiny",
  "Your limitation it's only your imagination",
  "The harder you work for something, the greater you'll feel when you achieve it",
  "Success is not in what you have, but who you are",
  "Your time is limited, don't waste it living someone else's life",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle",
  "Success is not the absence of failure; it's the persistence through failure",
  "Your future is created by what you do today, not tomorrow",
  "Success is not just about making money. It's about making a difference",
  "Every day is a new beginning. Take a deep breath, smile, and start again",
];

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
    crimson: "\x1b[38m" // Scarlet
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
    crimson: "\x1b[48m"
  }
};

const motivationalMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`${colors.fg.green}${colors.blink}${message}${colors.reset}`);
};

module.exports = {
  motivationalMessage,
};
