const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// helper function
const removeNonAlphanumeric = (inputString) => {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
};
// helper function
const isPalindrome = (input) => {
    let alnum = removeNonAlphanumeric(input);
    if (alnum.length === 1) {
        return `${input} is a palindrome`;
    }
    else {
        alnum = alnum.toLowerCase();
        let a = 0;
        let b = alnum.length - 1;
        while (a < b) {
            if (alnum[a] !== alnum[b]) {
                return `${input} is not a palindrome`;
            }
            a++; b--;
        }
        return `${input} is a palindrome`;
    }
}
// event handler
const respond = () => {
    if (input.value === "") {
        alert("Please input a value");
    }
    else {
        const res = isPalindrome(input.value);
        result.innerText = res;
    }
}
checkBtn.addEventListener("click", respond);