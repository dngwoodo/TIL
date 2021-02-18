// FormData는 언제 쓰이는가?
// 페이지 전환 없이 form data를 서버로 보내고 싶을 때 사용한다. e.preventDefault()를 사용한다.
// video, image등을 보낼 때 사용한다. json 같은 경우는 그냥 json으로 보내면 되기 때문.

const formData = new FormData();
formData.append("name", "dongwoo"); // key, value로 넣는다.
formData.append("item", "orange");
formData.append("item", "melon");
console.log(formData.has("name")); // true
console.log(formData.has("item")); // true
console.log(formData.get("item")); // orange
console.log(formData.getAll("item")); // ["orange", "melon"]

const keys = formData.keys();
console.log(keys); // Iterator {}
console.log(keys.next()); // {done: false, vlaue: "name"}
console.log(keys.next()); // {done: false, vlaue: "name"}
console.log(keys.next()); // {done: false, vlaue: "name"}
console.log(keys.next()); // {done: true, vlaue: undefined}

const values = formData.values();
console.log(values.next()); // { done: false, value: "dongwoo" }
console.log(values.next()); // { done: false, value: "orange" }
console.log(values.next()); // { done: false, value: "melon" }
console.log(values.next()); // { done: true, value: undefined }

const entries = formData.entries();
console.log(entries.next()); // { done: false, value: ["name", "dongwoo"] }
console.log(entries.next()); // { done: false, value: ["item", "orange"] }
console.log(entries.next()); // { done: false, value: ["item", "melon"] }
console.log(entries.next()); // { done: true, value: undefined }

// crud
formData.append("test", ["hi", "dongwoo"]); // create
console.log(formData.get("test")); // hi, dongwoo

formData.set("test", ["hi", "yugesh"]); // update, set은 test가 몇개가 있던 하나로 덮어씌워버린다.
console.log(formData.get("test")); // hi, yugesh

formData.delete("test"); // delete
console.log(formData.get("test")); // null

// 이미지나 비디오 넣는 법
// formData.append("image", e.target.files[0]);
