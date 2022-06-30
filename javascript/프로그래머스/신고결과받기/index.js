function solution(id_list, report, k) {
  report = [...new Set(report)]; //중복 제거

  const user = {};

  id_list.forEach((id) => {
    user[id] = [0, []];
  }); // id: [신고 당한 횟수,[신고한 id 리스트]]

  report.forEach((data) => {
    const [id, reportedId] = data.split(" "); //  [신고한 사람, 신고당한 사람]
    user[id][1].push(reportedId); //신고한 사람 추가
    user[reportedId][0]++; //신고당한 횟수 세기
  });

  const banned = id_list.filter((id) => user[id][0] >= k); //정지당한 사람 ex) ["a","b"]

  const mailList = id_list.map((id) => {
    return user[id][1].filter((reportedId) => banned.includes(reportedId))
      .length;
  }); // 메일 받은 횟수

  var answer = [...mailList];
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
