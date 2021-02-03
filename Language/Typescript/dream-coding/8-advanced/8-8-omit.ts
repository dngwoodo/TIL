export {}

type Video = {
	id: string;
	title: string;
	url: string;
	data: string;
}

// Pick과는 반대로 정의해준 아이들을 제외하고 사용한다.
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>; 
// K extends keyof any <- 는 'url' | 'data' | 'h' 와 같이 어느 키값이나 사용가능하다.
// type Exclude<T, U> = T extends U ? never : T;
// type Pick<T, K extends keyof T> = {
// 	[P in K]: T[P];
// };

type VideoMetadata = Omit<Video, 'url' | 'data'>;
type a = Exclude<'url' | 'id' | 'title' | 'data', 'url'> // 유니온 타입들을 하나씩 돌면서 never인지 그냥 반환해줄지(T) 결정한다.

// 모든 데이터 반환
function getVideo(id: string): Video {
	return {
		id,
		title: 'video',
		url: 'https://..',
		data: 'byte-data..'
  }
}

// 필요한 메타데이터만 반환
function getVideoMetadata(id: string): VideoMetadata {
	return {
		id,
		title: 'video',
	}
}