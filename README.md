## TIL
오늘 배운 것들을 정리하는 레포지토리:)

## Commit 작성법
<strong>1. 커밋 메시지 구성</strong>
- Type
- Subject
- Body
- Footer

<strong>2. 규칙</strong><br>
<u>Type</u><br>
- feat: 기능 추가/삭제/변경
- fix: 버그 수정
- docs: 문서 추가/삭제/변경
- style: 코드 형식/정렬/주석 등 변경 - 코드 변경 X
- refactor: 코드 리팩토링
- test: 테스트 코드 추가/삭제/변경 - 프로덕션 코드 변경 X
- chore: 빌드 작업, 패키지 관리자 구성등 - 프로덕션 코드 변경 X
- etc: 위에 해당하지 않는 모든 변경

<u>Subject</u><br>
- 영문 기준 50 글자 이내로
- 첫글자는 대문자로
- 제목 끝에 . 금지
- 제목은 명령조로

<u>Body</u><br>
- 제목과 본문 사이에 한줄 비움
- 영문 기준 72자마다 줄 바꿈
- 어떻게 보다는 무엇을/왜 변경했는 지
- optional

<u>Footer</u><br>
- 이슈 트래커 ID 추가
- "유형: #이슈번호"
- 유형
    - Fixes: 이슈 수정중
    - Resolves: 이슈 해결
    - Ref: 참고할 이슈가 있을 때 사용
    - Related to: 해당 커밋에 관련된 이슈번호(아직 해결 x)
- optional

<strong>3. Reference</strong><br>
[좋은 git 커밋 메시지를 작성하기 위한 7가지 약속](https://meetup.toast.com/posts/106)<br>
[Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)<br>
[나만의 커밋 메시지 가이드](https://github.com/kooku94/commit-message-guide)