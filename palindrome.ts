// get from parameter input
let input: string = process.argv[2].toString();

const palindrome = (word: string) => {

    const arr = word.toLowerCase().split('');
    const reverseArr = [...arr].reverse();

    console.log("normal: " + arr.toString());
    console.log("reverse: " + reverseArr.toString());

    if (arr.toString() === reverseArr.toString()) {
        console.log("palindrome: " + true);
    } else {
        console.log("palindrome: " + false);
    }

}

palindrome(input);