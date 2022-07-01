function solution(new_id) {
  var answer = new_id;

  answer = answer.toLowerCase(); // 1

  answer = answer.replace(/[^a-z0-9._-]/g, ""); // 2;

  answer = answer.replace(/\.{2,}/g, "."); //3

  answer = answer.replace(/^\.|\.$/g, ""); // 4

  if (answer === "") {
    answer += "a";
  } // 5

  if (answer.length >= 16) {
    answer = answer.slice(0, 15).replace(/\.$/g, "");
  } // 6

  if (answer.length <= 2) {
    const last = answer.substr(-1);
    while (answer.length <= 2) {
      answer += last;
    }
  } // 7

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
