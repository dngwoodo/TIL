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
#### position
#### 우선순위
#### z-index
#### line-height
#### flex
#### grid

#### Resource
[zerocho](https://www.zerocho.com/category/CSS/post/5825b14baff5c7001827997b)</br>
[CSS:선택자(Selector)이해](https://www.nextree.co.kr/p8468/)</br>
