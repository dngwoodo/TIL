## TIL 🔥

오늘 배운 것들을 정리하는 레포지토리:)

## TIL 기준 ✍🏻

1. 최대한 코드로 정리
2. Quick Start와 같은 프로젝트는 O
3. 큰 사이드 프로젝트는 X
4. 컴포넌트화 시키고 싶은 코드 정리 O
5. 강의용 커밋들은 Commit 작성법을 따르지 않음
6. 강의 복습용 커밋들은 `.../review:`, `직접 작성`, `비교` 를 사용하여 작성

## Commit 작성법 ✨

<strong>1. 커밋 메시지 구성</strong>

- Type
- Subject
- Body
- Footer

<strong>2. 규칙</strong><br>

- Type

  - feat: 기능 추가/삭제/변경
  - fix: 버그 수정
  - docs: 문서 추가/삭제/변경
  - style: 코드 형식/정렬/주석 등 변경(ex)code formatter 동작 시) - 코드 변경 X
  - refactor: 코드 리팩토링
  - test: 테스트 코드 추가/삭제/변경 - 프로덕션 코드 변경 X
  - chore: 빌드 작업, 패키지 관리자 구성등 - 프로덕션 코드 변경 X
  - env: 환경 셋팅 시 사용(gitignore 셋팅, UI component 셋팅, 테스트 환경 셋팅 등)
  - etc: 위에 해당하지 않는 모든 변경

- Subject

  - 영문 기준 50 글자 이내로
  - 첫글자는 대문자로
  - 제목 끝에 . 금지
  - 제목은 명령조로
  - 명령조 규칙(많이 사용되는 것만 정리)
    - Add: 코드나 테스트, 예제, 문서 등의 추가가 있을 경우
      - Add A: A를 추가
      - Add A for B: B를 위해 A를 추가
      - Add A to B: B에 A를 추가

    - Make: 기존 동작의 변경을 명시
      - Make A B: A를 B하게 만듬

    - Change: 올바로 동작하지만 변경하고 싶을 경우(UI 수정 등)
      - Change A: A를 변경
      - Change A to B: A를 B로 변경

    - Fix: 올바르지 않은 동작을 고친 경우
      - Fix A: A를 고침
      - Fix A in B: B안에 A를 고침
      - Fix A when B: B상황일 때 A를 고침

    - Remove: 코드 삭제 시
      - Remove A: A를 삭제
      - Remove A from B: B에서 A를 삭제

    - Refactor: 리팩토링 시
      - Refactor A: A를 리팩토링

    - Correct: 주로 문법의 오류나 타입의 변경, 이름 변경 등에 사용
      - Correct A: A를 고침

    - Move: 코드 이동 시
      - Move A to B: A를 B로 옮김

    - Update : 코드보다는 주로 문서나 리소스, 라이브러리등에 사용. (lib 업그레이드, docs 수정등)
      - Update A to B: A를 B로 업데이트

- Body

  - 제목과 본문 사이에 한줄 비움
  - 영문 기준 72자마다 줄 바꿈
  - 어떻게 보다는 무엇을/왜 변경했는 지
  - optional

- Footer
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
[좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)
