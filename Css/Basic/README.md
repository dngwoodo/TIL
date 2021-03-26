#### CSS 정의
- Cascading Style Sheets의 약자
- Cascading: 폭포처럼, 계속되는, 연속적인
- 우선순위가 있는 stylesheet
- CSS의 스타일 속성은 DOM 문서 트리에서 상위 엘리먼트에 있는 스타일 속성이 하위 엘리먼트로 흘러내려서 상속되어 적용
- HTML 요소들이 각종 웹사이트에서 어떻게 보일지를 정의하는데 사용하는 stylesheet
- W3C 표준
- XML에서도 사용가능
- inline style, internal style, external style이 존재
- 우선순위: inline style > internal style = external style > 웹 브라우저 기본 스타일

#### CSS 사용법
```css
/*
  p: selector
  {}: block
  "color: red": property
  color: property
  red: property-value
*/
p {
  color: red;
}
```
```css
/* selector 종류 */
/* 1. 전체 선택자 (Universal)
*/
* {}

/* 2. 태그 선택자(Type) */
p {}

/* 3. 클래스 선택자 */
.class {}

/* 4. ID 선택자 */
#id {}
```
```css
/* 5. 복합 선택자(하위, 자식, 인접 형제 선택자) 
  Combinator
*/
section ui {} /* 하위 선택자: 부모 요소에 포함된 모든 하위 요소 */
section>ui {} /* 자식 선택자: 부모 요소에 바로 아래 요소 하나 */
h1+ul {} /* 인접 형제 선택자: +는 자기 바로 뒤 요소하나 */
h1~ul {} /* 인접 형제 선택자: ~는 자기 뒤의 요소들(중간에 다른 애가 있어도 상관없음) */
```

```css
/* 6. 속성 선택자(Attribute) */
a[href]{}
input[type="text"]{}
a[href$=".xls"]{} /* 속성값이 .xls로 끝나는 아이, <a href="one.xls">atag</a> */
a[href^="http"]{} /* 속성값이 http로 시작하는 아이*/
a[href*="http"]{} /* 속성값 http를 가지고 있는 아이*/
a[href|="http"]{} /* 속성값이 http이거나 http로 시작하는 아이*/
```

```css
/* 7. 가상 클래스 선택자(링크, 동적 선택자, 구조적 가상 클래스 선택자) 
  Pseudo-Classes(수도 클래스)
*/

/* 링크, 동적 선택자 */
a:link {} /* 방문하지 않은 a태그를 선택 */
a:visited {} /* 방문한 a태그를 선택*/
a:hover {} /* 마우스가 올라가 있는 동안 a 선택 */ 
a:active {} /* 클릭동안 a태그를 선택*/ 
a:focus {} /* 포커스가 머물러 있는 동안 a 선택*/
/* https://codesandbox.io/s/frosty-sid-yydvh?file=/index.html */

/* 구조적 가상 클래스 선택자 */
:root {}
.child:nth-child(1) {}
.child:nth-last-child(1) {} /* 뒤부터 셈 */
.child:first-child {}
.child:last-child {}
.child:empty {} /* 텍스트 및 공백을 포함하여 자식 요소가 없는 요소 선택*/
```
```css
/* 8. 그외(목적, UI요소 상태, 가상 엘리먼트 선택자) */

/* target pseudo-class(목적 선택자) */
a:target {} /* child의 URI가 요청되면 선택, ID값 필요 */
/* https://codesandbox.io/s/nostalgic-oskar-1piv0?file=/index.html:0-446 */

/* UI element states pseudo-classes(UI요소 상태 선택자) */
input:enabled {} /* 사용 가능한 요소 */
input:disabled {} /* 사용 불가능한 요소 */
input:checked {} /* 체크되어진 요소*/

/* pseudo elements(가상 엘리먼트 선택자) */
a:first-line {}
a:first-letter {}
a:before {}
a:after {}
/* https://codesandbox.io/s/interesting-platform-84loc?file=/index.html */
```

#### display
- block(무언가를 담을 때 사용)
  - 한줄을 가득 쓴다. 안쓰는 곳은 마진으로 채움
  - height는 요소안의 내용만큼 차지
  
- inline(텍스트처럼 동작)
  - inline은 해당 마크업하고 있는 컨텐츠 크기 만큼만 공간을 차지함.(width, height 무시)
  - margin, padding 좌우 간격은 반영 되지만, 상하 간격은 반영되지 않음
  - 위아래 padding은 시각적으로 보이긴하지만 공간을 차지하진 않는다.(그래서 백그라운드 컬러가 있을 시 겹쳐보일 수 있다.)

- inline-block(무언가를 담을때 사용)
  - inline + block
  - inline과 배치는 똑같음(즉, 텍스트 형식으로 나열됨)
  - width, height 적용 가능
  - margin, padding 상하좌우 전부 적용가능
  - img 태그는 inline으로 되어있지만 기본적으로 inline-block 처럼 동작함(닫는 태그가 없는 특수태그)

- 공간 없애는 법 
  - inline 혹은 inline-block끼리 만나게 되면 html정렬을 위해 들여쓰기를 하는 바람에 사이에 공간이 생기게 된다. 그것을 없애주는 방법은 아래와 같다
    ```html
    <!-- 공백도 텍스트이기 때문에 font-size를 없애주면 된다. -->
    <div style="font-size:0;">
      <!-- 자식들은 font-size를 다시 회복시켜주자 -->
      <span style="font-size: 1rem">123</span>
      <span style="font-size: 1rem">123</span>
    </div>
    ``` 
#### vertical-align, line-height
- vertical-align
  - inline, inline-block에서만 사용가능
  - line-height와 매우 밀접한 관계에 있다
  - [예제](https://codesandbox.io/s/thirsty-framework-bwc76?file=/index.html)
  - [예제2](https://codesandbox.io/s/vertical-align-example2-yygxp?file=/index.html&resolutionWidth=320&resolutionHeight=675)
    <div>
      <img width="400" height="200" alt="스크린샷 2021-03-26 오전 11 40 28" src="https://user-images.githubusercontent.com/77663233/112569735-1198e180-8e28-11eb-9f6d-db7f5c76c322.png">
    </div>


- line-height
  - number: font-size * number을 의미
  - half-leading: line-height크기에 따라 가지게 되는 여백
  - font 자체가 가지는 여백: 이 아이는 css로 건들일 수 없다. 그래서 없앤 효과를 내고 싶다면 line-height를 1보다 아래로 잡아보자
    <div>
      <img width="400" height="200" alt="스크린샷 2021-03-26 오전 11 24 52" src="https://user-images.githubusercontent.com/77663233/112571173-dea41d00-8e2a-11eb-9848-9a0044339299.png">
    </div>

- 텍스트가 없을 경우의 inline, inline-block 요소
  - [예제](https://codesandbox.io/s/trusting-firefly-23xii?file=/index.html)
  - 예제를 보기전 알아둬야 될 것: decender이다. 영어권에서 기준선 밑으로 내려가는 글자들을 위해 약간의 공간을 baseline 밑에 만듬
    <div>
      <img width="400" height="200" alt="스크린샷 2021-03-26 오전 11 58 52" src="https://user-images.githubusercontent.com/77663233/112571086-a56bad00-8e2a-11eb-827b-436916709d1a.png">
    </div>


#### box model
#### position
#### 우선순위
#### z-index
#### line-height
#### flex
#### grid

#### Resource
[zerocho](https://www.zerocho.com/category/CSS/post/5825b14baff5c7001827997b)</br>
[CSS:선택자(Selector)이해](https://www.nextree.co.kr/p8468/)</br>
[image요소 하단의 알 수 없는 갭 현상](https://velog.io/@ursr0706/image%EC%9A%94%EC%86%8C-%ED%95%98%EB%8B%A8%EC%9D%98-%EC%95%8C-%EC%88%98-%EC%97%86%EB%8A%94-%EA%B0%AD-%ED%98%84%EC%83%81)</br>
[vertical-align 속성과 Inline-block레벨 요소의 baseline](https://velog.io/@ursr0706/vertical-align)</br>