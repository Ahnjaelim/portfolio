let data = [
    {
        title : "자바 캠핑카",
        subtitle : "캠핑카 렌탈 웹어플리케이션",
        type : "팀 프로젝트 (리드)",
        stake : "50% 이상",
        date : "2023.01 ~ 2023.02 (6주)",
        backend : `<span class='java'><i class='fa-solid fa-mug-hot'></i> Java</span>,
        	<img src='img/pofol/icon_spring.gif' /> <span class='spring'>Spring 5.0</span>,
        	<i class="fa-brands fa-twitter"></i> MyBatis`,
        db : "MySQL",
        frontend : "HTML/CSS, JSTL, JavaScript(JQuery)",
        feature : "Calendar를 이용한 일정 예약, 일정 확인, 일정 취소, 정비소 검색, 대여회사 신청 등",
        desc : `<p>학원 강의 수강 중, 조장으로 선발되어 조원들을 이끌고 진행했던 첫 스프링 팀프로젝트입니다. 전업 디자이너로써 웹 어플리케이션 프로젝트의 진행 방식을 잘 알고있었기에 프로젝트를 지휘하는데는 큰 무리가 없었으며, 
        	당시 다른 친구들에 비해 비교적 스프링 숙지가 빠른 편이었기때문에 프로젝트 설계는 물론 조원들의 스프링 교육까지 같이 진행했습니다.</p>
        	<p>저는 해당 웹사이트에서 중추역할을 하는 렌탈 일정 예약, 예약 관리, 차량관리 파트를 맡았습니다. 밑에서 기술할 예정인 호텔 예약 프로젝트에서 Java의 Calendar를 한번 다룬 상태였기 때문에 기능 구현은 수월하게 작업할 수 있었습니다. 
        	프로젝트를 진행하며 날짜, 기간을 컨트롤 하는 부분은 생각보다 까다롭다는 것을 다시 한 번 느꼈습니다.</p>
        	<p>조원 구성 당시 걱정이 많은 상태였으나, 다행히도 조원들이 협조적이여서 결국엔 반에서 가장 안정적으로 스프링 팀 프로젝트를 마무리한 조가 되었습니다. 원래는 프로젝트가 끝나고 팀이 해체될 예정이었으나, 조원들의 요청으로 프로젝트 리드를 한 번 더 하게됐습니다.</p>
        	<p>단순 디자이너였던 저 역시 GitHub를 써본 적이 없었는데 이 프로젝트를 통해 GitHub사용을 시작했습니다. 위 프로젝트는 저의 원본 저장소를 팀원들이 Fork하여 머지하는 방식으로 협업이 진행되었습니다.</p>`,
        link1 : "https://drive.google.com/drive/folders/12vFNWEDk0T7joPT28WuTYBXdf3nrMxIx?usp=sharing",
        link2 : "https://github.com/Ahnjaelim/CampingcarGitRefine"
    },
    {
        title : "자바 캠핑카 관리자",
        subtitle : "캠핑카 렌탈 관리자 웹어플리케이션",
        type : "팀 프로젝트 (리드)",
        stake : "50% 이상",
        date : "2023.01 ~ 2023.02 (6주)",
         backend : `<span class='java'><i class='fa-solid fa-mug-hot'></i> Java</span>,
        	<img src='img/pofol/icon_spring.gif' /> <span class='spring'>Spring</span>,
        	<i class="fa-brands fa-twitter"></i> MyBatis`,
        db : "MySQL",
        frontend : "HTML/CSS, JSTL, JavaScript(JQuery)",
        feature : "Calendar를 이용한 일정 예약, 일정 확인, 일정 취소, 정비소 검색, 대여회사 신청 등",
        desc : `<p>위에서 기술한 프로젝트의 관리자 페이지입니다. 당연하게도 보여지는 사용자 사이트보다 더 많은 작업을 필요로 했고, 예약 테이블같은 경우 테이블은 1개였으나 핵심 테이블인 만큼 이를 사용하게 될 클라이언트의 편의를 위해 리스트 페이지만 다른 형태로 3번 구현했습니다.</p>
        	<p>그밖에 관리자 대쉬보드에 간단한 통계 쿼리를 구현해봤습니다.</p>`,
        link1 : "https://drive.google.com/drive/folders/12vFNWEDk0T7joPT28WuTYBXdf3nrMxIx?usp=sharing",
        link2 : "https://github.com/Ahnjaelim/CampingcarGitRefine"	
    },
    {
        title : "자바 샵",
        subtitle : "쇼핑몰 웹어플리케이션",
        type : "개인 프로젝트",
        date : "2023.03 ~ 2023.03 (1주)",
        backend : `<span class='java'><i class='fa-solid fa-mug-hot'></i> Java</span>,
        	<img src='img/pofol/icon_boot.gif' /> <span class='spring'>Spring Boot</span>,
        	<img src='img/pofol/icon_jpa.gif' /> <span class='java'>JPA</span>,
        	<img src='img/pofol/icon_querydsl.gif' /> <span class="querydsl">Querydsl</span>`,
        db : "MariaDB",
        frontend : "HTML/CSS, Thymeleaf, JavaScript(JQuery)",
        feature : "상품 관리, 다중 이미지 업로드 관리, Axios API를 활용한 비동기 데이터 컨트롤, 스프링 시큐리티, 카카오 로그인 등",
        desc : `<p>학원 강의는 스프링까지였고, 위의 팀프로젝트가 끝나고 개인적인 학습 욕구로 인해 스프링 부트를 따로 학습했습니다. 스프링 부트를 막 학습하고 이를 복습하기 위해 개인적으로 진행했던 프로젝트입니다.
        	당시에 한 번 따라쳤을 때 잘 와닿지 않던 JPA를 프로젝트를 진행함에 따라 서서히 이해하게 됐습니다.</p>
        	<p>스프링에서 마이바티스를 썼을 때 상당히 매력적인 프레임워크라고 느꼈는데, 메서드 하나로 데이터를 컨트롤할 수 있는 JPA, 그리고 이를 도와주는 Querydsl 역시 아주 재미있는 기술임을 느꼈습니다. JPA와 더불어 스프링 부트의 시큐리티, OAuth2 라이브러리를 이용한 카카오 로그인까지 간단히 구현해봤습니다.</p>`,
        link1 : "#",
        link2 : "https://github.com/Ahnjaelim/JavashopGit"
        
    },     
    {
        title : "자바 카페",
        subtitle : "카페 관리 웹어플리케이션",
        type : "팀 프로젝트 (리드)",
        stake : "40% 이상",
        date : "2023.03 ~ 2023.03 (2주)",
         backend : `<span class='java'><i class='fa-solid fa-mug-hot'></i> Java</span>,
        	<img src='img/pofol/icon_boot.gif' /> <span class='spring'>Spring Boot</span>,
        	<img src='img/pofol/icon_jpa.gif' /> <span class='java'>JPA</span>,
        	<img src='img/pofol/icon_querydsl.gif' /> <span class="querydsl">Querydsl</span>`,
        db : "MariaDB",
        frontend : "HTML/CSS, Thymeleaf, JavaScript(JQuery)",
        feature : "유사 키오스크 주문 기능, 메뉴 관리, 재고 관리 등",
        desc : `<p>앞서 캠핑카 프로젝트에서 기술했듯, 조원들의 요청으로 한 번 더 리드를 하게된 프로젝트입니다. 캠핑카 프로젝트가 끝나고 부트를 따로 공부하고 있던 저는 저의 권력(?)을 이용해 새 프로젝트를 부트로 진행할 것을 제안했습니다.
        	저 역시 부트를 공부한지 얼마 되지 않아 조원들과 다같이 스터디처럼 책 한권을 두고 부트 공부를 시작했는데, 책에 있던 오탈자를 잡아내는 등 이 과정이 아주 재미있던걸로 기억합니다.</p>
        	<p>확실히 따로 따로 공부했던 스프링과 달리 책 한권을 기준으로 두고 진행한 것과 더불어 스프링 부트를 기반으로 한 프로젝트이다 보니 환경설정면에선 이전 프로젝트에 비해 아주 수월했습니다. 아예 부트에 대한 베이스가 없었기때문에 학습과 병행한 프로젝트라 이전 팀 프로젝트에 비해 규모는 작은편입니다.</p>`,
        link1 : "#",
        link2 : "https://github.com/Ahnjaelim/JavacafeGit"
        
    }, 
    {
        title : "자바 호텔",
        subtitle : "호텔 예약 웹어플리케이션",
        type : "개인 프로젝트",
        date : "2023.01 ~ 2023.01 (1주)",
        backend : `<span class='java'><i class='fa-solid fa-mug-hot'></i> Java</span>,
        	<img src='img/pofol/icon_spring.gif' /> <span class='spring'>Spring</span>,
        	<i class="fa-brands fa-twitter"></i> MyBatis`,
        db : "MariaDB",
        frontend : "HTML/CSS, JSTL, JavaScript(JQuery)",
        feature : "호텔 객실 관리 기능, 객실 예약 관리 기능 등",
        desc : `<p>스프링을 막 배우기 시작했을 때 작업한 저의 첫 스프링 프로젝트입니다. 달력 및 일정 기능은 어플리케이션에 있어 필수 기능이라 생각했던 저는, 일정 관리 기능 구현을 목표로 작업을 시작했습니다.</p>
        	<p>아주 예전에 규모가 작은 펜션 웹사이트에서 중복 객실 예약으로 인해 휴가를 망쳐본 기억이 있던 저는, 대체 왜 날짜 중복 예약을 막지 못했던 걸까?라는 의문이 프로젝트의 시발점이었습니다. 
        	이 때 Java의 Calendar 기능을 익히기 시작했고 어느 정도 숙달이 된 후 다음 프로젝트에서 좀 더 디테일하게 날짜를 컨트롤 할 수 있개 됐습니다.</p>`,
        link1 : "#",
        link2 : "https://github.com/Ahnjaelim/JavahotelGit"
        
    }    
]