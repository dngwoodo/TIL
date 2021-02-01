export {}

class NetworkClient {
    tryConnect(): void {
        throw new Error('no network');
    }
}

class UserService {
    // composition(필요한것을 외부에서 받아오는 것) - dependency injection
    // 상속은 부모클래스가 바뀌면 자식 클래스도 다 바껴야 된다. 하지만 composition을 사용하면 그럴필요 없음.
    constructor(private client: NetworkClient) {}
    
    login() {
            this.client.tryConnect();
            // login...    
    }
}

const client = new NetworkClient();
const service = new UserService(client);
service.login(); // catched!

class App {
    constructor(private userService: UserService) {}
    run() {
        try {
            this.userService.login();    
        } catch (error) {
            // show dialog to user
        }
        
    }
}

const app = new App(service);
app.run(); // catched!

// 정리
// 생각해야 되는 것은 내가 에러처리를 해주는 곳에서 의미있는 에러 처리를 할 수 있을지 생각해야 한다.
// 기본적으로 UserService.login에서 try catch를 해줘야 될 것 같지만 저기서 에러처리를 해봤자 
// 사용자에게 보여줄수있는 부분도 없고 무언가 반환해줄 값도 딱히 없기 때문에 안해주는게 더 낫다.
// 그러므로 실제 어플리케이션단인 App 클래스에서 try catch를 이용하여 에러가 났을 경우 사용자에게 dialog를 보여주는 것이 낫다.