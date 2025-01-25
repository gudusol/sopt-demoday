export interface ProductType {
  overview: string;
  logoImage: string;
  productName: string;
  type: string;
  category: string;
  description: string;
  makers: {
    plan: string[];
    design: string[];
    android: string[];
    ios: string[];
    web: string[];
    server: string[];
  };
  detail: string;
}

export const products = {
  confeti: {
    overview: "/data/overview/confeti.png",
    logoImage: "/data/logo/confeti.png",
    productName: "confeti",
    type: "web",
    category: "라이프스타일",
    description:
      "‘밴드 붐’이 왔다 !\n밴드를 사랑하는 사람들에 의한,\n밴드를 사랑하는 사람들을 위한 서비스 confeti 입니다.\n원하는 아티스트를 등록해서 공연 정보를 확인하고, 나만의 타임테이블을 만들 수 있어요.\n공연의 설렘부터 감동까지, confeti와 함께 만들어가요!",
    makers: {
      plan: ["김가연", "정민"],
      design: ["이채원", "신수진"],
      web: ["곽지욱", "강민하", "김채은", "김다현", "김한서"],
      server: ["오치현", "박상아"],
      android: [],
      ios: [],
    },
    detail: "/data/detail/confeti.png",
  },
  daruda: {
    overview: "/data/overview/daruda.png",
    logoImage: "/data/logo/daruda.png",
    productName: "daruda",
    type: "web",
    category: "생산성",
    description:
      "공부, 과제, 팀플, 동아리, 대외활동의 대학생활을 하면서 사용해야 할 툴을 찾아 헤매신 적이 있나요?\n여러 툴 정보를 찾으러 다닐 필요 없이, 다루다에서 클릭 한 번에 다양한 정보를 확인하고 내게 꼭 맞는 툴을 찾아보세요. 궁금한 점이 생기면 다루다 커뮤니티에서 자유롭게 이야기 나누고 해결해 보세요.",
    makers: {
      plan: ["김용기", "김소영"],
      design: ["이은제", "이재영"],
      web: ["김고은", "김채현", "노찬영", "최 민"],
      server: ["박지원", "곽재민"],
      android: [],
      ios: [],
    },
    detail: "/data/detail/daruda.png",
  },
  cocos: {
    overview: "/data/overview/cocos.png",
    logoImage: "/data/logo/cocos.png",
    productName: "코코스",
    type: "web",
    category: "라이프스타일",
    description:
      "반려인들의 간절한 마음이 모이는 치유의 공간\n코코스는 아픈 반려동물에게 딱 맞는 증상 정보를 나누고, 좋은 동물병원의 기준을 다시 정의합니다.",
    makers: {
      plan: ["김자은", "송효재"],
      design: ["나예은", "유경", "노하은"],
      web: ["김민정", "공준혁", "이윤지", "이예림"],
      server: ["김의진", "서연진"],
      android: [],
      ios: [],
    },
    detail: "/data/detail/cocos.png",
  },
  whipee: {
    overview: "/data/overview/whipee.png",
    logoImage: "/data/logo/whipee.png",
    productName: "휘피",
    type: "web",
    category: "라이프스타일",
    description:
      "🎂 휘피, 원하는 주문제작 케이크를 쉽고 빠르게! 🎂\n주문제작 케이크를 찾는 고객은 많지만, 정보를 비교하고 선택하는 과정은 여전히 복잡합니다.\n소비자가 마주하고 있는 ‘귀찮고 번거로움'이라는 문제를 해결한 서비스, 휘피에서는 지도 뷰📍, 카테고리🔍, 인기순💛으로 케이크를 한 눈에 비교하고 탐색할 수 있어요.",
    makers: {
      plan: ["노민지", "최윤서"],
      design: ["방서희", "강다연", "박서영"],
      web: ["유서연", "임화랑", "손지유", "박채연"],
      server: ["곽성준", "이예린"],
      android: [],
      ios: [],
    },
    detail: "/data/detail/whipee.png",
  },
  jeolloga: {
    overview: "/data/overview/jeolloga.png",
    logoImage: "/data/logo/jeolloga.png",
    productName: "절로가",
    type: "web",
    category: "라이프스타일",
    description:
      "당신의 평범한 하루에 특별한 힐링을 더해보세요.\n\n‘절로가’는 템플스테이를 시작하고 싶지만,\n복잡한 탐색에 어려움을 느끼는 분들을 위한 서비스입니다.\n\n개인의 취향과 목적에 맞는 템플스테이를 쉽고 빠르게 발견할 수 있도록 안내합니다.",
    makers: {
      plan: ["조아영", "마소영", "김민정"],
      design: ["이승현", "우유민", "정가윤"],
      web: ["김가현", "문성희", "배영경", "김태욱"],
      server: ["양다진", "변호영"],
      android: [],
      ios: [],
    },
    detail: "/data/detail/jeolloga.png",
  },
  dash: {
    overview: "/data/overview/dash.png",
    logoImage: "/data/logo/dash.png",
    productName: "Dash",
    type: "web",
    category: "라이프스타일",
    description:
      "당신에게 춤을 더 가까이, 꿈꾸던 댄스 클래스를 만나다.\n\nDash는 핵심 키워드인 Dance와 Share를 결합한 이름으로 댄스클래스와 강사댄서에 대한 정보를 자유롭게 탐색하고 클래스를 신청할 수 있는 서비스이다. 이는 수강생과 강사를 연결하는 다리 역할을 하는 동시에 세상의 모든 댄서들이 함께 소통하고 성장할 수 있는 공간을 제공한다.",
    makers: {
      plan: ["주은혜", "임서연"],
      design: ["이유지", "박시은", "장세희"],
      web: ["김건휘", "이진혁", "한수정", "박희선", "김규홍"],
      server: ["박재연", "윤주호"],
      android: [],
      ios: [],
    },
    detail: "/data/detail/dash.png",
  },
  gongbaek: {
    overview: "/data/overview/gongbaek.png",
    logoImage: "/data/logo/gongbaek.png",
    productName: "공백",
    type: "mobile",
    category: "소셜 네트워킹",
    description:
      "공강을 백으로 채우다.\n공백은 대학생들의 공강 시간을 단순히 흘러가는 시간이 아닌, 새로운 만남과 경험으로 채워주는 모임 플랫폼입니다. 공강 시간표를 기반으로 같은 학교 친구들과 의미 있는 활동을 함께해보세요.",
    makers: {
      plan: ["임현민", "이도형"],
      design: ["박유진", "임수빈"],
      android: ["송민서", "김대현", "손민재"],
      ios: ["김나연", "김민서", "김희은"],
      server: ["김효준", "이현진"],
      web: [],
    },
    detail: "/data/detail/gongbaek.png",
  },
  roomie: {
    overview: "/data/overview/roomie.png",
    logoImage: "/data/logo/roomie.png",
    productName: "Roomie",
    type: "mobile",
    category: "라이프스타일",
    description:
      "한 집에서 시작하는 새로운 연결고리, 루미입니다. 루미는 룸메이트들의 생활패턴과 성격을 보여줌으로써 잘 안 맞는 룸메이트를 만나지 않게 해주는 쉐어하우스 중개 플랫폼입니다. ",
    makers: {
      plan: ["권민성"],
      design: ["신수민", "김혜인"],
      android: ["김수현", "강예인", "송혜음"],
      ios: ["김수연", "김승원", "김현수"],
      server: ["조동현", "김나연"],
      web: [],
    },
    detail: "/data/detail/roomie.png",
  },
  acon: {
    overview: "/data/overview/acon.png",
    logoImage: "/data/logo/acon.png",
    productName: "acon",
    type: "mobile",
    category: "라이프스타일",
    description:
      "No more research, acon\n\nacon은 리서치과정이 없는 지도앱으로, 장소탐색 시 발생하는 시간을 제거하는 서비스입니다. acon에서 지금 당장 접근가능한 맛집을 추천받고 움직여보세요.",
    makers: {
      plan: ["김시은", "박지현"],
      design: ["방세빈", "황선혜", "장민정"],
      android: ["김성민", "양지원", "이상일", "공세영"],
      ios: ["이수민", "김유림", "안재현"],
      server: ["김창균", "박가현"],
      web: [],
    },
    detail: "/data/detail/acon.png",
  },
  bbangjeom: {
    overview: "/data/overview/bbangjeom.png",
    logoImage: "/data/logo/bbangjeom.png",
    productName: "제 과제 빵점",
    type: "mobile",
    category: "생산성",
    description:
      "제 과제 빵점 사장님은 이번 학기 백점 🍞\n\n‘저희 학교에 제과제빵학과는 없는데, 왜 제 과제는 빵점일까요?’ 시험 직전, 미리 미리 공부하지 않은 지난 날을 후회하는 대학생들. 밈을 활용해 고통스러운 시험기간을 재치있게 승화시키는 모습에서 영감을 얻은 미룬이 대학생을 위한 스터디 플래너 ‘제 과제 빵점'입니다.",
    makers: {
      plan: ["서유나", "권진영"],
      design: ["강신형", "신우연", "황민규"],
      android: ["이승범", "김재민", "하지은", "이준희"],
      ios: ["송여경", "조성민", "김송희", "최유빈"],
      server: ["조영주", "김예은"],
      web: [],
    },
    detail: "/data/detail/bbangjeom.png",
  },
  spoony: {
    overview: "/data/overview/spoony.png",
    logoImage: "/data/logo/spoony.png",
    productName: "Spoony",
    type: "mobile",
    category: "라이프스타일",
    description:
      "Spoony는 신뢰도 높은 리뷰와 사용자 영향력을 기반으로 맛집을 탐색하고 공유하는 서비스입니다. 맛집을 등록해 수저를 획득하고, 팔로우 및 지역 랭킹을 통해 신뢰할 수 있는 찐 리스트를 떠먹으며 나만의 찐 맛집 지도를 완성해보세요!",
    makers: {
      plan: ["양수정", "안수빈"],
      design: ["김세은", "정다은", "배가희"],
      android: ["안세홍", "한민재", "박효빈", "박동민"],
      ios: ["이지훈", "최안용", "최주리", "이명진"],
      server: ["전윤혁", "이수민"],
      web: [],
    },
    detail: "/data/detail/spoony.png",
  },
  memento: {
    overview: "/data/overview/memento.png",
    logoImage: "/data/logo/memento.png",
    productName: "Memento",
    type: "mobile",
    category: "생산성",
    description:
      "메멘토는 사용자의 행동과 상황을 반영해 우선순위가 높은 일부터 처리할 수 있도록 만들어주는 투두리스트입니다. 기존의 일정과 투두리스트를 합쳐 하나의 타임라인으로 보여주고 AI가 하루의 태스크를 정렬해주어 가장 최적화 된 하루를 만들어줍니다.",
    makers: {
      plan: ["이민규", "김도연"],
      design: ["안서연", "강민서"],
      android: ["조휘원", "김태정", "주효은"],
      ios: ["김가현", "정정욱", "이세민", "심범수", "박익범"],
      server: ["신민규", "박채현", "김사랑", "최윤한"],
      web: [],
    },
    detail: "/data/detail/memento.png",
  },
  suhyun: {
    overview: "/data/overview/suhyun.png",
    logoImage: "/data/logo/suhyun.png",
    productName: "수현이랑",
    type: "mobile",
    category: "소셜 네트워킹",
    description: `완벽하게 엄빠 몰래 가는 여행, 수현이랑 ‘수현이 찾기’ 기능을 통해 가짜 친구 역할을 해줄 수현이와 매칭해주고, ‘공유 앨범’ 기능을 통해 상황에 맞는 인증 사진을 제공합니다.\n수현이랑은 언젠가 수현이랑 서비스가 필요 없어질만큼 성에 대한 억압이 아닌 올바른 성교육을 지향하는 사회가 더 빨리 올 수 있도록 노력하고 있습니다.`,
    makers: {
      plan: ["이자민", "배승준"],
      design: ["권하영", "이민재", "이지원", "왕서희"],
      android: ["박세호", "진지현", "김윤서"],
      ios: ["우상욱", "정지원", "김예지"],
      server: ["민장규", "오세은"],
      web: [],
    },
    detail: "/data/detail/suhyun.png",
  },
  napzak: {
    overview: "/data/overview/napzak.png",
    logoImage: "/data/logo/napzak.png",
    productName: "납작마켓",
    type: "mobile",
    category: "쇼핑",
    description:
      "덕후들이 사랑하는 거래 공간, 납작마켓은 2D 캐릭터부터 가상(Virtual) 장르의 아이템까지, 납작한 것들만을 다루는 서브컬처 장르 전용 중고거래 서비스입니다. 취향에 맞는 상품 추천, 500여 개의 세분화된 장르 검색, 팔아요/구해요 등록을 통한 아이템 찾기까지, 덕후들의 거래를 더욱 쉽고 편리하게 만들어드립니다. ",
    makers: {
      plan: ["이해인", "이가현"],
      design: ["장혜린", "고명서"],
      android: ["김채린", "장재원", "김종명", "이석준", "이연진"],
      ios: ["조혜린", "조호근", "김한열", "박어진"],
      server: ["황혜린", "백세희"],
      web: [],
    },
    detail: "/data/detail/napzak.png",
  },
  shellin: {
    overview: "/data/overview/shellin.png",
    logoImage: "/data/logo/shellin.png",
    productName: "Shellin",
    type: "web",
    category: "생산성",
    description: "",
    makers: {
      plan: ["황민규", "이지민"],
      design: ["황민규", "노하은"],
      android: [],
      ios: [],
      web: ["문성희", "이지민", "김지원", "유승연"],
      server: ["조영주", "조민우"],
    },
    detail: "/data/detail/shellin.png",
  },
  makers: {
    overview: "/data/overview/makers.png",
    logoImage: "/data/logo/makers.png",
    productName: "SOPT makers",
    type: "web",
    category: "라이프스타일",
    description: "",
    makers: {
      plan: [],
      design: [],
      android: [],
      ios: [],
      web: [],
      server: [],
    },
    detail: "/data/detail/makers.png",
  },
};
