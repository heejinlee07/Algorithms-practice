// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {
  // const arr = str.split("");
  // console.log(arr);
  // arr.reverse();
  // console.log(arr);
  // const res = arr.join("");
  // console.log(res);
  // return res;
  // 위의 코드를 이렇게 체이닝하여 한줄로 표현할 수 있다.
  // return str.split("").reverse().join("");

  //만약 reverse()를 쓰지 않고 구현하라고 한다면?
  // let res = "";
  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //   console.log("[char]", char);
  //   res = char + res;
  //   console.log("[res]", res);
  // }
  // return res;
  // console.log(["res"], res);

  //more advanced solution: using reduce method
  const array = str.split("");
  console.log(array);
  return array.reduce((output, char) => {
    console.log("before output: ", output);
    console.log("before char: ", char);
    output = char + output;
    console.log("after output: ", output);
    return output;
  }, "");

  // return str.split("").reduce((output, char) => {
  //   output = char + output;
  //   return output;
  // }, "");
}

reverse("hello");

/**
 * 'meow'.split('').reverse()
 *  ['w', 'o', 'e', 'm' ]
 * meow'.split('').reverse().join('')
 * 'woem'
 */

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
