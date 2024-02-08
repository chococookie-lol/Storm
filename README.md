# Storm

## 개발 환경 세팅 방법

이 프로젝트는 `pnpm`을 사용한 모노레포입니다.

```sh
git clone https://github.com/chococookie-lol/Storm.git && cd Storm

# pnpm install을 진행하면 husky도 같이 설치됩니다.
pnpm install
```

프로젝트 구조는 아래와 같습니다.

```
.
├── apps
│   ├── baram-backend
│   └── baram-frontend
└── packages
    └── shared
```

`apps` 디렉토리엔 배포될 어플리케이션들이 존재하며 `packages`에는 개발에 필요한 공통 패키지가 위치합니다.

루트 디렉토리에서 스크립트를 실행하면 모든 `apps`에 대해 스크립트가 실행됩니다.

### 개발 모드로 실행

```sh
pnpm run dev
```

### 빌드 후 실행

```sh
pnpm run build && pnpm run start
```

## Conventions

개발할 때의 컨벤션은 아래 위키에 정리되어있습니다.

[Convention - Storm Wiki](https://github.com/chococookie-lol/Storm/wiki/Conventions)
