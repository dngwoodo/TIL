export {}

type Video = {
	id: string;
	title: string;
	url: string;
	data: string;
}

// 필요한 데이터만 뽑아서 사용가능
// Partial은 안에 있는 것중에 쓰고 싶은 것만 사용가능 한거지만 <- 내부적으로 옵셔널 사용
// Pick은 필요한 것들을 딱 골라쓰고 걔들이 들어있어야 한다.
// type Pick<T, K extends keyof T> = {
// 	[P in K]: T[P];
// };
type VideoMetadata = Pick<Video, 'id' | 'title'>;

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