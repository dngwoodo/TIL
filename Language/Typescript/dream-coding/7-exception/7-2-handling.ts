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

// const client = new NetworkClient();
// const service = new UserService(client);
// service.login(); // throw new Error('no network');

class App {
    constructor(private userService: UserService) {}
    run() {
        this.userService.login();
    }
}

const app = new App(service);
app.run(); // // throw new Error('no network');