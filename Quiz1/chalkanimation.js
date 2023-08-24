import chalkAnimation from 'chalk-animation';
const welcome = async () => {
    let title = chalkAnimation.karaoke("Welcome to the Quiz");
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
    title.stop();
};
welcome();
