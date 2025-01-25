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
      "confeti는 이런 서비스입니다. confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스입니다.confeti는 이런 서비스.",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
      plan: [],
      design: [],
      android: [],
      ios: [],
      web: [],
      server: [],
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
