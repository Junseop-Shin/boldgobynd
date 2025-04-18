import {
  AUTONOVA_01,
  AUTONOVA_02,
  AUTONOVA_03,
  AUTONOVA_04,
  AUTONOVA_05,
  AUTONOVA_06,
  AUTONOVA_07,
  AUTONOVA_08,
  AUTONOVA_09,
  AUTONOVA_MAIN,
  AUTONOVA_THUMBNAIL,
  BDERMATIC_01,
  BDERMATIC_02,
  BDERMATIC_03,
  BDERMATIC_04,
  BDERMATIC_05,
  BDERMATIC_06,
  BDERMATIC_07,
  BDERMATIC_MAIN,
  CAFE385_01,
  CAFE385_02,
  CAFE385_03,
  CAFE385_04,
  CAFE385_05,
  CAFE385_06,
  CAFE385_MAIN,
  CAFE385_THUMBNAIL,
  CAROUSEL_AD1,
  CAROUSEL_AD2,
  CAROUSEL_AD3,
  CAROUSEL_PACKAGE1,
  CAROUSEL_PACKAGE10,
  CAROUSEL_PACKAGE11,
  CAROUSEL_PACKAGE12,
  CAROUSEL_PACKAGE2,
  CAROUSEL_PACKAGE3,
  CAROUSEL_PACKAGE4,
  CAROUSEL_PACKAGE5,
  CAROUSEL_PACKAGE6,
  CAROUSEL_PACKAGE7,
  CAROUSEL_PACKAGE8,
  CAROUSEL_PACKAGE9,
  CHAWAN_01,
  CHAWAN_02,
  CHAWAN_03,
  CHAWAN_04,
  CHAWAN_MAIN,
  CHAWAN_THUMBNAIL,
  CINNAMONHAUS_01,
  CINNAMONHAUS_02,
  CINNAMONHAUS_03,
  CINNAMONHAUS_04,
  CINNAMONHAUS_05,
  CINNAMONHAUS_MAIN,
  CINNAMONHAUS_THUMBNAIL,
  DIBAMBI_01,
  DIBAMBI_02,
  DIBAMBI_03,
  DIBAMBI_04,
  DIBAMBI_05,
  DIBAMBI_06,
  DIBAMBI_07,
  DIBAMBI_08,
  DIBAMBI_09,
  DIBAMBI_10,
  DIBAMBI_11,
  DIBAMBI_12,
  DIBAMBI_13,
  DIBAMBI_14,
  DIBAMBI_15,
  DIBAMBI_16,
  DIBAMBI_MAIN,
  DIBAMBI_THUMBNAIL,
  JACKPOD_01,
  JACKPOD_02,
  JACKPOD_03,
  JACKPOD_04,
  JACKPOD_MAIN,
  JACKPOD_THUMBNAIL,
  ONYXHIELD_01,
  ONYXHIELD_02,
  ONYXHIELD_03,
  ONYXHIELD_04,
  ONYXHIELD_05,
  ONYXHIELD_06,
  ONYXHIELD_07,
  ONYXHIELD_08,
  ONYXHIELD_09,
  ONYXHIELD_10,
  ONYXHIELD_11,
  ONYXHIELD_12,
  ONYXHIELD_13,
  ONYXHIELD_14,
  ONYXHIELD_MAIN,
  ONYXHIELD_THUMBNAIL,
  PEALTH_01,
  PEALTH_02,
  PEALTH_03,
  PEALTH_04,
  PEALTH_05,
  PEALTH_06,
  PEALTH_07,
  PEALTH_08,
  PEALTH_MAIN,
  PEALTH_THUMBNAIL,
  PRODUCTION42_01,
  PRODUCTION42_02,
  PRODUCTION42_03,
  PRODUCTION42_04,
  PRODUCTION42_05,
  PRODUCTION42_06,
  PRODUCTION42_07,
  PRODUCTION42_08,
  PRODUCTION42_09,
  PRODUCTION42_10,
  PRODUCTION42_MAIN,
  PRODUCTION42_THUMBNAIL,
  RAYNO_01,
  RAYNO_02,
  RAYNO_03,
  RAYNO_04,
  RAYNO_05,
  RAYNO_06,
  RAYNO_07,
  RAYNO_08,
  RAYNO_MAIN,
  RAYNO_THUMBNAIL,
  VEGREEK_01,
  VEGREEK_02,
  VEGREEK_03,
  VEGREEK_04,
  VEGREEK_05,
  VEGREEK_MAIN,
  VEGREEK_THUMBNAIL,
} from "./image";

export interface Work {
  title: string;
  titleDesc: string;
  categories: string[];
  categoryDesc: string;
  workDetail: string;
  client: string;
  year: string;
  thumbnailImage: string;
  mainImage: string;
  allImages: string[];
}

export const works: Work[] = [
  {
    title: "dibambi",
    titleDesc: "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI",
    categories: ["BRANDING", "PACKAGE"],
    categoryDesc: "브랜드리뉴얼 및 제품디자인",
    workDetail:
      "고감도 홈&라이프스타일 큐레이션 플랫폼으로서 새롭게 자사 제품을 론칭하게 된 ‘디밤비’의 브랜드리뉴얼과 제품 패키지 디자인 작업을 진행하였습니다. 이번 브랜드 리뉴얼을 통해 소비자와의 감성적 교감을 강화하고, 프리미엄 라이프스타일 브랜드로서의 정체성을 확립하는 데 중점을 두었습니다. 감성, 라이프스타일, 유연함, 모던, 조형적 균형과 같은 디밤비의 가치와 정체성을 반영하여 모서리가 둥근 구조적 형태의 로고를 제작하였으며, 이를 다양한 방식으로 해체, 조합 및 확장하여 어플리케이션 디자인에 적용함으로써 브랜드의 조형적 특징을 강조하고 일관된 비주얼 아이덴티티를 구축했습니다. 로고의 ‘D’와 ‘B’의 결합에서 도출해낸 다양한 VISUAL ELEMENTS를 그래픽 모티브로 삼아 패키지 디자인에 적용하여 고감도의 제품 라인업을 완성하였으며, 이를 통해 브랜드 인지도를 상승시키고, 소비자 충성도를 확보하여 브랜드 가치를 확장하였습니다. 고유한 비주얼 언어와 통합된 디자인 요소는 소비자에게 강렬하고 일관된 인상을 남기며, 브랜드의 차별화된 정체성을 더욱 강화합니다. 이를 통해 디밤비는 시장에서의 경쟁력을 높이고, 장기적인 고객 관계를 구축할 수 있는 기반을 마련하였습니다.",
    client: "EPOLIUM",
    year: "2024",
    thumbnailImage: DIBAMBI_THUMBNAIL,
    mainImage: DIBAMBI_MAIN,
    allImages: [
      DIBAMBI_01,
      DIBAMBI_02,
      DIBAMBI_03,
      DIBAMBI_04,
      DIBAMBI_05,
      DIBAMBI_06,
      DIBAMBI_07,
      DIBAMBI_08,
      DIBAMBI_09,
      DIBAMBI_10,
      DIBAMBI_11,
      DIBAMBI_12,
      DIBAMBI_13,
      DIBAMBI_14,
      DIBAMBI_15,
      DIBAMBI_16,
    ],
  },
  {
    title: "rayno",
    titleDesc: "토탈 윈도우 필름 전문기업 RAYNO",
    categories: ["AD·EDITORIAL", "GRAPHIC DESIGN"],
    categoryDesc: "윈도우 필름 심볼 개발 및 온·오프라인 ASSET 제작",
    workDetail:
      "토탈 윈도우 필름 전문기업 레이노(RAYNO)의 팬텀 S/F 시리즈, 얼티넘, 크로마 제품군을 위한 메인 심볼을 개발하고, 이를 바탕으로 디스플레이 보드 및 온·오프라인 홍보 콘텐츠를 제작하였습니다. 각 제품의 메인 심볼은 자동차와 어울리는 구조적이고 파워풀한 셰입을 기반으로 디자인되었으며, 견고한 형태감을 강조하여 기술적 신뢰감을 높이는 데 중점을 두었습니다. 디스플레이 보드, 포스터, SNS 콘텐츠 등 다양한 홍보물에서는 제품별 심볼을 핵심 그래픽 요소로 활용하였으며, 굵은 라인과 감각적인 레이아웃을 적용하여 간결하면서도 강렬한 비주얼을 완성하였습니다. 또한, 시각적으로 정돈된 정보 구조를 통해 소비자들이 핵심 정보를 한눈에 이해할 수 있도록 구성하였으며, 브랜드의 프리미엄 가치를 극대화하는 디자인을 구현하였습니다.",
    client: "RAYNO KOREA",
    year: "2023-2024",
    thumbnailImage: RAYNO_THUMBNAIL,
    mainImage: RAYNO_MAIN,
    allImages: [
      RAYNO_01,
      RAYNO_02,
      RAYNO_03,
      RAYNO_04,
      RAYNO_05,
      RAYNO_06,
      RAYNO_07,
      RAYNO_08,
    ],
  },
  {
    title: "jackpod",
    titleDesc: "더현대 프레젠트(THE HYUNDAI PRESENT) with JACKPOD NEWYORK",
    categories: ["PACKAGE", "GRAPHIC DESIGN"],
    categoryDesc: "스마트워치 스트랩 패키지 제작",
    workDetail:
      "가죽 스마트워치 스트랩 브랜드 ‘잭팟뉴욕(JACKPOD NEWYORK)’과 더현대서울의 자체 편집숍 ‘THE PRESENT’의 콜라보 제품을 위한 패키지 디자인을 진행하였습니다. 패키지는 더현대서울의 시그니처 컬러인 진녹색과 연분홍색, 그리고 제품이 입점하는 ‘더프레젠트’의 분홍색과 파랑색을 활용하여 두 가지 버전으로 제작되었습니다. 이를 통해 브랜드 아이덴티티를 유지하면서도 협업의 의미를 시각적으로 조화롭게 표현하고자 했습니다. 디자인에서는 볼드한 타이포그래피와 세련된 레이아웃을 적용하여 심플하면서도 독창적인 감각을 강조하였으며, 패키지가 단순한 보호재를 넘어 브랜드의 정체성을 전달하는 요소가 될 수 있도록 설계했습니다. 이 패키지를 통해 JACKPOD NEWYORK과 THE PRESENT의 협업 제품이 단순한 액세서리를 넘어, 소장 가치 있는 아이템으로 자리 잡을 수 있도록 완성도를 극대화하였습니다.",
    client: "JACKPOD NEWYORK",
    year: "2024",
    thumbnailImage: JACKPOD_THUMBNAIL,
    mainImage: JACKPOD_MAIN,
    allImages: [
      JACKPOD_THUMBNAIL,
      JACKPOD_01,
      JACKPOD_02,
      JACKPOD_03,
      JACKPOD_04,
    ],
  },
  {
    title: "production42",
    titleDesc: "영상전문프로덕션 PRODUCTION 4:2",
    categories: ["BRANDING"],
    categoryDesc: "로고 및 브랜드가이드 제작",
    workDetail:
      "영상전문프로덕션, 프로덕션4:2의 로고 및 브랜드가이드를 제작하였습니다. 프로덕션4:2의 메인 심볼은 기하학적 요소(원, 삼각형, 사각형, 사선)를 사용하여 현대적인 간결함과 구조적 균형감을 이루도록 설계되었습니다. 레트로한 감성을 한 스푼 담되, 미니멀리즘을 극대화하여 추상적이면서도 강렬한 인상을 줍니다. 컬러는 현대적인 블랙과 레드가 메인이지만 톤 다운된 레트로 컬러들을 보조컬러로 활용해 세련된 느낌과 따뜻한 감성을 동시에 전달하고 있습니다. 이 조화는 브랜드의 정체성을 잘 나타내며, 복잡하지 않은 구성 안에서도 시각적 다양성과 집중도를 높이는 데 도움을 줍니다. 단순하면서도 강렬한 비주얼 요소는 브랜드의 메시지를 효과적으로 전달하고, 영상 콘텐츠와 결합되었을 때 브랜드 아이덴티티를 직관적으로 전달하여 시청자가 자연스럽게 브랜드를 기억할 수 있도록 기획·제작되었습니다.",
    client: "PRODUCTION4:2",
    year: "2024-2025",
    thumbnailImage: PRODUCTION42_THUMBNAIL,
    mainImage: PRODUCTION42_MAIN,
    allImages: [
      PRODUCTION42_01,
      PRODUCTION42_02,
      PRODUCTION42_03,
      PRODUCTION42_04,
      PRODUCTION42_05,
      PRODUCTION42_06,
      PRODUCTION42_07,
      PRODUCTION42_08,
      PRODUCTION42_09,
      PRODUCTION42_10,
    ],
  },
  {
    title: "bdermatic",
    titleDesc: "자연주의 스킨케어 브랜드 B:DERMATIC",
    categories: ["PACKAGE", "LOGO RENEWAL"],
    categoryDesc: "로고 리뉴얼 및 비건 라인 패키지 제작",
    workDetail:
      "B:DERMATIC은 자연주의 철학을 바탕으로 한 스킨케어 브랜드로, 이번 리뉴얼을 통해 더욱 고급스럽고 감성적인 브랜드 아이덴티티를 구축하였습니다. 로고 디자인은 모던하고 정제된 형태로 다듬어 브랜드의 신뢰도를 강화하였으며, 메인 컬러로 톤다운된 핑크 컬러를 적용하여 차분하면서도 감각적인 분위기를 연출하였습니다. 로션, 크림, 수딩젤, 엉덩이클렌저, 선크림, 올인원워시로 구성된 B:DERMATIC 제품 라인의 패키지 디자인은 미니멀한 타이포그래피와 제품별 특징을 상징하는 심볼을 메인 요소로 활용하여 직관적인 정보 전달이 가능하도록 구성되었습니다. 불필요한 요소를 배제하고 간결한 레이아웃을 유지함으로써 브랜드의 본질적인 자연주의 가치를 강조하였습니다. 이번 리뉴얼을 통해 B:DERMATIC의 브랜드 철학을 더욱 선명하게 전달하고, 소비자들에게 감성적이면서도 신뢰할 수 있는 제품 경험을 제공하는 것을 목표로 하였습니다.",
    client: "EPOLIUM",
    year: "2024",
    thumbnailImage: BDERMATIC_MAIN,
    mainImage: BDERMATIC_MAIN,
    allImages: [
      BDERMATIC_01,
      BDERMATIC_02,
      BDERMATIC_03,
      BDERMATIC_04,
      BDERMATIC_05,
      BDERMATIC_06,
      BDERMATIC_07,
    ],
  },
  {
    title: "onyxhield",
    titleDesc: "프리미엄 OPTICAL PPF 브랜드 ONYXHIELD",
    categories: ["BRANDING", "AD·EDITORIAL"],
    categoryDesc: "온·오프라인 ASSET 제작",
    workDetail:
      "오닉쉴드 브랜드 아이덴티티 강화를 목표로 다양한 오프라인 및 온라인 자산을 제작했습니다. 2023-2024 SEMA SHOW를 위한 브랜드 메인 브로셔 작업, 샘플북, 리플렛, 시공내역서, X배너 등의 오프라인 자산을 비롯해, 네이버 광고 배너와 웹 포스터 등 온라인 자산까지 포함하여 전체적인 브랜드 홍보자산의 디자인 방향성을 잡았습니다. 더하여 기존의 심플하고 정적인 느낌의 오닉쉴드 로고를 보완하는 보다 다채롭고 트렌디한 느낌의 서브 로고를 개발하였습니다. 이 서브 로고는 오닉쉴드의 고급스러운 이미지를 유지하면서도, 캐주얼하고 유연한 디자인 요소를 추가하여 티셔츠, 모자, 굿즈 등에 활용할 수 있도록 설계되었습니다. 이를 통해 브랜드의 젊은층 및 다양한 소비자들과의 연결을 강화하고, 더 넓은 시장에서 브랜드 인지도를 확대할 수 있는 기반을 마련하고자 했습니다.",
    client: "ONYXHIELD",
    year: "2023-2024",
    thumbnailImage: ONYXHIELD_THUMBNAIL,
    mainImage: ONYXHIELD_MAIN,
    allImages: [
      ONYXHIELD_01,
      ONYXHIELD_02,
      ONYXHIELD_03,
      ONYXHIELD_04,
      ONYXHIELD_05,
      ONYXHIELD_06,
      ONYXHIELD_07,
      ONYXHIELD_08,
      ONYXHIELD_09,
      ONYXHIELD_10,
      ONYXHIELD_11,
      ONYXHIELD_12,
      ONYXHIELD_13,
      ONYXHIELD_14,
    ],
  },
  {
    title: "chawan",
    titleDesc: "블랜딩찻집 CAFE CHAWAN",
    categories: ["PACKAGE", "GRAPHIC DESIGN"],
    categoryDesc: "차완마음강화티_POSTEACARD 패키지 제작",
    workDetail:
      "‘차완마음강화프로젝트’의 첫 번째 굿즈, 차완마음강화티의 패키지를 제작하였습니다. 이 제품은 ‘강화도’라는 지역적 뿌리를 기반으로 하면서도, 마음과 마음을 나누고 스스로의 마음을 강화하자는 따뜻한 위로의 메시지를 담고 있는 특별한 차입니다. 패키지 디자인은 엽서 컨셉을 바탕으로 기획되어 차를 담은 엽서라는 의미를 담아 ‘POSTEACARD’라는 메시지 차(Tea) 제품으로 제작되었으며, 소비자가 직접 작은 메시지를 적을 수 있도록 디자인 되었습니다. 디자인적으로는 빈티지한 감성과 따뜻한 분위기를 강조했습니다. 짙은 녹색과 부드러운 파스텔 컬러의 조화를 통해 차분하고 고급스러운 무드를 연출했으며, 차완의 앤티크한 감성과 ‘강화’라는 지역적 특색을 자연스럽게 녹여냈습니다. 이번 패키지를 통해 차 한 잔을 마시는 순간이 단순한 음용을 넘어, 따뜻한 마음을 주고받는 특별한 경험으로 확장될 수 있기를 기대합니다.",
    client: "CHAWAN",
    year: "2024",
    thumbnailImage: CHAWAN_THUMBNAIL,
    mainImage: CHAWAN_MAIN,
    allImages: [CHAWAN_THUMBNAIL, CHAWAN_01, CHAWAN_02, CHAWAN_03, CHAWAN_04],
  },
  {
    title: "vegreek",
    titleDesc: "홈&프리미엄 비건 두유 그릭요거트 브랜드 VEGREEK",
    categories: ["BRANDING", "PACKAGE"],
    categoryDesc: "그릭요거트 제품 리브랜딩",
    workDetail:
      "프리미엄 비건 두유 그릭요거트 브랜드 VEGREEK의 리브랜딩을 진행하였습니다. 건강과 웰빙을 중시하는 소비자, 비건 및 채식주의자, 그리고 젊은 세대의 라이프스타일을 반영하여 브랜드의 정체성을 재정립하였습니다. 오가닉하고 자연 친화적인 제품 특성을 강조하면서도 정제된 디자인을 적용해, 제품의 본질을 직관적으로 전달하는데 집중하였습니다. 로고는 V와 G를 결합한 심볼릭한 형태로 설계하여 브랜드의 개성을 담았으며, 채도를 낮춘 그린 계열의 컬러는 신뢰감을 주면서도 VEGREEK만의 자연적이고 균형 잡힌 이미지를 표현합니다. 패키지 디자인은 미니멀한 레이아웃과 색상조합을 통해 깔끔하면서도 감각적인 분위기를 연출하였으며, 건강하고 깨끗한 이미지를 유지하면서도 젊고 세련된 무드가 돋보이도록 구성되었습니다. 이번 리브랜딩을 통해 VEGREEK는 차별화된 브랜드 경험을 제공하며, 비건 식품 시장에서 더욱 견고한 입지를 다질 수 있도록 하였습니다.",
    client: "TRUEWELLS",
    year: "2024",
    thumbnailImage: VEGREEK_THUMBNAIL,
    mainImage: VEGREEK_MAIN,
    allImages: [
      VEGREEK_THUMBNAIL,
      VEGREEK_01,
      VEGREEK_02,
      VEGREEK_03,
      VEGREEK_04,
      VEGREEK_05,
    ],
  },
  {
    title: "autonava",
    titleDesc: "프리미엄 카워시 서비스 브랜드 AUTONOVA",
    categories: ["AD·EDITORIAL", "GRAPHIC DESIGN"],
    categoryDesc: "온·오프라인 ASSET 제작",
    workDetail:
      "프리미엄 카워시 서비스 오토노바의 '최상의 세차 경험을 제공'이라는 비전과 브랜드 아이덴티티를 시각적으로 구현한 다양한 홍보 자산을 제작하였습니다. 브랜드의 중심 컬러인 레드를 메인으로, 물방울과 버블 그래픽을 활용하여 세차 서비스의 특성을 직관적으로 전달했습니다. 각 디자인 요소는 모던하고 트렌디한 감각을 강조하며, 브랜드의 고급스러움과 실용성을 동시에 표현하고자 했습니다. 본 프로젝트는 브랜드 메인 디스플레이보드, 상세페이지, SNS 콘텐츠, X배너 등 다양한 온라인 및 오프라인 자산을 포함하며 각 자산은 브랜드 메시지를 명확히 전달하는 동시에, 고객이 서비스를 쉽게 인식하고 경험할 수 있도록 설계되었습니다. 현대적인 디자인 언어와 강렬한 색상 대비를 통해 오토노바의 세차 서비스가 지닌 특별함을 시각적으로 강조하였으며, 차별화된 브랜드 이미지를 구축하는 데 중점을 두었습니다.",
    client: "AUTONOVA",
    year: "2024",
    thumbnailImage: AUTONOVA_THUMBNAIL,
    mainImage: AUTONOVA_MAIN,
    allImages: [
      AUTONOVA_01,
      AUTONOVA_02,
      AUTONOVA_03,
      AUTONOVA_04,
      AUTONOVA_05,
      AUTONOVA_06,
      AUTONOVA_07,
      AUTONOVA_08,
      AUTONOVA_09,
    ],
  },
  {
    title: "pealth",
    titleDesc: "프리미엄 반려동물 라이프 스타일 브랜드 PEALTH",
    categories: ["PACKAGE", "GRAPHIC DESIGN"],
    categoryDesc: "펫용 제품 패키지 제작",
    workDetail:
      "반려동물을 위한 프리미엄 라이프 스타일 브랜드 PEALTH(펠스)의 화식, 트릿, 그리고 영양제 패키지를 제작하였습니다. PEALTH의 패키지는 기존 반려동물 제품과 차별화된 비비드한 컬러, 위트 있는 타이포그래피, 감각적인 패키지 구성을 통해 유니크하고 스타일리시한 펫 라이프를 제안하며, 브랜드의 철학을 소비자에게 직관적으로 전달할 수 있도록 전략적으로 구성되었습니다. 카테고리별로 확연히 구분되는 컬러 시스템과 대담한 타이포그래피를 활용해 브랜드의 개성을 강조했으며, 제품별 주요 기능을 쉽게 이해할 수 있도록 아이콘을 배치하여 소비자가 한눈에 제품의 특장점을 파악할 수 있도록 구성하였습니다. 또한, 명확한 정보 전달과 균형 잡힌 레이아웃을 통해 세련된 가독성을 유지하면서도 신뢰감을 높였으며, 감각적인 디자인 요소를 더해 반려동물과 보호자가 함께하는 건강하고 즐거운 라이프 스타일을 시각적으로 표현하였습니다.",
    client: "SGLOBAL",
    year: "2023-2024",
    thumbnailImage: PEALTH_THUMBNAIL,
    mainImage: PEALTH_MAIN,
    allImages: [
      PEALTH_01,
      PEALTH_02,
      PEALTH_03,
      PEALTH_04,
      PEALTH_05,
      PEALTH_06,
      PEALTH_07,
      PEALTH_08,
    ],
  },
  {
    title: "cafe385",
    titleDesc: "CAFE385",
    categories: ["PACKAGE", "GRAPHIC DESIGN"],
    categoryDesc: "부산 바다 소금 카라멜 BUSAN CARAMEL 패키지 제작",
    workDetail:
      "부산 카페 385의 바다소금카라멜 패키지를 제작하였습니다. '광안대교'라는 부산의 대표적인 랜드마크를 메인 모티브로 삼아 미니멀하면서도 클래식한 엠블럼을 구성하였고, 바다를 떠올리게 하는 선명한 블루와 아이보리 컬러 조합을 메인 팔레트로 선정하여 브랜드의 시각적 아이덴티티를 강화하였습니다. 이를 통해 제품에 부산을 대표하는 지역 굿즈로서의 정체성을 부여하고, 브랜드의 지역적 가치를 효과적으로 전달하고자 하였습니다. 패키지 내부에는 바다의 물결을 형상화한 그래픽 패턴을 활용하여, 부산의 고유의 미감을 세련되게 풀어내고 유니크하고 감각적인 분위기를 살렸습니다. 부산을 방문하는 여행객들이 부산의 정서를 오래도록 간직할 수 있는 특별한 아이템으로 제작되었으며, 현재는 부산을 상징하는 굿즈로 자리매김하였습니다.",
    client: "CAFE385",
    year: "2023",
    thumbnailImage: CAFE385_THUMBNAIL,
    mainImage: CAFE385_MAIN,
    allImages: [
      CAFE385_01,
      CAFE385_02,
      CAFE385_03,
      CAFE385_04,
      CAFE385_05,
      CAFE385_06,
    ],
  },
  {
    title: "cinnamonhaus",
    titleDesc: "수제 츄러스 전문점 시나몬하우스 CINNAMONHAUS",
    categories: ["AD·EDITORIAL", "GRAPHIC DESIGN"],
    categoryDesc: "창업박람회 압축브로셔 제작",
    workDetail:
      "시나몬하우스(CINNAMON HAUS)의 창업박람회용 압축 브로슈어를 제작하였습니다. 브랜드의 정체성을 명확하게 드러내면서도 창업 정보를 효과적으로 전달하는 데 중점을 두었습니다. 전체적으로 빈티지한 질감과 수작업이 연상되는 콜라주 그래픽, 다양한 폰트를 활용해 브랜드의 개성을 더욱 뚜렷하게 표현하였습니다. 또한, 브랜드와 잘 어울리는 컬러 팔레트를 적용해 브랜드 아이덴티티를 강화하고, 감각적인 분위기를 연출하였습니다. 레이아웃은 가독성과 정보 전달력을 극대화하는 방향으로 구성하였습니다. 창업 비용, 수익 모델, 소비자 반응 등 핵심 정보를 인포그래픽과 시각적 요소로 정리해 한눈에 파악할 수 있도록 했으며, 텍스트 배치는 간결하고 직관적으로 정리해 핵심 정보를 쉽게 이해할 수 있도록 설계했습니다. 이 브로슈어는 단순한 홍보물을 넘어, 브랜드의 철학과 스토리를 자연스럽게 경험할 수 있는 도구로 활용될 수 있도록 기획되었습니다. 이를 통해 시나몬하우스가 예비 창업자들에게 브랜드의 차별성과 경쟁력을 효과적으로 전달하고, 감각적인 디자인과 직관적인 정보 구성을 통해 전문성과 신뢰도를 높이며 창업에 대한 관심을 유도하는 효과를 가져갈 수 있도록 하였습니다.",
    client: "CINNAMON HAUS",
    year: "2025",
    thumbnailImage: CINNAMONHAUS_THUMBNAIL,
    mainImage: CINNAMONHAUS_MAIN,
    allImages: [
      CINNAMONHAUS_01,
      CINNAMONHAUS_02,
      CINNAMONHAUS_03,
      CINNAMONHAUS_04,
      CINNAMONHAUS_05,
    ],
  },
];

export const galleryImages = works.map((work) => {
  return {
    title: work.title,
    titleDesc: work.titleDesc,
    categories: work.categories,
    categoryDesc: work.categoryDesc,
    thumbnailImage: work.thumbnailImage,
  };
});

export const workDetailFooterImages = works.map((work) => {
  return {
    title: work.title,
    titleDesc: work.titleDesc,
    thumbnailImage: work.thumbnailImage,
  };
});

export const carouselImages = [
  {
    thumbnailImage: CAROUSEL_AD1,
    titleDesc: "AD 1",
  },
  {
    thumbnailImage: CAROUSEL_AD2,
    titleDesc: "AD 2",
  },
  {
    thumbnailImage: CAROUSEL_AD3,
    titleDesc: "AD 3",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE1,
    titleDesc: "PACKAGE 1",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE2,
    titleDesc: "PACKAGE 2",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE3,
    titleDesc: "PACKAGE 3",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE4,
    titleDesc: "PACKAGE 4",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE5,
    titleDesc: "PACKAGE 5",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE6,
    titleDesc: "PACKAGE 6",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE7,
    titleDesc: "PACKAGE 7",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE8,
    titleDesc: "PACKAGE 8",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE9,
    titleDesc: "PACKAGE 9",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE10,
    titleDesc: "PACKAGE 10",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE11,
    titleDesc: "PACKAGE 11",
  },
  {
    thumbnailImage: CAROUSEL_PACKAGE12,
    titleDesc: "PACKAGE 12",
  },
];
